'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { CloseIcon, HamburgerIcon } from '@/components/ui/icons'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'experience', 'education', 'contact']
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    history.replaceState(null, '', window.location.pathname)
    setActiveSection('')
  }

  const handleMobileMenuToggle = () => setMobileOpen(!mobileOpen)

  const handleMobileNavLinkClick = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-background px-6 transition-all duration-300 ${
        scrolled || mobileOpen ? 'border-border' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="font-mono text-base font-semibold tracking-wider text-primary transition-colors duration-150 hover:text-primary-light"
        >
          mm.dev
        </Link>

        <DesktopNav activeSection={activeSection} />

        <button
          className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <MobileNav isOpen={mobileOpen} activeSection={activeSection} onLinkClick={handleMobileNavLinkClick} />
    </nav>
  )
}
