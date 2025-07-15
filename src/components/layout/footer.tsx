import Link from "next/link"
import { Heart, MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <img src="/images/logotipo.png" alt="Shaddai Day-Care Logo" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">SHADDAI</span>
                  <div className="text-lg font-semibold text-green-400 -mt-1">DAY-CARE</div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Donde los pequeños corazones cultivan grandes sueños. Brindando cuidado infantil amoroso y profesional
                desde 2018, creando un futuro brillante para cada niño.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                >
                  <span className="text-white font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-300"
                >
                  <span className="text-white font-bold text-sm">ig</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
                >
                  <span className="text-white font-bold text-sm">yt</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {[
                  { name: "Quiénes Somos", href: "/nosotros" },
                  { name: "Programas", href: "/programas" },
                  { name: "Inscripción", href: "/inscripcion" },
                  { name: "Galería", href: "/galeria" },
                  { name: "Testimonios", href: "/testimonios" },
                  { name: "Preguntas Frecuentes", href: "/preguntas" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      Calle de los Niños 123
                      <br />
                      Valle Feliz, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">(555) 123-NIÑOS</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">info@shaddaidaycare.com</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-gray-300">
                    <div>Lun - Vie: 7:00 AM - 6:00 PM</div>
                    <div className="text-sm">Sáb: 8:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Shaddai Day-Care. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/politicas" className="text-gray-400 hover:text-white transition-colors duration-300">
                Política de Privacidad
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors duration-300">
                Términos de Uso
              </Link>
              <span className="text-gray-600">|</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Hecho con</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-gray-400">para familias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
