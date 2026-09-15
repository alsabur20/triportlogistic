import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Air Freight", href: "/services" },
    { name: "Sea Freight", href: "/services" },
    { name: "Ground Transport", href: "/services" },
    { name: "Cargo Forwarding", href: "/services" },
    { name: "Get a Free Quote", href: "/contact" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info Column */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#ff4800] mb-4">Triport Logistics</h2>
              <p className="text-gray-300 mb-6">
                Your trusted partner for freight forwarding, air cargo, sea freight, and ground transport
                in UAE and Pakistan. Connecting businesses worldwide since 1999.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff4800] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-1">Lahore, Pakistan</p>
                  <p className="text-gray-300 text-sm">
                    107 C1, Engineers Town,
                    <br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff4800] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-200 font-medium text-sm mb-1">Dubai, UAE</p>
                  <p className="text-gray-300 text-sm">
                    ACICO Business Park,
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <a
                    href="tel:+971566569927"
                    className="text-gray-300 hover:text-[#ff4800] transition-colors"
                    aria-label="Call Triport Logistics"
                  >
                    +971 56 656 9927
                  </a>
                  <p className="text-gray-400 text-sm">24/7 Customer Support</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@triportlogistic.com"
                    className="text-gray-300 hover:text-[#ff4800] transition-colors"
                    aria-label="Email Triport Logistics"
                  >
                    info@triportlogistic.com
                  </a>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/971566569927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#ff4800] transition-colors"
                    aria-label="Chat with Triport Logistics on WhatsApp"
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
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#ff4800] transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3 flex-shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Rights Reserved Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Triport Logistics. All rights reserved.
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
