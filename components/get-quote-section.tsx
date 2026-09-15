"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function GetQuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote Request Submitted:", formData)
    alert("Thank you for your quote request! We'll be in touch soon.")
  }

  return (
    <section className="bg-gray-200 my-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div className="pt-16">
            <div className="text-[#ff4800] uppercase font-extrabold mb-2">Get A Quote</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Request A Free Quote</h2>
            <p className="text-gray-700 font-normal mb-4">
              Looking for reliable and affordable logistics solutions? Fill out the form to receive a free quote
              tailored to your business needs. Whether it's local delivery, international shipping, or freight
              forwarding — our expert team is ready to assist you every step of the way.
            </p>
          </div>

          {/* Right Form Section */}
          <div className="bg-[#ff4800] md:p-20 p-10 py-20 rounded-none">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-4 border-none rounded-none font-normal text-lg"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-4 border-none rounded-none font-normal"
                value={formData.email}
                onChange={handleInputChange}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded-none border-none focus:ring-2 focus:ring-white"
              >
                <option value="">Select A Service</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Ocean Freight">Ocean Freight</option>
                <option value="Land Freight">Land Freight</option>
              </select>
              <Button type="submit" className="w-full p-3 bg-black hover:bg-gray-900 text-white border-none rounded-none font-bold">
                Get A Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
