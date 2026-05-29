/**
 * Bibliography source records — Primary, Secondary (user-supplied), and site holdings.
 * CMOS 18 strings; numbering assigned in bibliographyData.ts.
 */

import type { BibliographyCategory, BibliographySection } from "./bibliographyTypes";

export interface BibliographyEntryInput {
  id: string;
  sortKey: string;
  category: BibliographyCategory;
  section: BibliographySection;
  cmos: string;
  url?: string;
}

type EntryInput = BibliographyEntryInput;

function entry(e: EntryInput): EntryInput {
  return e;
}

/** Primary sources (listed first in the numbered bibliography). */
export const PRIMARY_BIBLIOGRAPHY_ENTRIES: EntryInput[] = [
  entry({
    id: "brightman-nutley-sun-1970s",
    sortKey: "Brightman, Pat",
    category: "article",
    section: "primary",
    cmos:
      'Brightman, Pat. "Nutley Resident, Richard Titus, 99, Recalls Working on Morris Canal." Nutley Sun, ca. 1970s. Nutley Historical Society Archives. https://www.nutleyhistoricalsociety.org/.',
    url: "https://www.nutleyhistoricalsociety.org/",
  }),
  entry({
    id: "wpa-fwp-morris-canal-1937",
    sortKey: "Works Progress Administration",
    category: "government",
    section: "primary",
    cmos:
      "Works Progress Administration. Federal Writers' Project. [Morris Canal]. Series, Bulletin 17. Morris County, NJ, 1937–38. https://www.loc.gov/.",
    url: "https://www.loc.gov/",
  }),
  entry({
    id: "hanlon-immigrants-dh-canal",
    sortKey: "Hanlon, Timothy",
    category: "article",
    section: "primary",
    cmos:
      "Hanlon, Timothy. Testimony. In Immigrants and the D&H Canal. Erie Canal Museum, Syracuse, NY. https://eriecanalmuseum.org/.",
    url: "https://eriecanalmuseum.org/",
  }),
];

