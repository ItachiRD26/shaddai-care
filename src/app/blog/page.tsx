"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  BookOpen,
  TrendingUp,
  Filter,
  Search,
  Tag,
  UserIcon,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LayoutClientGeneral from "@/components/layout/layoutclientG"

type CategoryId = "todos" | "educacion" | "desarrollo" | "consejos" | "actividades"

type Category = {
  id: CategoryId
  name: string
  count: number
}

type Post = {
  id: number
  slug: string
  title: string
  excerpt: string
  content?: string
  image: string
  author: string
  authorImage: string
  date: string // ISO o legible
  readTime: string
  category: CategoryId
  tags: string[]
  likes: number
  comments: number
  featured?: boolean
}

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

const categories: Category[] = [
  { id: "todos", name: "Todos los artículos", count: 24 },
  { id: "educacion", name: "Educación Infantil", count: 8 },
  { id: "desarrollo", name: "Desarrollo Infantil", count: 6 },
  { id: "consejos", name: "Consejos para Padres", count: 5 },
  { id: "actividades", name: "Actividades", count: 5 },
]

const featuredPost: Post = {
  id: 1,
  slug: "como-fomentar-la-creatividad-2-a-5",
  title: "Cómo Fomentar la Creatividad en los Niños de 2 a 5 Años",
  excerpt:
    "Descubre técnicas efectivas y actividades prácticas para estimular la imaginación y creatividad de tu pequeño en sus primeros años de desarrollo.",
  image: "/images/blog-featured.webp",
  author: "Dra. María González",
  authorImage: "/images/author-1.webp",
  date: "2024-01-15",
  readTime: "8 min lectura",
  category: "educacion",
  tags: ["creatividad", "desarrollo", "actividades"],
  likes: 45,
  comments: 12,
  featured: true,
}

