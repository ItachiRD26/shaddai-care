"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Camera, Play, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GaleriaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("todos")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: "todos", name: "Todos", count: 24 },
    { id: "actividades", name: "Actividades", count: 8 },
    { id: "instalaciones", name: "Instalaciones", count: 6 },
    { id: "eventos", name: "Eventos", count: 5 },
    { id: "arte", name: "Arte y Creatividad", count: 5 },
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Hora del Cuento",
      category: "actividades",
      description: "Los niños disfrutando de cuentos mágicos",
    },
    {
      id: 2,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Aula Principal",
      category: "instalaciones",
      description: "Espacios diseñados para el aprendizaje",
    },
    {
      id: 3,
      type: "video",
      src: "/placeholder.svg?height=400&width=600",
      title: "Día de Graduación",
      category: "eventos",
      description: "Celebrando los logros de nuestros pequeños",
    },
    {
      id: 4,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Taller de Pintura",
      category: "arte",
      description: "Expresando creatividad con colores",
    },
    {
      id: 5,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Recreo Divertido",
      category: "actividades",
      description: "Momentos de diversión al aire libre",
    },
    {
      id: 6,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Biblioteca Infantil",
      category: "instalaciones",
      description: "Un rincón mágico para la lectura",
    },
    {
      id: 7,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Festival de Primavera",
      category: "eventos",
      description: "Celebrando la llegada de la primavera",
    },
    {
      id: 8,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Manualidades Navideñas",
      category: "arte",
      description: "Creando decoraciones especiales",
    },
    {
      id: 9,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Clase de Música",
      category: "actividades",
      description: "Descubriendo el mundo de los sonidos",
    },
    {
      id: 10,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Área de Juegos",
      category: "instalaciones",
      description: "Diversión segura para todos",
    },
    {
      id: 11,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Obra de Teatro",
      category: "eventos",
      description: "Pequeños artistas en acción",
    },
    {
      id: 12,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Escultura en Plastilina",
      category: "arte",
      description: "Moldeando la imaginación",
    },
  ]

  const filteredItems =
    activeCategory === "todos" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/galeria-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--shaddai-yellow)]/90 to-[color:var(--shaddai-yellow)]/70 backdrop-blur-sm" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Camera className="w-5 h-5" />
              ¡Momentos Mágicos!
              <Camera className="w-5 h-5" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-display font-bold text-gray-800 mb-6 leading-tight drop-shadow-lg">
              Galería 💛
            </h1>

            <p className="text-2xl text-gray-800/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              Descubre los momentos más especiales y las sonrisas más brillantes de nuestra familia Shaddai ✨
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[color:var(--shaddai-yellow)] text-gray-800 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[color:var(--shaddai-yellow)]/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-gray-800" />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-[color:var(--shaddai-yellow)]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-gray-800 capitalize">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-display font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[color:var(--shaddai-yellow)] transition-colors duration-300"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <Image
                src={filteredItems[selectedImage].src || "/placeholder.svg"}
                alt={filteredItems[selectedImage].title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />

              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-[color:var(--shaddai-yellow)] mb-12">
            Momentos Capturados 📸
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <div className="text-4xl font-display font-bold text-[color:var(--shaddai-yellow)] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Fotos Tomadas</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <div className="text-4xl font-display font-bold text-[color:var(--shaddai-yellow)] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Videos Especiales</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <div className="text-4xl font-display font-bold text-[color:var(--shaddai-yellow)] mb-2">25+</div>
              <div className="text-gray-600 font-medium">Eventos Celebrados</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6">
              <div className="text-4xl font-display font-bold text-[color:var(--shaddai-yellow)] mb-2">∞</div>
              <div className="text-gray-600 font-medium">Sonrisas Creadas</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
