import type { LucideIcon } from "lucide-react"
import {
  HeartPulse,
  Brain,
  Users,
  Activity,
  Home,
  MessageCircle,
  BookOpen,
  Palette,
  HandHeart,
  Smile,
  UsersRound,
} from "lucide-react"

export type CategorySlug =
  | "zdrowie"
  | "psychologia"
  | "relacje"
  | "aktywnosc"
  | "rodzina"
  | "komunikacja"
  | "kultura"
  | "rekreacja"
  | "opieka"
  | "pamiec"
  | "samotnosc"
  | "wsparcie"

export type Category = {
  slug: CategorySlug
  name: string
  description: string
  icon: LucideIcon
  color: string // Tailwind bg classes for badge/icon chip
}

export const categories: Category[] = [
  {
    slug: "zdrowie",
    name: "Zdrowie",
    description: "Profilaktyka, codzienne nawyki i zdrowe starzenie się",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    slug: "psychologia",
    name: "Psychologia",
    description: "Emocje, rozumienie starzenia i dobre samopoczucie",
    icon: Brain,
    color: "bg-sky-50 text-sky-700 border-sky-100",
  },
  {
    slug: "relacje",
    name: "Relacje",
    description: "Budowanie bliskości z osobami starszymi",
    icon: Users,
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    slug: "aktywnosc",
    name: "Aktywność fizyczna",
    description: "Ruch dostosowany do wieku i możliwości",
    icon: Activity,
    color: "bg-lime-50 text-lime-700 border-lime-100",
  },
  {
    slug: "rodzina",
    name: "Rodzina",
    description: "Międzypokoleniowe więzi i codzienne rytuały",
    icon: Home,
    color: "bg-amber-50 text-amber-800 border-amber-100",
  },
  {
    slug: "komunikacja",
    name: "Komunikacja",
    description: "Jak rozmawiać, słuchać i być obecnym",
    icon: MessageCircle,
    color: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    slug: "kultura",
    name: "Kultura",
    description: "Książki, muzyka, teatr i wspólne odkrywanie",
    icon: BookOpen,
    color: "bg-violet-50 text-violet-700 border-violet-100",
  },
  {
    slug: "rekreacja",
    name: "Rekreacja",
    description: "Spacery, hobby i radość z prostych chwil",
    icon: Palette,
    color: "bg-orange-50 text-orange-700 border-orange-100",
  },
  {
    slug: "opieka",
    name: "Opieka",
    description: "Praktyczna wiedza dla opiekunek i opiekunów",
    icon: HandHeart,
    color: "bg-teal-50 text-teal-700 border-teal-100",
  },
  {
    slug: "pamiec",
    name: "Pamięć",
    description: "Ćwiczenia, ciekawostki i wsparcie pamięci",
    icon: Smile,
    color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100",
  },
  {
    slug: "samotnosc",
    name: "Samotność",
    description: "Rozumienie i łagodzenie osamotnienia",
    icon: UsersRound,
    color: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
  {
    slug: "wsparcie",
    name: "Wsparcie",
    description: "Gdzie szukać pomocy i jak ją przyjąć",
    icon: HandHeart,
    color: "bg-stone-50 text-stone-700 border-stone-200",
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
