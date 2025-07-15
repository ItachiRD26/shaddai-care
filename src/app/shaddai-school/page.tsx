import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ArrowRight, MessageCircle, MapPin, Check, Mail } from "lucide-react"

const testimonials = [
  {
    name: "Familia García",
    avatar: "/images/prueba.jpg?height=40&width=40",
    text: "Ver cómo mi hija habla inglés con naturalidad y llega feliz todos los días es la mayor señal de que estamos en el lugar correcto.",
    rating: 5,
  },
  {
    name: "Familia Rodríguez",
    avatar: "/images/prueba.jpg?height=40&width=40",
    text: "El enfoque humano y cristiano de SHADDAI SCHOOL nos conquistó. Aquí los niños aprenden, se sienten amados y crecen con propósito.",
    rating: 5,
  },
]

export default function ShaddaiHomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative h-[95vh] md:h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/school.mp4"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/70 z-10"></div>
        <div className="relative z-20 p-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Bienvenidos a SHADDAI SCHOOL
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Una experiencia educativa premium: bilingüe, cristiana y centrada en el desarrollo integral del niño.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-6 rounded-lg"
          >
            <Link href="/propuesta">
              Descubra nuestra propuesta única <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold text-slate-100 mb-4">
              Inspiramos confianza, transformamos vidas
            </h2>
            <p className="text-lg text-slate-300 mb-4">
              SHADDAI SCHOOL nace como evolución natural de SHADDAI DAY-CARE, consolidando más de 3 años de excelencia
              en la primera infancia. Fusionamos lo mejor del currículo dominicano con estándares educativos
              internacionales (Head Start & Common Core), ofreciendo un programa inmersivo en inglés y español, adaptado
              a las necesidades del siglo XXI.
            </p>
            <div className="space-y-2 text-slate-400 mb-6">
              <p>
                <strong>Misión:</strong> Potenciar el desarrollo integral de cada niño, fomentando identidad, autonomía,
                valores cristianos y competencia bilingüe desde los primeros años.
              </p>
              <p>
                <strong>Visión:</strong> Ser el centro educativo preescolar de mayor prestigio en la región por su
                calidad pedagógica, su enfoque humanista-cristiano y su sólida formación bilingüe.
              </p>
              <p>
                <strong>Valores:</strong> Fe, Amor, Excelencia, Respeto, Gratitud, Creatividad, Alegría.
              </p>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6">
              <Link href="/nosotros">
                Conozca nuestra historia y equipo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="w-full h-auto">
            <Image
              src="/images/prueba.jpg?height=500&width=600"
              alt="Equipo de Shaddai School"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admisiones" className="py-20 lg:py-28 bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold leading-7 text-blue-400">Admisiones</p>
            <h2 className="mt-2 font-heading text-4xl font-bold text-white sm:text-5xl">
              Su hijo(a) merece comenzar bien. Aquí empieza todo.
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-300 max-w-3xl mx-auto">
              En SHADDAI SCHOOL, abrimos la puerta al aprendizaje significativo, el desarrollo bilingüe y una formación
              con valores. Nuestro proceso de admisión es cercano, claro y pensado para acompañarle desde el primer
              paso.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-slate-900 p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white font-heading">Inscríbase a la Lista de Espera</h3>
              <p className="mt-4 text-slate-400">
                ¿Desea que su hijo(a) sea parte de nuestra comunidad? Complete el formulario y nuestro equipo académico
                se comunicará con usted para agendar una visita, responder sus preguntas y guiarle en el proceso.
              </p>
              <ul className="mt-4 space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span>📌</span> Cupos limitados para el grado Kinder (4 años)
                </li>
                <li className="flex items-start gap-2">
                  <span>📌</span> Atención personalizada en cada etapa
                </li>
              </ul>
              <a
  href="https://schools.mybrightwheel.com/sign-in?redirect_path=/admissions/packet/cd4cdb16-524f-42c2-aeb7-965ae5cf7dd0/fill?school_id=0cd05168-303d-46bf-99de-92de34694cc0"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-6 w-full cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-700">
    🟢 Acceder al formulario de Lista de Espera
  </Button>
