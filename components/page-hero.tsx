import Image from "next/image"
import Link from "next/link"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({
  title,
  backgroundImage = "/header.jpg",
}: PageHeroProps) {
  // Strip any legacy query params if present
  const cleanImage = backgroundImage.split("?")[0]

  return (
    <div className="relative h-[40vh] min-h-[300px] overflow-hidden mb-12">
      {/* Optimized background image */}
      <Image
        src={cleanImage}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

          <div className="flex justify-center items-center space-x-3 text-sm md:text-base">
            <Link href="/" className="text-white hover:underline" aria-label="Back to Homepage">
              Home
            </Link>
            <span className="w-5 h-5 bg-white rounded-full inline-block" />
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
