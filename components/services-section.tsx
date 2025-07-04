import { Truck, Ship, Plane, Package, Warehouse, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: <Plane className="w-12 h-12 text-[#ff4800]" />,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
      features: ["Express delivery", "Temperature controlled", "Dangerous goods certified"],
    },
    {
      icon: <Ship className="w-12 h-12 text-[#ff4800]" />,
      title: "Sea Freight",
      description: "Cost-effective ocean freight solutions for large volume shipments.",
      features: ["Full container load", "Less container load", "Port-to-port service"],
    },
    {
      icon: <Truck className="w-12 h-12 text-[#ff4800]" />,
      title: "Ground Transport",
      description: "Comprehensive land transportation services across all major routes.",
      features: ["Door-to-door delivery", "Cross-border transport", "Last-mile delivery"],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your specific shipping and transportation needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-[#ff4800] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-[#ff4800] text-[#ff4800] hover:bg-[#ff4800] hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
