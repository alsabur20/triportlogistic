import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-sans-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Triport Logistics | Cargo & Logistics Solutions",
  description:
    "Triport Logistics offers fast, secure, and reliable freight solutions across air, sea, and land. With a global network, advanced tracking, and 24/7 support, we ensure your cargo reaches its destination safely and on time.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Triport Logistics",
    "logistics company",
    "freight services",
    "air freight",
    "sea freight",
    "ground transport",
    "shipping company",
    "cargo delivery",
    "supply chain solutions",
    "global shipping",
    "international logistics",
    "Pakistan logistics",
    "secure freight",
    "logistics provider",
    "on-time delivery",
    "warehousing",
    "freight forwarding",
    "transport company"
  ],
  openGraph: {
    title: "Triport Logistics | Cargo & Logistics Solutions",
    description:
      "Fast, secure, and reliable logistics solutions via air, sea, and land. Trusted globally with 24/7 support.",
    url: "https://www.triportlogistic.com/",
    siteName: "Triport Logistics",
    images: [
      {
        url: "/og-image.jpg", // Recommended 1200x630 image
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Global Freight Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triport Logistics | Cargo & Logistics Solutions",
    description:
      "Triport Logistics offers end-to-end freight solutions globally with real-time tracking and 24/7 support.",
    images: ["/og-image.jpg"],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
