"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export default function CtaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger card animations
          setTimeout(() => {
            ;[0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }, 600)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Distinctive Element - Call-to-Action Arrows */}
      <div className="absolute inset-0 pointer-events-none">
        <ArrowRight className="absolute top-16 right-20 w-8 h-8 text-[#1d7748]/10 animate-pulse" />
        <Calendar
          className="absolute bottom-24 left-16 w-6 h-6 text-[#4f75ff]/10 animate-bounce"
          style={{ animationDuration: "2s" }}
        />
        <Phone className="absolute top-1/3 right-1/4 w-5 h-5 text-[#f68026]/10 animate-ping" />
        <div
          className="absolute bottom-16 right-16 w-20 h-20 border-2 border-[#fcafc2]/10 rounded-full animate-spin"
          style={{ animationDuration: "6s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Da el paso hacia la <span className="text-[#1d7748]">mejor educación</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            En Shaddai Day-Care, cada niño crece rodeado de amor, seguridad y oportunidades educativas excepcionales.
            Únete a nuestra familia.
          </p>

          {/* Primary CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/contacto">
              <Button className="bg-[#1d7748] hover:bg-[#1d7748]/90 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg flex items-center gap-2 sm:gap-3 group shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Agendar visita
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="tel:+1234567890">
              <Button className="bg-[#4f75ff] hover:bg-[#4f75ff]/90 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg flex items-center gap-2 sm:gap-3 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Llamar ahora
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              icon: MapPin,
              title: "Visítanos",
              description: "Conoce nuestras instalaciones",
              info: "Av. Principal 123, Ciudad",
              color: "#1d7748",
            },
            {
              icon: Phone,
              title: "Llámanos",
              description: "Resuelve todas tus dudas",
              info: "(555) 123-NIÑOS",
              color: "#4f75ff",
            },
            {
              icon: Clock,
              title: "Horarios",
              description: "Estamos aquí cuando nos necesites",
              info: "Lun - Vie: 7:00 AM - 6:00 PM",
              color: "#f68026",
            },
          ].map((card, index) => {
            const IconComponent = card.icon
            const isCardVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                  isCardVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mb-4 sm:mb-6 shadow-sm hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: card.color }}
                >
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{card.description}</p>
                <p className="text-gray-900 font-semibold text-sm sm:text-base">{card.info}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div
          className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 transition-all duration-1000 delay-1000 hover:shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#1d7748] mb-2">15+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Años de experiencia</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#4f75ff] mb-2">150+</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Familias felices</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#ffd44d] mb-2">5★</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Calificación promedio</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-[#f68026] mb-2">100%</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">Seguridad garantizada</div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-base sm:text-lg text-gray-600 italic leading-relaxed">
            Cada día es una nueva oportunidad para que tu hijo descubra, aprenda y crezca rodeado de amor y cuidado
            profesiona
          </p>
        </div>
      </div>
    </section>
  )
}
