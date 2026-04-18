export type City = {
  slug: string;
  name: string;
  county: string;
  // Genuine local context — things a real local would know. No fabricated stats.
  localContext: string;
  housingNote: string;
  nearbyCities: string[];
};

export const cities: City[] = [
  {
    slug: "fontana",
    name: "Fontana",
    county: "San Bernardino County",
    localContext:
      "Fontana sits at the intersection of the I-10 and I-15 freeways in the heart of the western Inland Empire. The city has grown from its industrial roots into one of the largest residential communities in San Bernardino County.",
    housingNote:
      "Fontana's housing mix runs from mid-century post-war homes in the older neighborhoods near Sierra Avenue to newer master-planned communities in north Fontana. Older homes often have original galvanized supply lines and cast iron drains that are prone to corrosion and leaks. Newer tract homes face their own challenges, including PEX pipe fitting failures and second-story laundry room overflows.",
    nearbyCities: ["Rialto", "Rancho Cucamonga", "Bloomington", "Ontario"],
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    localContext:
      "Rancho Cucamonga spans the foothills of the San Gabriel Mountains from Alta Loma down to the I-10 corridor. The city is known for its well-maintained neighborhoods, strong schools, and a mix of single-family homes, townhomes, and condominiums.",
    housingNote:
      "The city has a wide range of housing stock, including 1970s and 1980s single-story ranch homes in Alta Loma, 1990s and 2000s two-story tract homes in Etiwanda, and newer developments near Victoria Gardens. Common water damage causes here include supply line failures on second-floor appliances, slab leaks in older Alta Loma homes, and roof leaks during winter storms coming off the mountains.",
    nearbyCities: ["Ontario", "Upland", "Fontana", "Claremont"],
  },
  {
    slug: "ontario",
    name: "Ontario",
    county: "San Bernardino County",
    localContext:
      "Ontario is a major commercial hub of the Inland Empire, home to Ontario International Airport and a substantial industrial and logistics sector. The residential side ranges from historic homes in the downtown area to newer developments in the south and east.",
    housingNote:
      "Downtown Ontario has a significant inventory of pre-1940s Craftsman and Spanish Revival homes with older plumbing systems, including galvanized steel supply lines that corrode from the inside out. South Ontario and Ontario Ranch have newer construction where PEX and PVC systems dominate. Both areas share common risks from water heater failures and washing machine supply line ruptures.",
    nearbyCities: ["Rancho Cucamonga", "Montclair", "Chino", "Upland"],
  },
  {
    slug: "jurupa-valley",
    name: "Jurupa Valley",
    county: "Riverside County",
    localContext:
      "Jurupa Valley incorporated in 2011 and covers the communities of Glen Avon, Mira Loma, Pedley, Rubidoux, and Sunnyslope. The city sits along the Santa Ana River on the Riverside County side of the Inland Empire.",
    housingNote:
      "Housing in Jurupa Valley is predominantly single-family, with a mix of older homes (some dating to the 1950s and 1960s) and newer developments. Many properties sit on large lots with outbuildings and pools, which introduces additional water damage risks from irrigation failures, pool equipment leaks, and detached garage plumbing.",
    nearbyCities: ["Riverside", "Eastvale", "Norco", "Ontario"],
  },
  {
    slug: "rialto",
    name: "Rialto",
    county: "San Bernardino County",
    localContext:
      "Rialto sits just east of Fontana along the I-10 corridor. The city has a strong residential core and a growing commercial and industrial base, particularly along Riverside Avenue.",
    housingNote:
      "Rialto's housing mix leans toward single-family homes from the 1960s through 1990s. Properties in the older northern neighborhoods frequently have aging water heaters, original cast iron drain lines, and slab foundations that can develop hidden leaks. Flat roofs on some older commercial and residential properties create risk of interior damage during winter rains.",
    nearbyCities: ["Fontana", "Bloomington", "Colton", "San Bernardino"],
  },
  {
    slug: "bloomington",
    name: "Bloomington",
    county: "San Bernardino County",
    localContext:
      "Bloomington is an unincorporated community in western San Bernardino County, bordered by Fontana, Rialto, and Colton. The area has a more rural, established character than the surrounding cities.",
    housingNote:
      "Housing runs older here, with many homes on larger lots and a higher percentage of properties with original or first-replacement plumbing systems. Galvanized pipes, polybutylene supply lines from the 1970s and 1980s, and original water heaters are common water damage sources. Outbuildings, wells, and septic systems add additional considerations.",
    nearbyCities: ["Fontana", "Rialto", "Colton", "Jurupa Valley"],
  },
  {
    slug: "upland",
    name: "Upland",
    county: "San Bernardino County",
    localContext:
      "Upland sits at the base of the San Gabriel Mountains along historic Route 66. The city has a well-preserved downtown and a reputation for its tree-lined streets, older neighborhoods, and stable housing market.",
    housingNote:
      "Upland has a significant stock of pre-1970s homes in its historic neighborhoods north of Foothill Boulevard, including Craftsman bungalows, mid-century ranches, and Spanish-style homes. Older galvanized plumbing, cast iron drain lines, and original slab foundations are common. The city's mature tree cover also contributes to root intrusion into sewer lines, which can cause backups into homes.",
    nearbyCities: ["Rancho Cucamonga", "Claremont", "Montclair", "Ontario"],
  },
  {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    localContext:
      "Riverside is the county seat of Riverside County and one of the largest cities in the Inland Empire. It spans a wide range of neighborhoods, from the historic downtown and Mission Inn district to newer developments in Orangecrest and Canyon Crest.",
    housingNote:
      "Riverside's housing stock is unusually diverse, running from Victorian-era homes near downtown to mid-century ranches in Arlington and Magnolia Center, to newer tract homes in the south and east. Older downtown homes often have combinations of galvanized steel and copper plumbing that have been patched over decades, creating multiple failure points. Mature trees throughout the city contribute to sewer line root damage.",
    nearbyCities: ["Jurupa Valley", "Norco", "Eastvale", "Corona"],
  },
  {
    slug: "eastvale",
    name: "Eastvale",
    county: "Riverside County",
    localContext:
      "Eastvale incorporated in 2010 and is one of the newer cities in the Inland Empire. Located at the northwest corner of Riverside County, it's made up almost entirely of master-planned residential neighborhoods built in the 2000s and 2010s.",
    housingNote:
      "Almost all housing in Eastvale was built after 2000, which means PEX plumbing, modern electrical, and contemporary construction methods dominate. However, newer homes are not immune to water damage. Common issues include failed PEX fittings, second-floor laundry and bathroom overflows causing ceiling damage to the floor below, and recurring appliance supply line failures (especially on refrigerators and dishwashers).",
    nearbyCities: ["Norco", "Jurupa Valley", "Corona", "Riverside"],
  },
  {
    slug: "norco",
    name: "Norco",
    county: "Riverside County",
    localContext:
      "Norco, officially Horsetown USA, is known for its rural character, horse-keeping zoning, and large lot sizes. The city maintains dirt horse trails alongside its streets and has a strong agricultural and equestrian community.",
    housingNote:
      "Housing in Norco typically sits on large lots, often with barns, stables, guest houses, and outbuildings. This means more separate plumbing systems, more exposed exterior pipes, and more potential failure points. Older ranch-style homes, irrigation systems for animal facilities, and detached structures all create unique water damage risks. Freezing during cold snaps can also cause pipe bursts in uninsulated outbuildings.",
    nearbyCities: ["Eastvale", "Riverside", "Corona", "Jurupa Valley"],
  },
  {
    slug: "montclair",
    name: "Montclair",
    county: "San Bernardino County",
    localContext:
      "Montclair is a smaller city at the western edge of San Bernardino County, bordering Ontario, Upland, and Claremont. It's home to the Montclair Place shopping center and has a strong residential character.",
    housingNote:
      "Montclair's housing is largely from the 1950s through 1980s, with a mix of single-family homes and condominiums. Older slab foundations, original galvanized or copper plumbing, and aging water heaters are common factors in water damage claims here. The city's proximity to the Montclair Transcenter and commercial corridors means many homes back up to infrastructure that can complicate drainage during heavy rains.",
    nearbyCities: ["Ontario", "Upland", "Claremont", "Chino"],
  },
  {
    slug: "claremont",
    name: "Claremont",
    county: "Los Angeles County",
    localContext:
      "Claremont sits at the eastern edge of Los Angeles County, just across from Upland and Montclair. Known as the City of Trees and home to the Claremont Colleges, it has a distinctive mature tree canopy and a mix of historic and newer housing.",
    housingNote:
      "Claremont has one of the older housing stocks in the region, with a significant number of pre-1950s Craftsman, Spanish, and ranch-style homes, especially in the Village and north Claremont. Older plumbing systems, original roof structures, and the city's famous mature trees (and their root systems) are common contributors to water damage. Heritage tree roots are particularly notorious for infiltrating sewer lines and causing backups.",
    nearbyCities: ["Upland", "Montclair", "Pomona", "La Verne"],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
