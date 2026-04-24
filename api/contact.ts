type ContactPayload = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T> => {
  return await Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error('Database timeout')), ms)
    }),
  ])
}

const storeContactMessage = async (payload: {
  firstName: string | null
  lastName: string | null
  email: string
  phone: string | null
  message: string
}) => {
  const dbModule = await withTimeout(import('./db.js'), 2500)

  await withTimeout(
    dbModule.sql`
      INSERT INTO contact_messages (first_name, last_name, email, phone, message)
      VALUES (${payload.firstName}, ${payload.lastName}, ${payload.email}, ${payload.phone}, ${payload.message})
    `,
    5000,
  )
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

  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return new Response('Invalid JSON body', { status: 400 })
  }

  const firstName = payload.firstName?.trim() ?? null
  const lastName = payload.lastName?.trim() ?? null
  const email = payload.email?.trim() ?? ''
  const phone = payload.phone?.trim() ?? null
  const message = payload.message?.trim() ?? ''

  if (!email || !emailPattern.test(email)) {
    return new Response('A valid email is required', { status: 400 })
  }

  if (!message) {
    return new Response('Message is required', { status: 400 })
  }

  try {
    await storeContactMessage({ firstName, lastName, email, phone, message })
    return Response.json({ ok: true, stored: true }, { status: 201 })
  } catch {
    return Response.json({ ok: true, stored: false }, { status: 202 })
  }
}
