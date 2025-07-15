import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function ProgramaPage() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-blue-400">Nuestro Programa</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
            Un currículo con propósito: local en raíces, global en visión.
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            En SHADDAI SCHOOL, el aprendizaje no es improvisado: es planeado, estructurado y lleno de intención. Nuestro
            programa mensual está diseñado para acompañar el desarrollo integral de su hijo(a) desde lo cognitivo hasta
            lo emocional.
          </p>
        </div>
        <div className="mt-16 bg-slate-800 p-8 md:p-12 rounded-xl border border-slate-700 shadow-sm">
          <h2 className="text-2xl font-bold text-white font-heading">Explore el plan curricular mes a mes</h2>
          <p className="mt-4 text-slate-400">Conozca cómo organizamos cada mes del año escolar, integrando:</p>
          <ul className="mt-6 space-y-4">
            {[
              "Currículo oficial dominicano para el Nivel Inicial (Kinder)",
              "Estándares estadounidenses (Head Start, Common Core Pre-K, Early Learning Goals)",
              "Enseñanza activa, lúdica y bilingüe (español/inglés)",
              "Áreas clave: lenguaje, matemáticas, exploración, arte, motricidad, vida cristiana, y habilidades socioemocionales",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="h-6 w-6 flex-shrink-0 text-blue-500" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-slate-700 pt-8">
            <p className="text-slate-300">
              📘 Cada mes tiene un enfoque temático, metas claras por área, vocabulario clave en ambos idiomas, y
              estrategias que conectan la escuela con el hogar.
            </p>
            <p className="mt-4 text-slate-300">
              🔍 ¿Quiere ver cómo su hijo aprenderá a contar, leer sonidos iniciales, orar, socializar, crear y pensar
              en dos idiomas?
            </p>
            <Button className="mt-6 rounded-lg bg-blue-600 hover:bg-blue-700">
              🟢 Ver planificación curricular mensual
            </Button>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
          >
            <Link href="/#programa">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
