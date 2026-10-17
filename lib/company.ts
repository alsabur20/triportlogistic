/**
 * Company-wide data — single source of truth for Triport Logistics.
 * High-value B2B Freight Forwarding & Global Logistics Provider based in Dubai, UAE.
 */

export const company = {
  name: "Triport Logistics",
  legalName: "Triport Logistics LLC",
  foundingDate: "1999",
  tagline: "Global Freight Forwarding, Ocean & Air Cargo, UAE Customs Brokerage & 3PL Solutions",
  description:
    "Triport Logistics is a premier B2B freight forwarding and supply chain solutions provider headquartered in Dubai, UAE. We specialize in international ocean container shipping (FCL/LCL), scheduled air freight consolidation, UAE customs clearance (Mirsal II / JAFZA / DAFZA), bonded warehousing, and cross-border GCC road transport connecting the UAE with over 150 global trade corridors.",
  url: "https://www.triportlogistic.com",
  logo: "https://www.triportlogistic.com/logo.png",
  ogImage: "https://www.triportlogistic.com/og-image.jpg",
  favicon: "/favicon.png",

  contact: {
    phone: "+971566569927",
    phoneDisplay: "+971 56 656 9927",
    email: "info@triportlogistic.com",
    salesEmail: "quotes@triportlogistic.com",
    whatsapp: "https://wa.me/971566569927",
    whatsappNumber: "971566569927",
  },

  offices: {
    dubai: {
      label: "Dubai Global HQ, UAE",
      name: "Triport Logistics Global Headquarters",
      building: "ACICO Business Park, Port Saeed",
      city: "Dubai",
      region: "Dubai",
      country: "United Arab Emirates",
      countryCode: "AE",
      postalCode: "125212",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.37840355731!2d55.333512274944376!3d25.25785312924202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce09d55d4ab%3A0x9ab0b76200a25702!2sACICO%20Business%20Park!5e0!3m2!1sen!2s!4v1789500471843!5m2!1sen!2s",
      geo: { latitude: "25.25785", longitude: "55.33351" },
      currencies: "AED, USD, EUR",
      hours: {
        weekdays: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:30" },
        saturday: { opens: "09:00", closes: "14:00" },
      },
    },
    jebelAliHub: {
      label: "Jebel Ali Port Operations (DP World)",
      name: "Triport JAFZA Logistics Hub",
      building: "Jebel Ali Free Zone (JAFZA South)",
      city: "Dubai",
      region: "Dubai",
      country: "United Arab Emirates",
      countryCode: "AE",
      postalCode: "17000",
      geo: { latitude: "24.9857", longitude: "55.0273" },
      currencies: "AED, USD",
    },
  },

  services: [
    {
      name: "Ocean Freight (FCL & LCL)",
      slug: "ocean-freight",
      shortDesc: "Full Container Load (FCL) & LCL consolidation through Jebel Ali Port with premier global carriers.",
      description:
        "Global ocean freight services engineered for commercial importers and exporters. We provide direct weekly sailings, FCL (20ft, 40ft, 40ft HC, Reefer, Open Top) and cost-efficient LCL cargo consolidation connecting Jebel Ali with major ports in China, Europe, USA, and Southeast Asia.",
      icon: "Ship",
      image: "/hero-ocean.jpg",
      features: [
        "Direct Carrier Contracts with Maersk, MSC, CMA CGM, Hapag-Lloyd, COSCO",
        "Weekly FCL & LCL consolidations to and from Jebel Ali Port",
        "Special equipment: High Cube, Flat Rack, Open Top & Reefer containers",
        "Comprehensive marine cargo insurance & port-to-door tracking",
      ],
    },
    {
      name: "Air Freight Consolidation & Charters",
      slug: "air-freight",
      shortDesc: "Priority commercial air cargo, airport-to-airport, and full freighter charters via DXB & DWC.",
      description:
        "High-priority air cargo solutions operating through Dubai International (DXB) and Al Maktoum International (DWC). From urgent commercial parts and pharmaceuticals to dedicated full aircraft charters, we ensure rapid customs transit and worldwide flight connections.",
      icon: "Plane",
      image: "/hero-air.jpg",
      features: [
        "IATA accredited scheduled air cargo consolidations",
        "Direct connections via Emirates SkyCargo, Qatar Airways Cargo, Saudia Cargo, Lufthansa Cargo",
        "Temperature-controlled pharma & perishable cold-chain logistics",
        "AOG, critical industrial machinery, and time-critical project cargo",
      ],
    },
    {
      name: "UAE Customs Clearance & Brokerage",
      slug: "customs-clearance",
      shortDesc: "Fast-track import/export declarations, Mirsal II clearance, and Free Zone compliance.",
      description:
        "Licensed customs clearance specialists handling Dubai Customs, Mirsal II declarations, JAFZA/DAFZA Freezone customs bills, duty exemptions, and SASO/Saber compliance for cross-border trade. Rapid clearance within 4-12 hours of arrival.",
      icon: "FileCheck",
      image: "/service-customs.jpg",
      features: [
        "Automated Mirsal II & Dubai Trade customs processing",
        "Free Zone import, export, and transfer declarations (JAFZA, DAFZA, KIZAD)",
        "Tariff classification, HS code verification & duty exemption management",
        "Inspection coordination with Dubai Municipality, MOIAT, and Port Health",
      ],
    },
    {
      name: "3PL Warehousing & Distribution",
      slug: "warehousing-3pl",
      shortDesc: "State-of-the-art bonded storage, inventory management, and regional distribution.",
      description:
        "Modern climate-controlled and ambient warehousing strategically positioned in Dubai South and JAFZA. Advanced WMS integration, palletized storage, pick-and-pack fulfillment, and container cross-docking for high-volume enterprise brands.",
      icon: "Warehouse",
      image: "/hero-warehouse.jpg",
      features: [
        "Bonded and non-bonded warehouse storage facilities",
        "Real-time cloud WMS inventory tracking and batch management",
        "Container de-stuffing, cross-docking, palletizing, and shrink-wrapping",
        "Value-added services: kitting, re-labeling, barcode scanning, and order fulfillment",
      ],
    },
    {
      name: "GCC Cross-Border Land Freight",
      slug: "land-freight",
      shortDesc: "Bonded overland trucking connecting the UAE to Saudi Arabia, Oman, Qatar, Kuwait & Bahrain.",
      description:
        "Full Truckload (FTL) and Less than Truckload (LTL) bonded road transport traversing the entire GCC trade corridor. Operating GPS-tracked modern fleets, dry box trailers, refrigerated reefers, and low-bed heavy haulers.",
      icon: "Truck",
      image: "/service-land.jpg",
      features: [
        "Daily scheduled departures from UAE to Saudi Arabia (Riyadh, Jeddah, Dammam)",
        "Direct cross-border service to Oman, Qatar, Bahrain, and Kuwait",
        "Bayan customs documentation and border clearance assistance (Al Batha, Hatta)",
        "GPS satellite real-time temperature and vehicle fleet tracking",
      ],
    },
    {
      name: "Project Cargo & Heavy Lift",
      slug: "project-cargo",
      shortDesc: "Specialized engineering logistics for oil & gas, construction, and out-of-gauge industrial equipment.",
      description:
        "Comprehensive turnkey logistics for oversized, heavy-lift, and breakbulk shipments. Our project logistics team executes detailed route surveys, crane rigging, barge charters, and police escort coordination across the Middle East.",
      icon: "Boxes",
      image: "/feature.jpg",
      features: [
        "Breakbulk, Ro-Ro, and heavy lift vessel chartering",
        "Route feasibility surveys, bridge loading calculations, and permit approvals",
        "Turnkey logistics for energy, infrastructure, construction, and EPC projects",
        "On-site technical superintendents overseeing port loading and discharge",
      ],
    },
  ],

  tradeCorridors: [
    { origin: "China (Shanghai, Ningbo, Shenzhen)", destination: "Dubai (Jebel Ali / DXB)", mode: "Ocean & Air", time: "14-18 Days (Sea) / 2-3 Days (Air)" },
    { origin: "Europe (Germany, Italy, Netherlands)", destination: "Dubai (Jebel Ali / DXB)", mode: "Ocean & Air", time: "18-24 Days (Sea) / 1-2 Days (Air)" },
    { origin: "United States (Houston, NY, LA)", destination: "Dubai (UAE Hub)", mode: "Ocean & Air", time: "25-32 Days (Sea) / 2-4 Days (Air)" },
    { origin: "India (Nhava Sheva, Mundra)", destination: "Dubai (Jebel Ali)", mode: "Ocean & Air", time: "3-5 Days (Sea) / 24 Hours (Air)" },
    { origin: "Dubai, UAE", destination: "Saudi Arabia (Riyadh / Jeddah / Dammam)", mode: "Bonded Road Freight", time: "2-4 Days (Overland)" },
    { origin: "Dubai, UAE", destination: "Oman (Muscat / Sohar)", mode: "Express Land Freight", time: "24-48 Hours (Overland)" },
    { origin: "Dubai, UAE", destination: "Africa (Kenya, Egypt, South Africa)", mode: "Air & Ocean Cargo", time: "7-14 Days (Sea) / 1-3 Days (Air)" },
  ],

  certifications: [
    "IATA Cargo Agent Network",
    "FIATA International Federation of Freight Forwarders",
    "Dubai Trade / Dubai Customs Certified Broker",
    "NAFL (National Association of Freight & Logistics UAE)",
    "ISO 9001:2015 Quality Management Certified",
  ],

  social: {
    whatsapp: "https://wa.me/971566569927?text=Hello%20Triport%20Logistics%20Team%2C%20I%20would%20like%20to%20request%20a%20commercial%20freight%20quote.",
    linkedin: "https://www.linkedin.com/company/triportlogistics",
    email: "mailto:info@triportlogistic.com",
  },

  seo: {
    defaultTitle: "Triport Logistics | Global Freight Forwarding, Air Cargo & Ocean Shipping in Dubai UAE",
    titleTemplate: "%s | Triport Logistics UAE",
    defaultDescription:
      "Premier B2B freight forwarding and supply chain solutions in Dubai, UAE. International ocean freight (FCL/LCL), air cargo, UAE customs clearance (Mirsal II), 3PL warehousing, and GCC cross-border road transport.",
    ogImage: "/og-image.jpg",
    geo: {
      region: "AE-DU",
      placename: "Dubai, United Arab Emirates",
      position: "25.25785;55.33351",
      icbm: "25.25785, 55.33351",
    },
  },
} as const
