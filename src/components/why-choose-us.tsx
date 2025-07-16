"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    title: "Seguridad Garantizada",
    description: "Instalaciones modernas con vigilancia y personal capacitado que brindan tranquilidad a las familias.",
    image: "/images/prueba.jpg",
  },
  {
    title: "Cuidado Personalizado",
    description: "Cada niño recibe atención individual que respeta su ritmo, estilo de aprendizaje y emociones.",
    image: "/images/prueba.jpg",
  },
  {
    title: "Educadores Expertos",
    description: "Docentes con formación en desarrollo infantil y años de experiencia guiando con amor y profesionalismo.",
    image: "/images/prueba.jpg",
  },
  {
    title: "Metodología Moderna",
    description: "Programas diseñados para explorar, crear y crecer en un ambiente positivo y seguro.",
    image: "/images/prueba.jpg",
  },
]

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="why-section-dark py-24">
      <div className="why-content max-w-6xl mx-auto px-6 space-y-20">
        {/* Título */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl font-display font-bold text-white mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Porque tu hijo merece un lugar donde lo cuiden, lo inspiren y lo preparen para la vida con amor y excelencia.
          </p>
        </div>

        {/* Grid de razones */}
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`why-grid-item transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/90 leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <Link href="/contacto">
            <Button className="btn-primary-professional cursor-pointer">
              Conozca Nuestra Filosofía
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
