import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NosotrosPage() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading text-center">
            Conozca nuestra historia y equipo
          </h1>
          <div className="mt-16 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold tracking-tight text-white font-heading">Nuestra historia</h2>
                <p className="mt-4 text-lg text-slate-300">
                  SHADDAI SCHOOL surge como una extensión natural de SHADDAI DAY-CARE, luego de tres años brindando
                  cuidado, amor y estimulación a más de 170 niños en Montecristi. Nuestra comunidad lo pidió… y
                  respondimos con una propuesta académica única, que une lo mejor del currículo dominicano, estándares
                  internacionales y valores cristianos.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/images/prueba.jpg?height=400&width=500"
                  alt="Edificio de Shaddai School"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 items-center">
              <div>
                <Image
                  src="/images/prueba.jpg?height=400&width=500"
                  alt="Equipo de Shaddai School"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white font-heading">¿Qué nos distingue?</h2>
                <p className="mt-4 text-lg text-slate-300">
                  Un equipo humano que educa con vocación, convicción y ternura. Cada integrante de SHADDAI SCHOOL es
                  cuidadosamente seleccionado, no solo por su formación profesional, sino por su empatía, liderazgo y
                  compromiso con el desarrollo integral de cada niño.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="rounded-lg border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <Link href="/shaddai-school">
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
