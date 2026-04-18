import { Suspense } from "react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { PageHeader } from "@/components/site/page-header"
import { ArticlesLibrary } from "@/components/articles/articles-library"

export const metadata = {
  title: "Biblioteka wiedzy — Blisko Seniora",
  description:
    "Artykuły o zdrowiu, psychologii, komunikacji i relacjach z osobami starszymi. Wiedza oparta na badaniach i doświadczeniu specjalistów.",
}

export default function ArticlesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Biblioteka wiedzy"
          title="Wiedza, która przydaje się w codziennym życiu"
          description="Ponad dwadzieścia artykułów o zdrowiu, psychologii, relacjach i komunikacji — napisanych jasno i z szacunkiem. Filtruj po kategorii, szukaj po tytule, zapisuj ulubione."
        />
        <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">Wczytywanie…</div>}>
          <ArticlesLibrary />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
