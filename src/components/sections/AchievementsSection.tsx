'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Star, Trophy, Layers } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import { ACHIEVEMENTS } from '@/lib/data'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = { Code2, Star, Trophy, Layers }

function AchievementCard({ ach, index }: { ach: typeof ACHIEVEMENTS[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const Icon = ICON_MAP[ach.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-2xl p-7 text-center relative overflow-hidden"
    >
      <div className={cn('absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br opacity-10 blur-2xl', ach.color)} />
      <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br shadow-glow-sm', ach.color)}>
        <Icon size={24} className="text-white" />
      </div>
      <div className="text-2xl font-extrabold mb-2 stat-number">{ach.metric}</div>
      <h3 className="font-bold text-base mb-2">{ach.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{ach.description}</p>
    </motion.div>
  )
}

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" className="bg-muted/[0.02]">
      <SectionTitle
        label="Track Record"
        title="Achievements & Highlights"
        description="Milestones from my competitive programming journey and technical accomplishments."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard key={ach.title} ach={ach} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
