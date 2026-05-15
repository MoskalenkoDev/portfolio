import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d1117',
}

export const metadata: Metadata = {
  title: 'Mykola Moskalenko – Full Stack Developer',
  description:
    'Full Stack Developer with 5+ years of experience in JavaScript, TypeScript, React, Next.js, and Node.js. Based in Covilhã, Portugal.',
  keywords: ['Full Stack Developer', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Covilhã', 'Portugal'],
  authors: [{ name: 'Mykola Moskalenko' }],
  openGraph: {
    title: 'Mykola Moskalenko – Full Stack Developer',
    description:
      'Full Stack Developer with 5+ years of experience in JavaScript, TypeScript, React, Next.js, and Node.js. Based in Covilhã, Portugal.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
