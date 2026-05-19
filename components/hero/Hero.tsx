import { HeroContent } from './HeroContent'
import { HeroPhoto } from './HeroPhoto'

export default function Hero() {
  return (
    <section id="hero" className="flex min-h-dvh items-center px-6 pb-16 pt-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
          <HeroContent />
          <HeroPhoto />
        </div>
      </div>
    </section>
  )
}
