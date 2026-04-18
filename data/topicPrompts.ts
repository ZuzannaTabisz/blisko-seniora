export type TopicPrompt = {
  text: string
  hint?: string
  category: "dzieciństwo" | "praca" | "rodzina" | "kultura" | "miejsca" | "mądrość" | "codzienność"
}

export const topicPrompts: TopicPrompt[] = [
  {
    text: "Jakie było Twoje najszczęśliwsze wspomnienie z dzieciństwa?",
    hint: "Pytaj o zapachy i dźwięki — nie tylko o fakty.",
    category: "dzieciństwo",
  },
  {
    text: "Jak wyglądała Twoja pierwsza praca?",
    hint: "Zapytaj, co było najtrudniejsze, a co najlepsze.",
    category: "praca",
  },
  {
    text: "Jaki jest najważniejszy rodzinny przepis kuchenny?",
    hint: "Zapisz go razem — to może być rodzinny skarb.",
    category: "rodzina",
  },
  {
    text: "Jaka piosenka przypomina Ci młodość?",
    hint: "Puść ją i posłuchajcie razem.",
    category: "kultura",
  },
  {
    text: "Jaką najważniejszą lekcję dało Ci życie?",
    hint: "Daj czas — to pytanie otwiera najciekawsze odpowiedzi po pauzie.",
    category: "mądrość",
  },
  {
    text: "Gdzie chciałbyś wrócić, gdybyś mógł wybrać jedno miejsce z przeszłości?",
    category: "miejsca",
  },
  {
    text: "Jak poznałeś/poznałaś swojego współmałżonka?",
    hint: "Klasyk, który prawie zawsze otwiera długą rozmowę.",
    category: "rodzina",
  },
  {
    text: "Kto był dla Ciebie najważniejszym nauczycielem życia?",
    category: "mądrość",
  },
  {
    text: "Jak spędzaliście święta, kiedy byłeś mały?",
    category: "dzieciństwo",
  },
  {
    text: "Co dziś zrobiło Ci dobrze?",
    hint: "Proste pytanie na codzień — otwiera rozmowę bez presji.",
    category: "codzienność",
  },
  {
    text: "Jaką książkę lub film pamiętasz najbardziej?",
    category: "kultura",
  },
  {
    text: "O czym marzyłeś, mając 20 lat?",
    category: "dzieciństwo",
  },
  {
    text: "Jaki jest Twój najbardziej udany dzień w ciągu ostatniego roku?",
    category: "codzienność",
  },
  {
    text: "Co chciałbyś, żebyśmy zapamiętali po Tobie?",
    hint: "To głębokie pytanie — zadaj je tylko w spokojnym momencie.",
    category: "mądrość",
  },
  {
    text: "Jakie święto z dzieciństwa było najważniejsze w Twojej rodzinie?",
    category: "rodzina",
  },
  {
    text: "Gdzie po raz pierwszy wyjechałeś daleko?",
    category: "miejsca",
  },
  {
    text: "Co zawsze Cię rozśmieszało, kiedy byłeś dzieckiem?",
    category: "dzieciństwo",
  },
  {
    text: "Jaki film widzieliście razem w kinie, pamiętasz jego tytuł?",
    category: "kultura",
  },
]

export function getRandomTopics(count = 5): TopicPrompt[] {
  const copy = [...topicPrompts]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}
