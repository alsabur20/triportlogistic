import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { ServicesSection } from "@/components/services-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { TestimonialsSection } from "@/components/testimonials-section"

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
