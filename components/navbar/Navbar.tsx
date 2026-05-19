'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { CloseIcon, HamburgerIcon } from '@/components/ui/icons'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const SCROLL_THRESHOLD = 24
const HASH_SCROLL_DELAY_MS = 100
const SCROLL_END_DEBOUNCE_MS = 50
const SECTION_ROOT_MARGIN = '-40% 0px -55% 0px'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        setActiveSection(hash)
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), HASH_SCROLL_DELAY_MS)
        }
      } else {
        setActiveSection('')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    let scrollEndTimer: NodeJS.Timeout
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
      setIsScrolling(true)
      clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(() => setIsScrolling(false), SCROLL_END_DEBOUNCE_MS)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollEndTimer)
    }
  }, [])

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'education', 'contact']
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
            if (!isScrolling) {
              if (id !== 'hero') {
                window.history.replaceState(null, '', `#${id}`)
              } else {
                window.history.replaceState(null, '', window.location.pathname)
              }
            }
          }
        },
        { rootMargin: SECTION_ROOT_MARGIN, threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [isScrolling])

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

        <DesktopNav activeSection={activeSection} onSectionChange={setActiveSection} />

        <button
          className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <MobileNav
        isOpen={mobileOpen}
        activeSection={activeSection}
        onMenuClose={handleMobileNavLinkClick}
        onSectionChange={setActiveSection}
      />
    </nav>
  )
}
