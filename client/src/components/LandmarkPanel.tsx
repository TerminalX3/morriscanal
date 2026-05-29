// LandmarkPanel.tsx — heritage card with forest green / burgundy accents

import { Cite } from "@/components/Cite";
import {
  BeforeAfterCompare,
  PresentDayGallery,
} from "@/components/BeforeAfterCompare";
import { X, MapPin, Mountain, Anchor, Building2, Waves } from "lucide-react";
import { type Landmark } from "@/lib/canalData";

interface LandmarkPanelProps {
  landmark: Landmark | null;
  onClose: () => void;
}

const TYPE_LABELS: Record<string, string> = {
  terminus: "Canal Terminus",
  "inclined-plane": "Inclined Plane",
  lock: "Canal Lock",
  town: "Canal Town",
  aqueduct: "Aqueduct",
  summit: "Summit Level",
  feeder: "Feeder Canal",
  "field-site": "Field Site",
};

const TYPE_COLORS: Record<string, string> = {
  terminus: "#6B1F2A",
  "inclined-plane": "#2D5016",
  lock: "#4A7C8E",
  town: "#8B6914",
  aqueduct: "#5C3A1E",
  summit: "#B8962E",
  feeder: "#4A7C8E",
  "field-site": "#2D5016",
};

const TYPE_ICONS: Record<string, React.ReactNode> = {
  terminus: <Anchor className="h-4 w-4" />,
  "inclined-plane": <Mountain className="h-4 w-4" />,
  lock: <Building2 className="h-4 w-4" />,
  town: <MapPin className="h-4 w-4" />,
  aqueduct: <Waves className="h-4 w-4" />,
  summit: <Mountain className="h-4 w-4" />,
  feeder: <Waves className="h-4 w-4" />,
  "field-site": <MapPin className="h-4 w-4" />,
};

export default function LandmarkPanel({ landmark, onClose }: LandmarkPanelProps) {
  if (!landmark) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2D5016]/10">
          <MapPin className="h-8 w-8 text-[#2D5016]/40" />
        </div>
        <p className="font-playfair text-lg italic text-[#4a3520]/60">
          Select a marker on the map
        </p>
        <p className="font-body mt-2 text-sm text-[#4a3520]/40">
          Click any point along the canal route to explore its history
        </p>
        <p className="font-body mt-3 max-w-xs text-xs text-[#4a3520]/50">
          Markers with a gold ring include centennial field photos and before-and-after
          views where available.
        </p>
      </div>
    );
  }

  const typeColor = TYPE_COLORS[landmark.type] || "#2D5016";
  const typeLabel = TYPE_LABELS[landmark.type] || landmark.type;
  const typeIcon = TYPE_ICONS[landmark.type];
  const presentDay = landmark.presentDayPhotos ?? [];
  const signs = landmark.signPhotos ?? [];
  const hasBeforeAfter =
    Boolean(landmark.image) && presentDay.length > 0;
  const showHistoricalOnly =
    Boolean(landmark.image) && presentDay.length === 0;
  const showPresentOnly = !landmark.image && presentDay.length > 0;

  return (
    <div className="flex h-full animate-fade-in-up flex-col overflow-hidden">
      <div
        className="relative flex-shrink-0 p-5"
        style={{ backgroundColor: typeColor }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`,
          }}
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
          aria-label="Close panel"
        >
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="relative z-10">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <div className="text-white/80">{typeIcon}</div>
            <span className="font-cinzel text-[10px] tracking-widest text-white/80 uppercase">
              {typeLabel}
            </span>
            {(landmark.presentDayPhotos?.length ?? 0) > 0 ? (
              <span className="rounded border border-[#B8962E]/60 bg-[#B8962E]/20 px-1.5 py-0.5 font-cinzel text-[9px] tracking-wide text-[#F8F3E8]">
                Field photos
              </span>
            ) : null}
            {landmark.county && (
              <span className="font-body text-[10px] text-white/60">
                · {landmark.county} County
              </span>
            )}
          </div>
          <h2 className="font-playfair text-xl font-bold leading-tight text-white sm:text-2xl">
            {landmark.name}
          </h2>
          {landmark.elevation !== undefined && (
            <div className="mt-1 flex items-center gap-1">
              <Mountain className="h-3 w-3 text-white/60" />
              <span className="font-body text-xs text-white/70">
                {landmark.elevation} ft elevation
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#F8F3E8] p-5">
        {(hasBeforeAfter || showHistoricalOnly || showPresentOnly) && (
          <div className="mb-5">
            <div className="divider-ornamental mb-3">
              <span className="font-cinzel whitespace-nowrap text-[10px] tracking-widest text-[#B8962E] uppercase">
                {hasBeforeAfter ? "Then & Today" : showPresentOnly ? "Today" : "Historical View"}
              </span>
            </div>
            {hasBeforeAfter ? (
              <BeforeAfterCompare
                beforeSrc={landmark.image!}
                afterSrc={presentDay[0]!}
                alt={landmark.name}
              />
            ) : showHistoricalOnly ? (
              <div className="overflow-hidden rounded-lg border border-[#B8962E]/45 shadow-md">
                <img
                  src={landmark.image}
                  alt={`${landmark.name} — historical`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ) : (
              <PresentDayGallery photos={presentDay} alt={landmark.name} />
            )}
            {hasBeforeAfter && presentDay.length > 1 ? (
              <div className="mt-4">
                <p className="font-cinzel mb-2 text-[10px] tracking-widest text-[#8B6914] uppercase">
                  More views today
                </p>
                <PresentDayGallery photos={presentDay.slice(1)} alt={landmark.name} />
              </div>
            ) : null}
          </div>
        )}

        {signs.length > 0 ? (
          <div className="mb-5">
            <div className="divider-ornamental mb-3">
              <span className="font-cinzel whitespace-nowrap text-[10px] tracking-widest text-[#B8962E] uppercase">
                On-site signage
              </span>
            </div>
            <div className="space-y-3">
              {signs.map((src) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-lg border border-[#B8962E]/40 bg-white/50"
                >
                  <img
                    src={src}
                    alt={`Interpretive sign at ${landmark.name}`}
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mb-4">
          <div className="divider-ornamental mb-3">
            <span className="font-cinzel whitespace-nowrap text-[10px] tracking-widest text-[#B8962E] uppercase">
              About This Site
            </span>
          </div>
          <p className="font-body text-base leading-relaxed text-[#2C1A0E]">
            {landmark.description}
          </p>
        </div>

        {landmark.historicalNote && (
          <div className="mb-4">
            <div className="divider-ornamental mb-3">
              <span className="font-cinzel whitespace-nowrap text-[10px] tracking-widest text-[#B8962E] uppercase">
                Historical Dispatch
              </span>
            </div>
            <blockquote className="border-l-2 border-[#B8962E] py-1 pl-4">
              <p className="font-fell text-sm italic leading-relaxed text-[#4a3520]">
                {landmark.historicalNote}
              </p>
            </blockquote>
          </div>
        )}

        <div className="mt-4 space-y-2 border-t border-[#B8962E]/30 pt-4">
          <div className="flex items-center gap-2 font-body text-xs text-[#8B6914]">
            <MapPin className="h-3 w-3" />
            <span>
              {landmark.lat.toFixed(4)}°N, {Math.abs(landmark.lng).toFixed(4)}°W
            </span>
          </div>
          {landmark.imageCitationId ? (
            <p className="font-body text-xs text-[#4a3520]/70">
              Historical image <Cite ids={landmark.imageCitationId} />
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
