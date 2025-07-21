import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ArrowRight, MessageCircle, MapPin, Check, Mail, Award, Download } from "lucide-react"

const testimonials = [
  {
    name: "Familia García",
    avatar: "/images/parent-1.jpg",
    text: "Ver cómo mi hija habla inglés con naturalidad y llega feliz todos los días es la mayor señal de que estamos en el lugar correcto.",
    rating: 5,
    role: "Padres de estudiante de Kinder",
  },
  {
    name: "Familia Rodríguez",
    avatar: "/images/parent-2.jpg",
    text: "El enfoque humano y cristiano de SHADDAI SCHOOL nos conquistó. Aquí los niños aprenden, se sienten amados y crecen con propósito.",
    rating: 5,
    role: "Padres de estudiante de Pre-K",
  },
]

const programFeatures = [
  "Currículo dominicano integrado con estándares internacionales",
  "Enfoque pedagógico bilingüe: 50% español / 50% inglés",
  "Aprendizaje basado en proyectos, centros de interés y juego",
  "Desarrollo de habilidades tempranas: comunicación, pensamiento lógico, creatividad, liderazgo",
  "Formación en valores cristianos aplicados a la vida diaria",
  "Evaluación por portafolios, observación y progreso individual",
]

const institutionalValues = ["Fe", "Amor", "Excelencia", "Respeto", "Gratitud", "Creatividad", "Alegría"]

const admissionRequirements = [
  "Edad: 4 años cumplidos antes del 30 de junio del ciclo escolar",
  "Acta de nacimiento",
  "Tarjeta de vacunas al día",
  "Dos (2) fotos 2x2",
  "Formulario de inscripción completo",
]

