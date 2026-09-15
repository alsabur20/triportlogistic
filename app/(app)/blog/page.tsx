import { PageHero } from "@/components/page-hero"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { getPublishedPosts } from "@/lib/blog"
import { company } from "@/lib/company"
import { Calendar, ArrowRight, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Logistics Insights, Guides & Industry News | Triport Logistics",
  description:
    "Explore expert logistics guides, air freight tips, ocean shipping advice, and international trade insights from the specialists at Triport Logistics.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Logistics Insights & Industry News | Triport Logistics",
    description:
      "Expert freight forwarding guides, shipping tips, and global trade updates from Triport Logistics.",
    url: `${company.url}/blog`,
    images: [
      {
        url: company.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Triport Logistics Blog - Freight and Shipping Insights",
      },
    ],
  },
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

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
    ],
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="Logistics Insights & Guides"
        backgroundImage="/header.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#ff4800] uppercase font-extrabold mb-2">
              Industry Knowledge
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Latest Articles & Shipping Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Practical advice, market updates, and expert strategies to help your business optimize international supply chains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const coverUrl =
                typeof post.coverImage === "object"
                  ? post.coverImage?.url || "/header.jpg"
                  : post.coverImage || "/header.jpg"

              const categoryName =
                typeof post.category === "object"
                  ? post.category?.name || "Logistics"
                  : "Logistics"

              const formattedDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent"

              return (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={coverUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#ff4800] text-white text-xs font-bold px-3 py-1 flex items-center gap-1 uppercase tracking-wider">
                      <Tag className="w-3 h-3" />
                      {categoryName}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-xs text-gray-500 mb-3 gap-2">
                        <Calendar className="w-4 h-4 text-[#ff4800]" />
                        <time dateTime={post.publishedAt}>{formattedDate}</time>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ff4800] transition-colors mb-3 leading-snug">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#ff4800] font-semibold text-sm hover:underline gap-1"
                      >
                        Read Full Guide
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

