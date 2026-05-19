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
      className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/50 p-5 text-center outline-none transition-all duration-150 hover:border-primary/30 hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
    >
      <div className="text-muted-foreground transition-colors duration-150 group-hover:text-primary">{link.icon}</div>
      <div>
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{link.label}</p>
        <p className="break-all font-mono text-sm leading-snug text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
          {link.display}
        </p>
      </div>
    </a>
  )
}
