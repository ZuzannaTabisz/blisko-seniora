import type { CategorySlug } from "@/data/categories"

const byCategory: Record<CategorySlug, string> = {
  zdrowie: "/article-health.jpg",
  psychologia: "/article-hands.jpg",
  relacje: "/article-talk.jpg",
  aktywnosc: "/article-walk.jpg",
  rodzina: "/article-cooking.jpg",
  komunikacja: "/article-talk.jpg",
  kultura: "/article-memory.jpg",
  rekreacja: "/article-walk.jpg",
  opieka: "/reading-feature.jpg",
  pamiec: "/article-memory.jpg",
  samotnosc: "/article-hands.jpg",
  wsparcie: "/team-nonprofit.jpg",
}

const rotation = [
  "/article-health.jpg",
  "/article-walk.jpg",
  "/article-talk.jpg",
  "/article-hands.jpg",
  "/article-memory.jpg",
  "/article-cooking.jpg",
  "/reading-feature.jpg",
  "/hero-senior-family.jpg",
]

// Deterministic pseudo-random by slug
function hash(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function getArticleImage(slug: string, category: CategorySlug, provided?: string) {
  if (provided && !provided.includes("placeholder.svg")) return provided
  // 60% chance category-specific, otherwise rotation for variety
  const h = hash(slug)
  if (h % 10 < 6) return byCategory[category]
  return rotation[h % rotation.length]
}
