"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { Camera, Play, X, ChevronLeft, ChevronRight, Grid, Filter, Heart, Star, Award, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import LayoutClientGeneral from "@/components/layout/layoutclientG"

function useScrollAnimation<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold })
    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold])
  return { ref, isVisible }
}

type ItemSize = "large" | "medium" | "small"
type ItemType = "image" | "video"
type CategoryId = "todos" | "actividades" | "instalaciones" | "eventos" | "arte"

export default function GaleriaPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<CategoryId>("todos")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry")

  const heroRef = useScrollAnimation<HTMLElement>()
  const statsRef = useScrollAnimation<HTMLElement>()
  const galleryRef = useScrollAnimation<HTMLElement>()
  const ctaRef = useScrollAnimation<HTMLElement>()

  const categories = [
    { id: "todos", name: "Todos", count: 24, icon: Grid },
    { id: "actividades", name: "Actividades", count: 8, icon: Heart },
    { id: "instalaciones", name: "Instalaciones", count: 6, icon: Award },
    { id: "eventos", name: "Eventos", count: 5, icon: Star },
    { id: "arte", name: "Arte y Creatividad", count: 5, icon: Sparkles },
  ] as const

  const galleryItems: Array<{
    id: number
    type: ItemType
    src: string
    title: string
    category: Exclude<CategoryId, "todos">
    description: string
    featured?: boolean
    size: ItemSize
  }> = [
    {
      id: 1,
      type: "image",
      src: "/images/galeria-1.webp",
      title: "Hora del Cuento Mágico",
      category: "actividades",
      description: "Los niños disfrutando de cuentos mágicos que despiertan su imaginación",
      featured: true,
      size: "large",
    },
    {
      id: 2,
      type: "image",
      src: "/images/galeria-2.webp",
      title: "Aula Principal Renovada",
      category: "instalaciones",
      description: "Espacios modernos diseñados especialmente para el aprendizaje integral",
      size: "medium",
    },
    {
      id: 3,
      type: "video",
      src: "/images/galeria-3.webp",
      title: "Día de Graduación 2024",
      category: "eventos",
      description: "Celebrando los logros y el crecimiento de nuestros pequeños graduados",
      featured: true,
      size: "large",
    },
    {
      id: 4,
      type: "image",
      src: "/images/galeria-4.webp",
      title: "Taller de Pintura Creativa",
      category: "arte",
      description: "Expresando creatividad y emociones a través de colores vibrantes",
      size: "small",
    },
    {
      id: 5,
      type: "image",
      src: "/images/galeria-5.webp",
      title: "Recreo Divertido",
      category: "actividades",
      description: "Momentos de diversión y socialización al aire libre",
      size: "medium",
    },
    {
      id: 6,
      type: "image",
      src: "/images/galeria-6.webp",
      title: "Biblioteca Infantil",
      category: "instalaciones",
      description: "Un rincón mágico dedicado al amor por la lectura",
      size: "small",
    },
    {
      id: 7,
      type: "image",
      src: "/images/galeria-7.webp",
      title: "Festival de Primavera",
      category: "eventos",
      description: "Celebrando la llegada de la primavera con alegría y color",
      featured: true,
      size: "large",
    },
    {
      id: 8,
      type: "image",
      src: "/images/galeria-8.webp",
      title: "Manualidades Navideñas",
      category: "arte",
      description: "Creando decoraciones especiales llenas de amor y creatividad",
      size: "medium",
    },
    {
      id: 9,
      type: "image",
      src: "/images/galeria-9.webp",
      title: "Clase de Música",
      category: "actividades",
      description: "Descubriendo el maravilloso mundo de los sonidos y ritmos",
      size: "small",
    },
    {
      id: 10,
      type: "image",
      src: "/images/galeria-10.webp",
      title: "Área de Juegos Segura",
      category: "instalaciones",
      description: "Diversión segura y supervisada para todos nuestros pequeños",
      size: "medium",
    },
    {
      id: 11,
      type: "image",
      src: "/images/galeria-11.webp",
      title: "Obra de Teatro Infantil",
      category: "eventos",
      description: "Pequeños artistas brillando en el escenario con sus talentos",
      size: "large",
    },
    {
      id: 12,
      type: "image",
      src: "/images/galeria-12.webp",
      title: "Escultura en Plastilina",
      category: "arte",
      description: "Moldeando la imaginación con sus propias manos creativas",
      size: "small",
    },
  ]

  const filteredItems =
    activeCategory === "todos" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const nextImage = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % filteredItems.length)
  }, [filteredItems.length, selectedIndex])

  const prevImage = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? filteredItems.length - 1 : selectedIndex - 1)
  }, [filteredItems.length, selectedIndex])

  const getSizeClasses = (size: ItemSize) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 h-80 md:h-96"
      case "medium":
        return "md:col-span-1 md:row-span-1 h-48"
      case "small":
        return "md:col-span-1 md:row-span-1 h-40"
      default:
        return "md:col-span-1 md:row-span-1 h-48"
    }
  }

  // ESC / flechas
  useEffect(() => {
    if (selectedIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null)
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [nextImage, prevImage, selectedIndex])

  // Bloquear scroll cuando modal está activo
  useEffect(() => {
    const original = document.body.style.overflow
    if (selectedIndex !== null) document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [selectedIndex])

  // Swipe móvil
  const touchStartX = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50
    if (deltaX > threshold) prevImage()
    if (deltaX < -threshold) nextImage()
    touchStartX.current = null
  }

  return (
    <LayoutClientGeneral>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section
          ref={heroRef.ref}
          className="py-24 relative overflow-hidden md:bg-fixed"
          style={{
            backgroundImage: "url('/images/galeria-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-yellow-400/80 backdrop-blur-sm" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border border-white/30">
                <Camera className="w-5 h-5" />
                ¡Momentos Mágicos Capturados!
                <Camera className="w-5 h-5" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Nuestra <span className="text-yellow-200">Galería</span> 💛
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                Descubre los momentos más especiales, las sonrisas más brillantes y los recuerdos más preciados de
                nuestra familia Shaddai ✨
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
          ref={statsRef.ref}
          className={`py-16 bg-gradient-to-r from-yellow-50 to-yellow-100 transition-all duration-1000 ${
            statsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Fotos capturadas", icon: Camera },
                { number: "50+", label: "Videos especiales", icon: Play },
                { number: "25+", label: "Eventos celebrados", icon: Star },
                { number: "∞", label: "Sonrisas creadas", icon: Heart },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Filtros + modo de vista */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium mb-2">
                  <Filter className="w-4 h-4" />
                  Explora por categorías
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Encuentra tus <span className="text-yellow-600">momentos favoritos</span>
                </h2>
              </div>

              <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    viewMode === "masonry" ? "bg-yellow-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-pressed={viewMode === "masonry"}
                >
                  Mosaico
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    viewMode === "grid" ? "bg-yellow-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                  aria-pressed={viewMode === "grid"}
                >
                  Cuadrícula
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                    aria-pressed={activeCategory === category.id}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        activeCategory === category.id ? "bg-white/20" : "bg-gray-100"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Grid / Mosaico */}
        <section
          ref={galleryRef.ref}
          className={`py-20 bg-gradient-to-br from-yellow-50/30 to-yellow-100/30 transition-all duration-1000 ${
            galleryRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`grid gap-6 ${
                viewMode === "masonry"
                  ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-min"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 border border-gray-100 ${
                    viewMode === "masonry" ? getSizeClasses(item.size) : "h-64"
                  } ${item.featured ? "ring-2 ring-yellow-400 ring-opacity-50" : ""}`}
                  onClick={() => setSelectedIndex(index)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ DESTACADO
                    </div>
                  )}

                  <div className="relative overflow-hidden h-full">
                    <Image
                      src={item.src || "/placeholder.svg?height=400&width=600&query=imagen%20galeria"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-yellow-500/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-gray-800 capitalize">
                        {categories.find((cat) => cat.id === item.category)?.name}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Ver más momentos
                <Camera className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de imagen"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300 z-10"
                aria-label="Cerrar"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 z-10"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative flex items-center justify-center bg-black">
                  <Image
                    src={
                      filteredItems[selectedIndex].src ||
                      "/placeholder.svg?height=800&width=1200&query=imagen%20ampliada%20galeria" ||
                      "/placeholder.svg"
                    }
                    alt={filteredItems[selectedIndex].title}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[80vh] object-contain"
                    priority
                  />
                  {filteredItems[selectedIndex].type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-yellow-500/90 backdrop-blur-sm rounded-full p-6">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {filteredItems[selectedIndex].title}
                      </h3>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {categories.find((cat) => cat.id === filteredItems[selectedIndex].category)?.name}
                      </span>
                    </div>
                    <div className="text-gray-500 text-sm">
                      {selectedIndex + 1} de {filteredItems.length}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {filteredItems[selectedIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section
          ref={ctaRef.ref}
          className={`py-24 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white relative overflow-hidden transition-all duration-1000 ${
            ctaRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
              <Heart className="w-4 h-4" />
              ¡Únete a nosotros!
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Quieres ser parte de estos <span className="text-yellow-200">momentos mágicos</span>? 📸
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cada día creamos nuevos recuerdos llenos de alegría, aprendizaje y amor. Tu pequeño puede ser el
              protagonista de la próxima historia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-yellow-600 hover:bg-yellow-50 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Agendar visita
                <Camera className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-yellow-600 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
              >
                Ver más fotos
              </Button>
            </div>
          </div>
        </section>
      </main>
    </LayoutClientGeneral>
  )
}
