// Shared gallery assets for the header strip and article figures

export type GalleryImageType = "illustration" | "photograph" | "map" | "diagram";

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  type: GalleryImageType;
  /** CMOS bibliography entry id(s) — see bibliographyData.ts */
  citationId: string;
  /** Additional bibliography ids when an image draws on multiple sources */
  citationIds?: string[];
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "hero",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-hero-SjDAw43j5CxAuNVqEswAh4.webp",
    title: "Canal Boat & Inclined Plane",
    caption:
      "A mule-drawn canal boat loaded with anthracite coal approaches an inclined plane powerhouse, c. 1870.",
    type: "illustration",
    citationId: "alamy-inclined-plane",
    citationIds: ["img-hero", "lee-1979"],
  },
  {
    id: "inclined-plane",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-inclined-plane-k9gEaLsDnbgVWNVMTdgcZA.webp",
    title: "Inclined Plane in Operation",
    caption:
      "A canal boat on its cradle ascending an inclined plane, powered by a water turbine. Workers observe the operation.",
    type: "illustration",
    citationId: "img-inclined-plane",
    citationIds: ["debruler-industrial-scenery-2020"],
  },
  {
    id: "waterloo",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-waterloo-86WZ4rL9S39FU7CafTBHUL.webp",
    title: "Waterloo Village",
    caption:
      "The canal lock and stone buildings at Waterloo Village in Sussex County, one of the best-preserved canal communities.",
    type: "illustration",
    citationId: "img-waterloo",
    citationIds: ["canalsocietynj-museum-2025"],
  },
  {
    id: "map-1827",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_map_1827_7bbd3d3c.jpg",
    title: "1827 Survey Map",
    caption:
      "An early survey map of the Morris Canal route showing the planned course from Phillipsburg to Newark.",
    type: "map",
    citationId: "desobry-map-1827",
    citationIds: ["nj-state-lib-maps"],
  },
  {
    id: "canal-boat",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_boat_665eab1e.jpg",
    title: "Homeward Bound",
    caption:
      "A canal boat returning westward along the Morris Canal, with the towpath visible on the left bank.",
    type: "photograph",
    citationId: "img-canal-boat",
    citationIds: ["lee-1979"],
  },
  {
    id: "canal-aha",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg",
    title: "Morris Canal Boat",
    caption:
      "A registered Morris Canal boat with a boatman at the helm, navigating the canal with a mule team on the towpath.",
    type: "photograph",
    citationId: "img-canal-aha",
    citationIds: ["haer-nj30", "lee-1979"],
  },
  {
    id: "planes-diagram",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/inclined_planes_diagram_91cf37c9.jpg",
    title: "Inclined Planes Diagram",
    caption:
      "Technical illustration of the Morris Canal inclined plane system, showing the powerhouse, turbine, and cable mechanism.",
    type: "diagram",
    citationId: "img-planes-diagram",
    citationIds: ["asce-hydraulic-planes-2025", "haer-nj30"],
  },
];

export function galleryImageById(id: string): GalleryImage | undefined {
  return GALLERY_IMAGES.find((g) => g.id === id);
}

/** All bibliography ids for a gallery image, deduplicated, primary first. */
export function galleryCitationIds(image: GalleryImage): string[] {
  const ids = [image.citationId, ...(image.citationIds ?? [])];
  return ids.filter((id, index) => ids.indexOf(id) === index);
}

export const TYPE_BADGE: Record<
  GalleryImageType,
  { label: string; color: string }
> = {
  illustration: { label: "Illustration", color: "#2D5016" },
  photograph: { label: "Photograph", color: "#4A7C8E" },
  map: { label: "Map", color: "#8B6914" },
  diagram: { label: "Diagram", color: "#5C3A1E" },
};
