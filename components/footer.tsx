import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import { company } from "@/lib/company"

export function Footer() {
  const { dubai, lahore } = company.offices

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info Column */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#ff4800] mb-4">{company.name}</h2>
              <p className="text-gray-300 mb-6">{company.tagline}</p>
            </div>

            <div className="space-y-4">
              {/* Lahore */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff4800] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-1">{lahore.label}</p>
                  <p className="text-gray-300 text-sm">
                    {lahore.building}, {lahore.street},<br />
                    {lahore.city}, {lahore.region}, {lahore.country}
                  </p>
                </div>
              </div>

              {/* Dubai */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff4800] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-1">{dubai.label}</p>
                  <p className="text-gray-300 text-sm">
                    {dubai.building},<br />
                    {dubai.city}, {dubai.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-gray-300 hover:text-[#ff4800] transition-colors"
                    aria-label={`Call ${company.name}`}
                  >
                    {company.contact.phoneDisplay}
                  </a>
                  <p className="text-gray-400 text-sm">24/7 Customer Support</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-gray-300 hover:text-[#ff4800] transition-colors"
                    aria-label={`Email ${company.name}`}
                  >
                    {company.contact.email}
                  </a>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <a
                    href={company.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ff4800] transition-colors"
                    aria-label={`Chat with ${company.name} on WhatsApp`}
                  >
                    WhatsApp Us
                  </a>
                  <p className="text-gray-400 text-sm">Quick Response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff4800] transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {company.services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-[#ff4800] transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3 flex-shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#ff4800] transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3 flex-shrink-0" />
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm">
              © 2025 {company.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Freight Forwarding & Cargo Services in UAE & Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
