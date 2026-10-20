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
    alternateLocale: ["ar_AE", "en_US", "en_GB"],
    images: [
      {
        url: company.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${company.name} - Global Freight Forwarding, Ocean & Air Cargo in Dubai UAE`,
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

const { dubai, jebelAliHub, pakistan, germany } = company.offices

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${company.url}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  logo: {
    "@type": "ImageObject",
    url: company.logo,
    width: 200,
    height: 50,
  },
  telephone: company.contact.phone,
  email: company.contact.email,
  description: company.description,
  foundingDate: company.foundingDate,
  sameAs: [
    company.social.whatsapp,
    company.social.linkedin,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.contact.phone,
      contactType: "customer support & direct calls",
      areaServed: ["AE", "SA", "OM", "QA", "KW", "BH", "PK", "DE", "Global"],
      availableLanguage: ["English", "Arabic", "Urdu", "German"],
    },
    {
      "@type": "ContactPoint",
      telephone: pakistan.phone,
      contactType: "Pakistan operations desk",
      areaServed: ["PK", "Global"],
    },
    {
      "@type": "ContactPoint",
      email: germany.email,
      contactType: "Europe operations desk",
      areaServed: ["DE", "EU", "Global"],
    },
    {
      "@type": "ContactPoint",
      email: company.contact.salesEmail,
      contactType: "freight rate desk & quotes",
      areaServed: ["AE", "Global"],
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
        postalCode: dubai.postalCode,
        addressCountry: dubai.countryCode,
      },
    },
    {
      "@type": "Place",
      name: jebelAliHub.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: jebelAliHub.building,
        addressLocality: jebelAliHub.city,
        addressRegion: jebelAliHub.region,
        postalCode: jebelAliHub.postalCode,
        addressCountry: jebelAliHub.countryCode,
      },
    },
    {
      "@type": "Place",
      name: pakistan.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: pakistan.building,
        addressLocality: pakistan.city,
        addressRegion: pakistan.region,
        postalCode: pakistan.postalCode,
        addressCountry: pakistan.countryCode,
      },
    },
    {
      "@type": "Place",
      name: germany.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: germany.building,
        addressLocality: germany.city,
        addressRegion: germany.region,
        postalCode: germany.postalCode,
        addressCountry: germany.countryCode,
      },
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "China" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Worldwide" },
  ],
  knowsAbout: [
    "Global Freight Forwarding",
    "Ocean Container Shipping (FCL & LCL)",
    "Air Cargo Consolidation",
    "Dubai Customs Clearance (Mirsal II)",
    "JAFZA & DAFZA Free Zone Customs Brokerage",
    "3PL Bonded Warehousing & Distribution",
    "GCC Cross-Border Land Freight (FTL & LTL)",
    "Project Cargo & Heavy Lift Logistics",
    "Jebel Ali Port DP World Operations",
    "Dubai International Airport (DXB) Cargo",
    "Incoterms (FOB, CIF, DDP, EXW)",
    "Supply Chain Management",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Freight & Supply Chain Services",
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
  description:
    "Premier B2B freight forwarding and supply chain solutions provider based in Dubai, UAE. International ocean freight, air cargo, UAE customs clearance, and 3PL warehousing.",
  publisher: {
    "@type": "Organization",
    "@id": `${company.url}/#organization`,
    name: company.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${company.url}/services?q={search_term_string}`,
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
