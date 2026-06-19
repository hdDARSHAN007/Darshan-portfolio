'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, Mail, ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="container-width grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-violet-400 font-mono text-sm md:text-base mb-4"
          >
            👋 Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3"
          >
            <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground/90 mb-6 h-10"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer', 1800,
                'Full Stack Developer', 1800,
                'Competitive Programmer', 1800,
                'AI & ML Enthusiast', 1800,
                'Data Analytics Expert', 1800,
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={60}
              repeat={Infinity}
              cursor
              className="text-foreground"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
          >
            Passionate CS Engineering student crafting full-stack applications, exploring AI &amp; ML,
            and solving <span className="text-violet-400 font-semibold">1900+ coding problems</span> across
            competitive programming platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href={PERSONAL_INFO.resume}
              download
              className="btn-glow flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 shadow-glow-md hover:shadow-glow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold glass-card text-foreground hover:scale-105 active:scale-95 transition-all"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
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
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-violet-400 hover:-translate-y-1 transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Rotating gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-500 via-cyan-500 to-violet-500 opacity-60 blur-md"
            />
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden glass border-2 border-violet-500/30 shadow-glow-md animate-float">
              {/* Photo placeholder - replace src with actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-violet-900/40 via-slate-900 to-cyan-900/40 flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-extrabold gradient-text-static">
                  {PERSONAL_INFO.initials}
                </span>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 glass-card px-4 py-2 rounded-2xl flex items-center gap-2 shadow-glow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold">Open to Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-violet-400 transition-colors"
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium tracking-wide">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  )
}
