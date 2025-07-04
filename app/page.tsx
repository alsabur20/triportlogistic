import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { GetQuoteSection } from "@/components/get-quote-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <GetQuoteSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  )
}
