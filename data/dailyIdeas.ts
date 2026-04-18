import type { LucideIcon } from "lucide-react"
import {
  Images,
  UtensilsCrossed,
  Footprints,
  PhoneCall,
  Flower2,
  Music2,
  NotebookPen,
  HandHeart,
  CakeSlice,
  Coffee,
  BookOpen,
  Sun,
  Heart,
  MailOpen,
} from "lucide-react"

export type Energy = "niska" | "średnia" | "wyższa"

export type DailyIdea = {
  title: string
  description: string
  why: string
  minutes: number
  energy: Energy
  icon: LucideIcon
  category: string
}

export const dailyIdeas: DailyIdea[] = [
  {
    title: "Obejrzyjcie razem stare zdjęcia",
    description:
      "Znajdź jeden album i usiądź obok, a nie naprzeciwko. Pytaj: kto to, gdzie to, co wtedy czuliście.",
    why: "Pamięć autobiograficzna w starszym wieku jest silna. Zdjęcia otwierają rozmowy, na które w codziennym kontakcie brakuje miejsca.",
    minutes: 30,
    energy: "niska",
    icon: Images,
    category: "Rodzina",
  },
  {
    title: "Ulepcie wspólnie pierogi",
    description: "Nawet 6 pierogów wystarczy. To nie o ilość — to o ręce obok siebie.",
    why: "Wspólne gotowanie łączy pokolenia i uruchamia pamięć ciała, która działa także tam, gdzie pamięć słów już słabnie.",
    minutes: 45,
    energy: "średnia",
    icon: UtensilsCrossed,
    category: "Relacje",
  },
  {
    title: "Wyjdźcie na 20-minutowy spacer",
    description: "Krótka pętla dookoła bloku albo do parku. Bez celu, bez pośpiechu.",
    why: "Regularny, krótki ruch poprawia sen i nastrój już po dwóch tygodniach. Wspólny — także Twój.",
    minutes: 20,
    energy: "średnia",
    icon: Footprints,
    category: "Aktywność",
  },
  {
    title: "Zadzwoń do kogoś, kto mieszka sam",
    description: "5 minut. Bez powodu. Wystarczy „dzwonię, żeby powiedzieć, że o Tobie myślę”.",
    why: "Badania pokazują, że krótki, nieoczekiwany telefon potrafi zmienić cały dzień osoby samotnej.",
    minutes: 5,
    energy: "niska",
    icon: PhoneCall,
    category: "Komunikacja",
  },
  {
    title: "Podlej razem kwiatki",
    description: "Przejdźcie się po wszystkich doniczkach w domu. Opowiadajcie, skąd które się wzięło.",
    why: "Opieka nad roślinami daje poczucie sprawczości i rytuału — szczególnie ważne po 70. roku życia.",
    minutes: 15,
    energy: "niska",
    icon: Flower2,
    category: "Rekreacja",
  },
  {
    title: "Posłuchajcie ulubionych piosenek z młodości",
    description: "Zapytaj o piosenkę, przy której się poznaliście, i puść ją głośno.",
    why: "Muzyka sprzed 40–60 lat zostaje w mózgu wyjątkowo głęboko. Otwiera emocje, które słowa nie potrafią.",
    minutes: 25,
    energy: "niska",
    icon: Music2,
    category: "Kultura",
  },
  {
    title: "Spiszcie jedno wspomnienie",
    description: "Wybierz jeden dzień z życia bliskiej osoby i zapisz go razem. Choćby na serwetce.",
    why: "Nagrywanie wspomnień bywa najcenniejszym prezentem dla wnuków. I najgłębszą rozmową, jaką macie w tygodniu.",
    minutes: 20,
    energy: "średnia",
    icon: NotebookPen,
    category: "Pamięć",
  },
  {
    title: "Zaproponuj pomoc, której nikt nie prosił",
    description: "Zanieś sąsiadce chleb. Wyrzuć komuś śmieci. Zadzwoń do koleżanki mamy.",
    why: "Akt „niezapytanej pomocy” buduje mikrosieć wsparcia, która chroni osoby starsze bardziej niż instytucje.",
    minutes: 10,
    energy: "niska",
    icon: HandHeart,
    category: "Wsparcie",
  },
  {
    title: "Upieczcie razem proste ciasto",
    description: "Drożdżowe, babka, racuchy — cokolwiek wymaga mieszania i czekania.",
    why: "Czekanie na ciasto to idealny moment na rozmowę — bez presji, z herbatą.",
    minutes: 60,
    energy: "wyższa",
    icon: CakeSlice,
    category: "Rodzina",
  },
  {
    title: "Napijcie się razem kawy bez telefonu",
    description: "Jedno krzesło, drugie krzesło, dwa kubki. Żadnych ekranów przez 15 minut.",
    why: "Obecność bez rozpraszaczy to rzadkie dziś doświadczenie. Dla seniora — często najważniejsza rzecz tygodnia.",
    minutes: 15,
    energy: "niska",
    icon: Coffee,
    category: "Relacje",
  },
  {
    title: "Przeczytajcie razem jeden rozdział",
    description: "Gazeta, opowiadanie, list od kogoś — cokolwiek. Zmieniajcie się co akapit.",
    why: "Wspólne czytanie 20 minut dziennie obniża poziom kortyzolu i buduje spokojny rytuał.",
    minutes: 20,
    energy: "niska",
    icon: BookOpen,
    category: "Kultura",
  },
  {
    title: "Usiądźcie na balkonie w ciszy",
    description: "Bez rozmowy. Słońce, ptaki, herbata. 10 minut razem.",
    why: "Cicha obecność jest formą bliskości, o której często zapominamy. Mówi: „jestem tu, nie muszę nic mówić”.",
    minutes: 10,
    energy: "niska",
    icon: Sun,
    category: "Psychologia",
  },
  {
    title: "Powiedz, co u Ciebie — naprawdę",
    description: "Seniorzy często czują się „relacją w jedną stronę”. Dziś odwróć to.",
    why: "Bycie potrzebnym — wysłuchanym jako ktoś, kto też ma swoje życie — to jeden z najlepszych leków na osamotnienie.",
    minutes: 20,
    energy: "niska",
    icon: Heart,
    category: "Komunikacja",
  },
  {
    title: "Napiszcie razem list do kogoś z przeszłości",
    description: "Do dawnego przyjaciela, nauczyciela, kuzyna. Nie trzeba go wysyłać.",
    why: "Już sam akt pisania działa terapeutycznie — porządkuje wspomnienia i zamyka niedokończone sprawy.",
    minutes: 30,
    energy: "średnia",
    icon: MailOpen,
    category: "Psychologia",
  },
]

export function getDailyIdea(date = new Date()): DailyIdea {
  // deterministic by day-of-year
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = Number(date) - Number(start)
  const dayOfYear = Math.floor(diff / 1000 / 60 / 60 / 24)
  return dailyIdeas[dayOfYear % dailyIdeas.length]
}
