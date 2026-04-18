import Link from "next/link"
import { MessageCircleQuestion, ArrowRight, ShieldCheck } from "lucide-react"
import { publicQuestions } from "@/data/questions"

export function AskCta() {
  const sample = publicQuestions[0]

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-6 text-primary-foreground shadow-lg md:p-12 lg:p-16">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-secondary/30 blur-3xl"
        />

        <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
              <MessageCircleQuestion className="h-3.5 w-3.5" />
              Zapytaj specjalistę
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">
              Potrzebujesz wskazówki, jak wspierać bliską osobę starszą?
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/85 text-pretty">
              Zadaj pytanie psychologowi, pracownikowi socjalnemu lub terapeucie rodzin. Odpowiedź dostaniesz na maila. Jeśli wyrazisz zgodę, opublikujemy ją anonimowo, by pomogła komuś w podobnej sytuacji.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/ask"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Zadaj pytanie
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ask#public"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10"
              >
                Przeczytaj odpowiedzi
              </Link>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-xs text-primary-foreground/70">
              <ShieldCheck className="h-3.5 w-3.5" />
              Odpowiada zespół specjalistów. Pytania prywatne pozostają prywatne.
            </p>
          </div>

          <blockquote className="relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
              Przykładowe pytanie z bazy
            </p>
            <p className="mt-3 font-display text-xl font-semibold leading-snug md:text-2xl">
              „{sample.question}”
            </p>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85 line-clamp-4">
              {sample.answer}
            </p>
            <footer className="mt-5 text-sm font-medium">
              — {sample.specialist}
              <span className="text-primary-foreground/70"> · {sample.role}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
