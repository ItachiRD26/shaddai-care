"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    id: 1,
    title: "Guardería Plan Básico",
    subtitle: "6 meses - 4 años",
    description: "Entorno cálido, seguro y lleno de amor para el desarrollo temprano de tu bebé.",
    image: "/images/programs-1.webp",
    link: "/programas",
  },
  {
    id: 2,
    title: "Inglés para Niños",
    subtitle: "7 - 10 años",
    description: "Aprenden jugando, con canciones, dinámicas interactivas y docentes expertos.",
    image: "/images/programs-2.webp",
    link: "/programas",
  },
  {
    id: 3,
    title: "Jornada de Verano",
    subtitle: "Todas las edades",
    description: "Diversión, aprendizaje y nuevas amistades en nuestras jornadas creativas de verano.",
    image: "/images/programs-3.webp",
    link: "/programas",
  },
]

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="program-section-dark py-24"
    >
      <div className="program-content max-w-6xl mx-auto px-6 space-y-24">
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-display font-bold text-white mb-4">Programas Destacados</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Opciones que se adaptan a cada etapa del desarrollo infantil.
          </p>
        </div>

        {programs.map((program, index) => (
          <div
            key={program.id}
            className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} items-center gap-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={program.image}
                alt={program.title}
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full lg:w-1/2 text-white space-y-4">
              <p className="text-sm uppercase tracking-wide text-shaddai-yellow">{program.subtitle}</p>
              <h3 className="text-3xl font-display font-bold">{program.title}</h3>
              <p className="text-white/90 text-lg leading-relaxed">{program.description}</p>
              <Link href={program.link}>
                <Button className="btn-primary-professional cursor-pointer mt-4 inline-flex items-center gap-2">
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
