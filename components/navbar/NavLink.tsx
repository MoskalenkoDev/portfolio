import Link from 'next/link'

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
      className={`font-mono text-sm transition-colors ${
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </Link>
  )
}
