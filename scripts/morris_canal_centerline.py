"""
Morris Canal Centerline Extractor v7
--------------------------------------
Fixes:
- OBJECTID 48: MultiPolygon — use Part 0 only (east Montville strip), skip Part 1 (Boonton)
- 51→91: hardcoded bridge fragments in lat-descending order
- Skip Newark detour fragments (92, 93, 129, 159) in auto gap-fill
- Gap between 31 and 82 still auto-filled west→east

Requirements:
    pip install geopandas shapely scipy numpy

Usage:
    python morris_canal_centerline.py --input canals.geojson --output morris_canal.csv --points 500
"""

import argparse
import sys
import numpy as np
import geopandas as gpd
from shapely.geometry import LineString
from scipy.interpolate import splprep, splev
import csv

# Main backbone west→east (gap fillers inserted after 31).
# OBJECTID 48 removed — disconnected MultiPolygon causing loops
# OBJECTID 91 removed — complex polygon with 204 vertices causing JC loops
CORRECT_OBJECTID_ORDER = [26, 75, 40, 63, 64, 61, 54, 34, 33, 30, 31, 82, 42, 53, 51]

# 51 → Jersey City: No bridge segments. Add manual endpoint for JC terminus.
BRIDGE_51_TO_91 = []

# Newark detour — never use in auto gap-fill or route.
SKIP_OIDS = {92, 93, 129, 159}

# MultiPolygon: use only this part index (if needed in future)
MULTIPOLYGON_PART = {}

FORCE_FLIP = {30, 51, 82, 85}

# Manual Jersey City endpoint (Lafayette Pool area) - add after all segments
MANUAL_ENDPOINT = (-74.0390, 40.7120)  # lon, lat


def _single_polygon_centerline(polygon, num_slices=200):
    mrr = polygon.minimum_rotated_rectangle
    coords = list(mrr.exterior.coords)
    e1 = np.array(coords[1]) - np.array(coords[0])
    e2 = np.array(coords[2]) - np.array(coords[1])
    l1, l2 = np.linalg.norm(e1), np.linalg.norm(e2)
    if l1 >= l2:
        axis, start, end = e1/l1, np.array(coords[0]), np.array(coords[1])
    else:
        axis, start, end = e2/l2, np.array(coords[1]), np.array(coords[2])

    total_len = np.linalg.norm(end - start)
    perp = np.array([-axis[1], axis[0]])
    pts = []
    for i in range(num_slices + 1):
        pt = start + (i / num_slices) * (end - start)
        cross = LineString([pt - perp * total_len, pt + perp * total_len])
        ix = polygon.intersection(cross)
        if ix.is_empty:
            continue
        if ix.geom_type == 'LineString':
            m = ix.interpolate(0.5, normalized=True)
            pts.append((m.x, m.y))
        elif ix.geom_type == 'MultiLineString':
            longest = max(ix.geoms, key=lambda g: g.length)
            m = longest.interpolate(0.5, normalized=True)
            pts.append((m.x, m.y))
        elif ix.geom_type == 'Point':
            pts.append((ix.x, ix.y))
    return LineString(pts) if len(pts) >= 2 else None


def polygon_to_centerline(geometry, part_index=None):
    if geometry.geom_type == 'Polygon':
        return _single_polygon_centerline(geometry)
    if geometry.geom_type == 'MultiPolygon':
        geoms = list(geometry.geoms)
        if part_index is not None:
            if part_index < len(geoms):
                return _single_polygon_centerline(geoms[part_index])
            return None
        parts = [_single_polygon_centerline(g) for g in geoms]
        parts = [p for p in parts if p is not None]
        return max(parts, key=lambda l: l.length) if parts else None
    return None


def force_west_to_east(line):
    coords = list(line.coords)
    if coords[0][0] > coords[-1][0]:
        coords = coords[::-1]
    return LineString(coords)


def orient_toward_next(line, next_lon):
    coords = list(line.coords)
    if abs(coords[-1][0] - next_lon) > abs(coords[0][0] - next_lon):
        coords = coords[::-1]
    return LineString(coords)


