"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function GetQuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Quote request:", formData)
    alert("Thank you for your quote request! We'll get back to you within 24 hours.")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get a Free Quote</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to ship? Get an instant quote for your cargo and logistics needs. Our team will provide you with
            competitive pricing and expert advice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4800] focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="air-freight">Air Freight</option>
                <option value="sea-freight">Sea Freight</option>
                <option value="ground-transport">Ground Transport</option>
                <option value="warehousing">Warehousing</option>
                <option value="packaging">Custom Packaging</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
                  Origin Location *
                </label>
                <Input
                  type="text"
                  id="origin"
                  name="origin"
                  required
                  placeholder="City, Country"
                  value={formData.origin}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Location *
                </label>
                <Input
                  type="text"
                  id="destination"
                  name="destination"
                  required
                  placeholder="City, Country"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <Input
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder="e.g., 100"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensions (L x W x H cm)
                </label>
                <Input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  placeholder="e.g., 100 x 50 x 30"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Cargo Description
              </label>
              <Textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Please describe your cargo and any special requirements..."
                value={formData.description}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>

            <div className="text-center">
              <Button type="submit" size="lg" className="bg-[#ff4800] hover:bg-[#e63f00] text-white px-8 py-3">
                Get Free Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
