"use client"

import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <footer
      ref={sectionRef}
      className={`bg-gray-800 text-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[color:var(--shaddai-green)] via-[color:var(--shaddai-blue)] to-[color:var(--shaddai-pink)]" />

      {/* Main Footer Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--shaddai-green)] to-[color:var(--shaddai-blue)] rounded-xl flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=24&width=24"
                    alt="Shaddai Day-Care Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <span className="text-2xl font-display font-bold text-white">SHADDAI</span>
                  <div className="text-sm font-display font-bold text-[color:var(--shaddai-pink)] -mt-1">DAY-CARE</div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Donde los pequeños corazones cultivan grandes sueños. Cuidado infantil amoroso y profesional desde 2018.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[color:var(--shaddai-blue)] hover:bg-[color:var(--shaddai-blue)]/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[color:var(--shaddai-pink)] hover:bg-[color:var(--shaddai-pink)]/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[color:var(--shaddai-green)] hover:bg-[color:var(--shaddai-green)]/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-display font-bold text-white">Enlaces</h4>
              <ul className="space-y-2">
                {[
                  { name: "Programas", href: "/programas" },
                  { name: "Inscripciones", href: "/inscripciones" },
                  { name: "Testimonios", href: "/testimonios" },
                  { name: "Contacto", href: "/contacto" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[color:var(--shaddai-yellow)] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-display font-bold text-white">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[color:var(--shaddai-green)] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">
                    Calle de los Niños 123
                    <br />
                    Valle Feliz, CA 90210
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[color:var(--shaddai-blue)] flex-shrink-0" />
                  <p className="text-gray-300 text-sm">(555) 123-NIÑOS</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[color:var(--shaddai-orange)] flex-shrink-0" />
                  <p className="text-gray-300 text-sm">info@shaddaidaycare.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Shaddai Day-Care. Todos los derechos reservados.</p>

            <div className="flex items-center space-x-1 text-sm">
              <span className="text-gray-400">Hecho con</span>
              <Heart className="w-4 h-4 text-[color:var(--shaddai-pink)] fill-current" />
              <span className="text-gray-400">para familias</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
