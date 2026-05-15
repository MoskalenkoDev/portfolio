interface SkillChipProps {
  name: string
  years: number
}

export function SkillChip({ name, years }: SkillChipProps) {
  return (
    <span className="bg-muted/60 hover:border-primary/40 inline-flex cursor-default items-center gap-1.5 rounded border border-border px-2.5 py-1 font-mono text-sm text-subtle transition-colors duration-150 hover:text-foreground">
      {name}
      <span className="text-xs text-dim">{years}y</span>
    </span>
  )
}
