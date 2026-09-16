import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    // Hide Users collection from navigation for non-admin users (authors)
    hidden: ({ user }) => user?.role !== 'admin',
    defaultColumns: ['name', 'email', 'role', 'createdAt'],
  },
  auth: true,
  access: {
    // Only admins can see the full list of users; authors can only read their own user record
    read: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        id: {
          equals: user.id,
        },
      }
    },
    // Only admins can create new users
    create: ({ req: { user } }) => user?.role === 'admin',
    // Admins can update any user; authors can only update their own profile
    update: ({ req: { user } }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return {
        id: {
          equals: user.id,
        },
      }
    },
    // Only admins can delete users
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      index: true,
      required: true,
      defaultValue: 'author',
      options: [
        { label: 'Super Admin (Full Access)', value: 'admin' },
        { label: 'Author (Blog Posts Only)', value: 'author' },
      ],
      access: {
        // Non-admins cannot elevate themselves or change roles
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      admin: {
        position: 'sidebar',
        description: 'Authors can only create and manage their own blog posts.',
      },
    },
  ],
}

