import Image from "next/image";
import type { NewBook } from "../../lib/newcomers";

export default function BookCard({ b }: { b: NewBook }) {
  return (
    <article className="group relative border border-[var(--foreground)]/15 rounded-md overflow-hidden bg-[color:from_var(--background)_srgb/0.7]">
      <div className="aspect-[3/4] relative">
        <Image
          src={b.cover}
          alt={`${b.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold leading-tight line-clamp-2">{b.title}</h3>
        <p className="text-xs opacity-70 mb-2">{b.author}</p>
        {b.tags?.length ? (
          <div className="flex gap-2 flex-wrap">
            {b.tags.slice(0,3).map(t => (
              <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-[var(--foreground)]/20 rounded">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-md ring-0 group-hover:ring-1 ring-[var(--foreground)]/20 transition" />
    </article>
  );
}
