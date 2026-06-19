'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import ProjectModal from './ProjectModal'
import { PROJECTS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function ProjectsSection() {
  const [selected, setSelected] = useState<typeof PROJECTS[0] | null>(null)

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="My Work"
        title="Featured Projects"
        description="A selection of projects showcasing full-stack development, AI integration, and data analytics expertise."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass-card rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Banner */}
            <div
              className={cn('h-44 relative flex items-center justify-center bg-gradient-to-br cursor-pointer', project.color)}
              onClick={() => setSelected(project)}
            >
              <span className="text-5xl font-extrabold text-white/85">{project.title.charAt(0)}</span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ArrowUpRight
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              {project.featured && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/20 text-white backdrop-blur-sm">
                  ⭐ FEATURED
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-semibold text-cyan-400 mb-1">{project.category}</span>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description.slice(0, 110)}...
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag-pill text-[10px] px-2 py-0.5">{tag}</span>
                ))}
                {project.tags.length > 4 && (
                  <span className="tag-pill text-[10px] px-2 py-0.5">+{project.tags.length - 4}</span>
                )}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-semibold border border-border hover:bg-muted transition-all"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
              <button
                onClick={() => setSelected(project)}
                className="mt-3 text-xs font-medium text-violet-400 hover:text-violet-300 hover-underline self-center"
              >
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </SectionWrapper>
  )
}
