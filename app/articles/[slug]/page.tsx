import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, UserRound } from "lucide-react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { articles, getArticle, getRelatedArticles } from "@/data/articles"
import { getCategory } from "@/data/categories"
import { getArticleImage } from "@/lib/article-images"
import { ReadingProgress } from "@/components/articles/reading-progress"
import { ArticleActions } from "@/components/articles/article-actions"
import { ArticleCard } from "@/components/article-card"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)
  if (!article) return { title: "Artykuł — Blisko Seniora" }
  return {
    title: `${article.title} — Blisko Seniora`,
    description: article.summary,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  const cat = getCategory(article.category)
  const related = getRelatedArticles(article.slug, 3)

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main>
        <article className="mx-auto w-full max-w-3xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Wszystkie artykuły
          </Link>

          <header className="mt-6 flex flex-col gap-4">
            {cat && (
              <Link
                href={`/articles?category=${cat.slug}`}
                className={cn(
                  "inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
                  cat.color,
                )}
              >
                <cat.icon className="h-3.5 w-3.5" />
                {cat.name}
              </Link>
            )}
            <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">{article.summary}</p>

            <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4" />
                {article.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readingMinutes} min czytania
              </span>
            </div>
          </header>

          <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src={getArticleImage(article.slug, article.category, article.image)}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </div>

          <div className="mt-6 border-y border-border py-4">
            <ArticleActions slug={article.slug} title={article.title} />
          </div>

          <div className="prose prose-lg mt-10 max-w-none">
            {article.content.map((p, i) => (
              <p
                key={i}
                className="mb-5 text-[17px] leading-[1.7] text-foreground/90 first:first-letter:float-left first:first-letter:mr-2 first:first-letter:font-display first:first-letter:text-5xl first:first-letter:font-semibold first:first-letter:leading-none first:first-letter:text-primary"
              >
                {p}
              </p>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-secondary-foreground">
              Mały krok na dziś
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug text-balance md:text-2xl">
              Wybierz jedną rzecz z tego tekstu i zastosuj ją jeszcze dzisiaj. Drobne gesty wygrywają z wielkimi planami.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/topics"
                className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Wygeneruj tematy do rozmowy
              </Link>
              <Link
                href="/ask"
                className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold hover:bg-muted"
              >
                Zadaj pytanie specjaliście
              </Link>
            </div>
          </aside>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border bg-muted/30">
            <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
              <div className="flex items-end justify-between gap-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  Powiązane artykuły
                </h2>
                <Link
                  href="/articles"
                  className="hidden text-sm font-medium text-primary hover:underline sm:inline-flex"
                >
                  Wszystkie →
                </Link>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <ArticleCard key={r.slug} article={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