def orient_lat_descending(line):
    """Run southward (higher lat → lower lat) for 51→91 bridge."""
    coords = list(line.coords)
    if coords[0][1] < coords[-1][1]:
        coords = coords[::-1]
    return LineString(coords)


def smooth_and_resample(segments, num_points, smoothing):
    all_coords = []
    for seg in segments:
        coords = list(seg.coords)
        if all_coords:
            if np.linalg.norm(np.array(coords[0]) - np.array(all_coords[-1])) < 1e-6:
                coords = coords[1:]
        all_coords.extend(coords)

    all_coords = np.array(all_coords)
    x, y = all_coords[:, 0], all_coords[:, 1]
    diffs = np.sqrt(np.diff(x)**2 + np.diff(y)**2)
    mask = np.concatenate([[True], diffs > 1e-8])
    x, y = x[mask], y[mask]

    print(f"  Fitting spline through {len(x)} points...")
    try:
        tck, u = splprep([x, y], s=smoothing, k=3)
    except Exception as e:
        print(f"  Retrying with higher smoothing: {e}")
        tck, u = splprep([x, y], s=smoothing * 100, k=3)

    u_new = np.linspace(0, 1, num_points)
    x_new, y_new = splev(u_new, tck)
    return [(round(float(y_new[i]), 7), round(float(x_new[i]), 7)) for i in range(num_points)]


