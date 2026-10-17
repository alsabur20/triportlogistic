import { PageHero } from "@/components/page-hero"
import { ServicesSection } from "@/components/services-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { company } from "@/lib/company"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Freight Services Dubai",
  description:
    "Comprehensive B2B freight forwarding services in Dubai, UAE. International ocean container shipping (FCL/LCL), air cargo, Mirsal II customs clearance, and 3PL warehousing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Ocean Freight, Air Cargo & Customs Clearance in Dubai UAE | Triport Logistics",
    description:
      "Enterprise logistics solutions connecting Dubai with over 150 international trade lanes. FCL/LCL sea shipping, air charters, and GCC cross-border road transport.",
    url: "https://www.triportlogistic.com/services",
    images: [
      {
        url: "/hero-ocean.jpg",
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Commercial Freight Services in Dubai UAE",
      },
    ],
  },
}

export default function Services() {
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
        name: "Services",
        item: "https://www.triportlogistic.com/services",
      },
    ],
  }

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Triport Logistics Commercial Freight & Supply Chain Services",
    description: "End-to-end commercial logistics services connecting Dubai and UAE with global trade routes.",
    itemListElement: company.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: company.name,
          url: company.url,
        },
        areaServed: ["United Arab Emirates", "Saudi Arabia", "Oman", "Worldwide"],
        url: `${company.url}/services/${service.slug}`,
      },
    })),
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <PageHero
        title="Commercial Logistics Services"
        backgroundImage="/hero-ocean.jpg"
      />
      <ServicesSection />
      <GetQuoteSection />
      <TestimonialsSection />
    </div>
  )
}
