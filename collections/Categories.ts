import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    // Hide Categories from sidebar for authors so their dashboard is focused only on Posts
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    read: () => true, // Allowed so authors can select categories in the post editor
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. air-freight, customs-clearance).',
      },
    },
  ],
}

