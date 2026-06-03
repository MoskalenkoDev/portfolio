import { GraduationIcon } from '@/components/ui/icons'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-2 border-t border-border bg-muted/20 px-6 py-20 md:scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">04. education</p>
        <h2 className="mb-10 font-mono text-3xl font-bold text-foreground">Education</h2>

        <div className="group rounded-xl border border-border bg-muted/50 p-6 transition-colors duration-200 hover:border-primary/30 hover:bg-muted">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-border transition-colors duration-200 group-hover:border-primary/30">
              <GraduationIcon className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="mb-1.5 font-mono text-base font-semibold leading-snug text-foreground">
                National Pedagogical Dragomanov University
              </h3>
              <p className="mb-3 font-mono text-sm text-primary">Bachelor&apos;s in Software Engineering</p>
              <span className="inline-block whitespace-nowrap rounded border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground">
                2018 - 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
