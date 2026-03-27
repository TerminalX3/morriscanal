// Gallery.tsx
// Heritage Broadside design — historical photo gallery with period captions
// Shows historical images of the Morris Canal

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 'hero',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-hero-SjDAw43j5CxAuNVqEswAh4.webp',
    title: 'Canal Boat & Inclined Plane',
    caption: 'A mule-drawn canal boat loaded with anthracite coal approaches an inclined plane powerhouse, c. 1870.',
    type: 'illustration',
  },
  {
    id: 'inclined-plane',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-inclined-plane-k9gEaLsDnbgVWNVMTdgcZA.webp',
    title: 'Inclined Plane in Operation',
    caption: 'A canal boat on its cradle ascending an inclined plane, powered by a water turbine. Workers observe the operation.',
    type: 'illustration',
  },
  {
    id: 'waterloo',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-waterloo-86WZ4rL9S39FU7CafTBHUL.webp',
    title: 'Waterloo Village',
    caption: 'The canal lock and stone buildings at Waterloo Village in Sussex County, one of the best-preserved canal communities.',
    type: 'illustration',
  },
  {
    id: 'map-1827',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_map_1827_7bbd3d3c.jpg',
    title: '1827 Survey Map',
    caption: 'An early survey map of the Morris Canal route showing the planned course from Phillipsburg to Newark.',
    type: 'map',
  },
  {
    id: 'canal-boat',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_boat_665eab1e.jpg',
    title: 'Homeward Bound',
    caption: 'A canal boat returning westward along the Morris Canal, with the towpath visible on the left bank.',
    type: 'photograph',
  },
  {
    id: 'canal-aha',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg',
    title: 'Morris Canal Boat',
    caption: 'A registered Morris Canal boat with a boatman at the helm, navigating the canal with a mule team on the towpath.',
    type: 'photograph',
  },
  {
    id: 'planes-diagram',
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/inclined_planes_diagram_91cf37c9.jpg',
    title: 'Inclined Planes Diagram',
    caption: 'Technical illustration of the Morris Canal inclined plane system, showing the powerhouse, turbine, and cable mechanism.',
    type: 'diagram',
  },
];

const TYPE_BADGE: Record<string, { label: string; color: string }> = {
  illustration: { label: 'Illustration', color: '#2D5016' },
  photograph: { label: 'Photograph', color: '#4A7C8E' },
  map: { label: 'Map', color: '#8B6914' },
  diagram: { label: 'Diagram', color: '#5C3A1E' },
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <div className="h-full flex flex-col bg-[#F8F3E8]">
      {/* Header */}
      <div className="flex-shrink-0 px-5 pt-5 pb-3 border-b border-[#B8962E]/30">
        <h2 className="font-cinzel font-bold text-[#2D5016] text-lg tracking-wide">
          Visual Archive
        </h2>
        <p className="font-body text-[#4a3520]/70 text-sm mt-1">
          Historical images and illustrations of the Morris Canal
        </p>
      </div>

      {/* Gallery grid */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3">
          {GALLERY_IMAGES.map((img) => {
            const badge = TYPE_BADGE[img.type];
            return (
              <div
                key={img.id}
                className="group relative bg-white border border-[#B8962E]/30 rounded overflow-hidden cursor-pointer hover:border-[#B8962E] hover:shadow-md transition-all duration-200"
                onClick={() => setLightbox(img)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div
                    className="absolute top-2 left-2 px-1.5 py-0.5 text-[9px] font-cinzel tracking-wide text-white rounded"
                    style={{ backgroundColor: badge.color }}
                  >
                    {badge.label}
                  </div>
                </div>
                <div className="p-2.5">
                  <div className="font-playfair font-semibold text-[#2C1A0E] text-xs leading-snug">
                    {img.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox — portal + z-index above Leaflet (map panes up to ~1000) */}
      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightbox(null)}
            role="presentation"
          >
            <div
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded bg-[#F8F3E8] shadow-2xl"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-lightbox-title"
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#2C1A0E]/70 transition-colors hover:bg-[#2C1A0E]"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              <div className="max-h-[60vh] overflow-hidden">
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="border-t border-[#B8962E]/30 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className="rounded px-2 py-0.5 font-cinzel text-[9px] tracking-wide text-white"
                    style={{ backgroundColor: TYPE_BADGE[lightbox.type].color }}
                  >
                    {TYPE_BADGE[lightbox.type].label}
                  </div>
                </div>
                <h3
                  id="gallery-lightbox-title"
                  className="font-playfair mb-1 text-lg font-bold text-[#2C1A0E]"
                >
                  {lightbox.title}
                </h3>
                <p className="font-fell text-sm italic leading-relaxed text-[#4a3520]">
                  {lightbox.caption}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
