import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'SEO alt text for accessibility and search ranking.',
      },
    },
  ],
}

