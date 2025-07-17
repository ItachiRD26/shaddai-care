"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Heart, GraduationCap, Sparkles, Award, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: Shield,
    title: "¡Súper Seguros! 🛡️",
    description:
      "Instalaciones modernas con la mejor tecnología de seguridad y personal súper capacitado que cuida a tu pequeño como si fuera de la familia.",
    image: "/images/kinder.jpg?height=400&width=600",
    bgColor: "bg-gradient-to-br from-green-100 to-green-200",
    iconBg: "bg-[color:var(--shaddai-green)]",
    stats: "100% Seguro",
    features: ["Cámaras 24/7", "Personal certificado", "Protocolos estrictos"],
  },
  {
    icon: Heart,
    title: "¡Amor Personalizado! 💕",
    description:
      "Cada niño es único y especial. Por eso creamos experiencias personalizadas que respetan su personalidad, ritmo y sueños más grandes.",
    image: "/images/kinder.jpg?height=400&width=600",
    bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
    iconBg: "bg-[color:var(--shaddai-pink)]",
    stats: "Ratio 1:4",
    features: ["Atención individual", "Seguimiento personal", "Cuidado emocional"],
  },
  {
    icon: GraduationCap,
    title: "¡Maestros Increíbles! 👩‍🏫",
    description:
      "Nuestro equipo de educadores son verdaderos magos del aprendizaje, con años de experiencia convirtiendo cada momento en una aventura educativa.",
    image: "/images/kinder.jpg?height=400&width=600",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
    iconBg: "bg-[color:var(--shaddai-blue)]",
    stats: "15+ Años",
    features: ["Formación continua", "Especialistas certificados", "Pasión por enseñar"],
  },
  {
    icon: Sparkles,
    title: "¡Metodología Mágica! ✨",
    description:
      "Programas súper divertidos diseñados para que los niños exploren, creen y crezcan mientras se divierten al máximo en un ambiente lleno de alegría.",
    image: "/images/kinder.jpg?height=400&width=600",
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200",
    iconBg: "bg-[color:var(--shaddai-orange)]",
    stats: "Método Único",
    features: ["Aprendizaje lúdico", "Creatividad sin límites", "Desarrollo integral"],
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/section-3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "20%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/90 via-pink-50/85 to-yellow-100/90 backdrop-blur-sm" />

      {/* Fun Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-[color:var(--shaddai-yellow)] rounded-full opacity-20 animate-bounce" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-[color:var(--shaddai-pink)] rounded-full opacity-30" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[color:var(--shaddai-blue)] rounded-full opacity-25" />
      <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-[color:var(--shaddai-green)] rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-[color:var(--shaddai-orange)] text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <Award className="w-5 h-5" />
            ¡Somos Súper Especiales!
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-6xl lg:text-7xl font-display font-bold text-[color:var(--shaddai-green)] mb-6 leading-tight drop-shadow-lg">
            ¿Por Qué Elegirnos? 🌟
          </h2>
          <p className="text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            ¡Porque tu hijo merece un lugar mágico donde crezca feliz, seguro y lleno de aventuras increíbles! 🚀
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-20">
          {reasons.map((item, index) => {
            const IconComponent = item.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Image */}
                <div className="flex-1 relative group">
                  <div
                    className={`${item.bgColor} rounded-3xl overflow-hidden shadow-xl border-4 border-white backdrop-blur-sm`}
                  >
                    <Image
                      src={item.image || "/images/prueba.jpg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Stats Badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[color:var(--shaddai-yellow)]">
                      <span className="font-bold text-lg text-[color:var(--shaddai-green)]">{item.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 ${item.iconBg} rounded-3xl shadow-lg transition-all duration-500 ${
                      isVisible ? "scale-100 rotate-0" : "scale-0 rotate-45"
                    }`}
                    style={{ transitionDelay: `${index * 300 + 200}ms` }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xl text-gray-700 leading-relaxed bg-white/70 backdrop-blur-sm rounded-xl p-4">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-lg p-3">
                        <CheckCircle className="w-6 h-6 text-[color:var(--shaddai-green)]" />
                        <span className="text-lg text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Fun Rating */}
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[color:var(--shaddai-yellow)] fill-current" />
                    ))}
                    <span className="text-lg font-bold text-gray-700 ml-2">¡Súper Genial!</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-[color:var(--shaddai-green)] to-[color:var(--shaddai-blue)] rounded-3xl p-12 text-white shadow-2xl border-8 border-white backdrop-blur-sm">
          <h3 className="text-4xl font-display font-bold mb-4">¿Listo para Conocernos? 🎉</h3>
          <p className="text-xl mb-8 opacity-90">
            ¡Ven y descubre por qué somos el lugar más feliz y seguro para tu pequeño tesoro!
          </p>
          <Link href="/contacto">
            <Button className="bg-[color:var(--shaddai-yellow)] hover:bg-[color:var(--shaddai-yellow)]/90 text-gray-800 font-bold px-10 py-4 rounded-2xl text-xl shadow-lg hover:shadow-xl transition-all duration-300">
              ¡Agenda tu Visita Súper Especial! ✨
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
