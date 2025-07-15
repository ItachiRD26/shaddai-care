import Link from "next/link"
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react"

export default function SchoolFooter() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white font-heading">SHADDAI SCHOOL</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              Formando líderes con excelencia académica, valores cristianos y educación bilingüe desde la primera
              infancia.
            </p>
            <div className="flex space-x-4">{/* Add social media icons here if available */}</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#nosotros" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#programa" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Programa
                </Link>
              </li>
              <li>
                <Link href="#admisiones" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Admisiones
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                <span>Calle José Antonio Salcedo, San Fernando de Montecristi</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                <a href="mailto:contacto@shaddaischool.edu.do" className="hover:text-blue-400">
                  contacto@shaddaischool.edu.do
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                <a href="tel:+18091234567" className="hover:text-blue-400">
                  (809) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Shaddai School. Todos los derechos reservados.
          </p>
          <p className="text-sm text-slate-500 mt-4 sm:mt-0">Diseño y Desarrollo con ❤️</p>
        </div>
      </div>
    </footer>
  )
}
