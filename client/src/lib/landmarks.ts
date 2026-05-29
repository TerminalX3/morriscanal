import { LANDMARKS, type Landmark } from "./canalData";
import { CANAL_ROUTE_COORDS } from "./canalRouteCoords";
import {
  FIELD_SITES,
  HISTORICAL_IDS_REPLACED_BY_FIELD_SITES,
} from "./fieldSites";

/** Not shown on map (replaced by field sites or removed per editorial choice). */
const HIDDEN_HISTORICAL_IDS = new Set(["paterson"]);

/** Western / historical sites without per-address field photography. */
export const HISTORICAL_LANDMARKS: Landmark[] = LANDMARKS.filter(
  (l) =>
    !HISTORICAL_IDS_REPLACED_BY_FIELD_SITES.has(l.id) &&
    !HIDDEN_HISTORICAL_IDS.has(l.id),
);

/** Every map marker: historical sites plus one pin per photo address. */
export const ALL_LANDMARKS: Landmark[] = [...HISTORICAL_LANDMARKS, ...FIELD_SITES];

/** Canal centerline — follows geography, not marker-to-marker hops. */
export { CANAL_ROUTE_COORDS };

export function getLandmarkById(id: string): Landmark | undefined {
  return ALL_LANDMARKS.find((l) => l.id === id);
}
