"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

type Slide = {
  id: number
  programName: string
  subtitle: string
  backgroundImage: string
  primaryColor: "blue" | "green" | "orange"
  link: string
  isNew?: boolean
}

const heroSlides: Slide[] = [
  {
    id: 1,
    programName: "SHADDAI SCHOOL",
    subtitle: "Educación integral para el futuro",
    backgroundImage: "/images/hero-1.webp",
    primaryColor: "blue",
    link: "/shaddai-school",
    isNew: true,
  },
  {
    id: 2,
    programName: "SHADDAI DAY-CARE",
    subtitle: "Cuidado profesional con amor",
    backgroundImage: "/images/hero-2.webp",
    primaryColor: "green",
    link: "/shaddai-daycare",
  },
  {
    id: 3,
    programName: "GRACE LEARNING CENTER",
    subtitle: "Aprendizaje creativo y divertido",
    backgroundImage: "/images/hero-3.webp",
    primaryColor: "orange",
    link: "/grace-learning",
  },
]

type HeroCarouselProps = {
  // Opcional: establece manualmente la altura del navbar si prefieres no medirlo.
  navHeight?: number
}

export default function HeroCarousel({ navHeight: navHeightProp }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [measuredNavHeight, setMeasuredNavHeight] = useState<number | null>(null)

  // Medimos la altura REAL del navbar fijo para que el hero inicie justo debajo sin huecos.
  useEffect(() => {
    if (typeof window === "undefined") return

    // Intenta localizar el header/nav de manera robusta
    const findHeader = () =>
      (document.querySelector('[data-navbar="main"]') ||
        document.querySelector("#main-navbar") ||
        document.querySelector("header") ||
        document.querySelector("nav")) as HTMLElement | null

    const el = findHeader()
    if (!el) {
      if (navHeightProp != null) setMeasuredNavHeight(navHeightProp)
      return
    }

    const setHeight = () => setMeasuredNavHeight(Math.ceil(el.getBoundingClientRect().height))

    // Observa cambios de tamaño (responsive, etc.)
    const ro = new ResizeObserver(() => setHeight())
    ro.observe(el)
    setHeight()

    // Recalcula en resize/scroll por si el nav cambia ligeramente
    const onResize = () => setHeight()
    window.addEventListener("resize", onResize)
    window.addEventListener("scroll", onResize, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", onResize)
      window.removeEventListener("scroll", onResize)
    }
  }, [navHeightProp])

  const effectiveNavHeight = useMemo(() => {
    // Prioriza medición; si no está disponible, usa prop; si no, 0
    return measuredNavHeight ?? navHeightProp ?? 0
  }, [measuredNavHeight, navHeightProp])

  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        heroSlides.map(
          (slide) =>
            new Promise<void>((resolve) => {
              const img = new Image()
              img.crossOrigin = "anonymous"
              img.onload = () => resolve()
              img.onerror = () => resolve()
              img.src = slide.backgroundImage
            }),
        ),
      )
      setImagesLoaded(true)
    }
    preload()
  }, [])

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const getColorClasses = (color: Slide["primaryColor"]) => {
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

  const getAccentColor = (color: Slide["primaryColor"]) => {
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

  const currentHero = heroSlides[currentSlide]

  return (
    <section
      className="relative overflow-hidden bg-black"
      // Sin huecos: empuja exactamente el alto del navbar y ajusta la altura del viewport restante
      style={{
        marginTop: `${effectiveNavHeight}px`,
        minHeight: `calc(100svh - ${effectiveNavHeight}px)`,
      }}
      aria-label="Hero principal con carrusel"
    >
      {/* Slides de fondo */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-out will-change-transform ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.backgroundImage}')`,
              backgroundPosition: "center 35%",
              backgroundSize: "cover",
            }}
          />
          {/* Overlay más intenso para mejor contraste en todo el contenido */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Cargando */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-40">
          <div className="text-white/80 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            Cargando...
          </div>
        </div>
      )}

      {/* Flechas navegación (no colisionan con contenido centrado) */}
      <button
        onClick={goToPrevious}
        disabled={!imagesLoaded || isAnimating}
        className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
                   bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3
                   text-white transition-all duration-300 border border-white/30
                   hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        disabled={!imagesLoaded || isAnimating}
        className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
                   bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3
                   text-white transition-all duration-300 border border-white/30
                   hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Contenido centrado y responsivo */}
      <div className="relative z-20 flex items-center min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge Nuevo */}
            {currentHero.isNew && (
              <div className="mb-4 sm:mb-6">
                <span
                  className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white shadow-sm"
                  style={{ backgroundColor: getAccentColor(currentHero.primaryColor) }}
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-ping" />
                  {"Nuevo programa"}
                </span>
              </div>
            )}

            {/* Título centrado */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {currentHero.programName}
            </h1>

            {/* Subtítulo centrado */}
            <p className="text-base sm:text-lg md:text-2xl text-white/90 mt-4 sm:mt-6">{currentHero.subtitle}</p>

            {/* CTA centrado */}
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Link href={currentHero.link}>
                <Button
                  size="lg"
                  className={`${getColorClasses(
                    currentHero.primaryColor,
                  )} text-white cursor-pointer font-semibold px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg
                             transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 sm:gap-3`}
                >
                  {"Conocer programa"}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30">
        <div className="flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              disabled={!imagesLoaded || isAnimating}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${
                index === currentSlide ? "bg-white w-6 sm:w-8 shadow-sm" : "bg-white/50 w-1.5 sm:w-2 hover:bg-white/80"
              }`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentSlide(index)
                  setTimeout(() => setIsAnimating(false), 600)
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
