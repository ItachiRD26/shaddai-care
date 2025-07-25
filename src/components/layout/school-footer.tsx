"use client"

import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin, Shield } from "lucide-react"

export default function SchoolFooter() {
  return (
    <footer data-shaddai-footer className="bg-gradient-to-br from-orange-700 via-orange-800 to-orange-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-2xl font-bold">SHADDAI SCHOOL</span>
            </div>
            <p className="text-orange-200 leading-relaxed max-w-md">
              Educación bilingüe, cristiana y de excelencia. Formando líderes del mañana con valores sólidos y
              preparación académica integral.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-orange-200">Campus Seguro</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Programa", href: "#programa" },
                { name: "Instalaciones", href: "#instalaciones" },
                { name: "Admisiones", href: "#admisiones" },
                { name: "Contacto", href: "#contacto" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="block text-orange-200 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-orange-200">
                  Calle José Antonio Salcedo
                  <br />
                  San Fernando de Montecristi
                  <br />
                  República Dominicana
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-300 flex-shrink-0" />
                <a href="tel:+18295525935" className="text-sm text-orange-200 hover:text-white transition-colors">
                  (809) 000-0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-300 flex-shrink-0" />
                <a
                  href="mailto:admisiones@shaddaischool.edu.do"
                  className="text-sm text-orange-200 hover:text-white transition-colors"
                >
                  admisiones@shaddaischool.edu.do
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-orange-200">© 2024 Shaddai School. Todos los derechos reservados.</div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-orange-200 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-orange-200 hover:text-white transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
