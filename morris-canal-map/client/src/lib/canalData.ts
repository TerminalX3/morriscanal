// Morris Canal Historical Data
// Route: Phillipsburg (Delaware River) → Jersey City (Hudson River)
// Operating: 1829–1924 | Length: 107 miles | Elevation change: 1,674 ft

export interface Landmark {
  id: string;
  name: string;
  type: 'terminus' | 'inclined-plane' | 'lock' | 'town' | 'aqueduct' | 'summit' | 'feeder';
  lat: number;
  lng: number;
  description: string;
  historicalNote?: string;
  elevation?: number;
  county?: string;
  image?: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'construction' | 'operation' | 'engineering' | 'decline' | 'legacy';
}

export const CANAL_ROUTE_COORDS: [number, number][] = [
  // Western terminus at Phillipsburg (Delaware River)
  [40.6937, -75.1899],
  // Warren County section
  [40.7050, -75.1200],
  [40.7120, -75.0500],
  // Port Warren / Bowerstown area
  [40.7230, -74.9800],
  [40.7280, -74.9200],
  // Port Colden
  [40.7350, -74.8700],
  // Port Murray
  [40.7400, -74.8200],
  // Hackettstown area
  [40.8530, -74.8280],
  // Guinea Hollow / Waterloo area
  [40.9010, -74.7680],
  // Stanhope / Lake Musconetcong
  [40.9000, -74.7100],
  // Lake Hopatcong (Summit)
  [40.9500, -74.6500],
  // Morris County descent
  [40.9200, -74.5800],
  // Ledgewood / Wharton area
  [40.8900, -74.5700],
  // Dover
  [40.8850, -74.5590],
  // Boonton
  [40.9000, -74.4000],
  // Lincoln Park
  [40.9200, -74.3000],
  // Pompton / Passaic County
  [40.9700, -74.2900],
  // Little Falls
  [40.8780, -74.2120],
  // Paterson
  [40.9150, -74.1710],
  // Clifton
  [40.8580, -74.1640],
  // Bloomfield
  [40.7960, -74.1870],
  // Newark
  [40.7357, -74.1724],
  // Kearny
  [40.7680, -74.1450],
  // Jersey City (Hudson River terminus)
  [40.7178, -74.0431],
];

