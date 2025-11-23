// app/mainpage/today/loading.tsx
export default function Loading() {
  return (
    <div className="mx-4 md:mx-20">
      <div className="h-6 w-48 bg-[var(--foreground)]/10 rounded mb-4 animate-pulse" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-[var(--foreground)]/10 rounded-md animate-pulse" />
        ))}
      </div>
    </div>
  );
}
