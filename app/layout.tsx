import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import "./globals.css"
import "leaflet/dist/leaflet.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
})

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Blisko Seniora — wiedza, wsparcie i codzienna więź",
  description:
    "Platforma pomagająca seniorom, rodzinom i opiekunom — artykuły, mapa wsparcia, pytania do specjalisty i narzędzia na co dzień.",
  openGraph: {
    title: "Blisko Seniora",
    description: "Wiedza, wsparcie i codzienna więź dla seniorów i ich rodzin.",
    type: "website",
    locale: "pl_PL",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className="bg-background">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans relative antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
