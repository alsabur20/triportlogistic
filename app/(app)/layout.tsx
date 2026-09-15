import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { GoogleAnalytics } from '@next/third-parties/google'
import { company } from "@/lib/company"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family-sans-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: company.seo.defaultTitle,
    template: company.seo.titleTemplate,
  },
  description: company.seo.defaultDescription,
  icons: {
    icon: company.favicon,
    apple: company.favicon,
  },
  alternates: {
    canonical: "/",
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
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  other: {
    "geo.region": company.seo.geo.region,
    "geo.placename": company.seo.geo.placename,
    "geo.position": company.seo.geo.position,
    "ICBM": company.seo.geo.icbm,
  },
  openGraph: {
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
    url: `${company.url}/`,
    siteName: company.name,
    locale: "en_AE",
    alternateLocale: ["en_PK", "en_US"],
    images: [
      {
        url: company.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${company.name} - Freight Forwarding & Cargo Services in UAE and Pakistan`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
    images: [company.seo.ogImage],
  },
}

const { dubai, lahore } = company.offices

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${company.url}/#organization`,
  name: company.name,
  url: company.url,
  logo: {
    "@type": "ImageObject",
    url: company.logo,
    width: 150,
    height: 40,
  },
  telephone: company.contact.phone,
  email: company.contact.email,
  description: company.description,
  foundingDate: company.foundingDate,
  sameAs: Object.values(company.social),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.contact.phone,
      contactType: "customer service",
      areaServed: ["AE", "PK"],
      availableLanguage: ["English", "Urdu", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      email: company.contact.email,
      contactType: "sales",
      areaServed: ["AE", "PK"],
    },
  ],
  location: [
    {
      "@type": "Place",
      name: dubai.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: dubai.building,
        addressLocality: dubai.city,
        addressRegion: dubai.region,
        addressCountry: dubai.countryCode,
      },
    },
    {
      "@type": "Place",
      name: lahore.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${lahore.building}, ${lahore.street}`,
        addressLocality: lahore.city,
        addressRegion: lahore.region,
        addressCountry: lahore.countryCode,
      },
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Worldwide" },
  ],
  knowsAbout: [
    ...company.services.map((s) => s.name),
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
    itemListElement: company.services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
      },
    })),
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${company.url}/#website`,
  name: company.name,
  url: company.url,
  description: "Freight forwarding, air cargo, sea freight and ground transport services between UAE and Pakistan.",
  publisher: {
    "@type": "Organization",
    "@id": `${company.url}/#organization`,
    name: company.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${company.url}/services`,
    },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="apple-touch-icon" href="/favicon.png" />
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
