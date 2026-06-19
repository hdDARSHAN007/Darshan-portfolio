'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Globe, BarChart3, Cloud, Zap, Cpu } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import { SKILLS, ALL_TECH_TAGS } from '@/lib/data'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = { Code2, Globe, BarChart3, Cloud, Zap, Cpu }

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className={cn('h-full rounded-full bg-gradient-to-r', color)}
        />
      </div>
    </div>
  )
}

function SkillCard({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const Icon = ICON_MAP[skill.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br', skill.color)}>
          <Icon size={20} className="text-white" />
        </div>
        <h3 className="font-bold text-base">{skill.category}</h3>
      </div>
      <div>
        {skill.items.map((item, i) => (
          <SkillBar key={item.name} name={item.name} level={item.level} delay={i * 0.08} color={skill.color} />
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-muted/[0.02]">
      <SectionTitle
        label="What I Work With"
        title="Skills & Technologies"
        description="A comprehensive toolkit spanning full-stack development, AI/ML, data analytics, cloud, and competitive programming."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.category} skill={skill} index={i} />
        ))}
      </div>

      {/* Tech tag cloud */}
      <div>
        <h3 className="text-center text-lg font-bold mb-6 text-muted-foreground">Also Familiar With</h3>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {ALL_TECH_TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="tag-pill cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
