"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Phone, MapPin, Clock, Star, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

export default function CtaSection() {
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
      className={`py-24 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url('/images/cta-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/90 via-pink-100/85 to-blue-100/90 backdrop-blur-sm" />

      {/* Fun Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[color:var(--shaddai-yellow)] rounded-full opacity-30 animate-bounce" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-[color:var(--shaddai-pink)] rounded-full opacity-40" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[color:var(--shaddai-blue)] rounded-full opacity-35" />
      <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-[color:var(--shaddai-green)] rounded-full opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-green)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Heart className="w-5 h-5" />
            ¡Tu Hijo Merece lo Mejor!
            <Heart className="w-5 h-5" />
          </div>

          <h2 className="text-6xl lg:text-7xl font-display font-bold text-[color:var(--shaddai-green)] mb-6 leading-tight drop-shadow-lg">
            ¡Da el Paso Hacia la{" "}
            <span className="text-transparent bg-gradient-to-r from-[color:var(--shaddai-pink)] to-[color:var(--shaddai-orange)] bg-clip-text">
              Aventura Perfecta!
            </span>{" "}
            🚀
          </h2>

          <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            En Shaddai Day-Care, cada niño crece rodeado de amor infinito, seguridad total y aventuras educativas
            increíbles. ¡Únete a nuestra familia súper especial! ✨
          </p>

          {/* Primary CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/contacto">
              <Button className="bg-gradient-to-r from-[color:var(--shaddai-green)] to-[color:var(--shaddai-blue)] hover:opacity-90 text-white font-bold px-10 py-5 rounded-2xl text-xl flex items-center gap-3 group shadow-xl">
                <Calendar className="w-6 h-6" />
                ¡Agenda tu Visita Súper Especial!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>

            <Link href="tel:+1234567890">
              <Button className="bg-gradient-to-r from-[color:var(--shaddai-pink)] to-[color:var(--shaddai-orange)] hover:opacity-90 text-white font-bold px-10 py-5 rounded-2xl text-xl flex items-center gap-3 shadow-xl">
                <Phone className="w-6 h-6" />
                ¡Llama Ahora! 📞
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              title: "¡Ven a Conocernos! 🏠",
              description: "Descubre nuestras instalaciones mágicas",
              info: "Av. Principal 123, Ciudad",
              color: "border-[color:var(--shaddai-green)]",
              bgColor: "bg-[color:var(--shaddai-green)]",
            },
            {
              icon: Phone,
              title: "¡Hablemos! 💬",
              description: "Resuelve todas tus dudas al instante",
              info: "(555) 123-NIÑOS",
              color: "border-[color:var(--shaddai-blue)]",
              bgColor: "bg-[color:var(--shaddai-blue)]",
            },
            {
              icon: Clock,
              title: "¡Horarios Súper! ⏰",
              description: "Estamos aquí cuando nos necesites",
              info: "Lun - Vie: 7:00 AM - 6:00 PM",
              color: "border-[color:var(--shaddai-pink)]",
              bgColor: "bg-[color:var(--shaddai-pink)]",
            },
          ].map((card, index) => {
            const IconComponent = card.icon
            return (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border-4 ${card.color} hover:shadow-2xl transition-all duration-700 group ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${card.bgColor} rounded-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 text-lg mb-4 font-medium">{card.description}</p>
                <p className="text-gray-800 font-bold text-lg">{card.info}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div
          className={`bg-gradient-to-r from-[color:var(--shaddai-green)] to-[color:var(--shaddai-blue)] rounded-3xl p-8 border-8 border-white shadow-2xl transition-all duration-1000 delay-1000 backdrop-blur-sm ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">15+</div>
              <div className="text-white/90 font-medium">Años de Magia</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">150+</div>
              <div className="text-white/90 font-medium">Familias Felices</div>
            </div>
            <div>
              <div className="flex justify-center items-center gap-1 mb-2">
                <span className="text-5xl font-display font-bold text-white">5</span>
                <Star className="w-8 h-8 text-[color:var(--shaddai-yellow)] fill-current" />
              </div>
              <div className="text-white/90 font-medium">¡Súper Rating!</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">100%</div>
              <div className="text-white/90 font-medium">Súper Seguros</div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div
          className={`text-center mt-16 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-[color:var(--shaddai-yellow)] transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-[color:var(--shaddai-yellow)]" />
            <Sparkles className="w-8 h-8 text-[color:var(--shaddai-yellow)]" />
            <Sparkles className="w-8 h-8 text-[color:var(--shaddai-yellow)]" />
          </div>
          <p className="text-2xl text-gray-800 font-medium italic leading-relaxed">
            Cada día es una nueva oportunidad mágica para que tu hijo descubra, aprenda y crezca rodeado de amor
            infinito y aventuras increíbles 💕✨
          </p>
        </div>
      </div>
    </section>
  )
}
