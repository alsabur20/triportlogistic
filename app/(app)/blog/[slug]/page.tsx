import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getPostBySlug } from "@/lib/blog"
import { company } from "@/lib/company"
import { Calendar, User, Tag, ArrowLeft, MessageCircle, Phone } from "lucide-react"

export const revalidate = 60 // Cache article for 60 seconds with on-demand background revalidation

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Article Not Found | Triport Logistics",
    }
  }

  const title = post.metaTitle || `${post.title} | Triport Logistics Blog`
  const description = post.metaDescription || post.excerpt
  const coverUrl =
    typeof post.coverImage === "object"
      ? post.coverImage?.url || company.seo.ogImage
      : post.coverImage || company.seo.ogImage

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${company.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [company.name],
      images: [
        {
          url: coverUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [coverUrl],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const coverUrl =
    typeof post.coverImage === "object"
      ? post.coverImage?.url || "/header.jpg"
      : post.coverImage || "/header.jpg"

  const categoryName =
    typeof post.category === "object"
      ? post.category?.name || "Logistics"
      : "Logistics"

  const authorName =
    typeof post.author === "object"
      ? post.author?.name || company.name
      : company.name

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recent"

  // Structured Data: Article + Breadcrumb
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: coverUrl.startsWith("http") ? coverUrl : `${company.url}${coverUrl}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: authorName,
      url: company.url,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: company.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${company.url}/blog/${post.slug}`,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: company.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${company.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${company.url}/blog/${post.slug}`,
      },
    ],
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageHero asH1={false} title={post.title} backgroundImage={coverUrl} />

      <article className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-[#ff4800] hover:underline gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-[#ff4800] text-white text-xs font-bold px-3 py-1 flex items-center gap-1 uppercase tracking-wider">
                <Tag className="w-3 h-3" />
                {categoryName}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-gray-400" />
                {authorName}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full mb-12 rounded-none overflow-hidden shadow-lg bg-gray-100">
            <Image
              src={coverUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            {post.content ? (
              typeof post.content === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <RenderLexicalContent content={post.content} />
              )
            ) : (
              <ArticleFallbackContent slug={post.slug} />
            )}
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 sm:p-10 bg-gray-900 text-white rounded-none shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1 pr-0 lg:pr-6">
              <div className="text-[#ff4800] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                Need Fast Freight Support?
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
                Get a Customized Shipping Quote
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Speak directly with our commercial freight forwarders in Dubai, UAE. We guarantee competitive rates and end-to-end tracking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto shrink-0">
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#ff4800] hover:bg-[#e63f00] text-white font-bold px-7 py-3.5 transition-all gap-2.5 text-sm text-center whitespace-nowrap shadow-md"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-7 py-3.5 transition-all gap-2.5 text-sm text-center whitespace-nowrap shadow-md"
              >
                <Phone className="w-4 h-4 shrink-0 text-gray-700" />
                <span>Contact Office</span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

function RenderLexicalNode({ node, idx }: { node: any; idx: number }) {
  if (!node) return null

  // Text leaf node with formatting support
  if (node.type === "text") {
    let content: React.ReactNode = node.text || ""
    const format = node.format || 0
    // Bitwise flags: 1 = bold, 2 = italic, 8 = underline, 16 = strikethrough, 32 = code
    if (format & 1) content = <strong>{content}</strong>
    if (format & 2) content = <em>{content}</em>
    if (format & 8) content = <u>{content}</u>
    if (format & 16) content = <s>{content}</s>
    if (format & 32) content = <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm">{content}</code>
    return <span key={idx}>{content}</span>
  }

  // Links
  if (node.type === "link") {
    const url = node.fields?.url || node.url || "#"
    const target = node.fields?.newTab ? "_blank" : undefined
    const rel = target ? "noopener noreferrer" : undefined
    return (
      <a
        key={idx}
        href={url}
        target={target}
        rel={rel}
        className="text-[#ff4800] hover:underline font-semibold"
      >
        {node.children?.map((child: any, cIdx: number) => (
          <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
        ))}
      </a>
    )
  }

  // Headings
  if (node.type === "heading") {
    const children = node.children?.map((child: any, cIdx: number) => (
      <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
    ))
    if (node.tag === "h1") return <h1 key={idx} className="text-3xl font-extrabold text-gray-900 mt-8 mb-4">{children}</h1>
    if (node.tag === "h3") return <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
    return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
  }

  // Paragraph
  if (node.type === "paragraph") {
    return (
      <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
        {node.children?.map((child: any, cIdx: number) => (
          <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
        ))}
      </p>
    )
  }

  // Lists
  if (node.type === "list") {
    const isOrdered = node.listType === "number"
    const ListTag = isOrdered ? "ol" : "ul"
    return (
      <ListTag
        key={idx}
        className={`mb-6 pl-6 space-y-2 text-gray-700 ${isOrdered ? "list-decimal" : "list-disc"}`}
      >
        {node.children?.map((child: any, cIdx: number) => (
          <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
        ))}
      </ListTag>
    )
  }

  // List item
  if (node.type === "listitem") {
    return (
      <li key={idx} className="leading-relaxed">
        {node.children?.map((child: any, cIdx: number) => (
          <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
        ))}
      </li>
    )
  }

  // Blockquote
  if (node.type === "quote") {
    return (
      <blockquote
        key={idx}
        className="border-l-4 border-[#ff4800] pl-4 italic text-gray-700 my-6 bg-gray-50 py-3 rounded-r"
      >
        {node.children?.map((child: any, cIdx: number) => (
          <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
        ))}
      </blockquote>
    )
  }

  // Fallback for container nodes with children
  if (node.children) {
    return (
      <div key={idx}>
        {node.children.map((child: any, cIdx: number) => (
          <RenderLexicalNode key={cIdx} node={child} idx={cIdx} />
        ))}
      </div>
    )
  }

  return null
}

function RenderLexicalContent({ content }: { content: any }) {
  if (!content || !content.root || !content.root.children) {
    return null
  }

  return (
    <div>
      {content.root.children.map((node: any, idx: number) => (
        <RenderLexicalNode key={idx} node={node} idx={idx} />
      ))}
    </div>
  )
}

function ArticleFallbackContent({ slug }: { slug: string }) {
  if (slug === "china-to-dubai-freight-forwarding-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview of the China–UAE Maritime Trade Corridor</h2>
          <p className="text-gray-700 leading-relaxed">
            China remains the United Arab Emirates&apos; largest trading partner, with bilateral trade surpassing $95 billion annually. Commercial importers across Dubai, Abu Dhabi, and the Northern Emirates regularly procure industrial machinery, electronics, building materials, textiles, and consumer goods from primary Chinese export hubs including Shenzhen, Ningbo-Zhoushan, Shanghai, Guangzhou, and Qingdao.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            At Triport Logistics, we provide end-to-end freight management connecting China&apos;s leading container ports with Jebel Ali Port (DP World) and Dubai International Airport (DXB), guaranteeing competitive ocean contracts, space protection during peak seasons (such as Golden Week and Chinese New Year), and swift UAE customs release.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sea Freight vs Air Freight: Transit Times from China to Dubai</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm font-semibold">
                  <th className="p-3 border border-gray-200">Origin Port / City</th>
                  <th className="p-3 border border-gray-200">Ocean Transit to Jebel Ali (Days)</th>
                  <th className="p-3 border border-gray-200">Air Cargo Transit to DXB (Hours)</th>
                  <th className="p-3 border border-gray-200">Recommended Cargo Type</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Shanghai (SHA / PVG)</td>
                  <td className="p-3 border border-gray-200">14 - 18 Days</td>
                  <td className="p-3 border border-gray-200">24 - 48 Hours</td>
                  <td className="p-3 border border-gray-200">Machinery, High-Tech, FCL/LCL</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Ningbo-Zhoushan (NGB)</td>
                  <td className="p-3 border border-gray-200">14 - 17 Days</td>
                  <td className="p-3 border border-gray-200">36 - 48 Hours</td>
                  <td className="p-3 border border-gray-200">Hardware, Automotive, Solar Panels</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Shenzhen / Yantian (SZX)</td>
                  <td className="p-3 border border-gray-200">12 - 15 Days</td>
                  <td className="p-3 border border-gray-200">24 Hours (Direct)</td>
                  <td className="p-3 border border-gray-200">Consumer Electronics, Telecom</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Guangzhou / Nansha (CAN)</td>
                  <td className="p-3 border border-gray-200">13 - 16 Days</td>
                  <td className="p-3 border border-gray-200">24 - 36 Hours</td>
                  <td className="p-3 border border-gray-200">Textiles, Furniture, Lighting</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Qingdao (TAO)</td>
                  <td className="p-3 border border-gray-200">18 - 22 Days</td>
                  <td className="p-3 border border-gray-200">48 Hours</td>
                  <td className="p-3 border border-gray-200">Chemicals, Heavy Machinery, Tyres</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Incoterms for China–UAE Shipments: FOB vs CIF vs DDP</h2>
          <p className="text-gray-700 leading-relaxed">
            Selecting the right Incoterm is critical for commercial cost control:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li>
              <strong>FOB (Free on Board) — Highly Recommended:</strong> Your Chinese supplier delivers goods to the port of origin, and Triport Logistics manages ocean freight, local UAE clearance, and last-mile transport. This gives you 100% visibility over freight rates and prevents hidden destination terminal fees.
            </li>
            <li>
              <strong>CIF (Cost, Insurance &amp; Freight):</strong> The supplier arranges sea shipping to Jebel Ali. However, consignees frequently face inflated local delivery order (D/O) fees from foreign freight brokers upon port arrival.
            </li>
            <li>
              <strong>DDP (Delivered Duty Paid):</strong> Full door-to-door turnkey delivery including all duties, VAT, and transport, managed under one predictable invoice by Triport Logistics.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Essential Documentation for Dubai Customs Clearance</h2>
          <p className="text-gray-700 leading-relaxed">
            All shipments arriving at Jebel Ali Port or Dubai International Airport must submit digital documents via Dubai Trade &apos;s Mirsal II system prior to vessel arrival:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li><strong>Original Commercial Invoice:</strong> Attested, stating HS codes, currency, and unit values.</li>
            <li><strong>Packing List:</strong> Detailing net/gross weight, dimensions, and container numbers.</li>
            <li><strong>Certificate of Origin (CO):</strong> Legalized by China Council for the Promotion of International Trade (CCPIT).</li>
            <li><strong>Original Bill of Lading (B/L) or Express Release Sea Waybill:</strong> For port release.</li>
            <li><strong>UAE Customs Code:</strong> Linked to your active Trade License or Freezone entity.</li>
          </ul>
        </div>
      </div>
    )
  }

  if (slug === "dubai-customs-clearance-mirsal-ii-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What is Mirsal II in Dubai Customs?</h2>
          <p className="text-gray-700 leading-relaxed">
            Mirsal II is Dubai Customs&apos; electronic clearance platform integrated into the Dubai Trade portal. It automates commercial cargo processing across sea, air, and land ports, facilitating rapid document submission, risk screening, tariff duty payments, and customs inspection scheduling.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            With over two decades of local customs brokerage experience, Triport Logistics operates direct electronic data interchange (EDI) connectivity with Dubai Customs, securing clearance approvals often within 4 to 12 hours of vessel manifest submission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Standard UAE Customs Tariffs and Duty Structure</h2>
          <p className="text-gray-700 leading-relaxed">
            The UAE applies the GCC Unified Customs Tariff:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li><strong>Standard General Cargo:</strong> 5% Cost, Insurance, and Freight (CIF) value.</li>
            <li><strong>Free Zone Inbound Cargo:</strong> 0% customs duty for goods stored, processed, or re-exported from free zones like JAFZA, DAFZA, and Dubai South.</li>
            <li><strong>Duty-Exempt Categories:</strong> Pharmaceuticals, staple foodstuffs, agricultural inputs, and specific industrial raw materials with approved industrial exemption licenses from the Ministry of Industry and Advanced Technology (MoIAT).</li>
            <li><strong>UAE Value Added Tax (VAT):</strong> 5% applicable on import value (CIF + Customs Duty), deferred for registered VAT tax entities via reverse charge mechanism.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Step-by-Step Port Clearance Workflow</h2>
          <ol className="list-decimal pl-6 space-y-3 mt-3 text-gray-700">
            <li><strong>Delivery Order (D/O) Issuance:</strong> Settle ocean or air carrier local charges and obtain electronic Delivery Order.</li>
            <li><strong>Mirsal II Declaration Submission:</strong> Upload invoice, packing list, certificate of origin, and HS codes.</li>
            <li><strong>Customs Duty &amp; Inspection Assessment:</strong> Mirsal II automated risk engine routes consignment to Green (instant clearance), Yellow (document audit), or Red (physical inspection at container terminal).</li>
            <li><strong>Gate Pass &amp; Container Release:</strong> Obtain Dubai Port DP World e-Token, book collection slot, and transport container to warehouse.</li>
          </ol>
        </div>
      </div>
    )
  }

  if (slug === "fcl-vs-lcl-sea-freight-optimization-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Understanding Containerized Shipping: FCL vs LCL</h2>
          <p className="text-gray-700 leading-relaxed">
            When shipping commercial ocean cargo, selecting between <strong>Full Container Load (FCL)</strong> and <strong>Less than Container Load (LCL)</strong> directly affects your landed cost, transit predictability, and inventory turnover.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Container Specifications &amp; Capacity Reference</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm font-semibold">
                  <th className="p-3 border border-gray-200">Container Type</th>
                  <th className="p-3 border border-gray-200">Usable Volume (CBM)</th>
                  <th className="p-3 border border-gray-200">Max Payload (KG)</th>
                  <th className="p-3 border border-gray-200">Best For</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">20ft Standard GP</td>
                  <td className="p-3 border border-gray-200">~28 - 30 CBM</td>
                  <td className="p-3 border border-gray-200">21,700 kg</td>
                  <td className="p-3 border border-gray-200">Heavy dense cargo (metals, paper, chemicals)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">40ft Standard GP</td>
                  <td className="p-3 border border-gray-200">~58 - 62 CBM</td>
                  <td className="p-3 border border-gray-200">26,500 kg</td>
                  <td className="p-3 border border-gray-200">Voluminous general merchandise, textiles, toys</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">40ft High Cube (HC)</td>
                  <td className="p-3 border border-gray-200">~68 - 72 CBM</td>
                  <td className="p-3 border border-gray-200">26,500 kg</td>
                  <td className="p-3 border border-gray-200">Lightweight high-volume cargo, furniture, electronics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. The Economic Tipping Point: When to Switch from LCL to FCL</h2>
          <p className="text-gray-700 leading-relaxed">
            As a rule of thumb in international ocean shipping:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li><strong>Shipments under 12 CBM:</strong> LCL is usually the most cost-efficient option, as you only pay for the exact volume and weight consumed.</li>
            <li><strong>Shipments between 13 to 18 CBM:</strong> The &apos;break-even zone&apos; where total LCL destination handling, CFS deconsolidation, and documentation costs often equal the flat rate of a 20ft full container.</li>
            <li><strong>Shipments over 18 CBM:</strong> FCL is almost universally superior in price, security, and transit speed because containers are loaded at origin and dispatched directly to your destination facility without warehouse de-stuffing delays.</li>
          </ul>
        </div>
      </div>
    )
  }

  if (slug === "gcc-cross-border-bonded-trucking-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Dubai as the GCC&apos;s Transshipment Epicenter</h2>
          <p className="text-gray-700 leading-relaxed">
            International corporations utilize Dubai&apos;s free zones (JAFZA, Dubai South) as regional consolidation points. By shipping ocean freight into Jebel Ali and dispatching onward consignments via bonded road trucks, companies achieve significant cost reductions compared to direct ocean shipping to congested regional ports, while cutting transit times by more than 60%.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. GCC Cross-Border Transit Timelines</h2>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li><strong>Dubai to Riyadh, Saudi Arabia:</strong> 48 to 72 hours door-to-door via Al Batha border crossing.</li>
            <li><strong>Dubai to Jeddah / Western Province, KSA:</strong> 3 to 4 days overland.</li>
            <li><strong>Dubai to Muscat / Sohar, Oman:</strong> 24 to 36 hours via Hatta / Al Wajajah border.</li>
            <li><strong>Dubai to Doha, Qatar:</strong> 2 to 3 days overland via transit corridor.</li>
            <li><strong>Dubai to Kuwait City &amp; Bahrain:</strong> 3 to 4 days bonded road freight.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fleet Capabilities &amp; Regulatory Compliance</h2>
          <p className="text-gray-700 leading-relaxed">
            Triport Logistics operates a modern, GPS-monitored fleet meeting all GCC transport authority regulations:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li>40ft standard and heavy-duty container skeletal chassis.</li>
            <li>Temperature-monitored refrigerated reefers (-25°C to +25°C) for pharma and confectionery.</li>
            <li>Curtainsider tautliners and flatbeds for rapid industrial side-loading.</li>
            <li>Low-bed heavy haulers for out-of-gauge oilfield and construction machinery.</li>
            <li>Full assistance with Saudi Saber conformity, Bayan declaration, and border transit manifests.</li>
          </ul>
        </div>
      </div>
    )
  }

  if (slug === "air-freight-vs-sea-freight-commercial-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Strategic Modal Selection for Enterprise Supply Chains</h2>
          <p className="text-gray-700 leading-relaxed">
            Balancing speed, cost, and cash flow velocity requires supply chain managers to strategically evaluate whether consignments belong in the air or at sea. Dubai International Airport (DXB) and Jebel Ali Port (JAFZA) provide the world&apos;s premier multi-modal air-sea bridge.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Chargeable Weight Calculation: Air vs Ocean</h2>
          <p className="text-gray-700 leading-relaxed">
            Understanding carrier billing formulas prevents unexpected surcharges:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li>
              <strong>Air Cargo Volumetric Ratio:</strong> 1 CBM = 167 kg (Formula: Length × Width × Height in cm / 6,000). Airlines bill whichever is higher between actual gross weight and volumetric weight.
            </li>
            <li>
              <strong>Ocean LCL Weight/Measurement (W/M):</strong> 1 CBM = 1,000 kg (1 metric ton). Ocean carriers bill on whichever figure produces greater revenue.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sea-Air Hybrid Solutions: The Best of Both Worlds</h2>
          <p className="text-gray-700 leading-relaxed">
            For consignments where pure air freight is cost-prohibitive but pure ocean freight is too slow, Triport Logistics offers specialized <strong>Sea-Air multimodal routing</strong> via Dubai. Goods sail from Far East ports to Jebel Ali, clear customs under bonded transit, and are transferred to DXB within 8 hours for onward commercial flights to Europe, Africa, or the Americas. This cuts ocean transit time in half at approximately 40% the cost of direct air cargo.
          </p>
        </div>
      </div>
    )
  }

  if (slug === "jebel-ali-port-logistics-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview of DP World Jebel Ali Port (JEA)</h2>
          <p className="text-gray-700 leading-relaxed">
            Jebel Ali Port (UN/LOCODE: <strong>AEJEA</strong>) is the flagship deepwater gateway operated by DP World, standing as the 9th busiest container terminal globally and the largest man-made harbor ever constructed. Located 35 kilometers southwest of Dubai city center, Jebel Ali serves over 3.5 billion people across the Middle East, Indian Subcontinent, CIS, and East Africa trade corridors.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Handling in excess of 14 million TEUs (Twenty-Foot Equivalent Units) annually, the port features four mega-terminals equipped with semi-automated tandem-lift quay cranes capable of working the world&apos;s largest Ultra Large Container Vessels (ULCVs) carrying over 24,000 TEUs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Jebel Ali Terminal Architecture (T1 through T4)</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm font-semibold">
                  <th className="p-3 border border-gray-200">Terminal</th>
                  <th className="p-3 border border-gray-200">Quay Depth</th>
                  <th className="p-3 border border-gray-200">Annual Capacity</th>
                  <th className="p-3 border border-gray-200">Primary Specialization</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Terminal 1 (T1)</td>
                  <td className="p-3 border border-gray-200">14.0 - 16.0m</td>
                  <td className="p-3 border border-gray-200">~9.0M TEU</td>
                  <td className="p-3 border border-gray-200">Mainline transshipment, feeder networks &amp; general cargo</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Terminal 2 (T2)</td>
                  <td className="p-3 border border-gray-200">17.0m</td>
                  <td className="p-3 border border-gray-200">~6.0M TEU</td>
                  <td className="p-3 border border-gray-200">Ultra Large Container Vessels (ULCV) &amp; automated twin cranes</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Terminal 3 (T3)</td>
                  <td className="p-3 border border-gray-200">18.0m</td>
                  <td className="p-3 border border-gray-200">~4.0M TEU</td>
                  <td className="p-3 border border-gray-200">High-efficiency automated rail-mounted gantry (ARMG) operations</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Terminal 4 (T4)</td>
                  <td className="p-3 border border-gray-200">18.0m</td>
                  <td className="p-3 border border-gray-200">Expandable 3.1M TEU</td>
                  <td className="p-3 border border-gray-200">Next-gen BoxBay high-bay container staging &amp; solar-powered handling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Avoiding Demurrage &amp; Detention Penalties at Jebel Ali</h2>
          <p className="text-gray-700 leading-relaxed">
            One of the most frequent sources of unexpected operational expense for UAE commercial importers is terminal demurrage and carrier detention surcharges. Understanding the distinct definitions and timelines is essential:
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-3 text-gray-700">
            <li>
              <strong>Demurrage (Port Storage):</strong> Charged by the port terminal when a loaded container remains inside Jebel Ali yard past the allowable free days (typically 5 to 10 calendar days depending on ocean line contract).
            </li>
            <li>
              <strong>Detention (Equipment Holding):</strong> Charged by the shipping line from the moment the container leaves the terminal gate until the empty container is safely returned to the carrier’s nominated container depot (usually 7 to 14 free days).
            </li>
            <li>
              <strong>How Triport Protects Your Shipments:</strong> With our dedicated port operations desk located adjacent to JAFZA South, Triport Logistics pre-files Mirsal II declarations prior to vessel discharge, coordinates terminal haulage e-tokens automatically, and manages direct de-stuffing into our bonded 3PL warehouses within 24 to 48 hours of discharge, eliminating detention risk.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Step-by-Step Gate In / Gate Out Container Drayage Workflow</h2>
          <ol className="list-decimal pl-6 space-y-3 mt-3 text-gray-700">
            <li><strong>Pre-Arrival Notice (PAN) &amp; Manifest Verification:</strong> Received 48-72 hours prior to vessel arrival at Jebel Ali berth.</li>
            <li><strong>Shipping Line Delivery Order (D/O):</strong> Settling ocean freight and local handling charges to release the electronic Delivery Order.</li>
            <li><strong>Mirsal II Customs Clearance:</strong> Clearing Dubai Customs, passing inspection criteria, and paying 5% duty or submitting Free Zone Bill of Entry.</li>
            <li><strong>DP World Dubai Trade e-Token:</strong> Booking dedicated truck entry time-slots to avoid terminal traffic queues.</li>
            <li><strong>Terminal Drayage &amp; Delivery:</strong> Heavy-duty skeletal container trucks transport cargo to your facility or free zone warehouse across the UAE.</li>
          </ol>
        </div>
      </div>
    )
  }

  if (slug === "uae-freezone-customs-jafza-dafza-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Strategic Value of UAE Free Zones in Supply Chains</h2>
          <p className="text-gray-700 leading-relaxed">
            The UAE hosts over 40 multidisciplinary Free Zones, with the <strong>Jebel Ali Free Zone (JAFZA)</strong> and <strong>Dubai Airport Freezone (DAFZA)</strong> standing as the cornerstone hubs for international trade. Free zones function outside the standard domestic customs territory of the UAE, offering global corporations 100% foreign ownership, zero personal and corporate income taxes, and zero customs duty on imported merchandise stored or re-exported.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Core Types of Free Zone Customs Declarations under Mirsal II</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm font-semibold">
                  <th className="p-3 border border-gray-200">Declaration Type</th>
                  <th className="p-3 border border-gray-200">Customs Duty</th>
                  <th className="p-3 border border-gray-200">VAT Status</th>
                  <th className="p-3 border border-gray-200">Typical Commercial Use Case</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Import to Free Zone (FZ Bill)</td>
                  <td className="p-3 border border-gray-200">0% (Suspended)</td>
                  <td className="p-3 border border-gray-200">Out of scope / Suspended</td>
                  <td className="p-3 border border-gray-200">Goods arriving from overseas for storage, assembly, or re-export</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Free Zone to Local (Mainland)</td>
                  <td className="p-3 border border-gray-200">5% CIF payable</td>
                  <td className="p-3 border border-gray-200">5% VAT (Reverse charge)</td>
                  <td className="p-3 border border-gray-200">Selling stock from Free Zone warehouse into Dubai or Abu Dhabi market</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Free Zone to Free Zone Transfer</td>
                  <td className="p-3 border border-gray-200">0% (Bonded transit)</td>
                  <td className="p-3 border border-gray-200">Suspended</td>
                  <td className="p-3 border border-gray-200">Inter-free zone cargo transfer (e.g. JAFZA to DAFZA or KIZAD)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Free Zone Transit / Re-Export</td>
                  <td className="p-3 border border-gray-200">0% (Customs deposit/guarantee)</td>
                  <td className="p-3 border border-gray-200">0% Zero-rated</td>
                  <td className="p-3 border border-gray-200">Re-exporting containers overland to Saudi Arabia or air freight to Europe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Crucial Compliance Checklist for Free Zone Importers</h2>
          <ul className="list-disc pl-6 space-y-3 mt-3 text-gray-700">
            <li>
              <strong>Customs Code Registration:</strong> Ensure your Free Zone business license has an active Customs Code issued by Dubai Customs.
            </li>
            <li>
              <strong>Deposit Management:</strong> Re-export declarations require a refundable customs deposit or bank guarantee (typically 5% of invoice value), which is released upon presenting validated exit manifests at the border.
            </li>
            <li>
              <strong>Physical Verification &amp; Inspection:</strong> Dubai Customs carries out rigorous random inventory audits. Triport Logistics provides computerized warehouse management system (WMS) reports that match physical stock counts with Mirsal II customs ledgers.
            </li>
          </ul>
        </div>
      </div>
    )
  }

  if (slug === "cold-chain-logistics-dubai-uae-guide") {
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. The Critical Demand for Cold Chain in the Gulf Climate</h2>
          <p className="text-gray-700 leading-relaxed">
            With summer ambient temperatures frequently exceeding 45°C (113°F) across the Arabian Gulf, maintaining unbroken temperature control across the supply chain is critical. Whether importing temperature-critical biological pharmaceuticals, clinical vaccines, fine confectioneries, or fresh perishables, any temperature excursion poses severe health risks and devastating commercial cargo write-offs.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Triport Logistics provides GDP-compliant (Good Distribution Practice) cold chain management, combining state-of-the-art refrigerated reefer maritime containers, active and passive dry-ice air freight packaging, and validated multi-temperature 3PL storage in Dubai.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Temperature Zones and Commodity Classifications</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800 text-sm font-semibold">
                  <th className="p-3 border border-gray-200">Temperature Band</th>
                  <th className="p-3 border border-gray-200">Range (°C)</th>
                  <th className="p-3 border border-gray-200">Common Cargo Commodities</th>
                  <th className="p-3 border border-gray-200">Equipment &amp; Packaging</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Deep Frozen / Cryogenic</td>
                  <td className="p-3 border border-gray-200">-80°C to -20°C</td>
                  <td className="p-3 border border-gray-200">mRNA vaccines, blood plasma, biological samples</td>
                  <td className="p-3 border border-gray-200">Dry-ice active containers (Envirotainer, va-Q-tec)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Standard Frozen</td>
                  <td className="p-3 border border-gray-200">-18°C to -25°C</td>
                  <td className="p-3 border border-gray-200">Frozen seafood, poultry, meat, ice cream</td>
                  <td className="p-3 border border-gray-200">Marine reefer containers (Carrier Transicold, Thermo King)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Chilled / Cold</td>
                  <td className="p-3 border border-gray-200">+2°C to +8°C</td>
                  <td className="p-3 border border-gray-200">Insulin, biotech injectables, fresh dairy, floral</td>
                  <td className="p-3 border border-gray-200">Real-time IoT datalogger reefers with automated alerts</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200 font-medium">Controlled Ambient (CRT)</td>
                  <td className="p-3 border border-gray-200">+15°C to +25°C</td>
                  <td className="p-3 border border-gray-200">Oral solid dosages, luxury cosmetics, confectionery</td>
                  <td className="p-3 border border-gray-200">Insulated thermal blanket liners &amp; air-conditioned trucking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. GDP Compliance &amp; Real-Time IoT Temperature Telemetry</h2>
          <p className="text-gray-700 leading-relaxed">
            In compliance with UAE Ministry of Health and Prevention (MOHAP) and Dubai Municipality food safety guidelines, Triport Logistics equips every cold chain shipment with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
            <li><strong>Continuous USB and Cellular IoT Dataloggers:</strong> Real-time temperature, humidity, light exposure, and GPS geofence tracking.</li>
            <li><strong>Tarmac Thermal Protection:</strong> Reflective pallet blankets during transit between aircraft cargo hold and Dubai Airport temperature-controlled Coolport facilities.</li>
            <li><strong>Reefer Plug-in Monitoring:</strong> Verified 24/7 shore-power connection while reefer containers are berthed at Jebel Ali container yard.</li>
            <li><strong>Complete Audit-Ready Chain of Custody:</strong> Instant PDF download of full temperature journey graphs submitted with customs clearance manifests.</li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">
        International B2B logistics requires precision planning, rigorous regulatory compliance, and reliable multi-modal carrier partnerships. Whether shipping ocean containers, expedited air cargo, or bonded cross-border freight across the GCC, Triport Logistics delivers end-to-end reliability and transparent tracking.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Speak directly with our Dubai freight forwarding team for competitive contract rates and custom supply chain routing tailored to your business operations.
      </p>
    </div>
  )
}

