'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Trophy } from 'lucide-react'
import SectionWrapper, { SectionTitle } from '@/components/ui/SectionWrapper'
import { CODING_PROFILES } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function CodingProfilesSection() {
  return (
    <SectionWrapper id="coding" className="bg-muted/[0.02]">
      <SectionTitle
        label="Competitive Programming"
        title="Coding Profiles"
        description="Explore my problem-solving journey across all major competitive programming platforms."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CODING_PROFILES.map((profile, i) => (
          <motion.a
            key={profile.platform}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group glass-card rounded-2xl p-6 flex flex-col relative overflow-hidden"
          >
            <div className={cn('absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br opacity-10 blur-2xl group-hover:opacity-20 transition-opacity', profile.color)} />

            <div className="flex items-center justify-between mb-5">
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br shadow-glow-sm', profile.color)}>
                <span>{profile.emoji}</span>
              </div>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-violet-400 transition-colors" />
            </div>

            <h3 className="font-bold text-lg mb-1">{profile.platform}</h3>
            <p className="text-xs text-muted-foreground mb-4">@{profile.username}</p>

            <div className="flex items-center gap-2 mb-2">
              <Trophy size={13} className="text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">{profile.rating}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{profile.stats}</p>
            <p className="text-xs text-muted-foreground/70 mt-2">{profile.description}</p>

            <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-medium text-violet-400 group-hover:text-violet-300">
              <span>View Profile</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}
