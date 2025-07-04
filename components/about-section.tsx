import { Clock, Shield, Globe } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-[#ff4800]" />,
      title: "Global Network",
      description: "Worldwide coverage with local expertise in every major market",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff4800]" />,
      title: "24/7 Service",
      description: "Round-the-clock support and real-time tracking for all shipments",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#ff4800]" />,
      title: "Secure & Reliable",
      description: "Advanced security measures and insurance coverage for peace of mind",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Triport Logistics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 20 years of experience in the logistics industry, we provide comprehensive cargo and
            transportation solutions that connect businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Logistics Partner</h3>
            <p className="text-gray-600 mb-6">
              We specialize in providing end-to-end logistics solutions that streamline your supply chain and reduce
              operational costs. Our team of experts ensures your cargo reaches its destination safely and on time,
              every time.
            </p>
            <p className="text-gray-600 mb-6">
              From small packages to large industrial equipment, we handle all types of cargo with the same level of
              care and professionalism. Our advanced tracking systems keep you informed throughout the entire shipping
              process.
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff4800]">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff4800]">50K+</div>
                <div className="text-gray-600">Shipments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff4800]">99%</div>
                <div className="text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/about.jpg?height=400&width=600"
              alt="Logistics warehouse"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
