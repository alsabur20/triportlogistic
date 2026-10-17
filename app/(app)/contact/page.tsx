import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"
import { Metadata } from "next"
import { company } from "@/lib/company"

const { dubai, jebelAliHub } = company.offices

export const metadata: Metadata = {
  title: "Contact & Freight Rate Desk Dubai",
  description: `Contact ${company.name} for international freight inquiries, ocean container rates, air cargo, and UAE customs clearance. Call ${company.contact.phoneDisplay} or visit our Dubai offices.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${company.name} | Commercial Freight Desk Dubai UAE`,
    description: `Connect with ${company.name} for global ocean, air, and overland shipping inquiries. Offices in Dubai (${dubai.building}) and JAFZA Port Hub. Available 24/7.`,
    url: `${company.url}/contact`,
    images: [{ url: company.seo.ogImage, width: 1200, height: 630, alt: `Contact ${company.name} - Freight Forwarding in Dubai UAE` }],
  },
}

export default function Contact() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${company.url}/contact` },
    ],
  }

  const dubaiOfficeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.url}/#dubai-office`,
    name: dubai.name,
    description: `${company.name} Dubai Global HQ — freight forwarding, ocean container shipping, air cargo, and customs clearance services in the UAE.`,
    url: company.url,
    telephone: company.contact.phone,
    email: company.contact.email,
    image: company.ogImage,
    priceRange: "$$",
    currenciesAccepted: dubai.currencies,
    paymentAccepted: "Cash, Bank Transfer, Letter of Credit (LC)",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dubai.hours.weekdays.days,
        opens: dubai.hours.weekdays.opens,
        closes: dubai.hours.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: dubai.hours.saturday.opens,
        closes: dubai.hours.saturday.closes,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: dubai.building,
      addressLocality: dubai.city,
      addressRegion: dubai.region,
      postalCode: dubai.postalCode,
      addressCountry: dubai.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: dubai.geo.latitude,
      longitude: dubai.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "Worldwide" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Commercial Freight & Logistics Services Dubai`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ocean Freight (FCL/LCL)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International Air Freight" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dubai Customs Clearance (Mirsal II)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "3PL Warehousing & Distribution" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GCC Cross-Border Road Trucking" } },
      ],
    },
    sameAs: [company.social.whatsapp, company.social.linkedin],
  }

  const jebelAliOfficeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.url}/#jebel-ali-hub`,
    name: jebelAliHub.name,
    description: `${company.name} JAFZA operations hub — port container drayage, container cross-docking, and DP World terminal operations in Jebel Ali, Dubai.`,
    url: company.url,
    telephone: company.contact.phone,
    email: company.contact.email,
    image: company.ogImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: jebelAliHub.building,
      addressLocality: jebelAliHub.city,
      addressRegion: jebelAliHub.region,
      postalCode: jebelAliHub.postalCode,
      addressCountry: jebelAliHub.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: jebelAliHub.geo.latitude,
      longitude: jebelAliHub.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Worldwide" },
    ],
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiOfficeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jebelAliOfficeJsonLd) }} />
      <PageHero title="Contact Our Dubai Freight Desk" backgroundImage="/hero-air.jpg" />
      <ContactForm />
      <GoogleMap />
    </div>
  )
}
