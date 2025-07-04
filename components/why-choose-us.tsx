import { Award, Users, Clock, Shield, Globe, Headphones } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-[#ff4800]" />,
      title: "Industry Expertise",
      description: "Over 20 years of experience in global logistics and supply chain management.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#ff4800]" />,
      title: "Dedicated Team",
      description: "Professional logistics experts committed to your success and satisfaction.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#ff4800]" />,
      title: "On-Time Delivery",
      description: "99% on-time delivery rate with real-time tracking and updates.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#ff4800]" />,
      title: "Secure & Insured",
      description: "Full insurance coverage and advanced security measures for all shipments.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#ff4800]" />,
      title: "Global Network",
      description: "Worldwide presence with local expertise in over 100 countries.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#ff4800]" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and assistance whenever you need it.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Triport Logistics?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out in the logistics industry through our commitment to excellence, reliability, and customer
            satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#ff4800] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff4800] mb-2">50K+</div>
              <div className="text-gray-600">Successful Shipments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff4800] mb-2">100+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#ff4800] mb-2">99%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
