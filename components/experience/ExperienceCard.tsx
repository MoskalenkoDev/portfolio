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

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`duration-250 h-4 w-4 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
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
        className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
          isOpen ? 'border-primary/35 bg-muted' : 'bg-muted/40 hover:border-primary/20 hover:bg-muted/70 border-border'
        }`}
      >
        {/* Header - clickable */}
        <button className="w-full px-5 pb-4 pt-5 text-left" onClick={handleToggle} aria-expanded={isOpen}>
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
              <ChevronDown open={isOpen} />
            </div>
          </div>
        </button>

        {/* Animated expand */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-[600px]' : 'max-h-0'
          )}
        >
          <ul className="space-y-3 border-t border-border px-5 pb-5 pt-4">
            {exp.highlights.map((point, j) => (
              <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 flex-shrink-0 select-none text-primary" aria-hidden="true">
                  ▹
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
