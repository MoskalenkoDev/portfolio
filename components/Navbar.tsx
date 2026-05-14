"use client";

import { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@/components/ui/Icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname);
    setActiveSection("");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 bg-[#0d1117] transition-all duration-300 border-b ${
        scrolled || mobileOpen
          ? "border-[#30363d]"
          : "border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className="font-mono text-[#58a6ff] font-semibold text-base tracking-wider hover:text-[#79b8ff] transition-colors duration-150"
        >
          mm.dev
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-sm transition-colors duration-150 tracking-wide ${
                  isActive
                    ? "text-[#58a6ff]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf"
            download
            className="font-mono text-sm px-3 py-1.5 border border-[#58a6ff] text-[#58a6ff] rounded hover:bg-[#58a6ff]/10 transition-colors duration-150"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8b949e] hover:text-[#e6edf3] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`-mx-6 md:hidden overflow-hidden transition-all duration-150 ease-in-out ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {mobileOpen && <div className="border-b border-[#30363d]" />}
        <div className="bg-[#0d1117] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-sm transition-colors ${
                  isActive
                    ? "text-[#58a6ff]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/Mykola%20Moskalenko%20Full%20Stack%20Resume.pdf"
            download
            className="font-mono text-sm text-[#58a6ff] hover:text-[#79b8ff] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
