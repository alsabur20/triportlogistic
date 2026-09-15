import { Truck, Ship, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: <Plane className="w-10 h-10 text-black" />,
      title: "Air Freight",
      description: "Fast secure air freight solutions for high-value or urgent cargo worldwide.",
    },
    {
      icon: <Ship className="w-10 h-10 text-black" />,
      title: "Sea Freight",
      description: "Our ocean freight services cover global shipping routes, providing cost-effective solutions for bulk or containerized goods with end-to-end tracking.",
    },
    {
      icon: <Truck className="w-10 h-10 text-black" />,
      title: "Ground Transport",
      description: "We provide reliable land transport solutions including truckload and LTL shipping, covering regional and cross-border routes with timely delivery.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#ff4800] uppercase font-extrabold mb-2">Our Services</h2>
          <p className="text-3xl md:text-5xl font-extrabold mb-4">Reliable Logistics Services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.title.toLowerCase().replace(/\s+/g, "-")}
              className="bg-white p-0 shadow-none scroll-mt-24"
            >
              {/* Top bar: icon + title */}
              <div className="bg-[#ff4800] p-4 flex items-center justify-center space-x-4">
                {service.icon}
                <h3 className="text-lg font-bold text-white m-0">{service.title}</h3>
              </div>

              {/* Body: description*/}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
