import type { CategorySlug } from "./categories"

export type Article = {
  slug: string
  title: string
  summary: string
  category: CategorySlug
  readingMinutes: number
  date: string // ISO
  author: string
  image: string
  popularity: number // 0-100 for sort by popular
  content: string[] // paragraphs
}

export const articles: Article[] = [
  {
    slug: "jak-rozmawiac-z-rodzicem-ktory-czuje-sie-samotny",
    title: "Jak rozmawiać z rodzicem, który czuje się samotny",
    summary:
      "Pięć prostych zasad, które pomagają rozpocząć rozmowę bez naciskania i bez poczucia winy — po obu stronach.",
    category: "komunikacja",
    readingMinutes: 6,
    date: "2025-03-14",
    author: "Anna Kowalska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 97,
    content: [
      "Samotność osób starszych rzadko zaczyna się od braku ludzi wokół. Częściej bierze się z braku rozmów, w których ktoś naprawdę słucha. Jeśli masz wrażenie, że Twój rodzic zamyka się w sobie, pierwszy krok nie wymaga wielkich słów — wystarczy obecność.",
      "Zanim zaczniesz pytać „co u ciebie?”, spróbuj zrobić coś razem. Zmywanie, sortowanie zdjęć, krótki spacer. Rozmowa przychodzi sama, kiedy ręce są zajęte. Psycholodzy nazywają to rozmową równoległą — i działa wyjątkowo dobrze z osobami starszymi.",
      "Unikaj pytań zamkniętych („jadłaś coś?”, „brałeś leki?”). Zamień je na otwarte: „co dziś najbardziej Cię ucieszyło?”, „czego Ci ostatnio brakuje?”. Dajesz wtedy przestrzeń, a nie listę kontrolną.",
      "Nie naprawiaj. To najtrudniejsze. Kiedy bliska osoba mówi, że jest jej ciężko, pokusa, żeby „załatwić” problem, jest ogromna. Ale samotność nie jest zadaniem do odhaczenia. Jest emocją, która potrzebuje usłyszenia.",
      "Umawiaj małe, regularne rytuały. Telefon w środowe wieczory. Niedzielna kawa. Stałość daje poczucie bezpieczeństwa i coś, na co można czekać — a to jest w tym wieku bezcenne.",
    ],
  },
  {
    slug: "dlaczego-samotnosc-szkodzi-zdrowiu-tak-bardzo-jak-palenie",
    title: "Dlaczego samotność szkodzi zdrowiu tak bardzo jak palenie",
    summary:
      "Badania pokazują, że chroniczna samotność zwiększa ryzyko chorób serca, demencji i depresji. Co z tym zrobić?",
    category: "zdrowie",
    readingMinutes: 8,
    date: "2025-02-28",
    author: "dr Piotr Malinowski",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 92,
    content: [
      "Metaanaliza obejmująca setki tysięcy uczestników wykazała, że osoby chronicznie samotne mają o 26% wyższe ryzyko przedwczesnej śmierci. To porównywalne z paleniem 15 papierosów dziennie.",
      "Mechanizm jest fizjologiczny: samotność podnosi poziom kortyzolu, zwiększa stan zapalny w organizmie i utrudnia sen. W dłuższej perspektywie to realne obciążenie serca i układu odpornościowego.",
      "Dobra wiadomość jest taka, że drobne codzienne kontakty — rozmowa z sąsiadem, wspólne zakupy, krótki telefon — mają działanie ochronne. Nie chodzi o wielkie gesty, tylko o regularność.",
    ],
  },
  {
    slug: "spacer-ktory-leczy-20-minut-dziennie",
    title: "Spacer, który leczy. Jak 20 minut dziennie zmienia wszystko",
    summary:
      "Regularny, krótki ruch poprawia nastrój, sen i pamięć. Jak wprowadzić go do codziennej rutyny seniora?",
    category: "aktywnosc",
    readingMinutes: 5,
    date: "2025-03-02",
    author: "Magdalena Wiśniewska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 85,
    content: [
      "20 minut spokojnego marszu dziennie obniża ciśnienie, poprawia krążenie i — co ważne — zauważalnie poprawia nastrój już po dwóch tygodniach regularności.",
      "Najlepiej sprawdzają się spacery o stałej porze, najlepiej w towarzystwie. Wspólne tempo, wspólny cel, krótka rozmowa po drodze — to właśnie tworzy rytuał.",
      "Jeśli poruszanie się sprawia trudność, zacznij od 5 minut. Każdy dzień ruchu to dzień, w którym ciało mówi „jeszcze tu jestem”.",
    ],
  },
  {
    slug: "zdjecia-ktore-otwieraja-rozmowe",
    title: "Zdjęcia, które otwierają rozmowę",
    summary:
      "Stary album rodzinny to jedno z najlepszych narzędzi komunikacyjnych. Oto dlaczego i jak go używać.",
    category: "rodzina",
    readingMinutes: 4,
    date: "2025-02-15",
    author: "Katarzyna Nowak",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 78,
    content: [
      "Pamięć autobiograficzna u osób starszych jest często silniejsza niż pamięć bieżąca. Zdjęcia sprzed lat otwierają świat, o którym łatwiej opowiadać niż o dzisiejszym dniu.",
      "Usiądź obok, a nie naprzeciwko. Wskazuj palcem i pytaj: „kto to jest?”, „gdzie to było?”, „co wtedy czuliście?”. To nie test pamięci — to zaproszenie do historii.",
      "Nagrywaj. Jeśli bliska osoba się zgadza, zapisz dźwięk rozmowy. To nieoceniony prezent — dla Ciebie i dla wnuków, które dopiero przyjdą.",
    ],
  },
  {
    slug: "demencja-jak-rozmawiac-gdy-bliski-zaczyna-zapominac",
    title: "Demencja: jak rozmawiać, gdy bliski zaczyna zapominać",
    summary:
      "Praktyczne wskazówki dla rodzin: co mówić, czego unikać i jak zachować spokój, gdy sytuacja się zmienia.",
    category: "pamiec",
    readingMinutes: 9,
    date: "2025-01-22",
    author: "dr Ewa Lipińska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 88,
    content: [
      "Pierwszą rzeczą, o której warto pamiętać, jest to, że demencja nie odbiera człowieka — odbiera mu narzędzia, którymi się dotąd komunikował. Emocje zostają. I one są mostem.",
      "Zamiast „pamiętasz?”, mów „pamiętam, jak…”. Przenosisz wtedy ciężar pamiętania na siebie i dajesz przestrzeń do wspólnego przeżywania, a nie odpytywania.",
      "Nie koryguj każdego błędu. Jeśli bliska osoba mówi, że idzie do pracy, a jest na emeryturze 20 lat — spytaj: „to co dziś robisz w pracy?”. Wejście w świat drugiej osoby często uspokaja bardziej niż konfrontacja.",
    ],
  },
  {
    slug: "sasiedzka-pomoc-jak-zbudowac-mikrosiec-wsparcia",
    title: "Sąsiedzka pomoc: jak zbudować mikrosieć wsparcia",
    summary:
      "Nie musisz być rodziną, żeby realnie pomóc. Trzy pomysły na sąsiedzką obecność, która naprawdę działa.",
    category: "wsparcie",
    readingMinutes: 5,
    date: "2025-03-08",
    author: "Tomasz Zieliński",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 74,
    content: [
      "W wielu polskich blokach sąsiedzi mijają się latami i nie wiedzą, kto za ścianą jest samotny. A to właśnie mikrospołeczność potrafi najszybciej zareagować, kiedy dzieje się coś złego.",
      "Najprostszy krok: zostaw karteczkę z imieniem i numerem telefonu u sąsiadów powyżej 70 roku życia. „Gdyby coś Pani/Panu było potrzebne — proszę dzwonić o każdej porze.” Tyle wystarczy.",
      "Druga propozycja: wspólne zakupy w soboty. Raz na dwa tygodnie pytasz, czy coś przywieźć. Po roku takich gestów nikt w Twoim podwórku nie będzie już „niewidzialny”.",
    ],
  },
  {
    slug: "jak-zachecic-starszego-rodzica-do-aktywnosci-bez-nacisku",
    title: "Jak zachęcić starszego rodzica do aktywności bez nacisku",
    summary:
      "„Musisz się ruszać” prawie nigdy nie działa. Co działa? Zaproszenie i towarzyszenie.",
    category: "psychologia",
    readingMinutes: 6,
    date: "2025-02-10",
    author: "Marta Krajewska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 81,
    content: [
      "Poczucie autonomii jest jednym z najważniejszych zasobów późnej dorosłości. Kiedy bliscy zaczynają „kazać”, naturalnie pojawia się opór.",
      "Zamiast instrukcji — zaproszenie. „Idę w sobotę nad rzekę, dołączysz?”. Zamiast krytyki — partnerstwo. „Pokażesz mi, jak robi się te pierogi, od dawna chciałam się nauczyć.”",
      "Aktywność, która ma sens i kogoś obok, wraca sama. Wymuszona — nie wraca prawie nigdy.",
    ],
  },
  {
    slug: "muzyka-mlodosci-jako-klucz-do-emocji",
    title: "Muzyka młodości jako klucz do emocji",
    summary:
      "Piosenki sprzed 50 lat potrafią cofnąć człowieka w czasie szybciej niż jakiekolwiek zdjęcie. I to ma terapeutyczną moc.",
    category: "kultura",
    readingMinutes: 5,
    date: "2025-01-30",
    author: "Jakub Szymański",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 76,
    content: [
      "Neurobiolodzy nazywają to zjawiskiem rezonansu muzycznego. Piosenki, których słuchaliśmy między 15. a 25. rokiem życia, zostają w mózgu wyjątkowo głęboko — i potrafią obudzić wspomnienia nawet przy zaawansowanej demencji.",
      "Zrób wspólną playlistę. Zapytaj: „jaka piosenka grała, kiedy poznaliście się z tatą?”. Puść ją. Czasem wystarczą pierwsze nuty, żeby otworzyć rozmowę, której nie było od lat.",
    ],
  },
  {
    slug: "wypalenie-opiekuna-objawy-i-pierwsza-pomoc",
    title: "Wypalenie opiekuna: objawy i pierwsza pomoc",
    summary:
      "Jeśli opiekujesz się bliską osobą starszą, ten tekst jest o Tobie. O tym, jak nie zgubić siebie po drodze.",
    category: "opieka",
    readingMinutes: 10,
    date: "2025-03-18",
    author: "dr Agnieszka Dąbrowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 94,
    content: [
      "Wypalenie opiekuna narasta powoli i niemal niezauważalnie. Najpierw znika Twoja cierpliwość, potem sen, potem radość z rzeczy, które kiedyś cieszyły. To nie jest słabość. To sygnał organizmu.",
      "Zasada numer jeden: opieka nad kimś zaczyna się od opieki nad sobą. To nie egoizm — to logistyka. Osoba wyczerpana nie jest w stanie być obecna ani czuła.",
      "Poproś o pomoc zanim będziesz musiał/a. Zrób listę trzech rzeczy, z których mógłby Ci ktoś odciążyć w tym tygodniu. I wyślij ją jednej zaufanej osobie.",
    ],
  },
  {
    slug: "granice-w-relacji-z-rodzicem-seniorem",
    title: "Granice w relacji z rodzicem seniorem",
    summary:
      "Jak pomagać, nie tracąc siebie — i jak mówić „nie”, nie tracąc bliskości.",
    category: "psychologia",
    readingMinutes: 7,
    date: "2025-02-05",
    author: "Olga Mazurek",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 83,
    content: [
      "Granice nie są ścianą. Są ogrodzeniem z furtką. Kiedy ją masz, łatwiej otwierać ją z miłością — a nie ze strachu czy winy.",
      "Sformułuj swoje „tak” i swoje „nie”. „Tak, przyjadę we wtorek. Nie, nie mogę codziennie po pracy.” Konkret ratuje relacje.",
      "Poczucie winy jest naturalne. Nie oznacza, że robisz coś złego. Oznacza, że Ci zależy.",
    ],
  },
  {
    slug: "jak-pomoc-starszej-osobie-nie-odbierajac-jej-samodzielnosci",
    title: "Jak pomóc starszej osobie, nie odbierając jej samodzielności",
    summary:
      "Wyręczanie bywa krzywdzące, nawet jeśli wypływa z miłości. Jak wspierać, a nie zastępować?",
    category: "relacje",
    readingMinutes: 6,
    date: "2025-02-22",
    author: "Barbara Jankowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 80,
    content: [
      "Samodzielność to jeden z ostatnich bastionów poczucia wartości w starszym wieku. Każda rzecz zrobiona „za” bliską osobę może być subtelnym odebraniem tego poczucia.",
      "Pytanie kluczowe: czy pomagam, bo nie może, czy dlatego, że mi tak szybciej? Uczciwa odpowiedź zmienia codzienność.",
    ],
  },
  {
    slug: "czego-nie-mowic-osobie-ktora-stracila-wspolmalzonka",
    title: "Czego nie mówić osobie, która straciła współmałżonka",
    summary:
      "„Dasz radę” i „to już minęło” potrafią zranić bardziej niż milczenie. Oto, co pomaga naprawdę.",
    category: "psychologia",
    readingMinutes: 5,
    date: "2025-01-18",
    author: "Monika Piotrowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 72,
    content: [
      "Żałoba po stracie partnera nie ma kalendarza. Rok, dwa, pięć — każda historia ma swój rytm. Najlepsze, co możesz dać, to obecność bez presji.",
      "Zamiast „jak się trzymasz?” — „jak dziś?”. Zamiast „wszystko będzie dobrze” — „jestem przy Tobie”. Mniej słów, więcej siedzenia obok.",
    ],
  },
  {
    slug: "cyfrowy-wiek-jak-uczyc-smartfona-z-cierpliwoscia",
    title: "Cyfrowy wiek: jak uczyć smartfona z cierpliwością",
    summary:
      "Nie wszyscy nadążają za technologią, ale każdy ma prawo być w grupowym czacie rodziny.",
    category: "komunikacja",
    readingMinutes: 7,
    date: "2025-03-10",
    author: "Rafał Kamiński",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 77,
    content: [
      "Każda lekcja zaczyna się od „po co?”. Pokaż efekt: zdjęcie wnuka, film od córki, wiadomość głosową od kolegi z dawnych lat. Motywacja bierze się z sensu, nie z instrukcji.",
      "Ucz jednej rzeczy na spotkanie. Telefon to abstrakcyjne urządzenie — 10 minut, jedna funkcja, zapisana na kartce wielkimi literami. Następnym razem druga.",
    ],
  },
  {
    slug: "aktywnosci-ktore-lacza-pokolenia",
    title: "Aktywności, które łączą pokolenia",
    summary:
      "Nie musi być wielkiego wyjazdu. Wspólne pieczenie, ogród, planszówki — oto lista sprawdzonych pomysłów.",
    category: "rodzina",
    readingMinutes: 4,
    date: "2025-02-18",
    author: "Hanna Lewandowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 82,
    content: [
      "Rytuały są ważniejsze niż atrakcje. Niedzielny obiad, wtorek z wnuczką, sobotni targ z tatą — to tworzy więź.",
      "Przygotuj listę ulubionych wspólnych zajęć, dostępnych niezależnie od pogody i zdrowia. Kiedy masz słabszy dzień, nie musisz wtedy nic wymyślać.",
    ],
  },
  {
    slug: "kiedy-samotnosc-staje-sie-depresja",
    title: "Kiedy samotność staje się depresją — sygnały ostrzegawcze",
    summary:
      "Jak rozpoznać moment, w którym „zamyślenie” przechodzi w coś, co wymaga specjalisty.",
    category: "samotnosc",
    readingMinutes: 8,
    date: "2025-01-12",
    author: "dr Paweł Górski",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 86,
    content: [
      "Depresja u osób starszych często nie wygląda jak depresja. Nie ma płaczu, nie ma dramatu — jest obojętność, brak apetytu i zdania typu „mam już tego dość”.",
      "Jeśli bliska osoba powtarza takie rzeczy przez ponad dwa tygodnie, to nie jest „zły nastrój”. To sygnał, żeby umówić wizytę u lekarza rodzinnego lub psychiatry geriatrycznego.",
    ],
  },
  {
    slug: "jak-zaprosic-seniora-do-wolontariatu",
    title: "Jak zaprosić seniora do wolontariatu",
    summary:
      "Bycie potrzebnym to jeden z najlepszych leków na samotność. Oto, jak otwierać drzwi, zamiast pchać.",
    category: "wsparcie",
    readingMinutes: 5,
    date: "2025-03-01",
    author: "Iwona Szczepańska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 70,
    content: [
      "Seniorzy są niedocenionym zasobem większości polskich miast. Znajomość lokalnej historii, cierpliwość, czas — to kompetencje, których nie da się kupić.",
      "Zacznij od pasji, nie od organizacji. „Kto chciałby uczyć dzieci szydełkowania raz w tygodniu?” brzmi zupełnie inaczej niż „zapraszamy do wolontariatu”.",
    ],
  },
  {
    slug: "czytanie-na-glos-forma-bliskosci",
    title: "Czytanie na głos — prosta forma bliskości",
    summary:
      "Nie tylko dla dzieci. Wspólne czytanie z rodzicem seniorem ma zaskakująco głęboki wpływ.",
    category: "kultura",
    readingMinutes: 4,
    date: "2025-02-12",
    author: "Jadwiga Borkowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 68,
    content: [
      "Wspólna lektura 20 minut dziennie obniża poziom kortyzolu u obu osób. Nie musi to być powieść — może być fragment gazety, wiersz, list.",
      "Zmieniajcie się co akapit. Kiedy wzrok słabnie, słuchanie staje się prezentem. A lektor/ka — kimś oczekiwanym.",
    ],
  },
  {
    slug: "ogrod-jako-terapia",
    title: "Ogród jako terapia. Dlaczego rośliny pomagają",
    summary:
      "Hortiterapia nie jest modą — to udokumentowane narzędzie pracy z osobami starszymi.",
    category: "rekreacja",
    readingMinutes: 5,
    date: "2025-03-05",
    author: "Elżbieta Wróbel",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 71,
    content: [
      "Kontakt z roślinami obniża tętno, poprawia sen i daje poczucie sprawczości. Doniczka z bazylią na parapecie może być początkiem.",
      "Zaproś bliską osobę do opieki nad jedną rośliną — nie całym ogrodem. Odpowiedzialność za życie, które zależy od Ciebie, jest jednym z najgłębszych źródeł sensu.",
    ],
  },
  {
    slug: "rodzinne-spotkania-swiateczne-bez-napiec",
    title: "Rodzinne spotkania świąteczne bez napięć",
    summary:
      "Jak zadbać o seniorów w trakcie dużych, hałaśliwych spotkań i dlaczego ma to duże znaczenie.",
    category: "rodzina",
    readingMinutes: 6,
    date: "2025-01-05",
    author: "Ewa Zawadzka",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 66,
    content: [
      "Duża, głośna rodzina bywa wyzwaniem dla osoby starszej — nie dlatego, że „nie lubi”, tylko dlatego, że układ nerwowy po 70. roku życia szybciej się męczy.",
      "Zapewnij ciche miejsce, do którego można się wycofać na 15 minut. To nie ucieczka — to higiena uwagi. Wróci spokojniejsza i bardziej obecna.",
    ],
  },
  {
    slug: "jak-mowic-o-smierci-w-rodzinie",
    title: "Jak mówić o śmierci w rodzinie",
    summary:
      "Temat, którego unikamy najbardziej — a który seniorzy często chcą z nami omówić.",
    category: "psychologia",
    readingMinutes: 9,
    date: "2025-02-08",
    author: "dr Zofia Makowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 79,
    content: [
      "Wielu seniorów myśli o końcu życia spokojniej niż ich dzieci. Chcą powiedzieć, co dla nich ważne, pożegnać się z rzeczami, pozostawić ład.",
      "Rozmowa o woli, o pogrzebie, o pamiątkach, nie skraca życia — a bardzo często je porządkuje. Zacznij od „czy jest coś, o czym chciał(a)byś mi kiedyś powiedzieć, na spokojnie?”.",
    ],
  },
  {
    slug: "wsparcie-finansowe-i-formalne-dla-seniora",
    title: "Wsparcie finansowe i formalne dla seniora — przewodnik",
    summary:
      "Świadczenia, ulgi, zniżki. Zebraliśmy w jednym miejscu praktyczne informacje, które bywają rozproszone.",
    category: "wsparcie",
    readingMinutes: 10,
    date: "2025-03-15",
    author: "Krzysztof Adamski",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 75,
    content: [
      "W Polsce dostępnych jest kilkanaście programów wsparcia seniorów — nie wszystkie są tak samo znane. Warto raz na rok przejrzeć ich listę z bliską osobą starszą.",
      "Zachęcamy, by skontaktować się z lokalnym ośrodkiem pomocy społecznej. Pracownicy wiedzą zdecydowanie więcej niż można znaleźć w internecie.",
    ],
  },
  {
    slug: "cwiczenia-pamieci-ktore-maja-sens",
    title: "Ćwiczenia pamięci, które naprawdę mają sens",
    summary:
      "Nie każda „gra dla mózgu” działa. Oto te, które są wspierane badaniami.",
    category: "pamiec",
    readingMinutes: 6,
    date: "2025-02-20",
    author: "dr Tomasz Król",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 73,
    content: [
      "Najlepiej zbadane są aktywności łączące ruch, społeczność i uważność. Taniec, wspólne gotowanie, śpiew w chórze.",
      "Krzyżówki mają swoje miejsce, ale nie zastąpią regularnego kontaktu z ludźmi. To nie mózg „ćwiczymy” — to cały układ: ciało, emocje, uwaga.",
    ],
  },
  {
    slug: "jak-zorganizowac-wizyte-u-lekarza-z-seniorem",
    title: "Jak zorganizować wizytę u lekarza z seniorem",
    summary:
      "Praktyczna ściąga: co zapisać, o co zapytać i jak zapamiętać, co powiedział lekarz.",
    category: "zdrowie",
    readingMinutes: 7,
    date: "2025-01-25",
    author: "Joanna Kwiatkowska",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 69,
    content: [
      "Weź kartkę z trzema pytaniami, zapisanymi wcześniej. Podczas wizyty łatwo się gubimy, więc kartka jest kotwicą.",
      "Powtórz na głos to, co powiedział lekarz: „czyli mam brać to rano, a to wieczorem, tak?”. Powtórzenie zmniejsza ryzyko pomyłki o połowę.",
    ],
  },
  {
    slug: "jak-rozpoznac-samotnosc-u-rodzica",
    title: "Jak rozpoznać samotność u rodzica, który mówi „wszystko dobrze”",
    summary:
      "Najczęściej nie usłyszysz „jestem samotny/a”. Oto subtelne sygnały, na które warto zwrócić uwagę.",
    category: "samotnosc",
    readingMinutes: 5,
    date: "2025-03-12",
    author: "Dominika Pawlak",
    image: "/placeholder.svg?height=600&width=900",
    popularity: 90,
    content: [
      "Długie rozmowy o niczym. Telewizor włączony cały dzień. Kupowanie tych samych rzeczy w sklepie, żeby z kimś zamienić słowo. To są flary.",
      "„Wszystko dobrze” w wieku 80 lat często znaczy: „nie chcę być ciężarem”. Twoje uważne pytanie „a naprawdę?”, zadane z ciepłem, bywa momentem zwrotnym.",
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const a = getArticle(slug)
  if (!a) return []
  return articles
    .filter((x) => x.slug !== slug && x.category === a.category)
    .slice(0, count)
    .concat(
      articles.filter((x) => x.slug !== slug && x.category !== a.category).slice(0, count),
    )
    .slice(0, count)
}
