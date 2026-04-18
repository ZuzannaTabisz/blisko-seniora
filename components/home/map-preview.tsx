import Link from "next/link"
import { ArrowRight, MapPin, Users, Coffee, HandHeart } from "lucide-react"
import { locations } from "@/data/locations"

const highlightCities = ["Warszawa", "Kraków", "Poznań", "Wrocław", "Gdańsk", "Łódź"]

export function MapPreview() {
  const featured = locations.filter((l) => highlightCities.includes(l.city)).slice(0, 5)

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-[1fr_1.2fr] md:p-10 lg:gap-14 lg:p-14">
        <div className="flex flex-col">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Mapa wsparcia
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Znajdź miejsca przyjazne seniorom w swoim mieście
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Kluby seniora, grupy wolontariuszy, wsparcie psychologiczne i miejsca, gdzie można po prostu spędzić czas z innymi. Wszystko na jednej, prostej mapie.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              { icon: Users, text: "Społeczności i kluby sąsiedzkie" },
              { icon: HandHeart, text: "Pomoc wolontariacka i opieka" },
              { icon: Coffee, text: "Kawiarnie i spotkania międzypokoleniowe" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground/80">{item.text}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/map"
            className="mt-10 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Otwórz mapę wsparcia
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-[#eaf1ec]">
          {/* Stylized map illustration */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(30,80,70,0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#grid)" />
            {/* Country-like shapes */}
            <path
              d="M40,90 C70,70 120,60 170,75 C220,90 260,70 300,85 C340,100 370,130 360,170 C350,210 310,240 260,245 C210,250 170,230 130,235 C90,240 50,215 40,180 C30,145 15,110 40,90 Z"
              fill="#d9e8de"
              stroke="#b5ccbe"
              strokeWidth="1.5"
            />
            <path
              d="M110,110 Q160,100 210,115 T310,140"
              fill="none"
              stroke="rgba(30,80,70,0.15)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          </svg>

          <div className="relative grid h-full gap-3 p-5 sm:p-6">
            <div className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {locations.length} miejsc w Polsce
            </div>

            <ul className="mt-auto flex flex-col gap-2">
              {featured.map((loc) => (
                <li
                  key={loc.id}
                  className="flex items-start gap-3 rounded-xl border border-border bg-background/95 p-3 shadow-sm backdrop-blur"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{loc.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{loc.city} · {loc.address.split(",")[0]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
