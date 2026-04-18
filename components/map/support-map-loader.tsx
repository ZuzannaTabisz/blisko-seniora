"use client"

import dynamic from "next/dynamic"

const SupportMap = dynamic(
  () => import("./support-map").then((m) => m.SupportMap),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <div className="space-y-4">
            <div className="h-64 animate-pulse rounded-2xl border border-border bg-card" />
            <div className="h-48 animate-pulse rounded-2xl border border-border bg-card" />
          </div>
          <div className="h-[560px] animate-pulse rounded-2xl border border-border bg-muted" />
        </div>
      </div>
    ),
  },
)

export function SupportMapLoader() {
  return <SupportMap />
}
