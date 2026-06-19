'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollY } from '@/hooks/useScroll'

export default function BackToTop() {
  const y = useScrollY()
  return (
    <AnimatePresence>
      {y > 400 && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-600 text-white flex items-center justify-center shadow-glow-md hover:shadow-glow-lg hover:scale-110 transition-all active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
