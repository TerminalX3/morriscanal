import type { Landmark } from "./canalData";
import {
  getPresentDayPhotos,
  getSignPhotosForLandmark,
} from "./sitePhotos";

/** Historical images for then/now when a landmark has field photos but no `image`. */
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
};

/**
 * Maps photo filename locations → main map landmark id.
 * Only named canal towns/sites appear on the map; photos attach here.
 */
const PHOTO_LOCATION_TO_LANDMARK: Record<string, string> = {
  "124-198 N Main St, Boonton, NJ 07005": "boonton",
  "180 Powerville Rd, Boonton, NJ 07005": "boonton",
  "Boonton Tpke At, Riveredge Rd, Lincoln Park, NJ 07035": "lincoln-park",
  "Area behind Lafayette pool": "lincoln-park",
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

function uniqueUrls(urls: string[]): string[] {
  return [...new Set(urls)];
}

export function enrichLandmarkWithPhotos(landmark: Landmark): Landmark {
  const present: string[] = [...(landmark.presentDayPhotos ?? [])];
  const signs: string[] = [...(landmark.signPhotos ?? [])];

  for (const [locationName, landmarkId] of Object.entries(PHOTO_LOCATION_TO_LANDMARK)) {
    if (landmarkId !== landmark.id) continue;
    present.push(...getPresentDayPhotos(locationName).map((p) => p.url));
  }

  signs.push(...getSignPhotosForLandmark(landmark.id).map((p) => p.url));

  const presentDayPhotos = uniqueUrls(present);
  const signPhotos = uniqueUrls(signs);

  if (presentDayPhotos.length === 0 && signPhotos.length === 0) {
    return landmark;
  }

  const image =
    landmark.image ??
    (presentDayPhotos.length > 0
      ? HISTORICAL_IMAGE_BY_LANDMARK[landmark.id]
      : undefined);

  return { ...landmark, presentDayPhotos, signPhotos, ...(image ? { image } : {}) };
}
