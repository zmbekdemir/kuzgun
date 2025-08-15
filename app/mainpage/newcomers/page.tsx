// File: app/mainpage/newcomers/page.tsx
export default function NewcomersPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[3/4] bg-white/10 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
}
