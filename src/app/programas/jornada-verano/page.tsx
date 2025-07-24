import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProgramThreePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/programs-3.webp"
          alt="Jornada de Verano"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg">
            Jornada de Verano
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Edad recomendada</h2>
          <p className="text-gray-600">Todas las edades</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Descripción general</h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestra Jornada de Verano es una experiencia inolvidable para niños de todas las edades. Durante dos
            semanas, ofrecemos un calendario lleno de actividades emocionantes, excursiones y talleres, todo en un
            entorno seguro y con personal especializado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Lo que incluye</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Excursiones a parques, museos y espacios naturales</li>
            <li>Talleres de arte, ciencia, cocina y música</li>
            <li>Actividades recreativas: deportes, juegos y piscina</li>
            <li>Equipo capacitado en recreación infantil y primeros auxilios</li>
            <li>Almuerzo y refrigerios incluidos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Información adicional</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Duración: 2 semanas (lunes a viernes, 8:00 AM - 2:00 PM)</li>
            <li>Incluye camiseta del campamento</li>
            <li>Cupos limitados por grupo de edad</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Precio</h2>
          <p className="text-gray-600 text-lg font-medium">$3,500 / 2 semanas</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Galería de actividades</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image src="/images/verano-1.webp" alt="Verano 1" width={400} height={300} className="rounded-lg object-cover w-full h-52" />
            <Image src="/images/verano-2.webp" alt="Verano 2" width={400} height={300} className="rounded-lg object-cover w-full h-52" />
            <Image src="/images/verano-3.webp" alt="Verano 3" width={400} height={300} className="rounded-lg object-cover w-full h-52" />
          </div>
        </section>

        <section className="pt-6">
          <Link href="/formulario-inscripcion?programa=Jornada%20de%20Verano">
            <Button className="cursor-pointer bg-[#f68026] hover:bg-[#f68026]/90 text-white px-6 py-3 rounded-lg text-base shadow">
              Inscribirse en este programa
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
