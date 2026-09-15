const faqs = [
  {
    question: "Which international destinations and global routes do you cover?",
    answer:
      "Triport Logistics provides worldwide freight forwarding services connecting Asia, Europe, North America, the Middle East, and Africa. With key operational hubs in Dubai (UAE) and Lahore (Pakistan), we manage end-to-end air, sea, and land cargo to and from major commercial centers across the globe.",
  },
  {
    question: "How long does international air freight shipping take?",
    answer:
      "Standard international air freight typically takes between 1 to 5 business days depending on the origin, destination, and customs clearance procedures. Frequent routes between key international hubs (such as UAE, Pakistan, Europe, and Asia) often arrive within 1 to 3 business days. We partner with premier commercial airlines and air cargo carriers to ensure optimal transit times.",
  },
  {
    question: "What is the most cost-effective option for shipping worldwide?",
    answer:
      "Ocean freight (sea freight) is the most economical solution for large volumes, bulk goods, and heavy containerized cargo (both FCL and LCL) on international routes. For time-sensitive or high-value shipments, air freight offers unmatched speed. We also offer multimodal logistics combining sea, air, and ground transport to balance speed and cost.",
  },
  {
    question: "Do you handle international customs clearance and documentation?",
    answer:
      "Yes. Triport Logistics manages comprehensive import/export documentation and customs brokerage worldwide. Our specialists ensure full compliance with customs declarations, tariff codes, commercial invoices, certificates of origin, and inspection requirements at international airports, seaports, and cross-border checkpoints.",
  },
  {
    question: "Do you provide international door-to-door cargo delivery?",
    answer:
      "Yes. We offer complete door-to-door freight forwarding worldwide. Our service encompasses origin pickup, export documentation, international air or ocean transport, customs clearance at the destination port, and last-mile ground delivery directly to your facility or warehouse.",
  },
  {
    question: "What types of ocean freight services (FCL & LCL) do you offer?",
    answer:
      "We provide Full Container Load (FCL: 20ft, 40ft, and high-cube containers) and Less than Container Load (LCL cargo consolidation) across all major global shipping lanes. We manage booking, port handling, container drayage, and end-to-end tracking to and from major seaports globally.",
  },
  {
    question: "What types of cargo can Triport Logistics transport globally?",
    answer:
      "We handle a broad spectrum of commercial freight, including industrial machinery, electronics, automotive components, textiles, consumer products, temperature-sensitive goods, and oversized project cargo. We serve international manufacturers, distributors, trading companies, and e-commerce enterprises worldwide.",
  },
  {
    question: "How can I request a freight quote for international shipping?",
    answer:
      "You can obtain a free, competitive freight quote by submitting our online quote form, calling our direct line at +971 56 656 9927, emailing info@triportlogistic.com, or contacting our logistics desk via WhatsApp. Our team responds promptly with customized rate options based on your cargo specifications and delivery timeline.",
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
            Everything you need to know about our global freight forwarding, international shipping, and logistics solutions worldwide.
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
