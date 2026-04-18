import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { AskForm } from "@/components/ask/ask-form"
import { publicQuestions } from "@/data/questions"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Zapytaj specjalistę — Blisko Seniora",
  description:
    "Zadaj pytanie psychologowi, terapeucie rodzinnemu lub pracownikowi socjalnemu. Odpowiedź dostaniesz na e-mail.",
}

export default function AskPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Zapytaj specjalistę"
          title="Potrzebujesz wskazówki? Jesteśmy tu."
          description="Zadaj pytanie psychologowi, terapeucie rodzinnemu lub pracownikowi socjalnemu. Odpowiemy na Twojego maila. Jeśli zgodzisz się na publikację — anonimowo — Twoje pytanie i odpowiedź mogą pomóc innym."
        />

        <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <AskForm />
        </section>

        <section id="public" className="border-t border-border bg-muted/30">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Odpowiedzi specjalistów
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Pytania, które mogą być także Twoje
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty">
                Anonimowe pytania osób takich jak Ty, wraz z odpowiedziami psychologów, terapeutów i pracowników socjalnych.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {publicQuestions.map((q) => (
                <article
                  key={q.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 md:p-7"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {q.topic}
                    </span>
                  </div>
                  <p className="relative mt-4 font-display text-xl font-semibold leading-snug text-balance md:text-2xl">
                    <Quote className="absolute -left-1 -top-2 h-5 w-5 opacity-20" aria-hidden="true" />
                    {q.question}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/85 text-pretty">
                    {q.answer}
                  </p>
                  <footer className="mt-6 border-t border-border pt-4 text-sm">
                    <span className="font-semibold">{q.specialist}</span>
                    <span className="text-muted-foreground"> · {q.role}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
