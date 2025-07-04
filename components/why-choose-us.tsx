import Image from "next/image"
import { Award, Users, Clock } from "lucide-react"

export function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="w-5 h-5 text-[#ff4800]" />,
      text: "Best In Industry",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#ff4800]" />,
      text: "Emergency Services",
    },
    {
      icon: <Users className="w-5 h-5 text-[#ff4800]" />,
      text: "24/7 Customer Support",
    },
  ]

  return (
    <section className="mb-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <Image
              src="feature.jpg"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="w-xl rounded-none shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="py-9">
            <div className="text-[#ff4800] uppercase font-extrabold mb-2">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Faster, Safe and Trusted Logistics Services
            </h2>
            <p className="text-gray-700 font-normal mb-6">
              At our core, we believe logistics should be seamless and stress-free. With years of experience and a
              dedication to timely delivery, we offer solutions that are both reliable and cost-effective. Our team
              ensures your goods are handled with the utmost care — every step of the way.
            </p>
            <ul className="space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-center text-gray-800">
                  <span className="mr-3">{point.icon}</span>
                  <h6 className="text-base font-medium">{point.text}</h6>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
