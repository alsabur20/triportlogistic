import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Triport Logistics",
  description:
    "Learn more about Triport Logistics – a trusted name in global cargo services. Discover our mission, values, and commitment to reliable freight solutions.",
  keywords: [
    "About Triport Logistics",
    "logistics company history",
    "trusted freight provider",
    "cargo services overview",
    "our mission logistics",
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