const blogPosts: Post[] = [
  {
    id: 2,
    slug: "juego-desarrollo-cognitivo",
    title: "La Importancia del Juego en el Desarrollo Cognitivo",
    excerpt:
      "El juego no es solo diversión, es la forma natural en que los niños aprenden y desarrollan habilidades esenciales.",
    image: "/images/blog-2.webp",
    author: "Prof. Carlos Rodríguez",
    authorImage: "/images/author-2.webp",
    date: "2024-01-12",
    readTime: "6 min lectura",
    category: "desarrollo",
    tags: ["juego", "cognitivo", "aprendizaje"],
    likes: 32,
    comments: 8,
  },
  {
    id: 3,
    slug: "rutinas-matutinas-jardin",
    title: "Rutinas Matutinas que Facilitan el Día en el Jardín",
    excerpt: "Establece rutinas efectivas que ayuden a tu hijo a comenzar el día con energía y entusiasmo.",
    image: "/images/blog-3.webp",
    author: "Ana Martínez",
    authorImage: "/images/author-3.webp",
    date: "2024-01-10",
    readTime: "5 min lectura",
    category: "consejos",
    tags: ["rutinas", "mañana", "organización"],
    likes: 28,
    comments: 15,
  },
  {
    id: 4,
    slug: "actividades-sensoriales-aprendizaje",
    title: "Actividades Sensoriales para Estimular el Aprendizaje",
    excerpt: "Explora actividades que involucran los sentidos para potenciar el desarrollo integral de los niños.",
    image: "/images/blog-4.webp",
    author: "Dra. Laura Pérez",
    authorImage: "/images/author-4.webp",
    date: "2024-01-08",
    readTime: "7 min lectura",
    category: "actividades",
    tags: ["sensorial", "estimulación", "desarrollo"],
    likes: 41,
    comments: 9,
  },
  {
    id: 5,
    slug: "manejo-rabietas-positivo",
    title: "Cómo Manejar las Rabietas de Forma Positiva",
    excerpt: "Estrategias efectivas para transformar los momentos difíciles en oportunidades de aprendizaje emocional.",
    image: "/images/blog-5.webp",
    author: "Psic. Roberto Silva",
    authorImage: "/images/author-5.webp",
    date: "2024-01-05",
    readTime: "9 min lectura",
    category: "consejos",
    tags: ["emociones", "disciplina", "crianza"],
    likes: 56,
    comments: 23,
  },
  {
    id: 6,
    slug: "poder-lectura-primera-infancia",
    title: "El Poder de la Lectura en la Primera Infancia",
    excerpt: "Descubre cómo los cuentos y la lectura temprana impactan positivamente en el desarrollo del lenguaje.",
    image: "/images/blog-6.webp",
    author: "Lic. Carmen Torres",
    authorImage: "/images/author-6.webp",
    date: "2024-01-03",
    readTime: "6 min lectura",
    category: "educacion",
    tags: ["lectura", "lenguaje", "cuentos"],
    likes: 38,
    comments: 11,
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("todos")
  const [searchTerm, setSearchTerm] = useState("")

  const heroRef = useScrollAnimation<HTMLElement>()
  const categoriesRef = useScrollAnimation<HTMLElement>()
  const postsRef = useScrollAnimation<HTMLElement>()
  const newsletterRef = useScrollAnimation<HTMLElement>()

  const filteredPosts =
    selectedCategory === "todos" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const searchedPosts = searchTerm
    ? filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    : filteredPosts

  return (
    <LayoutClientGeneral>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section
          ref={heroRef.ref}
          className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div
              className={`transition-all duration-1000 ${
                heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border border-white/30">
                <BookOpen className="w-5 h-5" />
                CONOCIMIENTO Y EXPERIENCIA
                <Heart className="w-5 h-5" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Nuestro <span className="text-blue-200">Blog</span> 📚
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                Artículos, consejos y recursos educativos para acompañarte en el hermoso viaje de la crianza y educación
                infantil
              </p>

              {/* Buscador */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar artículos, consejos, actividades..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg rounded-full border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías (sin stats) */}
        <section
          ref={categoriesRef.ref}
          className={`py-12 bg-white border-b border-gray-100 transition-all duration-1000 ${
            categoriesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-4">
                <Filter className="w-4 h-4" />
                Explora por categorías
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Encuentra el <span className="text-blue-600">contenido perfecto</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-sm hover:shadow-md ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category.id === "desarrollo" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : category.id === "consejos" ? (
                    <Heart className="w-4 h-4" />
                  ) : category.id === "actividades" ? (
                    <Tag className="w-4 h-4" />
                  ) : (
                    <BookOpen className="w-4 h-4" />
                  )}
                  {category.name}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      selectedCategory === category.id ? "bg-white/20" : "bg-gray-100"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Destacado */}
        <section className="py-20 bg-gradient-to-br from-blue-50/30 to-blue-100/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Artículo destacado
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Lo más <span className="text-blue-600">leído esta semana</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg?height=400&width=600&query=blog%20destacado"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    DESTACADO
                  </div>
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={featuredPost.authorImage || "/placeholder.svg?height=48&width=48&query=autor"}
                      alt={featuredPost.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

                  <div className="flex items-center gap-4 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-gray-500">
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        {featuredPost.likes}
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {featuredPost.comments}
                      </span>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Leer artículo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid de posts */}
        <section
          ref={postsRef.ref}
          className={`py-20 bg-white transition-all duration-1000 ${
            postsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Últimos <span className="text-blue-600">artículos</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mantente al día con nuestros consejos, recursos y experiencias en educación infantil
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchedPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=250&width=400&query=imagen%20blog"}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {categories.find((cat) => cat.id === post.category)?.name}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={post.authorImage || "/placeholder.svg?height=32&width=32&query=autor"}
                        alt={post.author}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-sm text-gray-500">
                        <div className="font-medium text-gray-700 flex items-center gap-2">
                          <UserIcon className="w-3.5 h-3.5" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium p-2"
                        >
                          Leer más
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section
          ref={newsletterRef.ref}
          className={`py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white relative overflow-hidden transition-all duration-1000 ${
            newsletterRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium mb-6">
              <Heart className="w-4 h-4" />
              ¡Mantente informado!
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Suscríbete a nuestro <span className="text-blue-200">newsletter</span> 📧
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Recibe los mejores consejos, artículos y recursos educativos directamente en tu correo cada semana
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-6 py-4 text-lg rounded-full border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-blue-300"
                />
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Suscribirme
                  <BookOpen className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-white/70 mt-4">
                No spam, solo contenido valioso. Puedes cancelar en cualquier momento.
              </p>
            </div>
          </div>
        </section>
      </main>
    </LayoutClientGeneral>
  )
}
