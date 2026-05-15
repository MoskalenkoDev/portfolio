const languages = [
  { name: 'English', level: 'C1 - Professional' },
  { name: 'Ukrainian', level: 'Native' },
  { name: 'Russian', level: 'Native' },
  { name: 'Portuguese', level: 'B1' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-2 border-t border-border px-6 py-20 md:scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">01. about</p>
        <h2 className="mb-10 font-mono text-3xl font-bold text-foreground">About Me</h2>

        <div className="grid gap-10 md:grid-cols-5 lg:gap-16">
          <div className="space-y-4 leading-relaxed text-muted-foreground md:col-span-3">
            <p>
              I&apos;m a full stack developer with <span className="text-foreground">5+ years of experience</span>{' '}
              building production web applications - from dynamic data-driven UIs to backend services and APIs. My stack
              centers on <span className="text-foreground">JavaScript, TypeScript, React, Next.js,</span> and{' '}
              <span className="text-foreground">Node.js</span>.
            </p>
            <p>
              My background spans freelance work, consulting across multiple client teams, and full-time engineering
              roles. I&apos;m comfortable owning technical solutions end-to-end - architecture decisions,
              implementation, deployment - and equally comfortable integrating into an existing team, raising code
              quality, and balancing the speed vs. quality tradeoff without slowing delivery.
            </p>
            <p>
              I use <span className="text-foreground">AI tools daily</span> to speed up development and find creative
              solutions. Currently based in <span className="text-foreground">Covilhã, Portugal</span>, EU authorized,
              no sponsorship needed. Available immediately for remote roles.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="bg-muted/50 hover:border-primary/30 flex items-center justify-between rounded-lg border border-border p-3 transition-colors duration-150"
                >
                  <span className="font-mono text-sm text-foreground">{lang.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
