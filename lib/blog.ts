import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

export interface BlogPost {
  id: string | number
  title: string
  slug: string
  excerpt: string
  content?: any
  coverImage?: {
    url?: string
    alt?: string
  } | string
  category?: {
    name?: string
    slug?: string
  } | string
  author?: {
    name?: string
  } | string
  publishedAt?: string
  metaTitle?: string
  metaDescription?: string
}

export const getPublishedPosts = cache(async (): Promise<BlogPost[]> => {
  try {
    if (!process.env.DATABASE_URI) {
      return getDemoPosts()
    }

    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
      depth: 2,
    })

    if (!result.docs || result.docs.length === 0) {
      return getDemoPosts()
    }

    return result.docs as unknown as BlogPost[]
  } catch (error) {
    console.warn('Could not fetch posts from database, using fallback:', error)
    return getDemoPosts()
  }
})

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  try {
    if (!process.env.DATABASE_URI) {
      return getDemoPosts().find((p) => p.slug === slug) || null
    }

    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: slug,
        },
        status: {
          equals: 'published',
        },
      },
      depth: 2,
      limit: 1,
    })

    if (!result.docs || result.docs.length === 0) {
      return getDemoPosts().find((p) => p.slug === slug) || null
    }

    return result.docs[0] as unknown as BlogPost
  } catch (error) {
    console.warn('Could not fetch post by slug, using fallback:', error)
    return getDemoPosts().find((p) => p.slug === slug) || null
  }
})

// Initial high-ranking seed logistics articles for immediate SEO authority
function getDemoPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'Complete Guide to Air Cargo Shipping from Dubai to Pakistan',
      slug: 'dubai-to-pakistan-air-cargo-guide',
      excerpt:
        'Everything you need to know about air freight rates, delivery timelines, required customs documents, and clearance procedures for cargo from UAE to Pakistan.',
      category: { name: 'Air Freight', slug: 'air-freight' },
      publishedAt: '2025-09-10T10:00:00.000Z',
      coverImage: {
        url: '/header.jpg',
        alt: 'Air cargo shipping from Dubai to Pakistan',
      },
      metaTitle: 'Air Cargo Dubai to Pakistan: Complete Shipping & Customs Guide',
      metaDescription:
        'Comprehensive guide on air freight shipping from Dubai to Pakistan. Learn transit times, documentation, customs clearance, and cost-saving tips.',
    },
    {
      id: '2',
      title: 'FCL vs. LCL Sea Freight: Which Ocean Shipping Method Is Right for You?',
      slug: 'fcl-vs-lcl-sea-freight-guide',
      excerpt:
        'Compare Full Container Load (FCL) vs Less than Container Load (LCL) ocean freight. Discover which option saves your business money on international trade routes.',
      category: { name: 'Sea Freight', slug: 'sea-freight' },
      publishedAt: '2025-09-05T08:30:00.000Z',
      coverImage: {
        url: '/header2.jpg',
        alt: 'Ocean sea freight container shipping',
      },
      metaTitle: 'FCL vs LCL Sea Freight: Ocean Shipping Cost & Transit Comparison',
      metaDescription:
        'Understand the differences between FCL and LCL sea freight. Practical advice to help businesses choose the best shipping method for international ocean cargo.',
    },
    {
      id: '3',
      title: 'How to Avoid Customs Delays on International Freight Shipments',
      slug: 'how-to-avoid-customs-delays-freight',
      excerpt:
        'Top 5 reasons cargo gets held up at international customs checkpoints, and the exact documentation checklist to ensure smooth clearance every time.',
      category: { name: 'Customs & Compliance', slug: 'customs' },
      publishedAt: '2025-08-28T14:00:00.000Z',
      coverImage: {
        url: '/header3.jpg',
        alt: 'Customs clearance and international logistics documents',
      },
      metaTitle: 'How to Prevent Customs Delays: Essential Freight Documentation Checklist',
      metaDescription:
        'Avoid expensive customs delays and port demurrage. Check out our proven customs documentation checklist for international freight forwarders.',
    },
  ]
}

