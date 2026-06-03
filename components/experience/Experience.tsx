'use client'

import { useState } from 'react'

import { ExperienceCard } from './ExperienceCard'

const experiences = [
  {
    id: 'chimplie',
    company: 'Chimplie',
    role: 'Web Developer, Contract',
    period: 'Aug 2023 - Present',
    badge: 'Full-time',
    highlights: [
      'Delivered features across multiple client projects; integrated Storyblok and Strapi as headless CMS solutions, eliminating manual content deployments and bridging CMS with CRM workflows.',
      'Built fully dynamic OpenAPI-driven UIs - TanStack Table layouts, deeply nested RJSF forms with pre-populated defaults, CSV export, and data aggregation - all schema-driven to handle runtime type changes without code updates.',
      'Extended a Salesforce-hosted client site with custom JS integrations, enabling non-technical managers to independently test and configure tools including an AI chatbot trained on proprietary company data.',
      'Joined as a consultant on a team shipping fast with AI but producing buggy code - introduced component splitting, extracted repeated logic, enforced PR reviews. Raised code quality without slowing delivery.',
      'Worked both as a standalone developer owning full technical solutions and as part of client teams balancing speed vs. quality tradeoffs.',
    ],
  },
  {
    id: 'freelance',
    company: 'Self-Employed',
    role: 'Freelance Developer',
    period: 'Jun 2022 - Aug 2023',
    badge: 'Freelance',
    highlights: [
      'Maintained and extended a full-stack C# backend + React frontend for a long-term US client, delivering features and improvements across the entire stack.',
      'Built a P2P poker chip exchange platform (Next.js, Node.js, MongoDB) with real-time chat, message history, file upload, and bot-automated transactions via a third-party poker API.',
    ],
  },
  {
    id: 'magnificent',
    company: 'Magnificent Systems',
    role: 'Software Developer',
    period: 'May 2021 - Jun 2022',
    badge: 'Full-time',
    highlights: [
      'Built a full-featured internal task management system covering ticket assignment, team workload tracking, and project monitoring across multiple teams.',
      'Built a microservice that ingested Excel files, generated HTML/CSS layouts, and produced 120-page PDF catalogs - custom algorithm for page overflow prevention, element grouping, and precise spacing calculations.',
      'Onboarded quickly into a legacy codebase: ASP.NET backend, React frontend with a legacy MUI version - delivering contributions from day one despite significant technical debt.',
    ],
  },
]

export default function Experience() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([experiences[0].id]))

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <section id="experience" className="scroll-mt-2 border-t border-border px-6 py-20 md:scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">03. experience</p>
        <h2 className="mb-10 font-mono text-3xl font-bold text-foreground">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-3 left-0 top-3 hidden w-px bg-border md:block" aria-hidden="true" />

          <div className="space-y-3">
            {experiences.map((exp) => {
              const isOpen = openIds.has(exp.id)
              return <ExperienceCard key={exp.id} experience={exp} isOpen={isOpen} onToggle={toggle} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
