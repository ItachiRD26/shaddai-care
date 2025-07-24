import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProgramOnePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/programs-1.webp"
          alt="Guardería Plan Básico"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg">
            Guardería Plan Básico
          </h1>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* Edad */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Edad recomendada</h2>
          <p className="text-gray-600">6 meses - 4 años</p>
        </section>

        {/* Descripción */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Descripción general</h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestro Plan Básico de Guardería está diseñado para acompañar a los más pequeños en sus primeros años de
            vida con un enfoque basado en el amor, la atención personalizada y el desarrollo temprano. Creamos un
            ambiente donde cada bebé y niño pequeño puede explorar el mundo con seguridad, confianza y alegría.
          </p>
        </section>

        {/* Beneficios */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Lo que incluye</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Cuidado 24/7 con personal calificado y supervisado</li>
            <li>Alimentación balanceada con menús supervisados por nutricionistas</li>
            <li>Estimulación temprana y juegos pedagógicos</li>
            <li>Áreas de descanso cómodas y seguras</li>
            <li>Monitoreo con cámaras y reportes diarios a los padres</li>
          </ul>
        </section>

        {/* Extras */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Información adicional</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Horarios flexibles: mañana, tarde o jornada completa</li>
            <li>Cupos limitados por grupo para garantizar atención individual</li>
            <li>Ambiente 100% libre de pantallas</li>
            <li>Actividades semanales con visitas temáticas y talleres sensoriales</li>
          </ul>
        </section>

        {/* Precio */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Precio</h2>
          <p className="text-gray-600 text-lg font-medium">$4,500 / mes</p>
        </section>

        {/* Mini galería */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Galería de momentos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image
              src="/images/guarderia-1.webp"
              alt="Niños jugando"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-52"
            />
            <Image
              src="/images/guarderia-2.webp"
              alt="Actividades educativas"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-52"
            />
            <Image
              src="/images/guarderia-3.webp"
              alt="Zona de descanso"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-52"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="pt-6">
          <Link href="/formulario-inscripcion?programa=Guardería%20Plan%20Básico">
            <Button className="cursor-pointer bg-[#1d7748] hover:bg-[#1d7748]/90 text-white px-6 py-3 rounded-lg text-base shadow">
              Inscribirse en este programa
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
