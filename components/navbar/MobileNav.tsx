import { Button } from '@/components/ui/Button'

import { NavLink } from './NavLink'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

interface MobileNavProps {
  isOpen: boolean
  activeSection: string
  onLinkClick: () => void
}

export function MobileNav({ isOpen, activeSection, onLinkClick }: MobileNavProps) {
  return (
    <div
      className={`-mx-6 overflow-hidden transition-all duration-150 ease-in-out md:hidden ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      {isOpen && <div className="border-b border-border" />}
      <div className="flex flex-col gap-4 bg-background px-6 py-5">
        {navLinks.map((link) => {
          const id = link.href.slice(1)
          const isActive = activeSection === id
          return (
            <NavLink key={link.href} href={link.href} label={link.label} isActive={isActive} onClick={onLinkClick} />
          )
        })}
        <Button
          href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf"
          download
          variant="secondary"
          size="sm"
          onClick={onLinkClick}
        >
          Download Resume
        </Button>
      </div>
    </div>
  )
}
