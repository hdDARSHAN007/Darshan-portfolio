'use server'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  // Basic server-side validation
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: 'Please fill in all required fields.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { success: false, error: 'Please provide a valid email address.' }
  }

  try {
    // ============================================================
    // INTEGRATION POINT: Connect to your preferred email service.
    // Examples: Resend, SendGrid, Nodemailer + SMTP, or a webhook
    // to services like Formspree / EmailJS / Getform.
    //
    // Example using Resend (uncomment and add RESEND_API_KEY to .env):
    //
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'darshan.hd@example.com',
    //   subject: `New message from ${data.name}: ${data.subject}`,
    //   text: data.message,
    //   reply_to: data.email,
    // })
    // ============================================================

    console.log('Contact form submission:', data)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { success: false, error: 'Something went wrong. Please try again later.' }
  }
}
