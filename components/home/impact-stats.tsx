import { Users, HeartPulse, Sprout } from "lucide-react"

const stats = [
  {
    value: "10 mln+",
    label: "Osób w wieku 60+ w Polsce",
    description:
      "Polska należy do najszybciej starzejących się społeczeństw w Europie. Coraz więcej rodzin szuka rzetelnej wiedzy i wsparcia.",
    icon: Users,
  },
  {
    value: "26%",
    label: "Wyższe ryzyko zdrowotne",
    description:
      "Chroniczna samotność, według metaanaliz, zwiększa ryzyko przedwczesnej śmierci porównywalnie z paleniem 15 papierosów dziennie.",
    icon: HeartPulse,
  },
  {
    value: "7 min",
    label: "Rozmowa dziennie robi różnicę",
    description:
      "Krótkie, regularne kontakty — telefon, wiadomość głosowa, kawa — to jedno z najlepiej udokumentowanych narzędzi profilaktyki.",
    icon: Sprout,
  },
]

export function ImpactStats() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Dlaczego to ważne
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Samotność osób starszych to nie emocjonalny drobiazg. To zdrowotna i społeczna sprawa.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <article
              key={s.label}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md md:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-foreground">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {s.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
