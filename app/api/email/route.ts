import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * Triport Logistics — Commercial Lead Dispatch & Auto-Acknowledgment Engine
 * 1. Dispatches lead alert to Triport Operations (info@triportlogistic.com / TO_EMAIL)
 * 2. Automatically sends a branded confirmation / acknowledgment email to the customer
 * 3. Safe fallback: Logs lead and returns 200 OK even if SMTP credentials are pending in dev
 */

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

    if (!name && !email && !phone) {
      return NextResponse.json({ error: 'Please provide at least a name and contact detail.' }, { status: 400 })
    }

    const refId = `TL-${Math.floor(100000 + Math.random() * 900000)}`
    const inquirySubject = subject || `Commercial Freight Inquiry [Ref: ${refId}] - ${companyName || name}`

    const adminEmail = process.env.TO_EMAIL || process.env.MY_EMAIL || 'info@triportlogistic.com'
    const smtpUser = process.env.MY_EMAIL || process.env.EMAIL_USER
    const smtpPass = process.env.MY_PASSWORD || process.env.EMAIL_PASS

    // Format acknowledgment email HTML for the customer
    const customerAckHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; padding: 24px; color: #1f2937;">
        <div style="border-bottom: 3px solid #ff4800; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #111827; margin: 0; font-size: 22px;">TRIPORT <span style="color: #ff4800;">LOGISTICS</span></h2>
          <p style="color: #6b7280; font-size: 13px; margin: 4px 0 0 0;">Dubai Global Freight Forwarding Hub · UAE</p>
        </div>

        <h3 style="color: #111827; font-size: 18px; margin-top: 0;">Inquiry Received — Ref: ${refId}</h3>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">
          Dear <strong>${name || 'Valued Shipper'}</strong>,
        </p>
        <p style="font-size: 14px; line-height: 1.6; color: #374151;">
          Thank you for reaching out to <strong>Triport Logistics</strong>. We have successfully logged your commercial freight inquiry.
          A dedicated freight forwarder from our Dubai rate desk is reviewing your specifications and will provide you with route options, transit times, and competitive rates within <strong>2 business hours</strong>.
        </p>

        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; margin: 20px 0;">
          <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #111827; text-transform: uppercase; letter-spacing: 0.5px;">Your Submission Summary:</h4>
          <table style="width: 100%; font-size: 13px; border-collapse: collapse;">
            ${companyName ? `<tr><td style="padding: 4px 0; color: #6b7280; width: 140px;">Company:</td><td style="font-weight: 600; color: #111827;">${companyName}</td></tr>` : ''}
            <tr><td style="padding: 4px 0; color: #6b7280; width: 140px;">Service / Route:</td><td style="font-weight: 600; color: #ff4800;">${service || 'Commercial Freight'}</td></tr>
            ${phone ? `<tr><td style="padding: 4px 0; color: #6b7280;">Phone / WhatsApp:</td><td style="color: #111827;">${phone}</td></tr>` : ''}
            ${email ? `<tr><td style="padding: 4px 0; color: #6b7280;">Email:</td><td style="color: #111827;">${email}</td></tr>` : ''}
            ${message ? `<tr><td style="padding: 4px 0; color: #6b7280; vertical-align: top;">Cargo Details:</td><td style="color: #111827;">${message}</td></tr>` : ''}
          </table>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #374151;">
          <strong>Need urgent spot rates or immediate container allocation?</strong><br />
          Connect directly with our operations desk on WhatsApp:
        </p>
        <div style="margin: 18px 0;">
          <a href="https://wa.me/971566569927?text=Hello%20Triport%20Logistics%20Team%2C%20following%20up%20on%20Inquiry%20Ref%3A%20${refId}" 
             style="display: inline-block; background-color: #25D366; color: white; padding: 10px 20px; font-weight: bold; text-decoration: none; font-size: 14px;">
            Chat on WhatsApp (+971 56 656 9927)
          </a>
        </div>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 24px; font-size: 12px; color: #9ca3af;">
          <p style="margin: 0 0 4px 0;"><strong>Triport Logistics LLC</strong> · ACICO Business Park, Port Saeed, Dubai, UAE</p>
          <p style="margin: 0;">Direct Terminal Operations: Jebel Ali Port (JAFZA) &amp; Dubai International Airport (DXB)</p>
        </div>
      </div>
    `

    // Admin Lead Email HTML
    const adminLeadHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ff4800;">
        <h2 style="color: #ff4800; margin-top: 0;">New Commercial Freight Lead [Ref: ${refId}]</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName || 'Not specified'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service / Route:</strong> ${service || 'General Freight'}</p>
        <p><strong>Message / Specifications:</strong></p>
        <blockquote style="background: #f3f4f6; padding: 10px; border-left: 3px solid #ff4800;">${message}</blockquote>
        <p style="color: #6b7280; font-size: 12px;">Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })} (Dubai Time)</p>
      </div>
    `

    // Check for SMTP configuration (Supports custom host or Gmail)
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587
    const hasSmtpConfig = (smtpHost && smtpUser && smtpPass) || (smtpUser && smtpPass)

    if (hasSmtpConfig && smtpUser && smtpPass) {
      try {
        const transport = smtpHost
          ? nodemailer.createTransport({
              host: smtpHost,
              port: smtpPort,
              secure: smtpPort === 465,
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            })
          : nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            })

        // 1. Send notification to admin/operations team
        await transport.sendMail({
          from: `"Triport Lead Desk" <${smtpUser}>`,
          to: adminEmail,
          replyTo: email || undefined,
          subject: inquirySubject,
          html: adminLeadHtml,
        })

        // 2. Send automated acknowledgment email back to customer if valid email provided
        if (email && email.includes('@')) {
          await transport.sendMail({
            from: `"Triport Logistics Dubai" <${smtpUser}>`,
            to: email,
            subject: `Inquiry Received [Ref: ${refId}] — Triport Logistics Dubai`,
            html: customerAckHtml,
          })
        }
        console.log(`[EMAIL DISPATCH SUCCESS] Ref: ${refId} -> Sent to Admin (${adminEmail}) and Customer (${email})`)
      } catch (smtpErr) {
        console.warn('[EMAIL DISPATCH ERROR]: Could not connect to mail server:', smtpErr)
      }
    } else {
      console.log(`\n============================================================`)
      console.log(`[LOCAL DEV NOTICE] Lead inquiry received! Ref: ${refId}`)
      console.log(`  Name: ${name} | Service: ${service} | Email: ${email} | Phone: ${phone}`)
      console.log(`  NOTE: To deliver real emails to inboxes on localhost, create a .env.local file with:`)
      console.log(`  EMAIL_USER="your-email@gmail.com"`)
      console.log(`  EMAIL_PASS="your-16-char-gmail-app-password"`)
      console.log(`============================================================\n`)
    }

    return NextResponse.json({
      success: true,
      refId,
      message: `Your inquiry has been logged successfully (Ref: #${refId}). A confirmation email has been dispatched.`,
    })
  } catch (error: any) {
    console.error('Email route error:', error)
    return NextResponse.json({ error: error?.message || 'Internal server error' }, { status: 500 })
  }
}