"use client"

import { useState } from "react"
import { CheckCircle2, Lock, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const topics = [
  "Komunikacja z bliską osobą starszą",
  "Samotność i izolacja",
  "Opieka i wypalenie opiekuna",
  "Zdrowie i aktywność",
  "Pamięć, zapominanie, demencja",
  "Relacje rodzinne",
  "Inny temat",
]

type SavedAsk = {
  id: string
  name: string
  email: string
  topic: string
  question: string
  allowPublish: boolean
  submittedAt: string
}

export function AskForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [topic, setTopic] = useState<string>("")
  const [question, setQuestion] = useState("")
  const [allowPublish, setAllowPublish] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !topic || question.trim().length < 20) {
      toast.error("Wypełnij wszystkie pola. Pytanie powinno mieć przynajmniej 20 znaków.")
      return
    }
    setLoading(true)
    try {
      const entry: SavedAsk = {
        id: crypto.randomUUID(),
        name,
        email,
        topic,
        question,
        allowPublish,
        submittedAt: new Date().toISOString(),
      }
      const raw = localStorage.getItem("bs:asks")
      const list: SavedAsk[] = raw ? JSON.parse(raw) : []
      list.push(entry)
      localStorage.setItem("bs:asks", JSON.stringify(list))
      setTimeout(() => {
        setSubmitted(true)
        setLoading(false)
      }, 600)
    } catch {
      toast.error("Nie udało się zapisać. Spróbuj ponownie.")
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center md:p-14">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-balance md:text-3xl">
          Dziękujemy — pytanie do nas trafiło.
        </h3>
        <p className="mt-3 max-w-lg text-muted-foreground text-pretty">
          Odpowiedź wyślemy na adres <span className="font-medium text-foreground">{email}</span>{" "}
          w ciągu kilku dni roboczych. Jeśli zgodziłaś/eś się na publikację, może pomóc komuś w podobnej sytuacji.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            onClick={() => {
              setName("")
              setEmail("")
              setTopic("")
              setQuestion("")
              setAllowPublish(false)
              setSubmitted(false)
            }}
            variant="outline"
            className="rounded-full"
          >
            Zadaj kolejne pytanie
          </Button>
          <Button asChild className="rounded-full">
            <a href="#public">Przeczytaj odpowiedzi publiczne</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="ask-name">Imię</Label>
          <Input
            id="ask-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Twoje imię"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ask-email">Adres e-mail</Label>
          <Input
            id="ask-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="adres@domena.pl"
            required
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <Label htmlFor="ask-topic">Temat</Label>
          <Select value={topic} onValueChange={setTopic}>
            <SelectTrigger id="ask-topic">
              <SelectValue placeholder="Wybierz temat, którego dotyczy pytanie" />
            </SelectTrigger>
            <SelectContent>
              {topics.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <Label htmlFor="ask-question">Twoje pytanie</Label>
          <Textarea
            id="ask-question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Opisz sytuację, w której potrzebujesz wskazówki. Im więcej kontekstu, tym lepsza odpowiedź."
            required
            rows={6}
          />
          <p className="text-xs text-muted-foreground">
            {question.length}/1200 znaków. Minimum 20 znaków.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4">
        <Checkbox
          id="ask-publish"
          checked={allowPublish}
          onCheckedChange={(v) => setAllowPublish(Boolean(v))}
          className="mt-0.5"
        />
        <Label htmlFor="ask-publish" className="cursor-pointer text-sm leading-relaxed text-foreground/85">
          Zgadzam się na anonimową publikację mojego pytania wraz z odpowiedzią specjalisty, jeśli może pomóc innym osobom w podobnej sytuacji.
        </Label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Twoje dane są u nas bezpieczne i nie trafią do nikogo trzeciego.
        </p>
        <Button type="submit" size="lg" disabled={loading} className="rounded-full">
          <Send className="h-4 w-4" />
          {loading ? "Wysyłanie…" : "Wyślij pytanie"}
        </Button>
      </div>
    </form>
  )
}
