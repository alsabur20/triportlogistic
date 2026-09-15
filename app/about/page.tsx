import { PageHero } from "@/components/page-hero"
import { PageNavigation } from "@/components/page-navigation"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | 25+ Years Freight Forwarding in UAE & Pakistan",
  description:
    "Triport Logistics is a trusted freight forwarding and cargo company with 25+ years of experience, serving businesses in the UAE, Pakistan, and international markets. Offices in Dubai and Lahore.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Triport Logistics | 25+ Years Freight Forwarding in UAE & Pakistan",
    description:
      "Learn about Triport Logistics — a trusted freight and cargo company with offices in Dubai (Al Nahda) and Lahore (Engineers Town) serving UAE, Pakistan, and international markets for 25+ years.",
    url: "https://www.triportlogistic.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Trusted Freight Forwarding Company in UAE and Pakistan",
      },
    ],
  },
}

export default function About() {
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
        name: "About Us",
        item: "https://www.triportlogistic.com/about",
      },
    ],
  }

  const aggregateRatingJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.triportlogistic.com/#organization",
    name: "Triport Logistics",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah Malik" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Triport Logistic has been a game changer for our operations. Their team is professional, responsive, and consistently delivers on time.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed Raza" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Their logistics solutions have helped me scale my delivery network without any hassle. Highly reliable and easy to work with.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Emily Zhang" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Excellent service from start to finish. Their attention to detail and customer support really sets them apart from the rest.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "John Patel" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "We've partnered with Triport Logistic for over a year now, and they've never failed to impress. Fast, safe, and efficient.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />
      <PageHero
        title="About Us"
        backgroundImage="/header.jpg?height=400&width=1200"
      />
      <AboutSection />
      <WhyChooseUs />
    </div>
  )
}
