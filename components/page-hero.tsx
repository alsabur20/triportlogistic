interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=400&width=1200",
}: PageHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
      <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl md:text-2xl max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
