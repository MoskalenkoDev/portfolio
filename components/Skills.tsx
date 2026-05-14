const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", years: 5 },
      { name: "TypeScript", years: 5 },
      { name: "React", years: 5 },
      { name: "Next.js", years: 4 },
      { name: "Tailwind CSS", years: 4 },
      { name: "Redux", years: 5 },
      { name: "MUI", years: 5 },
      { name: "SASS", years: 5 },
      { name: "Webpack", years: 5 },
      { name: "TanStack Table", years: 3 },
      { name: "TanStack Query", years: 3 },
      { name: "Headless UI", years: 2 },
      { name: "RJSF", years: 1 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", years: 5 },
      { name: "Express", years: 5 },
      { name: "REST APIs", years: 5 },
      { name: "GraphQL", years: 2 },
      { name: "Microservices", years: 2 },
      { name: "NestJS", years: 1 },
      { name: "C#", years: 1 },
      { name: "ASP.NET", years: 1 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", years: 5 },
      { name: "PostgreSQL", years: 4 },
      { name: "MySQL", years: 2 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", years: 4 },
      { name: "CI/CD", years: 3 },
      { name: "AWS", years: 2 },
      { name: "OpenAPI", years: 3 },
      { name: "Jest", years: 3 },
      { name: "Chrome DevTools", years: 5 },
      { name: "Storyblok", years: 2 },
      { name: "AI Tools", years: 3 },
      { name: "Strapi", years: 1 },
      { name: "RabbitMQ", years: 1 },
      { name: "Salesforce", years: 1 },
      { name: "Selenium", years: 1 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 border-t border-[#30363d] bg-[#161b22]/20 scroll-mt-2 md:scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[#58a6ff] text-xs tracking-[0.2em] mb-2 uppercase">
          02. skills
        </p>
        <h2 className="font-mono text-3xl font-bold text-[#e6edf3] mb-10">
          Tech Stack
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-[#58a6ff] tracking-[0.2em] uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#30363d] bg-[#161b22]/60 font-mono text-sm text-[#cdd9e5] hover:border-[#58a6ff]/40 hover:text-[#e6edf3] transition-colors duration-150 cursor-default"
                  >
                    {skill.name}
                    <span className="text-xs text-[#6e7681]">
                      {skill.years}y
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
