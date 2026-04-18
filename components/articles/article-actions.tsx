"use client"

import { useEffect, useState } from "react"
import { Bookmark, BookmarkCheck, Link2, Facebook, Twitter } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ArticleActions({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bs:favorites")
      const list: string[] = raw ? JSON.parse(raw) : []
      setSaved(list.includes(slug))
    } catch {
      /* ignore */
    }
  }, [slug])

  const toggleSave = () => {
    try {
      const raw = localStorage.getItem("bs:favorites")
      const list: string[] = raw ? JSON.parse(raw) : []
      let next: string[]
      if (list.includes(slug)) {
        next = list.filter((s) => s !== slug)
        setSaved(false)
        toast.success("Usunięto z ulubionych")
      } else {
        next = [...list, slug]
        setSaved(true)
        toast.success("Zapisano w ulubionych")
      }
      localStorage.setItem("bs:favorites", JSON.stringify(next))
    } catch {
      toast.error("Nie udało się zapisać")
    }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast.success("Link skopiowany")
    } catch {
      toast.error("Nie udało się skopiować linku")
    }
  }

  const shareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const shareX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        onClick={toggleSave}
        variant={saved ? "default" : "outline"}
        size="sm"
        className="rounded-full"
        aria-pressed={saved}
      >
        {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        {saved ? "Zapisany" : "Zapisz"}
      </Button>
      <Button onClick={copyLink} variant="outline" size="sm" className="rounded-full">
        <Link2 className="h-4 w-4" />
        Kopiuj link
      </Button>
      <Button onClick={shareFacebook} variant="ghost" size="icon" aria-label="Udostępnij na Facebooku" className="rounded-full">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button onClick={shareX} variant="ghost" size="icon" aria-label="Udostępnij w X" className="rounded-full">
        <Twitter className="h-4 w-4" />
      </Button>
    </div>
  )
}
