"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function PageNavigation() {
  const pathname = usePathname()

  const getPageName = (path: string) => {
    switch (path) {
      case "/about":
        return "About Us"
      case "/services":
        return "Services"
      case "/contact":
        return "Contact Us"
      default:
        return "Home"
    }
  }

  return (
    <nav className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="flex items-center text-gray-600 hover:text-[#ff4800] transition-colors">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-[#ff4800] font-medium">{getPageName(pathname)}</span>
        </div>
      </div>
    </nav>
  )
}
