// app/mainpage/today/BookCard.tsx
import Image from "next/image";
import type { BookReco } from "../../lib/recommendations";

export default function BookCard({ b }: { b: BookReco }) {
  return (
    <article className="group relative rounded-md overflow-hidden border border-[var(--foreground)]/15 bg-[color:from_var(--background)_srgb/0.6] backdrop-blur-[1px]">
      <div className="aspect-[3/4] relative">
        <Image
          src={b.cover}
          alt={`${b.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-semibold leading-tight line-clamp-2">{b.title}</h3>
        <p className="text-xs opacity-70">{b.author}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {b.tags.slice(0,3).map(t => (
            <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[var(--foreground)]/20 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2 text-xs opacity-70 line-clamp-2">{b.reason}</div>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs opacity-70">Score: {b.score}</div>
          {/* Placeholder actions; wire later */}
          <div className="flex gap-2">
            <button className="text-xs px-2 py-1 border border-[var(--foreground)]/30 rounded hover:bg-white/10">
              Save
            </button>
            <button className="text-xs px-2 py-1 border border-[var(--foreground)]/30 rounded hover:bg-white/10">
              Details
            </button>
          </div>
        </div>
      </div>

      {/* subtle hover border */}
      <div className="absolute inset-0 pointer-events-none rounded-md ring-0 group-hover:ring-1 ring-[var(--foreground)]/20 transition" />
    </article>
  );
}
