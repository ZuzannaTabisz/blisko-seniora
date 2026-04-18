"use client"

import { useMemo, useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { Search, Filter, X, SlidersHorizontal } from "lucide-react"
import { articles as allArticles } from "@/data/articles"
import { categories } from "@/data/categories"
import { ArticleCard } from "@/components/article-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type SortMode = "newest" | "popular"

export function ArticlesLibrary() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const initialCategory = searchParams.get("category") ?? "all"
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortMode>("newest")

  useEffect(() => {
    setActiveCategory(searchParams.get("category") ?? "all")
  }, [searchParams])

  const setCategory = (slug: string) => {
    setActiveCategory(slug)
    const params = new URLSearchParams(searchParams.toString())
    if (slug === "all") params.delete("category")
    else params.set("category", slug)
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
  }

  const filtered = useMemo(() => {
    let list = allArticles.slice()
    if (activeCategory !== "all") {
      list = list.filter((a) => a.category === activeCategory)
    }
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q),
      )
    }
    if (sort === "newest") {
      list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else {
      list.sort((a, b) => b.popularity - a.popularity)
    }
    return list
  }, [activeCategory, query, sort])

  const activeCatObj = categories.find((c) => c.slug === activeCategory)

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj artykułów, np. „samotność”, „rozmowa”…"
              className="h-11 rounded-full border-border bg-card pl-10"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Wyczyść"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground hover:bg-muted"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sortuj:</span>
            <div className="inline-flex rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setSort("newest")}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  sort === "newest"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted",
                )}
              >
                Najnowsze
              </button>
              <button
                onClick={() => setSort("popular")}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  sort === "popular"
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:bg-muted",
                )}
              >
                Popularne
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Filter className="h-3.5 w-3.5" />
            Kategoria
          </div>
          <button
            onClick={() => setCategory("all")}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              activeCategory === "all"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground/80 hover:bg-muted",
            )}
          >
            Wszystkie
          </button>
          {categories.map((c) => {
            const isActive = activeCategory === c.slug
            return (
              <button
                key={c.slug}
                onClick={() => setCategory(c.slug)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/80 hover:bg-muted",
                )}
              >
                <c.icon className="h-3.5 w-3.5" />
                {c.name}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "artykuł" : filtered.length > 1 && filtered.length < 5 ? "artykuły" : "artykułów"}
            {activeCatObj && (
              <>
                {" "}w kategorii{" "}
                <span className="font-medium text-foreground">{activeCatObj.name}</span>
              </>
            )}
          </p>
          {(activeCategory !== "all" || query) && (
            <Button
              onClick={() => {
                setCategory("all")
                setQuery("")
              }}
              variant="ghost"
              size="sm"
              className="rounded-full"
            >
              <X className="h-3.5 w-3.5" />
              Wyczyść filtry
            </Button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
          <h3 className="font-display text-xl font-semibold">Nic nie znaleźliśmy</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Spróbuj zmienić kategorię lub słowa w wyszukiwarce.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  )
}
