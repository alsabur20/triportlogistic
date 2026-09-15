import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image + Experience Box */}
          <div className="pb-4 lg:pb-0">
            <Image
              src="/about.jpg"
              alt="Triport Logistics team and global cargo services"
              width={500}
              height={300}
              className="w-auto rounded-none shadow-md"
            />
            <div className="bg-[#ff4800] text-black text-center p-4 rounded-none shadow">
              <h3 className="text-3xl font-bold m-0">25+ Years Experience</h3>
            </div>
          </div>

          {/* Right side: Headings + Paragraphs */}
          <div>
            <h6 className="text-[#ff4800] uppercase font-extrabold mb-2">
              About Us
            </h6>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Trusted Logistics Service Provider in the UAE and Pakistan
            </h2>
            <p className="text-gray-700 font-normal mb-4">
              With over 25 years of industry experience, we provide reliable and
              efficient logistics solutions tailored to meet your business
              needs. Our commitment to timely deliveries, customer satisfaction,
              and continuous improvement sets us apart in the competitive
              logistics market.
            </p>
            <p className="text-gray-700 font-normal">
              Whether you're looking for freight forwarding, warehousing, or
              last-mile delivery services, our expert team is here to help you
              streamline your supply chain and grow your operations with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
