'use client'

import { motion } from 'framer-motion'
import { Briefcase, BarChart3, GitBranch, GraduationCap } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import { EXPERIENCE } from '@/lib/data'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = { Briefcase, BarChart3, GitBranch, GraduationCap }

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="Where I've Been"
        title="Experience & Education"
        description="My professional journey, research work, and academic background."
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Center line on desktop, left line on mobile */}
        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-transparent md:-translate-x-1/2" />

        <div className="space-y-10">
          {EXPERIENCE.map((exp, i) => {
            const Icon = ICON_MAP[exp.icon]
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  'relative flex flex-col md:flex-row items-start gap-6',
                  !isLeft && 'md:flex-row-reverse'
                )}
              >
                {/* Icon node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center shadow-glow-sm',
                    exp.current
                      ? 'bg-gradient-to-br from-violet-500 to-cyan-500'
                      : 'bg-secondary border border-violet-500/30'
                  )}>
                    <Icon size={16} className={exp.current ? 'text-white' : 'text-violet-400'} />
                  </div>
                </div>

                {/* Card */}
                <div className={cn('flex-1 pl-16 md:pl-0', isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12')}>
                  <div className="glass-card rounded-2xl p-6 inline-block w-full text-left">
                    <div className={cn('flex items-center gap-2 mb-2 flex-wrap', isLeft && 'md:justify-end')}>
                      <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                      <span className="tag-pill text-[10px]">{exp.type}</span>
                      {exp.current && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                    <p className="text-sm text-violet-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className={cn('flex flex-wrap gap-1.5', isLeft && 'md:justify-end')}>
                      {exp.tech.map((t) => (
                        <span key={t} className="tag-pill text-[10px] px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
