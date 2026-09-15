"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const carouselItems = [
  {
    image: "/header.jpg",
    alt: "Air Cargo — Fast air freight from Dubai to Pakistan and worldwide",
    title: "AIR CARGO",
  },
  {
    image: "/header2.jpg",
    alt: "Sea Freight — Reliable ocean transport from UAE to Pakistan and international ports",
    title: "SEA FREIGHT",
  },
  {
    image: "/header3.jpg",
    alt: "Ground Transport — Efficient cross-border land delivery across UAE and Pakistan",
    title: "GROUND TRANSPORT",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="relative h-[95vh] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Next.js optimized image for LCP */}
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              {/* Only render h1 on the first slide — one h1 per page */}
              {index === 0 ? (
                <h1 className="text-3xl md:text-3xl font-bold mb-6 text-[#ff4800] speakable">
                  Freight Forwarding & Cargo Services in UAE and Pakistan
                </h1>
              ) : null}
              <div className="text-3xl md:text-5xl font-bold mb-6">Triport</div>
              <div className="text-3xl md:text-5xl font-bold mb-2">Logistics Services</div>
              <p className="text-lg md:text-xl text-gray-200 mt-4 speakable">
                Air Freight · Sea Freight · Ground Transport · Cargo Forwarding
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-[#ff4800]" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
