"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

const programs = [
  {
    slug: "plan-basico",
    title: "Guardería Plan Básico",
    subtitle: "6 meses - 4 años",
    description: "Cuidado personalizado donde cada bebé y niño pequeño descubre el mundo de forma segura y divertida.",
    price: "$4,500",
    period: "mes",
    image: "/images/programs-1.webp",
    features: ["Cuidado 24/7", "Comidas nutritivas", "Juegos educativos"],
    primaryColor: "#1d7748",
  },
  {
    slug: "ingles-ninos",
    title: "Inglés para Niños",
    subtitle: "7 - 10 años",
    description: "Aprender inglés de forma divertida con canciones, juegos y aventuras que harán que tu hijo ame este idioma.",
    price: "$2,800",
    period: "mes",
    image: "/images/programs-2.webp",
    features: ["Clases dinámicas", "Profesores nativos", "Certificación internacional"],
    primaryColor: "#4f75ff",
  },
  {
    slug: "jornada-verano",
    title: "Jornada de Verano",
    subtitle: "Todas las edades",
    description: "El verano más increíble con excursiones, talleres creativos, deportes y diversión en un ambiente seguro.",
    price: "$3,500",
    period: "2 semanas",
    image: "/images/programs-3.webp",
    features: ["Excursiones semanales", "Talleres de arte", "Deportes y piscina"],
    primaryColor: "#f68026",
  },
]

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger card animations
          programs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Distinctive Element - Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-20 h-20 border-2 border-[#1d7748]/10 rounded-full animate-spin"
          style={{ animationDuration: "10s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#fcafc2]/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#4f75ff]/10 rotate-45 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Nuestros Programas</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Donde cada día es una nueva aventura llena de aprendizaje, risas y momentos especiales
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {programs.map((program, index) => {
            const isCardVisible = visibleCards.includes(index)

            return (
              <div
                key={program.slug}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 group ${
                  isCardVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={240}
                    className="w-full h-48 sm:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{program.subtitle}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3">
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: program.primaryColor }}
                        />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-bold" style={{ color: program.primaryColor }}>
                      {program.price}
                    </span>
                    <span className="text-gray-500 text-sm sm:text-base">/ {program.period}</span>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/programas/${program.slug}`}>
                    <Button
                      className=" cursor-pointer w-full font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md text-sm sm:text-base"
                      style={{ backgroundColor: program.primaryColor }}
                    >
                      Conocer más
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">¿Listo para comenzar?</h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Agenda una visita y descubre por qué somos la mejor opción para tu hijo
          </p>
          <Link href="/contacto">
            <Button className="bg-[#1d7748] hover:bg-[#1d7748]/90 cursor-pointer text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              Agendar visita gratuita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
