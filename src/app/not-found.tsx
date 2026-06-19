'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center grid-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl sm:text-9xl font-extrabold gradient-text mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this page wandered off into an infinite loop. Let&apos;s get you back home.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 shadow-glow-md hover:scale-105 active:scale-95 transition-all"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
