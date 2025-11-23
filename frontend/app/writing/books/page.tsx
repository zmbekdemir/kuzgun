"use client";
import { useState } from "react";
import { FiPlus, FiBookOpen, FiEdit3, FiCheckCircle, FiArchive } from "react-icons/fi";

interface Book {
  id: number;
  title: string;
  description: string;
  genre: string;
  status: "in-progress" | "completed" | "archived";
  wordCount: number;
}

const initialBooks: Book[] = [
  {
    id: 1,
    title: "The Lighthouse Inheritance",
    description: "A psychological thriller set in a coastal village with dark secrets.",
    genre: "Mystery / Thriller",
    status: "in-progress",
    wordCount: 47832,
  },
  {
    id: 2,
    title: "Ashes of the Empire",
    description: "A fantasy epic of rebellion and redemption in a crumbling empire.",
    genre: "Epic Fantasy",
    status: "completed",
    wordCount: 96000,
  },
];

export default function YourBooksPage() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [filter, setFilter] = useState<"all" | "in-progress" | "completed" | "archived">("all");

  const filters = [
    { key: "all", label: "ALL BOOKS", icon: FiBookOpen },
    { key: "in-progress", label: "IN PROGRESS", icon: FiEdit3 },
    { key: "completed", label: "COMPLETED", icon: FiCheckCircle },
    { key: "archived", label: "ARCHIVED", icon: FiArchive },
  ] as const;

  const filteredBooks = books.filter((book) =>
    filter === "all" ? true : book.status === filter
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-custom-gold/10 rounded-lg p-1 border border-custom-gold/20">
          {filters.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                  filter === tab.key
                    ? "bg-custom-gold/30 text-custom-gold"
                    : "text-custom-gold/60 hover:text-custom-gold hover:bg-custom-gold/20"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-custom-gold/10 rounded-lg border border-custom-gold/20 p-4 hover:bg-custom-gold/15 transition"
          >
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-sm text-custom-gold/80 mt-1 mb-3">{book.description}</p>
            <p className="text-xs text-custom-gold/60 mb-1">Genre: {book.genre}</p>
            <p className="text-xs text-custom-gold/60">Word Count: {book.wordCount.toLocaleString()}</p>
          </div>
        ))}

        {/* Add Book */}
        <div className="bg-custom-gold/10 rounded-lg border border-custom-gold/20 border-dashed flex items-center justify-center cursor-pointer hover:bg-custom-gold/15 transition">
          <div className="text-center text-custom-gold/60 py-8">
            <FiPlus className="w-8 h-8 mx-auto mb-2" />
            <p>Add New Book</p>
          </div>
        </div>
      </div>
    </div>
  );
}
