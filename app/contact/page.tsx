import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Freight & Cargo Inquiries in UAE & Pakistan",
  description:
    "Contact Triport Logistics for air freight, sea freight, ground transport, and cargo forwarding inquiries. Offices in Dubai, UAE (+971 56 656 9927) and Lahore, Pakistan. Get a free freight quote.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Triport Logistics | Freight Inquiries UAE & Pakistan",
    description:
      "Reach Triport Logistics for all cargo and freight forwarding inquiries. Offices in Dubai (Al Nahda) and Lahore (Engineers Town). Available 24/7.",
    url: "https://www.triportlogistic.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Triport Logistics - Freight Forwarding in UAE and Pakistan",
      },
    ],
  },
}


export default function Contact() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.triportlogistic.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.triportlogistic.com/contact",
      },
    ],
  }

  const dubaiOfficeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.triportlogistic.com/#dubai-office",
    name: "Triport Logistics Dubai",
    description:
      "Triport Logistics Dubai office — freight forwarding, air cargo, sea freight, and customs clearance services in the UAE.",
    url: "https://www.triportlogistic.com",
    telephone: "+971566569927",
    email: "info@triportlogistic.com",
    image: "https://www.triportlogistic.com/og-image.jpg",
    priceRange: "$$",
    currenciesAccepted: "AED, USD",
    paymentAccepted: "Cash, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ACICO Business Park",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.25785",
      longitude: "55.33351",
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "International" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freight & Logistics Services Dubai",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Freight Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sea Freight UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cargo Forwarding Dubai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customs Clearance UAE" } },
      ],
    },
    sameAs: ["https://wa.me/971566569927"],
  }

  const lahoreOfficeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.triportlogistic.com/#lahore-office",
    name: "Triport Logistics Lahore",
    description:
      "Triport Logistics Lahore office — freight forwarding, air cargo, sea freight, and ground transport services in Pakistan.",
    url: "https://www.triportlogistic.com",
    telephone: "+971566569927",
    email: "info@triportlogistic.com",
    image: "https://www.triportlogistic.com/og-image.jpg",
    priceRange: "$$",
    currenciesAccepted: "PKR, USD",
    paymentAccepted: "Cash, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "107 C1, Engineers Town",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "International" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freight & Logistics Services Lahore",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Air Freight Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sea Freight Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ground Transport Pakistan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cargo Forwarding Lahore" } },
      ],
    },
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiOfficeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lahoreOfficeJsonLd) }}
      />
      <PageHero
        title="Contact Us"
        backgroundImage="/header.jpg?height=400&width=1200"
      />
      <ContactForm />
      <GoogleMap />
    </div>
  )
}
