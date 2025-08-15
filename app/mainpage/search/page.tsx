// File: app/mainpage/search/page.tsx
export default function SearchPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[3/4] bg-white/10 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
}
