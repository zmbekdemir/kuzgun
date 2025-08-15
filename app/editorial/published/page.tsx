export default function PublishedPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Published Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[3/4] bg-custom-gold/10 rounded-md border border-custom-gold/20 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}