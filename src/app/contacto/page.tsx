"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Heart,
  CheckCircle,
  ArrowRight,
  Globe,
  Headphones,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "consulta",
    childAge: "",
    preferredProgram: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroRef = useScrollAnimation()
  const contactInfoRef = useScrollAnimation()
  const formRef = useScrollAnimation()
  const faqRef = useScrollAnimation()
  const testimonialsRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Reset form or show success message
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Nuestra Ubicación",
      details: ["Calle José Antonio Salcedo", "San Fernando de Montecristi", "República Dominicana"],
      action: "Ver en Google Maps",
      color: "from-orange-400 to-orange-500",
    },
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["(809) 555-NIÑOS", "(809) 555-4567", "WhatsApp: (809) 555-0123"],
      action: "Llamar ahora",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Mail,
      title: "Correos Electrónicos",
      details: [
        "info@shaddaifamilycenter.com",
        "admisiones@shaddaifamilycenter.com",
        "direccion@shaddaifamilycenter.com",
      ],
      action: "Enviar email",
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: ["Lun - Vie: 7:00 AM - 6:00 PM", "Sáb: 8:00 AM - 2:00 PM", "Dom: Solo emergencias"],
      action: "Ver calendario",
      color: "from-orange-400 to-orange-600",
    },
  ]

  const faqs = [
    {
      category: "Inscripciones y Admisiones",
      questions: [
        {
          question: "¿Cuál es la edad mínima para inscribir a mi hijo?",
          answer:
            "Aceptamos niños desde los 6 meses hasta los 12 años, dependiendo del programa seleccionado. Para guardería aceptamos desde 6 meses, para programas de inglés desde 3 años, y para actividades especiales tenemos opciones para todas las edades.",
        },
        {
          question: "¿Qué documentos necesito para la inscripción?",
          answer:
            "Necesitas: acta de nacimiento del niño, identificación de ambos padres, comprobante de domicilio, cartilla de vacunación actualizada, certificado médico reciente, 2 fotografías tamaño infantil y contactos de emergencia completos.",
        },
        {
          question: "¿Cuándo puedo inscribir a mi hijo?",
          answer:
            "Las inscripciones están abiertas todo el año. Sin embargo, recomendamos inscribirse con al menos 2 semanas de anticipación para garantizar disponibilidad en el programa deseado y completar todos los procesos de admisión.",
        },
      ],
    },
    {
      category: "Programas y Servicios",
      questions: [
        {
          question: "¿Ofrecen servicio de alimentación?",
          answer:
            "Sí, incluimos desayuno nutritivo, almuerzo balanceado y dos meriendas saludables preparadas por nuestro chef especializado en nutrición infantil. Adaptamos las comidas según alergias y preferencias dietéticas específicas.",
        },
        {
          question: "¿Qué programas educativos ofrecen?",
          answer:
            "Ofrecemos guardería (Plan Básico, Esencial e Indispensable), clases de inglés para diferentes edades, programas de verano, actividades de arte y creatividad, música y movimiento, y apoyo escolar personalizado.",
        },
        {
          question: "¿Los maestros están certificados?",
          answer:
            "Absolutamente. Todo nuestro personal cuenta con certificaciones en educación infantil, primeros auxilios y CPR. Además, participan en capacitaciones continuas sobre metodologías educativas modernas y desarrollo infantil.",
        },
      ],
    },
    {
      category: "Seguridad y Cuidados",
      questions: [
        {
          question: "¿Qué medidas de seguridad tienen?",
          answer:
            "Contamos con cámaras de seguridad 24/7, personal certificado en primeros auxilios, protocolos estrictos de entrada y salida, sistema de identificación para padres, y instalaciones diseñadas específicamente para la seguridad infantil.",
        },
        {
          question: "¿Cómo manejan las emergencias médicas?",
          answer:
            "Tenemos protocolos establecidos para emergencias, personal capacitado en primeros auxilios, botiquín completo, y contacto directo con servicios médicos locales. Los padres son notificados inmediatamente en caso de cualquier incidente.",
        },
      ],
    },
    {
      category: "Visitas y Información General",
      questions: [
        {
          question: "¿Puedo visitar las instalaciones antes de inscribir?",
          answer:
            "¡Por supuesto! Ofrecemos tours gratuitos de lunes a viernes de 9:00 AM a 4:00 PM. Durante la visita podrás conocer nuestras instalaciones, hablar con el personal y resolver todas tus dudas. Solo agenda tu cita con nosotros.",
        },
        {
          question: "¿Ofrecen descuentos por hermanos?",
          answer:
            "Sí, ofrecemos descuentos especiales para familias con múltiples hijos inscritos. El descuento varía según el programa y número de niños. Consulta con nuestro equipo de admisiones para conocer las opciones disponibles.",
        },
        {
          question: "¿Qué pasa si mi hijo se enferma?",
          answer:
            "Por la salud de todos los niños, pedimos que los niños con fiebre, síntomas de resfriado severo o enfermedades contagiosas permanezcan en casa. Ofrecemos días de recuperación sin penalización y actividades de seguimiento en casa.",
        },
      ],
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Madre de Sofía (4 años)",
      message:
        "El equipo de Shaddai es increíble. Desde el primer contacto me sentí en confianza. Mi hija ama ir cada día y ha aprendido muchísimo.",
      rating: 5,
      image: "/images/testimonial-1.webp",
    },
    {
      name: "Carlos Rodríguez",
      role: "Padre de Mateo (3 años)",
      message:
        "La comunicación es excelente. Siempre están disponibles para resolver dudas y el progreso de Mateo ha sido notable en todos los aspectos.",
      rating: 5,
      image: "/images/testimonial-2.webp",
    },
    {
      name: "Ana Martínez",
      role: "Madre de gemelos (2 años)",
      message:
        "Encontrar un lugar que cuide a mis gemelos con tanto amor y profesionalismo fue un regalo. Recomiendo Shaddai al 100%.",
      rating: 5,
      image: "/images/testimonial-3.webp",
    },
  ]

  const quickActions = [
    {
      icon: Phone,
      title: "Llamada Inmediata",
      description: "Habla directamente con nuestro equipo",
      action: "Llamar (809) 555-NIÑOS",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: MessageCircle,
      title: "Chat WhatsApp",
      description: "Respuesta rápida por WhatsApp",
      action: "Abrir WhatsApp",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Calendar,
      title: "Agendar Visita",
      description: "Conoce nuestras instalaciones",
      action: "Programar Tour",
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      icon: Mail,
      title: "Email Directo",
      description: "Envía tu consulta detallada",
      action: "Escribir Email",
      color: "bg-blue-500 hover:bg-blue-600",
    },
  ]

  return (
    <LayoutClientGeneral>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          ref={heroRef.ref}
          className="py-24 relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
            <div
              className="absolute bottom-32 left-16 w-32 h-32 bg-white/5 rounded-full animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>
            <MessageCircle
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
                ¡ESTAMOS AQUÍ PARA TI!
                <Heart className="w-5 h-5" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Hablemos <span className="text-orange-200">Juntos</span> 🧡
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                Tu tranquilidad es nuestra prioridad. Estamos disponibles para resolver todas tus dudas y acompañarte en
                cada paso del camino ✨
              </p>

              {/* Quick Contact Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Headphones, text: "24/7", label: "Soporte disponible" },
                  { icon: Users, text: "500+", label: "Familias atendidas" },
                  { icon: Award, text: "< 2h", label: "Tiempo de respuesta" },
                  { icon: Star, text: "5★", label: "Satisfacción promedio" },
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
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section
          ref={contactInfoRef.ref}
          className={`py-20 bg-gradient-to-br from-orange-50/30 to-orange-100/30 transition-all duration-1000 ${
            contactInfoRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
                <Globe className="w-4 h-4" />
                Múltiples canales de contacto
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ¿Cómo prefieres <span className="text-orange-600">contactarnos</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Elige la forma que más te convenga. Estamos disponibles en múltiples canales para brindarte la mejor
                atención
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105">
                      {info.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon
                return (
                  <Button
                    key={index}
                    className={`${action.color} text-white font-bold py-6 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex flex-col items-center gap-3 h-auto`}
                  >
                    <IconComponent className="w-8 h-8" />
                    <div className="text-center">
                      <div className="font-bold text-lg">{action.title}</div>
                      <div className="text-sm opacity-90">{action.description}</div>
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section
          ref={formRef.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
                <Send className="w-4 h-4" />
                Formulario de contacto
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Envíanos tu <span className="text-orange-600">mensaje</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo en menos de 2 horas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                  <Send className="w-6 h-6" />
                  Formulario de Contacto
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Nombre Completo *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Teléfono *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                        placeholder="(809) 555-0123"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Correo Electrónico *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Asunto</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                      >
                        <option value="consulta">Consulta General</option>
                        <option value="inscripcion">Proceso de Inscripción</option>
                        <option value="programas">Información de Programas</option>
                        <option value="visita">Agendar Visita</option>
                        <option value="precios">Consulta de Precios</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Edad del Niño</label>
                      <Input
                        type="text"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                        placeholder="Ej: 3 años"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Programa de Interés</label>
                    <select
                      name="preferredProgram"
                      value={formData.preferredProgram}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                    >
                      <option value="">Selecciona un programa</option>
                      <option value="guarderia-basico">Guardería Plan Básico</option>
                      <option value="guarderia-esencial">Guardería Plan Esencial</option>
                      <option value="guarderia-indispensable">Guardería Plan Indispensable</option>
                      <option value="ingles-ninos">Inglés para Niños</option>
                      <option value="ingles-adolescentes">Inglés para Adolescentes</option>
                      <option value="verano">Jornada de Verano</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Mensaje *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none bg-white"
                      placeholder="Cuéntanos cómo podemos ayudarte. Incluye cualquier pregunta específica o información adicional que consideres importante..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Campos obligatorios. Responderemos en menos de 2 horas durante horario laboral.
                  </p>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Nuestra Ubicación
                  </h3>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-64 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                      <p className="text-gray-800 font-bold text-lg">Calle José Antonio Salcedo</p>
                      <p className="text-gray-600">San Fernando de Montecristi</p>
                      <p className="text-gray-600">República Dominicana</p>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105">
                    <MapPin className="w-5 h-5 mr-2" />
                    Abrir en Google Maps
                  </Button>
                </div>

                {/* Response Time Info */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    Tiempos de Respuesta
                  </h3>
                  <div className="space-y-4">
                    {[
                      { method: "WhatsApp", time: "Inmediato", icon: MessageCircle, color: "text-green-600" },
                      { method: "Llamada telefónica", time: "Inmediato", icon: Phone, color: "text-blue-600" },
                      { method: "Formulario web", time: "< 2 horas", icon: Mail, color: "text-orange-600" },
                      { method: "Email directo", time: "< 4 horas", icon: Send, color: "text-purple-600" },
                    ].map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <IconComponent className={`w-5 h-5 ${item.color}`} />
                            <span className="font-medium text-gray-800">{item.method}</span>
                          </div>
                          <span className="font-bold text-orange-600">{item.time}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    Tu Confianza es Importante
                  </h3>
                  <div className="space-y-4">
                    {[
                      "✅ Respuesta garantizada en menos de 2 horas",
                      "🔒 Tus datos están completamente seguros",
                      "👥 Atención personalizada y profesional",
                      "📞 Soporte disponible 6 días a la semana",
                      "⭐ Más de 500 familias nos recomiendan",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          ref={testimonialsRef.ref}
          className={`py-20 bg-gradient-to-br from-orange-50/30 to-orange-100/30 transition-all duration-1000 ${
            testimonialsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full font-medium mb-4">
                <Heart className="w-4 h-4" />
                Lo que dicen nuestras familias
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Testimonios <span className="text-orange-600">reales</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La satisfacción de nuestras familias es nuestro mayor logro
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed italic">{testimonial.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            faqRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium mb-4">
                <MessageCircle className="w-4 h-4" />
                Preguntas frecuentes
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Resolvemos tus <span className="text-orange-600">dudas</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Las respuestas a las preguntas más comunes de nuestras familias, organizadas por categorías
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6" />
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex
                      const isExpanded = expandedFaq === globalIndex
                      return (
                        <div key={faqIndex} className="bg-white rounded-2xl shadow-sm border border-gray-100">
                          <button
                            onClick={() => setExpandedFaq(isExpanded ? null : globalIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
                          >
                            <h4 className="font-bold text-gray-900 pr-4">{faq.question}</h4>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-100 pt-4">
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">¿No encontraste la respuesta que buscabas?</p>
              <Link href="#formulario">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Hacer una Pregunta Personalizada
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef.ref}
          className={`py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden transition-all duration-1000 ${
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
              ¡El momento perfecto es ahora!
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-orange-200">comenzar</span>? 🚀
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              No esperes más para brindarle a tu pequeño la mejor experiencia educativa. Estamos aquí para acompañarte
              en cada paso del camino.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link href="/inscripcion">
                <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  ¡Inscribir Ahora!
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              <Button className="border-white text-white hover:bg-white hover:text-orange-600 px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 bg-transparent border-2">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Visita
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Phone, text: "Llamada Gratuita", desc: "Habla con nosotros ahora mismo" },
                { icon: Shield, text: "Proceso Seguro", desc: "Tus datos están protegidos" },
                { icon: CheckCircle, text: "Respuesta Rápida", desc: "Te contactamos en menos de 2 horas" },
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
