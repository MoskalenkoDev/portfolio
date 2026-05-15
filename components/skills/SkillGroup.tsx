import { SkillChip } from './SkillChip'

interface Skill {
  name: string
  years: number
}

interface SkillGroupProps {
  category: string
  skills: Skill[]
}

export function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <div>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillChip key={skill.name} name={skill.name} years={skill.years} />
        ))}
      </div>
    </div>
  )
}
