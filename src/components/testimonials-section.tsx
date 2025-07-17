"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Heart, MapPin, Sparkles } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "¡Shaddai es simplemente mágico! Mi hija llega súper feliz todos los días y ha aprendido muchísimo. El personal es increíble y se nota que aman lo que hacen. ¡100% recomendado!",
    parentName: "María González",
    childInfo: "Mamá de Sofía, 3 años",
    location: "Valle Feliz",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    video: true,
    highlight: "¡Súper Feliz!",
    timeAtCenter: "2 años",
    bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
  },
  {
    id: 2,
    quote:
      "¡No puedo creer lo mucho que ha crecido Diego! Ahora habla inglés, es más sociable y cada día me sorprende con algo nuevo. ¡Shaddai es lo mejor que nos pudo pasar!",
    parentName: "Carlos Rodríguez",
    childInfo: "Papá de Diego, 4 años",
    location: "Centro",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    video: false,
    highlight: "¡Súper Inteligente!",
    timeAtCenter: "1.5 años",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
  },
  {
    id: 3,
    quote:
      "Como mamá trabajadora necesitaba un lugar súper seguro y confiable. ¡Shaddai superó todas mis expectativas! Emma está feliz, segura y aprendiendo un montón. ¡Son increíbles!",
    parentName: "Ana Martínez",
    childInfo: "Mamá de Emma, 18 meses",
    location: "Residencial Norte",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    video: true,
    highlight: "¡Súper Seguro!",
    timeAtCenter: "8 meses",
    bgColor: "bg-gradient-to-br from-green-100 to-green-200",
  },
  {
    id: 4,
    quote:
      "¡Los gemelos están súper adaptados y felices! El ambiente familiar y la atención personalizada han sido perfectos. Los educadores son excepcionales y se nota el amor en todo lo que hacen.",
    parentName: "Roberto y Carmen Silva",
    childInfo: "Papás de Mateo y Lucas, 2 años",
    location: "Las Flores",
    image: "/placeholder.svg?height=120&width=120",
    rating: 5,
    video: false,
    highlight: "¡Súper Amoroso!",
    timeAtCenter: "1 año",
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const goTo = (index: number) => {
    setIsAutoPlaying(false)
    setCurrent(index)
  }

  const currentTestimonial = testimonials[current]

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/section-4.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/90 via-blue-50/85 to-pink-100/90 backdrop-blur-sm" />

      {/* Fun Background Elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-[color:var(--shaddai-yellow)] rounded-full opacity-30 animate-bounce" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-[color:var(--shaddai-pink)] rounded-full opacity-40" />
      <div className="absolute bottom-20 left-1/4 w-18 h-18 bg-[color:var(--shaddai-blue)] rounded-full opacity-35" />
      <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[color:var(--shaddai-orange)] rounded-full opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-pink)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Heart className="w-5 h-5" />
            ¡Familias Súper Felices!
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-[color:var(--shaddai-green)] mb-6 leading-tight drop-shadow-lg">
            Testimonios Reales 💕
          </h2>
          <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            ¡Escucha las experiencias increíbles de nuestras familias y descubre por qué nos aman tanto! 🌟
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[color:var(--shaddai-green)] hover:bg-[color:var(--shaddai-green)]/80 rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[color:var(--shaddai-green)] hover:bg-[color:var(--shaddai-green)]/80 rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <div
            className={`${currentTestimonial.bgColor} backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border-8 border-white transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Section */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.parentName}
                    width={120}
                    height={120}
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-8 border-white shadow-xl object-cover"
                  />
                  {currentTestimonial.video && (
                    <div className="absolute -bottom-2 -right-2 bg-[color:var(--shaddai-green)] rounded-full p-3 shadow-lg">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>

                <h4 className="text-2xl font-display font-bold text-gray-800 mb-2">{currentTestimonial.parentName}</h4>
                <p className="text-gray-600 text-lg mb-3">{currentTestimonial.childInfo}</p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{currentTestimonial.location}</span>
                </div>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[color:var(--shaddai-yellow)] fill-current" />
                  ))}
                </div>

                {/* Time at center */}
                <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-green)] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  {currentTestimonial.timeAtCenter} con nosotros
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1">
                <Quote className="w-12 h-12 text-[color:var(--shaddai-pink)] mb-6" />
                <blockquote className="text-gray-800 text-xl lg:text-2xl leading-relaxed mb-8 font-medium bg-white/70 backdrop-blur-sm rounded-xl p-6">
                  {currentTestimonial.quote}
                </blockquote>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-yellow)] text-gray-800 px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                  <Star className="w-5 h-5" />
                  {currentTestimonial.highlight}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[color:var(--shaddai-green)] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Fun Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4  text-black gap-6 mt-16">
          {[
            { value: "98%", label: "¡Súper Satisfechos!", color: "border-[color:var(--shaddai-green)]" },
            { value: "150+", label: "Familias Felices", color: "border-[color:var(--shaddai-blue)]" },
            { value: "5★", label: "¡Súper Rating!", color: "border-[color:var(--shaddai-pink)]" },
            { value: "15+", label: "Años de Magia", color: "border-[color:var(--shaddai-yellow)]" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 ${stat.color} transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
