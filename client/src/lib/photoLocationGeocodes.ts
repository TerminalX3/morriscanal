/**
 * Precise coordinates for each photo filename location.
 * Sources: GPS EXIF from field images, LocationIQ street-address geocoding,
 * Open Location Code (WC23+CG), or intersection GPS where noted.
 */
export interface PhotoCoords {
  lat: number;
  lng: number;
}

export const PHOTO_LOCATION_GEOCODES: Record<string, PhotoCoords> = {
  "11 Fern River Ave, Wayne, NJ 07470": {
    lat: 40.890005,
    lng: -74.234599,
  },
  "124-198 N Main St, Boonton, NJ 07005": {
    lat: 40.908914,
    lng: -74.418783,
  },
  "180 Powerville Rd, Boonton, NJ 07005": {
    lat: 40.91533,
    lng: -74.427765,
  },
  "147 Main Rd, Montville, NJ 07045": {
    lat: 40.915264,
    lng: -74.379743,
  },
  "30 Kokora Ave, Montville, NJ 07045": {
    lat: 40.913512,
    lng: -74.380923,
  },
  "Morris Square Park": {
    lat: 40.915264,
    lng: -74.379743,
  },
  /** Lafayette Aquatics Center area, Jersey City (GPS from field photo). */
  "Area behind Lafayette pool": {
    lat: 40.714794,
    lng: -74.061414,
  },
  "Boonton Tpke At, Riveredge Rd, Lincoln Park, NJ 07035": {
    lat: 40.914753,
    lng: -74.272506,
  },
  /** Mount Pleasant Ave, Woodland Park (postal “Little Falls Township”). */
  "Main St, Little Falls Township, NJ 07424": {
    lat: 40.895812,
    lng: -74.198266,
  },
  "Woodland Park, NJ 07424": {
    lat: 40.893542,
    lng: -74.195325,
  },
  "WC23+CG, Wharton, NJ 07885": {
    lat: 40.901063,
    lng: -74.596188,
  },
  "Ash str, Halladay str, and Carbon place Intersection": {
    lat: 40.715433,
    lng: -74.058447,
  },
  "P & G": {
    lat: 40.717118,
    lng: -74.14517,
  },
  "Morris Canal Park (Washington)": {
    lat: 40.711664,
    lng: -74.037808,
  },
  "Van Vorst and Dudley": {
    lat: 40.712844,
    lng: -74.041628,
  },
  "Van Vorst and Essex str": {
    lat: 40.713633,
    lng: -74.041433,
  },
  "Washington str and Dudley str": {
    lat: 40.712442,
    lng: -74.038269,
  },
  "Warren str and Dudley str": {
    lat: 40.712639,
    lng: -74.039939,
  },
  "Grand Str & Pacific Ave (Electric Substation)": {
    lat: 40.717181,
    lng: -74.054525,
  },
};

export function getPhotoLocationCoords(locationName: string): PhotoCoords {
  const coords = PHOTO_LOCATION_GEOCODES[locationName];
  if (!coords) {
    throw new Error(`Missing geocode for photo location: ${locationName}`);
  }
  return coords;
}
