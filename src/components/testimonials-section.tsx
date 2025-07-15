"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "Shaddai Day-Care ha sido una bendición para nuestra familia. El personal realmente se preocupa por el desarrollo de cada niño, y vemos a nuestra hija crecer más segura cada día.",
    parentName: "María González",
    childInfo: "Madre de Sofía, 3 años",
    image: "//images/prueba.jpg?height=100&width=100&text=MG",
    rating: 5,
    color: "green",
    program: "Guardería Plan Básico",
    videoTestimonial: true,
    location: "Valle Feliz",
  },
  {
    id: 2,
    quote:
      "La metodología que utilizan es increíble. Mi hijo ha desarrollado habilidades sociales y cognitivas que no esperaba a su edad. Los recomiendo completamente.",
    parentName: "Carlos Rodríguez",
    childInfo: "Padre de Diego, 4 años",
    image: "//images/prueba.jpg?height=100&width=100&text=CR",
    rating: 5,
    color: "blue",
    program: "Inglés para Niños",
    videoTestimonial: false,
    location: "Centro",
  },
  {
    id: 3,
    quote:
      "Como madre trabajadora, necesitaba un lugar seguro y confiable para mi bebé. Shaddai superó todas mis expectativas. Es como una segunda familia.",
    parentName: "Ana Martínez",
    childInfo: "Madre de Emma, 18 meses",
    image: "/images/prueba.jpg?height=100&width=100&text=AM",
    rating: 5,
    color: "orange",
    program: "Guardería Plan Básico",
    videoTestimonial: true,
    location: "Residencial Norte",
  },
  {
    id: 4,
    quote:
      "El programa de verano fue fantástico. Mi hija no quería que terminara. Las actividades son muy variadas y siempre están supervisadas por profesionales.",
    parentName: "Roberto Silva",
    childInfo: "Padre de Valentina, 6 años",
    image: "/images/prueba.jpg?height=100&width=100&text=RS",
    rating: 5,
    color: "purple",
    program: "Jornada de Verano",
    videoTestimonial: false,
    location: "Las Flores",
  },
  {
    id: 5,
    quote:
      "La comunicación con los padres es excelente. Recibo reportes diarios y puedo ver a mi hijo a través de las cámaras. Me da mucha tranquilidad.",
    parentName: "Patricia Morales",
    childInfo: "Madre de Sebastián, 2 años",
    image: "/images/prueba.jpg?height=100&width=100&text=PM",
    rating: 5,
    color: "teal",
    program: "Guardería Plan Básico",
    videoTestimonial: true,
    location: "Zona Colonial",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "green":
      return {
        bg: "bg-green-50",
        border: "border-green-200",
        accent: "text-green-600",
        solid: "bg-green-500",
        gradient: "from-green-500 to-green-600",
      }
    case "blue":
      return {
        bg: "bg-blue-50",
        border: "border-blue-200",
        accent: "text-blue-600",
        solid: "bg-blue-500",
        gradient: "from-blue-500 to-blue-600",
      }
    case "orange":
      return {
        bg: "bg-orange-50",
        border: "border-orange-200",
        accent: "text-orange-600",
        solid: "bg-orange-500",
        gradient: "from-orange-500 to-orange-600",
      }
    case "purple":
      return {
        bg: "bg-purple-50",
        border: "border-purple-200",
        accent: "text-purple-600",
        solid: "bg-purple-500",
        gradient: "from-purple-500 to-purple-600",
      }
    case "teal":
      return {
        bg: "bg-teal-50",
        border: "border-teal-200",
        accent: "text-teal-600",
        solid: "bg-teal-500",
        gradient: "from-teal-500 to-teal-600",
      }
    default:
      return {
        bg: "bg-gray-50",
        border: "border-gray-200",
        accent: "text-gray-600",
        solid: "bg-gray-500",
        gradient: "from-gray-500 to-gray-600",
      }
  }
}

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]
  const colors = getColorClasses(currentTestimonial.color)

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-8 py-4 mb-8 shadow-sm">
            <Quote className="w-6 h-6 text-orange-600" />
            <span className="text-orange-800 font-bold text-lg">Testimonios Reales</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">Familias Felices</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Escucha las experiencias reales de las familias que han confiado en nosotros para el cuidado y educación de
            sus pequeños tesoros
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-500/30"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-500/30"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Main Testimonial Card */}
            <Card
              className={`bg-gradient-to-br ${colors.bg} border-2 ${colors.border} rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500`}
            >
              <CardContent className="p-12">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div
                      className={`w-20 h-20 ${colors.solid} rounded-full flex items-center justify-center shadow-xl`}
                    >
                      <Quote className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl text-gray-700 italic mb-10 leading-relaxed max-w-4xl mx-auto">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-6 mb-8">
                    <div className="relative">
                      <img
                        src={currentTestimonial.image || "/images/prueba.jpg"}
                        alt={`Testimonio de ${currentTestimonial.parentName}`}
                        className="w-20 h-20 rounded-full border-4 border-white shadow-xl"
                      />
                      {currentTestimonial.videoTestimonial && (
                        <div className="absolute -bottom-2 -right-2 bg-red-500 rounded-full p-2 shadow-lg">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-800 text-xl">{currentTestimonial.parentName}</p>
                      <p className={`text-sm ${colors.accent} font-medium mb-1`}>{currentTestimonial.childInfo}</p>
                      <p className="text-gray-500 text-sm">{currentTestimonial.program}</p>
                      <p className="text-gray-400 text-xs">{currentTestimonial.location}</p>
                    </div>
                  </div>

                  {/* Video Testimonial Button */}
                  {currentTestimonial.videoTestimonial && (
                    <button
                      className={`${colors.solid} text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto`}
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Ver Video Testimonial
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex ? `${colors.solid} w-10 h-4` : "bg-gray-300 hover:bg-gray-400 w-4 h-4"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => {
              const itemColors = getColorClasses(testimonial.color)
              return (
                <Card
                  key={testimonial.id}
                  className={`bg-white border ${itemColors.border} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={testimonial.image || "/images/prueba.jpg"}
                        alt={testimonial.parentName}
                        className="w-12 h-12 rounded-full border-2 border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{testimonial.parentName}</p>
                        <p className={`text-xs ${itemColors.accent}`}>{testimonial.program}</p>
                      </div>
                      {testimonial.videoTestimonial && <Play className="w-4 h-4 text-red-500 ml-auto" />}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{testimonial.location}</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-orange-500 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">¿Quieres ser parte de estas historias?</h3>
            <p className="text-pink-100 mb-8 text-lg max-w-2xl mx-auto">
              Únete a más de 200 familias que han encontrado en Shaddai Day-Care el lugar perfecto para sus hijos
            </p>
            <button className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Comenzar Mi Historia
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
