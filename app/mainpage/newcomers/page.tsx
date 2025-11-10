import { getNewcomers } from "../../lib/newcomers";
import BookCard from "./BookCard";
import RangeSwitcher from "./RangeSwitcher";

export const dynamic = "force-dynamic"; // always fresh (or use: export const revalidate = 0)

type Props = { searchParams: { range?: "today" | "week" | "month" } };

export default async function NewcomersPage({ searchParams }: Props) {
  const range = searchParams.range ?? "today";
  const books = await getNewcomers(range, 12);

  return (
    <div className="mx-4 md:mx-20">
      <div className="flex items-center mb-4 gap-3">
        <h1 className="text-xl font-bold">New Arrivals</h1>
        <span className="text-xs opacity-70">({range})</span>
        <RangeSwitcher />
      </div>

      {books.length === 0 ? (
        <div className="text-sm opacity-70">No new books in this range yet.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {books.map(b => <BookCard key={b.id} b={b} />)}
        </div>
      )}
    </div>
  );
}
