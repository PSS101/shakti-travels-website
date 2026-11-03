/**
 * Shakti Travels - Single Source of Truth for Business Data & Tour Packages
 * Brand Identity: Navy Blue (#073B78) & Bright Yellow (#FFD100)
 */

export const BUSINESS_INFO = {
  name: "SHAKTI TRAVELS",
  legalName: "Shakti Travels",
  tagline: "Your Journey Our Priority",
  supportingLine: "Professional • Safe • On-Time Service",
  experienceYears: 8,
  experienceBadge: "Proudly Serving Customers for 8 Years",
  proprietor: "Vamshi",
  phone: "+91 9700500496",
  phoneRaw: "9700500496",
  phoneDisplay: "+91 97005 00496",
  telUrl: "tel:+919700500496",
  whatsappNumber: "919700500496",
  email: "shaktitravels45@gmail.com",
  emailUrl: "mailto:shaktitravels45@gmail.com",
  location: "Kharmanghat, Hyderabad – 500079",
  address: "Kharmanghat, Hyderabad, Telangana – 500079, India",
  instagramHandle: "@shaktitravels45",
  instagramUrl: "https://www.instagram.com/shaktitravels45/",
  logoPath: "/images/branding/shakti-logo.png",
  logoFullBadge: "/images/branding/shakti-logo-full.png",
  logoTransparent: "/images/branding/shakti-logo-transparent.png",
  instagramQrPath: "/images/branding/instagram-qr-card.png",
  coreServices: ["Car Rentals", "Airport Transfers", "Outstation Trips"],
  defaultWhatsAppMessage: "Hello Shakti Travels, I would like to enquire about your travel services and tour packages.",
  operatingHours: "24/7 Service Available",
  availabilityNotice: "Round-the-clock customer support for local city cabs, airport transfers, and outstation pilgrimage tours."
};

/**
 * Generates a properly URL-encoded WhatsApp link
 * @param {string} customMessage 
 * @returns {string} WhatsApp direct URL
 */
