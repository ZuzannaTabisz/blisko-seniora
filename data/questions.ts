export type PublicQuestion = {
  id: string
  question: string
  answer: string
  specialist: string
  role: string
  topic: string
}

export const publicQuestions: PublicQuestion[] = [
  {
    id: "q1",
    question:
      "Jak rozmawiać z mamą, która mówi, że „jej już nikt nie potrzebuje”?",
    answer:
      "To zdanie zazwyczaj nie jest faktem — jest komunikatem emocjonalnym. Zamiast przekonywać, że to nieprawda, spróbuj usłyszeć uczucie pod spodem: opuszczenie, niewidzialność. Zapytaj: „co dziś zrobiłaś, co było dla Ciebie ważne?”. I poproś ją o coś, w czym jest lepsza od Ciebie — przepis, poradę, wspomnienie. Bycie potrzebnym to jeden z najlepszych leków na osamotnienie.",
    specialist: "dr Agnieszka Dąbrowska",
    role: "psycholożka geriatryczna",
    topic: "Komunikacja",
  },
  {
    id: "q2",
    question: "Jak często powinienem odwiedzać dziadka, żeby to miało sens?",
    answer:
      "Regularność jest ważniejsza niż częstotliwość. Raz w tygodniu o tej samej porze znaczy więcej niż trzy razy w tygodniu bez rytmu. Dziadek potrzebuje móc na coś czekać. Jeśli nie dasz rady regularnie — umów krótki telefon w stałe dni. Nawet 7 minut w środowy wieczór buduje strukturę tygodnia.",
    specialist: "Marta Krajewska",
    role: "terapeutka rodzin",
    topic: "Rodzina",
  },
  {
    id: "q3",
    question: "Jak delikatnie zachęcić tatę do wyjścia z domu?",
    answer:
      "Unikaj konstrukcji „musisz”. Zamiast tego zaproponuj konkretną, krótką aktywność razem: „idę na targ w sobotę, pomożesz mi wybrać pomidory?”. Cel wspólny, czas ograniczony, rola sensowna. Jeśli spotka się z odmową — nie naciskaj, zaproponuj ponownie za tydzień. Poczucie autonomii jest w tym wieku bezcenne.",
    specialist: "Tomasz Zieliński",
    role: "pracownik socjalny",
    topic: "Aktywność",
  },
  {
    id: "q4",
    question: "Dziadek zaczyna zapominać. Jak z nim rozmawiać?",
    answer:
      "Zamień pytanie „pamiętasz?” na opowiadanie: „pamiętam, jak…”. Przenosisz wtedy ciężar pamiętania na siebie i dajesz mu przestrzeń do bycia razem, a nie do odpytywania. Jeśli mówi coś, co nie zgadza się z rzeczywistością, nie koryguj w każdej sytuacji. Demencja odbiera narzędzia, nie emocje. To one pozostają mostem.",
    specialist: "dr Ewa Lipińska",
    role: "neurologożka",
    topic: "Pamięć",
  },
  {
    id: "q5",
    question: "Opiekuję się mamą i jestem wyczerpana. Co zrobić?",
    answer:
      "Twoje wyczerpanie to nie jest prywatny problem — to informacja, że system wsparcia wokół Ciebie jest za mały. Zrób listę 3 rzeczy, z których ktoś mógłby Cię odciążyć w tym tygodniu, i wyślij ją jednej zaufanej osobie. Zapisz się do grupy wsparcia opiekunów — one istnieją w każdym większym mieście, także online. Pamiętaj, że opieka nad kimś zaczyna się od opieki nad sobą.",
    specialist: "Olga Mazurek",
    role: "psycholożka",
    topic: "Opieka",
  },
  {
    id: "q6",
    question: "Jak rozmawiać z babcią po stracie dziadka?",
    answer:
      "Nie śpiesz się. Żałoba po wieloletnim partnerze nie ma kalendarza. Zamiast „wszystko będzie dobrze” mów „jestem tu”. Pytaj „jak dziś?”, a nie „jak się trzymasz?”. Jeśli chce mówić o nim — słuchaj. Jeśli nie chce — bądź obok w ciszy. Obecność bez naprawiania to często największa rzecz, jaką możesz jej dać.",
    specialist: "Monika Piotrowska",
    role: "psycholożka żałoby",
    topic: "Samotność",
  },
]
