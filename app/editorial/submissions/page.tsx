"use client";

export default function SubmissionsPage() {
  const submissions = [
    { id: 1, title: "The Midnight Garden", author: "Sarah Chen", status: "pending", date: "2024-01-15", genre: "Fantasy" },
    { id: 2, title: "Digital Echoes", author: "Marcus Rivera", status: "in-review", date: "2024-01-14", genre: "Sci-Fi" },
    { id: 3, title: "Letters to Tomorrow", author: "Elena Vasquez", status: "pending", date: "2024-01-13", genre: "Drama" },
    { id: 4, title: "The Last Bookstore", author: "David Kim", status: "approved", date: "2024-01-12", genre: "Literary" },
    { id: 5, title: "Neon Dreams", author: "Alex Thompson", status: "pending", date: "2024-01-11", genre: "Cyberpunk" },
    { id: 6, title: "Mountain Whispers", author: "Isabella Rodriguez", status: "in-review", date: "2024-01-10", genre: "Adventure" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "text-yellow-500";
      case "in-review": return "text-blue-500";
      case "approved": return "text-green-500";
      case "rejected": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Story Submissions</h1>
          <p className="text-custom-gold/70">Review and manage incoming story submissions</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-review">In Review</option>
            <option value="approved">Approved</option>
          </select>
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="title">By Title</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
          <h3 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">Total Submissions</h3>
          <p className="text-2xl font-bold mt-1">247</p>
        </div>
        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
          <h3 className="text-sm font-semibold text-yellow-500/70 uppercase tracking-wide">Pending Review</h3>
          <p className="text-2xl font-bold mt-1 text-yellow-500">18</p>
        </div>
        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
          <h3 className="text-sm font-semibold text-blue-500/70 uppercase tracking-wide">In Review</h3>
          <p className="text-2xl font-bold mt-1 text-blue-500">12</p>
        </div>
        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
          <h3 className="text-sm font-semibold text-green-500/70 uppercase tracking-wide">This Week</h3>
          <p className="text-2xl font-bold mt-1 text-green-500">6</p>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-custom-gold/5 rounded-lg border border-custom-gold/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-custom-gold/10 border-b border-custom-gold/20">
              <tr>
                <th className="text-left p-4 font-semibold text-sm uppercase tracking-wide">Title</th>
                <th className="text-left p-4 font-semibold text-sm uppercase tracking-wide">Author</th>
                <th className="text-left p-4 font-semibold text-sm uppercase tracking-wide">Genre</th>
                <th className="text-left p-4 font-semibold text-sm uppercase tracking-wide">Status</th>
                <th className="text-left p-4 font-semibold text-sm uppercase tracking-wide">Date</th>
                <th className="text-left p-4 font-semibold text-sm uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id} className="border-b border-custom-gold/10 hover:bg-custom-gold/5 transition-colors">
                  <td className="p-4">
                    <div className="font-medium">{submission.title}</div>
                  </td>
                  <td className="p-4 text-custom-gold/70">{submission.author}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-custom-gold/20 rounded-full text-xs font-medium">
                      {submission.genre}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`font-medium capitalize ${getStatusColor(submission.status)}`}>
                      {submission.status.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="p-4 text-custom-gold/70 text-sm">{submission.date}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-xs font-medium transition">
                        Review
                      </button>
                      <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-xs font-medium transition">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-custom-gold/70">Showing 1-6 of 247 submissions</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-custom-gold/30 rounded text-sm hover:bg-custom-gold/10 transition">
            Previous
          </button>
          <button className="px-3 py-1 bg-custom-gold/20 rounded text-sm">1</button>
          <button className="px-3 py-1 border border-custom-gold/30 rounded text-sm hover:bg-custom-gold/10 transition">
            2
          </button>
          <button className="px-3 py-1 border border-custom-gold/30 rounded text-sm hover:bg-custom-gold/10 transition">
            3
          </button>
          <button className="px-3 py-1 border border-custom-gold/30 rounded text-sm hover:bg-custom-gold/10 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}