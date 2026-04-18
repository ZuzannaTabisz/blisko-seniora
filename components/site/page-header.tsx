import { cn } from "@/lib/utils"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
  align?: "left" | "center"
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
  align = "left",
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/30 via-background to-background",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-12 left-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 md:pb-14 md:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div
          className={cn(
            "flex max-w-3xl flex-col gap-4",
            align === "center" && "mx-auto items-center text-center",
          )}
        >
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg text-pretty">
              {description}
            </p>
          )}
          {children && <div className="mt-2">{children}</div>}
        </div>
      </div>
    </section>
  )
}
