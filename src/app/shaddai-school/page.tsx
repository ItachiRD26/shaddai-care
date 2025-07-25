"use client"

import { generarRequisitosPdf } from "@/utils/generaterequisitospdf"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
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
  Lightbulb,
  Globe,
  Music,
  Palette,
  Microscope,
  Building,
  ArrowRight,
  GraduationCap,
  Clock,
} from "lucide-react"
import WaitlistModal from "@/components/waitlist-modal"

const testimonials = [
  {
    name: "Yeraldi",
    text: "Lo que más me gusta es el ambiente cálido y familiar que se siente desde el primer día. Se nota que el personal está comprometido con el bienestar y desarrollo de los niños, y me da mucha tranquilidad saber que mi hijo está en buenas manos. Además, valoro mucho las actividades lúdicas y educativas que fomentan su creatividad y aprendizaje.",
    rating: 5,
  },
  {
    name: "Gloribel rodriguez",
    text: "Lo que más amo es la constancia que Han mantenido a lo largo de estos años que tenemos con ustedes,, saber que hacer en cada etapa y motivarnos a nosotros como padres a vivirlas con emoción, agradecida eternamente.",
    rating: 5,
  },
  {
    name: "Adelma Luna",
    text: "Todo en general desde la entrada hasta la salida, todo el personal muy atentos envueltos en cada niñ@, amabilidad, comprensión, los cuidados y el trato que recibió mi hijo en el poco tiempo que estuvo fue mucho. Dios bendiga ese trabajo tan lindo que ustedes hacen.",
    rating: 5,
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

const admissionRequirements = [
  "Edad: 4 años cumplidos antes del 30 de junio del ciclo escolar",
  "Acta de nacimiento",
  "Tarjeta de vacunas al día",
  "Dos (2) fotos 2x2",
  "Formulario de inscripción completo",
]

const facilities = [
  {
    name: "Aulas Modernas",
    description: "Espacios amplios, luminosos, ambientados y equipados con tecnología educativa",
    image: "/images/aula-3.webp",
    icon: Building,
  },
  {
    name: "Aula explorativa",
    description: "Espacio para exploración adaptado para preescolar",
    image: "/images/aula-2.webp",
    icon: Microscope,
  },
  {
    name: "Estudio de Arte",
    description: "Taller creativo para desarrollo artístico y expresión",
    image: "/images/aula-5.webp",
    icon: Palette,
  },
  {
    name: "Aulas Limpias",
    description: "Espacio limpio y ordenado para el aprendizaje",
    image: "/images/aula-limpia.webp",
    icon: Music,
  },
]

// Hook para animaciones de scroll
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export default function ShaddaiSchoolPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const admissionsRef = useScrollAnimation()
  const programRef = useScrollAnimation()
  const facilitiesRef = useScrollAnimation()
  const testimonialsRef = useScrollAnimation()
  const contactRef = useScrollAnimation()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .hero-content {
          animation: slideInLeft 1s ease-out;
        }

        .hero-stats {
          animation: fadeInUp 1.2s ease-out 0.5s both;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
      `}</style>

      {/* Modal de Lista de Espera */}
      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section - Optimizado pero sin contenido extra */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
  className="absolute inset-0 w-full h-full object-cover object-top"
  style={{ transform: "translateY(-10%)" }}
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/videos/hero-school.webm" type="video/mp4" />
  Tu navegador no soporta videos.
</video>


          <div className="absolute inset-0 bg-gradient-to-r from-orange-800/40 via-orange-700/35 to-orange-600/25"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="hero-content space-y-8 lg:space-y-12 py-20 lg:py-32">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">Bienvenido a</h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-orange-200">
                SHADDAI SCHOOL
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-orange-100 leading-relaxed max-w-3xl mx-auto font-light">
              Educación bilingüe, cristiana y de excelencia académica para el futuro de tu hijo
            </p>

            {/* CTA Button */}
            <div className="pt-12">
              <Button
                size="lg"
                onClick={openModal}
                className="cursor-pointer bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-12 sm:px-16 py-6 sm:py-7 rounded-2xl font-bold text-xl sm:text-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-float border-3 border-white/30 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Users className="w-7 h-7 sm:w-8 sm:h-8 mr-4 relative z-10" />
                <span className="relative z-10">Únete a la Lista de Espera</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section - Con animaciones */}
      <section id="admisiones" className="py-16 lg:py-24 bg-orange-50" ref={admissionsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero */}
          <div className="text-center mb-12 lg:mb-20 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Proceso de Admisión 2025
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 mb-4 sm:mb-6">
              Inicie el camino
              <br />
              <span className="text-orange-600">con nosotros</span>
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Ya está disponible nuestra Lista de Espera. Este proceso le permite manifestar su
              interés y recibir atención personalizada del equipo académico.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
            {/* Application Card */}
            <div className="opacity-0 animate-slide-in-left">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 lg:p-12 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Inscríbase a la Lista de Espera</h3>
                  <p className="text-orange-100 leading-relaxed">
                    Complete el formulario y nuestro equipo académico se comunicará con usted para agendar una visita,
                    responder sus preguntas y guiarle en el proceso.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Users, text: "Cupos limitados" },
                    { icon: Heart, text: "Atención personalizada en cada etapa" },
                    { icon: Shield, text: "Proceso de admisión transparente y profesional" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm opacity-0 animate-fade-in-up stagger-${index + 1}`}
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-orange-100">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={openModal}
                  className="w-full bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 text-center rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Acceder al Formulario de Lista de Espera
                  </span>
                </Button>
              </div>
            </div>

            {/* Requirements Card */}
            <div className="space-y-8 opacity-0 animate-slide-in-right">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <Download className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Requisitos de Admisión</h3>
                <p className="text-orange-700 leading-relaxed">
                  Prepárese con anticipación y tenga a mano los documentos necesarios para asegurar su lugar.
                </p>
              </div>

              <div className="bg-orange-100 rounded-2xl p-6 lg:p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="font-bold text-orange-800 mb-6 text-center">Documentos Requeridos:</h4>
                <div className="space-y-4">
                  {admissionRequirements.map((req, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 bg-orange-200 rounded-xl opacity-0 animate-fade-in-up stagger-${index + 1}`}
                    >
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-orange-800 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
  onClick={generarRequisitosPdf}
  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
>
  <Download className="w-5 h-5 mr-2" />
  Descargar Lista Completa de Requisitos
</Button>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-orange-100 rounded-3xl p-8 lg:p-16 opacity-0 animate-fade-in-up">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-orange-800 mb-4">Proceso de Admisión Paso a Paso</h3>
              <p className="text-xl text-orange-700 max-w-2xl mx-auto">
                Un proceso transparente y personalizado diseñado para conocer a su familia y asegurar la mejor
                experiencia educativa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "1",
                  title: "Unirse a la Lista de Espera",
                  desc: "Complete nuestro formulario digital con información básica de su hijo(a)",
                  icon: Users,
                },
                {
                  step: "2",
                  title: "Documentación",
                  desc: "Entregue los documentos requeridos y programe una visita al campus",
                  icon: Download,
                },
                {
                  step: "3",
                  title: "Prueba de Admisión",
                  desc: "Evaluación académica personalizada para conocer las habilidades del niño(a)",
                  icon: GraduationCap,
                },
                {
                  step: "4",
                  title: "Shaddai Meet and Greet",
                  desc: "Conozca a nuestro equipo docente y directivo en un ambiente relajado",
                  icon: Heart,
                },
                {
                  step: "5",
                  title: "Meet & Play at Shaddai",
                  desc: "Sesión de juego y familiarización para que su hijo(a) se sienta cómodo",
                  icon: Calendar,
                },
              ].map((item, index) => (
                <div key={index} className={`text-center group opacity-0 animate-scale-in stagger-${index + 1}`}>
                  <div className="w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold mb-4">
                    Paso {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-orange-800 mb-3">{item.title}</h4>
                  <p className="text-orange-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programa" className="py-20 lg:py-28 bg-orange-50" ref={programRef}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Encabezado */}
    <div className="text-center mb-16 lg:mb-24 opacity-0 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
        <GraduationCap className="w-5 h-5" />
        Programa Académico
      </div>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-orange-800 mb-4">
        Educación del presente, <br />
        <span className="text-orange-600">visión del futuro</span>
      </h2>
      <p className="text-lg lg:text-xl text-orange-700 max-w-2xl mx-auto leading-relaxed">
        Un currículo con propósito: local en raíces, global en visión. Preparamos a nuestros estudiantes para un
        mundo sin fronteras.
      </p>
    </div>

    {/* Video institucional */}
    <div className="relative aspect-video rounded-3xl overflow-hidden mb-20 shadow-xl opacity-0 animate-fade-in-up">
      <video
        className="w-full h-full object-cover"
        poster="/images/poster-video.webp"
        controls
      >
        <source src="/videos/video-class-1.webm" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    </div>

    {/* Features visuales */}
    <div className="grid lg:grid-cols-3 gap-8 mb-24">
      {programFeatures.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-orange-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up"
        >
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center mb-4 animate-float">
            <Check className="w-5 h-5 text-white" />
          </div>
          <p className="text-orange-800 font-medium leading-relaxed">{item}</p>
        </div>
      ))}
    </div>

    {/* Enfoque Bilingüe */}
    <div className="grid lg:grid-cols-2 gap-12 items-center bg-orange-100 p-10 lg:p-16 rounded-3xl opacity-0 animate-fade-in-up">
      <div className="relative">
        <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
          <Image src="/images/aula-3.webp" alt="Aula bilingüe" fill className="object-cover" />
        </div>
        <div className="absolute top-6 right-6 bg-white px-6 py-3 rounded-full shadow-lg animate-float">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-orange-600" />
            <span className="font-bold text-orange-800">50% EN / 50% ES</span>
          </div>
        </div>
        <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-2xl shadow-xl animate-float">
          <div className="text-center">
            <div className="text-2xl font-bold">50%</div>
            <div className="text-sm opacity-90">Inmersión</div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-orange-800">Enfoque Bilingüe</h3>
        <p className="text-orange-700 text-lg leading-relaxed">
          Nuestro programa bilingüe no es solo enseñar inglés como materia, sino vivir el idioma como herramienta de
          comunicación natural. Los niños desarrollan fluidez en ambos idiomas a través de experiencias auténticas y
          significativas.
        </p>

        <div className="space-y-6">
          {[
            {
              icon: Lightbulb,
              title: "Inmersión Natural",
              desc: "Alternancia diaria entre español e inglés en todas las actividades",
            },
            {
              icon: Users,
              title: "Maestros Capacitados",
              desc: "Equipo bien preparado en pedagogía bilingüe y cultural",
            },
            {
              icon: Award,
              title: "Preparación Certificada",
              desc: "Nuestros profesores están certificados en enseñanza bilingüe y metodologías activas",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 animate-fade-in-up"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center animate-float">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-1">{item.title}</h4>
                <p className="text-orange-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Facilities Section - Con animaciones */}
      <section
        id="instalaciones"
        className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
        ref={facilitiesRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero */}
          <div className="text-center mb-12 lg:mb-20 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building className="w-4 h-4" />
              Nuestras Instalaciones
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Diseñado para inspirar,
              <br />
              <span className="text-orange-200">seguro para explorar</span>
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Instalaciones modernas, alegres y funcionales. Cada rincón está pensado para favorecer el aprendizaje
              activo, la interacción positiva y la estimulación sensorial.
            </p>
          </div>

          {/* Main Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
  {facilities.map((facility, index) => {
    const IconComponent = facility.icon
    return (
      <div key={index} className={`group opacity-0 animate-scale-in stagger-${index + 1}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl transform hover:scale-105 transition-transform duration-700">
          <Image
            src={facility.image}
            alt={facility.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-800/90 via-transparent to-transparent"></div>

          {/* Icon */}
          <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
            <IconComponent className="w-7 h-7 text-orange-600" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{facility.name}</h3>
            <p className="text-white/90 leading-relaxed">{facility.description}</p>
          </div>
        </div>
      </div>
    )
  })}
</div>


          {/* Campus Gallery */}
<div className="mb-16 lg:mb-24 opacity-0 animate-fade-in-up">
  <div className="text-center mb-16">
    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Recorrido Virtual por nuestro Campus</h3>
    <p className="text-lg lg:text-xl text-orange-100 max-w-2xl mx-auto">
      Explore cada espacio diseñado especialmente para el aprendizaje y desarrollo de nuestros estudiantes.
    </p>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.from({ length: 8 }).map((_, index) => (
      <div
        key={index}
        className={`group relative aspect-square overflow-hidden rounded-xl opacity-0 animate-scale-in stagger-${index + 1} transform hover:scale-105 transition-transform duration-500`}
      >
        <Image
          src={`/images/aula-${index + 1}.webp`}
          alt={`Instalación ${index + 1}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
          <p className="text-white font-medium p-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Espacio {index + 1}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* Safety Features */}
<div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-16 opacity-0 animate-fade-in-up">
  <div className="text-center mb-16">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
      <Shield className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-3xl font-bold text-white mb-4">Seguridad y Bienestar Integral</h3>
    <p className="text-lg lg:text-xl text-orange-100 max-w-2xl mx-auto">
      La seguridad de nuestros estudiantes es nuestra prioridad absoluta. Contamos con protocolos estrictos,
      tecnología avanzada y personal altamente capacitado.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-10">
    {[
      {
        icon: Shield,
        title: "Acceso Controlado",
        desc: "Sistema de tarjetas, cámaras de seguridad 24/7 y control de visitantes.",
        features: ["Cámaras HD", "Control de acceso", "Monitoreo 24/7"],
        image: "/images/hero-school-2.webp",
      },
      {
        icon: Users,
        title: "Personal Certificado",
        desc: "Equipo capacitado en primeros auxilios, emergencias y protocolos de seguridad.",
        features: ["Primeros auxilios", "Certificaciones", "Capacitación continua"],
        image: "/images/aula-6.webp",
      },
      {
        icon: Heart,
        title: "Protocolos Sanitarios",
        desc: "Estándares de higiene y salud actualizados según normativas internacionales.",
        features: ["Higiene estricta", "Protocolos Generales", "Salud preventiva"],
        image: "/images/aula-5.webp",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.03] opacity-0 animate-fade-in-up"
      >
        {/* Imagen superior */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Contenido */}
        <div className="p-6 text-center space-y-5">
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto animate-float">
            <item.icon className="w-7 h-7 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">{item.title}</h4>
          <p className="text-orange-100 text-sm">{item.desc}</p>
          <div className="space-y-2">
            {item.features.map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-orange-200" />
                <span className="text-sm text-orange-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Testimonials Section - Con animaciones */}
      <section
        id="testimonios"
        className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
        ref={testimonialsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero */}
          <div className="text-center mb-12 lg:mb-20 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Testimonios
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Lo que dicen
              <br />
              <span className="text-orange-200">nuestras familias</span>
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto">
              Testimonios reales de familias que han confiado en nosotros para la educación de sus hijos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 opacity-0 animate-scale-in stagger-${index + 1} transform hover:scale-105`}
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-orange-100 leading-relaxed mb-8 text-lg italic">
                  {testimonial.text}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-16 text-white text-center opacity-0 animate-fade-in-up">
            <div className="mb-12">
              <h3 className="text-2xl lg:text-4xl font-bold mb-6">Resultados que Hablan por Sí Solos</h3>
              <p className="text-orange-100 text-lg lg:text-xl max-w-2xl mx-auto">
                Más de 3 años formando niños exitosos, familias satisfechas y construyendo el futuro de nuestra
                comunidad.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "100%", label: "Familias Satisfechas", icon: Heart },
                { number: "50+", label: "Estudiantes Graduados", icon: GraduationCap },
                { number: "2:15", label: "Ratio Maestro-Estudiante", icon: Users },
                { number: "4+", label: "Años de Excelencia", icon: Award },
              ].map((stat, index) => (
                <div key={index} className={`group opacity-0 animate-scale-in stagger-${index + 1}`}>
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors animate-float">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-orange-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Con animaciones */}
      <section id="contacto" className="py-16 lg:py-24 bg-orange-50" ref={contactRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Hero */}
          <div className="text-center mb-12 lg:mb-20 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Contáctanos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-800 mb-4 sm:mb-6">
              Estamos aquí
              <br />
              <span className="text-orange-600">para usted</span>
            </h2>
            <p className="text-lg sm:text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo está listo para responder todas sus preguntas y acompañarle en el proceso de admisión.
              Contáctenos para más información sobre nuestro programa educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Contact Info */}
            <div className="space-y-8 opacity-0 animate-slide-in-left">
              {[
                {
                  icon: MapPin,
                  title: "Nuestra Ubicación",
                  content: "Calle José Antonio Salcedo\nSan Fernando de Montecristi\nRepública Dominicana",
                  action: "Ver en Google Maps",
                  link: "https://maps.app.goo.gl/S4HM9tFNqPAWjFVv6",
                },
                {
                  icon: Phone,
                  title: "Teléfono de Contacto",
                  content: "+1 (829) 552-5935",
                  action: "Llamar Ahora",
                  link: "https://api.whatsapp.com/send/?phone=18295525935&text&type=phone_number&app_absent=0",
                },
                {
                  icon: Mail,
                  title: "Correo Electrónico",
                  content: "Shaddaidaycare@gmail.com",
                  action: "Enviar Email",
                  link: "mailto:shaddaidaycare@gmail.com",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-orange-100 rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up stagger-${index + 1} transform hover:scale-105`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0 animate-float">
                      <item.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">{item.title}</h3>
                      <p className="text-orange-700 mb-4 whitespace-pre-line leading-relaxed">{item.content}</p>
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer"
                      >
                        {item.action}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Image */}
            <div className="relative opacity-0 animate-slide-in-right">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/aula-3.webp"
                  alt="Vista aérea del campus de Shaddai School"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-800/60 via-transparent to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 animate-float">
                    <h4 className="text-xl font-bold text-orange-800 mb-3">Nuestro Campus</h4>
                    <p className="text-orange-700 mb-4">
                      Instalaciones modernas diseñadas específicamente para el aprendizaje y desarrollo de niños pequeños.
                    </p>
                    <div className="flex items-center gap-4">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center opacity-0 animate-fade-in-up">
            <div className="inline-flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Link href="https://wa.me/18295525935" target="_blank" className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </Link>
              <Link
                href="https://maps.app.goo.gl/S4HM9tFNqPAWjFVv6"
                target="_blank"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Cómo Llegar
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="text-orange-600 mb-4">¿Prefiere una llamada? Estamos disponibles de lunes a viernes</p>
              <div className="inline-flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full animate-float">
                <Clock className="w-4 h-4 text-orange-600" />
                <span className="text-sm text-orange-700 font-medium">8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
