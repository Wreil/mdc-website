import { sql } from '../db.js'

type QuickLinkPayload = {
  linkKey?: string
  pagePath?: string
}

const ensureQuickLinkTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS quick_link_clicks (
      id SERIAL PRIMARY KEY,
      link_key TEXT NOT NULL,
      page_path TEXT,
      clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        Allow: 'POST',
      },
    })
  }

  let payload: QuickLinkPayload
  try {
    payload = (await request.json()) as QuickLinkPayload
  } catch {
    return new Response('Invalid JSON body', { status: 400 })
  }

  const linkKey = payload.linkKey?.trim()
  const pagePath = payload.pagePath?.trim()

  if (!linkKey) {
    return new Response('linkKey is required', { status: 400 })
  }

  try {
    await ensureQuickLinkTable()
    await sql`
      INSERT INTO quick_link_clicks (link_key, page_path)
      VALUES (${linkKey}, ${pagePath ?? null})
    `

    return new Response(null, { status: 204 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected database error'
    return new Response(message, { status: 500 })
  }
}