/** Secondary sources (user-supplied, in listed order). */
export const SECONDARY_BIBLIOGRAPHY_ENTRIES: EntryInput[] = [
  entry({
    id: "ephemeral-ny-trollope-2019",
    sortKey: "Ephemeral New York",
    category: "website",
    section: "secondary",
    cmos:
      '"A Travel Writer under the Spell of 1820s New York." Ephemeral New York. February 18, 2019. https://ephemeralnewyork.wordpress.com/2019/02/18/a-travel-writer-under-the-spell-of-1820s-new-york/.',
    url: "https://ephemeralnewyork.wordpress.com/2019/02/18/a-travel-writer-under-the-spell-of-1820s-new-york/",
  }),
  entry({
    id: "american-canal-society-walk-1923",
    sortKey: "American Canal Society",
    category: "website",
    section: "secondary",
    cmos:
      'admin. "A 1923 Walk along the Morris Canal - the American Canal Society." The American Canal Society. March 17, 2020. https://americancanalsociety.org/new-york-walk-book/.',
    url: "https://americancanalsociety.org/new-york-walk-book/",
  }),
  entry({
    id: "alamy-inclined-plane",
    sortKey: "Alamy Limited",
    category: "image",
    section: "secondary",
    cmos:
      'Alamy Limited. "Inclined Plane on the Morris Canal, New Jersey, USA." Alamy.com. 2026. https://www.alamy.com/stock-photo-inclined-plane-on-the-morris-canal-new-jersey-usa-105357009.html.',
    url: "https://www.alamy.com/stock-photo-inclined-plane-on-the-morris-canal-new-jersey-usa-105357009.html",
  }),
  entry({
    id: "amazon-anthracite-miners-poster",
    sortKey: "Amazon.com",
    category: "image",
    section: "secondary",
    cmos:
      '"Pennsylvania Coal Miners Miners at Work in an Anthracite Coal Mine near Scranton Pennsylvania Late 1920S Poster Print." Amazon.com. 2026. https://www.amazon.com/Pennsylvania-Miners-Nminers-Anthracite-Scranton/dp/B07CG8PYKP.',
    url: "https://www.amazon.com/Pennsylvania-Miners-Nminers-Anthracite-Scranton/dp/B07CG8PYKP",
  }),
  entry({
    id: "asce-hydraulic-planes-2025",
    sortKey: "American Society of Civil Engineers",
    category: "website",
    section: "secondary",
    cmos:
      'American Society of Civil Engineers. "Hydraulic-Powered Inclined Plane System of the Morris Canal." 2025. https://www.asce.org/about-civil-engineering/history-and-heritage/historic-landmarks/hydraulic-powered-inclined-plane-system-of-the-morris-canal.',
    url: "https://www.asce.org/about-civil-engineering/history-and-heritage/historic-landmarks/hydraulic-powered-inclined-plane-system-of-the-morris-canal",
  }),
  entry({
    id: "wikipedia-newark-1874",
    sortKey: "Wikipedia",
    category: "map",
    section: "secondary",
    cmos:
      '"Archivo:Newark NJ 1874.Jpg." Wikipedia. 2022. https://es.wikipedia.org/wiki/Archivo:Newark_NJ_1874.jpg.',
    url: "https://es.wikipedia.org/wiki/Archivo:Newark_NJ_1874.jpg",
  }),
  entry({
    id: "ascarelli-aha-morris-canal",
    sortKey: "Ascarelli, Miriam",
    category: "article",
    section: "secondary",
    cmos:
      'Ascarelli, Miriam. "The Morris Canal." AHA Perspectives. 2025. https://www.historians.org/perspectives-article/the-morris-canal/.',
    url: "https://www.historians.org/perspectives-article/the-morris-canal/",
  }),
  entry({
    id: "aun-roxbury-ledgewood-2016",
    sortKey: "Aun, Fred",
    category: "article",
    section: "secondary",
    cmos:
      'Aun, Fred. "Roxbury Picks a Company to Further Restore an Important Piece of the Morris Canal in Ledgewood." TAPinto. 2016. https://www.tapinto.net/towns/roxbury/sections/roxbury-roots-and-history/articles/roxbury-picks-a-company-to-further-restore-an-important-piece-of-the-morris-canal-in-ledgewood.',
    url: "https://www.tapinto.net/towns/roxbury/sections/roxbury-roots-and-history/articles/roxbury-picks-a-company-to-further-restore-an-important-piece-of-the-morris-canal-in-ledgewood",
  }),
  entry({
    id: "balston-port-morris-2017",
    sortKey: "Balston",
    category: "website",
    section: "secondary",
    cmos:
      'Balston. "A Port Morris NJ Vintage Photo Album." Landingnewjersey.com. 2017. http://www.landingnewjersey.com/portmorris5.htm.',
    url: "http://www.landingnewjersey.com/portmorris5.htm",
  }),
  entry({
    id: "balston-roxbury-canal-2025",
    sortKey: "Balston",
    category: "website",
    section: "secondary",
    cmos:
      'Balston. "Morris Canal in Roxbury Township, New Jersey NJ." Roxburynewjersey.com. 2025. http://www.roxburynewjersey.com/canal.htm.',
    url: "http://www.roxburynewjersey.com/canal.htm",
  }),
  entry({
    id: "bowie-industrial-revolution-2023",
    sortKey: "Bowie, Desiree",
    category: "article",
    section: "secondary",
    cmos:
      'Bowie, Desiree. "Exploring the Impact of the Industrial Revolution Factory System." HowStuffWorks. July 11, 2023. https://history.howstuffworks.com/historical-events/industrial-revolution-factory.htm.',
    url: "https://history.howstuffworks.com/historical-events/industrial-revolution-factory.htm",
  }),
  entry({
    id: "brightman-titus-2025",
    sortKey: "Brightman, Pat",
    category: "article",
    section: "secondary",
    cmos:
      'Brightman, Pat. "Nutley Resident, Richard Titus, 99, Recalls Working on Morris Canal." Nutley Historical Society. 2025. https://www.nutleyhistoricalsociety.org/articles/nutley-resident-richard-titus-99-recalls-working-morris-canal.',
    url: "https://www.nutleyhistoricalsociety.org/articles/nutley-resident-richard-titus-99-recalls-working-morris-canal",
  }),
  entry({
    id: "britannica-ny-central-2024",
    sortKey: "Britannica Money",
    category: "website",
    section: "secondary",
    cmos:
      "Britannica Money. New York Central Railroad Company. April 3, 2024. https://www.britannica.com/money/New-York-Central-Railroad-Company.",
    url: "https://www.britannica.com/money/New-York-Central-Railroad-Company",
  }),
  entry({
    id: "campbell-heritage-morris-canal",
    sortKey: "Campbell Cultural Heritage House",
    category: "website",
    section: "secondary",
    cmos:
      'Campbell Cultural Heritage House. "Morris Canal." 2024. https://campbellhouse.org/morris-canal.',
    url: "https://campbellhouse.org/morris-canal",
  }),
  entry({
    id: "canal-bank-notes",
    sortKey: "Canal Bank Notes",
    category: "archive",
    section: "secondary",
    cmos:
      '"Canal Bank Notes." Accessed May 29, 2026. http://www.delphilibrarydigital.com/uploads/1/0/3/4/103477448/canal_bank_notes.pdf.',
    url: "http://www.delphilibrarydigital.com/uploads/1/0/3/4/103477448/canal_bank_notes.pdf",
  }),
  entry({
    id: "canal-day-history",
    sortKey: "Canal Day",
    category: "website",
    section: "secondary",
    cmos: 'Canal Day. "History." 2026. https://www.canalday.org/history.html.',
    url: "https://www.canalday.org/history.html",
  }),
  entry({
    id: "chafetz-nj-postal-morris",
    sortKey: "Chafetz, Donald",
    category: "article",
    section: "secondary",
    cmos:
      'Chafetz, Donald. "The New Jersey Postal History Society Philatelic Morris Canal." 2014. https://www.njpostalhistory.org/media/pdf/philmorrcanal.pdf.',
    url: "https://www.njpostalhistory.org/media/pdf/philmorrcanal.pdf",
  }),
  entry({
    id: "chong-industrial-time-2020",
    sortKey: "Chong, Alvin",
    category: "article",
    section: "secondary",
    cmos:
      'Chong, Alvin. "In-Depth: Time Consciousness and Discipline in the Industrial Revolution." SJX Watches. July 21, 2020. https://watchesbysjx.com/2020/07/time-consciousness-and-discipline-industrial-revolution.html.',
    url: "https://watchesbysjx.com/2020/07/time-consciousness-and-discipline-industrial-revolution.html",
  }),
  entry({
    id: "mercerme-illustrated-history-2025",
    sortKey: "MercerMe",
    category: "article",
    section: "secondary",
    cmos:
      'Community Contributor. "The Morris Canal: An Illustrated History." MercerMe. April 22, 2025. https://mercerme.com/the-morris-canal-an-illustrated-history/.',
    url: "https://mercerme.com/the-morris-canal-an-illustrated-history/",
  }),
  entry({
    id: "debruler-industrial-scenery-2020",
    sortKey: "DeBruler, Dennis",
    category: "website",
    section: "secondary",
    cmos:
      'DeBruler, Dennis. "1831-1924 Morris Canal with Incline Planes in New Jersey." Industrial Scenery. 2020. https://industrialscenery.blogspot.com/2020/11/1831-1924-morris-canal-with-incline.html.',
    url: "https://industrialscenery.blogspot.com/2020/11/1831-1924-morris-canal-with-incline.html",
  }),
  entry({
    id: "fisher-garden-state-2014",
    sortKey: "Fisher, Douglas",
    category: "article",
    section: "secondary",
    cmos:
      'Fisher, Douglas. "Why the Title \'the Garden State\' Still Prevails." New Jersey Business Magazine. April 6, 2014. https://njbmagazine.com/monthly-articles/why-the-title-the-garden-state-still-prevails/.',
    url: "https://njbmagazine.com/monthly-articles/why-the-title-the-garden-state-still-prevails/",
  }),
  entry({
    id: "geisheimer-oldnewark-morris",
    sortKey: "Geisheimer, Glenn",
    category: "website",
    section: "secondary",
    cmos:
      'Geisheimer, Glenn. "Morris Canal." Oldnewark.com. 2026. https://oldnewark.com/waterways/morriscanal.php.',
    url: "https://oldnewark.com/waterways/morriscanal.php",
  }),
  entry({
    id: "goldstein-lv-pier-2021",
    sortKey: "Goldstein, Philip M.",
    category: "website",
    section: "secondary",
    cmos:
      'Goldstein, Philip M. "West 27th Street Freight Yard & Railroad / Pier 66 - Lehigh Valley Railroad." Trainweb.com. 2021. http://members.trainweb.com/bedt/indloco/lv27.html.',
    url: "http://members.trainweb.com/bedt/indloco/lv27.html",
  }),
  entry({
    id: "havemann-morris-bits-2023",
    sortKey: "Havemann, Paul",
    category: "website",
    section: "secondary",
    cmos:
      'Havemann, Paul. "Morris Canal – Bits of History: Morris & Passaic County NJ." Paulhavemann.com. February 25, 2023. https://paulhavemann.com/tag/morris-canal/.',
    url: "https://paulhavemann.com/tag/morris-canal/",
  }),
  entry({
    id: "morris-county-restoration-roxbury-2025",
    sortKey: "Morris County, NJ",
    category: "government",
    section: "secondary",
    cmos:
      'Morris County, NJ. "Historic Morris Canal Restoration Completed in Roxbury Township." 2025. https://www.morriscountynj.gov/Morris-County-News/Historic-Morris-Canal-Restoration-Completed-in-Roxbury-Township.',
    url: "https://www.morriscountynj.gov/Morris-County-News/Historic-Morris-Canal-Restoration-Completed-in-Roxbury-Township",
  }),
  entry({
    id: "morris-county-wharton-dedication-2022",
    sortKey: "Morris County, NJ",
    category: "government",
    section: "secondary",
    cmos:
      'Morris County, NJ. "Historic Morris Canal Restoration to Be Dedicated in Wharton Aug. 20." 2022. https://www.morriscountynj.gov/Morris-County-News/Historic-Morris-Canal-Restoration-to-be-Dedicated-in-Wharton-Aug.-20.',
    url: "https://www.morriscountynj.gov/Morris-County-News/Historic-Morris-Canal-Restoration-to-be-Dedicated-in-Wharton-Aug.-20",
  }),
  entry({
    id: "wikipedia-lumber-industry-2020",
    sortKey: "Wikipedia",
    category: "website",
    section: "secondary",
    cmos:
      'Wikipedia. "History of the Lumber Industry in the United States." February 26, 2020. https://en.wikipedia.org/wiki/History_of_the_lumber_industry_in_the_United_States.',
    url: "https://en.wikipedia.org/wiki/History_of_the_lumber_industry_in_the_United_States",
  }),
  entry({
    id: "hunter-research-lock2-2012",
    sortKey: "Hunter Research, Inc.",
    category: "article",
    section: "secondary",
    cmos:
      'Hunter Research, Inc. "Morris Canal Lock 2 East, Wharton, NJ." January 9, 2012. https://www.hunterresearch.com/news/2012/1/9/morris-canal-lock-2-east-wharton-nj.html.',
    url: "https://www.hunterresearch.com/news/2012/1/9/morris-canal-lock-2-east-wharton-nj.html",
  }),
  entry({
    id: "hurdle-nj-spotlight-2019",
    sortKey: "Hurdle, Jon",
    category: "article",
    section: "secondary",
    cmos:
      'Hurdle, Jon. "Morris Canal Captures the Can-Do History of America\'s Industrial Revolution." NJ Spotlight News. December 23, 2019. https://www.njspotlightnews.org/2019/12/morris-canal-captures-the-can-do-history-of-americas-industrial-revolution/.',
    url: "https://www.njspotlightnews.org/2019/12/morris-canal-captures-the-can-do-history-of-americas-industrial-revolution/",
  }),
  entry({
    id: "indiana-historical-mules-2019",
    sortKey: "Indiana Historical Society",
    category: "image",
    section: "secondary",
    cmos:
      'Indiana Historical Society. "Mules Towing Freight Barge on Canal." 2019. https://images.indianahistory.org/digital/collection/p16797coll53/id/3017/.',
    url: "https://images.indianahistory.org/digital/collection/p16797coll53/id/3017/",
  }),
  entry({
    id: "its-history-lost-canals-2021",
    sortKey: "IT'S HISTORY",
    category: "video",
    section: "secondary",
    cmos:
      'IT\'S HISTORY. "LOST Canals of New Jersey - the Story of Morris & Delaware and Raritan Canals." YouTube. October 7, 2021. https://www.youtube.com/watch?v=rnZk7pQOXRA.',
    url: "https://www.youtube.com/watch?v=rnZk7pQOXRA",
  }),
  entry({
    id: "jlent-arboretum-talk-2018",
    sortKey: "jlent",
    category: "article",
    section: "secondary",
    cmos:
      'jlent. "Morris Canal History Talk at Arboretum in Morris Township." New Jersey Hills. April 24, 2018. https://www.newjerseyhills.com/morris_news_bee/news/morris-canal-history-talk-at-arboretum-in-morris-township/article_8eed9e86-c6a9-5582-9502-422d56c030a5.html.',
    url: "https://www.newjerseyhills.com/morris_news_bee/news/morris-canal-history-talk-at-arboretum-in-morris-township/article_8eed9e86-c6a9-5582-9502-422d56c030a5.html",
  }),
  entry({
    id: "katmilsop-rockwell-montclair-2012",
    sortKey: "katmilsop",
    category: "article",
    section: "secondary",
    cmos:
      'katmilsop. "Rich Rockwell: The Morris Canal, My Favorite Place in Baristaville." Montclair Local. June 11, 2012. https://montclairlocal.news/2012/06/rich-rockwell-the-morris-canal-my-favorite-place-in-baristaville/.',
    url: "https://montclairlocal.news/2012/06/rich-rockwell-the-morris-canal-my-favorite-place-in-baristaville/",
  }),
  entry({
    id: "kofsky-greenway-2017",
    sortKey: "Kofsky, Jared",
    category: "article",
    section: "secondary",
    cmos:
      'Kofsky, Jared. "Plans Underway for Statewide Greenway Connecting Jersey City with Phillipsburg." Jersey Digs. February 21, 2017. https://jerseydigs.com/morris-canal-greenway-request-for-proposals/.',
    url: "https://jerseydigs.com/morris-canal-greenway-request-for-proposals/",
  }),
  entry({
    id: "njcu-libguides-morriscanal",
    sortKey: "New Jersey City University",
    category: "website",
    section: "secondary",
    cmos:
      'New Jersey City University. "Morris Canal in Jersey City." Library Guides. 2015. https://njcu.libguides.com/morriscanal.',
    url: "https://njcu.libguides.com/morriscanal",
  }),
  entry({
    id: "skylands-boat-recovery-2016",
    sortKey: "Skylands Visitor Magazine",
    category: "article",
    section: "secondary",
    cmos:
      'Skylands Visitor Magazine. "Morris Canal Boat Recovery." Njskylands.com. 2016. https://njskylands.com/history-morris-canal-boat-recovery.',
    url: "https://njskylands.com/history-morris-canal-boat-recovery",
  }),
  entry({
    id: "skylands-birds-lock-2018",
    sortKey: "Skylands Visitor Magazine",
    category: "article",
    section: "secondary",
    cmos:
      'Skylands Visitor Magazine. "Bird\'s Lock at Wharton." Njskylands.com. 2018. https://www.njskylands.com/history-morris-canal-wharton.',
    url: "https://www.njskylands.com/history-morris-canal-wharton",
  }),
  entry({
    id: "skylands-tour-morris-2025",
    sortKey: "Skylands Visitor Magazine",
    category: "article",
    section: "secondary",
    cmos:
      'Skylands Visitor Magazine. "The Morris Canal in New Jersey." Njskylands.com. 2025. https://www.njskylands.com/tour-morris-canal.',
    url: "https://www.njskylands.com/tour-morris-canal",
  }),
  entry({
    id: "mcnally-morris-canal-map",
    sortKey: "McNally, Rand",
    category: "map",
    section: "secondary",
    cmos:
      "McNally, Rand. Morris Canal Map. Online image. Accessed 2026. https://www.andrewwillner.com/wordpress/wp-content/uploads/2013/09/morris-canal-map-high-resolution.jpg.",
    url: "https://www.andrewwillner.com/wordpress/wp-content/uploads/2013/09/morris-canal-map-high-resolution.jpg",
  }),
  entry({
    id: "montclair-history-greenway-2020",
    sortKey: "Montclair History Center",
    category: "video",
    section: "secondary",
    cmos:
      'Montclair History Center. "History at Home: The Morris Canal Greenway." YouTube. June 3, 2020. https://youtu.be/r_dTPjJ2NpE.',
    url: "https://youtu.be/r_dTPjJ2NpE",
  }),
  entry({
    id: "wikipedia-morris-canal-2023",
    sortKey: "Wikipedia",
    category: "website",
    section: "secondary",
    cmos:
      'Wikipedia. "Morris Canal." March 10, 2023. https://en.wikipedia.org/wiki/Morris_Canal.',
    url: "https://en.wikipedia.org/wiki/Morris_Canal",
  }),
  entry({
    id: "morriscounty-boonton-tour-2026",
    sortKey: "Morris County Historical Society",
    category: "website",
    section: "secondary",
    cmos:
      'Morris County Historical Society. "Morris Canal & Boonton Ironworks Walking Tour." 2026. https://morriscountyhistory.org/event/morris-canal-boonton-ironworks-walking-tour/.',
    url: "https://morriscountyhistory.org/event/morris-canal-boonton-ironworks-walking-tour/",
  }),
  entry({
    id: "canalsocietynj-morris-canal-2025",
    sortKey: "Canal Society of New Jersey",
    category: "website",
    section: "secondary",
    cmos:
      'Canal Society of New Jersey. "Morris Canal." January 27, 2025. https://canalsocietynj.org/morris-canal/.',
    url: "https://canalsocietynj.org/morris-canal/",
  }),
  entry({
    id: "passaic-county-morris-canal",
    sortKey: "Passaic County, NJ",
    category: "government",
    section: "secondary",
    cmos:
      'Passaic County, NJ. "Morris Canal." 2026. https://www.passaiccountynj.org/departments/planning-economic-development/plans-and-technical-studies/morris-canal.',
    url: "https://www.passaiccountynj.org/departments/planning-economic-development/plans-and-technical-studies/morris-canal",
  }),
  entry({
    id: "oldstocks-morris-canal-1872",
    sortKey: "Collectible Stocks and Bonds",
    category: "archive",
    section: "secondary",
    cmos:
      'Collectible Stocks and Bonds. "Morris Canal and Banking Company (of 1844) Dated 1872 (New Jersey)." 2026. https://www.oldstocks.com/morris-canal-and-banking-company-of-1844-dated-1872-new-jersey/.',
    url: "https://www.oldstocks.com/morris-canal-and-banking-company-of-1844-dated-1872-new-jersey/",
  }),
  entry({
    id: "picryl-phillipsburg",
    sortKey: "Picryl",
    category: "image",
    section: "secondary",
    cmos:
      'Picryl. "Morris Canal, Phillipsburg, Warren County, NJ." Accessed 2026. https://picryl.com/media/morris-canal-phillipsburg-warren-county-nj-144.',
    url: "https://picryl.com/media/morris-canal-phillipsburg-warren-county-nj-144",
  }),
  entry({
    id: "canalsocietynj-museum-2025",
    sortKey: "Canal Society of New Jersey",
    category: "website",
    section: "secondary",
    cmos:
      'Canal Society of New Jersey. "Museum." February 4, 2025. https://canalsocietynj.org/museum/.',
    url: "https://canalsocietynj.org/museum/",
  }),
  entry({
    id: "njalmanac-economy",
    sortKey: "New Jersey Almanac",
    category: "website",
    section: "secondary",
    cmos:
      'New Jersey Almanac. "New Jersey Economy: Overview." https://www.newjerseyalmanac.com/economy-overview.html.',
    url: "https://www.newjerseyalmanac.com/economy-overview.html",
  }),
  entry({
    id: "mypaperonline-superhighway-2021",
    sortKey: "My Paper Online",
    category: "article",
    section: "secondary",
    cmos:
      'new_view_media. "The Morris Canal, the First \'Superhighway\' in New Jersey." My Paper Online. February 2021. https://www.mypaperonline.com/the-morris-canal-the-first-superhighway-in-new-jersey.html.',
    url: "https://www.mypaperonline.com/the-morris-canal-the-first-superhighway-in-new-jersey.html",
  }),
  entry({
    id: "njdarm-pmors000",
    sortKey: "New Jersey State Archives",
    category: "archive",
    section: "secondary",
    cmos:
      'New Jersey State Archives. "NJDARM: Collection Guide." Accessed May 29, 2026. https://www.nj.gov/state/archives/guides/pmors000.pdf.',
    url: "https://www.nj.gov/state/archives/guides/pmors000.pdf",
  }),
  entry({
    id: "njmep-manufacturing-2022",
    sortKey: "NJMEP",
    category: "article",
    section: "secondary",
    cmos:
      'NJMEP. "A Brief History of Manufacturing in New Jersey from the Colonial to Modern Eras, Part 1." November 3, 2022. https://www.njmep.org/blog/a-brief-history-of-manufacturing-in-new-jersey-from-the-colonial-to-modern-eras/.',
    url: "https://www.njmep.org/blog/a-brief-history-of-manufacturing-in-new-jersey-from-the-colonial-to-modern-eras/",
  }),
  entry({
    id: "morris-county-railroaders-2026",
    sortKey: "Morris County, NJ",
    category: "government",
    section: "secondary",
    cmos:
      'Morris County, NJ. "Railroaders." 2026. https://www.morriscountynj.gov/Departments/Planning-and-Preservation/Cultural-Resources-Survey/Railroaders.',
    url: "https://www.morriscountynj.gov/Departments/Planning-and-Preservation/Cultural-Resources-Survey/Railroaders",
  }),
  entry({
    id: "remaly-montville-park-2013",
    sortKey: "Remaly, Jake",
    category: "article",
    section: "secondary",
    cmos:
      'Remaly, Jake. "Morris Canal Park Dedicated in Montville." Montville Patch. July 23, 2013. https://patch.com/new-jersey/montville/morris-canal-park-dedicated-in-montville.',
    url: "https://patch.com/new-jersey/montville/morris-canal-park-dedicated-in-montville",
  }),
  entry({
    id: "hathitrust-morris-investigation-1912",
    sortKey: "Morris Canal Investigation Committee",
    category: "government",
    section: "secondary",
    cmos:
      'Morris Canal Investigation Committee. Report of the Morris Canal Investigation Committee Appointed under Joint Resolution of April 12, 1912. HathiTrust. https://babel.hathitrust.org/cgi/pt?id=nyp.33433020621284&seq=9.',
    url: "https://babel.hathitrust.org/cgi/pt?id=nyp.33433020621284&seq=9",
  }),
  entry({
    id: "scientific-american-1857",
    sortKey: "Scientific American",
    category: "article",
    section: "secondary",
    cmos:
      "Scientific American. June 27, 1857. https://www.scientificamerican.com/issue/sa/1857/06-27/.",
    url: "https://www.scientificamerican.com/issue/sa/1857/06-27/",
  }),
  entry({
    id: "njherald-book-2019",
    sortKey: "New Jersey Herald",
    category: "article",
    section: "secondary",
    cmos:
      'New Jersey Herald. "Book on Morris Canal Published." November 18, 2019. https://www.njherald.com/story/lifestyle/around-town/2019/11/18/book-on-morris-canal-published/2265796007/.',
    url: "https://www.njherald.com/story/lifestyle/around-town/2019/11/18/book-on-morris-canal-published/2265796007/",
  }),
  entry({
    id: "nps-lock2-master-plan-2008",
    sortKey: "Street, Robert",
    category: "government",
    section: "secondary",
    cmos:
      'Street, Robert, and Hugh Park. Historic Site Master Plan & Feasibility Study: Lock 2 East of the Morris Canal. 2008. https://npshistory.com/publications/lode/mp-fs-morris-canal-lock2-2008.pdf.',
    url: "https://npshistory.com/publications/lode/mp-fs-morris-canal-lock2-2008.pdf",
  }),
  entry({
    id: "american-yawp-industrial-2019",
    sortKey: "American Yawp",
    category: "website",
    section: "secondary",
    cmos:
      'American Yawp. "Life in Industrial America." January 22, 2019. https://www.americanyawp.com/text/18-industrial-america/.',
    url: "https://www.americanyawp.com/text/18-industrial-america/",
  }),
  entry({
    id: "pbs-carnegie-railroads",
    sortKey: "PBS",
    category: "website",
    section: "secondary",
    cmos:
      'PBS. "The Railroads." American Experience. https://www.pbs.org/wgbh/americanexperience/features/carnegie-railroads/.',
    url: "https://www.pbs.org/wgbh/americanexperience/features/carnegie-railroads/",
  }),
  entry({
    id: "hathitrust-vermeule-engineer",
    sortKey: "Vermeule, Cornelius",
    category: "government",
    section: "secondary",
    cmos:
      'Vermeule, Cornelius. Final Report of Consulting and Directing Engineer. HathiTrust. https://babel.hathitrust.org/cgi/pt?id=mdp.39015066469464&seq=7.',
    url: "https://babel.hathitrust.org/cgi/pt?id=mdp.39015066469464&seq=7",
  }),
  entry({
    id: "wilson-catskill-morris-canal",
    sortKey: "Wilson, Herbert",
    category: "website",
    section: "secondary",
    cmos:
      'Wilson, Herbert. "Railroad Extra - the Morris Canal and Its Inclined Planes." Catskillarchive.com. 2026. https://www.catskillarchive.com/rrextra/abnjmc.Html.',
    url: "https://www.catskillarchive.com/rrextra/abnjmc.Html",
  }),
  entry({
    id: "morris-canal-njtpa-arcgis-2020",
    sortKey: "Morris Canal Working Group",
    category: "website",
    section: "secondary",
    cmos:
      'Morris Canal Working Group. "Organization." ArcGIS Hub. 2020. https://morris-canal-njtpa.hub.arcgis.com/pages/organization.',
    url: "https://morris-canal-njtpa.hub.arcgis.com/pages/organization",
  }),
];

