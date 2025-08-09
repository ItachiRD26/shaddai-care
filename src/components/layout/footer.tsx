"use client"

import Link from "next/link"
import Image from "next/image"
import { memo } from "react"
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react'
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: MessageCircle, href: "#" },
  { Icon: Youtube, href: "#" },
]

const FooterOptimized = memo(function Footer() {
  const { elementRef, isVisible } = useIntersectionObserver(0.1)

  return (
    <footer ref={elementRef} className="bg-white text-gray-900 border-t border-gray-200">
      <div className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo y Descripción */}
          <div
            className={`lg:col-span-2 space-y-5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain bg-gray-100 rounded-lg p-1"
              />
              <span className="text-lg font-semibold text-gray-900">Shaddai Family Center</span>
            </div>
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              Donde cada familia encuentra su hogar educativo. Cuidado infantil profesional, educación de calidad y amor
              genuino desde 2018.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-900"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Programas</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/shaddai-school" className="hover:text-gray-900 transition-colors">
                  Shaddai School
                </Link>
              </li>
              <li>
                <Link href="/shaddai-daycare" className="hover:text-gray-900 transition-colors">
                  Shaddai Day-Care
                </Link>
              </li>
              <li>
                <Link href="/grace-learning" className="hover:text-gray-900 transition-colors">
                  Grace Learning Center
                </Link>
              </li>
              <li>
                <Link href="/programas-verano" className="hover:text-gray-900 transition-colors">
                  Programas de Verano
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-700 flex-shrink-0" />
                Calle José Antonio Salcedo, Montecristi
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gray-700 flex-shrink-0" />
                <a href="tel:+18295525935" className="hover:text-gray-900 hover:underline transition-colors">
                  (809) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gray-700 flex-shrink-0" />
                <a
                  href="mailto:info@shaddaifamilycenter.com"
                  className="hover:text-gray-900 hover:underline transition-colors"
                >
                  info@shaddaifamilycenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div
        className={`bg-gray-50 py-6 transition-all duration-700 delay-300 border-t border-gray-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Shaddai Family Center. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Educando con</span>
            <Heart className="w-4 h-4 text-[#fcafc2] fill-current" />
            <span>desde 2018</span>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default FooterOptimized
