"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Heart, Star } from "lucide-react"
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
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/section-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-purple-50/65 to-pink-100/70 backdrop-blur-sm" />

      {/* Fun Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-[color:var(--shaddai-yellow)] rounded-full opacity-40 animate-bounce" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-[color:var(--shaddai-pink)] rounded-full opacity-50" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[color:var(--shaddai-green)] rounded-full opacity-30" />
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-[color:var(--shaddai-orange)] rounded-full opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-pink)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Heart className="w-5 h-5" />
              ¡Mensaje Especial!
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="text-6xl lg:text-7xl font-display font-bold text-[color:var(--shaddai-green)] mb-6 leading-tight drop-shadow-lg">
              ¡Hola Familias! 👋
            </h2>
            <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              Conoce a nuestra director y descubre por qué Shaddai Day Care es el lugar más feliz para tu pequeño 🌈
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {!isPlaying && (
                <div className="relative cursor-pointer group" onClick={handlePlay}>
                  {/* Background Image */}
                  <div className="relative w-full h-[600px] overflow-hidden">
                    <Image
                      src="/images/director-poster.webp"
                      width={900}
                      height={900}
                      alt="Niños felices jugando en Shaddai Day-Care"
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-all duration-300">
                    <div className="relative">
                      {/* Animated Rings */}
                      <div className="absolute inset-0 bg-[color:var(--shaddai-yellow)] rounded-full animate-ping opacity-40" />
                      <div className="absolute inset-0 bg-[color:var(--shaddai-pink)] rounded-full animate-pulse opacity-30" />

                      {/* Play Button */}
                      <div className="relative bg-gradient-to-r from-[color:var(--shaddai-green)] to-[color:var(--shaddai-blue)] p-8 rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <Play className="w-16 h-16 text-white ml-2" />
                      </div>
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
                    poster="/placeholder.svg?height=600&width=900"
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/videos/mensaje.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  {/* Custom Controls Overlay */}
                  {!showControls && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={togglePlayPause}
                        className="bg-[color:var(--shaddai-green)]/80 hover:bg-[color:var(--shaddai-green)] p-6 rounded-full transition-all duration-300 shadow-xl"
                      >
                        {isPlaying ? (
                          <Pause className="w-10 h-10 text-white" />
                        ) : (
                          <Play className="w-10 h-10 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[color:var(--shaddai-yellow)] rounded-full" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[color:var(--shaddai-pink)] rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[color:var(--shaddai-blue)] rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[color:var(--shaddai-orange)] rounded-full" />
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16 bg-gradient-to-r from-[color:var(--shaddai-yellow)]/20 to-[color:var(--shaddai-pink)]/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[color:var(--shaddai-yellow)] fill-current" />
              <Star className="w-6 h-6 text-[color:var(--shaddai-yellow)] fill-current" />
              <Star className="w-6 h-6 text-[color:var(--shaddai-yellow)] fill-current" />
            </div>
            <p className="text-2xl text-gray-800 font-medium italic leading-relaxed">
              En Shaddai Day-Care, cada día es una oportunidad mágica para que los niños descubran, aprendan y crezcan
              rodeados de amor infinito 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
