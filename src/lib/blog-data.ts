export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string // HTML simple para el detalle
  image: string
  author: string
  authorImage: string
  date: string // ISO o fecha legible
  readTime: string
  category: "educacion" | "desarrollo" | "consejos" | "actividades"
  tags: string[]
  likes: number
  comments: number
  featured?: boolean
}

export const categories = [
  { id: "todos", name: "Todos los artículos", icon: "book" },
  { id: "educacion", name: "Educación Infantil", icon: "book" },
  { id: "desarrollo", name: "Desarrollo Infantil", icon: "trending" },
  { id: "consejos", name: "Consejos para Padres", icon: "heart" },
  { id: "actividades", name: "Actividades", icon: "tag" },
] as const

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "como-fomentar-la-creatividad-2-a-5",
    title: "Cómo Fomentar la Creatividad en los Niños de 2 a 5 Años",
    excerpt:
      "Descubre técnicas efectivas y actividades prácticas para estimular la imaginación y creatividad de tu pequeño.",
    content: `
      <p>La creatividad es una habilidad fundamental que se desarrolla desde los primeros años de vida. A través del juego simbólico, el arte y la exploración sensorial, los niños construyen conexiones y adquieren confianza.</p>
      <h3>Actividades recomendadas</h3>
      <ul>
        <li>Juego libre con materiales abiertos (bloques, telas, cajas).</li>
        <li>Rincón de arte con pinturas lavables y papel reciclado.</li>
        <li>Lectura dialogada y creación de historias ilustradas.</li>
      </ul>
      <p>Recuerda: lo importante no es el resultado, sino el proceso creativo. Celebra sus intentos y fomenta la curiosidad.</p>
    `,
    image: "/images/aula-4.webp",
    author: "Dra. María González",
    authorImage: "/author-maria.png",
    date: "2024-01-15",
    readTime: "8 min lectura",
    category: "educacion",
    tags: ["creatividad", "desarrollo", "actividades"],
    likes: 45,
    comments: 12,
    featured: true,
  },
  {
    id: 2,
    slug: "importancia-del-juego-desarrollo-cognitivo",
    title: "La Importancia del Juego en el Desarrollo Cognitivo",
    excerpt:
      "El juego no es solo diversión, es la forma natural en que los niños aprenden y desarrollan habilidades esenciales.",
    content: `
      <p>El juego potencia la memoria, la atención y la resolución de problemas. Incorporar juegos de clasificación, construcción y simulación favorece el pensamiento lógico.</p>
      <p>Invita a tu hijo a explorar a su ritmo y acompaña con preguntas que abran su curiosidad.</p>
    `,
    image: "/cognitive-play-kids-blog.png",
    author: "Prof. Carlos Rodríguez",
    authorImage: "/author-carlos.png",
    date: "2024-01-12",
    readTime: "6 min lectura",
    category: "desarrollo",
    tags: ["juego", "cognitivo", "aprendizaje"],
    likes: 32,
    comments: 8,
  },
  {
    id: 3,
    slug: "rutinas-matutinas-facilitan-dia",
    title: "Rutinas Matutinas que Facilitan el Día en el Jardín",
    excerpt:
      "Establece rutinas efectivas que ayuden a tu hijo a comenzar el día con energía y entusiasmo.",
    content: `
      <p>Una rutina predecible aporta seguridad. Incluye desayuno nutritivo, higiene, elección de ropa y una despedida afectiva.</p>
      <p>Prepara la mochila la noche anterior para evitar prisas y tensiones.</p>
    `,
    image: "/blog-morning-routines-kids.png",
    author: "Ana Martínez",
    authorImage: "/author-ana.png",
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
    excerpt:
      "Explora actividades que involucran los sentidos para potenciar el desarrollo integral de los niños.",
    content: `
      <p>Las bandejas sensoriales con arroz, gelatina o arena cinética estimulan la exploración táctil y el lenguaje descriptivo.</p>
      <p>Integra olores suaves (vainilla, cítricos) y sonidos (instrumentos simples) para experiencias completas.</p>
    `,
    image: "/sensory-play-kids.png",
    author: "Dra. Laura Pérez",
    authorImage: "/author-laura.png",
    date: "2024-01-08",
    readTime: "7 min lectura",
    category: "actividades",
    tags: ["sensorial", "estimulación", "desarrollo"],
    likes: 41,
    comments: 9,
  },
  {
    id: 5,
    slug: "manejar-rabietas-forma-positiva",
    title: "Cómo Manejar las Rabietas de Forma Positiva",
    excerpt:
      "Estrategias efectivas para transformar los momentos difíciles en oportunidades de aprendizaje emocional.",
    content: `
      <p>Valida la emoción, pon límites claros y ofrece alternativas. Mantén la calma, modela respiración y ofrece un lugar tranquilo.</p>
      <p>Después, conversa brevemente sobre lo ocurrido y acuerden juntos una estrategia para la próxima vez.</p>
    `,
    image: "/positive-parenting-tantrums.png",
    author: "Psic. Roberto Silva",
    authorImage: "/author-roberto.png",
    date: "2024-01-05",
    readTime: "9 min lectura",
    category: "consejos",
    tags: ["emociones", "disciplina", "crianza"],
    likes: 56,
    comments: 23,
  },
  {
    id: 6,
    slug: "poder-de-la-lectura-primera-infancia",
    title: "El Poder de la Lectura en la Primera Infancia",
    excerpt:
      "Descubre cómo los cuentos y la lectura temprana impactan positivamente en el desarrollo del lenguaje.",
    content: `
      <p>La lectura diaria fortalece el vínculo y enriquece el vocabulario. Elige libros con imágenes claras y texto breve.</p>
      <p>Invita a predecir lo que sigue en la historia y a comentar personajes y emociones.</p>
    `,
    image: "/placeholder.svg?height=250&width=400",
    author: "Lic. Carmen Torres",
    authorImage: "/placeholder.svg?height=80&width=80",
    date: "2024-01-03",
    readTime: "6 min lectura",
    category: "educacion",
    tags: ["lectura", "lenguaje", "cuentos"],
    likes: 38,
    comments: 11,
  },
]

export function getAllPosts() {
  // Orden: destacados primero, luego por fecha desc
  const sorted = [...posts].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  return sorted
}

export function getFeaturedPost() {
  return posts.find((p) => p.featured) ?? posts[0]
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug)
  if (!current) return []
  const related = posts
    .filter((p) => p.slug !== slug && (p.category === current.category || p.tags.some(t => current.tags.includes(t))))
    .slice(0, limit)
  return related.length ? related : posts.filter((p) => p.slug !== slug).slice(0, limit)
}

export function formatHumanDate(iso: string) {
  try {
    const d = new Date(iso)
    return d.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
  } catch {
    return iso
  }
}
