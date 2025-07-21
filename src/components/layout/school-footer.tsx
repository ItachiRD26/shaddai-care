"use client"

import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin, Award } from "lucide-react"

export default function SchoolFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Professional Brand Section */}
          <div className="md:col-span-2">
            <Link href="/shaddai-school" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">SHADDAI</span>
                <span className="text-lg font-semibold text-blue-700 -mt-1">SCHOOL</span>
              </div>
            </Link>

            <p className="text-slate-600 leading-relaxed max-w-md mb-6">
              Institución educativa de excelencia académica comprometida con la formación integral, educación bilingüe
              de calidad internacional y sólidos valores cristianos.
            </p>

            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              <Award className="w-4 h-4" />
              Acreditación Educativa Internacional
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-6">Navegación</h3>
            <ul className="space-y-4">
              {[
                { name: "Nosotros", href: "/shaddai-school#nosotros" },
                { name: "Programa Académico", href: "/shaddai-school#programa" },
                { name: "Proceso de Admisión", href: "/shaddai-school#admisiones" },
                { name: "Testimonios", href: "/shaddai-school#testimonios" },
                { name: "Contacto", href: "/shaddai-school#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-600 hover:text-blue-700 transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-6">
              Información de Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">Campus Principal</p>
                  <p className="text-slate-600 text-sm">
                    Calle José Antonio Salcedo
                    <br />
                    San Fernando de Montecristi
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">Correo Institucional</p>
                  <a
                    href="mailto:contacto@shaddaischool.edu.do"
                    className="text-slate-600 hover:text-blue-700 transition-colors text-sm"
                  >
                    contacto@shaddaischool.edu.do
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-700 font-medium">Teléfono</p>
                  <a href="tel:+18091234567" className="text-slate-600 hover:text-blue-700 transition-colors text-sm">
                    (809) 123-4567
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Shaddai School. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <p className="text-sm text-slate-500">Institución Educativa Certificada</p>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <p className="text-sm text-slate-500">Estándares Internacionales</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
