"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, Anchor, Plane, Warehouse, CheckCircle } from "lucide-react"
import { company } from "@/lib/company"

const carouselItems = [
  {
    image: "/hero-ocean.jpg",
    alt: "Jebel Ali Port Dubai ocean container ship freight forwarding operations by Triport Logistics",
    badge: "Ocean Freight Hub · Jebel Ali Port (DP World)",
    title: "Global Ocean Freight Forwarding (FCL & LCL)",
    description:
      "Direct weekly container sailings connecting Jebel Ali with major industrial ports across China, Europe, USA, and Southeast Asia. Competitive carrier contracts and space protection.",
    cta: "Request Ocean Rate",
    serviceSlug: "ocean-freight",
    icon: Anchor,
  },
  {
    image: "/hero-air.jpg",
    alt: "Dubai International Airport DXB air cargo freighter operations by Triport Logistics",
    badge: "Scheduled Air Cargo · DXB & DWC Hubs",
    title: "International Air Freight & Full Charters",
    description:
      "Time-critical commercial air cargo and full aircraft chartering connecting Dubai with over 150 international airports. Direct allocations via Emirates SkyCargo, Qatar Cargo, and global airlines.",
    cta: "Request Air Cargo Rate",
    serviceSlug: "air-freight",
    icon: Plane,
  },
  {
    image: "/hero-warehouse.jpg",
    alt: "Automated 3PL logistics warehouse and distribution center in Dubai South JAFZA",
    badge: "Dubai Customs Mirsal II & 3PL Logistics",
    title: "UAE Customs Brokerage & 3PL Warehousing",
    description:
      "Fast-track Dubai Customs clearance within 4 to 12 hours under Mirsal II. Climate-controlled bonded warehousing, container cross-docking, and GCC cross-border road transport.",
    cta: "Explore 3PL Services",
    serviceSlug: "customs-clearance",
    icon: Warehouse,
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      {/* Hero Slides */}
      <div className="relative h-[88vh] min-h-[620px] max-h-[850px] overflow-hidden bg-gray-950">
        {carouselItems.map((item, index) => {
          const IconComponent = item.icon
          const isActive = index === currentSlide

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Optimized Next.js background image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                priority={index === 0}
                className="object-cover object-center transform scale-105 transition-transform duration-10000"
                sizes="100vw"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/70 to-gray-950/40" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ff4800]/90 text-white text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-sm shadow-md">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </div>

                    {/* Single H1 on Slide 0, H2 on subsequent slides for SEO */}
                    {index === 0 ? (
                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4 speakable">
                        Global Freight Forwarding &amp; Logistics Hub in Dubai, UAE
                      </h1>
                    ) : (
                      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
                        {item.title}
                      </h2>
                    )}

                    <p className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl speakable">
                      {item.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <a
                        href="#quote-section"
                        className="inline-flex items-center justify-center gap-2 bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold px-8 py-4 transition-all duration-200 text-sm sm:text-base shadow-lg shadow-[#ff4800]/30 hover:scale-[1.02]"
                      >
                        <span>Request B2B Freight Quote</span>
                        <ArrowRight className="w-5 h-5" />
                      </a>

                      <a
                        href={company.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold px-7 py-4 transition-all duration-200 text-sm sm:text-base hover:scale-[1.02]"
                      >
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                        <span>WhatsApp Rate Desk</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-3">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Switch to slide ${index + 1}`}
              className={`h-2.5 transition-all duration-300 ${
                index === currentSlide ? "w-10 bg-[#ff4800]" : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust & Performance Metrics Bar */}
      <div className="bg-gray-900 border-t border-gray-800 text-white relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-gray-800">
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ff4800]">150+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Global Trade Lanes</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ff4800]">Jebel Ali &amp; DXB</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Direct Terminal Operations</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ff4800]">4-12 Hours</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Mirsal II Customs Clearance</div>
            </div>
            <div className="px-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ff4800]">25+ Years</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">UAE Supply Chain Leadership</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
