import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Award, Globe, ShieldCheck } from "lucide-react"

export function AboutSection() {
  const highlights = [
    "Headquartered in Dubai with direct Jebel Ali Port & DXB Airport terminal access",
    "Licensed UAE Customs Broker operating Mirsal II with 4-12 hour clearance turnaround",
    "IATA & FIATA accredited international freight forwarding network",
    "Multi-modal sea, air, and bonded cross-border road freight to 150+ global destinations",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left side: Visual Showcase with Experience Badge */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full min-h-[340px] overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/hero-ocean.jpg"
                alt="Triport Logistics container vessel operations at Jebel Ali Port Dubai"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-gray-900 border-2 border-[#ff4800] p-6 text-white shadow-2xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-8 h-8 text-[#ff4800]" />
                <span className="text-3xl font-extrabold text-[#ff4800]">25+ Years</span>
              </div>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">
                Trusted commercial freight forwarding &amp; logistics leadership in Dubai, UAE.
              </p>
            </div>
          </div>

          {/* Right side: Editorial & Value Pillars */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff4800]/10 text-[#ff4800] text-xs font-bold uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4" />
              <span>About Triport Logistics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Dubai&apos;s Trusted Partner for Global Freight &amp; Supply Chain Management
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Triport Logistics is a premier B2B freight forwarding company established in the United Arab Emirates. Operating from the world&apos;s most vital logistics intersection, we connect commercial manufacturers, global trading conglomerates, and multinational distributors across Asia, Europe, the Americas, and the Middle East.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether your enterprise requires full container load (FCL) sea freight through Jebel Ali Port, expedited air cargo charters through Dubai International (DXB), or bonded temperature-controlled trucking into Saudi Arabia, our dedicated logistics specialists execute with precision and transparency.
            </p>

            {/* Bullet Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff4800] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold px-7 py-3.5 text-sm transition-colors"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-7 py-3.5 text-sm transition-colors"
              >
                Contact Operations Desk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