/** Site holdings: scholarly works, images, and map data used in the interactive project. */
export const SITE_BIBLIOGRAPHY_ENTRIES: EntryInput[] = [
  entry({
    id: "beard-1976",
    sortKey: "Beard, Charles B.",
    category: "book",
    section: "site",
    cmos:
      "Beard, Charles B. The Morris Canal: A Photographic History. Easton, PA: Canal History Press, 1976.",
  }),
  entry({
    id: "lee-1979",
    sortKey: "Lee, James",
    category: "book",
    section: "site",
    cmos:
      "Lee, James. The Morris Canal: A Photographic History. Enlarged rev. ed. Easton, PA: Canal History Press, 1979.",
  }),
  entry({
    id: "macasek-1997",
    sortKey: "Macasek, Joseph J.",
    category: "book",
    section: "site",
    cmos:
      "Macasek, Joseph J. Guide to the Morris Canal in Morris County. 2nd ed. Morristown, NJ: Morris County Heritage Commission, 1997.",
  }),
  entry({
    id: "kearney-1977",
    sortKey: "Kearney, Gerald",
    category: "book",
    section: "site",
    cmos:
      "Kearney, Gerald. Morris County Canals: Morris Canal, Pompton Feeder, Tsucunarawas Water Race. Hopewell, NJ: Canal Press, 1977.",
  }),
  entry({
    id: "trollope-1832",
    sortKey: "Trollope, Frances Milton",
    category: "book",
    section: "site",
    cmos:
      "Trollope, Frances Milton. Domestic Manners of the Americans. 2 vols. London: Whittaker, Treacher, 1832.",
  }),
  entry({
    id: "nj-charter-1824",
    sortKey: "New Jersey. Legislature",
    category: "government",
    section: "site",
    cmos:
      "New Jersey. Legislature. An Act to Incorporate the Morris Canal and Banking Company. December 31, 1824. In Laws of the State of New Jersey, 1824. Trenton: State of New Jersey.",
  }),
  entry({
    id: "nrhp-1974",
    sortKey: "National Park Service",
    category: "government",
    section: "site",
    cmos:
      "National Park Service. Morris Canal Historic District. National Register of Historic Places Inventory—Nomination Form. October 1, 1974. NRHP reference no. 74002222.",
    url: "https://npgallery.nps.gov/NRHP",
  }),
  entry({
    id: "haer-nj30",
    sortKey: "Historic American Engineering Record",
    category: "archive",
    section: "site",
    cmos:
      "Historic American Engineering Record. Morris Canal, Inclined Plane 10 West, Phillipsburg, Warren County, NJ. Survey HAER NJ-30. Documentation compiled after 1968. Library of Congress.",
    url: "https://www.loc.gov/item/nj0198/",
  }),
  entry({
    id: "renwick-plane-report",
    sortKey: "Renwick, James",
    category: "article",
    section: "site",
    cmos:
      "Renwick, James. Report on Inclined Planes for the Morris Canal. New York: Morris Canal and Banking Company, ca. 1825.",
  }),
  entry({
    id: "nj-archives-morris",
    sortKey: "New Jersey State Archives",
    category: "website",
    section: "site",
    cmos:
      'New Jersey State Archives. "Morris Canal and Banking Company Records." Accessed May 29, 2026. https://www.nj.gov/state/archives/catpcanalmo.html.',
    url: "https://www.nj.gov/state/archives/catpcanalmo.html",
  }),
  entry({
    id: "nj-state-lib-maps",
    sortKey: "New Jersey State Library",
    category: "website",
    section: "site",
    cmos:
      'New Jersey State Library. Digital Jerseyana Collection: Morris Canal Maps. Accessed May 29, 2026. https://www.njstatelib.org/digital-jerseyana-collection/.',
    url: "https://www.njstatelib.org/digital-jerseyana-collection/",
  }),
  entry({
    id: "desobry-map-1827",
    sortKey: "Desobry, Prosper",
    category: "map",
    section: "site",
    cmos:
      "Desobry, Prosper. Line of the Morris Canal, New Jersey, 1827. Lithograph. New York: Imbert's Lithography, 1827. New York Public Library, Map Division.",
    url: "https://digitalcollections.nypl.org/items/510d47da-efb4-a3d9-e040-e00a18064a99",
  }),
  entry({
    id: "img-hero",
    sortKey: "Canal boat approaching inclined plane",
    category: "image",
    section: "site",
    cmos:
      "Anonymous. Canal Boat and Inclined Plane Powerhouse. c. 1870. Illustration. Morris Canal Centennial Interactive Map; see also Alamy stock no. 105357009.",
  }),
  entry({
    id: "img-inclined-plane",
    sortKey: "Canal boat ascending inclined plane",
    category: "image",
    section: "site",
    cmos:
      "Anonymous. Canal Boat on Inclined Plane Cradle. 19th century. Illustration. Morris Canal Centennial Interactive Map.",
  }),
  entry({
    id: "img-waterloo",
    sortKey: "Waterloo Village canal lock",
    category: "image",
    section: "site",
    cmos:
      "Anonymous. Waterloo Village, Morris Canal Lock 3 West. 19th century. Illustration. Canal Society of New Jersey collections.",
  }),
  entry({
    id: "img-canal-boat",
    sortKey: "Homeward Bound",
    category: "image",
    section: "site",
    cmos:
      "Anonymous. Homeward Bound: Canal Boat on the Morris Canal. Late 19th century. Photograph. Reproduced in Lee, The Morris Canal (1979).",
  }),
  entry({
    id: "img-canal-aha",
    sortKey: "Morris Canal registered boat",
    category: "image",
    section: "site",
    cmos:
      "Anonymous. Registered Morris Canal Boat with Boatman. Late 19th century. Photograph. HAER NJ-30; reproduced in Lee, The Morris Canal (1979).",
  }),
  entry({
    id: "img-planes-diagram",
    sortKey: "Inclined planes diagram",
    category: "image",
    section: "site",
    cmos:
      "Morris Canal and Banking Company. Inclined Plane System: Powerhouse, Turbine, and Cable Mechanism. 19th century. Technical diagram. HAER NJ-30.",
    url: "https://www.loc.gov/item/nj0198/",
  }),
  entry({
    id: "img-hopatcong-bg",
    sortKey: "Lake Hopatcong summit",
    category: "image",
    section: "site",
    cmos:
      "Anonymous. Lake Hopatcong and Morris Canal Summit Level. 20th century. Photograph. Morris Canal Centennial Interactive Map.",
  }),
  entry({
    id: "cma-incline-1870",
    sortKey: "Cleveland Museum of Art",
    category: "image",
    section: "site",
    cmos:
      "Cleveland Museum of Art. Incline on the Morris and Essex Canal, Newark, New Jersey. c. 1870. Albumen print. Accession 2006.163.",
    url: "https://www.clevelandart.org/art/2006.163",
  }),
  entry({
    id: "loc-det-boonton",
    sortKey: "Detroit Publishing Co.",
    category: "image",
    section: "site",
    cmos:
      "Detroit Publishing Company. Top of Plane, Morris and Essex Canal, Boonton, N.J. Between 1890 and 1901. Photograph. Library of Congress, det.4a07225.",
    url: "https://www.loc.gov/item/2016801300/",
  }),
  entry({
    id: "openstreetmap",
    sortKey: "OpenStreetMap contributors",
    category: "website",
    section: "site",
    cmos:
      "OpenStreetMap contributors. OpenStreetMap. Accessed May 29, 2026. https://www.openstreetmap.org/.",
    url: "https://www.openstreetmap.org/copyright",
  }),
  entry({
    id: "locationiq",
    sortKey: "LocationIQ",
    category: "website",
    section: "site",
    cmos:
      "LocationIQ. Map tiles (streets). Accessed May 29, 2026. https://locationiq.com/.",
    url: "https://locationiq.com/",
  }),
  entry({
    id: "documentary",
    sortKey: "Morris Canal Centennial Documentary",
    category: "video",
    section: "site",
    cmos:
      "Morris Canal Centennial Documentary. Morris Canal Centennial Project. Streaming video. Accessed May 29, 2026.",
  }),
];
