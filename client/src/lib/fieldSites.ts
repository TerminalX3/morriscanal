import type { Landmark } from "./canalData";
import { getPhotoLocationCoords } from "./photoLocationGeocodes";
import {
  PRESENT_DAY_BY_LOCATION,
  getSignPhotosForLandmark,
} from "./sitePhotos";

/** Field photo locations omitted from the map (e.g. Paterson-area site removed). */
const EXCLUDED_FIELD_LOCATIONS = new Set([
  "11 Fern River Ave, Wayne, NJ 07470",
]);

/** Historical town markers replaced by address-level field sites. */
export const HISTORICAL_IDS_REPLACED_BY_FIELD_SITES = new Set([
  "wharton",
  "boonton",
  "lincoln-park",
  "montville",
  "little-falls",
  "newark",
  "jersey-city",
]);

/** Present-day photo location → parent landmark (for signs / then-and-now). */
const PHOTO_LOCATION_TO_LANDMARK: Record<string, string> = {
  "124-198 N Main St, Boonton, NJ 07005": "boonton",
  "180 Powerville Rd, Boonton, NJ 07005": "boonton",
  "Boonton Tpke At, Riveredge Rd, Lincoln Park, NJ 07035": "lincoln-park",
  "Area behind Lafayette pool": "jersey-city",
  "Main St, Little Falls Township, NJ 07424": "little-falls",
  "Woodland Park, NJ 07424": "little-falls",
  "WC23+CG, Wharton, NJ 07885": "wharton",
  "147 Main Rd, Montville, NJ 07045": "montville",
  "30 Kokora Ave, Montville, NJ 07045": "montville",
  "Morris Square Park": "montville",
  "11 Fern River Ave, Wayne, NJ 07470": "paterson",
  "Ash str, Halladay str, and Carbon place Intersection": "newark",
  "P & G": "newark",
  "Morris Canal Park (Washington)": "jersey-city",
  "Van Vorst and Dudley": "jersey-city",
  "Van Vorst and Essex str": "jersey-city",
  "Washington str and Dudley str": "jersey-city",
  "Warren str and Dudley str": "jersey-city",
  "Grand Str & Pacific Ave (Electric Substation)": "jersey-city",
};

const HISTORICAL_IMAGE_BY_LANDMARK: Partial<Record<string, string>> = {
  boonton:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-inclined-plane-k9gEaLsDnbgVWNVMTdgcZA.webp",
  wharton:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg",
  "little-falls":
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-waterloo-86WZ4rL9S39FU7CafTBHUL.webp",
  "lincoln-park":
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_boat_665eab1e.jpg",
  montville:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-waterloo-86WZ4rL9S39FU7CafTBHUL.webp",
  newark:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg",
  "jersey-city":
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg",
};

function locationToId(locationName: string): string {
  const slug = locationName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `site-${slug}`;
}

function buildFieldSite(locationName: string): Landmark {
  const coords = getPhotoLocationCoords(locationName);
  const photos = PRESENT_DAY_BY_LOCATION.get(locationName) ?? [];
  const parentId = PHOTO_LOCATION_TO_LANDMARK[locationName];
  const signPhotos =
    locationName === "Morris Canal Park (Washington)" ||
    locationName === "Morris Square Park"
      ? (parentId ? getSignPhotosForLandmark(parentId).map((p) => p.url) : [])
      : [];
  const presentDayPhotos = photos.map((p) => p.url);
  const image = parentId
    ? HISTORICAL_IMAGE_BY_LANDMARK[parentId]
    : undefined;

  return {
    id: locationToId(locationName),
    name: locationName,
    type: "field-site",
    lat: coords.lat,
    lng: coords.lng,
    description: `Centennial field documentation at ${locationName}.`,
    presentDayPhotos,
    signPhotos: signPhotos.length > 0 ? signPhotos : undefined,
    image,
    county: undefined,
  };
}

/** One map marker per unique photo address (exact geocode). */
export const FIELD_SITES: Landmark[] = [...PRESENT_DAY_BY_LOCATION.keys()]
  .filter((name) => !EXCLUDED_FIELD_LOCATIONS.has(name))
  .sort((a, b) => a.localeCompare(b))
  .map((name) => buildFieldSite(name));

export const FIELD_SITE_IDS = FIELD_SITES.map((s) => s.id);
