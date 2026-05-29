import L from "leaflet";
import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

const ACCESS_TOKEN = import.meta.env.VITE_LOCATIONIQ_ACCESS_TOKEN as string | undefined;

/** LocationIQ raster tiles (v3 streets). See https://docs.locationiq.com/docs/maps */
function tileLayerUrl(): string {
  const key = encodeURIComponent(ACCESS_TOKEN ?? "");
  return `https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=${key}`;
}

const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors &middot; <a href="https://locationiq.com/" target="_blank" rel="noreferrer">LocationIQ</a>';

export interface MapViewProps {
  className?: string;
  /** `[lat, lng]` */
  initialCenter?: [number, number];
  initialZoom?: number;
  onMapReady?: (map: L.Map) => void;
  /**
   * When this value changes (e.g. mobile map panel toggled), Leaflet will
   * recalc tile layout — required after `display:none` or flex height changes.
   */
  layoutKey?: string | number | boolean;
}

export function MapView({
  className,
  initialCenter = [40.82, -74.55],
  initialZoom = 9,
  onMapReady,
  layoutKey,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  const init = usePersistFn(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    if (!ACCESS_TOKEN?.trim()) {
      console.error(
        "Missing VITE_LOCATIONIQ_ACCESS_TOKEN. Add it to .env in the project root.",
      );
      return;
    }

    const map = L.map(el, {
      zoomControl: true,
      attributionControl: true,
    }).setView(initialCenter, initialZoom);

    L.tileLayer(tileLayerUrl(), {
      attribution: TILE_ATTRIBUTION,
      maxZoom: 19,
      subdomains: "abc",
    }).addTo(map);

    mapRef.current = map;
    onMapReady?.(map);

    const ro = new ResizeObserver(() => {
      map.invalidateSize({ pan: false });
    });
    ro.observe(el);

    const t = window.setTimeout(() => map.invalidateSize(), 200);

    return () => {
      window.clearTimeout(t);
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  });

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const id = requestAnimationFrame(() => map.invalidateSize({ pan: false }));
    const t = window.setTimeout(() => map.invalidateSize({ pan: false }), 300);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(t);
    };
  }, [layoutKey]);

  if (!ACCESS_TOKEN?.trim()) {
    return (
      <div
        className={cn(
          "flex w-full items-center justify-center bg-[#e8dcc8] p-6 text-center text-sm text-[#4a3520]",
          className,
        )}
      >
        <p>
          Set{" "}
          <code className="rounded bg-black/10 px-1.5 py-0.5 font-mono text-xs">
            VITE_LOCATIONIQ_ACCESS_TOKEN
          </code>{" "}
          in <code className="font-mono text-xs">.env</code> and restart the dev server.
        </p>
      </div>
    );
  }

  /* Do not use min-h-0 in className — it collapses Leaflet on mobile. Floor height with svh for dynamic toolbars. */
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-0 h-full w-full min-h-[min(52svh,420px)] sm:min-h-[min(58svh,480px)] md:min-h-0",
        className,
      )}
    />
  );
}
