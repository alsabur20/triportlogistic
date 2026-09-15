import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
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
              <h3 className="text-2xl font-bold text-[#ff4800] mb-4">Triport Logistics</h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner for global logistics and cargo solutions. Connecting businesses worldwide with
                reliable transportation services.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff4800] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    107 C1, Engineers Town,
                    <br />
                    Lahore
                    <br />
                    Pakistan
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff4800] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    20th Doha St,
                    <br />
                    Al Nahda
                    <br />
                    Dubai
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+971 56 656 9927</p>
                  <p className="text-gray-400 text-sm">24/7 Customer Support</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff4800] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@triportlogistic.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff4800] transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3"></span>
                  Air Freight
                </span>
              </li>
              <li>
                <span className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3"></span>
                  Sea Freight
                </span>
              </li>
              <li>
                <span className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-[#ff4800] rounded-full mr-3"></span>
                  Ground Transport
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Rights Reserved Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Triport Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
