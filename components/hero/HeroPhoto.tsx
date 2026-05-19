import Image from 'next/image'

export function HeroPhoto() {
  return (
    <div className="flex-shrink-0 md:p-3">
      <div className="relative">
        {/* Corner brackets — desktop square only */}
        <div
          className="absolute -left-2.5 -top-2.5 hidden h-5 w-5 border-l-2 border-t-2 border-primary md:block"
          aria-hidden="true"
        />
        <div
          className="absolute -right-2.5 -top-2.5 hidden h-5 w-5 border-r-2 border-t-2 border-primary md:block"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-2.5 -left-2.5 hidden h-5 w-5 border-b-2 border-l-2 border-primary md:block"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-2.5 -right-2.5 hidden h-5 w-5 border-b-2 border-r-2 border-primary md:block"
          aria-hidden="true"
        />

        <div className="photo-glow h-52 w-52 overflow-hidden rounded-full sm:h-60 sm:w-60 md:h-80 md:w-80 md:rounded-2xl">
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
    </div>
  )
}
