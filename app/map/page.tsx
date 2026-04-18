import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { SupportMapLoader } from "@/components/map/support-map-loader"

export const metadata = {
  title: "Mapa wsparcia — Blisko Seniora",
  description:
    "Kluby seniora, pomoc psychologiczna, wolontariat i miejsca spotkań międzypokoleniowych na interaktywnej mapie Polski.",
}

export default function MapPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Mapa wsparcia"
          title="Znajdź miejsca przyjazne seniorom w swoim mieście"
          description="Przykładowe punkty wsparcia w kilku miastach w Polsce — od klubów seniora po wsparcie psychologiczne. Użyj filtrów lub znajdź miejsca najbliżej Ciebie."
        />
        <SupportMapLoader />
      </main>
      <Footer />
    </>
  )
}
