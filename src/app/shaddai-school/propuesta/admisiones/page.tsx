import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Users, CreditCard, CheckCircle, Clock, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Admisiones",
  description: "Proceso de admisión, requisitos y fechas importantes para ingresar a Shaddai School",
}

export default function AdmisionesPage() {
  const admissionSteps = [
    {
      icon: FileText,
      title: "Solicitud de Admisión",
      description: "Completa el formulario de solicitud en línea con toda la información requerida.",
      duration: "15 minutos",
      status: "Disponible todo el año",
    },
    {
      icon: Calendar,
      title: "Evaluación Académica",
      description: "Examen de conocimientos y habilidades según el nivel educativo solicitado.",
      duration: "2 horas",
      status: "Por cita previa",
    },
    {
      icon: Users,
      title: "Entrevista Familiar",
      description: "Reunión con el equipo directivo para conocer las expectativas y valores familiares.",
      duration: "45 minutos",
      status: "Presencial",
    },
    {
      icon: CreditCard,
      title: "Inscripción y Pago",
      description: "Formalización de la inscripción y pago de cuotas correspondientes.",
      duration: "30 minutos",
      status: "Confirmación final",
    },
  ]

  const requirements = [
    "Acta de nacimiento del estudiante (original y 2 copias)",
    "CURP del estudiante y padres de familia",
    "Certificado médico actualizado (no mayor a 3 meses)",
    "Cartilla de vacunación completa y actualizada",
    "Boletas de calificaciones de los últimos 2 años",
    "Carta de buena conducta de la escuela anterior",
    "Constancia de no adeudo de la institución anterior",
    "Identificación oficial de ambos padres",
    "Comprobante de domicilio reciente",
    "6 fotografías tamaño infantil del estudiante",
    "Formato de datos médicos y de emergencia",
    "Carta de recomendación académica (opcional)",
  ]

  const tuitionFees = [
    {
      level: "Preescolar",
      ages: "3 - 5 años",
      inscription: "$8,500",
      monthly: "$6,800",
      annual: "$68,000",
      includes: ["Materiales didácticos", "Seguro escolar", "Actividades extracurriculares", "Almuerzo"],
    },
    {
      level: "Primaria Baja",
      ages: "6 - 8 años",
      inscription: "$9,500",
      monthly: "$7,500",
      annual: "$75,000",
      includes: ["Libros de texto", "Plataforma digital", "Laboratorios", "Deportes"],
    },
    {
      level: "Primaria Alta",
      ages: "9 - 12 años",
      inscription: "$10,500",
      monthly: "$8,200",
      annual: "$82,000",
      includes: ["Certificaciones Cambridge", "Proyectos STEAM", "Viajes educativos", "Tecnología"],
    },
  ]

  const importantDates = [
    { date: "15 de Enero", event: "Inicio de proceso de admisiones", status: "active" },
    { date: "28 de Febrero", event: "Fecha límite solicitudes", status: "upcoming" },
    { date: "1-15 de Marzo", event: "Evaluaciones académicas", status: "upcoming" },
    { date: "16-30 de Marzo", event: "Entrevistas familiares", status: "upcoming" },
    { date: "15 de Abril", event: "Publicación de resultados", status: "upcoming" },
    { date: "30 de Abril", event: "Fecha límite para inscripción", status: "upcoming" },
    { date: "15 de Agosto", event: "Inicio del ciclo escolar", status: "upcoming" },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Proceso de Admisiones</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Te acompañamos paso a paso en el proceso de admisión para que tu hijo forme parte de nuestra comunidad
            educativa de excelencia
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fechas Importantes 2024-2025</h2>
            <p className="text-lg text-gray-600">Calendario del proceso de admisiones</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  item.status === "active" ? "border-green-500" : "border-blue-500"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-900">{item.date}</span>
                  {item.status === "active" && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Activo
                    </span>
                  )}
                </div>
                <p className="text-gray-600 font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proceso de Admisión</h2>
            <p className="text-xl text-gray-600">Cuatro pasos sencillos para formar parte de Shaddai School</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="text-gray-500">{step.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Documentos Requeridos</h2>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-amber-500" />
                  <p className="text-amber-700 font-medium">Todos los documentos deben estar vigentes y en original</p>
                </div>

                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Inversión Educativa</h2>
              <div className="space-y-6">
                {tuitionFees.map((fee, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{fee.level}</h3>
                        <p className="text-blue-600 font-semibold">{fee.ages}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">{fee.monthly}</div>
                        <div className="text-sm text-gray-500">mensual</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-600">Inscripción:</span>
                        <span className="font-bold text-gray-900 ml-2">{fee.inscription}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Anual:</span>
                        <span className="font-bold text-gray-900 ml-2">{fee.annual}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {fee.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para Comenzar?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Inicia el proceso de admisión hoy mismo y asegura el futuro educativo de tu hijo en una institución de
            excelencia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg text-lg">
              Iniciar Solicitud de Admisión
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg bg-transparent"
            >
              Descargar Información Completa
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
