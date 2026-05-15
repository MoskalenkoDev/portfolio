import Link from 'next/link'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}

export function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-mono text-sm transition-colors ${
        isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {label}
    </Link>
  )
}
