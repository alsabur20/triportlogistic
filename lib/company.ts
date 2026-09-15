/**
 * Company-wide data — single source of truth.
 * Update here and all pages/components reflect the change automatically.
 */

export const company = {
  name: "Triport Logistics",
  legalName: "Triport Logistics",
  foundingDate: "1999",
  tagline: "Your trusted partner for freight forwarding, air cargo, sea freight, and ground transport in UAE and Pakistan.",
  description:
    "Triport Logistics provides air freight, sea freight, ground transport, cargo forwarding, warehousing, and customs clearance services between UAE and Pakistan with 25+ years of industry experience.",
  url: "https://www.triportlogistic.com",
  logo: "https://www.triportlogistic.com/logo.png",
  ogImage: "https://www.triportlogistic.com/og-image.jpg",
  favicon: "/favicon.png",

  contact: {
    phone: "+971566569927",
    phoneDisplay: "+971 56 656 9927",
    email: "info@triportlogistic.com",
    whatsapp: "https://wa.me/971566569927",
    whatsappNumber: "971566569927",
  },

  offices: {
    dubai: {
      label: "Dubai, UAE",
      name: "Triport Logistics Dubai",
      building: "ACICO Business Park",
      city: "Dubai",
      region: "Dubai",
      country: "United Arab Emirates",
      countryCode: "AE",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.37840355731!2d55.333512274944376!3d25.25785312924202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce09d55d4ab%3A0x9ab0b76200a25702!2sACICO%20Business%20Park!5e0!3m2!1sen!2s!4v1789500471843!5m2!1sen!2s",
      geo: { latitude: "25.25785", longitude: "55.33351" },
      currencies: "AED, USD",
      hours: {
        weekdays: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
        saturday: { opens: "09:00", closes: "14:00" },
      },
    },
    lahore: {
      label: "Lahore, Pakistan",
      name: "Triport Logistics Lahore",
      building: "Plot 107, Block C1",
      street: "Engineers Town",
      city: "Lahore",
      region: "Punjab",
      country: "Pakistan",
      countryCode: "PK",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217557.73160720873!2d73.91335642812498!3d31.56973512831082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900c017c6122b%3A0x3d66708a4493c828!2sPlot%20107%2C%20Block%20C1%20Block%20C%201%20Engineers%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1789500521171!5m2!1sen!2s",
      geo: { latitude: "31.56973", longitude: "73.91336" },
      currencies: "PKR, USD",
      hours: {
        weekdays: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
        saturday: { opens: "09:00", closes: "14:00" },
      },
    },
  },

  services: [
    {
      name: "Air Freight",
      slug: "air-freight",
      description:
        "Fast, secure air freight solutions for high-value or time-sensitive cargo. We handle air cargo from Dubai to Pakistan, Lahore, Karachi, and international destinations.",
    },
    {
      name: "Sea Freight",
      slug: "sea-freight",
      description:
        "Cost-effective ocean freight services covering global shipping routes with FCL and LCL options. Ideal for bulk cargo between UAE and Pakistan.",
    },
    {
      name: "Ground Transport",
      slug: "ground-transport",
      description:
        "Reliable land transport including truckload and LTL shipping across regional and cross-border routes in UAE and Pakistan.",
    },
    {
      name: "Cargo Forwarding",
      slug: "cargo-forwarding",
      description:
        "End-to-end cargo forwarding and freight brokerage services. We handle all documentation, customs clearance, and last-mile delivery.",
    },
  ],

  social: {
    whatsapp: "https://wa.me/971566569927",
    // Add more when accounts are created:
    // facebook: "https://facebook.com/triportlogistics",
    // linkedin: "https://linkedin.com/company/triportlogistics",
    // instagram: "https://instagram.com/triportlogistics",
  },

  seo: {
    defaultTitle: "Triport Logistics | Freight Forwarding & Cargo Services in UAE & Pakistan",
    titleTemplate: "%s | Triport Logistics",
    defaultDescription:
      "Global freight forwarding, air cargo, sea freight, and ground logistics by Triport Logistics. Trusted shipping solutions with offices in Dubai and Lahore.",
    ogImage: "/og-image.jpg",
    geo: {
      region: "AE-DU, PK-PB",
      placename: "Dubai, UAE; Lahore, Pakistan",
      position: "25.25785;55.33351",
      icbm: "25.25785, 55.33351",
    },
  },
} as const
