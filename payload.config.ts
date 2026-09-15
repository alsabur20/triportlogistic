import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'

import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Posts, Categories, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'triport-payload-secret-default-key-change-in-env',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
      keepAlive: true,
    },
  }),
  plugins: [
    // Automatically use Cloudflare R2 / S3 storage when credentials are provided.
    // Otherwise, falls back gracefully to local public/media/ directory.
    ...(process.env.R2_BUCKET && process.env.R2_ACCESS_KEY_ID
      ? [
          s3Storage({
            collections: {
              media: process.env.R2_PUBLIC_URL
                ? {
                    generateFileURL: ({ filename, prefix }: { filename: string; prefix?: string }) => {
                      const baseUrl = process.env.R2_PUBLIC_URL?.replace(/\/+$/, '')
                      return prefix ? `${baseUrl}/${prefix}/${filename}` : `${baseUrl}/${filename}`
                    },
                  }
                : true,
            },
            bucket: process.env.R2_BUCKET,
            config: {
              credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
              },
              region: 'auto', // Cloudflare R2 standard region
              endpoint: process.env.R2_ENDPOINT, // e.g. https://<account_id>.r2.cloudflarestorage.com
              forcePathStyle: true,
            },
          }),
        ]
      : []),
  ],
})

