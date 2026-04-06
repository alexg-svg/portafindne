export type ServiceType =
  | "Standard"
  | "Deluxe"
  | "ADA Accessible"
  | "Luxury"
  | "Construction & Long-term";

export type PriceRange = "$" | "$$" | "$$$";

export interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Vendor {
  id: string;
  name: string;
  state: "CT" | "RI" | "MA";
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
  logo: string;
  featured: boolean;
}

export const vendors: Vendor[] = [
  {
    id: "ct-hartford-sanitation-pros",
    name: "Hartford Sanitation Pros",
    state: "CT",
    city: "Hartford",
    phone: "(860) 555-0101",
    email: "info@hartfordsanpros.com",
    website: "https://hartfordsanpros.com",
    description:
      "Hartford Sanitation Pros has been the Capital Region's most trusted portable restroom provider for over two decades. We serve construction sites, outdoor events, festivals, and private parties with clean, well-maintained units. Our fleet includes everything from basic standard units to fully climate-controlled luxury restroom trailers.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.7,
    reviewCount: 134,
    reviews: [
      {
        author: "Mike T.",
        rating: 5,
        comment:
          "Used them for our company picnic in Bushnell Park. Units were spotless and the delivery team was on time and professional.",
        date: "2025-08-15",
      },
      {
        author: "Sandra L.",
        rating: 4,
        comment:
          "Good service for our road race event. Would have given 5 stars but one unit was a bit late on pickup.",
        date: "2025-07-02",
      },
      {
        author: "James R.",
        rating: 5,
        comment:
          "We've used them on multiple construction projects across Hartford County. Reliable, clean, and easy to work with.",
        date: "2025-06-18",
      },
    ],
    yearsInBusiness: 22,
    logo: "🚽",
    featured: true,
  },
  {
    id: "ct-new-haven-porta-kings",
    name: "New Haven Porta Kings",
    state: "CT",
    city: "New Haven",
    phone: "(203) 555-0188",
    email: "hello@portakings.com",
    website: "https://portakings.com",
    description:
      "Serving New Haven and surrounding shoreline communities, Porta Kings delivers premium portable sanitation solutions for every occasion. From Yale tailgates to coastal weddings, we have the right unit for your event. Our luxury trailers are perfect for upscale outdoor gatherings.",
    services: ["Standard", "Luxury", "ADA Accessible"],
    priceRange: "$$$",
    rating: 4.9,
    reviewCount: 87,
    reviews: [
      {
        author: "Rachel M.",
        rating: 5,
        comment:
          "The luxury trailer for our wedding was absolutely stunning. Guests couldn't believe it was a portable restroom!",
        date: "2025-09-12",
      },
      {
        author: "Tom B.",
        rating: 5,
        comment: "Top notch service. Responsive, clean, and professional.",
        date: "2025-08-30",
      },
      {
        author: "Linda F.",
        rating: 4,
        comment: "Great options and fair pricing for what you get. Highly recommend.",
        date: "2025-07-25",
      },
    ],
    yearsInBusiness: 14,
    logo: "👑",
    featured: true,
  },
  {
    id: "ct-stamford-portsolutions",
    name: "Stamford PortSolutions",
    state: "CT",
    city: "Stamford",
    phone: "(203) 555-0242",
    email: "contact@stamfordport.com",
    website: "https://stamfordport.com",
    description:
      "Fairfield County's go-to portable sanitation company. We specialize in corporate events, outdoor concerts, and large-scale construction projects throughout lower Fairfield County and Westchester border areas. We offer competitive pricing and fast turnaround.",
    services: ["Standard", "Deluxe", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 62,
    reviews: [
      {
        author: "Carlos V.",
        rating: 5,
        comment: "Called them on short notice for a last-minute event. They delivered within hours. Incredible service.",
        date: "2025-10-05",
      },
      {
        author: "Amy W.",
        rating: 4,
        comment: "Solid units and reasonable price. Good communication throughout.",
        date: "2025-09-14",
      },
    ],
    yearsInBusiness: 9,
    logo: "🔵",
    featured: false,
  },
  {
    id: "ct-waterbury-ready-johns",
    name: "Waterbury Ready-Johns",
    state: "CT",
    city: "Waterbury",
    phone: "(203) 555-0317",
    email: "info@readyjohns.com",
    website: "https://readyjohns.com",
    description:
      "Serving the greater Naugatuck Valley region with affordable portable restroom rentals. We cater to small events, backyard parties, and short-term construction needs. Same-day delivery available in most areas.",
    services: ["Standard", "ADA Accessible"],
    priceRange: "$",
    rating: 4.1,
    reviewCount: 45,
    reviews: [
      {
        author: "Paul D.",
        rating: 4,
        comment: "Affordable and gets the job done. Good for small construction sites.",
        date: "2025-07-19",
      },
      {
        author: "Karen S.",
        rating: 4,
        comment: "Easy booking process and the units were clean on arrival.",
        date: "2025-06-11",
      },
    ],
    yearsInBusiness: 6,
    logo: "🟢",
    featured: false,
  },
  {
    id: "ct-bridgeport-coastline-sanitation",
    name: "Coastline Sanitation CT",
    state: "CT",
    city: "Bridgeport",
    phone: "(203) 555-0455",
    email: "service@coastlinect.com",
    website: "https://coastlinect.com",
    description:
      "Coastline Sanitation brings premium portable restroom services to the entire Connecticut shoreline from Bridgeport to Old Lyme. We are especially popular for waterfront events, festivals, and beach cleanups. Our ADA-compliant units meet all state and federal requirements.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Luxury"],
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 98,
    reviews: [
      {
        author: "Donna P.",
        rating: 5,
        comment: "Used for our beach concert series - handled 1,200 people flawlessly. Will book again every year.",
        date: "2025-08-03",
      },
      {
        author: "Greg H.",
        rating: 4,
        comment: "Good selection and quick setup. Staff was friendly.",
        date: "2025-07-27",
      },
      {
        author: "Monica L.",
        rating: 5,
        comment: "The deluxe trailer was perfect for our outdoor gala.",
        date: "2025-05-22",
      },
    ],
    yearsInBusiness: 17,
    logo: "🌊",
    featured: true,
  },
  {
    id: "ri-providence-first-class-porta",
    name: "First Class Porta RI",
    state: "RI",
    city: "Providence",
    phone: "(401) 555-0110",
    email: "info@firstclassportari.com",
    website: "https://firstclassportari.com",
    description:
      "First Class Porta RI is Providence's premier portable restroom rental service. Whether you're hosting a festival on College Hill, managing a construction site in the Jewelry District, or planning a wedding in the East Bay, we deliver and maintain clean, high-quality units on time, every time.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Luxury", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      {
        author: "Erin C.",
        rating: 5,
        comment:
          "The best in Rhode Island, period. Used them for a Providence WaterFire event and everything was perfect.",
        date: "2025-09-06",
      },
      {
        author: "Jay N.",
        rating: 5,
        comment: "Our go-to for all construction site sanitation. Reliable and professional.",
        date: "2025-08-20",
      },
      {
        author: "Melissa T.",
        rating: 4,
        comment: "Great service. Small issue with pickup timing but they made it right.",
        date: "2025-07-12",
      },
    ],
    yearsInBusiness: 19,
    logo: "⭐",
    featured: true,
  },
  {
    id: "ri-warwick-ocean-state-johns",
    name: "Ocean State Johns",
    state: "RI",
    city: "Warwick",
    phone: "(401) 555-0229",
    email: "contact@oceanstatejohns.com",
    website: "https://oceanstatejohns.com",
    description:
      "Ocean State Johns proudly serves Kent County and surrounding areas with reliable portable sanitation. We offer competitive weekly and monthly rates for long-term construction clients, and flexible weekend packages for events. Clean units guaranteed or your money back.",
    services: ["Standard", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.3,
    reviewCount: 71,
    reviews: [
      {
        author: "Dan M.",
        rating: 4,
        comment: "Good value for the price. Units are always clean.",
        date: "2025-10-01",
      },
      {
        author: "Sherry K.",
        rating: 5,
        comment: "Fast delivery and easy online booking. Very happy with the experience.",
        date: "2025-09-15",
      },
    ],
    yearsInBusiness: 8,
    logo: "🌊",
    featured: false,
  },
  {
    id: "ri-newport-harborview-sanitation",
    name: "Harborview Sanitation",
    state: "RI",
    city: "Newport",
    phone: "(401) 555-0341",
    email: "info@harborviewsanitation.com",
    website: "https://harborviewsanitation.com",
    description:
      "Newport's luxury portable restroom specialist. We serve the high-end event market - wedding receptions at the Bellevue mansions, yacht races, summer galas, and upscale corporate outings. Our fleet of luxury trailers are climate-controlled and beautifully appointed.",
    services: ["Luxury", "Deluxe", "ADA Accessible"],
    priceRange: "$$$",
    rating: 5.0,
    reviewCount: 43,
    reviews: [
      {
        author: "Victoria S.",
        rating: 5,
        comment:
          "Absolutely stunning restroom trailer for our Newport wedding. Every guest commented on how beautiful it was.",
        date: "2025-10-08",
      },
      {
        author: "Phillip R.",
        rating: 5,
        comment: "First class in every sense of the word. Perfect for our regatta.",
        date: "2025-08-11",
      },
    ],
    yearsInBusiness: 12,
    logo: "⚓",
    featured: true,
  },
  {
    id: "ri-pawtucket-budget-potties",
    name: "Budget Potties RI",
    state: "RI",
    city: "Pawtucket",
    phone: "(401) 555-0467",
    email: "hello@budgetpottiesri.com",
    website: "https://budgetpottiesri.com",
    description:
      "Serving Pawtucket, Central Falls, and northern Rhode Island with no-frills, affordable portable restroom rentals. Great for small contractors, community events, and short-term needs. We keep it simple, clean, and cheap.",
    services: ["Standard", "Construction & Long-term"],
    priceRange: "$",
    rating: 3.9,
    reviewCount: 38,
    reviews: [
      {
        author: "Tony G.",
        rating: 4,
        comment: "Does the job at a great price. No complaints.",
        date: "2025-09-23",
      },
      {
        author: "Lisa B.",
        rating: 3,
        comment: "Decent service but response time could be faster.",
        date: "2025-08-14",
      },
    ],
    yearsInBusiness: 4,
    logo: "💰",
    featured: false,
  },
  {
    id: "ri-cranston-greenleaf-portable",
    name: "Greenleaf Portable Sanitation",
    state: "RI",
    city: "Cranston",
    phone: "(401) 555-0588",
    email: "info@greenleafri.com",
    website: "https://greenleafri.com",
    description:
      "Greenleaf Portable Sanitation is committed to eco-friendly portable restroom solutions. We use biodegradable chemicals and sustainable practices across all our units. Serving Cranston, Johnston, and Providence County for residential and commercial needs.",
    services: ["Standard", "Deluxe", "ADA Accessible"],
    priceRange: "$$",
    rating: 4.5,
    reviewCount: 52,
    reviews: [
      {
        author: "Natalie H.",
        rating: 5,
        comment: "Love that they use eco-friendly products. Clean units and great customer service.",
        date: "2025-07-08",
      },
      {
        author: "Brian F.",
        rating: 4,
        comment: "Solid company. Good pricing and always on time.",
        date: "2025-06-30",
      },
    ],
    yearsInBusiness: 7,
    logo: "🌿",
    featured: false,
  },
  {
    id: "ma-boston-bay-state-sanitation",
    name: "Bay State Sanitation",
    state: "MA",
    city: "Boston",
    phone: "(617) 555-0120",
    email: "info@baystatesanitation.com",
    website: "https://baystatesanitation.com",
    description:
      "Bay State Sanitation is Boston's largest portable restroom provider. From the Boston Marathon to Fenway events to South Boston construction projects, we have the capacity and experience to handle any scale. We operate 24/7 and offer emergency same-day service.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Luxury", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 312,
    reviews: [
      {
        author: "Patrick O.",
        rating: 5,
        comment:
          "They handled our Marathon route sanitation for the third year running. Incredibly organized and professional.",
        date: "2025-04-21",
      },
      {
        author: "Fiona M.",
        rating: 4,
        comment: "Used for a large construction project in the Seaport. Reliable service throughout.",
        date: "2025-10-10",
      },
      {
        author: "Steve C.",
        rating: 5,
        comment: "Best in Boston. Don't bother with anyone else.",
        date: "2025-09-01",
      },
    ],
    yearsInBusiness: 28,
    logo: "🏙️",
    featured: true,
  },
  {
    id: "ma-worcester-central-ma-potties",
    name: "Central MA Potties",
    state: "MA",
    city: "Worcester",
    phone: "(508) 555-0233",
    email: "contact@centralmaportable.com",
    website: "https://centralmaportable.com",
    description:
      "Serving Worcester and the entire central Massachusetts region, Central MA Potties offers comprehensive portable sanitation solutions. We specialize in long-term construction rentals and large outdoor event support. Our pricing is transparent and competitive.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 89,
    reviews: [
      {
        author: "Rob D.",
        rating: 5,
        comment: "Used them for 18 months on a major road construction project. Never missed a service.",
        date: "2025-10-15",
      },
      {
        author: "Cheryl N.",
        rating: 4,
        comment: "Great for events. Friendly staff and clean equipment.",
        date: "2025-08-25",
      },
    ],
    yearsInBusiness: 15,
    logo: "🔧",
    featured: false,
  },
  {
    id: "ma-springfield-pioneer-valley-porta",
    name: "Pioneer Valley Portable",
    state: "MA",
    city: "Springfield",
    phone: "(413) 555-0345",
    email: "info@pvportable.com",
    website: "https://pvportable.com",
    description:
      "Pioneer Valley Portable serves western Massachusetts including Springfield, Holyoke, Chicopee, and the Five College area. We are the region's top choice for outdoor music festivals, college events, athletic tournaments, and commercial construction.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.2,
    reviewCount: 67,
    reviews: [
      {
        author: "Josh P.",
        rating: 4,
        comment: "Handled our outdoor music festival well. Would book again.",
        date: "2025-07-19",
      },
      {
        author: "Alicia R.",
        rating: 4,
        comment: "Good pricing for the Pioneer Valley area. Reliable service.",
        date: "2025-06-05",
      },
    ],
    yearsInBusiness: 11,
    logo: "🏔️",
    featured: false,
  },
  {
    id: "ma-cambridge-elite-event-sanitation",
    name: "Elite Event Sanitation",
    state: "MA",
    city: "Cambridge",
    phone: "(617) 555-0456",
    email: "hello@eliteeventsanitation.com",
    website: "https://eliteeventsanitation.com",
    description:
      "Cambridge's premier upscale portable restroom provider. We specialize in high-end events, corporate gatherings, and university functions across Cambridge, Somerville, and Greater Boston. Our luxury trailers feature hardwood floors, granite counters, and climate control.",
    services: ["Luxury", "Deluxe", "ADA Accessible"],
    priceRange: "$$$",
    rating: 4.9,
    reviewCount: 74,
    reviews: [
      {
        author: "Helen K.",
        rating: 5,
        comment: "Our Harvard alumni event was elevated by having these beautiful trailers. Simply outstanding.",
        date: "2025-09-28",
      },
      {
        author: "Marcus L.",
        rating: 5,
        comment: "Top-tier luxury trailers and impeccable service. Worth every penny.",
        date: "2025-08-17",
      },
      {
        author: "Sandra W.",
        rating: 4,
        comment: "Excellent quality. Pricing is premium but justified.",
        date: "2025-07-30",
      },
    ],
    yearsInBusiness: 10,
    logo: "✨",
    featured: true,
  },
  {
    id: "ma-lowell-merrimack-sanitation",
    name: "Merrimack Valley Sanitation",
    state: "MA",
    city: "Lowell",
    phone: "(978) 555-0567",
    email: "info@merrimacksan.com",
    website: "https://merrimacksan.com",
    description:
      "Merrimack Valley Sanitation has been the trusted name in portable restroom services for northeastern Massachusetts for 20 years. We serve Lowell, Lawrence, Haverhill, and surrounding communities with clean, affordable units and friendly service.",
    services: ["Standard", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.3,
    reviewCount: 95,
    reviews: [
      {
        author: "Kevin M.",
        rating: 4,
        comment: "Used them for our triathlon race. Great setup, easy communication.",
        date: "2025-09-07",
      },
      {
        author: "Joan T.",
        rating: 5,
        comment: "The most affordable and reliable service in the Merrimack Valley. Wouldn't use anyone else.",
        date: "2025-08-02",
      },
    ],
    yearsInBusiness: 20,
    logo: "💧",
    featured: false,
  },
  {
    id: "ma-plymouth-south-shore-porta",
    name: "South Shore Porta",
    state: "MA",
    city: "Plymouth",
    phone: "(508) 555-0678",
    email: "contact@southshoreporta.com",
    website: "https://southshoreporta.com",
    description:
      "South Shore Porta serves Plymouth, Brockton, and the entire South Shore region. From summer beach events to year-round construction, we handle it all. Our ADA-accessible units comply with all state guidelines, and our luxury options are perfect for Cape Cod weddings and events.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Luxury"],
    priceRange: "$$",
    rating: 4.5,
    reviewCount: 81,
    reviews: [
      {
        author: "Nancy B.",
        rating: 5,
        comment: "The luxury trailer for our daughter's outdoor wedding was perfect. All our guests were impressed.",
        date: "2025-10-03",
      },
      {
        author: "Bill R.",
        rating: 4,
        comment: "Good service and fair pricing for the South Shore area.",
        date: "2025-09-19",
      },
    ],
    yearsInBusiness: 13,
    logo: "🏖️",
    featured: false,
  },
  {
    id: "ma-worcester-green-earth-sanitation",
    name: "Green Earth Sanitation MA",
    state: "MA",
    city: "Northampton",
    phone: "(413) 555-0789",
    email: "info@greenearthma.com",
    website: "https://greenearthma.com",
    description:
      "Green Earth Sanitation is Massachusetts' most environmentally conscious portable restroom provider. We use solar-powered hand wash stations, biodegradable additives, and partner with local water conservation organizations. Perfect for eco-conscious events and organizations.",
    services: ["Standard", "ADA Accessible", "Deluxe"],
    priceRange: "$$",
    rating: 4.7,
    reviewCount: 58,
    reviews: [
      {
        author: "Samantha G.",
        rating: 5,
        comment: "Perfect for our sustainability conference. Eco-friendly and professional.",
        date: "2025-10-12",
      },
      {
        author: "Alex P.",
        rating: 4,
        comment: "Love their commitment to the environment. Clean units and great service.",
        date: "2025-09-04",
      },
    ],
    yearsInBusiness: 8,
    logo: "♻️",
    featured: true,
  },
  {
    id: "ct-norwich-eastern-ct-portables",
    name: "Eastern CT Portables",
    state: "CT",
    city: "Norwich",
    phone: "(860) 555-0899",
    email: "info@easternctportables.com",
    website: "https://easternctportables.com",
    description:
      "Eastern CT Portables serves New London County and surrounding eastern Connecticut communities. We cover everything from Mohegan Sun events to local town fairs and private construction projects. Known for our fast response time and excellent customer care.",
    services: ["Standard", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$",
    rating: 4.2,
    reviewCount: 49,
    reviews: [
      {
        author: "Diane C.",
        rating: 4,
        comment: "Reliable service for our annual town fair. Good value.",
        date: "2025-08-28",
      },
      {
        author: "Frank J.",
        rating: 4,
        comment: "Used for a 3-month construction project. Consistent service throughout.",
        date: "2025-07-15",
      },
    ],
    yearsInBusiness: 5,
    logo: "🏕️",
    featured: false,
  },
  {
    id: "ri-bristol-bay-side-rentals",
    name: "Bay Side Rentals RI",
    state: "RI",
    city: "Bristol",
    phone: "(401) 555-0920",
    email: "hello@baysideri.com",
    website: "https://baysideri.com",
    description:
      "Bay Side Rentals has been serving Bristol County and Narragansett Bay communities for over a decade. We are the go-to provider for Bristol's famous Fourth of July Parade, sailing regattas, and coastal events throughout the East Bay. We offer competitive group discounts for nonprofits.",
    services: ["Standard", "Deluxe", "ADA Accessible"],
    priceRange: "$$",
    rating: 4.6,
    reviewCount: 63,
    reviews: [
      {
        author: "George W.",
        rating: 5,
        comment:
          "They've handled the July 4th parade for years. Always well organized and the units are spotless.",
        date: "2025-07-05",
      },
      {
        author: "Tina C.",
        rating: 4,
        comment: "Great local business. Friendly and reliable.",
        date: "2025-06-22",
      },
    ],
    yearsInBusiness: 11,
    logo: "⛵",
    featured: false,
  },
  {
    id: "ma-quincy-harbor-sanitation",
    name: "Harbor Sanitation MA",
    state: "MA",
    city: "Quincy",
    phone: "(617) 555-1030",
    email: "info@harborsanma.com",
    website: "https://harborsanma.com",
    description:
      "Harbor Sanitation is a trusted name in Greater Boston's South Shore and MetroSouth region. Serving Quincy, Braintree, Weymouth, and surrounding towns with quality portable restrooms for construction, events, and emergency needs. 24-hour emergency service available.",
    services: ["Standard", "Deluxe", "ADA Accessible", "Construction & Long-term"],
    priceRange: "$$",
    rating: 4.4,
    reviewCount: 107,
    reviews: [
      {
        author: "Ruth A.",
        rating: 4,
        comment: "Solid local business. Used them for our school carnival and everything went smoothly.",
        date: "2025-06-10",
      },
      {
        author: "Peter H.",
        rating: 5,
        comment: "Called at 10pm for an emergency on a job site. They had a unit out by 7am. Outstanding!",
        date: "2025-05-18",
      },
    ],
    yearsInBusiness: 16,
    logo: "⚙️",
    featured: false,
  },
];

export function getVendorById(id: string): Vendor | undefined {
  return vendors.find((v) => v.id === id);
}

export function getVendorsByState(state: "CT" | "RI" | "MA"): Vendor[] {
  return vendors.filter((v) => v.state === state);
}

export function getFeaturedVendors(): Vendor[] {
  return vendors.filter((v) => v.featured);
}

export function filterVendors(params: {
  states?: string[];
  priceRanges?: string[];
  services?: string[];
  search?: string;
}): Vendor[] {
  return vendors.filter((vendor) => {
    if (params.states && params.states.length > 0) {
      if (!params.states.includes(vendor.state)) return false;
    }
    if (params.priceRanges && params.priceRanges.length > 0) {
      if (!params.priceRanges.includes(vendor.priceRange)) return false;
    }
    if (params.services && params.services.length > 0) {
      const hasService = params.services.some((s) => vendor.services.includes(s as ServiceType));
      if (!hasService) return false;
    }
    if (params.search && params.search.trim() !== "") {
      const q = params.search.toLowerCase();
      if (
        !vendor.name.toLowerCase().includes(q) &&
        !vendor.city.toLowerCase().includes(q) &&
        !vendor.state.toLowerCase().includes(q) &&
        !vendor.description.toLowerCase().includes(q)
      ) {
        return false;
      }
    }
    return true;
  });
}
