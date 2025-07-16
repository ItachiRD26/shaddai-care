"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.2 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 300)
  }

  return (
    <section
      ref={sectionRef}
      className="video-section-dark py-24"
      style={{
        backgroundImage: !isPlaying
          ? "url('/images/director-poster.webp')" // Cambia esta imagen por la del director
          : "none",
      }}
    >
      <div className="video-overlay-content max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-display font-bold text-white mb-8 drop-shadow-lg">
            Mensaje de Bienvenida del Director
          </h2>

          <div className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden transition-all duration-1000 delay-300">
            {!isPlaying && (
              <div
                className="relative group bg-black/30 cursor-pointer"
                onClick={handlePlay}
              >
                <img
                  src="/images/director-poster.webp" // Imagen previa del video
                  alt="Director"
                  className="w-full object-cover h-auto"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="bg-shaddai-green/90 p-6 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            )}

            {isPlaying && (
              <video
                ref={videoRef}
                className="w-full h-auto object-cover min-h-[60vh]"
                controls
                poster="/images/director-poster.webp"
              >
                <source src="/videos/mensaje.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
