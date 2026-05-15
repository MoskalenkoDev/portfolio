import { SkillGroup } from './SkillGroup'

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', years: 5 },
      { name: 'TypeScript', years: 5 },
      { name: 'React', years: 5 },
      { name: 'Next.js', years: 4 },
      { name: 'Tailwind CSS', years: 4 },
      { name: 'Redux', years: 5 },
      { name: 'MUI', years: 5 },
      { name: 'SASS', years: 5 },
      { name: 'Webpack', years: 5 },
      { name: 'TanStack Table', years: 3 },
      { name: 'TanStack Query', years: 3 },
      { name: 'Headless UI', years: 2 },
      { name: 'RJSF', years: 1 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', years: 5 },
      { name: 'Express', years: 5 },
      { name: 'REST APIs', years: 5 },
      { name: 'GraphQL', years: 2 },
      { name: 'Microservices', years: 2 },
      { name: 'NestJS', years: 1 },
      { name: 'C#', years: 1 },
      { name: 'ASP.NET', years: 1 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', years: 5 },
      { name: 'PostgreSQL', years: 4 },
      { name: 'MySQL', years: 2 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker', years: 4 },
      { name: 'CI/CD', years: 3 },
      { name: 'AWS', years: 2 },
      { name: 'OpenAPI', years: 3 },
      { name: 'Jest', years: 3 },
      { name: 'Chrome DevTools', years: 5 },
      { name: 'Storyblok', years: 2 },
      { name: 'AI Tools', years: 3 },
      { name: 'Strapi', years: 1 },
      { name: 'RabbitMQ', years: 1 },
      { name: 'Salesforce', years: 1 },
      { name: 'Selenium', years: 1 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/20 scroll-mt-2 border-t border-border px-6 py-20 md:scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">02. skills</p>
        <h2 className="mb-10 font-mono text-3xl font-bold text-foreground">Tech Stack</h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} category={group.category} skills={group.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}
