"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Heart, Award, Globe, Lightbulb, GraduationCap, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

const NavbarWhite = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
  loading: () => <div className="h-20 bg-white/95" />
})

const Footer = dynamic(() => import("@/components/layout/footer"), {
  ssr: false,
  loading: () => <div className="h-32 bg-white" />
})

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

export default function NosotrosPage() {
  const missionRef = useScrollAnimation()
  const visionRef = useScrollAnimation()
  const valuesRef = useScrollAnimation()
  const foundersRef = useScrollAnimation()
  const projectsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  return (
    <div className={baloo2.variable}>
      <NavbarWhite />
      <main className="bg-white text-gray-800">
        {/* Hero Section - Optimizado para mobile */}
        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <Image 
            src="/images/aula-4.webp" 
            alt="Equipo Shaddai" 
            fill 
            className="object-cover object-center" 
            priority 
          />
          <div className="absolute inset-0 bg-green-800/70 backdrop-blur-sm" />
          <div className="relative z-10 text-center text-white px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Conoce Quiénes Somos
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Una familia educativa comprometida con el crecimiento feliz, seguro y cristiano de tu pequeño
            </p>
          </div>
        </section>

        {/* Misión - Mejorada responsividad */}
        <section
          ref={missionRef.ref}
          className={`py-16 sm:py-20 px-4 sm:px-6 transition-all duration-1000 ${
            missionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-4 -left-4 w-full h-full bg-green-100 rounded-3xl -z-10"></div>
                <Image
                  src="/images/aula-1.webp"
                  alt="Nuestra Misión"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-xl relative z-10 w-full"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-green-700 text-sm sm:text-base">Misión</div>
                      <div className="text-xs sm:text-sm text-gray-600">Amor y valores</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                  <Heart className="w-4 h-4" />
                  Nuestra Misión
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Educación con <span className="text-green-600">amor y valores</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Brindar un espacio lleno de amor, aprendizaje y valores cristianos donde cada niño se desarrolle
                  integralmente, respetando su individualidad y fomentando su crecimiento en un ambiente seguro y
                  estimulante.
                </p>
                <div className="space-y-3">
                  {[
                    "Desarrollo integral del niño",
                    "Valores cristianos sólidos",
                    "Ambiente seguro y amoroso",
                    "Respeto por la individualidad",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visión - Mejorada responsividad */}
        <section
          ref={visionRef.ref}
          className={`py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 transition-all duration-1000 ${
            visionRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="lg:order-2 relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-green-100 rounded-3xl -z-10"></div>
                <Image
                  src="/images/aula-5.webp"
                  alt="Nuestra Visión"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-xl relative z-10 w-full"
                />
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-green-700 text-sm sm:text-base">Visión</div>
                      <div className="text-xs sm:text-sm text-gray-600">Excelencia educativa</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                  <Lightbulb className="w-4 h-4" />
                  Nuestra Visión
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Referente en <span className="text-green-600">educación inicial</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Ser un referente en educación inicial basada en el amor, la excelencia y la formación en valores,
                  reconocidos por nuestra innovación pedagógica y el impacto positivo en las familias de nuestra
                  comunidad.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Award, text: "Excelencia educativa" },
                    { icon: Users, text: "Impacto familiar" },
                    { icon: Globe, text: "Reconocimiento" },
                    { icon: GraduationCap, text: "Innovación pedagógica" },
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <IconComponent className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores - Optimizado para mobile */}
        <section
          ref={valuesRef.ref}
          className={`py-16 sm:py-20 px-4 sm:px-6 transition-all duration-1000 ${
            valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-4 text-sm sm:text-base">
                <Heart className="w-4 h-4" />
                Nuestros Valores
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Principios que nos <span className="text-green-600">guían</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Cada día trabajamos con amor y dedicación, guiados por valores sólidos que forman el corazón de nuestra
                institución
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Heart,
                  title: "Amor",
                  text: "Todo lo que hacemos nace del amor por los niños y su bienestar integral",
                  color: "bg-red-500",
                },
                {
                  icon: Users,
                  title: "Familia",
                  text: "Creemos en el trabajo conjunto con las familias como base del desarrollo",
                  color: "bg-blue-500",
                },
                {
                  icon: Award,
                  title: "Excelencia",
                  text: "Buscamos siempre lo mejor en educación, innovando constantemente",
                  color: "bg-yellow-500",
                },
                {
                  icon: Globe,
                  title: "Fe",
                  text: "Cristo es el centro de nuestras decisiones y acciones diarias",
                  color: "bg-green-500",
                },
              ].map((val, i) => {
                const Icon = val.icon
                return (
                  <div key={i} className="group">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 ${val.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">{val.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{val.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Fundadores - Mejorada responsividad */}
        <section
          ref={foundersRef.ref}
          className={`py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-green-100 transition-all duration-1000 ${
            foundersRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium text-sm sm:text-base">
                  <Users className="w-4 h-4" />
                  Nuestros Fundadores
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Una familia <span className="text-green-600">comprometida</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Shaddai nació del corazón de una familia comprometida con la educación infantil y el servicio a Dios.
                  Con más de 15 años de experiencia, hemos construido un legado de amor, dedicación y excelencia
                  educativa.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Más de 15 años de experiencia en educación",
                    "Compromiso con valores cristianos",
                    "Dedicación al servicio comunitario",
                    "Innovación en metodologías educativas",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contacto">
                    Conocer más
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-full h-full bg-green-200 rounded-3xl -z-10"></div>
                <Image
                  src="/images/director-poster.webp"
                  alt="Fundadores"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
                />
                <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-white p-3 sm:p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">2018</div>
                    <div className="text-xs sm:text-sm text-gray-600">Año de fundación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos - Optimizado para mobile */}
        <section
          ref={projectsRef.ref}
          className={`py-16 sm:py-20 px-4 sm:px-6 transition-all duration-1000 ${
            projectsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-4 text-sm sm:text-base">
                <GraduationCap className="w-4 h-4" />
                Proyectos Especiales
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Más que una <span className="text-green-600">escuela</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Impulsamos proyectos creativos que fortalecen el aprendizaje y la comunidad, creando experiencias únicas
                para nuestros pequeños
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {[
                {
                  title: "Huerto Escolar",
                  desc: "Involucramos a los niños en el cuidado de un huerto donde aprenden sobre plantas, responsabilidad y alimentación saludable, conectando con la naturaleza.",
                  img: "/children-garden-school.png",
                  features: ["Aprendizaje práctico", "Conexión con la naturaleza", "Alimentación saludable"],
                },
                {
                  title: "Proyectos Creativos",
                  desc: "Realizamos actividades de arte, música y teatro para fomentar la expresión emocional y artística, desarrollando la creatividad y confianza.",
                  img: "/children-art-music-creative.png",
                  features: ["Arte y música", "Expresión emocional", "Desarrollo creativo"],
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        width={800}
                        height={400}
                        className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                      <div className="space-y-2">
                        {item.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Optimizado para mobile */}
        <section
          ref={ctaRef.ref}
          className={`py-20 sm:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden transition-all duration-1000 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full font-medium mb-6 text-sm sm:text-base">
              <Heart className="w-4 h-4" />
              ¡Te esperamos!
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para conocer <span className="text-green-200">Shaddai</span>?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-green-100 max-w-2xl mx-auto">
              Agenda tu visita y conoce nuestras instalaciones, equipo y la magia que hace especial a nuestra familia
              educativa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Agendar visita
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-green-700 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
                >
                  Llamar ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
