const faqs = [
  {
    question: "How long does air cargo from Dubai to Pakistan take?",
    answer:
      "Air freight from Dubai to major Pakistani cities like Lahore and Karachi typically takes 1–3 business days, depending on the destination, cargo type, and customs clearance speed. Triport Logistics works with top-tier airlines to ensure the fastest possible transit times.",
  },
  {
    question: "What is the cheapest way to ship cargo from UAE to Pakistan?",
    answer:
      "Sea freight (ocean freight) is the most cost-effective option for shipping large or heavy cargo from UAE to Pakistan. For smaller, time-sensitive shipments, air freight offers the best balance of speed and cost. Contact us for a free quote tailored to your cargo size and timeline.",
  },
  {
    question: "Do you offer customs clearance services?",
    answer:
      "Yes. Triport Logistics handles all customs documentation, import/export declarations, and clearance procedures for shipments in both the UAE and Pakistan. Our experienced team ensures smooth, compliant, and fast customs processing at Dubai ports and major Pakistani airports and seaports.",
  },
  {
    question: "What documents are required for freight forwarding from Pakistan to UAE?",
    answer:
      "Standard documents include: Commercial Invoice, Packing List, Bill of Lading (sea) or Airway Bill (air), Certificate of Origin, and any product-specific permits. Our team guides you through the complete documentation process from start to finish.",
  },
  {
    question: "Do you provide door-to-door delivery from Dubai to Pakistan?",
    answer:
      "Yes. We offer full door-to-door freight forwarding services from any location in the UAE to addresses throughout Pakistan, including Lahore, Karachi, Islamabad, Faisalabad, and more. This includes pickup, freight, customs clearance, and last-mile delivery.",
  },
  {
    question: "Can you handle sea freight from Pakistan to UAE?",
    answer:
      "Absolutely. We offer sea freight (FCL and LCL) services from major Pakistani seaports — including Karachi Port and Port Qasim — to UAE ports like Jebel Ali (Dubai). Ocean freight is ideal for bulk cargo, machinery, textiles, and manufactured goods.",
  },
  {
    question: "How do I get a freight quote from Triport Logistics?",
    answer:
      "You can request a free freight quote by filling out our online quote form, calling us at +971 56 656 9927, emailing info@triportlogistic.com, or messaging us directly on WhatsApp. We respond within a few hours with a competitive, customized quote.",
  },
  {
    question: "What types of cargo do you transport?",
    answer:
      "We handle a wide range of cargo including general goods, commercial shipments, industrial equipment, textiles, electronics, perishables (with temperature control), and oversized cargo. We serve both B2B and B2C clients in the UAE and Pakistan.",
  },
]

export function FaqSection() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-[#ff4800] uppercase font-extrabold mb-2">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our freight forwarding and cargo services in UAE and Pakistan.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-none shadow-sm"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-800 hover:text-[#ff4800] transition-colors">
                <span>{faq.question}</span>
                <span className="ml-4 flex-shrink-0 text-[#ff4800] text-xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Still have questions? We&apos;re here to help.</p>
          <a
            href="https://wa.me/971566569927"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold px-8 py-3 transition-colors duration-200"
          >
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