</a>

            </div>
            <div className="rounded-xl bg-slate-900 p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white font-heading">Descargue requisitos detallados</h3>
              <p className="mt-4 text-slate-400">
                Prepárese con anticipación y tenga a mano los documentos necesarios para asegurar su lugar.
              </p>
              <ul className="mt-4 space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <span>📄</span> Acta de nacimiento
                </li>
                <li className="flex items-start gap-2">
                  <span>📄</span> Tarjeta de vacunas actualizada
                </li>
                <li className="flex items-start gap-2">
                  <span>📄</span> Fotos 2x2 y Formulario de inscripción completo
                </li>
                <li className="flex items-start gap-2">
                  <span>📄</span> Edad: 4 años cumplidos al 30 de junio
                </li>
              </ul>
              <Button
                className="mt-6 w-full rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-600"
                variant="secondary"
              >
                📥 Descargar documento de requisitos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="programa" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">Educación del presente, visión del futuro</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-4 text-left mb-12">
            {[
              "Currículo dominicano integrado con estándares internacionales",
              "Enfoque pedagógico bilingüe: 50% español / 50% inglés",
              "Aprendizaje basado en proyectos, centros de interés y juego",
              "Desarrollo de habilidades tempranas: comunicación, liderazgo",
              "Formación en valores cristianos aplicados a la vida diaria",
              "Evaluación por portafolios, observación y progreso individual",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
            <Link href="/shaddai-school/mes-mes">Explore el plan curricular mes a mes</Link>
          </Button>
        </div>
      </section>

      {/* Our Space Section */}
      <section id="espacio" className="py-20 lg:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Diseñado para inspirar, seguro para explorar
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Instalaciones modernas, alegres y funcionales. Cada rincón está pensado para favorecer el aprendizaje
              activo, la interacción positiva y la estimulación sensorial.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { alt: "Aula moderna y luminosa", className: "col-span-2 row-span-2" },
              { alt: "Rincón de lectura acogedor", className: "" },
              { alt: "Área de arte colorida", className: "" },
              { alt: "Patio de juegos seguro", className: "" },
              { alt: "Comedor escolar limpio", className: "" },
            ].map((item, index) => (
              <div key={index} className={`${item.className} rounded-lg overflow-hidden group`}>
                <Image
                  src={`/images/prueba.jpg?height=600&width=600&query=${item.alt.replace(/\s/g, "+")}`}
                  alt={item.alt}
                  width={616}
                  height={616}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-500 text-slate-200 hover:bg-slate-700 hover:text-white bg-transparent rounded-lg"
            >
              <Link href="/galeria">
                Ver galería de fotos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">Lo que dicen las Familias</h2>
            <p className="text-lg text-slate-400">Testimonios reales, impacto profundo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-slate-800 shadow-lg rounded-xl border border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/images/prueba.jpg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="ml-4 font-semibold text-slate-100">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              <Link href="/testimonios">Leer más testimonios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">¡Estamos aquí para usted!</h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-8 text-lg">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Calle José Antonio Salcedo, Montecristi</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:contacto@shaddaischool.edu.do" className="hover:underline">
                contacto@shaddaischool.edu.do
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-blue-400" />
              <a href="https://wa.me/18090000000" target="_blank" rel="noopener noreferrer" className="hover:underline">
                (809) 000-0000
              </a>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild className="bg-blue-600 text-white hover:bg-blue-700 font-bold rounded-lg">
              <Link href="https://wa.me/18090000000" target="_blank">
                Envíenos un mensaje por WhatsApp
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-500 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent rounded-lg"
            >
              <Link
                href="https://maps.google.com/?q=Calle+José+Antonio+Salcedo,+San+Fernando+de+Montecristi"
                target="_blank"
              >
                Cómo llegar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
