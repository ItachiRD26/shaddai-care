"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react"

export default function Footer() {
  const [, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          ;[0, 1, 2, 3].forEach((index) => {
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
    <footer ref={sectionRef} className="bg-[#1d7748] text-white">
      <div className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo y Descripción */}
          <div className={`lg:col-span-2 space-y-5 transition-all duration-700 ${visibleSections.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={52}
                height={52}
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <span className="text-lg font-semibold">Shaddai Family Center</span>
            </div>
            <p className="text-sm text-white/80 max-w-md leading-relaxed">
              Donde cada familia encuentra su hogar educativo. Cuidado infantil profesional, educación de calidad y amor genuino desde 2018.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, MessageCircle, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div className={`space-y-4 transition-all duration-700 delay-200 ${visibleSections.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Programas</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/shaddai-school" className="hover:text-white transition">Shaddai School</Link></li>
              <li><Link href="/shaddai-daycare" className="hover:text-white transition">Shaddai Day-Care</Link></li>
              <li><Link href="/grace-learning" className="hover:text-white transition">Grace Learning Center</Link></li>
              <li><Link href="/programas-verano" className="hover:text-white transition">Programas de Verano</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className={`space-y-4 transition-all duration-700 delay-400 ${visibleSections.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-white" />
                Calle José Antonio Salcedo, Montecristi
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-white" />
                <a href="tel:+18295525935" className="hover:underline">(809) 000-0000</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-white" />
                <a href="mailto:info@shaddaifamilycenter.com" className="hover:underline">info@shaddaifamilycenter.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className={`bg-[#155d3a] py-6 transition-all duration-700 delay-600 ${visibleSections.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/70 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Shaddai Family Center. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Educando con</span>
            <Heart className="w-4 h-4 text-[#fcafc2] fill-current animate-pulse" />
            <span>desde 2018</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
