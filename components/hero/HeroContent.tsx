import { Button } from '@/components/ui/Button'
import { DownloadIcon, EmailIcon, GitHubIcon, LinkedInIcon, LocationIcon, PhoneIcon } from '@/components/ui/icons'

export function HeroContent() {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-primary">Hello, I&apos;m</p>

      <h1 className="mb-3 font-mono text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        <span className="hero-name-gradient">
          Mykola
          <br />
          Moskalenko
        </span>
      </h1>

      <div className="mb-6 flex items-center gap-1">
        <span className="font-mono text-lg text-muted-foreground sm:text-xl">Full Stack Developer</span>
        <span className="inline-block h-5 w-px animate-blink bg-primary" aria-hidden="true" />
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
          <LocationIcon className="h-4 w-4 flex-shrink-0 text-primary" />
          Covilhã, Portugal
        </div>
        <div className="flex items-center justify-center gap-2 text-sm md:justify-start">
          <span
            className="inline-block h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-emerald-400"
            aria-hidden="true"
          />
          <span className="font-mono text-xs text-emerald-400">Available immediately</span>
        </div>
      </div>

      <div className="mb-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf" download variant="primary">
          <DownloadIcon className="h-4 w-4" />
          Download Resume
        </Button>
        <Button href="#contact" variant="secondary">
          Contact Me
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <a
          href="https://github.com/MoskalenkoDev"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded p-2.5 text-muted-foreground outline-none transition-all duration-150 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="GitHub profile"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/moskalenko-mykola-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded p-2.5 text-muted-foreground outline-none transition-all duration-150 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon />
        </a>
        <a
          href="tel:+351917296987"
          className="rounded p-2.5 text-muted-foreground outline-none transition-all duration-150 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Call +351 917 296 987"
        >
          <PhoneIcon />
        </a>
        <a
          href="mailto:moskalenkomykoladev@gmail.com"
          className="rounded p-2.5 text-muted-foreground outline-none transition-all duration-150 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Send email"
        >
          <EmailIcon />
        </a>
      </div>
    </div>
  )
}
