import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { articles } from "@/data/articles"
import { ArticleCard } from "@/components/article-card"

export function TodaysReading() {
  const feature = articles.slice().sort((a, b) => b.popularity - a.popularity)[0]
  const more = articles
    .filter((a) => a.slug !== feature.slug)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 2)

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Biblioteka wiedzy
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Warto przeczytać dziś
          </h2>
        </div>
        <Link
          href="/articles"
          className="hidden items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all sm:inline-flex"
        >
          Wszystkie artykuły <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <ArticleCard article={feature} variant="feature" />
        <div className="flex flex-col gap-6">
          {more.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
