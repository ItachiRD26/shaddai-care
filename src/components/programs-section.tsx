"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Guardería Plan Básico",
    subtitle: "6 meses - 4 años",
    price: "$4,500",
    period: "/mes",
    description: "Atención personalizada y un entorno amoroso para los más pequeños.",
    image: "/images/programs-1.jpeg",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Inglés para Niños",
    subtitle: "7 - 10 años",
    price: "Desde $2,800",
    period: "/mes",
    description: "Aprendizaje del inglés con juegos, canciones y profesores especializados.",
    image: "/images/programs-2.jpeg",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Jornada de Verano",
    subtitle: "Todas las edades",
    price: "$3,500",
    period: "/2 semanas",
    description: "Un verano lleno de diversión, talleres creativos y excursiones educativas.",
    image: "/images/programs-3.jpeg",
    rating: 5.0,
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
      className="relative py-24"
      style={{
        backgroundImage: "url('/images/programs-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay más sutil y elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 backdrop-blur-[2px]"></div>

 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con colores claros para overlay oscuro */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl font-black text-white font-display mb-4 drop-shadow-lg">Nuestros Programas</h2>
          <p className="text-lg text-slate-200 font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Diseñados para el desarrollo emocional, cognitivo y social de cada niño.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`rounded-2xl overflow-hidden shadow-2xl bg-white/98 backdrop-blur-sm border border-white/20 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:border-white/40 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image || "/images/prueba.jpg"}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-slate-900/95 text-white rounded-full px-3 py-1.5 text-sm font-semibold shadow-xl backdrop-blur-sm border border-white/10">
                  <Star className="inline w-4 h-4 text-amber-400 mr-1 fill-current" />
                  {program.rating}
                </div>
              </div>

              <div className="p-7">
                {/* Título */}
                <h3 className="text-2xl font-bold text-slate-800 font-display mb-2">{program.title}</h3>

                {/* Subtitle */}
                <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">{program.subtitle}</p>

                {/* Descripción */}
                <p className="text-slate-600 text-base font-sans mb-6 leading-relaxed">{program.description}</p>

                {/* Precio */}
                <div className="text-2xl font-bold text-slate-800 mb-6">
                  {program.price}
                  <span className="text-sm font-normal text-slate-500 ml-1">{program.period}</span>
                </div>

                <Link href="/programas">
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3.5 px-4 rounded-xl text-sm font-sans cursor-pointer transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl border-2 border-transparent hover:border-shaddai-green/30">
                    Más información
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA con colores claros */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-3xl font-bold text-white font-display mb-6 drop-shadow-lg">
            ¿Necesitas ayuda para elegir?
          </h3>
          <p className="text-slate-200 mb-8 max-w-md mx-auto drop-shadow-md">
            Nuestros asesores te ayudarán a encontrar el programa perfecto para tu hijo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="bg-blue-500 hover:bg-shaddai-green/90 text-white px-8 py-3.5 rounded-xl font-semibold font-sans cursor-pointer transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white/20">
                Contactar Asesor
              </Button>
            </Link>
            <Link href="/programas">
              <Button className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-3.5 rounded-xl font-semibold font-sans bg-white/5 backdrop-blur-sm cursor-pointer transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Ver Todos los Programas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
