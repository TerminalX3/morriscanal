// Morris Canal Centennial — Interactive map (Leaflet + LocationIQ tiles)
// Design: Heritage Broadside — forest green route, colored markers, parchment UI

import { useCallback, useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapView } from "@/components/Map";
import { CANAL_ROUTE_COORDS, LANDMARKS, type Landmark } from "@/lib/canalData";

interface CanalMapProps {
  onLandmarkSelect: (landmark: Landmark | null) => void;
  selectedLandmark: Landmark | null;
  filterType: string;
  /** Pass e.g. mobile panel open state so Leaflet can reflow when the map is shown again. */
  layoutKey?: string | number | boolean;
}

const MARKER_COLORS: Record<string, string> = {
  terminus: "#6B1F2A",
  "inclined-plane": "#2D5016",
  lock: "#4A7C8E",
  town: "#8B6914",
  aqueduct: "#5C3A1E",
  summit: "#B8962E",
  feeder: "#4A7C8E",
};

export default function CanalMap({
  onLandmarkSelect,
  selectedLandmark,
  filterType,
  layoutKey,
}: CanalMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.CircleMarker[]>([]);
  const routeGroupRef = useRef<L.LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const handleMapReady = useCallback((map: L.Map) => {
    mapRef.current = map;
    const bounds = L.latLngBounds(
      CANAL_ROUTE_COORDS.map(([lat, lng]) => L.latLng(lat, lng)),
    );
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11 });
    setMapReady(true);
  }, []);

  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    const map = mapRef.current;

    routeGroupRef.current?.removeFrom(map);
    routeGroupRef.current = null;

    const latlngs = CANAL_ROUTE_COORDS.map(([lat, lng]) => L.latLng(lat, lng));
    const group = L.layerGroup([
      L.polyline(latlngs, {
        color: "#2D5016",
        weight: 5,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round",
      }),
      L.polyline(latlngs, {
        color: "#B8962E",
        weight: 2,
        opacity: 0.35,
        lineCap: "round",
        lineJoin: "round",
        dashArray: "6 10",
      }),
    ]).addTo(map);
    routeGroupRef.current = group;
  }, [mapReady]);

  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    const map = mapRef.current;

    markersRef.current.forEach((m) => {
      map.removeLayer(m);
    });
    markersRef.current = [];

    const filtered =
      filterType === "all"
        ? LANDMARKS
        : LANDMARKS.filter((l) => l.type === filterType);

    filtered.forEach((landmark) => {
      const color = MARKER_COLORS[landmark.type] ?? "#2D5016";
      const isSelected = selectedLandmark?.id === landmark.id;
      const isImportant =
        landmark.type === "terminus" || landmark.type === "summit";
      const baseRadius = isSelected ? 14 : isImportant ? 11 : 8;

      const marker = L.circleMarker([landmark.lat, landmark.lng], {
        radius: baseRadius,
        fillColor: color,
        color: "#F5E6C8",
        weight: isSelected ? 3 : 2,
        opacity: 1,
        fillOpacity: isSelected ? 1 : 0.88,
      }).addTo(map);

      marker.bindTooltip(landmark.name, { direction: "top", offset: [0, -6] });

      marker.on("click", () => {
        onLandmarkSelect(landmark);
        marker.setRadius(isImportant ? 15 : 12);
        window.setTimeout(() => {
          marker.setRadius(baseRadius);
        }, 450);
      });

      markersRef.current.push(marker);
    });
  }, [mapReady, filterType, selectedLandmark, onLandmarkSelect]);

  useEffect(() => {
    if (!mapReady || !mapRef.current || !selectedLandmark) return;
    const map = mapRef.current;
    map.flyTo([selectedLandmark.lat, selectedLandmark.lng], 13, { duration: 0.6 });
  }, [mapReady, selectedLandmark]);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <MapView
        onMapReady={handleMapReady}
        initialCenter={[40.82, -74.55]}
        initialZoom={9}
        layoutKey={layoutKey}
        className="flex-1"
      />
      <div className="absolute bottom-4 left-4 z-[500] rounded border border-[#B8962E] bg-[#F8F3E8]/95 p-3 text-xs font-body shadow-lg">
        <div className="font-cinzel mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#2D5016]">
          Legend
        </div>
        {Object.entries(MARKER_COLORS).map(([type, color]) => (
          <div key={type} className="mb-1 flex items-center gap-2">
            <div
              className="h-3 w-3 flex-shrink-0 rounded-full border-2 border-[#F5E6C8]"
              style={{ backgroundColor: color }}
            />
            <span className="text-[10px] capitalize text-[#4a3520]">
              {type.replace("-", " ")}
            </span>
          </div>
        ))}
        <div className="mt-2 flex items-center gap-2 border-t border-[#B8962E]/40 pt-2">
          <div className="w-8 flex-shrink-0 border-t-2 border-dashed border-[#2D5016]" />
          <span className="text-[10px] text-[#4a3520]">Canal Route</span>
        </div>
      </div>
    </div>
  );
}
