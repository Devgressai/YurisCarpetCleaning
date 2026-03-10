// =============================================================================
// Geographic Data Engine - Yuri's Carpet Cleaning
// =============================================================================

export type Region = "foothills" | "suburban";

export interface Location {
  name: string;
  slug: string;
  county: string;
  region: Region;
  corridor: string;
  neighbors: string[];
  description: string;
  neighborhoods: string[];
}

export interface CountyHub {
  county: string;
  slug: string;
  locations: Location[];
}

// -----------------------------------------------------------------------------
// Placer County
// -----------------------------------------------------------------------------

const placerCountyLocations: Location[] = [
  {
    name: "Meadow Vista",
    slug: "meadow-vista-ca",
    county: "Placer County",
    region: "foothills",
    corridor: "I-80",
    neighbors: ["auburn-ca", "applegate-ca", "newcastle-ca"],
    description:
      "Nestled in the Sierra foothills, Meadow Vista homes contend with red clay dust, pine needle debris, and seasonal pollen that work deep into carpet fibers. Yuri's brings 27 years of foothills-specific carpet care to every Meadow Vista household.",
    neighborhoods: ["Meadow Vista Estates", "Christian Valley", "Placer Hills"],
  },
  {
    name: "Applegate",
    slug: "applegate-ca",
    county: "Placer County",
    region: "foothills",
    corridor: "I-80",
    neighbors: ["meadow-vista-ca", "auburn-ca", "newcastle-ca"],
    description:
      "Applegate's rural foothills setting means carpets face unique challenges from trail dust, well-water mineral deposits, and woodland allergens. Yuri's understands the specific cleaning chemistry these conditions demand.",
    neighborhoods: ["Applegate Village", "Dry Creek Corridor", "Applegate Road"],
  },
  {
    name: "Auburn",
    slug: "auburn-ca",
    county: "Placer County",
    region: "foothills",
    corridor: "I-80",
    neighbors: [
      "meadow-vista-ca",
      "applegate-ca",
      "newcastle-ca",
      "penryn-ca",
    ],
    description:
      "As the heart of Placer County's foothills, Auburn homes battle red laterite clay, oak pollen, and seasonal wildfire ash that embed in carpet fibers. Yuri's has served Auburn families for over two decades with fiber-specific cleaning solutions.",
    neighborhoods: [
      "Old Town Auburn",
      "Auburn Greens",
      "Bell Road Corridor",
      "North Auburn",
    ],
  },
  {
    name: "Newcastle",
    slug: "newcastle-ca",
    county: "Placer County",
    region: "foothills",
    corridor: "I-80",
    neighbors: ["auburn-ca", "penryn-ca", "loomis-ca", "meadow-vista-ca"],
    description:
      "Newcastle sits at the transition between foothills and the valley floor, where orchard dust and clay soils create persistent carpet staining. Yuri's tailors every cleaning to Newcastle's unique environmental conditions.",
    neighborhoods: [
      "Newcastle Fruit Ridge",
      "Indian Hill",
      "Newcastle Road Estates",
    ],
  },
  {
    name: "Penryn",
    slug: "penryn-ca",
    county: "Placer County",
    region: "foothills",
    corridor: "I-80",
    neighbors: ["newcastle-ca", "loomis-ca", "auburn-ca", "granite-bay-ca"],
    description:
      "Penryn's granite-rich soil and seasonal oak debris present distinct carpet cleaning challenges. Yuri's zero-residue approach ensures Penryn carpets stay cleaner longer after every service.",
    neighborhoods: ["Penryn Parkway", "English Colony", "Penryn Road Estates"],
  },
  {
    name: "Loomis",
    slug: "loomis-ca",
    county: "Placer County",
    region: "foothills",
    corridor: "I-80",
    neighbors: ["penryn-ca", "newcastle-ca", "rocklin-ca", "granite-bay-ca"],
    description:
      "Loomis blends rural charm with growing neighborhoods, and its carpets face everything from horse-trail dust to new-construction debris. Yuri's provides Loomis homeowners with deep-clean results that protect carpet investments.",
    neighborhoods: [
      "Downtown Loomis",
      "Del Mar Estates",
      "Loomis Hills",
      "Secret Ravine",
    ],
  },
  {
    name: "Rocklin",
    slug: "rocklin-ca",
    county: "Placer County",
    region: "suburban",
    corridor: "Hwy 65",
    neighbors: ["loomis-ca", "roseville-ca", "lincoln-ca", "granite-bay-ca"],
    description:
      "Rocklin's family-oriented communities see heavy carpet traffic from active households, pets, and busy schedules. Yuri's pH-balanced cleaning system keeps Rocklin homes fresh, allergen-free, and looking their best.",
    neighborhoods: [
      "Whitney Ranch",
      "Stanford Ranch",
      "Sunset West",
      "Whitney Oaks",
    ],
  },
  {
    name: "Roseville",
    slug: "roseville-ca",
    county: "Placer County",
    region: "suburban",
    corridor: "I-80",
    neighbors: [
      "rocklin-ca",
      "granite-bay-ca",
      "lincoln-ca",
      "citrus-heights-ca",
      "antelope-ca",
    ],
    description:
      "As one of the region's fastest-growing cities, Roseville homes demand carpet care that keeps up with busy families, pets, and daily wear. Yuri's serves thousands of Roseville households with proven, residue-free results.",
    neighborhoods: [
      "West Roseville",
      "Fiddyment Farm",
      "Highland Reserve",
      "Blue Oaks",
    ],
  },
  {
    name: "Lincoln",
    slug: "lincoln-ca",
    county: "Placer County",
    region: "suburban",
    corridor: "Hwy 65",
    neighbors: ["rocklin-ca", "roseville-ca"],
    description:
      "Lincoln's master-planned communities and active-adult neighborhoods require carpet care that addresses high foot traffic and pet activity. Yuri's delivers deep-clean results that Lincoln homeowners trust.",
    neighborhoods: [
      "Sun City Lincoln Hills",
      "Lincoln Crossing",
      "Twelve Bridges",
      "Village 7",
    ],
  },
  {
    name: "Granite Bay",
    slug: "granite-bay-ca",
    county: "Placer County",
    region: "suburban",
    corridor: "Premium Hub",
    neighbors: [
      "rocklin-ca",
      "loomis-ca",
      "roseville-ca",
      "penryn-ca",
      "folsom-ca",
      "orangevale-ca",
    ],
    description:
      "Granite Bay's upscale homes feature premium carpet installations that deserve expert care. Yuri's specializes in luxury fiber cleaning and protection, safeguarding Granite Bay homeowners' flooring investments.",
    neighborhoods: [
      "Los Lagos",
      "Granite Bay Estates",
      "Quarry Ponds",
      "Oak Hill",
    ],
  },
];

