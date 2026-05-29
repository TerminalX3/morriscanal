import { useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterCompareProps {
  beforeSrc: string;
  beforeLabel?: string;
  afterSrc: string;
  afterLabel?: string;
  alt: string;
  className?: string;
}

/** Drag slider comparing historical (before) and present-day (after) images. */
export function BeforeAfterCompare({
  beforeSrc,
  beforeLabel = "Then",
  afterSrc,
  afterLabel = "Today",
  alt,
  className,
}: BeforeAfterCompareProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#B8962E]/45 bg-[#2C1A0E]/5 shadow-md">
        <img
          src={afterSrc}
          alt={`${alt} — present day`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={beforeSrc}
          alt={`${alt} — historical`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 z-[1] w-0.5 bg-[#B8962E] shadow-sm"
          style={{ left: `${position}%` }}
          aria-hidden
        />
        <input
          type="range"
          min={5}
          max={95}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Drag to compare historical and present-day views"
        />
        <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-[#1A3A0A]/75 px-2 py-0.5 font-cinzel text-[10px] tracking-wide text-white">
          {beforeLabel}
        </div>
        <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-[#2D5016]/75 px-2 py-0.5 font-cinzel text-[10px] tracking-wide text-white">
          {afterLabel}
        </div>
      </div>
      <p className="font-body text-center text-[11px] text-[#4a3520]/60">
        Drag the slider to compare
      </p>
    </div>
  );
}

interface PresentDayGalleryProps {
  photos: string[];
  alt: string;
}

export function PresentDayGallery({ photos, alt }: PresentDayGalleryProps) {
  const [index, setIndex] = useState(0);
  if (photos.length === 0) return null;

  const current = photos[index]!;

  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-lg border border-[#B8962E]/45 shadow-md">
        <img
          src={current}
          alt={`${alt} — photo ${index + 1} of ${photos.length}`}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      {photos.length > 1 ? (
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1))}
            className="rounded border border-[#B8962E]/50 px-2 py-1 font-cinzel text-[10px] text-[#2D5016] hover:bg-[#EDE0C4]"
          >
            Previous
          </button>
          <span className="font-body text-xs text-[#4a3520]/70">
            {index + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % photos.length)}
            className="rounded border border-[#B8962E]/50 px-2 py-1 font-cinzel text-[10px] text-[#2D5016] hover:bg-[#EDE0C4]"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
