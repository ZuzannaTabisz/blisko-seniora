import type { LucideIcon } from "lucide-react"
import { Flame, Scale, Users, HeartCrack, SplitSquareHorizontal } from "lucide-react"

export type CaregiverTopic = {
  title: string
  description: string
  actions: string[]
  icon: LucideIcon
}

export const caregiverTopics: CaregiverTopic[] = [
  {
    title: "Chroń się przed wypaleniem",
    description:
      "Wypalenie opiekuna narasta powoli. Zanim zauważysz, jak znika Twoja cierpliwość, umów z samym sobą stały czas tylko dla siebie — choćby 30 minut dziennie.",
    actions: [
      "Zapisz 3 oznaki zmęczenia, które u siebie widzisz",
      "Zaplanuj jedną rzecz tylko dla siebie w tym tygodniu",
      "Umów wizytę u lekarza rodzinnego, jeśli nie byłaś/eś dłużej niż rok",
    ],
    icon: Flame,
  },
  {
    title: "Granice i równowaga",
    description:
      "Granice nie są ścianą — są ogrodzeniem z furtką. Im jaśniej określisz, co możesz, a czego nie, tym łatwiej utrzymać bliską relację bez poczucia winy.",
    actions: [
      "Sformułuj jedno konkretne „tak” i jedno konkretne „nie”",
      "Przekaż je najbliższym jasno i raz, nie domyślaj się za innych",
      "Zaakceptuj, że poczucie winy jest normalnym towarzyszem — nie dowodem błędu",
    ],
    icon: Scale,
  },
  {
    title: "Poproś o pomoc",
    description:
      "Opieka nie jest zadaniem dla jednej osoby. Im wcześniej zbudujesz mikrosieć wsparcia — rodzina, przyjaciele, lokalne organizacje — tym dłużej utrzymasz siłę.",
    actions: [
      "Zrób listę 3 rzeczy, z których możesz zostać odciążona/y w tym tygodniu",
      "Wyślij ją jednej zaufanej osobie",
      "Sprawdź lokalne grupy wsparcia opiekunów — stacjonarne lub online",
    ],
    icon: Users,
  },
  {
    title: "Zmęczenie emocjonalne",
    description:
      "Opiekowanie się kimś, kto się zmienia, boli. Żałoba przy życiu — to prawdziwe uczucie, zwłaszcza przy demencji. Nazwanie go to pierwszy krok do łagodzenia.",
    actions: [
      "Pozwól sobie na smutek, który pojawia się między dobrymi chwilami",
      "Porozmawiaj o tym z kimś, kto był w podobnej sytuacji",
      "Rozważ kilka spotkań z psychologiem — to inwestycja w obie strony relacji",
    ],
    icon: HeartCrack,
  },
  {
    title: "Dzielenie się obowiązkami",
    description:
      "Jeśli w rodzinie jest więcej osób, ciężar rzadko rozkłada się sam. Warto wprost porozmawiać, kto co bierze na siebie, zanim narasta cicha pretensja.",
    actions: [
      "Umów rodzinną rozmowę — w neutralnym miejscu, bez pośpiechu",
      "Spisz listę zadań i kto je dziś wykonuje",
      "Podzielcie obowiązki tak, by nikt nie był „domyślnym opiekunem”",
    ],
    icon: SplitSquareHorizontal,
  },
]
