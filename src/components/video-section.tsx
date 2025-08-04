"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handlePlay = () => {
    setIsPlaying(true)
    setShowControls(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 300)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Distinctive Element - Video Frame Pattern */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Conoce a nuestro director
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre por qué Shaddai Day Care es el lugar perfecto para tu pequeño
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto">
            <div
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {!isPlaying && (
                <div className="relative cursor-pointer group" onClick={handlePlay}>
                  <div className="relative w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden">
                    <Image
                      src="/images/director-poster.webp"
                      width={800}
                      height={500}
                      alt="Director de Shaddai Day-Care"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300 animate-pulse">
                      <Play className="w-8 h-8 sm:w-12 sm:h-12 text-[#1d7748] ml-1" />
                    </div>
                  </div>
                </div>
              )}

              {isPlaying && (
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="w-full h-auto object-cover"
                    controls={showControls}
                    poster="/placeholder.svg?height=500&width=800"
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/video-class-2.webm" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  {!showControls && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={togglePlayPause}
                        className="bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
                        ) : (
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 ml-1" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Message */}
          <div
            className={`text-center mt-8 sm:mt-12 bg-gray-50 rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl text-gray-700 font-medium italic leading-relaxed">
              En Shaddai Day-Care, cada día es una oportunidad para que los niños descubran, aprendan y crezcan
              rodeados de amor y cuidado profesional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
