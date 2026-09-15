"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Image from 'next/image';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0 md:py-0 py-6">
            <Link href="/" className="text-2xl font-bold text-[#ff4800]">
              <Image
                src="/logo.png"
                alt="Triport Logistics Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-0">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-6 font-bold transition-all duration-200 ${isActive(item.href)
                    ? "bg-[#ff4800] text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Quote Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-[#ff4800] hover:bg-[#e63f00] text-white px-6 py-2 font-bold rounded-none">Get A Quote</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#ff4800] p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 font-bold tracking-wider ${isActive(item.href)
                    ? "bg-[#ff4800] text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#ff4800] hover:bg-[#e63f00] text-white rounded-none">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
