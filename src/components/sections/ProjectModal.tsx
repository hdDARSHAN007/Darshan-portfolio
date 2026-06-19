'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { cn } from '@/lib/utils'

interface ProjectModalProps {
  project: typeof PROJECTS[0] | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="glass rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-violet-500/20 shadow-glow-lg">
              {/* Header banner */}
              <div className={cn('h-40 sm:h-48 rounded-t-3xl bg-gradient-to-br relative flex items-center justify-center', project.color)}>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
                <span className="text-4xl sm:text-5xl font-extrabold text-white/90">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <span className="tag-pill mb-3 inline-block">{project.category}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{project.title}</h2>
                <p className="text-violet-400 font-medium mb-4">{project.tagline}</p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                <h4 className="text-sm font-bold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold glass-card hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
