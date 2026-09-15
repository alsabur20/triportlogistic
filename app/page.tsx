import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { FaqSection } from "@/components/faq-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Freight Forwarding & Cargo Services in Dubai & Pakistan",
  description:
    "Triport Logistics offers air freight, sea freight, ground transport, and cargo forwarding between Dubai, UAE and Pakistan. Get a free quote today. Offices in Dubai (Al Nahda) and Lahore (Engineers Town).",
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "https://www.triportlogistic.com",
      "en-PK": "https://www.triportlogistic.com",
      "x-default": "https://www.triportlogistic.com",
    },
  },
  openGraph: {
    title: "Freight Forwarding & Cargo Services in Dubai & Pakistan | Triport Logistics",
    description:
      "Air freight, sea freight & ground transport between UAE and Pakistan. 25+ years trusted logistics. Offices in Dubai & Lahore.",
    url: "https://www.triportlogistic.com/",
  },
}

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.triportlogistic.com/#webpage",
  url: "https://www.triportlogistic.com",
  name: "Freight Forwarding & Cargo Services in Dubai & Pakistan | Triport Logistics",
  description:
    "Triport Logistics provides air freight, sea freight, ground transport, and cargo forwarding services between UAE and Pakistan.",
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
      <GetQuoteSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
    </div>
  )
}
