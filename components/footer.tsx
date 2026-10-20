import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck, Globe, Anchor } from "lucide-react"
import { company } from "@/lib/company"

export function Footer() {
  const { dubai, jebelAliHub, pakistan, germany } = company.offices

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Trade Guides & Blog", href: "/blog" },
    { name: "Contact & Rate Desk", href: "/contact" },
  ]

  const tradeGuides = [
    { name: "China to Dubai Freight Guide", href: "/blog/china-to-dubai-freight-forwarding-guide" },
    { name: "Dubai Customs Mirsal II Guide", href: "/blog/dubai-customs-clearance-mirsal-ii-guide" },
    { name: "FCL vs. LCL Sea Freight Analysis", href: "/blog/fcl-vs-lcl-sea-freight-optimization-guide" },
    { name: "GCC Cross-Border Road Trucking", href: "/blog/gcc-cross-border-bonded-trucking-guide" },
    { name: "Air vs. Ocean Modal Selection", href: "/blog/air-freight-vs-sea-freight-commercial-guide" },
  ]

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-850">
      {/* Upper Footer: Main Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand & Contact Info */}
          <div>
            <div className="mb-6">
              <span className="text-2xl font-black text-white tracking-tight">
                TRIPORT <span className="text-[#ff4800]">LOGISTICS</span>
              </span>
              <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Global B2B Freight Forwarding, Ocean &amp; Air Cargo, UAE Customs Clearance &amp; 3PL Warehousing connecting the UAE, Pakistan, Europe, and over 150 trade lanes.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Dubai HQ */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#ff4800] mt-0.5 shrink-0" />
                <div className="text-xs text-gray-300">
                  <p className="font-bold text-white mb-0.5">{dubai.name}</p>
                  <p>{dubai.building}, {dubai.city}, {dubai.country}</p>
                </div>
              </div>

              {/* JAFZA Hub */}
              <div className="flex items-start space-x-3">
                <Anchor className="w-4 h-4 text-[#ff4800] mt-0.5 shrink-0" />
                <div className="text-xs text-gray-300">
                  <p className="font-bold text-white mb-0.5">{jebelAliHub.name}</p>
                  <p>{jebelAliHub.building}, {jebelAliHub.city}, {jebelAliHub.country}</p>
                </div>
              </div>

              {/* Pakistan Office */}
              <div className="flex items-start space-x-3">
                <Globe className="w-4 h-4 text-[#ff4800] mt-0.5 shrink-0" />
                <div className="text-xs text-gray-300">
                  <p className="font-bold text-white mb-0.5">{pakistan.name}</p>
                  <p>{pakistan.building}, {pakistan.city}, {pakistan.country}</p>
                  <p className="text-[#ff4800] mt-0.5 font-semibold">
                    Tel: <a href={`tel:${pakistan.phone}`} className="hover:underline">{pakistan.phoneDisplay}</a>
                  </p>
                </div>
              </div>

              {/* Germany Desk */}
              <div className="flex items-start space-x-3">
                <Globe className="w-4 h-4 text-[#ff4800] mt-0.5 shrink-0" />
                <div className="text-xs text-gray-300">
                  <p className="font-bold text-white mb-0.5">{germany.name}</p>
                  <p>{germany.building}, {germany.city}, {germany.country}</p>
                  <p className="text-[#ff4800] mt-0.5 font-semibold">
                    Email: <a href={`mailto:${germany.email}`} className="hover:underline">{germany.email}</a>
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-center space-x-3 pt-1">
                <Phone className="w-4 h-4 text-[#ff4800] shrink-0" />
                <a
                  href={`tel:${company.contact.phone}`}
                  className="text-xs text-gray-200 font-semibold hover:text-[#ff4800] transition-colors"
                >
                  {company.contact.phoneDisplay} (Direct Calling)
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#ff4800] shrink-0" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-xs text-gray-300 hover:text-[#ff4800] transition-colors"
                >
                  {company.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-[#ff4800] pl-3">
              Commercial Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {company.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#ff4800] shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#quote-section"
                  className="text-[#ff4800] hover:underline font-bold flex items-center gap-1.5"
                >
                  <span>→ Request Instant Freight Quote</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Trade Guides & SEO Corridors */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-[#ff4800] pl-3">
              Trade &amp; Customs Guides
            </h3>
            <ul className="space-y-2.5 text-xs">
              {tradeGuides.map((guide, idx) => (
                <li key={idx}>
                  <Link
                    href={guide.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 shrink-0 mt-1" />
                    <span>{guide.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Accreditations & Rate Desk CTA */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-l-2 border-[#ff4800] pl-3">
              Standards &amp; Rate Desk
            </h3>
            <div className="bg-gray-900 border border-gray-800 p-5 mb-5">
              <span className="text-xs font-bold text-[#ff4800] uppercase block mb-1">
                Direct Commercial Desk
              </span>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                Receive real-time container allocations and spot freight rates from our Dubai rate desk.
              </p>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 text-xs w-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Rate Desk</span>
              </a>
            </div>

            <div className="text-[11px] text-gray-400 space-y-1">
              <p className="font-semibold text-gray-300">Accreditations &amp; Port Compliance:</p>
              <p>• IATA Cargo Network Agent</p>
              <p>• FIATA International Federation of Forwarders</p>
              <p>• Dubai Customs / Dubai Trade Mirsal II Broker</p>
              <p>• NAFL (National Association of Freight &amp; Logistics UAE)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Headquartered in Dubai, UAE · Connecting Global Ports, Airports &amp; Freezones Worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
