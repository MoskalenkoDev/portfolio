import Link from 'next/link'

import { cn } from '@/utils/cn'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  onNavLinkClick?: (id: string) => void
}

export function NavLink({ href, label, isActive, onClick, onNavLinkClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const id = href.replace(/^#/, '')
    const element = document.getElementById(id)
    if (element) {
      onNavLinkClick?.(id)
      window.history.replaceState(null, '', href)
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        'rounded px-2 py-1 font-mono text-sm outline-none transition-all duration-150 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {label}
    </Link>
  )
}
