"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Award, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NosotrosPage() {
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

  const teamMembers = [
    {
      name: "John Isaias",
      role: " General",
      experience: "25 años",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista en educación infantil con maestría en desarrollo temprano.",
    },
    {
      name: "Carmen López",
      role: "Coordinadora Pedagógica",
      experience: "12 años",
      image: "/placeholder.svg?height=300&width=300",
      description: "Experta en metodologías lúdicas y desarrollo cognitivo infantil.",
    },
    {
      name: "Ana Martínez",
      role: "Especialista en Inglés",
      experience: "8 años",
      image: "/placeholder.svg?height=300&width=300",
      description: "Profesora nativa certificada en enseñanza de inglés para niños.",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Amor Incondicional",
      description: "Cada niño es tratado con amor, respeto y cuidado personalizado.",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboramos con las familias para el desarrollo integral de cada niño.",
    },
    {
      icon: Award,
      title: "Excelencia Educativa",
      description: "Programas de alta calidad basados en las mejores prácticas pedagógicas.",
    },
    {
      icon: Clock,
      title: "Compromiso Total",
      description: "Dedicación completa al bienestar y desarrollo de nuestros pequeños.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/nosotros-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--shaddai-green)]/90 to-[color:var(--shaddai-green)]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Heart className="w-5 h-5" />
              ¡Conoce Nuestra Historia!
              <Heart className="w-5 h-5" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Nosotros Somos 💚
            </h1>

            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Una familia dedicada a crear el mejor ambiente para que tu pequeño crezca feliz, seguro y lleno de amor ✨
            </p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-green)] mb-6">
                Nuestra Historia 📖
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Desde 2018, Shaddai Day-Care ha sido el hogar lejos del hogar para más de 150 familias. Comenzamos con
                un sueño simple: crear un lugar donde cada niño se sienta amado, valorado y emocionado por aprender.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro nombre Shaddai significa <span>El Todopoderoso</span> y refleja nuestra misión de brindar protección,
                cuidado y amor incondicional a cada pequeño que forma parte de nuestra familia.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center bg-[color:var(--shaddai-green)]/10 rounded-2xl p-6">
                  <div className="text-4xl font-display font-bold text-[color:var(--shaddai-green)] mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Familias Felices</div>
                </div>
                <div className="text-center bg-[color:var(--shaddai-green)]/10 rounded-2xl p-6">
                  <div className="text-4xl font-display font-bold text-[color:var(--shaddai-green)] mb-2">6</div>
                  <div className="text-gray-600 font-medium">Años de Experiencia</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Historia de Shaddai Day-Care"
                width={600}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-green)] mb-6">
              Nuestros Valores 🌟
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Los principios que guían cada día nuestro trabajo con amor y dedicación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[color:var(--shaddai-green)] rounded-2xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-green)] mb-6">
              Nuestro Equipo 👥
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Profesionales apasionados dedicados al cuidado y educación de tu pequeño
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-[color:var(--shaddai-green)] font-bold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.experience} de experiencia</p>
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[color:var(--shaddai-green)] to-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">¿Listo para Conocernos? 🤗</h2>
          <p className="text-xl text-white/90 mb-8">
            Ven y descubre por qué somos la mejor opción para tu pequeño tesoro
          </p>
          <Link href="/contacto">
            <Button className="cursor-pointer bg-white text-[color:var(--shaddai-green)] hover:bg-gray-100 font-bold px-10 py-4 rounded-2xl text-xl shadow-lg">
              ¡Agenda tu Visita! <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
