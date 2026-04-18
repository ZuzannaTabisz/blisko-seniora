import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Article } from "@/data/articles"
import { getCategory } from "@/data/categories"
import { getArticleImage } from "@/lib/article-images"

type Variant = "default" | "feature" | "compact"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function ArticleCard({
  article,
  variant = "default",
  className,
}: {
  article: Article
  variant?: Variant
  className?: string
}) {
  const cat = getCategory(article.category)
  const href = `/articles/${article.slug}`
  const imgSrc = getArticleImage(article.slug, article.category, article.image)

  if (variant === "feature") {
    return (
      <Link
        href={href}
        className={cn(
          "group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-0.5",
          className,
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
          <div className="relative aspect-[4/3] md:aspect-[3/4]">
            <Image
              src={imgSrc || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            {cat && (
              <span
                className={cn(
                  "absolute left-3 top-3 sm:left-4 sm:top-4 inline-flex items-center gap-1.5 rounded-full border bg-white/90 px-2.5 sm:px-3 py-1 text-xs font-medium backdrop-blur",
                  cat.color,
                )}
              >
                <cat.icon className="h-3.5 w-3.5" />
                {cat.name}
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Polecane dziś
              </p>
              <h3 className="mt-2 sm:mt-3 font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-balance">
                {article.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm md:text-base text-muted-foreground text-pretty line-clamp-3 md:line-clamp-none">
                {article.summary}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readingMinutes} min czytania
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-primary group-hover:gap-2 transition-all whitespace-nowrap">
                Przeczytaj <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={cn(
          "group flex gap-4 rounded-xl p-2 transition-colors hover:bg-muted",
          className,
        )}
      >
        <div className="relative h-20 w-24 flex-none overflow-hidden rounded-lg bg-muted">
          <Image
            src={imgSrc || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div className="min-w-0 flex-1">
          {cat && (
            <p className="text-xs font-medium text-primary">{cat.name}</p>
          )}
          <h4 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug group-hover:text-primary">
            {article.title}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            {article.readingMinutes} min · {formatDate(article.date)}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {cat && (
          <span
            className={cn(
              "absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border bg-white/90 px-2.5 py-1 text-xs font-medium backdrop-blur",
              cat.color,
            )}
          >
            <cat.icon className="h-3.5 w-3.5" />
            {cat.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-balance group-hover:text-primary">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground text-pretty">
          {article.summary}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {article.readingMinutes} min
          </span>
          <span>{formatDate(article.date)}</span>
        </div>
      </div>
    </Link>
  )
}
