export default function ReviewsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Story Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20"
          >
            <div className="h-4 bg-custom-gold/20 rounded mb-3 animate-pulse" />
            <div className="h-3 bg-custom-gold/15 rounded mb-2 animate-pulse" />
            <div className="h-3 bg-custom-gold/15 rounded mb-4 animate-pulse" />
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-custom-gold/20 rounded animate-pulse" />
              <div className="h-8 w-16 bg-custom-gold/20 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}