import { Button } from '@/components/ui/Button'
import { DownloadIcon, EmailIcon, GitHubIcon, LinkedInIcon, PhoneIcon } from '@/components/ui/icons'

import { ContactCard } from './ContactCard'

const contactLinks = [
  {
    label: 'Email',
    value: 'moskalenkomykoladev@gmail.com',
    display: 'moskalenkomykoladev@gmail.com',
    href: 'mailto:moskalenkomykoladev@gmail.com',
    external: false,
    icon: <EmailIcon />,
  },
  {
    label: 'Phone',
    value: '+351 917 296 987',
    display: '+351 917 296 987',
    href: 'tel:+351917296987',
    external: false,
    icon: <PhoneIcon />,
  },
  {
    label: 'LinkedIn',
    value: 'moskalenko-mykola-dev',
    display: 'moskalenko-mykola-dev',
    href: 'https://www.linkedin.com/in/moskalenko-mykola-dev/',
    external: true,
    icon: <LinkedInIcon />,
  },
  {
    label: 'GitHub',
    value: 'MoskalenkoDev',
    display: 'MoskalenkoDev',
    href: 'https://github.com/MoskalenkoDev',
    external: true,
    icon: <GitHubIcon />,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-2 border-t border-border px-6 py-20 md:scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">05. contact</p>
          <h2 className="mb-4 font-mono text-3xl font-bold text-foreground">Get in Touch</h2>
          <p className="mx-auto max-w-md leading-relaxed text-muted-foreground">
            Available for remote full-time roles, B2B contracts, or consulting engagements. EU timezone. No sponsorship
            needed.
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <ContactCard key={link.label} link={link} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf" download variant="primary">
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
