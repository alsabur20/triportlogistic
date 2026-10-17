import { PageHero } from "@/components/page-hero"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { company } from "@/lib/company"
import { Metadata } from "next"
import Image from "next/image"
import { ShieldCheck, Anchor, Plane, Building2, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Freight Forwarding Dubai",
  description:
    "Learn about Triport Logistics — Dubai's trusted B2B freight forwarder with 25+ years experience managing ocean, air, and customs brokerage across 150+ ports.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Triport Logistics | 25+ Years Freight Forwarding Leadership in Dubai UAE",
    description:
      "Operating from Dubai (ACICO Business Park & JAFZA Port Hub), Triport Logistics manages end-to-end commercial freight, customs clearance, and GCC overland transport.",
    url: "https://www.triportlogistic.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Triport Logistics Dubai UAE",
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
    name: "Triport Logistics LLC",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "86",
      bestRating: "5",
      worstRating: "1",
    },
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
        title="About Triport Logistics"
        backgroundImage="/hero-ocean.jpg"
      />

      <AboutSection />

      {/* Corporate Capabilities Overview */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#ff4800] uppercase font-bold text-xs tracking-wider">
              Strategic Port Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
              Powering International Trade from the Heart of Dubai
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              With dedicated operational teams at Jebel Ali Port, Dubai International Airport Cargo Village, and JAFZA, we provide commercial clients with unprecedented agility and visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 border border-gray-200">
              <Anchor className="w-10 h-10 text-[#ff4800] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jebel Ali Port Terminal (DP World)</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Direct container drayage, port gate pass facilitation, CFS deconsolidation, and priority berth loading for full container and breakbulk cargo.
              </p>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200">
              <Plane className="w-10 h-10 text-[#ff4800] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">DXB &amp; DWC Air Cargo Gateways</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                24/7 airport tarmac handling, cold-chain pharmaceutical storage, and express customs release for high-value time-critical commercial air freight.
              </p>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200">
              <Building2 className="w-10 h-10 text-[#ff4800] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dubai Free Zones Integration</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Deep compliance expertise across JAFZA, DAFZA, and Dubai South Free Zones, managing duty exemption transfers and re-export documentation without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  )
}
