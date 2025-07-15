import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PropuestaPage() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <p className="text-base font-semibold leading-7 text-blue-400">Nuestra Propuesta</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
            ¿Qué hace única a SHADDAI SCHOOL?
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            En SHADDAI SCHOOL no solo enseñamos, transformamos vidas desde la primera infancia. Nuestra propuesta
            combina lo mejor de la educación preescolar moderna con una identidad cristiana viva y un enfoque bilingüe
            auténtico que prepara a su hijo(a) para un mundo globalizado.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-white font-heading">Nuestra promesa:</h2>
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                name: "Educación bilingüe desde el primer día",
                description:
                  "Los niños aprenden inglés y español de forma natural, con actividades inmersivas y rutinas diarias en ambos idiomas.",
                icon: "🌍",
              },
              {
                name: "Currículo mixto, personalizado y activo",
                description:
                  "Unimos el currículo dominicano con estándares internacionales (Head Start y Common Core) para garantizar excelencia y adaptación al futuro.",
                icon: "🧠",
              },
              {
                name: "Valores cristianos vividos en comunidad",
                description: "Amor, respeto, fe, gratitud y empatía se practican a diario, no solo se enseñan.",
                icon: "💛",
              },
              {
                name: "Atención cercana y vínculo familiar",
                description:
                  "Somos una escuela de puertas abiertas, donde cada familia es escuchada, orientada y respetada.",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                name: "Ambiente seguro, alegre y estimulante",
                description:
                  "Nuestras instalaciones están diseñadas para el juego, la exploración, el arte y el aprendizaje significativo.",
                icon: "🎨",
              },
            ].map((feature) => (
              <div key={feature.name} className="relative pl-12">
                <dt className="text-base font-semibold leading-7 text-slate-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-xl">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-lg font-semibold text-slate-200">
            Elegir SHADDAI SCHOOL es más que seleccionar una escuela: es invertir en una experiencia educativa con
            propósito, identidad y excelencia.
          </p>
          <div className="mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <Link href="/#inicio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
