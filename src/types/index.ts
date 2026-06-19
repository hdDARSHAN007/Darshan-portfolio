export interface Project {
  id: number
  title: string
  tagline: string
  description: string
  longDescription: string
  tags: string[]
  github: string
  demo: string
  image: string
  featured: boolean
  category: string
  color: string
}

export interface SkillCategory {
  category: string
  icon: string
  color: string
  items: { name: string; level: number }[]
}

export interface CodingProfile {
  platform: string
  username: string
  url: string
  stats: string
  rating: string
  color: string
  bgColor: string
  borderColor: string
  icon: string
  emoji: string
  description: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  type: string
  description: string
  tech: string[]
  icon: string
  current: boolean
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