// -----------------------------------------------------------------------------
// Sacramento County
// -----------------------------------------------------------------------------

const sacramentoCountyLocations: Location[] = [
  {
    name: "Citrus Heights",
    slug: "citrus-heights-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "I-80",
    neighbors: [
      "orangevale-ca",
      "fair-oaks-ca",
      "carmichael-ca",
      "roseville-ca",
      "antelope-ca",
    ],
    description:
      "Citrus Heights' established neighborhoods feature mature landscaping that tracks seasonal debris indoors. Yuri's keeps Citrus Heights carpets free of allergens, pet dander, and embedded soil year-round.",
    neighborhoods: [
      "Sunrise Mall Area",
      "Rusch Park",
      "Sylvan Corners",
      "Antelope Road Corridor",
    ],
  },
  {
    name: "Antelope",
    slug: "antelope-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "I-80",
    neighbors: [
      "citrus-heights-ca",
      "north-highlands-ca",
      "roseville-ca",
      "sacramento-ca",
    ],
    description:
      "Antelope's newer subdivisions and young families mean carpets face daily challenges from kids, pets, and busy lifestyles. Yuri's provides Antelope homes with thorough, family-safe carpet cleaning.",
    neighborhoods: [
      "Antelope Crossing",
      "Antelope North",
      "Dry Creek Oaks",
      "Gibson Ranch Area",
    ],
  },
  {
    name: "North Highlands",
    slug: "north-highlands-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "I-80",
    neighbors: [
      "antelope-ca",
      "citrus-heights-ca",
      "carmichael-ca",
      "sacramento-ca",
    ],
    description:
      "North Highlands homeowners count on Yuri's for affordable, professional carpet cleaning that removes deep-set stains and revitalizes high-traffic areas throughout the home.",
    neighborhoods: [
      "North Highlands Park",
      "Foothill Farms",
      "McClellan Park Area",
    ],
  },
  {
    name: "Orangevale",
    slug: "orangevale-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "Hwy 50",
    neighbors: [
      "fair-oaks-ca",
      "citrus-heights-ca",
      "granite-bay-ca",
      "folsom-ca",
    ],
    description:
      "Orangevale's semi-rural charm means homes are surrounded by oak canopy and natural landscapes that introduce pollen, leaves, and dirt into living spaces. Yuri's delivers results Orangevale families count on.",
    neighborhoods: [
      "Orangevale Colony",
      "Casa Roble Area",
      "Hazel Avenue Corridor",
      "Greenback Lane Corridor",
    ],
  },
  {
    name: "Fair Oaks",
    slug: "fair-oaks-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "Hwy 50",
    neighbors: [
      "orangevale-ca",
      "carmichael-ca",
      "citrus-heights-ca",
      "rancho-cordova-ca",
    ],
    description:
      "Fair Oaks' tree-lined streets and village atmosphere bring seasonal allergens and outdoor debris indoors. Yuri's allergen-reduction cleaning system is ideal for Fair Oaks families seeking healthier indoor air.",
    neighborhoods: [
      "Fair Oaks Village",
      "Fair Oaks Ranch",
      "Sunset Avenue Area",
      "Winding Way Corridor",
    ],
  },
  {
    name: "Carmichael",
    slug: "carmichael-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "Hwy 50",
    neighbors: [
      "fair-oaks-ca",
      "citrus-heights-ca",
      "north-highlands-ca",
      "sacramento-ca",
    ],
    description:
      "Carmichael's established neighborhoods and mature trees create a constant cycle of outdoor-to-indoor soil transfer. Yuri's deep extraction process removes what vacuums leave behind in Carmichael homes.",
    neighborhoods: [
      "Carmichael Colony",
      "Ancil Hoffman Area",
      "Manzanita Avenue Corridor",
      "Fair Oaks Boulevard Corridor",
    ],
  },
  {
    name: "Rancho Cordova",
    slug: "rancho-cordova-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "Hwy 50",
    neighbors: [
      "sacramento-ca",
      "fair-oaks-ca",
      "folsom-ca",
      "el-dorado-hills-ca",
    ],
    description:
      "Rancho Cordova's mix of family homes and newer developments means diverse carpet cleaning needs. Yuri's tailors every visit to the specific fiber type, soil conditions, and lifestyle of each Rancho Cordova household.",
    neighborhoods: [
      "Anatolia",
      "Sunridge Park",
      "Cordova Town Center",
      "Mather Field Area",
    ],
  },
  {
    name: "Sacramento",
    slug: "sacramento-ca",
    county: "Sacramento County",
    region: "suburban",
    corridor: "Metro",
    neighbors: [
      "carmichael-ca",
      "north-highlands-ca",
      "antelope-ca",
      "rancho-cordova-ca",
    ],
    description:
      "From Natomas to Pocket, Sacramento's diverse neighborhoods rely on Yuri's for expert carpet cleaning that handles everything from pet stains to high-traffic wear in the capital city's homes.",
    neighborhoods: [
      "Natomas",
      "East Sacramento",
      "Land Park",
      "Pocket-Greenhaven",
    ],
  },
];

