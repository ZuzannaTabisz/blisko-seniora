import Link from "next/link"
import Image from "next/image"
import { Check, HeartHandshake, ArrowRight, Phone, MessageCircleQuestion } from "lucide-react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { caregiverTopics } from "@/data/caregiver"

export const metadata = {
  title: "Strefa opiekuna — Blisko Seniora",
  description:
    "Praktyczne wsparcie dla osób opiekujących się bliskimi seniorami. Wypalenie, granice, wsparcie rodziny i własna równowaga.",
}

export default function CaregiverPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Strefa opiekuna"
          title="Wsparcie innych nie powinno Cię wypalać."
          description="Jeśli opiekujesz się bliską osobą starszą, ta strefa jest dla Ciebie. Konkretne tematy, konkretne pierwsze kroki i przypomnienie, że opieka nad kimś zaczyna się od opieki nad sobą."
        />

        <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caregiverTopics.map((t, idx) => {
              const Icon = t.icon
              return (
                <article
                  key={t.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-md md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-balance">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {t.description}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      Pierwsze kroki
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {t.actions.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="border-y border-border bg-muted/30">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center lg:px-8 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <HeartHandshake className="h-3.5 w-3.5" />
                Najpierw tlen dla siebie
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Nie musisz dawać rady w pojedynkę.
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Opieka nad starzejącym się rodzicem albo partnerem to jedno z najtrudniejszych zadań, jakie może nas spotkać. Jeśli czujesz, że tracisz siły — to nie jest słabość, tylko ważna informacja, którą warto wziąć na poważnie.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/ask"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <MessageCircleQuestion className="h-4 w-4" />
                  Zadaj pytanie psychologowi
                </Link>
                <Link
                  href="/articles?category=opieka"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-muted"
                >
                  Artykuły dla opiekunów
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  Telefon wsparcia (przykładowy)
                </p>
                <a
                  href="tel:+48221234567"
                  className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-semibold hover:text-primary"
                >
                  <Phone className="h-5 w-5" />
                  +48 22 123 45 67
                </a>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pn–Pt 9:00–19:00. Rozmowa jest darmowa i anonimowa.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-muted">
                <Image
                  src="/team-nonprofit.jpg"
                  alt="Mała grupa osób ze społeczności NGO, wspierająca się wzajemnie w jasnej przestrzeni"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
              <div className="absolute -left-4 -bottom-4 max-w-xs rounded-2xl border border-border bg-card p-4 shadow-lg md:-left-6 md:-bottom-6 md:p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Grupy wsparcia
                </p>
                <p className="mt-0.5 text-sm font-medium leading-snug">
                  Spotkania dla opiekunów w 7 miastach w Polsce
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-2xl border border-accent/30 bg-accent/20 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground">
              Zapamiętaj
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug text-balance md:text-2xl">
              Najlepsza opieka to ta, która nie niszczy opiekuna.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 text-pretty">
              Jeśli zauważasz u siebie chroniczne zmęczenie, drażliwość, której wcześniej nie było, albo myśli „już nie daję rady” utrzymujące się dłużej niż dwa tygodnie — skontaktuj się z lekarzem rodzinnym albo psychologiem. To nie jest ekstrawagancja. To jest odpowiedzialność wobec siebie i osoby, którą się zajmujesz.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
