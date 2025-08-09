export type BlogCategory = "educacion" | "desarrollo" | "consejos" | "actividades"

export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string // HTML controlado
  image: string
  author: string
  authorImage?: string
  date: string // ISO o legible
  readTime: string
  category: BlogCategory
  tags: string[]
  likes: number
  comments: number
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    id: 1,
    slug: "como-fomentar-la-creatividad-2-a-5",
    title: "Cómo Fomentar la Creatividad en los Niños de 2 a 5 Años",
    excerpt:
      "Técnicas efectivas y actividades prácticas para estimular la imaginación y creatividad en los primeros años.",
    content:
      "<p>La creatividad es una habilidad fundamental que se impulsa desde los primeros años. En este artículo exploramos actividades simples que puedes aplicar en casa y en el aula, materiales abiertos, y cómo reforzar la curiosidad con preguntas.</p><ul><li>Juegos simbólicos guiados</li><li>Materiales sensoriales seguros</li><li>Lectura dialogada</li></ul><p>Integra estas ideas poco a poco y observa el progreso.</p>",
    image: "/public/creativity-kids-blog.png",
    author: "Dra. María González",
    authorImage: "/public/author-maria.png",
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
      "El juego es la forma natural en que los niños aprenden y desarrollan habilidades esenciales para la vida.",
    content:
      "<p>El juego libre y estructurado potencia la memoria, la atención y la resolución de problemas. Presentamos actividades y ritmos recomendados por edades.</p>",
    image: "/public/cognitive-play-kids-blog.png",
    author: "Prof. Carlos Rodríguez",
    authorImage: "/public/author-carlos.png",
    date: "2024-01-12",
    readTime: "6 min lectura",
    category: "desarrollo",
    tags: ["juego", "cognitivo", "aprendizaje"],
    likes: 32,
    comments: 8,
  },
  {
    id: 3,
    slug: "rutinas-matutinas-para-el-jardin",
    title: "Rutinas Matutinas que Facilitan el Día en el Jardín",
    excerpt: "Establece rutinas efectivas para que tu hijo comience el día con energía y entusiasmo.",
    content:
      "<p>Una buena rutina reduce el estrés y mejora la adaptación. Te mostramos ejemplos por tramos de edad y tips para sostener hábitos.</p>",
    image: "/public/blog-morning-routines-kids.png",
    author: "Ana Martínez",
    authorImage: "/public/author-ana.png",
    date: "2024-01-10",
    readTime: "5 min lectura",
    category: "consejos",
    tags: ["rutinas", "mañana", "organizacion"],
    likes: 28,
    comments: 15,
  },
  {
    id: 4,
    slug: "actividades-sensoriales-para-aprender",
    title: "Actividades Sensoriales para Estimular el Aprendizaje",
    excerpt: "Explora propuestas que involucran los sentidos para potenciar el desarrollo integral de los niños.",
    content:
      "<p>Las bandejas sensoriales, estaciones de exploración y juegos de texturas ayudan al desarrollo neurosensorial.</p>",
    image: "/public/sensory-play-kids.png",
    author: "Dra. Laura Pérez",
    authorImage: "/public/author-laura.png",
    date: "2024-01-08",
    readTime: "7 min lectura",
    category: "actividades",
    tags: ["sensorial", "estimulación", "desarrollo"],
    likes: 41,
    comments: 9,
  },
  {
    id: 5,
    slug: "manejar-rabietas-de-forma-positiva",
    title: "Cómo Manejar las Rabietas de Forma Positiva",
    excerpt: "Estrategias efectivas para transformar momentos difíciles en oportunidades de aprendizaje emocional.",
    content:
      "<p>Validar emociones, anticipar situaciones y acordar señales reduce la intensidad de las rabietas y fortalece el vínculo.</p>",
    image: "/public/positive-parenting-tantrums.png",
    author: "Psic. Roberto Silva",
    authorImage: "/public/author-roberto.png",
    date: "2024-01-05",
    readTime: "9 min lectura",
    category: "consejos",
    tags: ["emociones", "disciplina", "crianza"],
    likes: 56,
    comments: 23,
  },
]

export function getAllPosts(): BlogPost[] {
  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return posts
    .filter((p) => p.slug !== slug && (p.category === current.category || p.tags.some((t) => current.tags.includes(t))))
    .slice(0, limit)
}

export function formatHumanDate(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString("es-DO", { year: "numeric", month: "long", day: "numeric" })
  } catch {
    return dateStr
  }
}
