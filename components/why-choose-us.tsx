import Image from "next/image"
import { ShieldCheck, Clock, Award, Headphones, MapPin, CheckCircle } from "lucide-react"

export function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-[#ff4800]" />,
      title: "Direct Carrier Contracts",
      desc: "Guaranteed space protection and negotiated spot rates with global ocean and air carriers.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#ff4800]" />,
      title: "Expedited Customs Clearance",
      desc: "Automated Mirsal II Dubai Customs declarations and green-channel clearance in 4-12 hours.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ff4800]" />,
      title: "Comprehensive Marine Insurance",
      desc: "Complete bonded custody and full-value cargo risk mitigation from origin to destination.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#ff4800]" />,
      title: "Dedicated B2B Freight Specialists",
      desc: "Single point of contact for tracking, documentation, port dues, and milestone reporting.",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual Side */}
          <div className="order-2 lg:order-1 relative aspect-[4/3] w-full overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/service-customs.jpg"
              alt="Why Choose Triport Logistics for commercial freight forwarding in Dubai"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="text-xs uppercase font-extrabold text-[#ff4800] tracking-wider">
                  Dubai Customs Compliance
                </span>
                <p className="text-sm font-semibold text-gray-200 mt-1">
                  On-site port inspection and manifest clearance at Jebel Ali Port &amp; DXB Cargo Village.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[#ff4800] uppercase font-extrabold text-xs sm:text-sm tracking-wider">
              The Triport Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight tracking-tight">
              Predictable, Compliant &amp; Cost-Optimized Logistics
            </h2>
            <p className="text-gray-700 text-base sm:text-lg font-normal mb-8 leading-relaxed">
              In international commercial shipping, delays and unexpected port demurrage erode profitability. Triport Logistics eliminates supply chain uncertainty by combining strategic Dubai port proximity, deep regulatory expertise, and automated freight visibility.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => (
                <div key={idx} className="bg-white p-5 border border-gray-200 shadow-sm">
                  <div className="mb-3">{pt.icon}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{pt.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
