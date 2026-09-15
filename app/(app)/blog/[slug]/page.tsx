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

      <PageHero title={post.title} backgroundImage={coverUrl} />

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
                Speak directly with our freight forwarders in Dubai and Lahore. We guarantee competitive rates and end-to-end tracking.
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
  if (slug === "dubai-to-pakistan-air-cargo-guide") {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">1. Overview of the UAE–Pakistan Air Cargo Corridor</h2>
        <p>
          The trade route between the United Arab Emirates and Pakistan is one of the busiest cargo corridors in South Asia and the Middle East. With daily commercial flights connecting Dubai International (DXB) and Al Maktoum International (DWC) to major Pakistani hubs including Lahore (LHE), Karachi (KHI), and Islamabad (ISB), air freight is the gold standard for time-critical shipments.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">2. Key Transit Times</h2>
        <p>
          Direct airport-to-airport air cargo between Dubai and Pakistan typically takes <strong>24 to 48 hours</strong>. Door-to-door transit, which includes pickup from any UAE emirate and delivery to the recipient's premises in Pakistan, takes approximately <strong>3 to 5 business days</strong> depending on customs clearance duration.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">3. Essential Documentation Checklist</h2>
        <p>
          To avoid port demurrage and regulatory holds, verify that all standard shipping documents match exactly:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Airway Bill (AWB):</strong> Non-negotiable transport document issued by the carrier.</li>
          <li><strong>Commercial Invoice:</strong> Detailed breakdown of item description, HS codes, unit value, and total value in USD or AED.</li>
          <li><strong>Packing List:</strong> Itemized gross and net weight, dimensions, and carton counts.</li>
          <li><strong>Certificate of Origin:</strong> Issued by the local chamber of commerce.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">4. Working with Triport Logistics</h2>
        <p>
          Triport Logistics maintains dedicated operational teams in both Dubai (ACICO Business Park) and Lahore (Engineers Town). We handle complete customs brokerage, cargo consolidation, temperature-monitored handling, and bonded trucking to ensure your goods arrive securely and without delay.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <p>
        International logistics requires careful planning, robust documentation, and reliable carrier partnerships. Whether shipping by air, sea, or land, choosing an experienced freight forwarder ensures your supply chain operates with maximum predictability and efficiency.
      </p>
      <p>
        Contact our operations team for customized routing options and competitive freight quotes tailored to your exact cargo volume and timeline.
      </p>
    </div>
  )
}

