"use client";

import { useState } from "react";

const experiences = [
  {
    id: "chimplie",
    company: "Chimplie",
    role: "Web Developer, Contract",
    period: "Aug 2023 – Present",
    badge: "Full-time",
    highlights: [
      "Designed and implemented new features across client projects; integrated headless CMS solutions (Storyblok, Strapi) to reduce manual content changes and connect CMS with CRM.",
      "Built dynamic OpenAPI-driven UIs - TanStack Table layouts, deeply nested RJSF forms with pre-populated defaults, CSV export, and data aggregation - all fully dynamic because schema types could change at any point.",
      "Used Salesforce to inject JavaScript on a client website, giving non-technical managers autonomy to test tools including an AI chatbot they were training on company data for customer support.",
      "Joined as a consultant on a team shipping fast with AI but producing buggy code - introduced component splitting, extracted repeated logic, enforced PR reviews. Raised code quality without slowing delivery.",
      "Worked both as a standalone developer owning full technical solutions and as part of client teams balancing speed vs. quality tradeoffs.",
    ],
  },
  {
    id: "freelance",
    company: "Self-Employed",
    role: "Freelance Developer",
    period: "Jun 2022 – Aug 2023",
    badge: "Freelance",
    highlights: [
      "C# backend + React frontend support/maintenance for a US client - new features, bug fixes, and code improvements.",
      "Built a P2P poker chip exchange platform (Next.js, Node.js, MongoDB) with real-time chat, message history, file upload, and bot-automated transactions via a third-party poker API. Project shut down due to lack of funding.",
    ],
  },
  {
    id: "magnificent",
    company: "Magnificent Systems",
    role: "Software Developer",
    period: "May 2021 – Jun 2022",
    badge: "Full-time",
    highlights: [
      "Built an internal project management system similar to Jira for assigning tasks across teams and monitoring tickets.",
      "Built a microservice that ingested Excel files, generated HTML/CSS layouts, and produced 120-page PDF catalogs - custom algorithm for page overflow prevention, element grouping, and complex spacing math to ensure nothing overflowed when there was enough space.",
      "Onboarded quickly into a legacy codebase: ASP.NET backend, React frontend with a very old MUI beta version (0.3xx).",
    ],
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-250 flex-shrink-0 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function Experience() {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set([experiences[0].id]),
  );

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section
      id="experience"
      className="py-20 px-6 border-t border-[#30363d] scroll-mt-2 md:scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[#58a6ff] text-xs tracking-[0.2em] mb-2 uppercase">
          03. experience
        </p>
        <h2 className="font-mono text-3xl font-bold text-[#e6edf3] mb-10">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-3 bottom-3 w-px bg-[#30363d] hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-3">
            {experiences.map((exp) => {
              const isOpen = openIds.has(exp.id);
              return (
                <div key={exp.id} className="md:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute left-0 top-5 w-3 h-3 rounded-full border-2 -translate-x-1/2 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#58a6ff] border-[#58a6ff] shadow-[0_0_8px_rgba(88,166,255,0.5)]"
                        : "bg-[#0d1117] border-[#30363d]"
                    }`}
                    aria-hidden="true"
                  />

                  <div
                    className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-[#161b22] border-[#58a6ff]/35"
                        : "bg-[#161b22]/40 border-[#30363d] hover:border-[#58a6ff]/20 hover:bg-[#161b22]/70"
                    }`}
                  >
                    {/* Header- clickable */}
                    <button
                      className="w-full text-left px-5 pt-5 pb-4"
                      onClick={() => toggle(exp.id)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="font-mono text-base font-semibold text-[#e6edf3]">
                              {exp.company}
                            </h3>
                            <span className="font-mono text-xs text-[#8b949e] bg-[#0d1117] px-2 py-0.5 rounded border border-[#30363d]">
                              {exp.badge}
                            </span>
                          </div>
                          <p className="font-mono text-sm text-[#58a6ff]">
                            {exp.role}
                          </p>
                          <p className="font-mono text-xs text-[#8b949e] mt-1">
                            {exp.period}
                          </p>
                        </div>
                        <div
                          className={`mt-1 transition-colors duration-200 ${isOpen ? "text-[#58a6ff]" : "text-[#8b949e]"}`}
                        >
                          <ChevronDown open={isOpen} />
                        </div>
                      </div>
                    </button>

                    {/* Animated expand */}
                    <div
                      style={{ maxHeight: isOpen ? "600px" : "0" }}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                    >
                      <ul className="px-5 pb-5 space-y-3 border-t border-[#30363d] pt-4">
                        {exp.highlights.map((point, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-sm text-[#8b949e] leading-relaxed"
                          >
                            <span
                              className="text-[#58a6ff] flex-shrink-0 select-none mt-0.5"
                              aria-hidden="true"
                            >
                              ▹
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
