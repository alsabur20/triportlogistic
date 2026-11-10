import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const recipient = 'info@triportlogistic.com'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name = '',
      email = '',
      phone = '',
      service = '',
      subject = '',
      message = '',
      companyName = '',
    } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Please provide your name, email, and phone number.' },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[EMAIL DISPATCH ERROR]: RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
    }

    const refId = `TL-${Math.floor(100000 + Math.random() * 900000)}`
    const inquirySubject = subject || `Commercial Freight Inquiry [Ref: ${refId}] - ${companyName || name}`
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      service: escapeHtml(service || 'Commercial Freight'),
      companyName: escapeHtml(companyName || 'Not specified'),
      message: escapeHtml(message || 'No cargo details provided.'),
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Triport Logistics Website <info@triportlogistic.com>',
      to: [recipient],
      replyTo: email,
      subject: inquirySubject,
      text: [
        `New commercial freight inquiry [Ref: ${refId}]`,
        `Name: ${name}`,
        `Company: ${companyName || 'Not specified'}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service / Route: ${service || 'Commercial Freight'}`,
        `Cargo Details: ${message || 'No cargo details provided.'}`,
      ].join('\n'),
      html: `
        <h2>New Commercial Freight Inquiry [Ref: ${refId}]</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Company:</strong> ${safe.companyName}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Service / Route:</strong> ${safe.service}</p>
        <p><strong>Cargo Details:</strong></p>
        <p>${safe.message.replaceAll('\n', '<br />')}</p>
      `,
    })

    if (error) {
      console.error('[EMAIL DISPATCH ERROR]: Resend rejected inquiry', error)
      return NextResponse.json({ error: 'Unable to send the inquiry right now.' }, { status: 502 })
    }

    return NextResponse.json({
      success: true,
      refId,
      message: `Your inquiry has been sent to ${recipient} (Ref: #${refId}).`,
    })
  } catch (error) {
    console.error('[EMAIL DISPATCH ERROR]: Unexpected email route failure', error)
    return NextResponse.json({ error: 'Unable to send the inquiry right now.' }, { status: 500 })
  }
}