// -----------------------------------------------------------------------------
// El Dorado County
// -----------------------------------------------------------------------------

const elDoradoCountyLocations: Location[] = [
  {
    name: "El Dorado Hills",
    slug: "el-dorado-hills-ca",
    county: "El Dorado County",
    region: "foothills",
    corridor: "Hwy 50",
    neighbors: [
      "folsom-ca",
      "cameron-park-ca",
      "shingle-springs-ca",
      "rancho-cordova-ca",
    ],
    description:
      "El Dorado Hills' premium homes sit among rolling oak-studded hills where red clay, pine needles, and seasonal pollen continuously challenge carpet cleanliness. Yuri's provides the expert care these luxury installations deserve.",
    neighborhoods: [
      "Serrano",
      "Blackstone",
      "Town Center",
      "Heritage at Folsom Ranch",
    ],
  },
  {
    name: "Folsom",
    slug: "folsom-ca",
    county: "El Dorado County",
    region: "suburban",
    corridor: "Hwy 50",
    neighbors: [
      "el-dorado-hills-ca",
      "granite-bay-ca",
      "orangevale-ca",
      "rancho-cordova-ca",
    ],
    description:
      "Folsom's active families and pet-friendly lifestyle mean carpets see heavy daily use. Yuri's zero-residue cleaning system keeps Folsom homes fresh, healthy, and looking their best between professional cleanings.",
    neighborhoods: [
      "Broadstone",
      "Empire Ranch",
      "Folsom Ranch",
      "Lexington Hills",
    ],
  },
  {
    name: "Cameron Park",
    slug: "cameron-park-ca",
    county: "El Dorado County",
    region: "foothills",
    corridor: "Hwy 50",
    neighbors: ["el-dorado-hills-ca", "shingle-springs-ca", "folsom-ca"],
    description:
      "Cameron Park's wooded foothills environment means homeowners deal with red clay tracking, pine sap residue, and persistent allergens. Yuri's foothills-tested cleaning methods are purpose-built for Cameron Park's conditions.",
    neighborhoods: [
      "Cameron Park Lake",
      "Cameron Estates",
      "Country Club Estates",
    ],
  },
  {
    name: "Shingle Springs",
    slug: "shingle-springs-ca",
    county: "El Dorado County",
    region: "foothills",
    corridor: "Hwy 50",
    neighbors: ["cameron-park-ca", "el-dorado-hills-ca"],
    description:
      "Shingle Springs sits deep in El Dorado County's pine and oak foothills, where red dirt, wood ash, and seasonal allergens present year-round carpet challenges. Yuri's brings specialized foothills cleaning expertise to every Shingle Springs home.",
    neighborhoods: [
      "Shingle Springs Village",
      "Mother Lode Drive Area",
      "Ponderosa Road Corridor",
    ],
  },
];

