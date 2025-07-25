"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Shaddai es simplemente increíble. Mi hija llega feliz todos los días y ha aprendido muchísimo. El personal es excepcional y se nota que aman lo que hacen.",
    parentName: "María González",
    childInfo: "Mamá de Sofía, 3 años",
    location: "Valle Feliz",
    image: "/images/prueba.jpg?height=80&width=80",
    rating: 5,
    timeAtCenter: "2 años",
  },
  {
    id: 2,
    quote:
      "No puedo creer lo mucho que ha crecido Diego. Ahora habla inglés, es más sociable y cada día me sorprende con algo nuevo. Shaddai es lo mejor que nos pudo pasar.",
    parentName: "Carlos Rodríguez",
    childInfo: "Papá de Diego, 4 años",
    location: "Centro",
    image: "/images/prueba.jpg?height=80&width=80",
    rating: 5,
    timeAtCenter: "1.5 años",
  },
  {
    id: 3,
    quote:
      "Como mamá trabajadora necesitaba un lugar seguro y confiable. Shaddai superó todas mis expectativas. Emma está feliz, segura y aprendiendo constantemente.",
    parentName: "Ana Martínez",
    childInfo: "Mamá de Emma, 18 meses",
    location: "Residencial Norte",
    image: "/images/prueba.jpg?height=80&width=80",
    rating: 5,
    timeAtCenter: "8 meses",
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Distinctive Element - Quote Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-16 h-16 border-2 border-[#fcafc2]/20 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-32 right-20 w-12 h-12 bg-[#ffd44d]/20 rounded-full animate-bounce"
          style={{ animationDuration: "2s" }}
        ></div>
        <Quote className="absolute top-16 right-16 w-8 h-8 text-[#1d7748]/10 animate-pulse" />
        <Quote
          className="absolute bottom-20 left-20 w-6 h-6 text-[#4f75ff]/10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Lo que dicen las familias
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Escucha las experiencias reales de nuestras familias y descubre por qué confían en nosotros
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-100 mx-8 sm:mx-12 transition-all duration-500 hover:shadow-md">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Profile Section */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.parentName}
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-gray-100 shadow-sm object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{currentTestimonial.parentName}</h4>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">{currentTestimonial.childInfo}</p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mb-4">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{currentTestimonial.location}</span>
                </div>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffd44d] fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Time at center */}
                <div className="inline-flex items-center gap-2 bg-[#1d7748] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {currentTestimonial.timeAtCenter} con nosotros
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#1d7748] mb-4 sm:mb-6" />
                <blockquote className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 font-medium">
                  {currentTestimonial.quote}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-[#1d7748] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "98%", label: "Familias satisfechas", color: "#1d7748" },
            { value: "150+", label: "Familias felices", color: "#4f75ff" },
            { value: "5★", label: "Calificación promedio", color: "#ffd44d" },
            { value: "15+", label: "Años de experiencia", color: "#f68026" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