export default function ShaddaiHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="inicio" className="hero-professional relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/school-campus-hero.jpg"
            alt="Campus de Shaddai School"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        <div className="hero-content relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-blue-200">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              Pre-School
            </div>

            <h1 className="text-center">
              <span className="block text-slate-600 font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
                Bienvenidos a
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent leading-tight">
                SHADDAI SCHOOL
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-center leading-relaxed px-4">
              Una experiencia educativa <strong>premium</strong>: bilingüe, cristiana y centrada en el{" "}
              <strong>desarrollo integral del niño</strong>.
            </p>

            <div className="max-w-4xl mx-auto text-sm sm:text-base leading-relaxed text-center px-4">
              <p>
                En SHADDAI SCHOOL, formamos líderes del mañana desde la infancia. Nuestro programa preescolar, diseñado
                para niños de 4 años, ofrece un entorno enriquecedor donde el idioma inglés se vive a diario, los
                valores cristianos se practican con amor y el aprendizaje se disfruta a través del juego, la exploración
                y metodologías activas.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="#propuesta" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                Descubra nuestra propuesta única
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                Inspiramos confianza, transformamos vidas
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-600">
                <p>
                  <strong>SHADDAI SCHOOL</strong> nace como evolución natural de SHADDAI DAY-CARE, consolidando más de 3
                  años de excelencia en la primera infancia. Fusionamos lo mejor del currículo dominicano con estándares
                  educativos internacionales (Head Start & Common Core), ofreciendo un programa inmersivo en inglés y
                  español, adaptado a las necesidades del siglo XXI.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Misión</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Potenciar el desarrollo integral de cada niño, fomentando identidad, autonomía, valores cristianos y
                    competencia bilingüe desde los primeros años.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Visión</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Ser el centro educativo preescolar de mayor prestigio en la región por su calidad pedagógica, su
                    enfoque humanista-cristiano y su sólida formación bilingüe.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Valores institucionales</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {institutionalValues.map((value, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/historia-equipo" className="inline-block">
                <button className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Conozca nuestra historia y equipo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="relative order-1 lg:order-2">
              <Image
                src="/images/school-team.jpg"
                alt="Equipo educativo de Shaddai School"
                width={600}
                height={500}
                className="w-full rounded-xl shadow-lg object-cover h-64 sm:h-80 lg:h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admisiones" className="py-8 sm:py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
              Inicie el camino con nosotros
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Ya está disponible nuestra Lista de Espera para Kinder (4 años). Este proceso le permite manifestar su
              interés y recibir atención personalizada del equipo académico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                Inscríbase a la Lista de Espera
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                ¿Desea que su hijo(a) sea parte de nuestra comunidad? Complete el formulario y nuestro equipo académico
                se comunicará con usted para agendar una visita, responder sus preguntas y guiarle en el proceso.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  Cupos limitados para el grado Kinder (4 años)
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  Atención personalizada en cada etapa
                </div>
              </div>

              <a
                href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/cd4cdb16-524f-42c2-aeb7-965ae5cf7dd0/fill?school_id=0cd05168-303d-46bf-99de-92de34694cc0"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-3 text-sm sm:text-base rounded-lg text-center transition-all duration-300"
              >
                🟢 Acceder al formulario de Lista de Espera
              </a>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm border border-gray-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
                Descargue requisitos detallados
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                Prepárese con anticipación y tenga a mano los documentos necesarios para asegurar su lugar.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Requisitos esenciales:</h4>
                {admissionRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-600" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>

              <button className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-medium px-4 py-3 text-sm sm:text-base rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />📥 Descargar documento de requisitos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Program Section */}
      <section id="programa" className="section-professional">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Educación del presente, visión del futuro</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Un currículo con propósito: local en raíces, global en visión.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {programFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-body">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="heading-tertiary mb-4 text-center">Plan Curricular Mensual</h3>
            <p className="text-body text-center mb-6">
              En SHADDAI SCHOOL, el aprendizaje no es improvisado: es planeado, estructurado y lleno de intención.
              Nuestro programa mensual está diseñado para acompañar el desarrollo integral de su hijo(a) desde lo
              cognitivo hasta lo emocional.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Currículo oficial dominicano para el Nivel Inicial (Kinder)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Estándares estadounidenses (Head Start, Common Core Pre-K)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Enseñanza activa, lúdica y bilingüe (español/inglés)</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">
                    Áreas clave: lenguaje, matemáticas, exploración, arte, motricidad, vida cristiana
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Habilidades socioemocionales integradas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Enfoque temático mensual con metas claras</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/plan-curricular" className="btn-professional-primary">
              🟢 Ver planificación curricular mensual
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Space Section */}
      <section id="espacio" className="py-8 sm:py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
              Diseñado para inspirar, seguro para explorar
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Instalaciones modernas, alegres y funcionales. Cada rincón está pensado para favorecer el aprendizaje
              activo, la interacción positiva y la estimulación sensorial. Contamos con espacios para arte, ciencia,
              lectura, dramatización, música, juegos al aire libre y momentos de oración.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
            {[
              { src: "/images/classroom-modern.jpg", alt: "Aula moderna", span: "col-span-2 row-span-2" },
              { src: "/images/art-space.jpg", alt: "Espacio de arte", span: "" },
              { src: "/images/reading-corner.jpg", alt: "Rincón de lectura", span: "" },
              { src: "/images/science-area.jpg", alt: "Área de ciencia", span: "" },
              { src: "/images/music-room.jpg", alt: "Sala de música", span: "" },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.span} group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative`}
              >
                <Image
                  src={item.src || `/placeholder.svg?height=300&width=400&text=${item.alt}`}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-2 sm:p-4 text-xs sm:text-sm">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/galeria" className="inline-block">
              <button className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                Ver galería de fotos
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="section-professional">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Lo que dicen las familias</h2>
            <p className="text-lead max-w-3xl mx-auto">Testimonios reales, impacto profundo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-professional">
                <div className="testimonial-rating-professional mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current inline" />
                  ))}
                </div>

                <blockquote className="testimonial-quote-professional">{testimonial.text}</blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="testimonial-author-professional">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonios" className="btn-professional-secondary">
              Leer más testimonios
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-8 sm:py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
              ¡Estamos aquí para usted!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Contáctenos para más información sobre nuestro programa educativo y proceso de admisión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Dirección</h3>
              <p className="text-sm sm:text-base text-slate-600">
                Calle José Antonio Salcedo
                <br />
                San Fernando de Montecristi
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">Correo</h3>
              <a
                href="mailto:contacto@shaddaischool.edu.do"
                className="text-sm sm:text-base text-slate-600 hover:text-blue-600 transition-colors break-all"
              >
                contacto@shaddaischool.edu.do
              </a>
            </div>

            <div className="text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">WhatsApp</h3>
              <a
                href="tel:+18090000000"
                className="text-sm sm:text-base text-slate-600 hover:text-blue-600 transition-colors"
              >
                (809) 000-0000
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="https://wa.me/18090000000" target="_blank" className="w-full sm:w-auto">
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 sm:px-6 py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  Envíenos un mensaje por WhatsApp
                </button>
              </Link>
              <Link
                href="https://maps.google.com/?q=Calle+José+Antonio+Salcedo,+San+Fernando+de+Montecristi"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <button className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-medium px-4 sm:px-6 py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  Cómo llegar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
