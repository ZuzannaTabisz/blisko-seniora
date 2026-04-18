import Image from "next/image"
import { Mail, Phone, Clock, MapPin, Linkedin, Facebook } from "lucide-react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Kontakt — Blisko Seniora",
  description:
    "Skontaktuj się z zespołem Blisko Seniora. E-mail, telefon, godziny pracy i formularz kontaktowy.",
}

const contactItems = [
  {
    icon: Mail,
    label: "E-mail",
    value: "kontakt@bliskoseniora.pl",
    href: "mailto:kontakt@bliskoseniora.pl",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 22 123 45 67",
    href: "tel:+48221234567",
  },
  {
    icon: Clock,
    label: "Godziny pracy",
    value: "Pn–Pt, 9:00–17:00",
  },
  {
    icon: MapPin,
    label: "Siedziba",
    value: "ul. Przyjazna 10, 00-001 Warszawa",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Kontakt"
          title="Napisz do nas. Chętnie usłyszymy Twoją historię."
          description="Jesteśmy niekomercyjną inicjatywą. Jeśli prowadzisz organizację wspierającą seniorów, chcesz dołączyć do sieci lub zgłosić miejsce na mapę — zapraszamy do kontaktu."
        />

        <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.2fr] md:gap-14 lg:px-8 lg:py-20">
          <aside className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src="/team-nonprofit.jpg"
                alt="Zespół Blisko Seniora — ciepłe ujęcie zespołu w przestrzeni organizacji"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>

            <ul className="grid gap-2">
              {contactItems.map((c) => {
                const Icon = c.icon
                const inner = (
                  <span className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="block text-sm font-semibold">{c.value}</span>
                    </span>
                  </span>
                )
                return (
                  <li key={c.label} className="rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/50">
                    {c.href ? (
                      <a href={c.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-4">
              <span className="text-sm font-medium">Znajdź nas</span>
              <span className="mx-2 h-4 w-px bg-border" />
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 hover:bg-muted hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 hover:bg-muted hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-xl border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
              Jeśli sytuacja jest pilna i dotyczy zdrowia, zadzwoń pod numer alarmowy 112 lub na pogotowie — nie jesteśmy placówką medyczną.
            </div>
          </aside>

          <div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
