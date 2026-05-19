import { Button } from '@/components/ui/Button'

import { NavLink } from './NavLink'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

interface DesktopNavProps {
  activeSection: string
  onSectionChange: (id: string) => void
}

export function DesktopNav({ activeSection, onSectionChange }: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-4 md:flex">
      {navLinks.map((link) => {
        const id = link.href.slice(1)
        const isActive = activeSection === id
        return (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={isActive}
            onNavLinkClick={onSectionChange}
          />
        )
      })}
      <Button href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf" download variant="secondary" size="sm">
        Resume
      </Button>
    </div>
  )
}
