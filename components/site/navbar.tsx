"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { categories } from "@/data/categories"

const primaryLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/articles", label: "Artykuły" },
]

const secondaryLinks = [
  { href: "/map", label: "Mapa wsparcia" },
  { href: "/ask", label: "Zapytaj specjalistę" },
  { href: "/topics", label: "O czym rozmawiać" },
  { href: "/caregiver", label: "Strefa opiekuna" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontakt" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent transition-all",
        scrolled
          ? "border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:h-[72px] lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors text-center justify-center",
                isActive(l.href)
                  ? "bg-secondary text-secondary-foreground"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none">
                Wiedza
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[320px] p-2">
              <div className="grid grid-cols-2 gap-1">
                {categories.slice(0, 8).map((c) => (
                  <DropdownMenuItem key={c.slug} asChild className="rounded-md">
                    <Link
                      href={`/articles?category=${c.slug}`}
                      className="flex items-center gap-2"
                    >
                      <span className={cn("flex h-7 w-7 items-center justify-center rounded-md border", c.color)}>
                        <c.icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm">{c.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuItem asChild className="mt-1 rounded-md">
                <Link href="/articles" className="text-sm font-medium text-primary">
                  Zobacz wszystkie kategorie →
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {secondaryLinks.slice(0, 4).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors text-center justify-center inline-flex items-center",
                isActive(l.href)
                  ? "bg-secondary text-secondary-foreground"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <Link href="/contact">Kontakt</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full">
            <Link href="/ask">Zadaj pytanie</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {[...primaryLinks, ...secondaryLinks].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium",
                    isActive(l.href)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground/80 hover:bg-muted",
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" className="flex-1 rounded-full">
                <Link href="/contact">Kontakt</Link>
              </Button>
              <Button asChild className="flex-1 rounded-full">
                <Link href="/ask">Zadaj pytanie</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