// -----------------------------------------------------------------------------
// County Hubs
// -----------------------------------------------------------------------------

export const countyHubs: CountyHub[] = [
  {
    county: "Placer County",
    slug: "placer-county",
    locations: placerCountyLocations,
  },
  {
    county: "Sacramento County",
    slug: "sacramento-county",
    locations: sacramentoCountyLocations,
  },
  {
    county: "El Dorado County",
    slug: "el-dorado-county",
    locations: elDoradoCountyLocations,
  },
];

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

/** Returns a flat array of every Location across all county hubs. */
export function getAllLocations(): Location[] {
  return countyHubs.flatMap((hub) => hub.locations);
}

/** Finds a single Location by its URL slug, or undefined if not found. */
export function getLocationBySlug(slug: string): Location | undefined {
  return getAllLocations().find((loc) => loc.slug === slug);
}

/** Returns the full Location objects for a given location's neighbors. */
export function getNeighbors(slug: string): Location[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];
  const all = getAllLocations();
  return location.neighbors
    .map((neighborSlug) => all.find((loc) => loc.slug === neighborSlug))
    .filter((loc): loc is Location => loc !== undefined);
}

/** Returns all locations belonging to a specific county. */
export function getLocationsByCounty(county: string): Location[] {
  const hub = countyHubs.find((h) => h.county === county);
  return hub ? hub.locations : [];
}

/** Generates static params for Next.js dynamic route `[slug]`. */
export function generateStaticParams(): { slug: string }[] {
  return getAllLocations().map((loc) => ({ slug: loc.slug }));
}
