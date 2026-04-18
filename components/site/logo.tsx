import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-visible:outline-none",
        className,
      )}
      aria-label="Blisko Seniora — strona główna"
    >
      <span
        aria-hidden="true"
        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
      >
        <span className="absolute h-3.5 w-3.5 rounded-full bg-accent" />
        <span className="absolute h-5 w-5 rounded-full border border-primary/60" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Blisko Seniora
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          wiedza i wsparcie
        </span>
      </span>
    </Link>
  )
}
