import { company } from "@/lib/company"

const faqs = [
  {
    question: "Which global trade corridors and shipping routes does Triport Logistics cover?",
    answer:
      "Triport Logistics connects the UAE with over 150 international commercial ports and airports across Asia, Europe, North America, the Middle East, and Africa. Key inbound corridors include China (Shanghai, Ningbo, Shenzhen, Guangzhou), Europe (Germany, Netherlands, Italy, UK), the United States, and India directly into Jebel Ali Port and Dubai International Airport (DXB). We also manage outbound and GCC cross-border freight into Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.",
  },
  {
    question: "How fast can you clear commercial shipments through Dubai Customs (Mirsal II)?",
    answer:
      "As an authorized UAE customs broker with direct electronic data interchange (EDI) connectivity to Dubai Trade's Mirsal II system, we typically secure customs clearance within 4 to 12 hours of cargo manifest submission. We handle import/export declarations, Free Zone bills of entry (JAFZA, DAFZA, KIZAD), duty exemptions under Ministry of Industry and Advanced Technology (MoIAT), and inspection coordination with Dubai Municipality.",
  },
  {
    question: "Do you offer bonded cross-border road trucking from Dubai to Saudi Arabia and the GCC?",
    answer:
      "Yes. We operate scheduled, GPS-monitored Full Truckload (FTL) and Less than Truckload (LTL) bonded road transport connecting Dubai logistics hubs to Riyadh, Jeddah, Dammam, Muscat, Doha, and Kuwait. Our fleet includes standard 40ft container skeletal trailers, enclosed dry boxes, low-beds for heavy equipment, and temperature-controlled refrigerated reefers (-25°C to +25°C) with full Bayan and Al Batha border clearance management.",
  },
  {
    question: "What is the difference between FCL and LCL ocean shipping, and which is right for my company?",
    answer:
      "Full Container Load (FCL) reserves an entire 20ft (approx 28-30 CBM) or 40ft/40ft HC (approx 58-70 CBM) shipping container exclusively for your goods. It is the fastest and most cost-effective option for consignments exceeding 12-14 CBM. Less than Container Load (LCL) consolidates multiple shippers' goods into a single container, allowing businesses to pay only for the volume (CBM) they occupy, ideal for shipments under 12 CBM.",
  },
  {
    question: "How is chargeable weight calculated for commercial air freight?",
    answer:
      "International airlines bill according to whichever is greater: gross physical weight in kilograms, or volumetric (dimensional) weight calculated using the standard IATA formula: (Length × Width × Height in cm) / 6,000. Our Dubai air freight team assists clients with cargo palletization and packaging optimization to minimize dimensional weight surcharges on commercial flights via Emirates SkyCargo and partner airlines.",
  },
  {
    question: "What commercial documentation is mandatory for importing into Dubai, UAE?",
    answer:
      "Mandatory documents include: (1) Original Commercial Invoice attested by the Chamber of Commerce, stating 6-digit HS codes and unit pricing; (2) Detailed Packing List specifying net/gross weights and packaging; (3) Legalized Certificate of Origin (COO); (4) Original Bill of Lading (B/L) or Airway Bill (AWB); and (5) Valid UAE Trade License with an active Customs Import Code.",
  },
  {
    question: "How can my enterprise request a commercial freight quote or volume contract?",
    answer:
      "You can submit your consignment parameters using our online B2B quote form on this page, connect directly with our rate desk on WhatsApp at +971 56 656 9927, or email procurement specifications to quotes@triportlogistic.com. Our commercial pricing team provides formal rate breakdowns and vessel/flight options within 2 business hours.",
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
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#ff4800] uppercase font-extrabold text-xs sm:text-sm tracking-wider">
            Commercial Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Answers to common questions about international freight forwarding, Dubai customs clearance, and global supply chain routing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 shadow-sm transition-all"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-[#ff4800] transition-colors">
                <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                <span className="shrink-0 text-[#ff4800] text-2xl font-bold group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm mb-4">Have specific cargo requirements or complex project cargo?</p>
          <a
            href={company.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold px-8 py-3.5 transition-colors shadow-md text-sm"
          >
            Consult with our Dubai Freight Desk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
