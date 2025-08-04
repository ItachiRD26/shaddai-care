"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  FileText,
  Calendar,
  CreditCard,
  CheckCircle,
  User,
  Phone,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Heart,
  Star,
  Users,
  BookOpen,
  Sparkles,
  Download,
  MessageCircle,
} from "lucide-react"
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

export default function InscripcionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps] = useState<number[]>([])

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
      description: "Sube los documentos requeridos",
      icon: FileText,
      time: "10 min",
      details: [
        "Lista completa de documentos",
        "Subida digital segura",
        "Verificación automática",
        "Asistencia personalizada",
      ],
    },
    {
      number: 4,
      title: "Pago y Confirmación",
      description: "Finaliza tu inscripción de forma segura",
      icon: CreditCard,
      time: "5 min",
      details: [
        "Múltiples métodos de pago",
        "Transacciones 100% seguras",
        "Confirmación inmediata",
        "Recibo digital automático",
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
      color: "from-blue-400 to-blue-500",
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
      color: "from-blue-500 to-blue-600",
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
      color: "from-blue-600 to-blue-700",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Proceso 100% Seguro",
      description: "Tus datos están protegidos con encriptación de nivel bancario",
    },
    {
      icon: Clock,
      title: "Inscripción Rápida",
      description: "Completa todo el proceso en menos de 25 minutos",
    },
    {
      icon: Award,
      title: "Confirmación Inmediata",
      description: "Recibe confirmación y documentos al instante",
    },
    {
      icon: Users,
      title: "Soporte Personalizado",
      description: "Nuestro equipo te acompaña en cada paso",
    },
  ]

  return (
    <LayoutClientGeneral>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          ref={heroRef.ref}
          className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-32 left-16 w-32 h-32 bg-white/5 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
            <Sparkles
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
                <Heart className="w-5 h-5" />
                ¡ÚNETE A NUESTRA FAMILIA EDUCATIVA!
                <Heart className="w-5 h-5" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Proceso de <span className="text-blue-200">Inscripción</span> 📝
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                Un proceso simple, rápido y seguro para que tu pequeño comience su aventura educativa con nosotros ✨
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
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

              {/* CTA Button */}
              <Link href="/inscripcion/formulario">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 mb-6">
                  ¡Comenzar Inscripción Ahora!
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <p className="text-white/70 text-sm">⏱️ Proceso estimado: 20-25 minutos • 🔒 Datos 100% seguros</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={benefitsRef.ref}
          className={`py-16 bg-gradient-to-r from-blue-50 to-blue-100 transition-all duration-1000 ${
            benefitsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Steps Overview */}
        <section
          ref={stepsRef.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            stepsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                Pasos del Proceso
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Solo <span className="text-blue-600">4 pasos sencillos</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hemos diseñado un proceso intuitivo y rápido para que puedas inscribir a tu pequeño sin complicaciones
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isActive = currentStep === step.number
                const isCompleted = completedSteps.includes(step.number)

                return (
                  <div
                    key={step.number}
                    className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${
                      isActive ? "ring-2 ring-blue-500 ring-opacity-50 scale-105" : ""
                    } ${isCompleted ? "bg-gradient-to-br from-green-50 to-green-100" : ""}`}
                    onClick={() => setCurrentStep(step.number)}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {isCompleted ? <CheckCircle className="w-6 h-6" /> : step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${
                        isCompleted
                          ? "bg-green-500"
                          : isActive
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : "bg-gray-100 group-hover:bg-blue-100"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${
                          isCompleted || isActive ? "text-white" : "text-gray-600 group-hover:text-blue-600"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {step.time}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {/* Details */}
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="text-center">
                      {isCompleted ? (
                        <div className="text-green-600 font-bold text-sm">✅ Completado</div>
                      ) : isActive ? (
                        <div className="text-blue-600 font-bold text-sm">📍 Paso Actual</div>
                      ) : (
                        <div className="text-gray-400 font-medium text-sm">Pendiente</div>
                      )}
                    </div>

                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isCompleted ? "bg-green-500 w-full" : isActive ? "bg-blue-500 w-1/2" : "bg-gray-200 w-0"
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Detailed Process Section */}
        <section
          ref={processRef.ref}
          className={`py-20 bg-gradient-to-br from-blue-50/30 to-blue-100/30 transition-all duration-1000 ${
            processRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium mb-4">
                <FileText className="w-4 h-4" />
                Información Detallada
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Todo lo que <span className="text-blue-600">necesitas saber</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Programs Preview */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  Programas Disponibles
                </h3>
                <div className="space-y-4">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
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
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900">{program.name}</h4>
                          <p className="text-sm text-gray-600">{program.ages}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{program.price}</div>
                          <div className="text-sm text-gray-400 line-through">{program.originalPrice}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{program.schedule}</p>
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

              {/* Requirements */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  Documentos Requeridos
                </h3>
                <div className="space-y-6">
                  {requirements.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {category.category}
                      </h4>
                      <div className="space-y-2 ml-4">
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

                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Lista de Verificación
                  </h4>
                  <p className="text-blue-700 text-sm mb-3">
                    Descarga nuestra lista completa para no olvidar ningún documento
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
                    Descargar PDF
                    <Download className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef.ref}
          className={`py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white relative overflow-hidden transition-all duration-1000 ${
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
              ¡El momento es ahora!
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-blue-200">comenzar</span>? 🚀
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tu pequeño está a solo unos clics de comenzar una aventura educativa increíble. ¡No esperes más!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link href="/inscripcion/formulario">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  ¡Inscribir Ahora!
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
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
                { icon: Star, text: "Satisfacción Garantizada", desc: "Miles de familias felices" },
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
    </LayoutClientGeneral>
  )
}
