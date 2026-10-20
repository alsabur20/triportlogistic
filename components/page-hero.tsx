import Image from "next/image"
import Link from "next/link"

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  asH1?: boolean
}

export function PageHero({
  title,
  backgroundImage = "/hero-ocean.jpg",
  asH1 = true,
}: PageHeroProps) {
  // Strip any legacy query params if present
  const cleanImage = backgroundImage.split("?")[0]

  return (
    <div className="relative h-[36vh] min-h-[280px] max-h-[420px] overflow-hidden mb-12 bg-gray-950">
      {/* Optimized background image */}
      <Image
        src={cleanImage}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-950/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
        <div>
          {asH1 ? (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              {title}
            </h1>
          ) : (
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              {title}
            </div>
          )}

          <div className="flex justify-center items-center space-x-3 text-xs sm:text-sm text-gray-300">
            <Link href="/" className="hover:text-[#ff4800] transition-colors" aria-label="Back to Homepage">
              Home
            </Link>
            <span className="w-1.5 h-1.5 bg-[#ff4800] rounded-full inline-block" />
            <span className="text-white font-medium">{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
