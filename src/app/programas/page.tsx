"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Clock, Users, BookOpen, ArrowRight, CheckCircle, Award, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import LayoutClientGeneral from "@/components/layout/layoutclientG"

// Custom hook for scroll animation
function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function ProgramasPage() {
  const heroRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const programsRef = useScrollAnimation()
  const benefitsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  const programs = [
    {
      id: 1,
      title: "Guardería / Plan Básico",
      subtitle: "6 meses - 4 años",
      description: "Cuidado básico y seguro para los más pequeños con atención personalizada y ambiente amoroso.",
      price: "$3,000",
      period: "mes",
      image: "/images/programs-1.webp",
      features: ["Personal capacitado", "Ambiente seguro", "Rutina diaria", "Cuidado personalizado"],
      schedule: "7:00 AM - 5:00 PM",
      capacity: "12 niños",
      icon: Heart,
      popular: false,
      color: "from-pink-400 to-pink-500",
    },
    {
      id: 2,
      title: "Guardería / Plan Esencial",
      subtitle: "6 meses - 4 años",
      description: "Incluye comida nutritiva y actividades lúdicas para el desarrollo integral de tu pequeño.",
      price: "$3,500",
      period: "mes",
      image: "/images/programs-1.webp",
      features: ["Comida incluida", "Educación inicial", "Siesta y juegos", "Actividades lúdicas"],
      schedule: "7:00 AM - 6:00 PM",
      capacity: "10 niños",
      icon: Heart,
      popular: true,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 3,
      title: "Guardería / Plan Indispensable",
      subtitle: "6 meses - 4 años",
      description: "Plan completo con actividades, comida y seguimiento diario personalizado para cada niño.",
      price: "$4,500",
      period: "mes",
      image: "/images/programs-1.webp",
      features: ["Informes diarios", "Atención personalizada", "Todo incluido", "Seguimiento individual"],
      schedule: "7:00 AM - 6:30 PM",
      capacity: "8 niños",
      icon: Heart,
      popular: false,
      color: "from-pink-600 to-pink-700",
    },
    {
      id: 4,
      title: "Inglés para Niños",
      subtitle: "7 - 10 años",
      description: "Clases divertidas en inglés para pequeños exploradores con metodología lúdica y efectiva.",
      price: "$2,000",
      period: "mes",
      image: "/images/programs-1.webp",
      features: ["Clases dinámicas", "Método lúdico", "1 hora diaria", "Material interactivo"],
      schedule: "5:15 PM - 6:15 PM",
      capacity: "10 niños",
      icon: BookOpen,
      popular: false,
      color: "from-blue-400 to-blue-500",
    },
    {
      id: 5,
      title: "Inglés para Adolescentes",
      subtitle: "11 - 17 años",
      description: "Nivelación y práctica real del idioma con enfoque conversacional y material actualizado.",
      price: "$2,000",
      period: "mes",
      image: "/images/programs-1.webp",
      features: ["Material actualizado", "Enfoque conversacional", "Práctica real", "Certificación"],
      schedule: "4:00 PM - 5:00 PM",
      capacity: "12 estudiantes",
      icon: BookOpen,
      popular: false,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 6,
      title: "Master Class Inglés Adultos",
      subtitle: "Desde 18 años",
      description: "Aprende inglés desde cero o refuerza tus conocimientos con enfoque profesional y práctico.",
      price: "$2,500",
      period: "mes",
      image: "/images/programs-1.webp",
      features: ["Clases prácticas", "Enfoque profesional", "1.5 horas", "Horario flexible"],
      schedule: "6:30 PM - 8:00 PM",
      capacity: "10 adultos",
      icon: BookOpen,
      popular: false,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 7,
      title: "Jornada de Verano 2025",
      subtitle: "16 al 30 de junio",
      description: "Diversión, aprendizaje y aventuras veraniegas con excursiones y actividades especiales.",
      price: "$3,500",
      period: "una sola vez",
      image: "/images/programs-1.webp",
      features: ["Excursiones", "Manualidades", "Juegos acuáticos", "Actividades especiales"],
      schedule: "8:00 AM - 4:00 PM",
      capacity: "20 niños",
      icon: Star,
      popular: true,
      color: "from-orange-400 to-orange-500",
    },
  ]

  return (
    <LayoutClientGeneral>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          ref={heroRef.ref}
          className="py-24 relative overflow-hidden"
          style={{
            backgroundImage: `url('/images/programas-hero.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-pink-500/80 backdrop-blur-sm" />

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
            <Star
              className="absolute top-1/4 right-1/4 w-8 h-8 text-white/20 animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border border-white/30">
                <Sparkles className="w-5 h-5" />
                SELECCIONE EL PLAN QUE BUSCA
                <Sparkles className="w-5 h-5" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                NUESTROS <span className="text-pink-200">PROGRAMAS</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                Programas adaptados a cada etapa, diseñados con amor y propósito para el desarrollo integral de tu
                pequeño 🌈
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef.ref}
          className={`py-16 bg-gradient-to-r from-pink-50 to-pink-100 transition-all duration-1000 ${
            statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "7", label: "Programas disponibles", icon: BookOpen },
                { number: "150+", label: "Familias satisfechas", icon: Users },
                { number: "98%", label: "Tasa de satisfacción", icon: Star },
                { number: "15+", label: "Años de experiencia", icon: Award },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section
          ref={programsRef.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            programsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium mb-4">
                <Heart className="w-4 h-4" />
                Nuestros Programas
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Encuentra el <span className="text-pink-600">programa perfecto</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cada programa está diseñado con amor y dedicación para brindar la mejor experiencia educativa
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <div
                    key={program.id}
                    className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 group ${
                      program.popular ? "ring-2 ring-pink-500 ring-opacity-50" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Popular Badge */}
                    {program.popular && (
                      <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        ⭐ MÁS POPULAR
                      </div>
                    )}

                    {/* Image Section */}
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Icon */}
                      <div
                        className={`absolute top-4 right-4 bg-gradient-to-r ${program.color} text-white p-3 rounded-full shadow-lg`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Age Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                        <span className="font-bold text-sm text-gray-800">{program.subtitle}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                      {/* Schedule and Capacity */}
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Clock className="w-4 h-4 text-pink-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{program.schedule}</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Users className="w-4 h-4 text-pink-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{program.capacity}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-6 p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl">
                        <span className="text-3xl font-bold text-pink-600">{program.price}</span>
                        <span className="text-gray-500 font-medium">/ {program.period}</span>
                      </div>

                      {/* CTA Button */}
                      <Link href={`/inscripciones?programa=${program.id}`}>
                        <Button
                          className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105`}
                        >
                          ¡Inscribir Ahora!
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={benefitsRef.ref}
          className={`py-20 bg-gradient-to-br from-pink-50 to-pink-100 transition-all duration-1000 ${
            benefitsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-200 text-pink-800 px-4 py-2 rounded-full font-medium mb-4">
                <Shield className="w-4 h-4" />
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Beneficios que nos <span className="text-pink-600">distinguen</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Seguridad Total",
                  description: "Instalaciones seguras con personal capacitado y protocolos estrictos",
                  color: "from-green-400 to-green-500",
                },
                {
                  icon: Heart,
                  title: "Atención Personalizada",
                  description: "Cada niño recibe cuidado individual adaptado a sus necesidades",
                  color: "from-pink-400 to-pink-500",
                },
                {
                  icon: Award,
                  title: "Excelencia Educativa",
                  description: "Metodologías innovadoras y personal altamente calificado",
                  color: "from-blue-400 to-blue-500",
                },
                {
                  icon: Users,
                  title: "Grupos Reducidos",
                  description: "Ratios bajos para garantizar atención de calidad",
                  color: "from-purple-400 to-purple-500",
                },
                {
                  icon: Clock,
                  title: "Horarios Flexibles",
                  description: "Adaptamos nuestros horarios a las necesidades de tu familia",
                  color: "from-orange-400 to-orange-500",
                },
                {
                  icon: Sparkles,
                  title: "Ambiente Amoroso",
                  description: "Un espacio lleno de amor donde cada niño se siente especial",
                  color: "from-yellow-400 to-yellow-500",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef.ref}
          className={`py-24 bg-gradient-to-r from-pink-600 to-pink-500 text-white relative overflow-hidden transition-all duration-1000 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
              <Heart className="w-4 h-4" />
              ¡Te esperamos!
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Necesitas Ayuda para <span className="text-pink-200">Elegir</span>? 🤔
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo especializado te ayudará a encontrar el programa perfecto para tu pequeño, adaptado a sus
              necesidades y tu presupuesto
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-white text-pink-600 hover:bg-pink-50 font-bold px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  ¡Contáctanos!
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600 px-10 py-4 text-lg font-bold rounded-2xl transition-all duration-300 bg-transparent"
                >
                  Llamar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </LayoutClientGeneral>
  )
}
