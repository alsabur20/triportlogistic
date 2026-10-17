"use client"

import { useEffect, useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Head of Global Logistics",
    company: "EuroTech Industrial Components (Frankfurt, Germany)",
    content:
      "Triport Logistics handles our weekly container consolidations from Hamburg to Jebel Ali Port with remarkable consistency. Their Dubai Customs team clears our industrial consignments under Mirsal II in record time, eliminating any port demurrage risk.",
    rating: 5,
  },
  {
    name: "Chen Wei",
    role: "VP of Supply Chain",
    company: "Apex Precision Manufacturing (Shenzhen, China)",
    content:
      "Shipping high-volume machinery and electronic components from Ningbo and Shenzhen to the Middle East requires absolute space guarantees. Triport's ocean contracts and seamless onward bonded trucking into Saudi Arabia have given our distribution network an immense competitive edge.",
    rating: 5,
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Procurement & Logistics Director",
    company: "Gulf Infrastructure & Energy Solutions (Riyadh, KSA)",
    content:
      "Triport Logistics manages our critical project cargo and bonded overland transit from Dubai South directly to our construction sites in Riyadh. Their GPS monitoring, Bayan border customs coordination, and fleet professionalism are exemplary.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Director of International Trade",
    company: "Horizon Commodities DMCC (Dubai, UAE)",
    content:
      "As a Dubai trading enterprise shipping between Europe, China, and Africa, having a freight partner with genuine multi-modal air-sea capabilities is essential. The Triport team is proactive, transparent, and always provides spot rate accuracy.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const item = testimonials[currentIndex]

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ff4800] uppercase font-extrabold text-xs sm:text-sm tracking-wider">
            Verified Commercial Track Record
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
            Trusted by Global Enterprise Shippers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            See how international manufacturers, commodity traders, and EPC contractors rely on Triport Logistics for end-to-end supply chain execution.
          </p>
        </div>

        <div className="relative bg-gray-50 border border-gray-200 max-w-4xl mx-auto p-8 sm:p-12 shadow-sm">
          <Quote className="w-12 h-12 text-[#ff4800]/20 absolute top-6 right-6" />

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-6 text-amber-500">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-gray-800 text-lg sm:text-xl font-normal italic leading-relaxed mb-8">
            &ldquo;{item.content}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900">{item.name}</h4>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{item.role}</p>
              <div className="flex items-center gap-1.5 text-xs text-[#ff4800] font-semibold mt-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{item.company}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-gray-300 bg-white hover:bg-[#ff4800] hover:text-white hover:border-[#ff4800] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-gray-300 bg-white hover:bg-[#ff4800] hover:text-white hover:border-[#ff4800] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#ff4800]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
