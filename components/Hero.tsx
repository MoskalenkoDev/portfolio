import Image from "next/image";
import {
  LocationIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  PhoneIcon,
  EmailIcon,
} from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="min-h-dvh flex items-center pt-20 pb-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Content */}
          <div className="flex-1 min-w-0 flex flex-col items-center text-center md:items-start md:text-left">
            <p className="font-mono text-[#58a6ff] text-xs tracking-[0.25em] mb-5 uppercase">
              Hello, I&apos;m
            </p>

            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e6edf3] leading-tight mb-3">
              Mykola
              <br />
              Moskalenko
            </h1>

            <div className="flex items-center gap-1 mb-6">
              <span className="font-mono text-lg sm:text-xl text-[#8b949e]">
                Full Stack Developer
              </span>
              <span
                className="inline-block w-px h-5 bg-[#58a6ff] animate-blink"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#8b949e] text-sm">
                <LocationIcon className="w-4 h-4 text-[#58a6ff] flex-shrink-0" />
                Covilhã, Portugal
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                <span
                  className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-emerald-400 font-mono text-xs">
                  Available immediately
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-8">
              <a
                href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 font-mono text-sm px-5 py-3 bg-[#58a6ff] text-[#0d1117] rounded font-semibold hover:bg-[#79b8ff] active:scale-95 transition-all duration-150"
              >
                <DownloadIcon className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-mono text-sm px-5 py-3 border border-[#30363d] text-[#e6edf3] rounded hover:border-[#58a6ff] hover:text-[#58a6ff] active:scale-95 transition-all duration-150"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/MoskalenkoDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/moskalenko-mykola-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </a>
              <a
                href="tel:+351917296987"
                className="p-2.5 text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150"
                aria-label="Call +351 917 296 987"
              >
                <PhoneIcon />
              </a>
              <a
                href="mailto:moskalenkomykoladev@gmail.com"
                className="p-2.5 text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-150"
                aria-label="Send email"
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full md:rounded-2xl overflow-hidden border border-[#30363d] ring-1 ring-[#58a6ff]/20 shadow-2xl shadow-[#58a6ff]/5">
              <Image
                src="/my-photo.jpg"
                alt="Mykola Moskalenko"
                width={320}
                height={320}
                sizes="(max-width: 639px) 208px, (max-width: 767px) 240px, 320px"
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
