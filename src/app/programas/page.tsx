"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Heart, Clock, Users, BookOpen, Palette, Music, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProgramasPage() {
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

  const programs = [
    {
      id: 1,
      title: "Guardería Plan Básico",
      subtitle: "6 meses - 4 años",
      description: "Cuidado integral con amor personalizado para los más pequeños",
      price: "$4,500",
      period: "mes",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Cuidado 24/7", "Comidas nutritivas", "Juegos educativos", "Siesta programada"],
      schedule: "7:00 AM - 6:00 PM",
      capacity: "Máximo 12 niños",
      icon: Heart,
    },
    {
      id: 2,
      title: "Inglés para Niños",
      subtitle: "3 - 10 años",
      description: "Aprendizaje divertido del inglés con metodología lúdica",
      price: "$2,800",
      period: "mes",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Profesores nativos", "Clases dinámicas", "Material didáctico", "Certificación"],
      schedule: "4:00 PM - 6:00 PM",
      capacity: "Máximo 8 niños",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Jornada de Verano",
      subtitle: "Todas las edades",
      description: "Aventuras y diversión durante las vacaciones de verano",
      price: "$3,500",
      period: "2 semanas",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Excursiones", "Talleres de arte", "Deportes", "Piscina"],
      schedule: "8:00 AM - 4:00 PM",
      capacity: "Máximo 20 niños",
      icon: Star,
    },
    {
      id: 4,
      title: "Arte y Creatividad",
      subtitle: "2 - 8 años",
      description: "Desarrollo de la creatividad a través del arte y manualidades",
      price: "$1,800",
      period: "mes",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Pintura", "Manualidades", "Escultura", "Exposiciones"],
      schedule: "3:00 PM - 5:00 PM",
      capacity: "Máximo 10 niños",
      icon: Palette,
    },
    {
      id: 5,
      title: "Música y Movimiento",
      subtitle: "1 - 6 años",
      description: "Estimulación temprana a través de la música y el baile",
      price: "$2,200",
      period: "mes",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Instrumentos", "Canto", "Baile", "Ritmo"],
      schedule: "10:00 AM - 12:00 PM",
      capacity: "Máximo 15 niños",
      icon: Music,
    },
    {
      id: 6,
      title: "Apoyo Escolar",
      subtitle: "5 - 12 años",
      description: "Refuerzo académico personalizado para el éxito escolar",
      price: "$2,500",
      period: "mes",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Tareas dirigidas", "Refuerzo matemático", "Lectoescritura", "Técnicas de estudio"],
      schedule: "2:00 PM - 5:00 PM",
      capacity: "Máximo 6 niños",
      icon: BookOpen,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/programas-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--shaddai-pink)]/90 to-[color:var(--shaddai-pink)]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Star className="w-5 h-5" />
              ¡Programas Increíbles!
              <Star className="w-5 h-5" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Nuestros Programas 🌸
            </h1>

            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Aventuras educativas diseñadas especialmente para cada etapa del crecimiento de tu pequeño ✨
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-pink)] mb-6">
              Elige el Programa Perfecto 💕
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cada programa está diseñado con amor para potenciar las habilidades únicas de tu hijo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon
              return (
                <div
                  key={program.id}
                  className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-4 border-2 border-white group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-[color:var(--shaddai-pink)] text-white p-3 rounded-full">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="font-bold text-sm text-[color:var(--shaddai-pink)]">{program.subtitle}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-gray-800 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[color:var(--shaddai-pink)]" />
                        <span className="text-gray-600">{program.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[color:var(--shaddai-pink)]" />
                        <span className="text-gray-600">{program.capacity}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--shaddai-pink)]" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-3xl font-bold text-[color:var(--shaddai-pink)]">{program.price}</span>
                      <span className="text-gray-500">/ {program.period}</span>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/inscripciones?programa=${program.id}`}>
                      <Button className="w-full bg-[color:var(--shaddai-pink)] hover:opacity-90 text-white font-bold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[color:var(--shaddai-pink)] to-pink-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">¿Necesitas Ayuda para Elegir? 🤔</h2>
          <p className="text-xl text-white/90 mb-8">
            Nuestro equipo te ayudará a encontrar el programa perfecto para tu pequeño
          </p>
          <Link href="/contacto">
            <Button className="bg-white text-[color:var(--shaddai-pink)] hover:bg-gray-100 font-bold px-10 py-4 rounded-2xl text-xl shadow-lg">
              ¡Contáctanos! <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
