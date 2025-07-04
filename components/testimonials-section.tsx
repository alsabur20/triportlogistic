"use client"

import { useEffect, useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Malik",
    role: "Supply Chain Manager",
    image: "/testimonial-1.jpg",
    content:
      "Triport Logistic has been a game changer for our operations. Their team is professional, responsive, and consistently delivers on time.",
  },
  {
    name: "Ahmed Raza",
    role: "E-commerce Business Owner",
    image: "/testimonial-2.jpg",
    content:
      "Their logistics solutions have helped me scale my delivery network without any hassle. Highly reliable and easy to work with.",
  },
  {
    name: "Emily Zhang",
    role: "Import/Export Consultant",
    image: "/testimonial-3.jpg",
    content:
      "Excellent service from start to finish. Their attention to detail and customer support really sets them apart from the rest.",
  },
  {
    name: "John Patel",
    role: "Operations Director",
    image: "/testimonial-4.jpg",
    content:
      "We've partnered with Triport Logistic for over a year now, and they've never failed to impress. Fast, safe, and efficient.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval) // Clean up on unmount
  }, [])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-[#ff4800] uppercase font-extrabold mb-2">Testimonial</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Clients Say</h2>
        </div>

        <div className="relative bg-gray-100 max-w-3xl mx-auto rounded-lg shadow-md p-8 pt-10">
          <Quote className="w-10 h-10 text-[#ff4800] absolute top-0 right-0 transform -translate-y-1/2 -translate-x-1/2 bg-gray-100 p-2 rounded-full" />

          <div className="flex items-center gap-4 mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h6 className="text-lg font-semibold">{testimonial.name}</h6>
              <small className="text-gray-500">– {testimonial.role}</small>
            </div>
          </div>
          <p className="text-gray-700 italic">"{testimonial.content}"</p>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? "bg-[#ff4800]" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
