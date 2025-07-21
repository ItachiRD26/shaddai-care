"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, BookOpen, Award } from "lucide-react"

export default function SchoolHeroRedesign() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/school-hero-bg.jpg" alt="Campus de Shaddai School" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"></div>

        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 via-transparent to-slate-50/5"></div>
      </div>

      {/* Floating visual elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div
          className="hidden lg:block absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="hidden lg:block absolute top-1/2 right-20 w-16 h-16 bg-white/5 rounded-lg rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Institution badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 mb-8">
          <Award className="w-4 h-4" />
          Institución Educativa de Excelencia
        </div>

        {/* Main heading */}
        <div className="space-y-6 mb-12">
          <h1 className="font-bold leading-tight">
            <span className="block text-white/90 font-normal text-xl sm:text-2xl md:text-3xl mb-4">Bienvenidos a</span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              SHADDAI
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
              SCHOOL
            </span>
          </h1>

          {/* Professional subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/95 font-medium max-w-4xl mx-auto">
            Institución educativa de <span className="text-blue-200 font-semibold">excelencia académica</span> con
            formación integral, educación bilingüe y{" "}
            <span className="text-blue-200 font-semibold">valores cristianos</span>
          </p>
        </div>

        {/* Professional feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <BookOpen className="w-4 h-4 text-blue-200" />
            <span className="text-white/90 font-medium text-sm">Educación Bilingüe</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <GraduationCap className="w-4 h-4 text-blue-200" />
            <span className="text-white/90 font-medium text-sm">Estándares Internacionales</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <Users className="w-4 h-4 text-blue-200" />
            <span className="text-white/90 font-medium text-sm">Formación Integral</span>
          </div>
        </div>

        {/* Professional CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <Link href="/shaddai-school#admisiones" className="flex-1">
            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 text-base shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg border-0 backdrop-blur-sm">
              Proceso de Admisión
            </Button>
          </Link>
          <Link href="/shaddai-school#programa" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-slate-800 font-semibold px-8 py-4 text-base transition-all duration-300 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              Programa Académico
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom visual indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
