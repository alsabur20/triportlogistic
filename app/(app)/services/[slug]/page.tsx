import { PageHero } from "@/components/page-hero"
import { company } from "@/lib/company"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Globe, MessageCircle, Phone } from "lucide-react"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return company.services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = company.services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found | Triport Logistics",
    }
  }

  const title = slug === 'air-freight' ? 'Air Freight Cargo in Dubai' : `${service.name} in Dubai`
  const description = `${service.description.substring(0, 155)}...`

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${company.url}/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.name} by Triport Logistics Dubai UAE`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = company.services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${company.url}/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: company.name,
      url: company.url,
      telephone: company.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.offices.dubai.building,
        addressLocality: company.offices.dubai.city,
        addressRegion: company.offices.dubai.region,
        addressCountry: company.offices.dubai.countryCode,
      },
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Worldwide" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.features.map((feat) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feat,
        },
      })),
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: company.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${company.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${company.url}/services/${service.slug}` },
    ],
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero asH1={false} title={service.name} backgroundImage={service.image} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={service.image}
                  alt={`${service.name} operations by Triport Logistics`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>

              <div>
                <span className="text-[#ff4800] uppercase font-extrabold text-sm tracking-wider">
                  Commercial Freight Solutions
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
                  {service.name} Services in Dubai &amp; Across the UAE
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-gray-50 border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Capabilities &amp; Commercial Specifications
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#ff4800] mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade Hub Integration */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Strategic Hub Operations via Dubai, UAE
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Headquartered in Dubai, Triport Logistics capitalizes on the world&apos;s leading logistics corridor. Operating seamlessly across Jebel Ali Port (DP World), Dubai International Airport (DXB), Al Maktoum International (DWC), and dedicated Free Zones (JAFZA, DAFZA), we ensure uninterrupted commercial cargo flow, expedited customs release, and transparent milestone tracking.
                </p>
              </div>

              {/* B2B Value Proposition */}
              <div className="grid sm:grid-cols-3 gap-6 pt-4">
                <div className="border border-gray-200 p-5 text-center">
                  <ShieldCheck className="w-8 h-8 text-[#ff4800] mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 text-base mb-1">Guaranteed Safety</h3>
                  <p className="text-gray-600 text-xs">Full marine cargo insurance &amp; bonded custody</p>
                </div>
                <div className="border border-gray-200 p-5 text-center">
                  <Clock className="w-8 h-8 text-[#ff4800] mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 text-base mb-1">Fast Turnaround</h3>
                  <p className="text-gray-600 text-xs">Direct airline allocations &amp; weekly port sailings</p>
                </div>
                <div className="border border-gray-200 p-5 text-center">
                  <Globe className="w-8 h-8 text-[#ff4800] mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 text-base mb-1">150+ Global Lanes</h3>
                  <p className="text-gray-600 text-xs">Connecting China, Europe, Americas, and GCC</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Other Services */}
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-3">
                  All Commercial Services
                </h3>
                <ul className="space-y-2">
                  {company.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={`flex items-center justify-between p-3 text-sm font-semibold transition-colors ${
                          s.slug === service.slug
                            ? "bg-[#ff4800] text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span>{s.name}</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fast Rate Desk CTA */}
              <div className="bg-gray-900 text-white p-8">
                <span className="text-[#ff4800] uppercase font-bold text-xs tracking-wider">
                  Direct Rate Desk
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2 mb-3">
                  Request a Commercial Freight Quote
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Speak directly with our freight desk in Dubai for spot rates, container allocations, and customized supply chain routing.
                </p>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/971566569927?text=Hello%20Triport%20Logistics%20Team%2C%20I%20am%20requesting%20a%20commercial%20quote%20for%20${encodeURIComponent(
                      service.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold py-3 text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Freight Desk</span>
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Operations</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
