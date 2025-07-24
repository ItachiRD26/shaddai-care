import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProgramTwoPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <div className="relative h-[50vh] w-full">
        <Image
          src="/images/programs-2.webp"
          alt="Inglés para Niños"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg">
            Inglés para Niños
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Edad recomendada</h2>
          <p className="text-gray-600">7 - 10 años</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Descripción general</h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestro programa de Inglés para Niños está pensado para que los estudiantes aprendan el idioma de forma
            natural y divertida. Utilizamos un enfoque comunicativo a través de juegos, canciones, dinámicas grupales y
            situaciones reales que motivan a los niños a expresarse con seguridad.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Lo que incluye</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Clases participativas en grupos pequeños</li>
            <li>Profesores nativos y bilingües certificados</li>
            <li>Material didáctico actualizado y multimedia</li>
            <li>Evaluaciones mensuales y seguimiento personalizado</li>
            <li>Certificado internacional al finalizar el programa</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Información adicional</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Sesiones 3 veces por semana (1 hora cada una)</li>
            <li>Modalidad presencial o virtual</li>
            <li>Incluye acceso a plataforma online para práctica adicional</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Precio</h2>
          <p className="text-gray-600 text-lg font-medium">$2,800 / mes</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Galería de clases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image src="/images/ingles-1.webp" alt="Clase 1" width={400} height={300} className="rounded-lg object-cover w-full h-52" />
            <Image src="/images/ingles-2.webp" alt="Clase 2" width={400} height={300} className="rounded-lg object-cover w-full h-52" />
            <Image src="/images/ingles-3.webp" alt="Clase 3" width={400} height={300} className="rounded-lg object-cover w-full h-52" />
          </div>
        </section>

        <section className="pt-6">
          <Link href="/formulario-inscripcion?programa=Inglés%20para%20Niños">
            <Button className="cursor-pointer bg-[#4f75ff] hover:bg-[#4f75ff]/90 text-white px-6 py-3 rounded-lg text-base shadow">
              Inscribirse en este programa
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
