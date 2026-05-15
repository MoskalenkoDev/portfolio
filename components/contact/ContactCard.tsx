interface ContactLink {
  label: string
  value: string
  display: string
  href: string
  external: boolean
  icon: React.ReactNode
}

interface ContactCardProps {
  link: ContactLink
}

export function ContactCard({ link }: ContactCardProps) {
  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="bg-muted/50 hover:border-primary/40 group flex flex-col items-center gap-3 rounded-xl border border-border p-5 text-center transition-all duration-150 hover:bg-muted active:scale-[0.98]"
    >
      <div className="text-muted-foreground transition-colors duration-150 group-hover:text-primary">{link.icon}</div>
      <div>
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-dim-deep">{link.label}</p>
        <p className="break-all font-mono text-sm leading-snug text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
          {link.display}
        </p>
      </div>
    </a>
  )
}
