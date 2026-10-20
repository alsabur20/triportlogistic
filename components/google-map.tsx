import { MapPin, Anchor } from "lucide-react"

export function GoogleMap() {
  const offices = [
    {
      label: "Dubai Global Headquarters — UAE",
      sublabel: "ACICO Business Park, Port Saeed, Dubai, UAE",
      icon: MapPin,
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.37840355731!2d55.333512274944376!3d25.25785312924202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce09d55d4ab%3A0x9ab0b76200a25702!2sACICO%20Business%20Park!5e0!3m2!1sen!2s!4v1789500471843!5m2!1sen!2s",
      title: "Triport Logistics Dubai Global Headquarters — ACICO Business Park, Dubai, UAE",
    },
    {
      label: "Jebel Ali Port Operations Hub — JAFZA South",
      sublabel: "Jebel Ali Free Zone (DP World Container Terminal), Dubai, UAE",
      icon: Anchor,
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28919.897010173263!2d55.01185014605948!3d24.985789647895697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f12e128ba7f09%3A0xa62624d77bb411ce!2sJebel%20Ali%20Free%20Zone!5e0!3m2!1sen!2sae!4v1710500000000!5m2!1sen!2sae",
      title: "Triport Logistics JAFZA Operations Hub — Jebel Ali Port, Dubai, UAE",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-[#ff4800] uppercase font-extrabold text-xs tracking-wider mb-2">
            Strategic Logistics Presence
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our Dubai Hubs &amp; Terminal Operations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Conveniently situated in Dubai&apos;s commercial center and directly adjacent to Jebel Ali Port, facilitating rapid customs processing and container dispatch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office) => {
            const Icon = office.icon
            return (
              <div key={office.label} className="bg-white shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-[#ff4800] px-5 py-4 flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-white shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-sm leading-tight">{office.label}</h3>
                    <p className="text-orange-100 text-xs mt-0.5">{office.sublabel}</p>
                  </div>
                </div>
                <div className="aspect-video w-full bg-gray-100">
                  <iframe
                    src={office.embed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={office.title}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
