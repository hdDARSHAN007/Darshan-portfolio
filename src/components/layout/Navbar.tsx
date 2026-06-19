'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Moon, Sun, Code2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import { NAV_LINKS, PERSONAL_INFO } from '@/lib/data'
import { useScrollY, useActiveSection } from '@/hooks/useScroll'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const scrollY = useScrollY()
  const activeSection = useActiveSection(NAV_LINKS.map(l => l.href.slice(1)))

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { if (menuOpen) document.body.style.overflow = 'hidden'; else document.body.style.overflow = '' }, [menuOpen])

  const scrolled = scrollY > 20

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-glass'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="container-width flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-glow-sm">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg gradient-text-static hidden sm:block">
              {PERSONAL_INFO.initials}
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    isActive
                      ? 'text-violet-400'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}

            {/* Resume button */}
            <a
              href={PERSONAL_INFO.resume}
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-glow-sm hover:shadow-glow-md transition-all hover:scale-105 active:scale-95"
            >
              <Download size={14} />
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 glass border-l border-border/50 p-6 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-lg gradient-text-static">{PERSONAL_INFO.name}</span>
                <button onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'px-4 py-3 rounded-xl text-sm font-medium transition-all',
                      activeSection === link.href.slice(1)
                        ? 'bg-violet-500/15 text-violet-400 border border-violet-500/25'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href={PERSONAL_INFO.resume}
                download
                className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 text-white"
              >
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
