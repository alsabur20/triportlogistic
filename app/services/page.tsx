import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ServicesSection } from "@/components/services-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Air Freight, Sea Freight & Ground Transport in UAE & Pakistan",
  description:
    "Triport Logistics offers air freight Dubai to Pakistan, sea freight, ground transport, and cargo forwarding services. Reliable international freight forwarding from UAE and Pakistan to worldwide destinations.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Air Freight, Sea Freight & Ground Transport | UAE & Pakistan | Triport Logistics",
    description:
      "Air cargo, ocean freight, and land transport services between UAE and Pakistan. Get a free freight quote from Triport Logistics.",
    url: "https://www.triportlogistic.com/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Air Freight, Sea Freight & Ground Transport Services",
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
    name: "Triport Logistics Freight & Cargo Services",
    description: "Comprehensive freight and logistics services between UAE, Pakistan and worldwide destinations.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Air Freight",
          description:
            "Fast, secure air freight solutions for high-value or time-sensitive cargo. We handle air cargo from Dubai to Pakistan, Lahore, Karachi, and international destinations.",
          provider: {
            "@type": "Organization",
            name: "Triport Logistics",
            url: "https://www.triportlogistic.com",
          },
          areaServed: ["United Arab Emirates", "Pakistan", "International"],
          url: "https://www.triportlogistic.com/services",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Sea Freight",
          description:
            "Cost-effective ocean freight services covering global shipping routes with FCL and LCL options. Ideal for bulk cargo between UAE and Pakistan.",
          provider: {
            "@type": "Organization",
            name: "Triport Logistics",
            url: "https://www.triportlogistic.com",
          },
          areaServed: ["United Arab Emirates", "Pakistan", "International"],
          url: "https://www.triportlogistic.com/services",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Ground Transport",
          description:
            "Reliable land transport including truckload and LTL shipping across regional and cross-border routes in UAE and Pakistan.",
          provider: {
            "@type": "Organization",
            name: "Triport Logistics",
            url: "https://www.triportlogistic.com",
          },
          areaServed: ["United Arab Emirates", "Pakistan"],
          url: "https://www.triportlogistic.com/services",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Cargo Forwarding",
          description:
            "End-to-end cargo forwarding and freight brokerage services. We handle all documentation, customs clearance, and last-mile delivery.",
          provider: {
            "@type": "Organization",
            name: "Triport Logistics",
            url: "https://www.triportlogistic.com",
          },
          areaServed: ["United Arab Emirates", "Pakistan", "International"],
          url: "https://www.triportlogistic.com/services",
        },
      },
    ],
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
        title="Our Services"
        backgroundImage="/header.jpg?height=400&width=1200"
      />
      <ServicesSection />
      <GetQuoteSection />
      <TestimonialsSection />
    </div>
  )
}
