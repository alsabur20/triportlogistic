"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin, MessageCircle, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { company } from "@/lib/company"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Trade Guides & Blog", href: "/blog" },
    { name: "Contact & Rate Desk", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Corporate Utility Bar */}
      <div className="bg-gray-950 text-gray-300 text-xs border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff4800]" />
              <span>Dubai Global Logistics Hub · UAE</span>
            </span>
            <a
              href={`tel:${company.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-[#ff4800] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff4800]" />
              <span>{company.contact.phoneDisplay} (24/7 Operations)</span>
            </a>
            <a
              href={`mailto:${company.contact.email}`}
              className="flex items-center gap-1.5 hover:text-[#ff4800] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#ff4800]" />
              <span>{company.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 font-medium">JAFZA Port &amp; DXB Cargo Village</span>
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#25D366] font-bold hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Rate Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Triport Logistics Dubai"
                width={160}
                height={45}
                priority
                className="object-contain h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-bold tracking-tight transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-[#ff4800] border-b-2 border-[#ff4800]"
                    : "text-gray-800 hover:text-[#ff4800]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button className="bg-[#ff4800] hover:bg-[#e63f00] text-white px-6 py-2.5 font-bold rounded-none shadow-md shadow-[#ff4800]/20 text-sm">
                Request B2B Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={company.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Rate Desk"
              className="p-2 text-[#25D366]"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="text-gray-700 hover:text-[#ff4800] p-2"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2.5 text-base font-bold transition-colors ${
                  isActive(item.href)
                    ? "bg-[#ff4800] text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 px-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold py-3 rounded-none">
                  Request B2B Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
