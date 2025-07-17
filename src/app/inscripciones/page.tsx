"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Calendar, CreditCard, CheckCircle, User, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InscripcionPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
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

  const steps = [
    {
      number: 1,
      title: "Información Personal",
      description: "Datos del niño y los padres",
      icon: User,
    },
    {
      number: 2,
      title: "Selección de Programa",
      description: "Elige el programa ideal",
      icon: Calendar,
    },
    {
      number: 3,
      title: "Documentación",
      description: "Documentos requeridos",
      icon: FileText,
    },
    {
      number: 4,
      title: "Pago y Confirmación",
      description: "Finaliza tu inscripción",
      icon: CreditCard,
    },
  ]

  const requirements = [
    "Acta de nacimiento del niño (copia)",
    "Identificación oficial de ambos padres",
    "Comprobante de domicilio reciente",
    "Cartilla de vacunación actualizada",
    "Certificado médico reciente",
    "2 fotografías tamaño infantil",
    "Contactos de emergencia",
    "Alergias o condiciones médicas",
  ]

  const programs = [
    { id: 1, name: "Guardería Plan Básico", price: "$4,500", ages: "6 meses - 4 años" },
    { id: 2, name: "Inglés para Niños", price: "$2,800", ages: "3 - 10 años" },
    { id: 3, name: "Jornada de Verano", price: "$3,500", ages: "Todas las edades" },
    { id: 4, name: "Arte y Creatividad", price: "$1,800", ages: "2 - 8 años" },
    { id: 5, name: "Música y Movimiento", price: "$2,200", ages: "1 - 6 años" },
    { id: 6, name: "Apoyo Escolar", price: "$2,500", ages: "5 - 12 años" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/inscripcion-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--shaddai-blue)]/90 to-[color:var(--shaddai-blue)]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <FileText className="w-5 h-5" />
              ¡Únete a Nuestra Familia!
              <FileText className="w-5 h-5" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Inscripción 💙
            </h1>

            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              El primer paso hacia una aventura educativa llena de amor, diversión y aprendizaje ✨
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-blue)] mb-6">
              Proceso de Inscripción 📋
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un proceso simple y rápido para que tu pequeño comience su aventura con nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => {
              const IconComponent = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number

              return (
                <div
                  key={step.number}
                  className={`text-center cursor-pointer transition-all duration-300 ${isActive ? "scale-105" : ""}`}
                  onClick={() => setCurrentStep(step.number)}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                      isCompleted ? "bg-green-500" : isActive ? "bg-[color:var(--shaddai-blue)]" : "bg-gray-300"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-8 h-8 text-white" />
                    ) : (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-display font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>

          {/* Step Content */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            {currentStep === 1 && (
              <div>
                <h3 className="text-3xl font-display font-bold text-[color:var(--shaddai-blue)] mb-6">
                  Información Personal 👶
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">Datos del Niño:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Nombre completo</li>
                      <li>• Fecha de nacimiento</li>
                      <li>• Edad actual</li>
                      <li>• Alergias o condiciones médicas</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">Datos de los Padres:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Nombres completos</li>
                      <li>• Teléfonos de contacto</li>
                      <li>• Correos electrónicos</li>
                      <li>• Dirección completa</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-3xl font-display font-bold text-[color:var(--shaddai-blue)] mb-6">
                  Selección de Programa 🎯
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programs.map((program) => (
                    <div
                      key={program.id}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                    >
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h4>
                      <p className="text-[color:var(--shaddai-blue)] font-bold text-xl mb-2">{program.price}</p>
                      <p className="text-gray-600 text-sm">{program.ages}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="text-3xl font-display font-bold text-[color:var(--shaddai-blue)] mb-6">
                  Documentación Requerida 📄
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Documentos Necesarios:</h4>
                    <div className="space-y-3">
                      {requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">💡 Consejos Importantes:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Todos los documentos deben estar vigentes</li>
                      <li>• Las copias deben ser legibles</li>
                      <li>• Puedes enviar documentos digitalmente</li>
                      <li>• Nuestro equipo te ayudará con cualquier duda</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h3 className="text-3xl font-display font-bold text-[color:var(--shaddai-blue)] mb-6">
                  Pago y Confirmación 💳
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Métodos de Pago:</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <CreditCard className="w-8 h-8 text-[color:var(--shaddai-blue)]" />
                        <div>
                          <h5 className="font-bold text-gray-800">Tarjeta de Crédito/Débito</h5>
                          <p className="text-gray-600 text-sm">Visa, MasterCard, American Express</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <Phone className="w-8 h-8 text-[color:var(--shaddai-blue)]" />
                        <div>
                          <h5 className="font-bold text-gray-800">Transferencia Bancaria</h5>
                          <p className="text-gray-600 text-sm">Pago directo a nuestra cuenta</p>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                        <Mail className="w-8 h-8 text-[color:var(--shaddai-blue)]" />
                        <div>
                          <h5 className="font-bold text-gray-800">Pago en Efectivo</h5>
                          <p className="text-gray-600 text-sm">Directamente en nuestras instalaciones</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">📋 Incluye:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inscripción al programa seleccionado</li>
                      <li>• Kit de bienvenida personalizado</li>
                      <li>• Seguro de accidentes incluido</li>
                      <li>• Acceso a plataforma de padres</li>
                      <li>• Primera evaluación gratuita</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="bg-gray-300 text-gray-700 hover:bg-gray-400 disabled:opacity-50"
              >
                Anterior
              </Button>
              <Button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                disabled={currentStep === 4}
                className="bg-[color:var(--shaddai-blue)] text-white hover:opacity-90"
              >
                {currentStep === 4 ? "Finalizar" : "Siguiente"} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-[color:var(--shaddai-blue)] to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">¿Tienes Dudas? 🤗</h2>
          <p className="text-xl text-white/90 mb-8">Nuestro equipo está listo para ayudarte en cada paso del proceso</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[color:var(--shaddai-blue)] hover:bg-gray-100 font-bold px-8 py-3 rounded-2xl">
              <Phone className="w-5 h-5 mr-2" /> Llamar Ahora
            </Button>
            <Button className="bg-white/20 text-white hover:bg-white/30 font-bold px-8 py-3 rounded-2xl border border-white/30">
              <Mail className="w-5 h-5 mr-2" /> Enviar Email
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
