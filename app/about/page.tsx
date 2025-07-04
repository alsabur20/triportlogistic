import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        backgroundImage="/header.jpg?height=400&width=1200"
      />
      <AboutSection />
      <WhyChooseUs />
    </div>
  )
}
