"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Send, MessageCircle, Calendar, ChevronDown, ChevronUp, Heart, ArrowRight, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import LayoutClientGeneral from "@/components/layout/layoutclientG"

// URLs: reemplaza estas constantes con tus enlaces reales
const GOOGLE_FORM_URL = "https://forms.gle/your-form-id"
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Calle%20Jos%C3%A9%20Antonio%20Salcedo%2C%20Montecristi%2C%20Rep%C3%BAblica%20Dominicana"
const WHATSAPP_URL = "https://wa.me/18095550123?text=Hola%20Shaddai%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n."

// Hook de animación por intersección
function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function ContactoPage() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "consulta",
    message: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Animaciones
  const heroRef = useScrollAnimation()
  const infoRef = useScrollAnimation()
  const formRef = useScrollAnimation()
  const faqRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  // Handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulación de envío — aquí podrías integrar un servicio real
    await new Promise((r) => setTimeout(r, 1200))
    setIsSubmitting(false)
    // Reset y confirmación simple (puedes reemplazar por toast)
    setFormData({ name: "", email: "", phone: "", subject: "consulta", message: "" })
    console.log("Mensaje enviado:", formData)
  }

  // Contenido esencial reordenado y optimizado
  const contactCards = [
    {
      icon: MapPin,
      title: "Ubicación",
      lines: ["Calle José Antonio Salcedo", "San Fernando de Montecristi", "República Dominicana"],
      action: { label: "Abrir en Google Maps", href: GOOGLE_MAPS_URL },
    },
    {
      icon: Phone,
      title: "Teléfono",
      lines: ["(809) 555-4567", "WhatsApp disponible"],
      action: { label: "Llamar ahora", href: "tel:+18095554567" },
    },
    {
      icon: Mail,
      title: "Correo",
      lines: ["info@shaddaifamilycenter.com", "admisiones@shaddaifamilycenter.com"],
      action: { label: "Enviar email", href: "mailto:info@shaddaifamilycenter.com" },
    },
    {
      icon: Calendar,
      title: "Horarios",
      lines: ["Lun - Vie: 7:00 AM - 6:00 PM", "Sáb: 8:00 AM - 2:00 PM"],
      action: { label: "Escribir por WhatsApp", href: WHATSAPP_URL },
    },
  ]

  const faqs = [
    {
      q: "¿Cómo me inscribo?",
      a: "Haz clic en “Inscribir Ahora” para abrir el formulario de Google y completa tus datos. Te contactaremos en breve.",
    },
    {
      q: "¿Puedo agendar una visita?",
      a: "Sí. Escríbenos por WhatsApp o utiliza el botón “Agendar Visita” para coordinar día y hora.",
    },
    {
      q: "¿Qué edades atienden?",
      a: "Desde 6 meses hasta 12 años, según el programa. Te asesoramos para elegir la mejor opción.",
    },
    {
      q: "¿Cuánto tardan en responder?",
      a: "En horario laboral respondemos en menos de 2 horas por web, y casi inmediato por WhatsApp/llamada.",
    },
    {
      q: "¿Dónde están ubicados?",
      a: "En San Fernando de Montecristi. Presiona “Abrir en Google Maps” para ver la ruta exacta.",
    },
    {
      q: "¿Qué pasa tras enviar el formulario?",
      a: "Recibirás una confirmación y nuestro equipo te contactará para los siguientes pasos.",
    },
  ]

  return (
    <LayoutClientGeneral>
      <main className="min-h-screen bg-white">
        {/* Hero compacto con CTA principal (Google Form) */}
        <section
          ref={heroRef.ref}
          className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 text-center">
            <div
              className={`transition-all duration-700 ${heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <Heart className="h-4 w-4" />
                ¿Tienes dudas? Estamos para ayudarte
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Contáctanos y da el{" "}
                <span className="text-orange-200">primer paso</span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-base text-white/90 sm:text-lg">
                Resolvemos tus preguntas y te acompañamos en el proceso de inscripción. Respuesta rápida y trato cercano.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-bold text-orange-600 shadow-lg transition-all hover:scale-[1.02] hover:bg-orange-50"
                  aria-label="Inscribir ahora con Google Form"
                >
                  ¡Inscribir Ahora!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-orange-600"
                  aria-label="Escribir por WhatsApp"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tarjetas esenciales de contacto */}
        <section
          ref={infoRef.ref}
          className={`bg-gradient-to-br from-orange-50/30 to-orange-100/30 transition-all duration-700 ${infoRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mx-auto mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Formas rápidas de <span className="text-orange-600">contacto</span>
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-gray-600">
                Elige el canal que prefieras. Te responderemos lo antes posible.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactCards.map((c, i) => {
                const Icon = c.icon
                return (
                  <div
                    key={i}
                    className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{c.title}</h3>
                    <ul className="mb-5 space-y-1">
                      {c.lines.map((line, idx) => (
                        <li key={idx} className="text-sm text-gray-600">
                          {line}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={c.action.href}
                      target={c.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700"
                    >
                      {c.action.label}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Formulario y bloque lateral compacto */}
        <section
          id="formulario"
          ref={formRef.ref}
          className={`transition-all duration-700 ${formRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Formulario */}
              <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl">
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-orange-700">
                  <Send className="h-6 w-6" />
                  Envíanos un mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">Nombre *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                        className="rounded-xl bg-white"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">Teléfono *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(809) 555-0123"
                        required
                        className="rounded-xl bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Correo *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="rounded-xl bg-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Asunto</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="consulta">Consulta general</option>
                      <option value="inscripcion">Inscripción</option>
                      <option value="programas">Programas</option>
                      <option value="visita">Agendar visita</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">Mensaje *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Cuéntanos cómo podemos ayudarte"
                      required
                      className="resize-none rounded-xl bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.01] hover:from-orange-600 hover:to-orange-700 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="pt-2 text-center text-xs text-gray-600">
                    Respondemos en menos de 2 horas en horario laboral.
                  </p>
                </form>
              </div>

              {/* Lateral compacto */}
              <div className="space-y-8">
                {/* Bloque mapa ligero */}
                <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
                  <h4 className="mb-4 flex items-center gap-3 text-xl font-bold text-orange-700">
                    <MapPin className="h-5 w-5" />
                    Nuestra ubicación
                  </h4>
                  <div className="mb-5 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 p-8 text-center">
                    <p className="font-semibold text-gray-800">Calle José Antonio Salcedo</p>
                    <p className="text-gray-600">San Fernando de Montecristi</p>
                    <p className="text-gray-600">República Dominicana</p>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition-all hover:scale-[1.01] hover:bg-orange-600"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Abrir en Google Maps
                  </a>
                </div>

                {/* Seguridad/confianza breve */}
                <div className="rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 shadow-xl">
                  <h4 className="mb-4 flex items-center gap-3 text-xl font-bold text-orange-700">
                    <Shield className="h-5 w-5" />
                    Tu tranquilidad es primero
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                      Respuesta rápida por WhatsApp, llamada y correo.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                      Datos protegidos y proceso transparente.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                      Acompañamiento personalizado durante la inscripción.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ compacta */}
        <section
          ref={faqRef.ref}
          className={`transition-all duration-700 ${faqRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-700">
                <MessageCircle className="h-4 w-4" />
                Preguntas frecuentes
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Resolvemos tus <span className="text-orange-600">dudas</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item, idx) => {
                const isOpen = expandedFaq === idx
                return (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left hover:bg-gray-50"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4 text-sm font-semibold text-gray-900 sm:text-base">{item.q}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-orange-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-orange-600" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-gray-700 sm:text-base">
                        <div className="border-t border-gray-100 pt-4">{item.a}</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-8 text-center">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:from-orange-600 hover:to-orange-700"
              >
                ¡Inscribir Ahora!
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA final con botón a Google Form */}
        <section
          ref={ctaRef.ref}
          className={`relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 text-white transition-all duration-700 ${ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div className="mx-auto max-w-4xl px-6 py-16 text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-medium backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              ¡El momento perfecto es ahora!
            </div>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              ¿Listo para <span className="text-orange-200">comenzar</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/90">
              Dale a tu pequeño la mejor experiencia. Inscríbelo en minutos con nuestro formulario.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-white px-10 py-4 text-lg font-bold text-orange-600 shadow-xl transition-all hover:scale-[1.02] hover:bg-orange-50"
              >
                ¡Inscribir Ahora!
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-orange-600"
              >
                Agendar visita por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </LayoutClientGeneral>
  )
}
