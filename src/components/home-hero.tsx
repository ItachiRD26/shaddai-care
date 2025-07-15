"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, BookOpen, ArrowRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    programName: "SHADDAI SCHOOL",
    backgroundImage: "/images/hero-1.jpeg",
    icon: GraduationCap,
    primaryColor: "blue",
    link: "/shaddai-school",
    isNew: true,
  },
  {
    id: 2,
    programName: "SHADDAI DAY-CARE",
    backgroundImage: "/images/hero-2.jpeg",
    icon: Heart,
    primaryColor: "green",
    link: "/shaddai-daycare",
  },
  {
    id: 3,
    programName: "GRACE LEARNING CENTER",
    backgroundImage: "/images/hero-3.jpeg",
    icon: BookOpen,
    primaryColor: "orange",
    link: "/grace-learning",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentHero = heroSlides[currentSlide]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
      case "green":
        return "from-green-600 to-green-800 hover:from-green-700 hover:to-green-900"
      case "orange":
        return "from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900"
      default:
        return "from-green-600 to-green-800 hover:from-green-700 hover:to-green-900"
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url('${currentHero.backgroundImage}')`,
          backgroundPosition: "center 35%",
          backgroundSize: "cover",
        }}
      />

      {/* Minimal Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* Program Title */}
          <div className="mb-8 sm:mb-12">
            {/* New Launch Badge */}
            {currentHero.isNew && (
              <div className="mb-4 sm:mb-6">
                <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg animate-pulse border-2 border-white/30 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                  NUEVO LANZAMIENTO
                </span>
              </div>
            )}

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[0.85] tracking-tighter drop-shadow-2xl mb-6 sm:mb-8 px-2">
              <span className="block bg-gradient-to-r from-white via-white to-gray-100 bg-clip-text text-transparent">
                {currentHero.programName}
              </span>
            </h1>

            {/* Single CTA Button - Responsive */}
            <div className="px-4 sm:px-0">
              <Link href={currentHero.link}>
                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${getColorClasses(currentHero.primaryColor)} text-white cursor-pointer 
                    px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 
                    text-sm sm:text-base md:text-lg lg:text-xl 
                    font-bold rounded-full shadow-2xl hover:shadow-3xl 
                    transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 
                    group border-2 border-white/20 backdrop-blur-sm
                    w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-auto
                    min-h-[48px] sm:min-h-[52px] md:min-h-[56px] lg:min-h-[60px]`}
                >
                  <span className="mr-2 sm:mr-3 md:mr-4 whitespace-nowrap">CONOCER PROGRAMA</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 sm:space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2 sm:h-3 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentSlide ? "bg-white w-6 sm:w-8 shadow-lg" : "bg-white/40 w-2 sm:w-3 hover:bg-white/60"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
