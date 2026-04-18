"use client"

import { useEffect, useState } from "react"
import { RefreshCw, Sparkles, Lightbulb, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getRandomTopics, topicPrompts, type TopicPrompt } from "@/data/topicPrompts"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const categoryColors: Record<TopicPrompt["category"], string> = {
  dzieciństwo: "bg-amber-50 text-amber-800 border-amber-100",
  praca: "bg-sky-50 text-sky-700 border-sky-100",
  rodzina: "bg-emerald-50 text-emerald-700 border-emerald-100",
  kultura: "bg-violet-50 text-violet-700 border-violet-100",
  miejsca: "bg-teal-50 text-teal-700 border-teal-100",
  mądrość: "bg-rose-50 text-rose-700 border-rose-100",
  codzienność: "bg-lime-50 text-lime-800 border-lime-100",
}

export function TopicsGenerator() {
  const [topics, setTopics] = useState<TopicPrompt[]>([])
  const [count, setCount] = useState(0)
  const [copied, setCopied] = useState<number | null>(null)

  useEffect(() => {
    setTopics(getRandomTopics(5))
  }, [])

  const regenerate = () => {
    setTopics(getRandomTopics(5))
    setCount((c) => c + 1)
  }

  const copy = async (t: TopicPrompt, idx: number) => {
    try {
      await navigator.clipboard.writeText(t.text)
      setCopied(idx)
      toast.success("Skopiowano temat")
      setTimeout(() => setCopied(null), 1600)
    } catch {
      toast.error("Nie udało się skopiować")
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Generator tematów
          </span>
          <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">
            Losowa piątka pytań, które warto dziś zadać.
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground md:text-base text-pretty">
            Nie musisz pytać o wszystko. Wybierz jedno, które Cię zaciekawi — i daj czas na odpowiedź.
          </p>
          <Button onClick={regenerate} size="lg" className="mt-2 rounded-full">
            <RefreshCw className={cn("h-4 w-4", count > 0 && "animate-spin-once")} />
            Wylosuj ponownie
          </Button>
          {count > 0 && (
            <p className="text-xs text-muted-foreground">Wylosowano {count + 1} razy</p>
          )}
        </div>

        <ol className="mt-10 grid gap-4">
          {topics.map((t, i) => (
            <li
              key={`${t.text}-${i}`}
              className="group relative flex gap-4 rounded-2xl border border-border bg-background p-5 transition-all md:p-6"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-base font-semibold">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start gap-2">
                  <p className="font-display text-lg font-semibold leading-snug text-balance md:text-xl">
                    {t.text}
                  </p>
                  <span className={cn("ml-auto rounded-full border px-2.5 py-0.5 text-[11px] font-medium", categoryColors[t.category])}>
                    {t.category}
                  </span>
                </div>
                {t.hint && (
                  <p className="mt-2 inline-flex items-start gap-1.5 text-sm text-muted-foreground">
                    <Lightbulb className="mt-0.5 h-4 w-4 flex-none text-accent-foreground" />
                    <span>{t.hint}</span>
                  </p>
                )}
              </div>
              <Button
                onClick={() => copy(t, i)}
                variant="ghost"
                size="icon"
                className="absolute right-3 top-3 h-8 w-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                aria-label="Kopiuj temat"
              >
                {copied === i ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-muted/40 p-5 text-sm">
          <p className="font-display text-base font-semibold">Jak z tego korzystać</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
            <li>Wybierz jedno pytanie, które czujesz, że w tej osobie obudzi ciekawość.</li>
            <li>Zadaj je „przy okazji” — przy herbacie, przy zmywaniu, w drodze.</li>
            <li>Nie pośpieszaj odpowiedzi. Najciekawsze rzeczy wypływają po pauzie.</li>
            <li>Zapisz, co usłyszysz — rodzinne opowieści bywają lepsze niż niejedna książka.</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Baza liczy {topicPrompts.length} pytań. Kolejność za każdym razem jest inna.
          </p>
        </div>
      </div>
    </div>
  )
}
