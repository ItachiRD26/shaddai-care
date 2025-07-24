import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Star,
  MessageCircle,
  MapPin,
  Check,
  Mail,
  Award,
  Download,
  Users,
  Calendar,
  Phone,
  Heart,
  Shield,
  Target,
  Eye,
  Lightbulb,
  Globe,
  Music,
  Palette,
  Microscope,
  Building,
  ArrowRight,
  Play,
  BookOpen,
  GraduationCap,
  ChevronRight,
  Clock,
} from "lucide-react"

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
  {
    name: "Familia Martínez",
    avatar: "/images/parent-3.jpg",
    text: "La preparación académica es excepcional. Mi hijo llegó al primer grado con ventajas notables en inglés y matemáticas.",
    rating: 5,
    role: "Padres de egresado",
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

const teamMembers = [
  {
    name: "Dra. María Elena Rodríguez",
    role: "Directora Académica",
    credentials: "Ed.D. en Educación Infantil",
    image: "/images/director-1.jpg",
    description: "15+ años de experiencia en educación preescolar bilingüe",
  },
  {
    name: "Prof. Ana Sofía Martínez",
    role: "Coordinadora Pedagógica",
    credentials: "M.A. en Currículo y Enseñanza",
    image: "/images/teacher-1.jpg",
    description: "Especialista en metodologías activas y evaluación",
  },
  {
    name: "Prof. Carmen Lucía Pérez",
    role: "Especialista en Inglés",
    credentials: "B.A. TESOL Certified",
    image: "/images/teacher-2.jpg",
    description: "Nativa bilingüe con certificación internacional",
  },
]

const facilities = [
  {
    name: "Aulas Modernas",
    description: "Espacios amplios, luminosos y equipados con tecnología educativa",
    image: "/images/classroom-modern.jpg",
    icon: Building,
  },
  {
    name: "Laboratorio de Ciencias",
    description: "Espacio para exploración científica adaptado para preescolar",
    image: "/images/science-lab.jpg",
    icon: Microscope,
  },
  {
    name: "Estudio de Arte",
    description: "Taller creativo para desarrollo artístico y expresión",
    image: "/images/art-studio.jpg",
    icon: Palette,
  },
  {
    name: "Sala de Música",
    description: "Espacio acústico para educación musical y expresión corporal",
    image: "/images/music-room.jpg",
    icon: Music,
  },
]

export default function ShaddaiSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-neutral-900">SHADDAI SCHOOL</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-neutral-600 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-neutral-600 hover:text-blue-600 transition-colors">
                Nosotros
              </Link>
              <Link href="#programa" className="text-neutral-600 hover:text-blue-600 transition-colors">
                Programa
              </Link>
              <Link href="#instalaciones" className="text-neutral-600 hover:text-blue-600 transition-colors">
                Instalaciones
              </Link>
              <Link href="#admisiones" className="text-neutral-600 hover:text-blue-600 transition-colors">
                Admisiones
              </Link>
              <Link href="#contacto" className="text-neutral-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </div>
            <Link href="#admisiones">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Aplicar Ahora</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Impactante y moderno */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/prueba.jpg" alt="Campus de Shaddai School" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Institución Educativa Certificada</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block">SHADDAI</span>
                  <span className="block text-blue-300">SCHOOL</span>
                </h1>

                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Donde cada niño descubre su potencial a través de una educación bilingüe, cristiana y de excelencia
                  académica.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#admisiones">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Proceso de Admisión 2025
                  </Button>
                </Link>
                <Link href="#programa">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg bg-transparent"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver Video del Campus
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4+</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wide">Años de Excelencia</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wide">Familias Satisfechas</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1:4</div>
                  <div className="text-sm text-blue-200 uppercase tracking-wide">Ratio Maestro</div>
                </div>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl mb-6">
                  <Image src="/images/prueba.jpg" alt="Estudiantes de Shaddai School" fill className="object-cover" />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-neutral-900">Educación que Transforma</h3>
                  <p className="text-neutral-600">
                    Formando líderes del mañana con valores sólidos y excelencia académica.
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-500">+50 familias nos eligen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* About Section - Con hero visual */}
      <section id="nosotros" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Nuestra Esencia
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Inspiramos confianza,
              <br />
              <span className="text-blue-600">transformamos vidas</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Más de 3 años de excelencia educativa respaldando el crecimiento integral de cada niño con amor,
              dedicación y propósito.
            </p>
          </div>

          {/* Mission, Vision, Values - Con imágenes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/images/prueba.jpg"
                  alt="Misión"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Misión</h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Potenciar el desarrollo integral de cada niño, fomentando identidad, autonomía, valores cristianos y
                competencia bilingüe desde los primeros años.
              </p>
            </div>

            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/images/prueba.jpg"
                  alt="Visión"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Visión</h3>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Ser el centro educativo preescolar de mayor prestigio en la región por su calidad pedagógica, su enfoque
                humanista-cristiano y su sólida formación bilingüe.
              </p>
            </div>

            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/images/prueba.jpg"
                  alt="Valores"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Valores</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {institutionalValues.map((value, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section - Más visual */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">Liderazgo Académico de Excelencia</h3>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Un equipo de educadores apasionados y altamente calificados comprometidos con el éxito de cada
                estudiante.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                    <Image
                      src="/images/prueba.jpg"
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-xl font-bold text-neutral-900">{member.name}</h4>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                    <p className="text-sm text-neutral-500">{member.credentials}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* History with Large Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl p-12 lg:p-16 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <BookOpen className="w-4 h-4" />
                      Nuestra Historia
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                      Una Trayectoria de <span className="text-blue-600">Excelencia Educativa</span>
                    </h3>
                  </div>

                  <div className="space-y-6 text-neutral-600 leading-relaxed">
                    <p className="text-lg">
                      <strong className="text-neutral-900">SHADDAI SCHOOL</strong> nace como evolución natural de
                      SHADDAI DAY-CARE, consolidando más de 3 años de excelencia en la primera infancia.
                    </p>
                    <p>
                      Fusionamos lo mejor del currículo dominicano con estándares educativos internacionales (Head Start
                      & Common Core), ofreciendo un programa inmersivo en inglés y español, adaptado a las necesidades
                      del siglo XXI.
                    </p>
                    <p>
                      Nuestro compromiso con la excelencia académica y la formación en valores cristianos nos ha
                      posicionado como una institución de referencia en la región, preparando a nuestros estudiantes
                      para un futuro exitoso y lleno de propósito.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">2020</div>
                      <div className="text-sm text-neutral-500">Fundación</div>
                    </div>
                    <div className="w-px h-8 bg-neutral-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-neutral-500">Graduados</div>
                    </div>
                    <div className="w-px h-8 bg-neutral-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-sm text-neutral-500">Satisfacción</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                    <Image src="/images/prueba.jpg" alt="Historia de Shaddai School" fill className="object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold">3+</div>
                      <div className="text-sm opacity-90">Años de Excelencia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Program Section - Hero visual mejorado */}
      <section id="programa" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Programa Académico
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Educación del presente,
              <br />
              <span className="text-blue-600">visión del futuro</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Un currículo con propósito: local en raíces, global en visión. Preparamos a nuestros estudiantes para un
              mundo sin fronteras.
            </p>
          </div>

          {/* Program Features - Visual mejorado */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {programFeatures.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-neutral-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 text-blue-600 group-hover:text-white" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Curriculum Highlight - Más visual */}
          <div className="relative mb-24">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl"></div>
            <div className="relative p-12 lg:p-16 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold mb-6">Plan Curricular Mensual</h3>
                    <p className="text-blue-100 text-xl leading-relaxed">
                      En SHADDAI SCHOOL, el aprendizaje no es improvisado: es planeado, estructurado y lleno de
                      intención. Nuestro programa mensual está diseñado para acompañar el desarrollo integral de su
                      hijo(a).
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "Currículo oficial dominicano para el Nivel Inicial",
                        "Estándares estadounidenses (Head Start, Common Core)",
                        "Enseñanza activa, lúdica y bilingüe",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-300 rounded-full" />
                          <span className="text-blue-100">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {["Áreas clave integradas", "Habilidades socioemocionales", "Enfoque temático mensual"].map(
                        (item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-300 rounded-full" />
                            <span className="text-blue-100">{item}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Plan Curricular
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <Image src="/images/prueba.jpg" alt="Planificación curricular" fill className="object-cover" />
                  </div>
                  <div className="absolute -top-6 -left-6 bg-white text-blue-600 p-4 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <BookOpen className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-semibold">
                        Currículo
                        <br />
                        Integrado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bilingual Approach - Más impactante */}
          <div className="bg-neutral-50 rounded-3xl p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <Image src="/images/prueba.jpg" alt="Aula bilingüe" fill className="object-cover" />
                </div>
                <div className="absolute top-6 right-6 bg-white px-6 py-3 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-neutral-900">50% EN / 50% ES</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-90">Inmersión</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                    Enfoque Bilingüe <span className="text-blue-600">Inmersivo</span>
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    Nuestro programa bilingüe no es solo enseñar inglés como materia, sino vivir el idioma como
                    herramienta de comunicación natural. Los niños desarrollan fluidez en ambos idiomas a través de
                    experiencias auténticas y significativas.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Lightbulb,
                      title: "Inmersión Natural",
                      desc: "Alternancia diaria entre español e inglés en todas las actividades",
                    },
                    {
                      icon: Users,
                      title: "Maestros Nativos",
                      desc: "Equipo bilingüe con certificaciones internacionales",
                    },
                    {
                      icon: Award,
                      title: "Preparación Certificada",
                      desc: "Base sólida para certificaciones internacionales futuras",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                        <p className="text-neutral-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section - Completamente rediseñado */}
      <section id="instalaciones" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              Nuestras Instalaciones
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Diseñado para inspirar,
              <br />
              <span className="text-blue-600">seguro para explorar</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Instalaciones modernas, alegres y funcionales. Cada rincón está pensado para favorecer el aprendizaje
              activo, la interacción positiva y la estimulación sensorial.
            </p>
          </div>

          {/* Main Facilities - Grid mejorado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <div key={index} className="group relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/prueba.jpg"
                      alt={facility.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">{facility.name}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Campus Gallery - Más organizado */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">Recorrido Virtual por nuestro Campus</h3>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Explore cada espacio diseñado especialmente para el aprendizaje y desarrollo de nuestros estudiantes.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: "/images/prueba.jpg", alt: "Área de juegos", category: "Recreación" },
                { src: "/images/prueba.jpg", alt: "Rincón de lectura", category: "Aprendizaje" },
                { src: "/images/prueba.jpg", alt: "Cafetería", category: "Alimentación" },
                { src: "/images/prueba.jpg", alt: "Jardín educativo", category: "Naturaleza" },
                { src: "/images/prueba.jpg", alt: "Capilla", category: "Espiritualidad" },
                { src: "/images/prueba.jpg", alt: "Laboratorio de computación", category: "Tecnología" },
                { src: "/images/prueba.jpg", alt: "Gimnasio", category: "Deportes" },
                { src: "/images/prueba.jpg", alt: "Entrada principal", category: "Acceso" },
              ].map((item, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/prueba.jpg"
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs bg-blue-600 px-2 py-1 rounded-full inline-block mb-2">{item.category}</div>
                    <p className="font-semibold text-sm">{item.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Features - Más impactante */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl p-12 lg:p-16 shadow-2xl">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Seguridad y Bienestar Integral</h3>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  La seguridad de nuestros estudiantes es nuestra prioridad absoluta. Contamos con protocolos estrictos,
                  tecnología avanzada y personal altamente capacitado.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Acceso Controlado",
                    desc: "Sistema de tarjetas, cámaras de seguridad 24/7 y control de visitantes",
                    features: ["Cámaras HD", "Control de acceso", "Monitoreo 24/7"],
                  },
                  {
                    icon: Users,
                    title: "Personal Certificado",
                    desc: "Equipo capacitado en primeros auxilios, emergencias y protocolos de seguridad",
                    features: ["Primeros auxilios", "Certificaciones", "Capacitación continua"],
                  },
                  {
                    icon: Heart,
                    title: "Protocolos Sanitarios",
                    desc: "Estándares de higiene y salud actualizados según normativas internacionales",
                    features: ["Higiene estricta", "Protocolos COVID", "Salud preventiva"],
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-6 p-6 bg-neutral-50 rounded-2xl">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <item.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h4>
                      <p className="text-neutral-600 mb-4">{item.desc}</p>
                      <div className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-neutral-600">{feature}</span>
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

      {/* Admissions Section - Más profesional */}
      <section id="admisiones" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Proceso de Admisión 2025
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Inicie el camino
              <br />
              <span className="text-blue-600">con nosotros</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Ya está disponible nuestra Lista de Espera para Kinder (4 años). Este proceso le permite manifestar su
              interés y recibir atención personalizada del equipo académico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Application Card - Más visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">Inscríbase a la Lista de Espera</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Complete el formulario y nuestro equipo académico se comunicará con usted para agendar una visita,
                    responder sus preguntas y guiarle en el proceso.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Users, text: "Cupos limitados para el grado Kinder (4 años)" },
                    { icon: Heart, text: "Atención personalizada en cada etapa" },
                    { icon: Shield, text: "Proceso de admisión transparente y profesional" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-neutral-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/cd4cdb16-524f-42c2-aeb7-965ae5cf7dd0/fill?school_id=0cd05168-303d-46bf-99de-92de34694cc0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-center rounded-full transition-colors shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Acceder al Formulario de Lista de Espera
                  </span>
                </a>
              </div>
            </div>

            {/* Requirements Card - Más organizado */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Requisitos de Admisión</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Prepárese con anticipación y tenga a mano los documentos necesarios para asegurar su lugar.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h4 className="font-bold text-neutral-900 mb-6 text-center">Documentos Requeridos:</h4>
                <div className="space-y-4">
                  {admissionRequirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-neutral-700 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg">
                <Download className="w-5 h-5 mr-2" />
                Descargar Lista Completa de Requisitos
              </Button>
            </div>
          </div>

          {/* Process Timeline - Más visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 to-blue-50 rounded-3xl"></div>
            <div className="relative p-12 lg:p-16">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Proceso de Admisión Paso a Paso</h3>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  Un proceso transparente y personalizado diseñado para conocer a su familia y asegurar la mejor
                  experiencia educativa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Aplicación en Línea",
                    desc: "Complete nuestro formulario digital con información básica de su hijo(a)",
                    icon: Calendar,
                    bgColor: "bg-blue-600",
                    textColor: "text-blue-800",
                    badgeBg: "bg-blue-100",
                  },
                  {
                    step: "2",
                    title: "Documentación",
                    desc: "Entregue los documentos requeridos y programe una visita al campus",
                    icon: Download,
                    bgColor: "bg-green-600",
                    textColor: "text-green-800",
                    badgeBg: "bg-green-100",
                  },
                  {
                    step: "3",
                    title: "Entrevista Familiar",
                    desc: "Reunión personalizada con nuestro equipo académico y directivo",
                    icon: Users,
                    bgColor: "bg-purple-600",
                    textColor: "text-purple-800",
                    badgeBg: "bg-purple-100",
                  },
                  {
                    step: "4",
                    title: "Confirmación",
                    desc: "Reciba la confirmación de admisión y complete el proceso de matrícula",
                    icon: Award,
                    bgColor: "bg-orange-600",
                    textColor: "text-orange-800",
                    badgeBg: "bg-orange-100",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-20 h-20 ${item.bgColor} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div
                      className={`inline-block px-3 py-1 ${item.badgeBg} ${item.textColor} rounded-full text-sm font-semibold mb-4`}
                    >
                      Paso {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Más impactante */}
      <section id="testimonios" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Testimonios
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Lo que dicen
              <br />
              <span className="text-blue-600">nuestras familias</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Testimonios reales de familias que han confiado en nosotros para la educación de sus hijos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-neutral-700 leading-relaxed mb-8 text-lg italic">
                  {testimonial.text}
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 border-2 border-blue-100">
                    <AvatarImage src="/images/prueba.jpg" alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-neutral-900 text-lg">{testimonial.name}</div>
                    <div className="text-neutral-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section - Más visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl"></div>
            <div className="relative p-12 lg:p-16 text-white text-center">
              <div className="mb-12">
                <h3 className="text-4xl font-bold mb-6">Resultados que Hablan por Sí Solos</h3>
                <p className="text-blue-100 text-xl max-w-2xl mx-auto">
                  Más de 3 años formando niños exitosos, familias satisfechas y construyendo el futuro de nuestra
                  comunidad.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "100%", label: "Familias Satisfechas", icon: Heart },
                  { number: "50+", label: "Estudiantes Graduados", icon: GraduationCap },
                  { number: "1:4", label: "Ratio Maestro-Estudiante", icon: Users },
                  { number: "4+", label: "Años de Excelencia", icon: Award },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-blue-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Más profesional */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Contáctanos
            </div>
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Estamos aquí
              <br />
              <span className="text-blue-600">para usted</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo está listo para responder todas sus preguntas y acompañarle en el proceso de admisión.
              Contáctenos para más información sobre nuestro programa educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Info - Más visual */}
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Nuestra Ubicación",
                  content: "Calle José Antonio Salcedo\nSan Fernando de Montecristi\nRepública Dominicana",
                  action: "Ver en Google Maps",
                  link: "https://maps.google.com/?q=Calle+José+Antonio+Salcedo,+San+Fernando+de+Montecristi",
                  bgColor: "bg-blue-100",
                  iconColor: "text-blue-600",
                  linkColor: "text-blue-600 hover:text-blue-700",
                },
                {
                  icon: Phone,
                  title: "Teléfono de Contacto",
                  content: "(809) 000-0000",
                  action: "Llamar Ahora",
                  link: "tel:+18090000000",
                  bgColor: "bg-green-100",
                  iconColor: "text-green-600",
                  linkColor: "text-green-600 hover:text-green-700",
                },
                {
                  icon: Mail,
                  title: "Correo Electrónico",
                  content: "admisiones@shaddaischool.edu.do",
                  action: "Enviar Email",
                  link: "mailto:admisiones@shaddaischool.edu.do",
                  bgColor: "bg-purple-100",
                  iconColor: "text-purple-600",
                  linkColor: "text-purple-600 hover:text-purple-700",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                      <p className="text-neutral-600 mb-4 whitespace-pre-line leading-relaxed">{item.content}</p>
                      <a
                        href={item.link}
                        className={`inline-flex items-center gap-2 ${item.linkColor} font-semibold transition-colors`}
                      >
                        {item.action}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Image - Más impactante */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/prueba.jpg"
                  alt="Vista aérea del campus de Shaddai School"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-neutral-900 mb-3">Nuestro Campus</h4>
                    <p className="text-neutral-600 mb-4">
                      Instalaciones modernas diseñadas específicamente para el aprendizaje y desarrollo de niños de 4
                      años.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-neutral-600">5,000 m²</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-neutral-600">Capacidad 20 estudiantes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Más prominentes */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Link href="https://wa.me/18090000000" target="_blank" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </Link>
              <Link
                href="https://maps.google.com/?q=Calle+José+Antonio+Salcedo,+San+Fernando+de+Montecristi"
                target="_blank"
                className="flex-1"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Cómo Llegar
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="text-neutral-500 mb-4">¿Prefiere una llamada? Estamos disponibles de lunes a viernes</p>
              <div className="inline-flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-neutral-600" />
                <span className="text-sm text-neutral-600 font-medium">8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SHADDAI SCHOOL</span>
              </div>
              <p className="text-neutral-400 leading-relaxed max-w-md">
                Educación bilingüe, cristiana y de excelencia. Formando líderes del mañana con valores sólidos y
                preparación académica integral.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-neutral-400">Institución Certificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-neutral-400">Campus Seguro</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
              <div className="space-y-3">
                {[
                  { name: "Inicio", href: "#inicio" },
                  { name: "Nosotros", href: "#nosotros" },
                  { name: "Programa", href: "#programa" },
                  { name: "Instalaciones", href: "#instalaciones" },
                  { name: "Admisiones", href: "#admisiones" },
                  { name: "Contacto", href: "#contacto" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block text-neutral-400 hover:text-white transition-colors"
                  >
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
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-neutral-400">
                    Calle José Antonio Salcedo
                    <br />
                    San Fernando de Montecristi
                    <br />
                    República Dominicana
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <a href="tel:+18090000000" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    (809) 000-0000
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <a
                    href="mailto:admisiones@shaddaischool.edu.do"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    admisiones@shaddaischool.edu.do
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-neutral-400">© 2024 Shaddai School. Todos los derechos reservados.</div>
              <div className="flex items-center gap-6">
                <Link href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  Términos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
