"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

const programs = [
  {
    id: 1,
    title: "Guardería Plan Básico",
    subtitle: "6 meses - 4 años",
    description:
      "¡Aventuras diarias llenas de amor! Cuidado personalizado donde cada bebé y niño pequeño descubre el mundo de forma segura y divertida.",
    price: "$4,500",
    period: "mes",
    image: "/images/programs-1.webp?height=300&width=400",
    features: ["Cuidado 24/7", "Comidas nutritivas", "Juegos educativos"],
    bgColor: "bg-gradient-to-br from-green-100 to-green-200",
    accentColor: "bg-[color:var(--shaddai-green)]",
    textColor: "text-[color:var(--shaddai-green)]",
    icon: Heart,
  },
  {
    id: 2,
    title: "Inglés para Niños",
    subtitle: "7 - 10 años",
    description:
      "¡Aprender inglés nunca fue tan divertido! Con canciones, juegos y aventuras que harán que tu hijo ame este idioma.",
    price: "$2,800",
    period: "mes",
    image: "/images/programs-2.webp?height=300&width=400",
    features: ["Clases dinámicas", "Profesores nativos", "Certificación internacional"],
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
    accentColor: "bg-[color:var(--shaddai-blue)]",
    textColor: "text-[color:var(--shaddai-blue)]",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Jornada de Verano",
    subtitle: "Todas las edades",
    description:
      "¡El verano más increíble! Excursiones, talleres creativos, deportes y diversión sin límites en un ambiente seguro.",
    price: "$3,500",
    period: "2 semanas",
    image: "/images/programs-3.webp?height=300&width=400",
    features: ["Excursiones semanales", "Talleres de arte", "Deportes y piscina"],
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200",
    accentColor: "bg-[color:var(--shaddai-orange)]",
    textColor: "text-[color:var(--shaddai-orange)]",
    icon: Star,
  },
]

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-20 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: `url('/images/section-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-pink-50/70 to-yellow-50/55 backdrop-blur-sm" />

      {/* Decorative Elements - Más vibrantes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[color:var(--shaddai-yellow)] rounded-full opacity-20 animate-bounce" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-[color:var(--shaddai-pink)] rounded-full opacity-30" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[color:var(--shaddai-blue)] rounded-full opacity-25" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-pink)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Star className="w-5 h-5" />
            ¡Programas Súper Divertidos!
            <Star className="w-5 h-5" />
          </div>
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-[color:var(--shaddai-green)] mb-6 leading-tight drop-shadow-lg">
            Nuestros Programas
          </h2>
          <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            ¡Donde cada día es una nueva aventura llena de aprendizaje, risas y momentos mágicos! 🌟
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <div
                key={program.id}
                className={`${program.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-4 border-white group backdrop-blur-sm ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                {/* Image with overlay */}
                <div className="relative overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div
                    className={`absolute top-4 right-4 ${program.accentColor} text-white p-3 rounded-full shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className={`font-bold text-sm ${program.textColor}`}>{program.subtitle}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-display font-bold text-gray-800 mb-4 leading-tight">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{program.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${program.accentColor}`} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-4xl font-bold ${program.textColor}`}>{program.price}</span>
                    <span className="text-gray-500 text-lg">/ {program.period}</span>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/programas/${program.id}`}>
                    <Button
                      className={`w-full ${program.accentColor} hover:opacity-90 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg`}
                    >
                      ¡Quiero saber más!
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center bg-gradient-to-r from-[color:var(--shaddai-green)] to-[color:var(--shaddai-blue)] rounded-3xl p-12 text-white shadow-2xl transition-all duration-1000 delay-1000 backdrop-blur-sm ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-4xl font-display font-bold mb-4">¿Listo para la Aventura? 🚀</h3>
          <p className="text-xl mb-8 opacity-90">
            ¡Agenda una visita y descubre por qué somos el lugar favorito de los niños!
          </p>
          <Link href="/contacto">
            <Button className="bg-[color:var(--shaddai-yellow)] hover:bg-[color:var(--shaddai-yellow)]/90 text-gray-800 font-bold px-10 py-4 rounded-2xl text-xl shadow-lg hover:shadow-xl transition-all duration-300">
              ¡Agenda tu Visita Gratis! 🎉
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
