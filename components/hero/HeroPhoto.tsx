import Image from 'next/image'

export function HeroPhoto() {
  return (
    <div className="flex-shrink-0">
      <div className="ring-primary/20 shadow-primary/5 h-52 w-52 overflow-hidden rounded-full border border-border shadow-2xl ring-1 sm:h-60 sm:w-60 md:h-80 md:w-80 md:rounded-2xl">
        <Image
          src="/my-photo.jpg"
          alt="Mykola Moskalenko"
          width={320}
          height={320}
          sizes="(max-width: 639px) 208px, (max-width: 767px) 240px, 320px"
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>
    </div>
  )
}
