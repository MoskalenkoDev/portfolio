import {
  EmailIcon,
  PhoneIcon,
  LinkedInIcon,
  GitHubIcon,
  DownloadIcon,
} from "@/components/ui/Icons";

const contactLinks = [
  {
    label: "Email",
    value: "moskalenkomykoladev@gmail.com",
    display: "moskalenkomykoladev\n@gmail.com",
    href: "mailto:moskalenkomykoladev@gmail.com",
    external: false,
    icon: <EmailIcon />,
  },
  {
    label: "Phone",
    value: "+351 917 296 987",
    display: "+351 917 296 987",
    href: "tel:+351917296987",
    external: false,
    icon: <PhoneIcon />,
  },
  {
    label: "LinkedIn",
    value: "moskalenko-mykola-dev",
    display: "moskalenko-mykola-dev",
    href: "https://www.linkedin.com/in/moskalenko-mykola-dev/",
    external: true,
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    value: "MoskalenkoDev",
    display: "MoskalenkoDev",
    href: "https://github.com/MoskalenkoDev",
    external: true,
    icon: <GitHubIcon />,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 border-t border-[#30363d] scroll-mt-2 md:scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-mono text-[#58a6ff] text-xs tracking-[0.2em] mb-2 uppercase">
            05. contact
          </p>
          <h2 className="font-mono text-3xl font-bold text-[#e6edf3] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#8b949e] max-w-md mx-auto leading-relaxed">
            Available for remote full-time roles, B2B contracts, or consulting
            engagements. EU timezone. No sponsorship needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-[#30363d] bg-[#161b22]/50 hover:border-[#58a6ff]/40 hover:bg-[#161b22] active:scale-[0.98] transition-all duration-150 group text-center"
            >
              <div className="text-[#8b949e] group-hover:text-[#58a6ff] transition-colors duration-150">
                {link.icon}
              </div>
              <div>
                <p className="font-mono text-xs text-[#484f58] tracking-widest uppercase mb-1">
                  {link.label}
                </p>
                <p className="font-mono text-sm text-[#8b949e] group-hover:text-[#e6edf3] transition-colors duration-150 break-all leading-snug">
                  {link.display}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 bg-[#58a6ff] text-[#0d1117] rounded font-semibold hover:bg-[#79b8ff] active:scale-95 transition-all duration-150"
          >
            <DownloadIcon className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
