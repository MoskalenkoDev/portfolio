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

const SITE_TITLE = 'Mykola Moskalenko - Full Stack Developer'
const SITE_DESCRIPTION =
  'Full Stack Developer with 5+ years of experience in JavaScript, TypeScript, React, Next.js, and Node.js. Based in Covilhã, Portugal.'
const SITE_URL = 'https://moskalenko-mykola.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090f0b',
}

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['Full Stack Developer', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Covilhã', 'Portugal'],
  authors: [{ name: 'Mykola Moskalenko' }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'en_US',
    images: [{ url: `${SITE_URL}/website-preview.jpg`, width: 1200, height: 630, alt: 'Mykola Moskalenko' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/website-preview.jpg`],
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
