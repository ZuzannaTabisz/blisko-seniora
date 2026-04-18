export type LocationType =
  | "spolecznosc"
  | "aktywnosc"
  | "psychologia"
  | "kultura"
  | "wolontariat"
  | "opiekun"

export type Location = {
  id: string
  name: string
  city: string
  address: string
  type: LocationType
  description: string
  lat: number
  lng: number
  phone?: string
  hours?: string
}

export const locationTypeLabels: Record<LocationType, string> = {
  spolecznosc: "Społeczność",
  aktywnosc: "Aktywność",
  psychologia: "Wsparcie psychologiczne",
  kultura: "Kultura",
  wolontariat: "Pomoc wolontariacka",
  opiekun: "Wsparcie opiekuna",
}

export const locations: Location[] = [
  {
    id: "warszawa-centrum-seniora",
    name: "Warszawskie Centrum Seniora",
    city: "Warszawa",
    address: "ul. Nowy Świat 22, 00-029 Warszawa",
    type: "spolecznosc",
    description:
      "Codzienne zajęcia, kawiarnia międzypokoleniowa i cotygodniowe spotkania przy herbacie. Otwarte dla każdego.",
    lat: 52.2322,
    lng: 21.018,
    phone: "22 123 45 67",
    hours: "Pn–Pt 9:00–18:00, Sb 10:00–14:00",
  },
  {
    id: "poznan-dom-sasiedzki",
    name: "Dom Sąsiedzki „Razem”",
    city: "Poznań",
    address: "ul. Święty Marcin 58, 61-807 Poznań",
    type: "spolecznosc",
    description:
      "Miejsce spotkań sąsiedzkich: warsztaty, wspólne gotowanie, kluby filmowe i grupy wsparcia.",
    lat: 52.4064,
    lng: 16.9252,
    phone: "61 222 33 44",
    hours: "Pn–Pt 10:00–20:00",
  },
  {
    id: "krakow-hub-wolontariatu",
    name: "Krakowski Hub Wolontariatu",
    city: "Kraków",
    address: "ul. Karmelicka 18, 31-133 Kraków",
    type: "wolontariat",
    description:
      "Łączymy wolontariuszy z seniorami w dzielnicy. Pomoc w zakupach, towarzystwo, wspólne spacery.",
    lat: 50.0647,
    lng: 19.9330,
    phone: "12 555 66 77",
    hours: "Pn–Pt 11:00–19:00",
  },
  {
    id: "wroclaw-aktywny-senior",
    name: "Klub „Aktywny Senior” Wrocław",
    city: "Wrocław",
    address: "ul. Świdnicka 8b, 50-067 Wrocław",
    type: "aktywnosc",
    description:
      "Gimnastyka, joga na krześle, nordic walking, taniec w kręgu. Wszystko dopasowane do możliwości.",
    lat: 51.1079,
    lng: 17.0385,
    phone: "71 333 44 55",
    hours: "Pn–Pt 8:00–16:00",
  },
  {
    id: "gdansk-rodzinne-wsparcie",
    name: "Gdańskie Centrum Wsparcia Rodziny",
    city: "Gdańsk",
    address: "ul. Długa 45, 80-831 Gdańsk",
    type: "psychologia",
    description:
      "Konsultacje psychologiczne dla seniorów i ich rodzin. Grupy wsparcia dla opiekunów osób starszych.",
    lat: 54.3498,
    lng: 18.6536,
    phone: "58 321 65 87",
    hours: "Pn–Pt 9:00–19:00",
  },
  {
    id: "lodz-kultura-50plus",
    name: "Łódź 50+ Kultura",
    city: "Łódź",
    address: "ul. Piotrkowska 104, 90-006 Łódź",
    type: "kultura",
    description:
      "Spotkania literackie, koncerty popołudniowe i warsztaty filmowe — wstęp wolny dla osób powyżej 60. roku życia.",
    lat: 51.7592,
    lng: 19.4559,
    phone: "42 111 22 33",
    hours: "Wt–Nd 11:00–19:00",
  },
  {
    id: "lublin-wsparcie-opiekuna",
    name: "Lubelska Grupa Wsparcia Opiekunów",
    city: "Lublin",
    address: "ul. Krakowskie Przedmieście 62, 20-076 Lublin",
    type: "opiekun",
    description:
      "Cotygodniowe spotkania dla osób opiekujących się bliskimi seniorami. Bezpieczna przestrzeń i rozmowa.",
    lat: 51.2465,
    lng: 22.5684,
    phone: "81 456 78 90",
    hours: "Wt i Cz 17:00–20:00",
  },
  {
    id: "katowice-klub-seniora",
    name: "Klub Seniora Katowice",
    city: "Katowice",
    address: "ul. Mariacka 15, 40-014 Katowice",
    type: "aktywnosc",
    description:
      "Codzienne zajęcia ruchowe, wspólne śniadania i wyjścia do kina raz w tygodniu.",
    lat: 50.2604,
    lng: 19.0200,
    phone: "32 987 65 43",
    hours: "Pn–Pt 9:00–17:00",
  },
  {
    id: "bialystok-most-pokolen",
    name: "Most Pokoleń — Białystok",
    city: "Białystok",
    address: "ul. Lipowa 35, 15-424 Białystok",
    type: "wolontariat",
    description:
      "Program łączenia młodych wolontariuszy z samotnymi seniorami w formie cotygodniowych wizyt.",
    lat: 53.1325,
    lng: 23.1688,
    phone: "85 654 32 10",
    hours: "Pn–Pt 10:00–18:00",
  },
  {
    id: "szczecin-spokojna-przystan",
    name: "Spokojna Przystań Szczecin",
    city: "Szczecin",
    address: "al. Wojska Polskiego 30, 70-473 Szczecin",
    type: "psychologia",
    description:
      "Poradnia psychologiczna specjalizująca się w problemach osób starszych i ich rodzin.",
    lat: 53.4285,
    lng: 14.5528,
    phone: "91 432 10 98",
    hours: "Pn–Pt 9:00–19:00",
  },
]
