import Link from "next/link"
import { MessageCircleQuestion, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/data/faq"

export const metadata = {
  title: "Najczęstsze pytania — Blisko Seniora",
  description:
    "Jak rozpoznać samotność, jak rozmawiać z osobą starszą, jak pomagać bez odbierania samodzielności i gdzie szukać wsparcia.",
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Najczęstsze pytania"
          title="Krótko i konkretnie — o samotności, rozmowie i pomaganiu"
          description="Odpowiedzi na pytania, które najczęściej słyszymy od osób dbających o bliskich seniorów. Jeśli Twojego pytania tu nie ma, napisz do nas."
        />

        <section className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <Accordion type="single" collapsible className="divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => (
              <AccordionItem key={f.question} value={`item-${i}`} className="border-b-0 px-5 md:px-7">
                <AccordionTrigger className="text-left font-display text-base font-semibold leading-snug md:text-lg">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-foreground/85 text-pretty">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  Nie znalazłaś / znalazłeś odpowiedzi?
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold leading-snug text-balance md:text-2xl">
                  Zadaj pytanie bezpośrednio specjaliście.
                </p>
              </div>
              <Link
                href="/ask"
                className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <MessageCircleQuestion className="h-4 w-4" />
                Zapytaj
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
