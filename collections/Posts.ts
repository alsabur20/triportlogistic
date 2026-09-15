import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
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
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL path for this post (e.g. dubai-to-pakistan-cargo-guide).',
      },
    },
    {
      name: 'status',
      type: 'select',
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
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
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
      maxLength: 160,
      admin: {
        description: 'Brief summary for search snippets and blog cards (under 160 characters).',
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
