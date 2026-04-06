export type ServiceType = "Standard" | "Deluxe" | "ADA Accessible" | "Luxury" | "Construction & Long-term";
export type PriceRange = "$" | "$$" | "$$$";
export type State = "CT" | "RI" | "MA";

export interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Vendor {
  id: string;
  name: string;
  state: State;
  city: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  services: ServiceType[];
  priceRange: PriceRange;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  yearsInBusiness: number;
  featured: boolean;
}

const vendors: Vendor[] = [
  // Connecticut - 6 vendors
  {
    id: "ct-hartford-sanitation-pros",
    name: "Hartford Sanitation Pros",
    state: "CT",
    city: "Hartford",
    phone: "(860) 555-0101",
    email: "info@hartfordsanitationpros.com",
    website: "https://hartfordsanitationpros.com",
    description: "Hartford's most trusted portable restroom provider since 1998. We serve construction sites, outdoor events, and long-term rentals across the greater Hartford area with a focus on punctuality and cleanliness.",
    services: ["Standard", "Construction & Long-term", "ADA Accessible"],
    priceRange: "$$",
    rating: 4.5,
    reviewCount: 3,
    reviews: [
      { author: "Mike Donovan", rating: 5, comment: "Outstanding service! They delivered on time and the units were spotless. Will use again for our next construction project.", date: "2025-11-12" },
      { author: "Sandra Lee", rating: 4, comment: "Very professional team. Quick setup and the ADA unit was exactly what we needed for our outdoor event.", date: "2025-09-03" },
      { author: "Tom Bradley", rating: 4, comment: "Reliable and clean. A bit pricey but worth it for the quality of service.", date: "2025-07-21" }
    ],
    yearsInBusiness: 27,
    featured: true
  },
  {
    id: "ct-new-haven-blue-sky-rentals",
    name: "Blue Sky Porta Rentals",
    state: "CT",
    city: "New Haven",
    phone: "(203) 555-0202",
    email: "contact@blueskportarentals.com",
    website: "https://blueskyportarentals.com",
    description: "Serving New Haven and surrounding communities with affordable, clean portable restroom solutions. Perfect for festivals, university events, and backyard parties.",
    services: ["Standard", "Deluxe", "Luxury"],
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 4,
    reviews: [
      { author: "Patricia Nguyen", rating: 5, comment: "The luxury units were a huge hit at our wedding! Clean, well-stocked, and delivered early.", date: "2025-10-15" },
      { author: "James Whitfield", rating: 5, comment: "Best porta potty experience I've ever had — not something I expected to say! Top quality.", date: "2025-08-29" },
      { author: "Angela Torres", rating: 4, comment: "Great service overall. The Deluxe units were clean and fresh throughout our 3-day event.", date: "2025-06-14" },
      { author: "Brian Kowalski", rating: 5, comment: "Prompt delivery, courteous staff, and beautiful units. Highly recommend for any upscale event.", date: "2025-05-02" }
    ],
    yearsInBusiness: 12,
    featured: true
  },
  {
    id: "ct-stamford-coastal-porta",
    name: "Coastal Porta Solutions",
    state: "CT",
    city: "Stamford",
    phone: "(203) 555-0303",
    email: "hello@coastalportasolutions.com",
    website: "https://coastalportasolutions.com",
    description: "Stamford's premier portable restroom company. We specialize in upscale events and corporate functions with a fleet of luxury and deluxe units.",
    services: ["Deluxe", "Luxury", "ADA Accessible"],
    priceRange: "$$$",
    rating: 4.6,
    reviewCount: 3,
    reviews: [
      { author: "Rachel Simmons", rating: 5, comment: "Coastal made our corporate picnic seamless. Luxury units with climate control — guests were impressed!", date: "2025-09-20" },
      { author: "David Chen", rating: 4, comment: "Good service and clean units. Delivery was 30 minutes early which was great.", date: "2025-07-08" },
      { author: "Karen Foster", rating: 5, comment: "Absolutely fantastic. The ADA unit was perfectly accessible and maintained all day.", date: "2025-04-17" }
    ],
    yearsInBusiness: 18,
    featured: false
  },
  {
    id: "ct-bridgeport-budget-johns",
    name: "Bridgeport Budget Johns",
    state: "CT",
    city: "Bridgeport",
    phone: "(203) 555-0404",
    email: "service@bridgeportbudgetjohns.com",
    website: "https://bridgeportbudgetjohns.com",
    description: "Affordable portable restroom rentals for construction sites and events throughout Bridgeport and Fairfield County. No frills, just reliable service at the best price.",
    services: ["Standard", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.1,
    reviewCount: 2,
    reviews: [
      { author: "Frank Rizzo", rating: 4, comment: "Great price and reliable. No complaints from our construction crew over 6 months.", date: "2025-08-05" },
      { author: "Maria Santos", rating: 4, comment: "Got what we paid for — clean units on time. Would use again for our next site.", date: "2025-05-22" }
    ],
    yearsInBusiness: 9,
    featured: false
  },
  {
    id: "ct-waterbury-valley-portable",
    name: "Valley Portable Restrooms",
    state: "CT",
    city: "Waterbury",
    phone: "(203) 555-0505",
    email: "info@valleyportablerestrooms.com",
    website: "https://valleyportablerestrooms.com",
    description: "Family-owned portable restroom company serving Waterbury and the Naugatuck Valley. We pride ourselves on personal service and immaculate units for any occasion.",
    services: ["Standard", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 3,
    reviews: [
      { author: "John Gallagher", rating: 4, comment: "Very responsive and professional. ADA unit was perfect for our accessibility-focused community event.", date: "2025-10-01" },
      { author: "Lisa Marchetti", rating: 5, comment: "Family-run feel — they genuinely care about doing a great job. Highly recommend!", date: "2025-07-30" },
      { author: "Robert Huang", rating: 4, comment: "Solid service at a fair price. Units were clean and serviced on schedule.", date: "2025-03-18" }
    ],
    yearsInBusiness: 22,
    featured: false
  },
  {
    id: "ct-norwich-eastern-ct-johns",
    name: "Eastern CT Porta Johns",
    state: "CT",
    city: "Norwich",
    phone: "(860) 555-0606",
    email: "info@easternctportajohns.com",
    website: "https://easternctportajohns.com",
    description: "Norwich-based portable restroom specialists covering all of Eastern Connecticut. From small backyard events to large construction projects, we have you covered.",
    services: ["Standard", "Deluxe", "Construction & Long-term", "ADA Accessible"],
    priceRange: "$$",
    rating: 4.3,
    reviewCount: 4,
    reviews: [
      { author: "Donna McCarthy", rating: 4, comment: "Dependable service for our 3-week road project. Units were serviced twice weekly as promised.", date: "2025-09-14" },
      { author: "Steve Labonte", rating: 5, comment: "Best porta potty company in eastern CT without a doubt. Fast, clean, professional.", date: "2025-08-11" },
      { author: "Heather Bouchard", rating: 4, comment: "The Deluxe units were perfect for our outdoor fair. Clean and well-maintained throughout.", date: "2025-06-22" },
      { author: "Paul Tessier", rating: 4, comment: "Very good value. ADA unit was exactly right for our family reunion with elderly guests.", date: "2025-04-05" }
    ],
    yearsInBusiness: 14,
    featured: false
  },

  // Rhode Island - 6 vendors
  {
    id: "ri-providence-ocean-state-porta",
    name: "Ocean State Porta Potty",
    state: "RI",
    city: "Providence",
    phone: "(401) 555-0701",
    email: "info@oceanstateportapotty.com",
    website: "https://oceanstateportapotty.com",
    description: "Rhode Island's leading portable restroom provider based in Providence. We serve festivals, construction sites, and events statewide with a full fleet of modern units.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.7,
    reviewCount: 4,
    reviews: [
      { author: "Carla Britto", rating: 5, comment: "Used them for Providence WaterFire — absolutely flawless service. 10 units, all clean all night.", date: "2025-10-18" },
      { author: "Tony DeSimone", rating: 5, comment: "Best in the state. On time, professional, and the Deluxe units were immaculate.", date: "2025-09-07" },
      { author: "Melissa Reyes", rating: 4, comment: "Great experience for our block party. Easy to book, easy pickup, clean units.", date: "2025-07-04" },
      { author: "Gary Magnuson", rating: 5, comment: "Served our construction site for 4 months without a single issue. Highly recommend!", date: "2025-03-29" }
    ],
    yearsInBusiness: 19,
    featured: true
  },
  {
    id: "ri-warwick-bay-state-restrooms",
    name: "Bay State Restroom Rentals",
    state: "RI",
    city: "Warwick",
    phone: "(401) 555-0802",
    email: "service@baystaterestroomrentals.com",
    website: "https://baystaterestroomrentals.com",
    description: "Warwick's go-to portable restroom company for events and construction. We offer competitive pricing and flexible rental terms to fit any budget.",
    services: ["Standard", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.2,
    reviewCount: 2,
    reviews: [
      { author: "Carl Petersen", rating: 4, comment: "Affordable and reliable. Great for our construction site — no issues over 2 months.", date: "2025-11-01" },
      { author: "Amy Fitzgerald", rating: 4, comment: "Simple and straightforward. Got the job done at a great price.", date: "2025-06-30" }
    ],
    yearsInBusiness: 11,
    featured: false
  },
  {
    id: "ri-cranston-rhode-island-sanitation",
    name: "Rhode Island Sanitation Co.",
    state: "RI",
    city: "Cranston",
    phone: "(401) 555-0903",
    email: "hello@risanitationco.com",
    website: "https://risanitationco.com",
    description: "Family-owned and operated since 1994, Rhode Island Sanitation serves the greater Cranston area with pride. Clean units, on-time delivery, and friendly staff every time.",
    services: ["Standard", "ADA Accessible", "Deluxe"],
    priceRange: "$$",
    rating: 4.5,
    reviewCount: 3,
    reviews: [
      { author: "Nancy DiPrete", rating: 5, comment: "Wonderful family business! They go above and beyond every single time we use them.", date: "2025-10-22" },
      { author: "Vincent Caprio", rating: 4, comment: "Very clean units and always on time. We've used them for three events now.", date: "2025-08-15" },
      { author: "Shannon Kelley", rating: 4, comment: "Great service and competitive pricing. ADA unit was in perfect condition.", date: "2025-05-10" }
    ],
    yearsInBusiness: 31,
    featured: false
  },
  {
    id: "ri-newport-gilded-throne",
    name: "The Gilded Throne",
    state: "RI",
    city: "Newport",
    phone: "(401) 555-1004",
    email: "events@gildedthrone.com",
    website: "https://gildedthrone.com",
    description: "Newport's luxury portable restroom specialist. Our upscale trailer restrooms are a perfect match for Newport's elegant events, weddings, and yacht club gatherings.",
    services: ["Luxury", "Deluxe"],
    priceRange: "$$$",
    rating: 4.9,
    reviewCount: 4,
    reviews: [
      { author: "Eleanor Whitmore", rating: 5, comment: "Absolutely stunning restroom trailers for our Newport mansion wedding. Guests thought they were inside!", date: "2025-09-28" },
      { author: "Charles Bradford", rating: 5, comment: "Perfect for our regatta event. The luxury trailers were immaculate and beautifully appointed.", date: "2025-08-03" },
      { author: "Victoria Harrington", rating: 5, comment: "The only company worthy of a Newport event. Stunning units, incredible staff.", date: "2025-06-19" },
      { author: "William Easton", rating: 4, comment: "Exceptional quality but book early — they fill up fast for summer season.", date: "2025-04-11" }
    ],
    yearsInBusiness: 8,
    featured: true
  },
  {
    id: "ri-pawtucket-mill-city-rentals",
    name: "Mill City Porta Rentals",
    state: "RI",
    city: "Pawtucket",
    phone: "(401) 555-1105",
    email: "info@millcityportarentals.com",
    website: "https://millcityportarentals.com",
    description: "Serving Pawtucket and the Blackstone Valley with affordable and dependable portable restroom rentals. Specializing in construction sites and large-scale events.",
    services: ["Standard", "Construction & Long-term", "ADA Accessible"],
    priceRange: "$",
    rating: 4.0,
    reviewCount: 2,
    reviews: [
      { author: "Kevin Slater", rating: 4, comment: "Reliable and affordable. Good choice for construction — units serviced on a regular schedule.", date: "2025-10-08" },
      { author: "Tracey Munroe", rating: 4, comment: "No-frills but very dependable. They showed up on time and the units were clean.", date: "2025-07-17" }
    ],
    yearsInBusiness: 15,
    featured: false
  },
  {
    id: "ri-bristol-narragansett-porta",
    name: "Narragansett Porta Services",
    state: "RI",
    city: "Bristol",
    phone: "(401) 555-1206",
    email: "service@narragansettporta.com",
    website: "https://narragansettporta.com",
    description: "Bristol-based portable restroom company serving the East Bay and Narragansett Bay communities. We're passionate about serving our local coastal communities with the best service available.",
    services: ["Standard", "Deluxe", "Luxury"],
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 3,
    reviews: [
      { author: "Margaret Costa", rating: 5, comment: "Used for our 4th of July parade and they were fantastic. Units clean and plentiful.", date: "2025-07-04" },
      { author: "Dennis Almeida", rating: 4, comment: "Great local company. They know the area and always show up when promised.", date: "2025-05-25" },
      { author: "Joanne Ferreira", rating: 4, comment: "Solid service for our Bristol waterfront event. Deluxe units were very clean.", date: "2025-03-12" }
    ],
    yearsInBusiness: 7,
    featured: false
  },

  // Massachusetts - 8 vendors
  {
    id: "ma-boston-new-england-portable",
    name: "New England Portable Restrooms",
    state: "MA",
    city: "Boston",
    phone: "(617) 555-1301",
    email: "info@newenglandportable.com",
    website: "https://newenglandportable.com",
    description: "Boston's premier portable restroom company, serving everything from marathon events to Back Bay construction. With a fleet of 200+ units, we're ready for any challenge.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Luxury", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.7,
    reviewCount: 4,
    reviews: [
      { author: "Patrick O'Brien", rating: 5, comment: "Used them for the Boston Marathon. Incredible logistics — 50 units perfectly placed and spotless.", date: "2025-04-21" },
      { author: "Jennifer Walsh", rating: 5, comment: "Best porta potty company in Boston bar none. Professional, punctual, pristine.", date: "2025-10-05" },
      { author: "Michael Callahan", rating: 4, comment: "Great service for our Fenway neighborhood block party. Easy booking, clean units.", date: "2025-08-23" },
      { author: "Debra Rosenberg", rating: 5, comment: "ADA units were perfectly maintained for our accessibility event. Highly recommend!", date: "2025-06-01" }
    ],
    yearsInBusiness: 24,
    featured: true
  },
  {
    id: "ma-worcester-central-ma-sanitation",
    name: "Central MA Sanitation",
    state: "MA",
    city: "Worcester",
    phone: "(508) 555-1402",
    email: "hello@centralmasanitation.com",
    website: "https://centralmasanitation.com",
    description: "Worcester's most reliable portable restroom company. We serve Central Massachusetts with a full range of units from standard to luxury, with same-day delivery available.",
    services: ["Standard", "Deluxe", "Construction & Long-term", "ADA Accessible"],
    priceRange: "$$",
    rating: 4.5,
    reviewCount: 3,
    reviews: [
      { author: "Joe Mancini", rating: 5, comment: "Same-day delivery when we had an emergency on our construction site. Lifesavers!", date: "2025-09-16" },
      { author: "Laura Bergeron", rating: 4, comment: "Good service and fair prices. The units were clean and well-stocked throughout our festival.", date: "2025-07-12" },
      { author: "Steven Okafor", rating: 4, comment: "Reliable company. We use them every year for our 5K race.", date: "2025-05-18" }
    ],
    yearsInBusiness: 20,
    featured: false
  },
  {
    id: "ma-springfield-pioneer-valley-porta",
    name: "Pioneer Valley Porta Co.",
    state: "MA",
    city: "Springfield",
    phone: "(413) 555-1503",
    email: "info@pioneervalleyporta.com",
    website: "https://pioneervalleyporta.com",
    description: "Springfield's trusted portable restroom provider for the Pioneer Valley region. From Six Flags events to construction sites, we've got Western MA covered.",
    services: ["Standard", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.2,
    reviewCount: 2,
    reviews: [
      { author: "Diane Paquette", rating: 4, comment: "Great price and professional service. Used for a 2-month construction project — no issues.", date: "2025-10-30" },
      { author: "Randy Thibodeau", rating: 4, comment: "Solid western MA option. Reliable delivery and pickup.", date: "2025-08-08" }
    ],
    yearsInBusiness: 16,
    featured: false
  },
  {
    id: "ma-cambridge-ivy-league-porta",
    name: "Ivy League Porta Services",
    state: "MA",
    city: "Cambridge",
    phone: "(617) 555-1604",
    email: "service@ivyleagueporta.com",
    website: "https://ivyleagueporta.com",
    description: "Cambridge's go-to company for university events, research facility construction, and outdoor festivals. We understand the unique needs of academic and cultural institutions.",
    services: ["Standard", "Deluxe", "Luxury", "ADA Accessible"],
    priceRange: "$$$",
    rating: 4.8,
    reviewCount: 4,
    reviews: [
      { author: "Priya Sharma", rating: 5, comment: "Handled our Harvard commencement event flawlessly. 30 units, perfectly clean all day.", date: "2025-05-29" },
      { author: "Andrew Tran", rating: 5, comment: "Top tier service for MIT's outdoor events. Professional and punctual every time.", date: "2025-09-09" },
      { author: "Monica Bergmann", rating: 5, comment: "The luxury units were perfect for our faculty gala. Guests were very impressed.", date: "2025-06-14" },
      { author: "Christopher Park", rating: 4, comment: "Excellent service. A bit pricey but you definitely get what you pay for.", date: "2025-03-05" }
    ],
    yearsInBusiness: 13,
    featured: true
  },
  {
    id: "ma-lowell-merrimack-valley-johns",
    name: "Merrimack Valley Porta Johns",
    state: "MA",
    city: "Lowell",
    phone: "(978) 555-1705",
    email: "info@merrimackvalleyjohns.com",
    website: "https://merrimackvalleyjohns.com",
    description: "Lowell-based portable restroom rental serving the Merrimack Valley and Greater Lowell area. Known for fast delivery, clean units, and honest pricing.",
    services: ["Standard", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.1,
    reviewCount: 2,
    reviews: [
      { author: "Fred Gagnon", rating: 4, comment: "Very affordable and dependable. Standard units are always clean and functional.", date: "2025-10-14" },
      { author: "Tammy Rodrigues", rating: 4, comment: "Quick delivery and fair price. Used for a road construction project.", date: "2025-06-28" }
    ],
    yearsInBusiness: 10,
    featured: false
  },
  {
    id: "ma-quincy-south-shore-porta",
    name: "South Shore Porta Rentals",
    state: "MA",
    city: "Quincy",
    phone: "(617) 555-1806",
    email: "hello@southshoreportarentals.com",
    website: "https://southshoreportarentals.com",
    description: "Quincy-based portable restroom provider serving the South Shore from Boston to Plymouth. We specialize in beach events, parks, and coastal festivals.",
    services: ["Standard", "Deluxe", "ADA Accessible"],
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 3,
    reviews: [
      { author: "Sean Murphy", rating: 4, comment: "Great for our Quincy beach event. Units stayed clean all day despite heavy use.", date: "2025-08-17" },
      { author: "Kathleen Donohue", rating: 5, comment: "Wonderful company to work with. The Deluxe units were spotless and well-maintained.", date: "2025-07-04" },
      { author: "Neil Fortunato", rating: 4, comment: "Good service and competitive pricing. Will use again for next year's regatta.", date: "2025-05-31" }
    ],
    yearsInBusiness: 17,
    featured: false
  },
  {
    id: "ma-plymouth-pilgrim-porta",
    name: "Pilgrim Porta Services",
    state: "MA",
    city: "Plymouth",
    phone: "(508) 555-1907",
    email: "info@pilgrimportaservices.com",
    website: "https://pilgrimportaservices.com",
    description: "Plymouth's historic and reliable portable restroom company. We serve Plymouth Rock events, Thanksgiving festivals, and construction projects across Cape Cod and the South Shore.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 4,
    reviews: [
      { author: "Dorothy Washburn", rating: 5, comment: "Used for Plymouth's Thanksgiving parade — impeccable service for a massive event.", date: "2025-11-28" },
      { author: "Harold Stevens", rating: 5, comment: "Professional and reliable. The ADA unit was exactly what our historic site needed.", date: "2025-10-10" },
      { author: "Barbara Nickerson", rating: 4, comment: "Very clean units and friendly staff. Great for our Cape Cod wedding weekend.", date: "2025-09-02" },
      { author: "George Atwood", rating: 4, comment: "Solid local company. Used for a construction project in Bourne — no problems.", date: "2025-06-07" }
    ],
    yearsInBusiness: 21,
    featured: true
  },
  {
    id: "ma-brockton-champion-sanitation",
    name: "Champion Sanitation Services",
    state: "MA",
    city: "Brockton",
    phone: "(508) 555-2008",
    email: "service@championsanitation.com",
    website: "https://championsanitation.com",
    description: "Brockton's champion for portable restroom service. With roots in the city's proud working-class heritage, we deliver dependable, clean units for construction sites and community events.",
    services: ["Standard", "Construction & Long-term", "ADA Accessible"],
    priceRange: "$",
    rating: 4.3,
    reviewCount: 3,
    reviews: [
      { author: "Louis Mendes", rating: 4, comment: "Reliable and affordable — perfect for our months-long construction project.", date: "2025-10-25" },
      { author: "Cheryl Washington", rating: 4, comment: "Great local company. Units were clean and they serviced on schedule every week.", date: "2025-08-19" },
      { author: "Mark Ferrante", rating: 5, comment: "Excellent service! ADA unit was perfectly maintained for our community health fair.", date: "2025-06-03" }
    ],
    yearsInBusiness: 5,
    featured: false
  }
];

export function getAllVendors(): Vendor[] {
  return vendors;
}

export function getVendorById(id: string): Vendor | undefined {
  return vendors.find((v) => v.id === id);
}

export function filterVendors(params: {
  state?: State;
  priceRange?: PriceRange;
  service?: ServiceType;
  search?: string;
}): Vendor[] {
  return vendors.filter((v) => {
    if (params.state && v.state !== params.state) return false;
    if (params.priceRange && v.priceRange !== params.priceRange) return false;
    if (params.service && !v.services.includes(params.service)) return false;
    if (params.search) {
      const q = params.search.toLowerCase();
      if (
        !v.name.toLowerCase().includes(q) &&
        !v.city.toLowerCase().includes(q) &&
        !v.description.toLowerCase().includes(q)
      )
        return false;
    }
    return true;
  });
}

export function getFeaturedVendors(): Vendor[] {
  return vendors.filter((v) => v.featured);
}
