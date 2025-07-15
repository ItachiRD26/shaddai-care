import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contáctanos",
  description: "Información de contacto, horarios de atención y formulario para comunicarte con Shaddai School",
}

export default function ContactanosPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfonos",
      details: [
        "Admisiones: +1 (555) 123-SCHOOL",
        "Dirección Académica: +1 (555) 124-SCHOOL",
        "Administración: +1 (555) 125-SCHOOL",
      ],
    },
    {
      icon: Mail,
      title: "Correos Electrónicos",
      details: ["admisiones@shaddaischool.edu", "direccion@shaddaischool.edu", "administracion@shaddaischool.edu"],
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["123 Education Avenue", "Academic District, Ciudad", "Código Postal: 12345"],
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: ["Lunes a Viernes: 7:00 AM - 4:00 PM", "Sábados: 8:00 AM - 12:00 PM", "Domingos: Cerrado"],
    },
  ]

  const departments = [
    {
      name: "Admisiones",
      contact: "Lic. María González",
      phone: "+1 (555) 123-SCHOOL",
      email: "admisiones@shaddaischool.edu",
      hours: "Lun-Vie: 8:00 AM - 3:00 PM",
      description: "Información sobre proceso de admisión, requisitos y fechas importantes.",
    },
    {
      name: "Dirección Académica",
      contact: "Dr. Carlos Rodríguez",
      phone: "+1 (555) 124-SCHOOL",
      email: "direccion@shaddaischool.edu",
      hours: "Lun-Vie: 7:30 AM - 4:00 PM",
      description: "Consultas sobre programas educativos, evaluaciones y desarrollo académico.",
    },
    {
      name: "Administración",
      contact: "Lic. Ana Martínez",
      phone: "+1 (555) 125-SCHOOL",
      email: "administracion@shaddaischool.edu",
      hours: "Lun-Vie: 8:00 AM - 4:00 PM",
      description: "Pagos, facturación, becas y asuntos administrativos generales.",
    },
    {
      name: "Psicología Educativa",
      contact: "Psic. Roberto Silva",
      phone: "+1 (555) 126-SCHOOL",
      email: "psicologia@shaddaischool.edu",
      hours: "Lun-Vie: 9:00 AM - 3:00 PM",
      description: "Apoyo psicopedagógico, orientación familiar y desarrollo socioemocional.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para resolver todas tus dudas y acompañarte en el proceso educativo de tu hijo. Múltiples
            canales de comunicación a tu disposición.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
            <p className="text-xl text-gray-600">Múltiples formas de comunicarte con nosotros</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envíanos un Mensaje</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Departamento</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Selecciona un departamento</option>
                        <option>Admisiones</option>
                        <option>Dirección Académica</option>
                        <option>Administración</option>
                        <option>Psicología Educativa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nivel de Interés</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Selecciona un nivel</option>
                        <option>Preescolar (3-5 años)</option>
                        <option>Primaria Baja (6-8 años)</option>
                        <option>Primaria Alta (9-12 años)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe tu consulta o solicitud..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input type="checkbox" id="privacy" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Acepto la política de privacidad y el tratamiento de mis datos personales
                    </label>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg text-lg">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestra Ubicación</h2>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                    <p className="text-gray-500 text-lg">Mapa Interactivo</p>
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-gray-900">Shaddai School</p>
                    <p className="text-gray-600">123 Education Avenue</p>
                    <p className="text-gray-600">Academic District, Ciudad 12345</p>
                    <div className="flex items-center space-x-2 text-blue-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Ver en Google Maps</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horarios Especiales</h3>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Visitas Guiadas</p>
                        <p className="text-sm text-gray-600">Sábados 9:00 AM - 11:00 AM (con cita previa)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Atención de Emergencias</p>
                        <p className="text-sm text-gray-600">24/7 para estudiantes activos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Departamentos</h2>
            <p className="text-xl text-gray-600">Contacta directamente al departamento que necesites</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{dept.contact}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{dept.hours}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
