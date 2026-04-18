"use client"

import { useMemo, useState } from "react"
import { Clock, Flame, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { dailyIdeas, getDailyIdea } from "@/data/dailyIdeas"

export function DailyIdea() {
  const today = useMemo(() => getDailyIdea(), [])
  const [idea, setIdea] = useState(today)

  const pickRandom = () => {
    let next = idea
    while (next === idea) {
      next = dailyIdeas[Math.floor(Math.random() * dailyIdeas.length)]
    }
    setIdea(next)
  }

  const dateLabel = new Date().toLocaleDateString("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  const Icon = idea.icon

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-secondary/60 blur-3xl"
        />

        <div className="relative grid gap-8 p-6 md:grid-cols-[1fr_1.4fr] md:p-10 lg:gap-12 lg:p-14">
          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Pomysł na dziś
            </span>
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground first-letter:uppercase">
              {dateLabel}
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
              Jedna mała rzecz, która dziś zbliża.
            </h2>
            <p className="text-muted-foreground text-pretty">
              Codziennie nowy pomysł na wspólną chwilę z bliską osobą starszą. Nie zajmuje wiele czasu, a bardzo wiele zmienia.
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              <Button onClick={pickRandom} variant="outline" className="rounded-full">
                <RotateCcw className="h-4 w-4" />
                Inny pomysł
              </Button>
              <Button asChild variant="ghost" className="rounded-full">
                <a href="/topics">Tematy do rozmów →</a>
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col rounded-2xl bg-background/80 p-6 ring-1 ring-border backdrop-blur md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-accent/50 text-accent-foreground ring-1 ring-accent/30">
                <Icon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  {idea.category}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-balance md:text-3xl">
                  {idea.title}
                </h3>
              </div>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-foreground/90 text-pretty">
              {idea.description}
            </p>

            <div className="mt-6 rounded-xl border border-border bg-muted/60 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">
                Dlaczego to działa
              </p>
              <p className="mt-1.5 text-sm text-foreground/80 text-pretty">
                {idea.why}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {idea.minutes} min
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Flame className="h-4 w-4" />
                energia: {idea.energy}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
