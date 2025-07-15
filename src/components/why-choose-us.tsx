"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Heart, Users, Award, Clock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Instalaciones modernas con sistemas de seguridad de última generación y personal capacitado.",
    color: "green",
  },
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Atención individualizada que respeta el ritmo y necesidades únicas de cada niño.",
    color: "green",
  },
  {
    icon: Users,
    title: "Educadores Expertos",
    description: "Equipo multidisciplinario con formación especializada en desarrollo infantil temprano.",
    color: "blue",
  },
  {
    icon: Award,
    title: "Metodología Innovadora",
    description: "Programas educativos basados en las mejores prácticas internacionales de educación infantil.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description: "Adaptamos nuestros horarios a las necesidades de las familias trabajadoras modernas.",
    color: "orange",
  },
  {
    icon: Sparkles,
    title: "Desarrollo Integral",
    description: "Enfoque holístico que incluye desarrollo cognitivo, emocional, social y físico.",
    color: "orange",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "green":
      return "bg-green-500"
    case "blue":
      return "bg-blue-500"
    case "orange":
      return "bg-orange-500"
    default:
      return "bg-gray-500"
  }
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('//images/prueba.jpg?height=1200&width=1600&text=Children+Playing+Background')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block bg-green-100 rounded-full px-6 py-2 mb-6">
            <span className="text-green-700 font-semibold text-sm">NUESTRA DIFERENCIA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">¿Por Qué Elegirnos?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Más de 5 años de experiencia nos respaldan como líderes en cuidado infantil, combinando tradición,
            innovación y amor en cada detalle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div
                  className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center shadow-xl border border-white/50 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Nuestros Números Hablan</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">200+</div>
              <div className="text-gray-600">Familias Felices</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">15+</div>
              <div className="text-gray-600">Educadores Expertos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-700">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
