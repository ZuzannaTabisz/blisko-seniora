import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-secondary/50 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 -z-10 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-10 left-4 -z-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 md:pb-20 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Niekomercyjna inicjatywa społeczna
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.75rem]">
            Wiedza, wsparcie i codzienna{" "}
            <span className="relative">
              <span className="relative z-10">więź</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/70"
              />
            </span>{" "}
            dla seniorów
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            Dowiedz się, jak działa starzenie, zbuduj bliższe relacje rodzinne, lepiej rozmawiaj z osobami starszymi i znajdź wsparcie w okolicy — w jednym, przyjaznym miejscu.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/articles">
                Przeglądaj artykuły
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/map">
                <MapPin className="mr-1 h-4 w-4" />
                Znajdź wsparcie w pobliżu
              </Link>
            </Button>
          </div>

          <dl className="mt-6 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Artykułów
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold">25+</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Miast
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold">10</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Specjalistów
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold">12</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-xl md:aspect-[4/4.2]">
            <Image
              src="/hero-senior-family.jpg"
              alt="Starsza kobieta i jej rodzina oglądają wspólnie stare zdjęcia w albumie rodzinnym"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 hidden max-w-xs rounded-2xl border border-border bg-card p-4 shadow-lg md:block">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/60 text-accent-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Pomysł na dziś
                </p>
                <p className="mt-0.5 text-sm font-medium leading-snug">
                  Obejrzyjcie razem stary album rodzinny
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 right-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-md md:block">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Seniorzy w Polsce
            </p>
            <p className="mt-0.5 font-display text-lg font-semibold">
              ~10 mln osób 60+
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