export const LANDMARKS: Landmark[] = [
  {
    id: 'phillipsburg',
    name: 'Phillipsburg',
    type: 'terminus',
    lat: 40.6937,
    lng: -75.1899,
    description: 'Western terminus of the Morris Canal on the Delaware River. A cable ferry connected canal boats to Easton, Pennsylvania, and the Lehigh Canal, providing access to Pennsylvania\'s anthracite coal fields.',
    historicalNote: 'Canal boats would cross the Delaware River by cable ferry to reach the Lehigh Canal and travel to Mauch Chunk (now Jim Thorpe) to receive coal cargoes from the mines.',
    elevation: 240,
    county: 'Warren',
  },
  {
    id: 'port-warren',
    name: 'Port Warren',
    type: 'inclined-plane',
    lat: 40.7230,
    lng: -74.9800,
    description: 'Site of Inclined Plane 9 West — the longest plane on the canal, raising boats 100 feet. One of three double-tracked planes that allowed boats to ascend and descend simultaneously.',
    historicalNote: 'Plane 9 West was one of the most impressive engineering feats on the canal. The double-track design allowed continuous operation, dramatically increasing throughput during peak seasons.',
    elevation: 380,
    county: 'Warren',
  },
  {
    id: 'bowerstown',
    name: 'Bowerstown',
    type: 'aqueduct',
    lat: 40.7280,
    lng: -74.9200,
    description: 'Site of the Pohatcong Creek Aqueduct, built to carry the canal over the creek. The aqueduct at the base of Inclined Plane 7 West is now used as a road bridge on Plane Hill Road.',
    historicalNote: 'The aqueduct over Pohatcong Creek is one of the few surviving structural remnants of the Morris Canal, repurposed as a road bridge and still in use today.',
    elevation: 420,
    county: 'Warren',
  },
  {
    id: 'port-colden',
    name: 'Port Colden',
    type: 'inclined-plane',
    lat: 40.7350,
    lng: -74.8700,
    description: 'Location of Inclined Plane 6 West, one of three double-tracked planes. The village of Port Colden grew up around the canal operations, serving boatmen and their families.',
    historicalNote: 'The double-tracked planes at Port Colden allowed boats traveling in opposite directions to pass simultaneously, a critical efficiency improvement during the canal\'s peak years.',
    elevation: 520,
    county: 'Warren',
  },
  {
    id: 'port-murray',
    name: 'Port Murray',
    type: 'town',
    lat: 40.7400,
    lng: -74.8200,
    description: 'A thriving canal community in Warren County. The canal passed through here on its way east, with the second-longest level section (11 miles) running from Port Murray to Saxon Falls.',
    historicalNote: 'Port Murray was one of several "Port" communities along the canal, named for the commerce they facilitated. The town grew significantly during the canal\'s peak operating years.',
    elevation: 560,
    county: 'Warren',
  },
  {
    id: 'hackettstown',
    name: 'Hackettstown',
    type: 'town',
    lat: 40.8530,
    lng: -74.8280,
    description: 'A significant town along the canal route in Warren County. The canal brought commerce and industry to Hackettstown, transforming it from a quiet settlement into a regional hub.',
    historicalNote: 'The Morris Canal was instrumental in Hackettstown\'s growth during the mid-19th century, enabling the transport of iron ore from local mines to furnaces along the route.',
    elevation: 620,
    county: 'Warren',
  },
  {
    id: 'waterloo-village',
    name: 'Waterloo Village',
    type: 'town',
    lat: 40.9010,
    lng: -74.7680,
    description: 'A restored canal town in Sussex County featuring the remains of an inclined plane, a guard lock, a watered section of the canal, a canal store, and other period buildings. The Canal Society of New Jersey maintains a museum here.',
    historicalNote: 'Waterloo Village is one of the best-preserved canal communities in New Jersey. Lock 3 West and the surrounding structures provide a vivid picture of life along the Morris Canal.',
    elevation: 680,
    county: 'Sussex',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-waterloo-86WZ4rL9S39FU7CafTBHUL.webp',
  },
  {
    id: 'stanhope',
    name: 'Stanhope',
    type: 'inclined-plane',
    lat: 40.9000,
    lng: -74.7100,
    description: 'Site of Inclined Plane 2 West, which had a 72-foot lift. A comparison showed the plane took just 5 minutes 30 seconds to raise a loaded boat, versus 96 minutes for an equivalent flight of 12 locks — using 23 times less water.',
    historicalNote: 'The ASCE designated the hydraulic-powered inclined plane system of the Morris Canal a Historic Civil Engineering Landmark in 1980, with Stanhope cited as a key location.',
    elevation: 740,
    county: 'Sussex',
  },
  {
    id: 'lake-hopatcong',
    name: 'Lake Hopatcong (Summit)',
    type: 'summit',
    lat: 40.9500,
    lng: -74.6500,
    description: 'The summit level of the canal and its primary water source. New Jersey\'s largest lake served as the canal\'s reservoir, supplying water to both the eastern and western sections. The canal\'s highest point reached 914 feet above sea level.',
    historicalNote: 'George P. MacCulloch, the Morristown businessman credited with conceiving the canal, reportedly had the idea while visiting Lake Hopatcong. The lake\'s elevation made it the natural summit for the canal\'s crossing of the New Jersey highlands.',
    elevation: 914,
    county: 'Morris/Sussex',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/morris-canal-map-bg-65hrasmyQdCrTVNBPf72Vb.webp',
  },
  {
    id: 'dover',
    name: 'Dover',
    type: 'town',
    lat: 40.8850,
    lng: -74.5590,
    description: 'A key industrial town in Morris County that grew significantly due to the canal. Dover\'s iron industry was directly fueled by the anthracite coal transported on the Morris Canal, transforming it into a major manufacturing center.',
    historicalNote: 'Dover was among the towns that transformed from a quiet settlement into a thriving industrial hub thanks to the Morris Canal. The canal provided the critical link between Pennsylvania coal and New Jersey iron.',
    elevation: 620,
    county: 'Morris',
  },
  {
    id: 'wharton',
    name: 'Wharton (Lock 2 East)',
    type: 'lock',
    lat: 40.8980,
    lng: -74.5800,
    description: 'Site of Lock 2 East, one of the best-preserved sections of the Morris Canal. The Borough of Wharton purchased the lock site in 1926 and excavated the watered portion in 1976. Known as "Bird\'s Lock," it was tended by the Bird family for generations.',
    historicalNote: 'Lock 2 East overcame an elevation change of 8 feet and was the second lock east of Lake Hopatcong. The Bird family, beginning with Welch Bird in the 1860s, tended this lock for several generations, creating one of the canal\'s most personal historical connections.',
    elevation: 760,
    county: 'Morris',
  },
  {
    id: 'boonton',
    name: 'Boonton',
    type: 'inclined-plane',
    lat: 40.9000,
    lng: -74.4000,
    description: 'Site of Inclined Plane 7 East, where the canal descended dramatically from the Morris County highlands. The powerhouse for Plane 7 East was a notable engineering structure. Boonton was also home to important iron works fed by the canal.',
    historicalNote: 'The Boonton Iron Works, powered by the canal\'s water supply and fueled by coal transported on the canal, was one of the most significant industrial operations along the route.',
    elevation: 520,
    county: 'Morris',
  },
  {
    id: 'lincoln-park',
    name: 'Lincoln Park',
    type: 'town',
    lat: 40.9200,
    lng: -74.3000,
    description: 'The eastern end of the longest level section of the canal — 17 miles from Bloomfield to Lincoln Park. The Pompton feeder joined the main canal here, supplementing the water supply from Lake Hopatcong.',
    historicalNote: 'The 17-mile level from Bloomfield to Lincoln Park was the longest uninterrupted stretch of the canal, requiring no locks or planes. This section was crucial for efficient boat passage.',
    elevation: 120,
    county: 'Morris',
  },
  {
    id: 'little-falls',
    name: 'Little Falls',
    type: 'aqueduct',
    lat: 40.8780,
    lng: -74.2120,
    description: 'Site of the Little Falls Aqueduct, an 80-foot stone structure that carried the canal over the Passaic River. The aqueduct was needlessly dynamited when the canal was dismantled in the late 1920s, one of the great losses of the canal era.',
    historicalNote: 'The Little Falls Aqueduct was described by English visitor Fanny Trollope in 1832: "at one point runs along the side of a mountain at thirty feet above the tops of the highest buildings in the town of Paterson, below; at another it crosses the falls of the Passaic in a stone aqueduct sixty feet above the water in the river."',
    elevation: 80,
    county: 'Passaic',
  },
  {
    id: 'paterson',
    name: 'Paterson',
    type: 'town',
    lat: 40.9150,
    lng: -74.1710,
    description: 'The canal passed around the northern end of Garret Mountain and through Paterson, an industrial powerhouse. The Orange Street Inclined Plane was added in 1902 to bring boats over a lowered railroad grade.',
    historicalNote: 'Paterson\'s silk mills and other industries were served by the Morris Canal. The 1912 survey noted that from Jersey City to Paterson, the canal "was little more than an open sewer," but its value beyond Paterson remained significant.',
    elevation: 60,
    county: 'Passaic',
  },
  {
    id: 'newark',
    name: 'Newark',
    type: 'terminus',
    lat: 40.7357,
    lng: -74.1724,
    description: 'The original eastern terminus of the canal (completed 1831), on the Passaic River. The Newark City Subway (now Newark Light Rail) was later built along the canal\'s route through the city.',
    historicalNote: 'The first boats to traverse the completed eastern section arrived in Newark in November 1830, loaded with iron ore and iron. The canal\'s arrival transformed Newark into a major industrial center.',
    elevation: 20,
    county: 'Essex',
  },
  {
    id: 'jersey-city',
    name: 'Jersey City',
    type: 'terminus',
    lat: 40.7178,
    lng: -74.0431,
    description: 'The final eastern terminus of the canal on the Hudson River, completed 1836. The inlet where the canal connected to the Hudson is now the north edge of Liberty State Park. The Hudson-Bergen Light Rail follows part of the canal\'s right-of-way.',
    historicalNote: 'The extension to Jersey City was at sea level and supplied with water from the lower Hackensack River. The Lehigh Valley Railroad, which leased the canal in 1871, prized the Jersey City terminal properties for their access to New York Harbor.',
    elevation: 0,
    county: 'Hudson',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663459305802/mRBRW5vfnFHaDtNYjKR5kz/canal_aha_13507e3e.jpg',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1822,
    title: 'The Vision',
    description: 'Morristown businessman George P. MacCulloch conceives the idea of a canal while visiting Lake Hopatcong. He assembles a committee of prominent citizens to study its feasibility.',
    type: 'construction',
  },
  {
    year: 1824,
    title: 'Charter Granted',
    description: 'On December 31, the New Jersey Legislature charters the Morris Canal & Banking Company with $2 million in capital. The charter provides that New Jersey could take over the canal after 99 years.',
    type: 'construction',
  },
  {
    year: 1825,
    title: 'Construction Begins',
    description: 'Ground is broken at the summit level at Lake Hopatcong on October 15. Chief engineer Ephraim Beach, a former Erie Canal assistant, oversees the work. James Renwick designs the revolutionary inclined plane system.',
    type: 'construction',
  },
  {
    year: 1829,
    title: 'First Traffic',
    description: 'The first sections of the canal open for traffic. David Bates Douglass of West Point is hired to supervise construction of the inclined planes, standardizing their design across the route.',
    type: 'construction',
  },
  {
    year: 1831,
    title: 'Canal Reaches Newark',
    description: 'The Morris Canal is completed to Newark on the Passaic River. The first boat passing entirely through the canal is the Walk-on-Water. The 98-mile initial section costs $2.1 million.',
    type: 'construction',
  },
  {
    year: 1832,
    title: 'Official Opening',
    description: 'On May 20, the canal is officially opened. English visitor Fanny Trollope writes admiringly of the inclined planes: "This Morris canal is certainly an extraordinary work."',
    type: 'operation',
  },
  {
    year: 1836,
    title: 'Extension to Jersey City',
    description: 'The canal is extended eastward to Jersey City on the Hudson River, connecting to New York Harbor. The sea-level extension is supplied with water from the Hackensack River.',
    type: 'construction',
  },
  {
    year: 1841,
    title: 'Enlargement Completed',
    description: 'The canal is enlarged to accommodate larger boats. Locks are now 11 feet wide and 90 feet long. The inclined planes are rebuilt with wire cabling. Boats can now carry 70 tons of cargo.',
    type: 'engineering',
  },
  {
    year: 1860,
    title: 'Peak Engineering',
    description: 'The Scotch (reaction) turbines replace the original overshot water wheels on the inclined planes, dramatically increasing efficiency. The turbines develop up to 704 horsepower and use 23 times less water than equivalent locks.',
    type: 'engineering',
  },
  {
    year: 1866,
    title: 'Peak Traffic',
    description: 'The canal reaches its maximum annual tonnage of 889,220 long tons — nearly 13,000 boatloads. Coal, iron ore, and agricultural products flow across New Jersey\'s highlands.',
    type: 'operation',
  },
  {
    year: 1871,
    title: 'Railroad Lease',
    description: 'The Lehigh Valley Railroad leases the canal, seeking the valuable terminal properties at Phillipsburg and Jersey City. The railroad never realizes a profit from canal operations.',
    type: 'decline',
  },
  {
    year: 1880,
    title: 'National Historic Landmark',
    description: 'The ASCE later recognizes the hydraulic-powered inclined plane system as a Historic Civil Engineering Landmark. The canal transported 1,700 boatloads of iron ore in this year alone.',
    type: 'legacy',
  },
  {
    year: 1902,
    title: 'Orange Street Plane',
    description: 'After a fatal railroad-streetcar crash, the Delaware & Lackawanna Railroad lowers its grade, requiring the canal to add an electrically-driven inclined plane at Orange Street in Newark.',
    type: 'engineering',
  },
  {
    year: 1922,
    title: 'State Takes Over',
    description: 'On March 1, the State of New Jersey takes possession of the canal after winning a lawsuit over the Wanaque Reservoir — a Pyrrhic victory that sealed the canal\'s fate.',
    type: 'decline',
  },
  {
    year: 1924,
    title: 'Canal Abandoned',
    description: 'The Morris Canal is officially abandoned after 95 years of operation. Over the next five years, the state drains the water, cuts the banks, and dismantles most structures — including needlessly dynamiting the Little Falls Aqueduct.',
    type: 'decline',
  },
  {
    year: 1974,
    title: 'National Register',
    description: 'The Morris Canal Historic District is added to the National Register of Historic Places on October 1, recognized for its significance in engineering, industry, and transportation.',
    type: 'legacy',
  },
  {
    year: 1980,
    title: 'Civil Engineering Landmark',
    description: 'The American Society of Civil Engineers designates the hydraulic-powered inclined plane system of the Morris Canal a National Historic Civil Engineering Landmark.',
    type: 'legacy',
  },
];

export const CANAL_STATS = {
  length: '107 miles (172 km)',
  elevationChange: '1,674 feet (510 m)',
  inclinedPlanes: 23,
  locks: 23,
  maxElevation: '914 feet above sea level',
  peakTonnage: '889,220 long tons (1866)',
  boatCapacity: '70 long tons',
  operatingYears: '1829–1924',
  counties: ['Warren', 'Sussex', 'Morris', 'Passaic', 'Essex', 'Hudson'],
  principalEngineer: 'Ephraim Beach',
  planeDesigner: 'James Renwick',
};
