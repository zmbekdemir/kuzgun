// app/mainpage/today/page.tsx
import { getRecommendations } from "../../lib/recommendations";
import BookCard from "./BookCard";
import RefreshButton from "./RefreshButton";

export const dynamic = "force-dynamic"; // or: export const revalidate = 0;

export default async function TodaysPickPage() {
  // In real code, read userId from auth/session
  const userId = "zmbekdemir";
  const recs = await getRecommendations(userId, 8);

  return (
    <div className="mx-4 md:mx-20">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Today’s Picks For You</h1>
        <RefreshButton />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {recs.map((b) => (
          <BookCard key={b.id} b={b} />
        ))}
      </div>
    </div>
  );
}
