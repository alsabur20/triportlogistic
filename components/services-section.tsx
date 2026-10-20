import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { company } from "@/lib/company"

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#ff4800] uppercase font-extrabold text-xs sm:text-sm tracking-wider">
            Enterprise Logistics Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
            Commercial Freight Forwarding &amp; Supply Chain Solutions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Engineered for global importers, exporters, and industrial manufacturers. Seamless multi-modal routing through Dubai to over 150 international trade destinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {company.services.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group scroll-mt-24"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={`${service.name} by Triport Logistics Dubai`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-[#ff4800] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Dubai Hub
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff4800] transition-colors">
                    <Link href={`/services/${service.slug}`}>
                      {service.name}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#ff4800] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-bold text-[#ff4800] hover:text-[#d43c00] group/link gap-1"
                  >
                    <span>View Specifications &amp; Rates</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
