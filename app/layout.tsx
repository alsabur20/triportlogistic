import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-sans-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.triportlogistic.com"),
  title: {
    default: "Triport Logistics | Freight Forwarding & Cargo Services in UAE & Pakistan",
    template: "%s | Triport Logistics",
  },
  description:
    "Triport Logistics offers air freight, sea freight, ground transport, and cargo forwarding services between UAE and Pakistan. 25+ years of trusted logistics expertise with offices in Dubai and Lahore.",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "https://www.triportlogistic.com",
      "en-PK": "https://www.triportlogistic.com",
      "x-default": "https://www.triportlogistic.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Triport Logistics" }],
  creator: "Triport Logistics",
  publisher: "Triport Logistics",
  other: {
    "geo.region": "AE-DU, PK-PB",
    "geo.placename": "Dubai, UAE; Lahore, Pakistan",
    "geo.position": "25.2048;55.2708",
    "ICBM": "25.2048, 55.2708",
  },
  openGraph: {
    title: "Triport Logistics | Freight Forwarding & Cargo Services in UAE & Pakistan",
    description:
      "Air freight, sea freight, ground transport & cargo forwarding from Dubai to Pakistan and worldwide. 25+ years trusted logistics with offices in Dubai & Lahore.",
    url: "https://www.triportlogistic.com/",
    siteName: "Triport Logistics",
    locale: "en_AE",
    alternateLocale: ["en_PK", "en_US"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Triport Logistics - Freight Forwarding & Cargo Services in UAE and Pakistan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triport Logistics | Freight Forwarding & Cargo Services in UAE & Pakistan",
    description:
      "Air freight, sea freight & ground transport from Dubai to Pakistan. 25+ years experience. Offices in Dubai & Lahore.",
    images: ["/og-image.jpg"],
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.triportlogistic.com/#organization",
  name: "Triport Logistics",
  url: "https://www.triportlogistic.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.triportlogistic.com/logo.png",
    width: 150,
    height: 40,
  },
  telephone: "+971566569927",
  email: "info@triportlogistic.com",
  description:
    "Triport Logistics provides air freight, sea freight, ground transport, cargo forwarding, warehousing, and customs clearance services between UAE and Pakistan with 25+ years of industry experience.",
  foundingDate: "1999",
  sameAs: [
    "https://wa.me/971566569927",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971566569927",
      contactType: "customer service",
      areaServed: ["AE", "PK"],
      availableLanguage: ["English", "Urdu", "Arabic"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      email: "info@triportlogistic.com",
      contactType: "sales",
      areaServed: ["AE", "PK"],
    },
  ],
  location: [
    {
      "@type": "Place",
      name: "Triport Logistics Dubai",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ACICO Business Park",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
    },
    {
      "@type": "Place",
      name: "Triport Logistics Lahore",
      address: {
        "@type": "PostalAddress",
        streetAddress: "107 C1, Engineers Town",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Worldwide" },
  ],
  knowsAbout: [
    "Air Freight",
    "Sea Freight",
    "Ground Transport",
    "Cargo Forwarding",
    "Freight Forwarding",
    "Customs Clearance",
    "Warehousing",
    "Supply Chain Management",
    "International Shipping",
    "Cargo from Dubai to Pakistan",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Logistics & Freight Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air Freight",
          description: "Fast and secure air freight solutions for high-value or urgent cargo worldwide.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sea Freight",
          description: "Cost-effective ocean freight covering global shipping routes with end-to-end tracking.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ground Transport",
          description: "Reliable land transport including truckload and LTL shipping across regional and cross-border routes.",
        },
      },
    ],
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.triportlogistic.com/#website",
  name: "Triport Logistics",
  url: "https://www.triportlogistic.com",
  description: "Freight forwarding, air cargo, sea freight and ground transport services between UAE and Pakistan.",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.triportlogistic.com/#organization",
    name: "Triport Logistics",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.triportlogistic.com/services",
    },
    "query-input": "required name=search_term_string",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en-ae" href="https://www.triportlogistic.com" />
        <link rel="alternate" hrefLang="en-pk" href="https://www.triportlogistic.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.triportlogistic.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId="G-788MKX4659" />
    </html>
  )
}