def write_typescript(path, points):
    with open(path, 'w') as f:
        f.write("""/**
 * Morris Canal centerline — v7 (48 Part 0 only, 51→91 bridge, no Newark detour).
 * Regenerate:
 *   python scripts/morris_canal_centerline.py \\
 *     --input client/public/data/morris-canal-route.geojson \\
 *     --output scripts/morris_canal_centerline.csv \\
 *     --points 500 --smoothing 0.001 \\
 *     --ts-output client/src/lib/canalRouteCoords.ts
 */
export const CANAL_ROUTE_COORDS: [number, number][] = [
""")
        for lat, lon in points:
            f.write(f"  [{lat:.7f}, {lon:.7f}],\n")
        f.write("];\n")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--input',     default='canals.geojson')
    parser.add_argument('--output',    default='morris_canal.csv')
    parser.add_argument('--points',    type=int,   default=500)
    parser.add_argument('--smoothing', type=float, default=0.001)
    parser.add_argument('--ts-output', default=None,
                        help='Optional path to write canalRouteCoords.ts')
    args = parser.parse_args()

    print(f"\n=== Morris Canal Centerline Extractor v7 ===\n")
    gdf = gpd.read_file(args.input)
    print(f"Read {len(gdf)} features from {args.input}")

    morris = None
    for col in gdf.columns:
        mask = gdf[col].astype(str).str.lower().str.contains('morris canal', na=False)
        if mask.any():
            morris = gdf[mask]
            print(f"Found Morris Canal in '{col}': {len(morris)} features")
            break
    if morris is None or len(morris) == 0:
        morris = gdf[gdf.apply(lambda r: 'morris canal' in str(r).lower(), axis=1)]
    if len(morris) == 0:
        print("ERROR: Morris Canal not found."); sys.exit(1)

    if gdf.crs and gdf.crs.to_epsg() != 4326:
        morris = morris.to_crs(epsg=4326)

    morris_by_id = {int(row.OBJECTID): row for row in morris.itertuples()}

    GAP_LON_MIN, GAP_LON_MAX = -74.477, -74.323
    GAP_LAT_MIN, GAP_LAT_MAX = 40.88, 40.95
    gap_fillers = []
    used_oids = set(CORRECT_OBJECTID_ORDER) | set(BRIDGE_51_TO_91) | SKIP_OIDS
    for row in morris.itertuples():
        oid = int(row.OBJECTID)
        if oid in used_oids:
            continue
        c = row.geometry.centroid
        if (GAP_LON_MIN <= c.x <= GAP_LON_MAX and
                GAP_LAT_MIN <= c.y <= GAP_LAT_MAX and
                row.geometry.length >= 0.005):
            gap_fillers.append((c.x, oid, row))

    gap_fillers.sort(key=lambda t: t[0])
    if gap_fillers:
        print(f"\nFound {len(gap_fillers)} gap-filling fragments between OBJECTIDs 31 and 82:")
        for lon, oid, row in gap_fillers:
            print(f"  OBJECTID={oid}  lon≈{lon:.4f}  len={row.geometry.length:.4f}")

    print(f"\n51→91 bridge: {BRIDGE_51_TO_91}")
    print(f"Skipping Newark detour OIDs: {sorted(SKIP_OIDS)}\n")

    final_order = []
    for oid in CORRECT_OBJECTID_ORDER:
        final_order.append(('main', oid))
        if oid == 31:
            for _, foid, _ in gap_fillers:
                final_order.append(('gap', foid))
        if oid == 51:
            for boid in BRIDGE_51_TO_91:
                final_order.append(('bridge', boid))

    segments = []
    print("Extracting centerlines...\n")
    for i, (kind, oid) in enumerate(final_order):
        if oid not in morris_by_id:
            print(f"  OBJECTID {oid}: NOT FOUND — skipping")
            continue
        row = morris_by_id[oid]
        part_idx = MULTIPOLYGON_PART.get(oid)
        cl = polygon_to_centerline(row.geometry, part_index=part_idx)
        if cl is None:
            print(f"  OBJECTID {oid}: centerline failed — skipping")
            continue

        if oid in FORCE_FLIP:
            cl = force_west_to_east(cl)
            flag = " [FLIPPED]"
        elif kind == 'bridge':
            cl = orient_lat_descending(cl)
            flag = " [bridge]"
        else:
            next_lon = None
            for _, next_oid in final_order[i + 1:]:
                if next_oid in morris_by_id:
                    next_lon = morris_by_id[next_oid].geometry.centroid.x
                    break
            if next_lon is not None:
                cl = orient_toward_next(cl, next_lon)
            if kind == 'gap':
                flag = " [gap]"
            elif part_idx is not None:
                flag = f" [part {part_idx}]"
            else:
                flag = ""

        c = list(cl.coords)
        if kind == 'bridge':
            step = "✓" if c[-1][1] <= c[0][1] else "✗"
        else:
            step = "✓" if c[-1][0] >= c[0][0] else "✗"
        print(f"  {step} OBJECTID={oid:3d}{flag}  lon {c[0][0]:.4f} → {c[-1][0]:.4f}  lat≈{row.geometry.centroid.y:.4f}")
        segments.append(cl)

    # Add manual endpoint for Jersey City
    if segments:
        last_coords = list(segments[-1].coords)
        endpoint_line = LineString([last_coords[-1], (MANUAL_ENDPOINT[0], MANUAL_ENDPOINT[1])])
        segments.append(endpoint_line)
        print(f"  ✓ MANUAL ENDPOINT  lon {last_coords[-1][0]:.4f} → {MANUAL_ENDPOINT[0]:.4f}  lat≈{MANUAL_ENDPOINT[1]:.4f}")

    print(f"\nSmoothing and resampling to {args.points} points...")
    points = smooth_and_resample(segments, args.points, args.smoothing)

    with open(args.output, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['index', 'latitude', 'longitude'])
        for i, (lat, lon) in enumerate(points):
            writer.writerow([i + 1, lat, lon])

    if args.ts_output:
        print(f"Writing TypeScript to {args.ts_output}...")
        write_typescript(args.ts_output, points)

    print(f"\n✓ Done! {args.points} points written to {args.output}")
    print(f"  Start: {points[0]}  (should be near Phillipsburg ~40.68, -75.18)")
    print(f"  End:   {points[-1]}  (should be near Jersey City ~40.70, -74.08)")
    print(f"\n  Still jagged? →  --smoothing 0.005")
    print(f"  Cuts corners? →  --smoothing 0.0002")


if __name__ == '__main__':
    main()
