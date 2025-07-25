"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Heart, GraduationCap, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Shield,
    title: "Seguridad Total",
    description:
      "Instalaciones modernas con la mejor tecnología de seguridad y personal capacitado que cuida a tu pequeño con el máximo cuidado.",
    image: "/images/kinder.jpg",
    stats: "100% Seguro",
    features: ["Cámaras 24/7", "Personal certificado", "Protocolos estrictos"],
    color: "#1d7748",
  },
  {
    icon: Heart,
    title: "Atención Personalizada",
    description:
      "Cada niño es único y especial. Creamos experiencias personalizadas que respetan su personalidad, ritmo y desarrollo individual.",
    image: "/images/kinder.jpg",
    stats: "Ratio 2:15",
    features: ["Atención individual", "Seguimiento personal", "Cuidado emocional"],
    color: "#fcafc2",
  },
  {
    icon: GraduationCap,
    title: "Educadores Expertos",
    description:
      "Nuestro equipo de educadores son profesionales con años de experiencia, convirtiendo cada momento en una oportunidad de aprendizaje.",
    image: "/images/kinder.jpg",
    stats: "15+ Años",
    features: ["Formación continua", "Especialistas certificados", "Pasión por enseñar"],
    color: "#4f75ff",
  },
  {
    icon: Sparkles,
    title: "Metodología Innovadora",
    description:
      "Programas diseñados para que los niños exploren, creen y crezcan mientras se divierten en un ambiente estimulante y seguro.",
    image: "/images/kinder.jpg",
    stats: "Método Único",
    features: ["Aprendizaje lúdico", "Creatividad sin límites", "Desarrollo integral"],
    color: "#f68026",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger item animations
          reasons.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Distinctive Element - Educational Icons Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Shield className="absolute top-20 right-20 w-12 h-12 text-[#1d7748]/5 animate-pulse" />
        <Heart
          className="absolute bottom-32 left-16 w-10 h-10 text-[#fcafc2]/10 animate-bounce"
          style={{ animationDuration: "3s" }}
        />
        <GraduationCap
          className="absolute top-1/3 left-1/4 w-8 h-8 text-[#4f75ff]/10 animate-spin"
          style={{ animationDuration: "8s" }}
        />
        <Sparkles className="absolute bottom-20 right-1/3 w-6 h-6 text-[#f68026]/10 animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">¿Por qué elegirnos?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Porque tu hijo merece un lugar donde crezca feliz, seguro y lleno de oportunidades de aprendizaje
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-16 sm:space-y-20">
          {reasons.map((item, index) => {
            const IconComponent = item.icon
            const isEven = index % 2 === 0
            const isItemVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 sm:gap-12 transition-all duration-1000 ${
                  isItemVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
                }`}
              >
                {/* Image */}
                <div className="flex-1 relative group">
                  <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500">
                    <Image
                      src={item.image || "/images/prueba.jpg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Stats Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <span className="font-bold text-base sm:text-lg" style={{ color: item.color }}>
                        {item.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl shadow-sm hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: item.color }}
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{item.title}</h3>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: item.color }} />
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">¿Listo para conocernos?</h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ven y descubre por qué somos la mejor opción para tu pequeño
          </p>
          <Link href="/contacto">
            <Button className="bg-[#1d7748] hover:bg-[#1d7748]/90 cursor-pointer text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              Agendar visita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
