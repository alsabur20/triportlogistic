import type { CollectionConfig, Where } from 'payload'

import { revalidatePath } from 'next/cache'

const formatSlug = (val: string): string =>
  val
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'author', 'status', 'publishedAt'],
  },
  access: {
    // Unauthenticated visitors only see published posts.
    // Admins see all posts. Authors see published posts + their own drafts.
    read: ({ req: { user } }) => {
      if (!user) {
        const where: Where = {
          status: {
            equals: 'published',
          },
        }
        return where
      }
      if (user.role === 'admin') return true
      const where: Where = {
        or: [
          {
            status: {
              equals: 'published',
            },
          },
          {
            author: {
              equals: user.id,
            },
          },
        ],
      }
      return where
    },
    // Any logged-in user (admin or author) can create posts
    create: ({ req: { user } }) => Boolean(user),
    // Admins can edit any post; authors can only edit posts they authored
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        author: {
          equals: user.id,
        },
      }
    },
    // Admins can delete any post; authors can only delete their own posts
    delete: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        author: {
          equals: user.id,
        },
      }
    },
  },
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        // Automatically associate post with logged-in user on creation
        if (operation === 'create' && req.user && !data.author) {
          data.author = req.user.id
        }
        // If published and no publishedAt date set, automatically set to now
        if (data?.status === 'published' && !data?.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }
        return data
      },
    ],
    afterChange: [
      ({ doc, previousDoc }) => {
        try {
          revalidatePath('/blog')
          if (doc?.slug) {
            revalidatePath(`/blog/${doc.slug}`)
          }
          if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
            revalidatePath(`/blog/${previousDoc.slug}`)
          }
        } catch {
          // Safe fallback if called outside Next.js request lifecycle
        }
        return doc
      },
    ],
    afterDelete: [
      ({ doc }) => {
        try {
          revalidatePath('/blog')
          if (doc?.slug) {
            revalidatePath(`/blog/${doc.slug}`)
          }
        } catch {
          // Safe fallback
        }
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-generated from title if left empty.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (value && typeof value === 'string') {
              return formatSlug(value)
            }
            if (data?.title && typeof data.title === 'string') {
              return formatSlug(data.title)
            }
            return value
          },
        ],
      },
    },
    {
      name: 'status',
      type: 'select',
      index: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-filled when published if left blank.',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }: { user: any }) => user?.id,
      access: {
        // Non-admins cannot reassign the post to another user
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      admin: {
        position: 'sidebar',
        description: 'Post author. Automatically assigned upon creation.',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 200,
      admin: {
        description: 'Brief summary for search snippets and blog cards (under 200 characters).',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    // SEO Overrides
    {
      name: 'metaTitle',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Custom SEO title tag (leave blank to use post title).',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      admin: {
        position: 'sidebar',
        description: 'Custom SEO meta description (leave blank to use excerpt).',
      },
    },
  ],
}

