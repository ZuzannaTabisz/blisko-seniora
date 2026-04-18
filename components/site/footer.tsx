import Link from "next/link"
import { Logo } from "./logo"
import { Heart, Mail, Phone } from "lucide-react"

const columns = [
  {
    title: "Serwis",
    links: [
      { href: "/articles", label: "Biblioteka artykułów" },
      { href: "/map", label: "Mapa wsparcia" },
      { href: "/ask", label: "Zapytaj specjalistę" },
      { href: "/topics", label: "O czym rozmawiać" },
    ],
  },
  {
    title: "Dla opiekunów",
    links: [
      { href: "/caregiver", label: "Strefa opiekuna" },
      { href: "/articles?category=opieka", label: "Artykuły o opiece" },
      { href: "/articles?category=psychologia", label: "Psychologia" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Organizacja",
    links: [
      { href: "/contact", label: "Kontakt" },
      { href: "/faq", label: "O inicjatywie" },
      { href: "#", label: "Polityka prywatności" },
      { href: "#", label: "Regulamin" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="rounded-3xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-3xl font-semibold leading-tight text-balance md:text-4xl">
                Razem możemy sprawić, że starzenie się będzie bardziej bliskie.
              </p>
              <p className="mt-3 text-primary-foreground/80 text-pretty">
                Dołącz do wspólnoty osób, którym zależy. Wystarczy jedna rozmowa w tygodniu, żeby zrobić realną różnicę.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/articles"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Zacznij od artykułów
              </Link>
              <Link
                href="/map"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10"
              >
                Znajdź wsparcie lokalnie
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Niekomercyjna inicjatywa społeczna wspierająca seniorów, rodziny, opiekunów i sąsiadów w codziennym budowaniu bliskości.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href="mailto:kontakt@bliskoseniora.pl"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                kontakt@bliskoseniora.pl
              </a>
              <br />
              <a
                href="tel:+48221234567"
                className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +48 22 123 45 67
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="inline-flex items-center gap-1.5">
            Zrobione z <Heart className="h-3.5 w-3.5 text-accent-foreground" /> w Polsce — © {new Date().getFullYear()} Blisko Seniora
          </p>
          <p>MVP. Materiały mają charakter informacyjny i nie zastępują konsultacji medycznej ani psychologicznej.</p>
        </div>
      </div>
    </footer>
  )
}
