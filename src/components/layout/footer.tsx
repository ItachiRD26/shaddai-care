"use client"

import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function Footer() {
  const [, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger section animations
          ;[0, 1, 2, 3].forEach((index: number) => {
            setTimeout(() => {
              setVisibleSections((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={sectionRef} className="bg-[#1d7748] text-white relative overflow-hidden">
      {/* Distinctive Element - Footer Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#fcafc2]"></div>
        <div className="absolute top-10 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-12 h-12 bg-[#4f75ff]/20 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <Heart className="absolute top-16 left-1/3 w-6 h-6 text-[#fcafc2]/30 animate-pulse" />
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div
              className={`lg:col-span-2 space-y-4 sm:space-y-6 transition-all duration-1000 ${
                visibleSections.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/logo.png?height=128&width=128"
                    alt="Shaddai Day-Care Logo"
                    width={128}
                    height={128}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white">SHADDAI</span>
                  <div className="text-xs sm:text-sm font-bold text-[#fcafc2] -mt-1">DAY-CARE</div>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed max-w-md text-sm sm:text-base">
                Donde los pequeños corazones cultivan grandes sueños. Cuidado infantil amoroso y profesional desde 2018.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4f75ff] hover:bg-[#4f75ff]/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#fcafc2] hover:bg-[#fcafc2]/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f68026] hover:bg-[#f68026]/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${
                visibleSections.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="text-base sm:text-lg font-bold text-white">Enlaces</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: "Programas", href: "/programas" },
                  { name: "Inscripciones", href: "/inscripciones" },
                  { name: "Testimonios", href: "/testimonios" },
                  { name: "Contacto", href: "/contacto" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-[#fcafc2] text-sm sm:text-base hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-400 ${
                visibleSections.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="text-base sm:text-lg font-bold text-white">Contacto</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#fcafc2] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white/80 text-sm sm:text-base">
                    Calle de los Niños 123
                    <br />
                    Valle Feliz, CA 90210
                  </p>
                </div>

                <div className="flex items-center space-x-3 group">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#4f75ff] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white/80 text-sm sm:text-base">(555) 123-NIÑOS</p>
                </div>

                <div className="flex items-center space-x-3 group">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#f68026] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-white/80 text-sm sm:text-base">info@shaddaidaycare.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t border-white/20 bg-[#155a39] transition-all duration-1000 delay-600 ${
          visibleSections.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-white/70 text-sm sm:text-base">
              © 2024 Shaddai Day-Care. Todos los derechos reservados.
            </p>

            <div className="flex items-center space-x-2">
              <span className="text-white/70 text-sm sm:text-base">Hecho con</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-[#fcafc2] fill-current animate-pulse" />
              <span className="text-white/70 text-sm sm:text-base">para familias</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
