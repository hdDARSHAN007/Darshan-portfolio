'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react'
import { PERSONAL_INFO, NAV_LINKS } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border/50 bg-background/80 backdrop-blur-xl pt-16 pb-8">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text-static">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building scalable software, solving complex problems, and crafting delightful user experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-violet-400 transition-colors hover-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              {[
                { href: PERSONAL_INFO.github, Icon: Github, label: 'GitHub' },
                { href: PERSONAL_INFO.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: PERSONAL_INFO.twitter, Icon: Twitter, label: 'Twitter' },
                { href: `mailto:${PERSONAL_INFO.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-violet-400 transition-colors"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{PERSONAL_INFO.email}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {year} {PERSONAL_INFO.name}. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Crafted with <Heart size={12} className="text-rose-500 fill-rose-500" /> using Next.js & Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
