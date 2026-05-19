interface SkillChipProps {
  name: string
  years: number
}

export function SkillChip({ name, years }: SkillChipProps) {
  return (
    <span className="inline-flex cursor-default items-center gap-1.5 rounded border border-border bg-muted/60 px-2.5 py-1 font-mono text-sm text-foreground transition-colors duration-150 hover:border-primary/30 hover:bg-muted">
      {name}
      <span className="text-xs text-muted-foreground">{years}y</span>
    </span>
  )
}
