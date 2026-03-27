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
}

export function MapView({
  className,
  initialCenter = [40.82, -74.55],
  initialZoom = 9,
  onMapReady,
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

    return () => {
      map.remove();
      mapRef.current = null;
    };
  });

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

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

  return <div ref={containerRef} className={cn("w-full min-h-[500px]", className)} />;
}
