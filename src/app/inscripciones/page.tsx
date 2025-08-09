"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FileText, Calendar, CreditCard, CheckCircle, User, Phone, ArrowRight, Clock, Shield, Award, Heart, Star, Users, BookOpen, Sparkles, Download, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { Baloo_2 } from 'next/font/google'

// Fuente display para mantener coherencia visual
const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

// Navbar y Footer dinámicos para evitar problemas de SSR y mejorar TTI
const NavbarWhite = dynamic(() => import("@/components/layout/navbar"), {
  ssr: false,
  loading: () => <div className="h-20 bg-white/95" />,
})
const Footer = dynamic(() => import("@/components/layout/footer"), {
  ssr: false,
  loading: () => <div className="h-32 bg-white" />,
})

// URL del formulario de Google (reemplaza por el real)
const GOOGLE_FORM_URL = "https://forms.gle/XXXXXXXXXXXX"

// Hook de animación por scroll
function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function InscripcionPage() {
  const heroRef = useScrollAnimation()
  const stepsRef = useScrollAnimation()
  const processRef = useScrollAnimation()
  const benefitsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  const steps = [
    {
      number: 1,
      title: "Información Personal",
      description: "Datos del niño y contacto de los padres",
      icon: User,
      time: "5 min",
      details: [
        "Datos completos del niño",
        "Información de contacto de padres",
        "Datos médicos importantes",
        "Contactos de emergencia",
      ],
    },
    {
      number: 2,
      title: "Selección de Programa",
      description: "Elige el programa perfecto para tu pequeño",
      icon: Calendar,
      time: "3 min",
      details: [
        "Explora nuestros programas",
        "Compara horarios y precios",
        "Selecciona el más adecuado",
        "Personaliza según necesidades",
      ],
    },
    {
      number: 3,
      title: "Documentación",
      description: "Prepara los documentos requeridos",
      icon: FileText,
      time: "10 min",
      details: [
        "Acta de nacimiento, vacunas, certificado médico",
        "Identificaciones de los padres",
        "Comprobante de domicilio",
        "Fotografías recientes",
      ],
    },
    {
      number: 4,
      title: "Enviar Formulario",
      description: "Completa el formulario de Google y confirma",
      icon: CreditCard,
      time: "5 min",
      details: [
        "Completa todos los campos",
        "Adjunta documentos digitalizados",
        "Envía y guarda el comprobante",
        "Recibe confirmación por correo",
      ],
    },
  ]

  const requirements = [
    {
      category: "Documentos del Niño",
      items: [
        "Acta de nacimiento (copia certificada)",
        "Cartilla de vacunación actualizada",
        "Certificado médico reciente (no mayor a 30 días)",
        "2 fotografías tamaño infantil recientes",
      ],
    },
    {
      category: "Documentos de los Padres",
      items: [
        "Identificación oficial vigente (ambos padres)",
        "Comprobante de domicilio reciente",
        "Comprobante de ingresos",
        "Contactos de emergencia completos",
      ],
    },
  ]

  const programs = [
    {
      id: 1,
      name: "Guardería Plan Básico",
      price: "$3,000",
      originalPrice: "$3,500",
      ages: "6 meses - 4 años",
      schedule: "7:00 AM - 5:00 PM",
      features: ["Cuidado personalizado", "Alimentación incluida", "Actividades lúdicas"],
      popular: false,
    },
    {
      id: 2,
      name: "Guardería Plan Esencial",
      price: "$3,500",
      originalPrice: "$4,000",
      ages: "6 meses - 4 años",
      schedule: "7:00 AM - 6:00 PM",
      features: ["Todo lo del básico", "Educación inicial", "Seguimiento diario"],
      popular: true,
    },
    {
      id: 3,
      name: "Inglés para Niños",
      price: "$2,000",
      originalPrice: "$2,500",
      ages: "3 - 10 años",
      schedule: "5:15 PM - 6:15 PM",
      features: ["Método lúdico", "Profesores nativos", "Material incluido"],
      popular: false,
    },
  ]

  const benefits = [
    { icon: Shield, title: "Proceso 100% Seguro", description: "Tus datos están protegidos con encriptación" },
    { icon: Clock, title: "Inscripción Rápida", description: "Completa el proceso en ~25 minutos" },
    { icon: Award, title: "Confirmación Inmediata", description: "Recibe tu comprobante al terminar" },
    { icon: Users, title: "Soporte Personalizado", description: "Te acompañamos en cada paso" },
  ]

  return (
    <div className={baloo2.variable}>
      <NavbarWhite />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section
          ref={heroRef.ref}
          className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
        >
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse" />
            <div
              className="absolute bottom-32 left-16 w-32 h-32 bg-white/5 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            <Sparkles
              className="absolute top-1/4 right-1/4 w-8 h-8 text-white/20 animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold mb-6 border border-white/30">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                ¡ÚNETE A NUESTRA FAMILIA EDUCATIVA!
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Proceso de <span className="text-blue-200">Inscripción</span> 📝
              </h1>
              <p className="text-base sm:text-lg lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                Sigue estos pasos sencillos y completa el formulario en Google para finalizar tu inscripción ✨
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
                {[
                  { icon: Clock, text: "25 min", label: "Proceso completo" },
                  { icon: Shield, text: "100%", label: "Seguro" },
                  { icon: Users, text: "24/7", label: "Soporte" },
                  { icon: CheckCircle, text: "Inmediato", label: "Confirmación" },
                ].map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">{stat.text}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  )
                })}
              </div>

              {/* CTA principal a Google Forms */}
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir Formulario de Google para inscribirse">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 mb-4">
                  ¡Comenzar Inscripción Ahora!
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                </Button>
              </Link>
              <p className="text-white/70 text-xs sm:text-sm">
                ⏱️ Proceso estimado: 20-25 minutos • 🔒 Datos 100% seguros
              </p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section
          ref={benefitsRef.ref}
          className={`py-14 sm:py-16 bg-gradient-to-r from-blue-50 to-blue-100 transition-all duration-1000 ${
            benefitsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pasos */}
        <section
          ref={stepsRef.ref}
          className={`py-16 sm:py-20 bg-white transition-all duration-1000 ${
            stepsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          aria-labelledby="inscripcion-pasos-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-4 text-sm">
                <BookOpen className="w-4 h-4" />
                Guía de Inscripción (Vista informativa)
              </div>
              <h2 id="inscripcion-pasos-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sigue estos <span className="text-blue-600">4 pasos</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Esta sección es solo una guía visual. La inscripción se completa a través del Formulario de Google.
              </p>
            </div>

            {/* Timeline vertical informativa */}
            <div className="relative">
              <ol className="relative border-s-2 border-blue-100 pl-6 space-y-8 sm:space-y-10">
                {steps.map((step, index) => {
                  const IconComponent = step.icon
                  return (
                    <li key={step.number} className="relative">
                      {/* Número del paso */}
                      <div className="absolute -left-[23px] top-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-md">
                        {step.number}
                      </div>

                      {/* Contenido del paso (solo lectura) */}
                      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                            {step.title}
                          </h3>
                          <span className="whitespace-nowrap bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                            {step.time}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm sm:text-base mb-3">{step.description}</p>

                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                              <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Nota informativa y acceso al formulario */}
            <div className="mt-8 sm:mt-10 rounded-xl bg-blue-50 text-blue-800 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="font-semibold">Nota:</div>
              <div className="text-sm sm:text-base">
                Esta guía es informativa. Para completar la inscripción, abre el Formulario de Google y sigue los pasos allí.
                {' '}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-4"
                >
                  Abrir formulario
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Información detallada */}
        <section
          ref={processRef.ref}
          className={`py-16 sm:py-20 bg-gradient-to-br from-blue-50/30 to-blue-100/30 transition-all duration-1000 ${
            processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium mb-4 text-sm">
                <FileText className="w-4 h-4" />
                Información Detallada
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Todo lo que <span className="text-blue-600">necesitas saber</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Programas (preview) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  Programas Disponibles
                </h3>
                <div className="space-y-4">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      className={`relative p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                        program.popular
                          ? "border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100"
                          : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      {program.popular && (
                        <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ MÁS POPULAR
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2 sm:mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900">{program.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{program.ages}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg sm:text-2xl font-bold text-blue-600">{program.price}</div>
                          <div className="text-xs sm:text-sm text-gray-400 line-through">{program.originalPrice}</div>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">{program.schedule}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requisitos */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  Documentos Requeridos
                </h3>
                <div className="space-y-6">
                  {requirements.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {category.category}
                      </h4>
                      <div className="space-y-2 ml-3 sm:ml-4">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 sm:p-5 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Lista de Verificación
                  </h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Descarga nuestra lista completa para no olvidar ningún documento.
                  </p>
                  {/* Coloca tu PDF en public/docs/lista-de-verificacion-inscripcion.pdf */}
                  <a
                    href="/docs/lista-de-verificacion-inscripcion.pdf"
                    download
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Descargar PDF
                    <Download className="w-4 h-4 ml-2" />
                    <span className="sr-only">Descargar lista de verificación en PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section
          ref={ctaRef.ref}
          className={`py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white relative overflow-hidden transition-all duration-1000 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full animate-pulse" />
            <div
              className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6 text-sm">
              <Heart className="w-4 h-4" />
              ¡El momento es ahora!
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-blue-200">comenzar</span>? 🚀
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Da clic en “Inscribir Ahora” para abrir el formulario de Google y completar tu inscripción.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8">
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" aria-label="Ir al Formulario de Google para inscribirse">
                <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  ¡Inscribir Ahora!
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                </Button>
              </Link>
              <Link href="/contacto" aria-label="Resolver dudas sobre el proceso de inscripción">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Resolver Dudas
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Phone, text: "Soporte 24/7", desc: "Te ayudamos cuando lo necesites" },
                { icon: Shield, text: "100% Seguro", desc: "Tus datos están protegidos" },
                { icon: Star, text: "Satisfacción Garantizada", desc: "Familias felices nos respaldan" },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-white mb-1">{item.text}</div>
                    <div className="text-sm text-white/80">{item.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
