export default function TodaysPickPage() {
  return (
    <div className="mr-20 ml-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[3/4] bg-custom-gold/10 rounded-md animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
