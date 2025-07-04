import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  )
}
