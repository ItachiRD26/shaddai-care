"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "consulta",
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Nuestra Ubicación",
      details: ["Calle de los Niños 123", "Valle Feliz, CA 90210"],
      color: "text-[color:var(--shaddai-orange)]",
    },
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["(555) 123-NIÑOS", "(555) 123-4567"],
      color: "text-[color:var(--shaddai-orange)]",
    },
    {
      icon: Mail,
      title: "Correos Electrónicos",
      details: ["info@shaddaidaycare.com", "admisiones@shaddaidaycare.com"],
      color: "text-[color:var(--shaddai-orange)]",
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: ["Lun - Vie: 7:00 AM - 6:00 PM", "Sáb: 8:00 AM - 2:00 PM"],
      color: "text-[color:var(--shaddai-orange)]",
    },
  ]

  const faqs = [
    {
      question: "¿Cuál es la edad mínima para inscribir a mi hijo?",
      answer: "Aceptamos niños desde los 6 meses hasta los 12 años, dependiendo del programa seleccionado.",
    },
    {
      question: "¿Ofrecen servicio de alimentación?",
      answer:
        "Sí, incluimos desayuno, almuerzo y dos meriendas saludables preparadas por nuestro chef especializado en nutrición infantil.",
    },
    {
      question: "¿Qué medidas de seguridad tienen?",
      answer:
        "Contamos con cámaras de seguridad 24/7, personal certificado en primeros auxilios, y protocolos estrictos de entrada y salida.",
    },
    {
      question: "¿Puedo visitar las instalaciones antes de inscribir?",
      answer: "¡Por supuesto! Ofrecemos tours gratuitos de lunes a viernes. Solo agenda tu cita con nosotros.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/contacto-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--shaddai-orange)]/90 to-[color:var(--shaddai-orange)]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <MessageCircle className="w-5 h-5" />
              ¡Hablemos!
              <MessageCircle className="w-5 h-5" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Contacto 🧡
            </h1>

            <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Estamos aquí para resolver todas tus dudas y ayudarte a dar el primer paso hacia la mejor aventura
              educativa ✨
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-orange)] mb-6">
              ¿Cómo Contactarnos? 📞
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Múltiples formas de comunicarte con nosotros para brindarte la mejor atención
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[color:var(--shaddai-orange)] rounded-2xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-800 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-display font-bold text-[color:var(--shaddai-orange)] mb-6">
                Envíanos un Mensaje 💌
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--shaddai-orange)] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--shaddai-orange)] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--shaddai-orange)] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Asunto</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--shaddai-orange)] focus:border-transparent"
                  >
                    <option value="consulta">Consulta General</option>
                    <option value="inscripcion">Proceso de Inscripción</option>
                    <option value="programas">Información de Programas</option>
                    <option value="visita">Agendar Visita</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--shaddai-orange)] focus:border-transparent resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[color:var(--shaddai-orange)] hover:opacity-90 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Enviar Mensaje <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Map & Quick Actions */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-display font-bold text-[color:var(--shaddai-orange)] mb-6">
                  Nuestra Ubicación 📍
                </h3>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[color:var(--shaddai-orange)] mx-auto mb-4" />
                    <p className="text-gray-700 font-bold">Calle de los Niños 123</p>
                    <p className="text-gray-600">Valle Feliz, CA 90210</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-display font-bold text-[color:var(--shaddai-orange)] mb-6">
                  Acciones Rápidas ⚡
                </h3>
                <div className="space-y-4">
                  <Button className=" cursor-pointer w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Llamar Ahora
                  </Button>
                  <Button className=" cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat WhatsApp
                  </Button>
                  <Button className="w-full bg-[color:var(--shaddai-orange)] hover:opacity-90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Agendar Visita
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-[color:var(--shaddai-orange)] mb-6">
              Preguntas Frecuentes ❓
            </h2>
            <p className="text-xl text-gray-700">Respuestas a las dudas más comunes de nuestras familias</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[color:var(--shaddai-orange)]" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[color:var(--shaddai-orange)] to-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">¿Listo para Comenzar? 🚀</h2>
          <p className="text-xl text-white/90 mb-8">
            Da el primer paso hacia la mejor experiencia educativa para tu pequeño
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cursor-pointer bg-white text-[color:var(--shaddai-orange)] hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl text-lg">
              <Calendar className="w-6 h-6 mr-2" /> Agendar Visita
            </Button>
            <Button className="cursor-pointer bg-white/20 text-white hover:bg-white/30 font-bold px-8 py-4 rounded-2xl text-lg border border-white/30">
              <Phone className="w-6 h-6 mr-2" /> Llamar Ahora
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
