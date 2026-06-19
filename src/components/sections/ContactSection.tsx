'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import { PERSONAL_INFO } from '@/lib/data'
import { submitContactForm } from '@/lib/actions'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.trim().length < 10) errs.message = 'Message should be at least 10 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    try {
      const result = await submitContactForm(form)
      if (result.success) {
        setSubmitted(true)
        toast.success("Message sent! I'll get back to you soon.")
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        toast.error(result.error || 'Failed to send message.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        label="Get In Touch"
        title="Let's Build Something Great"
        description="Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always open."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left: Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-5"
        >
          {[
            { Icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
            { Icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}` },
            { Icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: undefined },
          ].map(({ Icon, label, value, href }) => {
            const content = (
              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 card-hover">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              </div>
            )
            return href ? (
              <a key={label} href={href}>{content}</a>
            ) : (
              <div key={label}>{content}</div>
            )
          })}

          <div className="glass-card rounded-2xl p-5">
            <p className="text-sm font-semibold mb-4">Find me on</p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
                { Icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                { Icon: Twitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:bg-violet-500/10 hover:-translate-y-1 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass-card rounded-2xl p-6 sm:p-8 space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all text-sm placeholder:text-muted-foreground/60"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all text-sm placeholder:text-muted-foreground/60"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject</label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="What's this about?"
              className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all text-sm placeholder:text-muted-foreground/60"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project or opportunity..."
              className="w-full px-4 py-2.5 rounded-xl bg-secondary/40 border border-border focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 outline-none transition-all text-sm resize-none placeholder:text-muted-foreground/60"
              aria-invalid={!!errors.message}
            />
            {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 shadow-glow-sm hover:shadow-glow-md disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-[1.01] active:scale-95"
          >
            {submitting ? (
              <><Loader2 size={18} className="animate-spin" /> Sending...</>
            ) : submitted ? (
              <><CheckCircle2 size={18} /> Sent!</>
            ) : (
              <><Send size={16} /> Send Message</>
            )}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
