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
}

export function DesktopNav({ activeSection }: DesktopNavProps) {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => {
        const id = link.href.slice(1)
        const isActive = activeSection === id
        return <NavLink key={link.href} href={link.href} label={link.label} isActive={isActive} />
      })}
      <a
        href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf"
        download
        className="hover:bg-primary/10 rounded border border-primary px-3 py-1.5 font-mono text-sm text-primary transition-colors duration-150"
      >
        Resume
      </a>
    </div>
  )
}
