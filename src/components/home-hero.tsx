"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    programName: "SHADDAI SCHOOL",
    subtitle: "Educación integral para el futuro",
    backgroundImage: "/images/hero-1.webp",
    icon: GraduationCap,
    primaryColor: "blue",
    link: "/shaddai-school",
    isNew: true,
  },
  {
    id: 2,
    programName: "SHADDAI DAY-CARE",
    subtitle: "Cuidado profesional con amor",
    backgroundImage: "/images/hero-2.webp",
    icon: Heart,
    primaryColor: "green",
    link: "/shaddai-daycare",
  },
  {
    id: 3,
    programName: "GRACE LEARNING CENTER",
    subtitle: "Aprendizaje creativo y divertido",
    backgroundImage: "/images/hero-3.webp",
    icon: BookOpen,
    primaryColor: "orange",
    link: "/grace-learning",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroSlides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.crossOrigin = "anonymous"
          img.onload = resolve
          img.onerror = reject
          img.src = slide.backgroundImage
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.error("Error preloading images:", error)
        setImagesLoaded(true)
      }
    }

    preloadImages()
  }, [])

  const currentHero = heroSlides[currentSlide]

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-[#4f75ff] hover:bg-[#4f75ff]/90"
      case "green":
        return "bg-[#1d7748] hover:bg-[#1d7748]/90"
      case "orange":
        return "bg-[#f68026] hover:bg-[#f68026]/90"
      default:
        return "bg-[#1d7748] hover:bg-[#1d7748]/90"
    }
  }

  const getAccentColor = (color: string) => {
    switch (color) {
      case "blue":
        return "#4f75ff"
      case "green":
        return "#1d7748"
      case "orange":
        return "#f68026"
      default:
        return "#1d7748"
    }
  }

  return (
    <section className="relative h-screen overflow-hidden bg-white">
      {/* Distinctive Element - Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#fcafc2]/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-32 left-16 w-24 h-24 bg-[#4f75ff]/10 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#ffd44d]/20 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundPosition: "center 35%",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Loading indicator */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-white flex items-center justify-center z-50">
          <div className="text-gray-600 text-center animate-fade-in">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1d7748] mx-auto mb-4"></div>
            <p className="text-lg font-medium">Cargando experiencia...</p>
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        disabled={!imagesLoaded || isAnimating}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20
             bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3
             text-white transition-all duration-300
             hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
             animate-fade-in border border-white/30"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={goToNext}
        disabled={!imagesLoaded || isAnimating}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20
             bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3
             text-white transition-all duration-300
             hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed
             animate-fade-in border border-white/30"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl lg:max-w-2xl px-4 sm:px-0">
            {/* New Launch Badge */}
            {currentHero.isNew && (
              <div className="mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <span
                  className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white shadow-sm animate-pulse"
                  style={{ backgroundColor: getAccentColor(currentHero.primaryColor) }}
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></span>
                  Nuevo programa
                </span>
              </div>
            )}

            {/* Program Title */}
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {currentHero.programName}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-light animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              {currentHero.subtitle}
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Link href={currentHero.link}>
                <Button
                  size="lg"
                  className={`${getColorClasses(currentHero.primaryColor)} text-white font-medium
                             px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg
                             transition-all duration-300 hover:shadow-xl hover:scale-105
                             flex items-center gap-2 sm:gap-3 w-fit group`}
                >
                  Conocer programa
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              disabled={!imagesLoaded || isAnimating}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${
                index === currentSlide ? "bg-white w-6 sm:w-8 shadow-sm" : "bg-white/40 w-1.5 sm:w-2 hover:bg-white/60"
              }`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentSlide(index)
                  setTimeout(() => setIsAnimating(false), 1000)
                }
              }}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