export const getWhatsAppUrl = (customMessage) => {
  const msg = customMessage || BUSINESS_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

/**
 * Trust strip items displayed under the Hero section
 */
export const TRUST_PILLARS = [
  {
    id: "experience",
    title: "8 Years of Service",
    description: "Proudly serving customers for 8 years with safe, dependable travel"
  },
  {
    id: "professional",
    title: "Professional Chauffeurs",
    description: "Courteous, verified drivers with highway and city route expertise"
  },
  {
    id: "comfortable",
    title: "Sanitized AC Vehicles",
    description: "Well-maintained, clean, and comfortable fleet for family and business"
  },
  {
    id: "on-time",
    title: "Punctual Pickups",
    description: "Reliable on-time arrivals for stress-free tour and flight schedules"
  }
];

/**
 * Services provided by Shakti Travels (Aligned with reference travel agency structure)
 */
export const SERVICES_LIST = [
  {
    id: "car-rentals",
    title: "Car Rentals",
    image: "/images/services/car-rentals.webp",
    shortDesc: "Comfortable chauffeur-driven vehicle rentals for personal errands, family outings, and corporate travel.",
    detailedDesc: "Whether you need a car for a few hours, a full day, or an extended assignment, our chauffeur-driven rental service provides maximum comfort, safety, and convenience without driving stress.",
    tag: "With Driver Only",
    iconName: "Car",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about your Car Rentals service with a driver."
  },
  {
    id: "airport-transfers",
    title: "Airport Pickup & Drop",
    image: "/images/destinations/hyderabad-airport.webp",
    shortDesc: "Punctual airport transfer services ensuring you never miss a flight or wait after landing.",
    detailedDesc: "Timely and hassle-free pickup and drop-off services for Rajiv Gandhi International Airport (RGIA) and intercity transit. Our chauffeurs track schedules to ensure prompt arrivals.",
    tag: "Punctual Pickups",
    iconName: "Plane",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about booking an Airport Pickup/Drop transfer."
  },
  {
    id: "outstation-trips",
    title: "Outstation Trips",
    image: "/images/services/outstation-trips.webp",
    shortDesc: "Reliable long-distance travel services for pilgrimage tours, holiday getaways, and business visits.",
    detailedDesc: "Safe and relaxed long-distance journeys across Telangana, Andhra Pradesh, and South India with experienced highway drivers well-versed with inter-state routes.",
    tag: "Intercity Travel",
    iconName: "Compass",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about an Outstation Trip service."
  },
  {
    id: "local-travel",
    title: "Local Travel",
    image: "/images/services/local-travel.webp",
    shortDesc: "Flexible point-to-point and customized local city rides across major business and leisure hubs.",
    detailedDesc: "Smooth, air-conditioned transportation for hospital visits, shopping trips, family gatherings, and daily commuting across the city with dedicated chauffeur service.",
    tag: "City Commutes",
    iconName: "MapPin",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about your Local Travel cab service."
  },
  {
    id: "full-day-travel",
    title: "Full-Day Travel",
    image: "/images/services/full-day-travel.webp",
    shortDesc: "Dedicated car and driver at your disposal for whole-day sightseeing and executive itineraries.",
    detailedDesc: "Enjoy complete freedom without worrying about hailing multiple cabs. Keep the same car and driver with you throughout your full day of meetings, tours, or events.",
    tag: "All-Day Disposal",
    iconName: "Calendar",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about your Full-Day Travel cab service."
  },
  {
    id: "hourly-packages",
    title: "Hourly Cab Packages",
    image: "/images/services/hourly-cab.webp",
    shortDesc: "Budget-friendly hourly packages (8 Hrs/80 Kms & 12 Hrs/120 Kms) for flexible city itineraries.",
    detailedDesc: "Transparent fixed-hour cab packages offering great value for multi-stop city errands, client meetings, or shopping runs with predictable upfront pricing.",
    tag: "Fixed Hours / Kms",
    iconName: "Clock",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about your Hourly Cab Packages."
  }
];

/**
 * Vehicle Fleet Data
 * Strictly showing Shakti Travels' 3 confirmed vehicles
 * Standalone per-km rates REMOVED as per client instruction; vehicle pricing is now package-based
 */
export const FLEET_LIST = [
  {
    id: "baleno",
    name: "Maruti Suzuki Baleno",
    category: "Premium Hatchback",
    seating: "4+1 Seater",
    capacityNumber: 5,
    luggage: "2 Medium Bags",
    acType: "Climate Controlled AC",
    imagePath: "/images/vehicles/maruti-baleno.webp",
    accentColor: "#0A4C9B",
    highlights: [
      "4 Passenger + 1 Driver Seating",
      "Superior Cabin Comfort & Smooth Suspension",
      "Fully Air Conditioned & Sanitized",
      "Ample Boot Space for Weekend Luggage"
    ],
    idealFor: "City sightseeing, airport transfers & small family day trips",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about booking Maruti Suzuki Baleno (4+1 Seater) for my travel."
  },
  {
    id: "swift-dzire",
    name: "Maruti Suzuki Swift Dzire",
    category: "Executive Compact Sedan",
    seating: "4+1 Seater",
    capacityNumber: 5,
    luggage: "3 Medium Bags / 2 Large Suitcases",
    acType: "High-Efficiency Chilled AC",
    isPopular: true,
    imagePath: "/images/vehicles/maruti-dzire.webp",
    accentColor: "#073B78",
    highlights: [
      "4 Passenger + 1 Driver Seating",
      "Dedicated Sedan Trunk for Large Luggage",
      "Executive Rear-Seat Legroom & Comfort",
      "Exceptional Highway Stability & Fuel Efficiency"
    ],
    idealFor: "Outstation pilgrimage, airport transfers & business travel",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about booking Maruti Suzuki Swift Dzire (4+1 Seater) for my travel."
  },
  {
    id: "kia-carens",
    name: "Kia Carens SUV",
    category: "Spacious Multi-Utility 7-Seater",
    seating: "6+1 Seater",
    capacityNumber: 7,
    luggage: "4+ Bags with Flexible 3rd Row",
    acType: "Multi-Zone Rear AC Vents",
    imagePath: "/images/vehicles/kia-carens.webp",
    accentColor: "#0F3D6E",
    highlights: [
      "6 Passenger + 1 Driver Seating",
      "Generous 3-Row Seating with Individual AC",
      "Reclining Captain Comfort & Superior Headroom",
      "Generous Luggage Capacity for Family Tours"
    ],
    idealFor: "Large family pilgrimage, group outstations & multi-day tours",
    whatsappMessage: "Hello Shakti Travels, I would like to enquire about booking Kia Carens SUV (6+1 Seater) for my travel."
  }
];

/**
 * Confirmed Tour Packages from Reference Website
 * Package names, durations, itineraries, vehicle pricing tables, inclusions, and exclusions
 */
export const TOUR_PACKAGES = [
  {
    id: "srisailam-1-day",
    title: "1 Day Srisailam Tour Package",
    slug: "1-day-srisailam-tour",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Tour",
    duration: "1 Day (Same Day Return)",
    startingPrice: "₹7,500",
    startingPriceNum: 7500,
    badge: "Popular Pilgrimage",
    distance: "Approx. 450 km round-trip",
    shortDesc: "Complete same-day darshan package from Hyderabad to Srisailam Mallikarjuna Swamy Jyotirlinga and Bhramaramba Devi Shakti Peetham.",
    coverImage: "/images/destinations/srisailam-temple.webp",
    destinations: [
      "Sri Bhramaramba Mallikarjuna Swamy Temple (Jyotirlinga & Shakti Peetham)",
      "Srisailam Dam & Krishna River Viewpoint",
      "Sakshi Ganapati Temple",
      "Pathala Ganga Viewpoint",
      "Scenic Nallamala Forest Ghat Road"
    ],
    itinerary: [
      {
        time: "05:00 AM",
        title: "Hyderabad Departure",
        desc: "Early morning doorstep pickup from your location in Hyderabad and scenic highway drive via Dindi towards Nallamala Hills."
      },
      {
        time: "09:30 AM",
        title: "En Route Sightseeing & Sakshi Ganapati",
        desc: "Stop at Srisailam Dam for magnificent panoramic views of the reservoir and visit the revered Sakshi Ganapati Temple."
      },
      {
        time: "11:00 AM - 03:00 PM",
        title: "Temple Darshan & Pathala Ganga",
        desc: "Holy Darshan of Sri Mallikarjuna Swamy (one of the 12 Jyotirlingas) and Goddess Bhramaramba Devi (Shakti Peetham). Visit Pathala Ganga ropeway."
      },
      {
        time: "04:30 PM",
        title: "Return Journey to Hyderabad",
        desc: "Commence return drive through the scenic forest road and highway, arriving back in Hyderabad by late evening (~10:00 PM)."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹7,500",
        priceNote: "All-inclusive package fare"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹7,500",
        priceNote: "All-inclusive package fare",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹9,000",
        priceNote: "All-inclusive package fare"
      }
    ],
    inclusions: [
      "Chauffeur-driven air-conditioned private vehicle",
      "Doorstep pickup and drop within Hyderabad",
      "Tolls, expressway charges and parking fees included",
      "Inter-district / border road taxes included",
      "Driver bata, food allowance and fuel charges included"
    ],
    exclusions: [
      "Temple special VIP darshan tickets or pooja charges",
      "Ropeway, boating, and entry fees at attractions",
      "Passenger breakfast, lunch, and personal refreshments",
      "Any unplanned route diversions outside agreed itinerary"
    ]
  },
  {
    id: "srisailam-2-days",
    title: "2 Days Srisailam Tour Package",
    slug: "2-days-srisailam-tour",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Tour",
    duration: "2 Days / 1 Night",
    startingPrice: "₹12,000",
    startingPriceNum: 12000,
    badge: "Relaxed Itinerary",
    distance: "Approx. 500 km complete coverage",
    shortDesc: "Leisurely 2-day pilgrimage covering Mallikarjuna Swamy temple, evening Aarti, Pathala Ganga, Shikhareswara Swamy, and Srisailam Dam.",
    coverImage: "/images/destinations/srisailam-dam.webp",
    destinations: [
      "Sri Mallikarjuna Swamy Temple (Evening & Morning Darshan)",
      "Bhramaramba Devi Shakti Peetham",
      "Pathala Ganga Ropeway & Boating",
      "Shikhareswara Swamy Temple (Highest Peak)",
      "Hatakeshwaram & Paladhara Panchadhara",
      "Srisailam Hydro Dam & Octopus Viewpoint"
    ],
    itinerary: [
      {
        time: "Day 1 - Morning",
        title: "Hyderabad Departure & Dam Visit",
        desc: "Morning pickup from your home/hotel. Travel through Nallamala Forest, visit Srisailam Dam, and check in to your Srisailam accommodation."
      },
      {
        time: "Day 1 - Evening",
        title: "Temple Darshan & Aarti",
        desc: "Evening darshan of Sri Mallikarjuna Jyotirlinga and Bhramaramba Ammavaru. Attend sacred temple Harathi and cultural proceedings."
      },
      {
        time: "Day 2 - Morning",
        title: "Pathala Ganga & Holy Dip",
        desc: "Visit Pathala Ganga via ropeway, take holy dip in Krishna waters, and visit ancient caves and nearby Hatakeshwaram."
      },
      {
        time: "Day 2 - Afternoon & Return",
        title: "Shikhareswaram & Return to Hyderabad",
        desc: "Visit Shikhareswara Swamy peak and Sakshi Ganapati. Return journey through scenic routes, arriving in Hyderabad by 08:30 PM."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹12,000",
        priceNote: "Includes driver night stay allowance"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹12,000",
        priceNote: "Includes driver night stay allowance",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹14,500",
        priceNote: "Includes driver night stay allowance"
      }
    ],
    inclusions: [
      "AC vehicle for entire 2 days with dedicated driver",
      "All tolls, parking fees, and checkpoint taxes included",
      "Driver night halt charge and driver bata included",
      "Fuel charges for full designated itinerary coverage",
      "Doorstep pickup and drop in Hyderabad"
    ],
    exclusions: [
      "Hotel accommodation / room tariff at Srisailam",
      "Temple pooja, sevas, and entry tickets",
      "Personal food, snacks, and water expenses",
      "Boating, ropeway tickets, and camera charges"
    ]
  },
  {
    id: "hyderabad-city-1",
    title: "Hyderabad City Sightseeing (Package 1)",
    slug: "hyderabad-city-sightseeing-package-1",
    category: "city-tours",
    categoryLabel: "City Tour",
    duration: "1 Day (8 to 10 Hours)",
    startingPrice: "₹3,000",
    startingPriceNum: 3000,
    badge: "Heritage & Culture",
    distance: "Local City Circuit (~80-100 km)",
    shortDesc: "Experience Hyderabad's rich heritage: Charminar, Salarjung Museum, Chowmahalla Palace, Golconda Fort, Birla Mandir, and Hussain Sagar.",
    coverImage: "/images/destinations/hyderabad-charminar.webp",
    destinations: [
      "Historic Charminar & Laad Bazaar",
      "Salar Jung Museum",
      "Chowmahalla Palace (Nizam's Seat)",
      "Nehru Zoological Park",
      "Golconda Fort",
      "Birla Mandir & Planetarium",
      "Hussain Sagar Lake & Buddha Statue",
      "NTR Gardens & Lumbini Park"
    ],
    itinerary: [
      {
        time: "09:00 AM",
        title: "Morning Pickup & Charminar",
        desc: "Doorstep pickup from hotel/home. Visit iconic Charminar, Makkah Masjid, and stroll through traditional pearl and bangle bazaars."
      },
      {
        time: "11:00 AM",
        title: "Salar Jung Museum & Chowmahalla Palace",
        desc: "Explore world-renowned artefacts at Salar Jung Museum, followed by the grand architecture of Chowmahalla Palace."
      },
      {
        time: "02:00 PM",
        title: "Golconda Fort & Qutb Shahi Tombs",
        desc: "Explore the acoustics and majestic bastions of Golconda Fort and the surrounding royal heritage complexes."
      },
      {
        time: "05:30 PM",
        title: "Birla Mandir & Hussain Sagar Lake",
        desc: "Visit pristine white marble Birla Mandir for panoramic city views. Evening leisure at Hussain Sagar Lake & NTR Gardens."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹3,000",
        priceNote: "Standard city package fare"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹3,000",
        priceNote: "Standard city package fare",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹4,000",
        priceNote: "Standard city package fare"
      }
    ],
    inclusions: [
      "AC car with experienced city chauffeur for 8-10 hours",
      "Fuel costs for standard city tour circuit",
      "Doorstep pickup and return drop within city limits"
    ],
    exclusions: [
      "City toll taxes and parking charges",
      "Museum, palace, and monument entry tickets",
      "Audio guide / private tour guide charges",
      "Lunch, snacks, and personal purchases"
    ]
  },
  {
    id: "hyderabad-city-2",
    title: "Hyderabad City Sightseeing (Package 2 - Film City & Leisure)",
    slug: "hyderabad-city-sightseeing-package-2",
    category: "city-tours",
    categoryLabel: "City Tour",
    duration: "1 Day (Full Day / 10-12 Hours)",
    startingPrice: "₹3,500",
    startingPriceNum: 3500,
    badge: "Entertainment & Leisure",
    distance: "Extended Circuit (~120-140 km)",
    shortDesc: "Extended Hyderabad tour covering Ramoji Film City or Sanghi Temple, Shilparamam Cultural Arts Village, and evening sound & light spectacle.",
    coverImage: "/images/reference/hyderabad-city-sightseeing-2.jpg",
    destinations: [
      "Ramoji Film City (World's Largest Film Studio Complex)",
      "Sanghi Temple (Scenic Hilltop Shrine)",
      "Shilparamam Arts & Crafts Village",
      "Hitec City Cyber Towers Drive",
      "Golconda Fort Light & Sound Show"
    ],
    itinerary: [
      {
        time: "08:30 AM",
        title: "Morning Pickup & Ramoji Film City",
        desc: "Morning pickup and smooth transfer towards Ramoji Film City or Sanghi Temple complex."
      },
      {
        time: "10:30 AM - 04:30 PM",
        title: "Film Studio Tours & Live Shows",
        desc: "Full day enjoying thematic film sets, studio tours, amusement rides, and cultural dance presentations."
      },
      {
        time: "05:30 PM",
        title: "Sanghi Temple & Evening Highlights",
        desc: "Visit the pristine Venkateswara shrine atop Paramanand Giri hillock, followed by a comfortable drop at your destination."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹3,500",
        priceNote: "Standard day tour fare"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹3,500",
        priceNote: "Standard day tour fare",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹4,500",
        priceNote: "Standard day tour fare"
      }
    ],
    inclusions: [
      "Dedicated air-conditioned vehicle with driver for 10-12 hours",
      "Parking charges at major tourist spots",
      "Driver allowance and fuel costs included"
    ],
    exclusions: [
      "Outer Ring Road (ORR) toll plaza charges",
      "Ramoji Film City admission / tour ticket packages",
      "Food, beverages, and personal expenses"
    ]
  },
  {
    id: "yadagirigutta-swarnagiri",
    title: "Hyderabad to Yadagirigutta & Swarnagiri Tour",
    slug: "yadagirigutta-swarnagiri-tour",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Tour",
    duration: "1 Day (Approx. 7 to 8 Hours)",
    startingPrice: "₹4,500",
    startingPriceNum: 4500,
    badge: "Sacred Shrines",
    distance: "Approx. 180 km round-trip",
    shortDesc: "Sacred same-day pilgrimage to Sri Lakshmi Narasimha Swamy Temple atop Yadagirigutta and the magnificent golden Swarnagiri Temple at Manepally.",
    coverImage: "/images/reference/yadagirigutta-yadadri-temple.jpg",
    destinations: [
      "Yadadri Sri Lakshmi Narasimha Swamy Main Temple (Yadagirigutta)",
      "Swarnagiri Sri Venkateswara Swamy Temple (Manepally)",
      "Surendrapuri Mythological Theme Park (Optional)",
      "Warangal Highway Scenic Drive"
    ],
    itinerary: [
      {
        time: "07:00 AM",
        title: "Hyderabad Departure",
        desc: "Convenient doorstep pickup and smooth highway drive on the Hyderabad-Warangal 4-lane expressway."
      },
      {
        time: "08:30 AM",
        title: "Yadadri Temple Darshan",
        desc: "Ascend Yadadri hillock to visit the grand reconstructed Dravidian architectural masterpiece of Lord Lakshmi Narasimha Swamy."
      },
      {
        time: "12:30 PM",
        title: "Swarnagiri Temple Visit",
        desc: "Proceed to the stunning golden-hued Swarnagiri Temple dedicated to Lord Venkateswara. Marvel at the intricate gopurams and serene hills."
      },
      {
        time: "03:30 PM",
        title: "Return Drive to Hyderabad",
        desc: "Relaxed return drive, dropping you safely back at your Hyderabad residence or hotel by late afternoon (~05:00 PM)."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹4,500",
        priceNote: "All tolls & parking included"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹4,500",
        priceNote: "All tolls & parking included",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹5,000",
        priceNote: "All tolls & parking included"
      }
    ],
    inclusions: [
      "Private AC car with driver for complete Yadadri tour",
      "National highway expressway tolls and parking fees included",
      "Driver bata and fuel included",
      "Doorstep pickup and drop in Hyderabad"
    ],
    exclusions: [
      "Special darshan / VIP line tickets",
      "Surendrapuri entrance tickets (if visiting)",
      "Meals and refreshments"
    ]
  },
  {
    id: "hourly-8-hrs",
    title: "8 Hours / 80 Kms Cab Package",
    slug: "8-hours-80-kms-cab-package",
    category: "hourly",
    categoryLabel: "Hourly Package",
    duration: "8 Hours / 80 Kms Limit",
    startingPrice: "₹2,400",
    startingPriceNum: 2400,
    badge: "Budget Friendly",
    distance: "80 km included (City limits)",
    shortDesc: "Standard local city package designed for flexible shopping, medical appointments, client meetings, or casual city errands.",
    coverImage: "/images/reference/hourly-cab-package.jpg",
    destinations: [
      "Flexible city travel across Hyderabad & Secunderabad",
      "Shopping circuits: Banjara Hills, Begum Bazaar, Gachibowli",
      "Corporate runs: HITEC City, Financial District, Madhapur",
      "Multiple stops as per customer requirement"
    ],
    itinerary: [
      {
        time: "Flexible Start",
        title: "Pickup at Your Preferred Time",
        desc: "Your chauffeur arrives at your doorstep at the chosen hour. The 8-hour clock begins upon pickup."
      },
      {
        time: "Midday",
        title: "Multiple Stops & Continuous Waiting",
        desc: "Visit multiple destinations, attend appointments, or complete shopping errands with zero parking stress."
      },
      {
        time: "Completion",
        title: "Drop at Destination",
        desc: "Chauffeur concludes the service at your drop point within the 80 km / 8 hr slab. Transparent extra rates apply beyond limits."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹2,400",
        extraCharges: "Extra hr: ₹150/hr | Extra km: ₹12/km",
        priceNote: "Base package (8 hrs / 80 km)"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹2,400",
        extraCharges: "Extra hr: ₹150/hr | Extra km: ₹12/km",
        priceNote: "Base package (8 hrs / 80 km)",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹3,200",
        extraCharges: "Extra hr: ₹200/hr | Extra km: ₹15/km",
        priceNote: "Base package (8 hrs / 80 km)"
      }
    ],
    inclusions: [
      "80 kilometres of local city driving included",
      "8 hours of dedicated chauffeur and AC car availability",
      "Doorstep pickup and drop within Hyderabad",
      "Fuel costs for the 80 km coverage"
    ],
    exclusions: [
      "Parking charges and expressway toll receipts (payable at actuals)",
      "Kilometres exceeding 80 km: ₹12/km (Baleno/Dzire), ₹15/km (Kia Carens)",
      "Hours exceeding 8 hrs: ₹150/hr (Baleno/Dzire), ₹200/hr (Kia Carens)"
    ]
  },
  {
    id: "hourly-12-hrs",
    title: "12 Hours / 120 Kms Cab Package",
    slug: "12-hours-120-kms-cab-package",
    category: "hourly",
    categoryLabel: "Hourly Package",
    duration: "12 Hours / 120 Kms Limit",
    startingPrice: "₹3,200",
    startingPriceNum: 3200,
    badge: "Full Day Value",
    distance: "120 km included (City & Suburbs)",
    shortDesc: "Extended city rental for comprehensive full-day itineraries, wedding attendance, extended business trips, or all-day family outings.",
    coverImage: "/images/destinations/hyderabad-highway.webp",
    destinations: [
      "Citywide and suburban coverage: Shamshabad, Secunderabad, Miyapur",
      "Executive business roadshows across multiple office parks",
      "Full-day wedding transport & guest transfers",
      "All-day leisure and shopping without rush"
    ],
    itinerary: [
      {
        time: "Flexible Morning",
        title: "Early Pickup Available",
        desc: "Chauffeur reports at your designated time. 120 km and 12 hours of uninterrupted city coverage begin."
      },
      {
        time: "All Day",
        title: "Effortless Multi-Destination Travel",
        desc: "Keep the vehicle stationed with you throughout long meetings or social gatherings. No surge pricing or driver cancellations."
      },
      {
        time: "Evening Wrap-up",
        title: "Safe Return Drop",
        desc: "Complete your day smoothly with a final drop-off at home or hotel."
      }
    ],
    vehiclePricing: [
      {
        vehicleId: "baleno",
        vehicleName: "Maruti Suzuki Baleno",
        seating: "4+1 Seater",
        price: "₹3,200",
        extraCharges: "Extra hr: ₹150/hr | Extra km: ₹12/km",
        priceNote: "Base package (12 hrs / 120 km)"
      },
      {
        vehicleId: "swift-dzire",
        vehicleName: "Maruti Suzuki Swift Dzire",
        seating: "4+1 Seater",
        price: "₹3,200",
        extraCharges: "Extra hr: ₹150/hr | Extra km: ₹12/km",
        priceNote: "Base package (12 hrs / 120 km)",
        isPopular: true
      },
      {
        vehicleId: "kia-carens",
        vehicleName: "Kia Carens SUV",
        seating: "6+1 Seater",
        price: "₹4,200",
        extraCharges: "Extra hr: ₹200/hr | Extra km: ₹15/km",
        priceNote: "Base package (12 hrs / 120 km)"
      }
    ],
    inclusions: [
      "120 kilometres of city usage included",
      "12 hours of dedicated chauffeur and AC car availability",
      "Fuel costs for the 120 km coverage",
      "Doorstep pickup and return drop"
    ],
    exclusions: [
      "Tolls and actual parking receipts incurred",
      "Kilometres exceeding 120 km: ₹12/km (Baleno/Dzire), ₹15/km (Kia Carens)",
      "Hours exceeding 12 hrs: ₹150/hr (Baleno/Dzire), ₹200/hr (Kia Carens)"
    ]
  }
];

/**
 * Rental Conditions & Terms (Strictly matching client specifications)
 */
export const RENTAL_CONDITIONS = [
  {
    id: "tolls-parking",
    title: "Tolls & parking extra",
    description: "Expressway toll charges, parking slips, and airport entry fees incurred are payable as per actual receipts (unless explicitly bundled in a package).",
    icon: "Receipt"
  },
  {
    id: "driver-bata",
    title: "Driver bata extra",
    description: "Daily driver food allowance (bata) applies for multi-day outstation trips and late-night assignments beyond standard duty hours.",
    icon: "UserCheck"
  },
  {
    id: "min-distance",
    title: "Minimum 300 km per day",
    description: "Custom non-package outstation travel requires a standard daily billing coverage of 300 km per calendar day.",
    icon: "Gauge"
  },
  {
    id: "with-driver",
    title: "With driver only",
    description: "All our vehicles are strictly provided with verified, experienced professional chauffeurs. We do not provide self-drive cars.",
    icon: "ShieldAlert"
  }
];

/**
 * About / Why Choose Us brand pillars
 */
export const ABOUT_PILLARS = [
  {
    id: "professionalism",
    title: "Professional Chauffeurs",
    description: "Our chauffeurs are courteous, disciplined, and well-versed with major national highways, pilgrimage routes, and city networks.",
    icon: "Award"
  },
  {
    id: "safety",
    title: "Safety & Sanitization",
    description: "Passenger safety is paramount. Every vehicle undergoes rigorous mechanical inspection and deep sanitization before every booking.",
    icon: "Shield"
  },
  {
    id: "comfort",
    title: "Premium Travel Comfort",
    description: "Enjoy clean interiors, high-efficiency air-conditioning, ample legroom, and generous boot space for complete travel relaxation.",
    icon: "Sparkles"
  },
  {
    id: "punctuality",
    title: "Guaranteed Punctuality",
    description: "We respect your time. Whether catching early-morning flights or reaching temple aarti on time, we ensure timely pickups.",
    icon: "Clock"
  }
];

/**
 * Customer Reviews & Testimonials Presentation (Google Review Inspired)
 * Genuine travel agency showcase with direct customer feedback channel
 */
export const CUSTOMER_FEEDBACK_DATA = {
  aggregateRating: "4.9",
  ratingCount: "500+",
  headline: "Trusted by Travelers Across South India",
  subheading: "Read genuine feedback on our punctuality, clean vehicles, and respectful chauffeurs.",
  reviews: [
    {
      id: "rev-1",
      author: "K. Ramesh Rao",
      location: "Hyderabad",
      tripType: "1 Day Srisailam Tour",
      rating: 5,
      date: "Recent Trip",
      comment: "Booked Swift Dzire for 1 Day Srisailam darshan with family. The driver arrived on time at 5 AM. Smooth driving in the ghats and very polite behavior. Highly recommend Shakti Travels!"
    },
    {
      id: "rev-2",
      author: "Dr. Sunitha Reddy",
      location: "Secunderabad",
      tripType: "Airport Transfer & Local",
      rating: 5,
      date: "Recent Trip",
      comment: "Very punctual and clean car. AC was working perfectly and the driver helped with heavy suitcases. Easy communication directly over WhatsApp."
    },
    {
      id: "rev-3",
      author: "Venkatesh Murthy",
      location: "Bengaluru (Traveler)",
      tripType: "Hyderabad City Sightseeing",
      rating: 5,
      date: "Recent Trip",
      comment: "Took the 8-hour city sightseeing package in Kia Carens for 6 family members. Ample legroom, great route guidance, and completely transparent pricing without hidden surprises."
    }
  ]
};

/**
 * Client Poster references for promotional display
 */
export const CLIENT_POSTERS = {
  mainPoster: {
    path: "/images/shakti-poster-main.png",
    alt: "Shakti Travels Official Service Poster",
    title: "Official Service Offerings & Packages"
  },
  ratesPoster: {
    path: "/images/shakti-rates.png",
    alt: "Shakti Travels Rate Card Poster",
    title: "Official Tariff Card Reference"
  }
};

/**
 * Helper to fetch a package by its slug or ID
 * Supports both canonical reference URL slugs and shorthand aliases
 */
export const getPackageBySlug = (slug) => {
  if (!slug) return null;
  const clean = slug.toLowerCase().trim();
  return TOUR_PACKAGES.find((pkg) => {
    if (pkg.slug.toLowerCase() === clean || pkg.id.toLowerCase() === clean) return true;
    if ((clean === "1-day-srisailam-tour-package" || clean === "1-day-srisailam-tour") && pkg.id === "srisailam-1-day") return true;
    if ((clean === "2-days-srisailam-tour-package" || clean === "2-days-srisailam-tour") && pkg.id === "srisailam-2-days") return true;
    if ((clean === "hyderabad-city-seeing-package-1" || clean === "hyderabad-city-sightseeing-package-1") && pkg.id === "hyderabad-city-1") return true;
    if ((clean === "hyderabad-city-seeing-package-2" || clean === "hyderabad-city-sightseeing-package-2") && pkg.id === "hyderabad-city-2") return true;
    if ((clean === "hyderabad-to-yadagirigutta-swarnagiri-tour" || clean === "yadagirigutta-swarnagiri-tour") && pkg.id === "yadagirigutta-swarnagiri") return true;
    if (clean === "8-hours-80-kms-cab-package" && pkg.id === "hourly-8-hrs") return true;
    if (clean === "12-hours-120-kms-cab-package" && pkg.id === "hourly-12-hrs") return true;
    return false;
  }) || null;
};
