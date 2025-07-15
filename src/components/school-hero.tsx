"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, BookOpen } from "lucide-react"

export default function SchoolHeroRedesign() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <Image
          src="/images/school-hero.jpg"
          alt="Campus de Shaddai School"
          width={1920}
          height={1080}
          priority
          className="object-cover opacity-20"
        />

        {/* Single overlay */}
        <div className="absolute inset-0 bg-blue-900/30" />

        {/* Subtle floating elements - hidden on mobile */}
        <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div
          className="hidden sm:block absolute top-40 right-20 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="hidden sm:block absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-400/10 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="space-y-3 sm:space-y-6 mb-6 sm:mb-8">
          <h1 className="font-black leading-tight">
            <span className="block mb-2 text-white/90 font-light text-sm sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
              Bienvenidos a
            </span>
            <span className="block text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 drop-shadow-2xl tracking-tight">
              SHADDAI
            </span>
            <span className="block text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-300 to-white drop-shadow-2xl tracking-tight">
              SCHOOL
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-xl md:text-2xl leading-relaxed text-white/95 font-medium max-w-4xl mx-auto px-2">
            Una experiencia educativa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold">
              premium
            </span>
            : bilingüe, cristiana y centrada en el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-bold">
              desarrollo integral
            </span>{" "}
            del niño.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-6 mb-6 sm:mb-12 px-2">
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 text-xs sm:text-base">
            <BookOpen className="w-3 h-3 sm:w-5 sm:h-5 text-blue-300" />
            <span className="text-white/90 font-medium">Educación Bilingüe</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 text-xs sm:text-base">
            <GraduationCap className="w-3 h-3 sm:w-5 sm:h-5 text-cyan-300" />
            <span className="text-white/90 font-medium">Valores Cristianos</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20 text-xs sm:text-base">
            <Users className="w-3 h-3 sm:w-5 sm:h-5 text-blue-200" />
            <span className="text-white/90 font-medium">Desarrollo Integral</span>
          </div>
        </div>

        {/* Call to action button */}
        <div className="flex justify-center px-4">
          <Link href="/shaddai-school" className="w-full sm:w-auto">
            <Button className="cursor-pointer relative group bg-blue-900 backdrop-blur-sm hover:bg-slate-700/90 text-white font-semibold px-4 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 rounded-xl border border-white/20 hover:border-white/30 overflow-hidden w-full sm:min-w-[320px] max-w-[350px]">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              {/* Content */}
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-center">Descubra nuestra propuesta única</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
