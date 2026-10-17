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
  readTime?: string
  keywords?: string[]
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

// Seed enterprise B2B logistics guides for maximum search engine authority and AI retrieval
export function getDemoPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'China to Dubai Freight Forwarding: The Complete B2B Importer Guide to Ocean & Air Shipping',
      slug: 'china-to-dubai-freight-forwarding-guide',
      excerpt:
        'A comprehensive guide for UAE commercial importers sourcing goods from China. Detailed breakdown of ocean freight transit times from Shanghai and Ningbo to Jebel Ali, air cargo via DXB, customs duties, and required documentation.',
      category: { name: 'Trade Corridors', slug: 'trade-corridors' },
      publishedAt: '2026-03-15T09:00:00.000Z',
      readTime: '8 min read',
      coverImage: {
        url: '/hero-ocean.jpg',
        alt: 'China to Dubai container shipping vessel at Jebel Ali Port',
      },
      metaTitle: 'China to Dubai Freight Forwarding Guide',
      metaDescription:
        'Complete guide to shipping freight from China to Dubai, UAE. Compare FCL vs LCL ocean container rates, air cargo transit, Dubai Customs duty clearance, and JAFZA regulations.',
      keywords: ['China to Dubai freight', 'shipping from China to UAE', 'Jebel Ali container shipping', 'Dubai customs clearance China goods'],
    },
    {
      id: '2',
      title: 'Dubai Customs Clearance & Mirsal II: Documentation, HS Codes and Duty Exemption Rules',
      slug: 'dubai-customs-clearance-mirsal-ii-guide',
      excerpt:
        'Master the Dubai Customs clearance process under Mirsal II. Learn required commercial invoices, certificates of origin, Free Zone bills of entry (JAFZA/DAFZA), and how to avoid port demurrage fees.',
      category: { name: 'Customs & Compliance', slug: 'customs-compliance' },
      publishedAt: '2026-03-02T11:30:00.000Z',
      readTime: '7 min read',
      coverImage: {
        url: '/service-customs.jpg',
        alt: 'Dubai Customs clearance broker inspecting container manifest at port',
      },
      metaTitle: 'Dubai Customs Clearance & Mirsal II Guide',
      metaDescription:
        'Expert guide to UAE customs clearance. Understand Mirsal II digital declarations, HS code tariff classifications, free zone duty exemptions, and inspection requirements.',
      keywords: ['Dubai Customs clearance', 'Mirsal II documentation', 'JAFZA customs broker', 'UAE import duty exemptions'],
    },
    {
      id: '3',
      title: 'FCL vs. LCL Sea Freight: How Commercial Importers Optimize Costs & Container Space',
      slug: 'fcl-vs-lcl-sea-freight-optimization-guide',
      excerpt:
        'In-depth comparative analysis between Full Container Load (FCL) and Less than Container Load (LCL). Discover the exact CBM threshold where FCL becomes cheaper and how container consolidation minimizes risk.',
      category: { name: 'Ocean Freight', slug: 'ocean-freight' },
      publishedAt: '2026-02-18T14:15:00.000Z',
      readTime: '6 min read',
      coverImage: {
        url: '/hero-warehouse.jpg',
        alt: 'Automated logistics warehouse with container cargo staging and distribution',
      },
      metaTitle: 'FCL vs LCL Ocean Container Shipping Guide',
      metaDescription:
        'Compare FCL and LCL container shipping for UAE trade. Calculate break-even CBM volume, transit times, handling costs, and consolidation advantages at Jebel Ali Port.',
      keywords: ['FCL vs LCL', 'ocean freight comparison', 'container shipping UAE', 'LCL consolidation Dubai'],
    },
    {
      id: '4',
      title: 'GCC Cross-Border Bonded Trucking: Connecting Dubai Logistics Hubs to Saudi Arabia & Oman',
      slug: 'gcc-cross-border-bonded-trucking-guide',
      excerpt:
        'How enterprise manufacturers and trading companies leverage UAE as a transshipment hub for seamless overland freight into Saudi Arabia (Riyadh, Dammam, Jeddah) and Oman via Bayan and Al Batha borders.',
      category: { name: 'Overland Logistics', slug: 'overland-logistics' },
      publishedAt: '2026-01-28T10:00:00.000Z',
      readTime: '6 min read',
      coverImage: {
        url: '/service-land.jpg',
        alt: 'Commercial heavy freight truck on modern UAE highway towards GCC border',
      },
      metaTitle: 'GCC Cross-Border Road Freight Dubai to Saudi',
      metaDescription:
        'Reliable bonded overland freight across the GCC. Transit timelines from Dubai to Riyadh, Jeddah, Muscat, Bayan border clearance procedures, and refrigerated reefer trucking.',
      keywords: ['Dubai to Saudi trucking', 'GCC cross-border freight', 'bonded road transport UAE', 'Dubai to Riyadh cargo'],
    },
    {
      id: '5',
      title: 'Air Freight vs Sea Freight: Choosing the Optimal Mode for High-Value Commercial Cargo',
      slug: 'air-freight-vs-sea-freight-commercial-guide',
      excerpt:
        'Strategic decision matrix for supply chain executives. Evaluate chargeable weight calculations, carbon footprints, urgent delivery requirements, and total cost of ownership across air vs ocean corridors.',
      category: { name: 'Air Freight', slug: 'air-freight' },
      publishedAt: '2026-01-12T08:45:00.000Z',
      readTime: '7 min read',
      coverImage: {
        url: '/hero-air.jpg',
        alt: 'Commercial Boeing 777 freighter loading air cargo at Dubai airport',
      },
      metaTitle: 'Air Cargo vs Ocean Shipping Commercial Guide',
      metaDescription:
        'Decide between air freight and sea freight for international cargo. Chargeable weight formulas, transit speed comparison, and multi-modal air-sea solutions via Dubai.',
      keywords: ['Air freight vs sea freight', 'air cargo rates Dubai', 'chargeable weight calculation', 'multimodal logistics UAE'],
    },
    {
      id: '6',
      title: 'Jebel Ali Port Logistics Guide: How Dubai’s Premier Deepwater Harbor Powers Global Supply Chains',
      slug: 'jebel-ali-port-logistics-guide',
      excerpt:
        'Master logistics operations at DP World Jebel Ali Port, the 9th largest container harbor globally. Understand terminal gates (T1-T4), container demurrage and detention rules, vessel berth windows, and customs inspection procedures.',
      category: { name: 'Ocean Freight', slug: 'ocean-freight' },
      publishedAt: '2026-03-24T10:00:00.000Z',
      readTime: '9 min read',
      coverImage: {
        url: '/hero-ocean.jpg',
        alt: 'DP World container vessel berthed at Jebel Ali Port Dubai',
      },
      metaTitle: 'Jebel Ali Port Logistics Guide',
      metaDescription:
        'Comprehensive guide to Jebel Ali Port logistics, DP World terminal handling, demurrage prevention, customs clearance, and container drayage in Dubai, UAE.',
      keywords: ['Jebel Ali port logistics', 'DP World Jebel Ali', 'Dubai port container shipping', 'demurrage detention fees UAE', 'Jebel Ali freight forwarder'],
    },
    {
      id: '7',
      title: 'Navigating UAE Free Zone Customs: The Ultimate Compliance Guide for JAFZA & DAFZA Importers',
      slug: 'uae-freezone-customs-jafza-dafza-guide',
      excerpt:
        'Learn how to leverage UAE Free Zones for 100% duty-free warehousing, assembly, and transshipment. Step-by-step breakdown of Mirsal II Free Zone bills of entry, Freezone-to-Mainland transfers, and VAT reverse charge compliance.',
      category: { name: 'Customs & Compliance', slug: 'customs-compliance' },
      publishedAt: '2026-03-20T11:15:00.000Z',
      readTime: '8 min read',
      coverImage: {
        url: '/service-customs.jpg',
        alt: 'Dubai Customs documentation and compliance inspection in JAFZA free zone',
      },
      metaTitle: 'UAE Free Zone Customs: JAFZA & DAFZA Guide',
      metaDescription:
        'Essential compliance guide for UAE Free Zone customs. Master JAFZA and DAFZA import declarations, Free Zone to Mainland duties, and Mirsal II digital filings.',
      keywords: ['UAE free zone customs', 'JAFZA customs clearance', 'DAFZA customs broker', 'free zone to mainland customs UAE', 'Mirsal II free zone bills'],
    },
    {
      id: '8',
      title: 'Cold Chain Logistics in the UAE: Temperature-Controlled Freight & Pharma Storage Guide',
      slug: 'cold-chain-logistics-dubai-uae-guide',
      excerpt:
        'How temperature-sensitive pharmaceutical and perishable cargo is safely transported through Dubai’s extreme climate. Explore reefer container ocean shipping, GDP-compliant pharma handling, and cold storage warehousing.',
      category: { name: 'Specialized Logistics', slug: 'specialized-logistics' },
      publishedAt: '2026-03-18T14:30:00.000Z',
      readTime: '8 min read',
      coverImage: {
        url: '/hero-warehouse.jpg',
        alt: 'State-of-the-art temperature controlled cold chain warehouse in Dubai',
      },
      metaTitle: 'Cold Chain Logistics Dubai: Reefer Guide',
      metaDescription:
        'Comprehensive guide to cold chain logistics in Dubai, UAE. Reefer container maritime freight, GDP pharma air cargo, and temperature-controlled 3PL storage.',
      keywords: ['cold chain logistics Dubai', 'temperature controlled shipping UAE', 'reefer container Dubai', 'pharma freight forwarder UAE', 'cold storage JAFZA'],
    },
  ]
}
