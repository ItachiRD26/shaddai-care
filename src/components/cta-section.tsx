"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar, Heart } from "lucide-react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div
            className={`mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              ¿Listo para Dar el
              <br />
              <span className="text-green-600">Siguiente Paso?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Dale a tu hijo el mejor comienzo en la vida. Únete a más de 200 familias que han confiado en nosotros para
              el cuidado y educación de sus pequeños.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/inscripcion">
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 rounded-xl px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group min-w-[280px]"
              >
                <span className="mr-3">Comenzar Inscripción</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white rounded-xl px-10 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group min-w-[280px] bg-white"
              >
                <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                <span>Contactar Ahora</span>
              </Button>
            </Link>
          </div>

          {/* Additional Options */}
          <div
            className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Agendar Visita</h3>
              <p className="text-gray-600 text-sm mb-4">Conoce nuestras instalaciones y equipo</p>
              <Link href="/visita">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl text-sm bg-white"
                >
                  Agendar
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-green-300">
              <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Llamada Gratuita</h3>
              <p className="text-gray-600 text-sm mb-4">Resuelve todas tus dudas por teléfono</p>
              <Link href="tel:555-123-NIÑOS">
                <Button
                  variant="outline"
                  className="border-green-300 text-green-600 hover:bg-green-50 rounded-xl text-sm bg-white"
                >
                  Llamar
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300">
              <Heart className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Día de Prueba</h3>
              <p className="text-gray-600 text-sm mb-4">Tu hijo puede probar nuestros servicios</p>
              <Link href="/prueba">
                <Button
                  variant="outline"
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl text-sm bg-white"
                >
                  Solicitar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
