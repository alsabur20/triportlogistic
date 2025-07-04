import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ServicesSection } from "@/components/services-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Triport Logistics",
  description:
    "Explore our air freight, sea freight, and ground transport services tailored to meet your logistics needs worldwide.",
  keywords: [
    "freight services", "air freight", "sea freight", "ground transport", "logistics solutions", "cargo delivery"
  ],
  openGraph: {
    images: [
      {
        url: "/og-image.jpg", // Recommended 1200x630 image
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Global Freight Solutions",
      },
    ],
  },
}


export default function Services() {
  return (
    <div>
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
