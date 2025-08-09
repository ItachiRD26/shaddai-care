import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, Heart, MessageCircle, ArrowLeft, BookOpen } from "lucide-react"
import LayoutClientGeneral from "@/components/layout/layoutclientG"
import ShareButton from "@/components/blog/share-button"
import { getPostBySlug, getRelatedPosts, formatHumanDate } from "@/lib/blog-data"

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Artículo no encontrado | Blog" }
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return notFound()
  const related = getRelatedPosts(slug, 3)

  return (
    <LayoutClientGeneral>
      <article className="bg-white">
        <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24 text-white">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>

            <div className="flex items-center gap-4 mb-6 text-white/90 text-sm flex-wrap">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatHumanDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{post.title}</h1>

            <div className="flex items-center gap-3 mt-6">
              {post.tags.slice(0, 4).map((t) => (
                <span key={t} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 pb-8">
            <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl -mt-4">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>
        </header>

        <section className="max-w-3xl mx-auto px-6 py-12 md:py-16 prose prose-blue prose-lg md:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-10 flex items-center justify-between border-t pt-6">
            <div className="text-gray-500 flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {post.likes}
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {post.comments}
              </span>
            </div>
            <ShareButton
              title={post.title}
              text={post.excerpt}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            />
          </div>
        </section>

        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 pb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Artículos relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full inline-flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {p.readTime}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{p.title}</h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{p.excerpt}</p>
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </LayoutClientGeneral>
  )
}
