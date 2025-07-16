"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Shaddai Day-Care ha sido una bendición para nuestra familia. El personal realmente se preocupa por el desarrollo de cada niño.",
    parentName: "María González",
    childInfo: "Madre de Sofía, 3 años",
    location: "Valle Feliz",
    image: "/images/testi-1.webp",
    rating: 5,
    video: true,
  },
  {
    id: 2,
    quote:
      "La metodología que utilizan es increíble. Mi hijo ha desarrollado habilidades sociales y cognitivas que no esperaba a su edad.",
    parentName: "Carlos Rodríguez",
    childInfo: "Padre de Diego, 4 años",
    location: "Centro",
    image: "/images/testi-2.webp",
    rating: 5,
    video: false,
  },
  {
    id: 3,
    quote:
      "Como madre trabajadora, necesitaba un lugar seguro y confiable. Shaddai superó todas mis expectativas.",
    parentName: "Ana Martínez",
    childInfo: "Madre de Emma, 18 meses",
    location: "Residencial Norte",
    image: "/images/testi-3.webp",
    rating: 5,
    video: true,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.2 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <section ref={sectionRef} className="testimonials-section-dark py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-display font-bold text-white mb-4">Testimonios Reales</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Escucha la experiencia de nuestras familias.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className={`relative testimonial-card transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:scale-105 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-xl hover:scale-105 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Image
                src={t.image}
                alt={t.parentName}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              />
              {t.video && (
                <div className="absolute -bottom-2 -right-2 bg-shaddai-green rounded-full p-2 shadow-md">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div className="text-white">
              <Quote className="w-6 h-6 mb-3 text-white/60" />
              <p className="italic text-white/90 text-lg mb-4 leading-relaxed">“{t.quote}”</p>
              <div className="font-bold">{t.parentName}</div>
              <div className="text-sm text-white/70">{t.childInfo}</div>
              <div className="text-xs text-white/50">{t.location}</div>
              <div className="mt-3 flex">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
