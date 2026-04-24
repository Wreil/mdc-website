import { sql } from '../db.js'

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'GET') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        Allow: 'GET',
      },
    })
  }

  try {
    const rows = await sql<{ link_key: string; clicks: number }>`
      SELECT link_key, COUNT(*)::int AS clicks
      FROM quick_link_clicks
      GROUP BY link_key
      ORDER BY clicks DESC
    `

    return Response.json({ rows })
  } catch {
    return Response.json({ rows: [] })
  }
}
