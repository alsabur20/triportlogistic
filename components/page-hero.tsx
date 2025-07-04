interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({
  title,
  backgroundImage = "/placeholder.svg?height=400&width=1200",
}: PageHeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] overflow-hidden mb-12">
      <div
        className="w-full h-full bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>

          <div className="flex justify-center items-center space-x-3 text-sm md:text-base">
            <a href="/" className="text-white hover:underline">
              Home
            </a>
            <span className="w-5 h-5 bg-white rounded-full"></span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
