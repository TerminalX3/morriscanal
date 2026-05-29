/**
 * CMOS 18 numbered bibliography for the Morris Canal Centennial site.
 */

import {
  PRIMARY_BIBLIOGRAPHY_ENTRIES,
  SECONDARY_BIBLIOGRAPHY_ENTRIES,
  SITE_BIBLIOGRAPHY_ENTRIES,
} from "./bibliographyEntries";
import type { BibliographyCategory, BibliographySection } from "./bibliographyTypes";

export type { BibliographyCategory, BibliographySection } from "./bibliographyTypes";

export interface BibliographyEntry {
  id: string;
  /** Sequential note number in the bibliography ([1], [2], …) */
  number: number;
  sortKey: string;
  category: BibliographyCategory;
  section: BibliographySection;
  cmos: string;
  url?: string;
}

function assignNumbers(
  entries: Omit<BibliographyEntry, "number">[],
  startAt: number,
): BibliographyEntry[] {
  return entries.map((entry, index) => ({
    ...entry,
    number: startAt + index,
  }));
}

const PRIMARY = assignNumbers(PRIMARY_BIBLIOGRAPHY_ENTRIES, 1);
const SECONDARY = assignNumbers(
  SECONDARY_BIBLIOGRAPHY_ENTRIES,
  PRIMARY.length + 1,
);
const SITE = assignNumbers(
  SITE_BIBLIOGRAPHY_ENTRIES,
  PRIMARY.length + SECONDARY.length + 1,
);

export const BIBLIOGRAPHY: BibliographyEntry[] = [...PRIMARY, ...SECONDARY, ...SITE];

export const BIBLIOGRAPHY_BY_ID = Object.fromEntries(
  BIBLIOGRAPHY.map((e) => [e.id, e]),
) as Record<string, BibliographyEntry>;

export const BIBLIOGRAPHY_BY_NUMBER = Object.fromEntries(
  BIBLIOGRAPHY.map((e) => [e.number, e]),
) as Record<number, BibliographyEntry>;

export const SECTION_LABELS: Record<BibliographySection, string> = {
  primary: "Primary Sources",
  secondary: "Secondary Sources",
  site: "Site Holdings and Interactive Map Assets",
};

export const CATEGORY_LABELS: Record<BibliographyCategory, string> = {
  book: "Books and Monographs",
  government: "Government and Legal Documents",
  archive: "Archival Collections",
  article: "Articles and Reports",
  website: "Websites and Databases",
  map: "Maps",
  image: "Illustrations and Photographs",
  video: "Film and Video",
};

export function getBibliographyEntry(id: string): BibliographyEntry | undefined {
  return BIBLIOGRAPHY_BY_ID[id];
}

export function getCitationNumber(id: string): number | undefined {
  return BIBLIOGRAPHY_BY_ID[id]?.number;
}

/** Resolve one or more ids to numbered refs, sorted ascending. */
export function getCitationNumbers(
  ids: string | string[],
): { id: string; number: number }[] {
  const list = Array.isArray(ids) ? ids : [ids];
  const seen = new Set<string>();
  const refs: { id: string; number: number }[] = [];
  for (const id of list) {
    if (seen.has(id)) continue;
    seen.add(id);
    const number = getCitationNumber(id);
    if (number != null) refs.push({ id, number });
  }
  return refs.sort((a, b) => a.number - b.number);
}

export function getBibliographyBySection(
  section: BibliographySection,
): BibliographyEntry[] {
  return BIBLIOGRAPHY.filter((e) => e.section === section);
}
