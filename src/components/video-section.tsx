"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [showPlayButton, setShowPlayButton] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/video-bg.jpeg?height=1080&width=1920&text=Director+Welcome+Background')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-shaddai-green/40"></div>

      {/* Additional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Content Container */}
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-black font-display text-white mb-8 leading-tight drop-shadow-lg">
            Mensaje de Nuestro Director
          </h2>

          {/* Video Player Container - Much Larger */}
          <div
            className={`relative w-full max-w-6xl mx-auto mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
              <video
                className="w-full h-auto min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] object-cover"
                controls
                preload="metadata"
                poster="/images/prueba.jpg?height=800&width=1200&text=Director+Video+Thumbnail"
              >
                <source src="/videos/mensaje.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Tu navegador no soporta el elemento de video.
                  <a href="/videos/mensaje.mp4" className="text-shaddai-yellow underline ml-2">
                    Descargar video
                  </a>
                </p>
              </video>

              {showPlayButton && (
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer"
                  onClick={() => {
                    const video = document.querySelector("video") as HTMLVideoElement
                    if (video) {
                      video.play()
                      setShowPlayButton(false)
                    }
                  }}
                >
                  <div className="bg-shaddai-green/90 backdrop-blur-sm hover:bg-shaddai-green rounded-full p-8 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                    <Play className="w-16 h-16 text-white ml-2" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
