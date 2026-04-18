import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { categories } from "@/data/categories"
import { cn } from "@/lib/utils"

export function CategoriesGrid() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Kategorie wiedzy
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Znajdź to, czego właśnie potrzebujesz
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.slice(0, 9).map((c) => {
          const Icon = c.icon
          return (
            <Link
              key={c.slug}
              href={`/articles?category=${c.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className={cn(
                  "flex h-12 w-12 flex-none items-center justify-center rounded-xl border",
                  c.color,
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-semibold">{c.name}</p>
                <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                  {c.description}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 flex-none text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
