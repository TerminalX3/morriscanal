import { GALLERY_IMAGES } from "@/lib/galleryData";

/** Duplicated list for seamless infinite marquee scroll. */
const LOOP_IMAGES = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

/** Horizontal auto-scrolling gallery between the green banner and the map toolbar. */
export function HeaderImageStrip() {
  return (
    <div
      className="flex-shrink-0 border-b border-[#B8962E]/35"
      style={{ backgroundColor: "#F0E6D2" }}
    >
      <div className="px-2 py-2 sm:px-4 sm:py-3">
        <p className="font-cinzel mb-2 px-1 text-center text-xs tracking-widest text-[#6B5420] uppercase sm:mb-3 sm:text-left">
          Glimpses along the canal
        </p>
        <div className="relative overflow-hidden" aria-label="Historical canal images">
          <div
            className="flex w-max gap-3 sm:gap-4 md:gap-5 animate-carousel-marquee hover:[animation-play-state:paused]"
            role="list"
          >
            {LOOP_IMAGES.map((img, i) => (
              <figure
                key={`${img.id}-${i}`}
                role="listitem"
                className="w-[min(72vw,220px)] shrink-0 sm:w-56 md:w-64 lg:w-72"
              >
                <div className="overflow-hidden rounded-md border border-[#B8962E]/50 shadow-md">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="aspect-[4/3] h-28 w-full object-cover sm:h-36 md:h-40 lg:h-44"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="font-body mt-1.5 line-clamp-2 text-[11px] leading-snug text-[#4a3520] sm:text-xs">
                  {img.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
