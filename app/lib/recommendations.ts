// lib/recommendations.ts
export type BookReco = {
  id: string;
  title: string;
  author: string;
  cover: string;         // image path or url
  score: number;         // 0..1
  reason?: string;       // short explanation
  tags: string[];
};

const POOL: Omit<BookReco, "id" | "score">[] = [
  { title: "Mist & Steel", author: "A. Velis", cover: "/covers/mist-steel.jpg", tags: ["Fantasy","Epic"] },
  { title: "City of Shards", author: "K. Riven", cover: "/covers/city-shards.jpg", tags: ["Sci-Fi","Dystopia"] },
  { title: "Silent Orchards", author: "M. Hale", cover: "/covers/silent-orchards.jpg", tags: ["Literary","Drama"] },
  { title: "The Ninth Raven", author: "L. Myles", cover: "/covers/ninth-raven.jpg", tags: ["Fantasy","Dark"] },
  { title: "Crimson Ledger", author: "I. Noor", cover: "/covers/crimson-ledger.jpg", tags: ["Thriller"] },
  { title: "Glass Atlas", author: "R. Oakes", cover: "/covers/glass-atlas.jpg", tags: ["Adventure"] },
  { title: "Ashen Letters", author: "E. Kade", cover: "/covers/ashen-letters.jpg", tags: ["Romance","Drama"] },
  { title: "Orbitfall", author: "J. Kael", cover: "/covers/orbitfall.jpg", tags: ["Sci-Fi","Space"] },
];

function rand(n: number) { return Math.floor(Math.random() * n); }

export async function getRecommendations(userId: string, count = 8): Promise<BookReco[]> {
  // In real life, use your signals: embeddings, CF, recent reads, tags, etc.
  // This mock picks a random subset and adds a random score/why.
  const reasons = [
    "Because you liked dark fantasy",
    "Trending in your circle",
    "Matches your ‘political intrigue’ tag",
    "Similar to your reading list",
  ];
  const picked = new Set<number>();
  const out: BookReco[] = [];
  while (out.length < count) {
    const idx = rand(POOL.length);
    if (picked.has(idx)) continue;
    picked.add(idx);
    const base = POOL[idx];
    out.push({
      id: `${idx}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
      title: base.title,
      author: base.author,
      cover: base.cover,
      tags: base.tags,
      score: Math.round((0.6 + Math.random()*0.4) * 100) / 100, // 0.6..1.0
      reason: reasons[rand(reasons.length)],
    });
  }
  // simulate latency if you want: await new Promise(r => setTimeout(r, 300));
  return out;
}
