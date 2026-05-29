import { useState } from "react";
import { GENERAL_TRAIL_SIGNS } from "@/lib/sitePhotos";

/** Interpretive signs photographed along the canal (IMG_3308–3317 series). */
export function TrailSignsGallery({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  if (GENERAL_TRAIL_SIGNS.length === 0) return null;

  const current = GENERAL_TRAIL_SIGNS[index]!;

  return (
    <section className={className}>
      <div className="divider-ornamental mb-4">
        <span className="font-cinzel whitespace-nowrap text-[10px] tracking-widest text-[#B8962E] uppercase">
          Trail Signs
        </span>
      </div>
      <p className="font-body mb-4 text-sm leading-relaxed text-[#4a3520] sm:text-base">
        Interpretive markers photographed along the Morris Canal greenway during the
        centennial field survey.
      </p>
      <div className="overflow-hidden rounded-lg border border-[#B8962E]/45 bg-white/40 shadow-md">
        <img
          src={current.url}
          alt={`Morris Canal interpretive sign — ${current.filename}`}
          className="max-h-[min(70vh,520px)] w-full object-contain bg-[#EDE0C4]/30"
        />
      </div>
      {GENERAL_TRAIL_SIGNS.length > 1 ? (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() =>
              setIndex((i) => (i === 0 ? GENERAL_TRAIL_SIGNS.length - 1 : i - 1))
            }
            className="rounded border border-[#B8962E]/50 px-3 py-1.5 font-cinzel text-xs text-[#2D5016] hover:bg-[#EDE0C4]"
          >
            Previous
          </button>
          <span className="font-body text-xs text-[#4a3520]/70">
            {index + 1} of {GENERAL_TRAIL_SIGNS.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % GENERAL_TRAIL_SIGNS.length)}
            className="rounded border border-[#B8962E]/50 px-3 py-1.5 font-cinzel text-xs text-[#2D5016] hover:bg-[#EDE0C4]"
          >
            Next
          </button>
        </div>
      ) : null}
    </section>
  );
}
