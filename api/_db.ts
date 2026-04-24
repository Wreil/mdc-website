import { neon } from '@neondatabase/serverless'

const databaseUrl = process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? process.env.NEON_DATABASE_URL

if (!databaseUrl) {
  throw new Error('No database URL found. Configure DATABASE_URL, POSTGRES_URL, or NEON_DATABASE_URL.')
}

export const sql = neon(databaseUrl)
