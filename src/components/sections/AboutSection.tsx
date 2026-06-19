'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Rocket, Layers, Trophy } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import { PERSONAL_INFO, STATS } from '@/lib/data'
import { useCounter } from '@/hooks/useCounter'

const ICON_MAP: Record<string, React.ElementType> = { Code2, Rocket, Layers, Trophy }

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const count = useCounter(stat.value, 1800, inView)
  const Icon = ICON_MAP[stat.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 text-center card-hover"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
        <Icon size={22} className="text-violet-400" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold stat-number mb-1">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
    </motion.div>
  )
}

const TIMELINE = [
  { year: '2021', title: 'Started B.E. CSE', desc: 'Began Computer Science Engineering journey at VTU.' },
  { year: '2022', title: 'First Lines of Code', desc: 'Started competitive programming on HackerRank & LeetCode.' },
  { year: '2023', title: 'Full Stack Journey', desc: 'Built first full-stack apps with React, Node.js & MongoDB.' },
  { year: '2024', title: 'AI/ML & Data Analytics', desc: 'Deep-dived into Machine Learning, Power BI, and Cloud Computing.' },
  { year: '2025', title: 'Software Engineer Ready', desc: 'Solved 1900+ problems, built production apps, applying to top companies.' },
]

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        label="Get to know me"
        title="About Me"
        description="A quick look at who I am, what I do, and the journey that brought me here."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left: Summary */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Crafting Software, Solving Problems, <span className="gradient-text-static">One Line at a Time</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {PERSONAL_INFO.about}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond academics, I&apos;m deeply invested in building real products — from AI-powered learning
            platforms to full-stack e-commerce systems — combining strong fundamentals in Data Structures &amp;
            Algorithms with modern engineering practices. I believe in writing clean, scalable code and
            constantly learning new technologies that push the boundaries of what&apos;s possible.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {['Problem Solver', 'Fast Learner', 'Team Player', 'Detail Oriented'].map((trait) => (
              <span key={trait} className="tag-pill">{trait}</span>
            ))}
          </div>
        </motion.div>

        {/* Right: Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-center mb-10">My Journey So Far</h3>
        <div className="relative pl-8 border-l-2 border-violet-500/20 space-y-10">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="timeline-dot absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 border-2 border-background" />
              <span className="text-xs font-mono font-semibold text-cyan-400">{item.year}</span>
              <h4 className="text-lg font-bold mt-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
