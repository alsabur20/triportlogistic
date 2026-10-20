import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FaqSection } from "@/components/faq-section"
import { company } from "@/lib/company"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Freight Forwarding & Cargo Logistics in Dubai UAE",
  description:
    "Premier B2B freight forwarding and supply chain solutions in Dubai, UAE. Ocean container shipping (FCL/LCL), air cargo, customs clearance, and warehousing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Global Freight Forwarding & Cargo Logistics in Dubai UAE | Triport Logistics",
    description:
      "Direct carrier contracts, space protection, and rapid customs clearance through Jebel Ali Port & DXB Airport. Connecting the UAE with over 150 international trade lanes.",
    url: "https://www.triportlogistic.com/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Global Freight Forwarding Hub in Dubai UAE",
      },
    ],
  },
}

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.triportlogistic.com/#webpage",
  url: "https://www.triportlogistic.com",
  name: "Global Freight Forwarding & Cargo Logistics in Dubai UAE | Triport Logistics",
  description:
    "Triport Logistics is a premier B2B freight forwarding and supply chain solutions provider in Dubai, UAE. International ocean freight, air cargo, UAE customs clearance, and 3PL warehousing.",
  isPartOf: {
    "@id": "https://www.triportlogistic.com/#website",
  },
  about: {
    "@id": "https://www.triportlogistic.com/#organization",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable"],
  },
}

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <GetQuoteSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </div>
  )
}
