import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"
import { Metadata } from "next"
import { company } from "@/lib/company"

const { dubai, lahore } = company.offices

export const metadata: Metadata = {
  title: "Contact Us | Freight & Cargo Inquiries in UAE & Pakistan",
  description: `Contact ${company.name} for international freight inquiries. Call ${company.contact.phoneDisplay} or visit our offices in Dubai and Lahore. 24/7 support.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${company.name} | Freight Inquiries UAE & Pakistan`,
    description: `Reach ${company.name} for all cargo and freight forwarding inquiries. Offices in ${dubai.city} (${dubai.building}) and ${lahore.city} (${lahore.street}). Available 24/7.`,
    url: `${company.url}/contact`,
    images: [{ url: company.seo.ogImage, width: 1200, height: 630, alt: `Contact ${company.name} - Freight Forwarding in UAE and Pakistan` }],
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
    description: `${company.name} Dubai office — freight forwarding, air cargo, sea freight, and customs clearance services in the UAE.`,
    url: company.url,
    telephone: company.contact.phone,
    email: company.contact.email,
    image: company.ogImage,
    priceRange: "$$",
    currenciesAccepted: dubai.currencies,
    paymentAccepted: "Cash, Bank Transfer",
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
      addressCountry: dubai.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: dubai.geo.latitude,
      longitude: dubai.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: dubai.country },
      { "@type": "Country", name: lahore.country },
      { "@type": "Country", name: "International" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Freight & Logistics Services ${dubai.city}`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Air Freight ${dubai.city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Sea Freight ${dubai.country}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Cargo Forwarding ${dubai.city}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Customs Clearance ${dubai.country}` } },
      ],
    },
    sameAs: [company.social.whatsapp],
  }

  const lahoreOfficeJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${company.url}/#lahore-office`,
    name: lahore.name,
    description: `${company.name} Lahore office — freight forwarding, air cargo, sea freight, and ground transport services in Pakistan.`,
    url: company.url,
    telephone: company.contact.phone,
    email: company.contact.email,
    image: company.ogImage,
    priceRange: "$$",
    currenciesAccepted: lahore.currencies,
    paymentAccepted: "Cash, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: lahore.hours.weekdays.days,
        opens: lahore.hours.weekdays.opens,
        closes: lahore.hours.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: lahore.hours.saturday.opens,
        closes: lahore.hours.saturday.closes,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${lahore.building}, ${lahore.street}`,
      addressLocality: lahore.city,
      addressRegion: lahore.region,
      addressCountry: lahore.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: lahore.geo.latitude,
      longitude: lahore.geo.longitude,
    },
    areaServed: [
      { "@type": "Country", name: lahore.country },
      { "@type": "Country", name: dubai.country },
      { "@type": "Country", name: "International" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Freight & Logistics Services ${lahore.city}`,
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Air Freight ${lahore.country}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Sea Freight ${lahore.country}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Ground Transport ${lahore.country}` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: `Cargo Forwarding ${lahore.city}` } },
      ],
    },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dubaiOfficeJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lahoreOfficeJsonLd) }} />
      <PageHero title="Contact Us" backgroundImage="/header.jpg?height=400&width=1200" />
      <ContactForm />
      <GoogleMap />
    </div>
  )
}
