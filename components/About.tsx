const languages = [
  { name: "English", level: "C1 - Professional" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "Portuguese", level: "B1" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 border-t border-[#30363d] scroll-mt-2 md:scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[#58a6ff] text-xs tracking-[0.2em] mb-2 uppercase">
          01. about
        </p>
        <h2 className="font-mono text-3xl font-bold text-[#e6edf3] mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
          <div className="md:col-span-3 space-y-4 text-[#8b949e] leading-relaxed">
            <p>
              I&apos;m a full stack developer with{" "}
              <span className="text-[#e6edf3]">5+ years of experience</span>{" "}
              building production web applications - from dynamic data-driven
              UIs to backend services and APIs. My stack centers on{" "}
              <span className="text-[#e6edf3]">
                JavaScript, TypeScript, React, Next.js,
              </span>{" "}
              and <span className="text-[#e6edf3]">Node.js</span>.
            </p>
            <p>
              My background spans freelance work, consulting across multiple
              client teams, and full-time engineering roles. I&apos;m
              comfortable owning technical solutions end-to-end - architecture
              decisions, implementation, deployment - and equally comfortable
              integrating into an existing team, raising code quality, and
              balancing the speed vs. quality tradeoff without slowing delivery.
            </p>
            <p>
              I use <span className="text-[#e6edf3]">AI tools daily</span> to
              speed up development and find creative solutions. Currently based
              in <span className="text-[#e6edf3]">Covilhã, Portugal</span>, EU
              authorized, no sponsorship needed. Available immediately for
              remote roles.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-xs text-[#8b949e] tracking-[0.2em] uppercase mb-5">
              Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-3 rounded-lg border border-[#30363d] bg-[#161b22]/50 hover:border-[#58a6ff]/30 transition-colors duration-150"
                >
                  <span className="font-mono text-sm text-[#e6edf3]">
                    {lang.name}
                  </span>
                  <span className="font-mono text-xs text-[#8b949e]">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
