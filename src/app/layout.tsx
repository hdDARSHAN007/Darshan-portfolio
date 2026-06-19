import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Toaster } from 'sonner'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://darshanhd.dev'),
  title: {
    default: 'Darshan H D | Software Engineer & Full Stack Developer',
    template: '%s | Darshan H D',
  },
  description:
    'Passionate Computer Science Engineering student and Software Developer. Specializing in Full Stack Development, AI/ML, Data Analytics, and Competitive Programming. Solved 1900+ coding problems.',
  keywords: [
    'Darshan H D',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Computer Science',
    'Competitive Programming',
    'LeetCode',
    'Machine Learning',
    'Data Analytics',
    'Portfolio',
    'India',
  ],
  authors: [{ name: 'Darshan H D', url: 'https://darshanhd.dev' }],
  creator: 'Darshan H D',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://darshanhd.dev',
    title: 'Darshan H D | Software Engineer & Full Stack Developer',
    description:
      'Passionate CS Engineering student. Full Stack Dev, AI/ML, Data Analytics & Competitive Programmer with 1900+ problems solved.',
    siteName: 'Darshan H D Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Darshan H D - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darshan H D | Software Engineer',
    description: 'CS Engineering student | Full Stack Dev | 1900+ problems solved',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0d0a1a' },
    { media: '(prefers-color-scheme: light)', color: '#f8f9fa' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'rgba(15,10,30,0.95)',
                border: '1px solid rgba(139,92,246,0.3)',
                color: '#e2e8f0',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
