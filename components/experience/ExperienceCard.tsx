import { ChevronDownIcon } from '@/components/ui/icons'
import { cn } from '@/utils/cn'

interface Experience {
  id: string
  company: string
  role: string
  period: string
  badge: string
  highlights: string[]
}

interface ExperienceCardProps {
  experience: Experience
  isOpen: boolean
  onToggle: (id: string) => void
}

export function ExperienceCard({ experience: exp, isOpen, onToggle }: ExperienceCardProps) {
  const handleToggle = () => onToggle(exp.id)

  return (
    <div className="relative md:pl-10">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-all duration-200 md:block ${
          isOpen ? 'border-primary bg-primary shadow-glow-primary' : 'border-border bg-background'
        }`}
        aria-hidden="true"
      />

      <div
        className={`rounded-xl border transition-all duration-150 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/60 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background ${
          isOpen ? 'border-primary/35 bg-muted' : 'border-border bg-muted/40 hover:border-primary/30 hover:bg-muted/70'
        }`}
      >
        {/* Header - clickable */}
        <button
          className="w-full rounded-t-xl px-5 pb-4 pt-5 text-left outline-none"
          onClick={handleToggle}
          aria-expanded={isOpen}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="font-mono text-base font-semibold text-foreground">{exp.company}</h3>
                <span className="rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground">
                  {exp.badge}
                </span>
              </div>
              <p className="font-mono text-sm text-primary">{exp.role}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{exp.period}</p>
            </div>
            <div className={`mt-1 transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`}>
              <ChevronDownIcon
                className={cn('h-4 w-4 flex-shrink-0 transition-transform duration-200', isOpen && 'rotate-180')}
              />
            </div>
          </div>
        </button>

        {/* Animated expand */}
        <div
          className={cn('grid transition-all duration-150 ease-in-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
        >
          <div className="overflow-hidden">
            <ul className="space-y-3 border-t border-border px-5 pb-5 pt-4">
              {exp.highlights.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1 flex-shrink-0 select-none leading-none text-primary" aria-hidden="true">
                    ▹
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
