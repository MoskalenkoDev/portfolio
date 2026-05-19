import { HeroContent } from './HeroContent'
import { HeroPhoto } from './HeroPhoto'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center overflow-hidden px-6 pb-16 pt-28 md:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="hero-glow-left pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="hero-glow-right pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          <HeroContent />
          <HeroPhoto />
        </div>
      </div>
    </section>
  )
}
