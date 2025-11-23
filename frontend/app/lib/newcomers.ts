// lib/newcomers.ts
export type NewBook = {
  id: string;
  title: string;
  author: string;
  cover: string;         // image path or URL
  tags?: string[];
  publishedAt: Date;     // when it was added/published
};

const POOL: Omit<NewBook, "id">[] = [
  { title: "The Ninth Raven", author: "L. Myles", cover: "/covers/ninth-raven.jpg", tags: ["Fantasy","Dark"], publishedAt: daysAgo(0) },
  { title: "Glass Atlas", author: "R. Oakes", cover: "/covers/glass-atlas.jpg", tags: ["Adventure"], publishedAt: daysAgo(1) },
  { title: "City of Shards", author: "K. Riven", cover: "/covers/city-shards.jpg", tags: ["Sci-Fi"], publishedAt: daysAgo(2) },
  { title: "Mist & Steel", author: "A. Velis", cover: "/covers/mist-steel.jpg", tags: ["Fantasy"], publishedAt: daysAgo(4) },
  { title: "Orbitfall", author: "J. Kael", cover: "/covers/orbitfall.jpg", tags: ["Sci-Fi"], publishedAt: daysAgo(7) },
  { title: "Crimson Ledger", author: "I. Noor", cover: "/covers/crimson-ledger.jpg", tags: ["Thriller"], publishedAt: daysAgo(9) },
  { title: "Silent Orchards", author: "M. Hale", cover: "/covers/silent-orchards.jpg", tags: ["Literary"], publishedAt: daysAgo(15) },
  { title: "Ashen Letters", author: "E. Kade", cover: "/covers/ashen-letters.jpg", tags: ["Romance"], publishedAt: daysAgo(28) },
];

function daysAgo(n: number) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

export type Range = "today" | "week" | "month";

export function filterByRange(items: NewBook[], range: Range): NewBook[] {
  const now = new Date();
  const start = new Date(now);
  if (range === "today") {
    start.setHours(0,0,0,0);
  } else if (range === "week") {
    start.setDate(now.getDate() - 6); // last 7 days inclusive
    start.setHours(0,0,0,0);
  } else {
    start.setMonth(now.getMonth() - 1); // last 1 month
  }
  return items.filter(i => i.publishedAt >= start);
}

export async function getNewcomers(range: Range, limit = 12): Promise<NewBook[]> {
  // Replace with your DB query later; this is a mock
  const hydration: NewBook[] = POOL.map((p, idx) => ({
    id: `nb-${idx}`,
    ...p,
  }));

  const filtered = filterByRange(hydration, range)
    .sort((a,b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);

  return filtered;
}
