// Shared gallery assets for the header strip and article figures

export type GalleryImageType = "illustration" | "photograph" | "map" | "diagram";

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  type: GalleryImageType;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "hero",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-hero-SjDAw43j5CxAuNVqEswAh4.webp",
    title: "Canal Boat & Inclined Plane",
    caption:
      "A mule-drawn canal boat loaded with anthracite coal approaches an inclined plane powerhouse, c. 1870.",
    type: "illustration",
  },
  {
    id: "inclined-plane",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-inclined-plane-k9gEaLsDnbgVWNVMTdgcZA.webp",
    title: "Inclined Plane in Operation",
    caption:
      "A canal boat on its cradle ascending an inclined plane, powered by a water turbine. Workers observe the operation.",
    type: "illustration",
  },
  {
    id: "waterloo",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-waterloo-86WZ4rL9S39FU7CafTBHUL.webp",
    title: "Waterloo Village",
    caption:
      "The canal lock and stone buildings at Waterloo Village in Sussex County, one of the best-preserved canal communities.",
    type: "illustration",
  },
  {
    id: "map-1827",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_map_1827_7bbd3d3c.jpg",
    title: "1827 Survey Map",
    caption:
      "An early survey map of the Morris Canal route showing the planned course from Phillipsburg to Newark.",
    type: "map",
  },
  {
    id: "canal-boat",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_boat_665eab1e.jpg",
    title: "Homeward Bound",
    caption:
      "A canal boat returning westward along the Morris Canal, with the towpath visible on the left bank.",
    type: "photograph",
  },
  {
    id: "canal-aha",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg",
    title: "Morris Canal Boat",
    caption:
      "A registered Morris Canal boat with a boatman at the helm, navigating the canal with a mule team on the towpath.",
    type: "photograph",
  },
  {
    id: "planes-diagram",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/inclined_planes_diagram_91cf37c9.jpg",
    title: "Inclined Planes Diagram",
    caption:
      "Technical illustration of the Morris Canal inclined plane system, showing the powerhouse, turbine, and cable mechanism.",
    type: "diagram",
  },
];

export const TYPE_BADGE: Record<
  GalleryImageType,
  { label: string; color: string }
> = {
  illustration: { label: "Illustration", color: "#2D5016" },
  photograph: { label: "Photograph", color: "#4A7C8E" },
  map: { label: "Map", color: "#8B6914" },
  diagram: { label: "Diagram", color: "#5C3A1E" },
};
