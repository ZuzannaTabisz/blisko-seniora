"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) {
      toast.error("Uzupełnij wszystkie wymagane pola.")
      return
    }
    setLoading(true)
    try {
      const raw = localStorage.getItem("bs:contacts")
      const list = raw ? JSON.parse(raw) : []
      list.push({ id: crypto.randomUUID(), name, email, subject, message, at: new Date().toISOString() })
      localStorage.setItem("bs:contacts", JSON.stringify(list))
      setTimeout(() => {
        setSubmitted(true)
        setLoading(false)
      }, 600)
    } catch {
      toast.error("Nie udało się wysłać wiadomości.")
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-balance">
          Dziękujemy za wiadomość.
        </h3>
        <p className="mt-3 max-w-md text-muted-foreground text-pretty">
          Odezwiemy się w ciągu 2 dni roboczych. Jeśli masz pilną sprawę, zadzwoń pod numer podany obok.
        </p>
        <Button
          onClick={() => {
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            setSubmitted(false)
          }}
          variant="outline"
          className="mt-6 rounded-full"
        >
          Wyślij kolejną wiadomość
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="c-name">Imię i nazwisko</Label>
          <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="c-email">Adres e-mail</Label>
          <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor="c-subject">Temat</Label>
        <Input id="c-subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Krótki temat wiadomości" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor="c-message">Wiadomość</Label>
        <Textarea
          id="c-message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="W czym możemy pomóc?"
          required
        />
      </div>
      <div className="mt-6 flex items-center justify-end">
        <Button type="submit" size="lg" disabled={loading} className="rounded-full">
          <Send className="h-4 w-4" />
          {loading ? "Wysyłanie…" : "Wyślij wiadomość"}
        </Button>
      </div>
    </form>
  )
}
