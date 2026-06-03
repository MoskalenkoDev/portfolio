'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import { CloseIcon, HamburgerIcon } from '@/components/ui/icons'
import { cn } from '@/utils/cn'

import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const SCROLL_THRESHOLD = 24
const SCROLL_END_DEBOUNCE_MS = 150
const SECTION_ROOT_MARGIN = '-30% 0px -40% 0px'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Refs avoid re-creating IntersectionObservers on every scroll tick
  const isScrollingRef = useRef(false)
  const clickOverrideRef = useRef<string | null>(null)

  const handleSectionChange = (id: string) => {
    setActiveSection(id)
    clickOverrideRef.current = id
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        handleSectionChange(hash)
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
      isScrollingRef.current = true
      clearTimeout(scrollEndTimer)
      scrollEndTimer = setTimeout(() => {
        isScrollingRef.current = false
        // Safety net: if the target section never intersected, unlock the observer
        clickOverrideRef.current = null
      }, SCROLL_END_DEBOUNCE_MS)
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
          if (!entry.isIntersecting) return

          if (clickOverrideRef.current !== null) {
            // User clicked a link - only accept when the target section arrives
            if (id === clickOverrideRef.current) {
              setActiveSection(id)
              clickOverrideRef.current = null
            }
            return
          }

          setActiveSection(id)
          if (id !== 'hero') {
            window.history.replaceState(null, '', `#${id}`)
          } else {
            window.history.replaceState(null, '', window.location.pathname)
          }
        },
        { rootMargin: SECTION_ROOT_MARGIN, threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    handleSectionChange('hero')
    history.replaceState(null, '', window.location.pathname)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMobileMenuToggle = () => setMobileOpen(!mobileOpen)

  const handleMobileNavLinkClick = () => setMobileOpen(false)

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 top-0 z-50 border-b bg-background px-6 transition-all duration-300',
        scrolled || mobileOpen ? 'border-border' : 'border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="logo-glow rounded px-2 py-1 font-mono text-base font-semibold tracking-wider text-primary outline-none transition-all duration-150 hover:text-primary-light focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          mm.dev
        </Link>

        <DesktopNav activeSection={activeSection} onSectionChange={handleSectionChange} />

        <button
          className="rounded p-1 text-muted-foreground outline-none transition-all duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
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
        onSectionChange={handleSectionChange}
      />
    </nav>
  )
}
