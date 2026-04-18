import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { TopicsGenerator } from "@/components/topics/topics-generator"

export const metadata = {
  title: "O czym rozmawiać z babcią lub dziadkiem — Blisko Seniora",
  description:
    "Generator tematów do rozmowy z osobą starszą — proste pytania, które otwierają długie wspomnienia.",
}

export default function TopicsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Generator tematów"
          title="O czym dziś porozmawiać z babcią lub dziadkiem?"
          description="Praktyczne narzędzie, które podpowiada pięć pytań do rozmowy — z podpowiedzią, jak zadać je tak, żeby otworzyć wspomnienia, a nie zamknąć."
        />
        <TopicsGenerator />
      </main>
      <Footer />
    </>
  )
}
