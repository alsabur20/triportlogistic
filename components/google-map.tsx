export function GoogleMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-[#ff4800] uppercase font-extrabold mb-2">Our Offices</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Find Us</h2>
          <p className="text-gray-600">
            Visit either of our offices in Dubai or Lahore, or contact us for more information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dubai Office */}
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="bg-[#ff4800] px-5 py-3 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm">Dubai Office — UAE</h3>
                <p className="text-orange-100 text-xs">ACICO Business Park, Dubai</p>
              </div>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.37840355731!2d55.333512274944376!3d25.25785312924202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce09d55d4ab%3A0x9ab0b76200a25702!2sACICO%20Business%20Park!5e0!3m2!1sen!2s!4v1789500471843!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Triport Logistics Dubai Office — ACICO Business Park, Dubai, UAE"
              />
            </div>
          </div>

          {/* Lahore Office */}
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="bg-[#ff4800] px-5 py-3 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-sm">Lahore Office — Pakistan</h3>
                <p className="text-orange-100 text-xs">Plot 107, Block C1, Engineers Town, Lahore</p>
              </div>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217557.73160720873!2d73.91335642812498!3d31.56973512831082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900c017c6122b%3A0x3d66708a4493c828!2sPlot%20107%2C%20Block%20C1%20Block%20C%201%20Engineers%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1789500521171!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Triport Logistics Lahore Office — Plot 107, Block C1, Engineers Town, Lahore, Pakistan"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
