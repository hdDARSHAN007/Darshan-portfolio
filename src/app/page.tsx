'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import AchievementsSection from '@/components/sections/AchievementsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import CodingProfilesSection from '@/components/sections/CodingProfilesSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import CustomCursor from '@/components/ui/CustomCursor'
import LoadingScreen from '@/components/ui/LoadingScreen'
import { useState, useEffect } from 'react'

// Dynamically import particles to avoid SSR issues
const ParticleBackground = dynamic(
  () => import('@/components/ui/ParticleBackground'),
  { ssr: false }
)

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <div className="relative z-10 grid-bg">
        <div className="radial-glow fixed inset-0 pointer-events-none z-0" />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ExperienceSection />
          <CodingProfilesSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
