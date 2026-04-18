import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HeartHandshake } from "lucide-react"
import { caregiverTopics } from "@/data/caregiver"

export function CaregiverPreview() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src="/reading-feature.jpg"
              alt="Filiżanka herbaty i otwarta książka na drewnianym stole — cichy moment dla siebie"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -right-4 -top-4 rotate-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-md md:-right-6 md:-top-6 md:px-5 md:py-4">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Dla opiekunów
            </p>
            <p className="mt-0.5 font-display text-lg font-semibold">
              Najpierw tlen dla siebie
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <HeartHandshake className="h-3.5 w-3.5" />
            Strefa opiekuna
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
            Wsparcie innych nie powinno Cię wypalać.
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Jeśli opiekujesz się bliską osobą starszą — formalnie albo po prostu „bo trzeba” — ta strefa jest dla Ciebie. Znajdziesz tu praktyczne wskazówki, jak zadbać o siebie, stawiać granice i prosić o pomoc.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {caregiverTopics.slice(0, 4).map((t) => {
              const Icon = t.icon
              return (
                <li
                  key={t.title}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>

          <Link
            href="/caregiver"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
          >
            Przejdź do Strefy Opiekuna
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
