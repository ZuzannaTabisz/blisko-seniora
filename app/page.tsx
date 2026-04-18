import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/home/hero"
import { DailyIdea } from "@/components/home/daily-idea"
import { TodaysReading } from "@/components/home/todays-reading"
import { ImpactStats } from "@/components/home/impact-stats"
import { CategoriesGrid } from "@/components/home/categories-grid"
import { MapPreview } from "@/components/home/map-preview"
import { AskCta } from "@/components/home/ask-cta"
import { CaregiverPreview } from "@/components/home/caregiver-preview"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DailyIdea />
        <TodaysReading />
        <ImpactStats />
        <CategoriesGrid />
        <MapPreview />
        <AskCta />
        <CaregiverPreview />
      </main>
      <Footer />
    </>
  )
}
