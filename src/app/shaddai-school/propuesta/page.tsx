import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Globe, Heart, Users, Star, ArrowRight, FileText, MessageCircle, MapPin } from "lucide-react"

const values = [
  {
    icon: <Globe className="w-8 h-8 text-sky-400" />,
    title: "Educación Bilingüe",
    description: "Inmersión 50/50 en inglés y español para una fluidez natural.",
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-400" />,
    title: "Valores Cristianos",
    description: "Formamos con amor, fe y respeto en un ambiente de alegría.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-violet-400" />,
    title: "Excelencia Académica",
    description: "Currículo internacional para potenciar el desarrollo integral.",
  },
]

const testimonials = [
  {
    name: "Familia García",
    avatar: "/images/avatar-1.png",
    text: "Ver cómo mi hija habla inglés con naturalidad y llega feliz todos los días es la mayor señal de que estamos en el lugar correcto. La calidad humana es insuperable.",
    rating: 5,
  },
  {
    name: "Familia Rodríguez",
    avatar: "/images/avatar-2.png",
    text: "El enfoque humano y cristiano de SHADDAI SCHOOL nos conquistó. Aquí los niños aprenden, se sienten amados y crecen con propósito. ¡Totalmente recomendados!",
    rating: 5,
  },
]

export default function ShaddaiHomePage() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] pt-20 flex items-center justify-center text-center overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="/videos/school.mp4"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-blue-950/70 z-10"></div>
  <div className="relative z-20 p-4 max-w-4xl mx-auto">
    <h1
      className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-4"
      style={{ fontFamily: "serif" }}
    >
      SHADDAI SCHOOL
    </h1>
    <p className="text-lg md:text-xl text-slate-200 mb-6">
      Una experiencia educativa premium: bilingüe, cristiana y centrada en el desarrollo integral del niño.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        asChild
        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg px-8 py-6"
      >
        <Link href="#programa">
          Nuestro Programa <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-6"
      >
        <Link href="#contacto">Contáctanos</Link>
      </Button>
    </div>
  </div>
</section>


      {/* Values Section */}
      <section id="valores" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-slate-800/50 rounded-xl shadow-lg border border-slate-700 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-slate-700">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 lg:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400 mb-4">
              Inspiramos confianza, transformamos vidas
            </h2>
            <p className="text-lg text-slate-300 mb-4">
              SHADDAI SCHOOL nace como evolución de SHADDAI DAY-CARE, consolidando más de 3 años de excelencia.
              Fusionamos el currículo dominicano con estándares internacionales para ofrecer un programa inmersivo.
            </p>
            <p className="text-slate-400 mb-6">
              <strong>Misión:</strong> Potenciar el desarrollo integral de cada niño, fomentando identidad, autonomía,
              valores cristianos y competencia bilingüe.
            </p>
            <Button asChild className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/nosotros">
                Conoce nuestra historia <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="w-full h-auto">
            <Image
              src="/images/happy-kids.png"
              alt="Niños felices en Shaddai School"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admisiones" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Proceso de Admisiones</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
            Inicie el camino hacia una educación transformadora. Nuestro proceso de admisión está abierto para Kinder (4
            años).
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="shadow-lg bg-slate-800 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-sky-400">
                  <Users className="w-7 h-7" />
                  <span>Lista de Espera</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Nuestra Lista de Espera ya está disponible. Manifieste su interés y reciba atención personalizada.
                </p>
                <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">Inscríbase Ahora</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-slate-800 border border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-sky-400">
                  <FileText className="w-7 h-7" />
                  <span>Requisitos Esenciales</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-400 mb-4 list-disc list-inside space-y-1">
                  <li>4 años cumplidos (antes del 30 de junio)</li>
                  <li>Acta de nacimiento y tarjeta de vacunas</li>
                  <li>Fotos 2x2 y formulario de inscripción</li>
                </ul>
                <Button variant="secondary" className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200">
                  Descargar Requisitos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Space Section */}
      <section id="espacio" className="py-20 lg:py-28 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestro Espacio</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Instalaciones modernas, seguras y diseñadas para inspirar el aprendizaje, la creatividad y la exploración.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
              <Image
                src="/images/prueba.jpg"
                alt="Aula moderna"
                width={616}
                height={616}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/prueba.jpg"
                alt="Rincón de lectura"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/prueba.jpg"
                alt="Área de arte"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/prueba.jpg"
                alt="Patio de juegos"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/prueba.jpg"
                alt="Comedor escolar"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-300 text-slate-200 hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/galeria">
                Ver Galería Completa <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Lo que dicen las Familias</h2>
            <p className="text-lg text-slate-400">Testimonios reales que reflejan nuestro impacto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-slate-800 shadow-xl border-t-4 border-amber-400">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/images/prueba.jpg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="ml-4 font-semibold text-white">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            ¡Estamos aquí para usted! Contáctenos para agendar una visita o resolver cualquier duda.
          </p>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl shadow-2xl p-8 max-w-2xl mx-auto text-left flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-sky-300" /> Calle José Antonio Salcedo, Montecristi
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-sky-300" /> WhatsApp: (809) 123-4567
              </p>
            </div>
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto flex-shrink-0 bg-white text-blue-700 hover:bg-slate-200 font-bold"
            >
              <Link href="https://wa.me/18091234567" target="_blank">
                Enviar Mensaje
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
