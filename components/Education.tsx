import { GraduationIcon } from "@/components/ui/Icons";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 border-t border-[#30363d] bg-[#161b22]/20 scroll-mt-2 md:scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[#58a6ff] text-xs tracking-[0.2em] mb-2 uppercase">
          04. education
        </p>
        <h2 className="font-mono text-3xl font-bold text-[#e6edf3] mb-10">
          Education
        </h2>

        <div className="p-6 rounded-xl border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff]/30 transition-colors duration-200 group">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-[#58a6ff]/10 border border-[#58a6ff]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#58a6ff]/15 transition-colors duration-200">
              <GraduationIcon className="w-5 h-5 text-[#58a6ff]" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-mono text-base font-semibold text-[#e6edf3] leading-snug mb-1.5">
                National Pedagogical Dragomanov University
              </h3>
              <p className="font-mono text-sm text-[#58a6ff] mb-3">
                Bachelor&apos;s in Software Engineering
              </p>
              <span className="inline-block font-mono text-xs text-[#8b949e] bg-[#0d1117] px-3 py-1.5 rounded border border-[#30363d] whitespace-nowrap">
                2018 – 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
