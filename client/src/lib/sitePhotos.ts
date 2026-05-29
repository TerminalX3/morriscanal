/**
 * Field photography — URLs resolved at build time via Vite asset imports.
 */

export interface SitePhoto {
  url: string;
  filename: string;
  locationName: string;
}

const SIGN_IMG_PATTERN = /^IMG_33(0[89]|1[0-2]|1[5-7])\.jpe?g$/i;

const photoModules = import.meta.glob<string>(
  "../assets/site-photos/*.{jpg,jpeg,JPG,JPEG}",
  { eager: true, query: "?url", import: "default" },
);

function isGeneralTrailSign(filename: string): boolean {
  return SIGN_IMG_PATTERN.test(filename);
}

function signLocationFromFilename(filename: string): string | null {
  const base = locationNameFromFilename(filename);
  if (/^Morris Canal Park Description \(Washington\)$/i.test(base)) {
    return "jersey-city";
  }
  if (/^Morris Square Park Description$/i.test(base)) {
    return "montville";
  }
  if (/^Morris Square Park Sign$/i.test(base)) {
    return "montville";
  }
  return null;
}

function isLocationSignFilename(filename: string): boolean {
  return signLocationFromFilename(filename) != null;
}

export function locationNameFromFilename(filename: string): string {
  return filename
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/\(\d+\)$/, "")
    .replace(/ \(ex\)$/i, "")
    .replace(/\(ex\)$/i, "")
    .trim();
}

const LOCATION_ALIASES: Record<string, string> = {
  "Van vorst str and Dudley": "Van Vorst and Dudley",
  "Van Vorst and Essex": "Van Vorst and Essex str",
  "Washington str & Dudley str": "Washington str and Dudley str",
  "P & G (side view)": "P & G",
};

export function canonicalLocationName(name: string): string {
  return LOCATION_ALIASES[name] ?? name;
}

function buildCatalog() {
  const presentDayByLocation = new Map<string, SitePhoto[]>();
  const signsByLandmarkId = new Map<string, SitePhoto[]>();
  const generalSigns: SitePhoto[] = [];

  for (const [path, url] of Object.entries(photoModules)) {
    const filename = path.split("/").pop() ?? "";
    if (!filename || !url) continue;

    const rawLocation = locationNameFromFilename(filename);
    const locationName = canonicalLocationName(rawLocation);
    const photo: SitePhoto = { url, filename, locationName };

    if (isGeneralTrailSign(filename)) {
      generalSigns.push(photo);
      continue;
    }

    if (isLocationSignFilename(filename)) {
      const landmarkId = signLocationFromFilename(filename)!;
      const list = signsByLandmarkId.get(landmarkId) ?? [];
      list.push(photo);
      signsByLandmarkId.set(landmarkId, list);
      continue;
    }

    const list = presentDayByLocation.get(locationName) ?? [];
    list.push(photo);
    presentDayByLocation.set(locationName, list);
  }

  generalSigns.sort((a, b) => a.filename.localeCompare(b.filename));

  return { presentDayByLocation, signsByLandmarkId, generalSigns };
}

const catalog = buildCatalog();

export const PRESENT_DAY_BY_LOCATION = catalog.presentDayByLocation;
export const SIGNS_BY_LANDMARK_ID = catalog.signsByLandmarkId;
export const GENERAL_TRAIL_SIGNS = catalog.generalSigns;

export function getPresentDayPhotos(locationName: string): SitePhoto[] {
  return PRESENT_DAY_BY_LOCATION.get(canonicalLocationName(locationName)) ?? [];
}

export function getSignPhotosForLandmark(landmarkId: string): SitePhoto[] {
  return SIGNS_BY_LANDMARK_ID.get(landmarkId) ?? [];
}
