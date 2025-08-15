"use client";

export default function AssignmentsPage() {
  const assignments = [
    { 
      id: 1, 
      title: "The Midnight Garden", 
      author: "Sarah Chen", 
      type: "Novel", 
      status: "in-progress", 
      deadline: "2024-02-15", 
      progress: 65,
      chapters: "12/18"
    },
    { 
      id: 2, 
      title: "Digital Echoes", 
      author: "Marcus Rivera", 
      type: "Short Story Collection", 
      status: "review", 
      deadline: "2024-01-28", 
      progress: 90,
      chapters: "8/8"
    },
    { 
      id: 3, 
      title: "Letters to Tomorrow", 
      author: "Elena Vasquez", 
      type: "Memoir", 
      status: "starting", 
      deadline: "2024-03-10", 
      progress: 15,
      chapters: "2/15"
    },
    { 
      id: 4, 
      title: "The Last Bookstore", 
      author: "David Kim", 
      type: "Novel", 
      status: "urgent", 
      deadline: "2024-01-20", 
      progress: 85,
      chapters: "20/22"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "starting": return "text-blue-500";
      case "in-progress": return "text-yellow-500";
      case "review": return "text-purple-500";
      case "urgent": return "text-red-500";
      case "completed": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "starting": return "bg-blue-500/10 border-blue-500/20";
      case "in-progress": return "bg-yellow-500/10 border-yellow-500/20";
      case "review": return "bg-purple-500/10 border-purple-500/20";
      case "urgent": return "bg-red-500/10 border-red-500/20";
      case "completed": return "bg-green-500/10 border-green-500/20";
      default: return "bg-gray-500/10 border-gray-500/20";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Editing Assignments</h1>
          <p className="text-custom-gold/70">Manage your current editing projects and deadlines</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="all">All Status</option>
            <option value="urgent">Urgent</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Ready for Review</option>
          </select>
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="deadline">By Deadline</option>
            <option value="progress">By Progress</option>
            <option value="title">By Title</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
          <h3 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">Active Projects</h3>
          <p className="text-2xl font-bold mt-1">4</p>
        </div>
        <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
          <h3 className="text-sm font-semibold text-red-500/70 uppercase tracking-wide">Urgent Deadlines</h3>
          <p className="text-2xl font-bold mt-1 text-red-500">1</p>
        </div>
        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
          <h3 className="text-sm font-semibold text-yellow-500/70 uppercase tracking-wide">In Progress</h3>
          <p className="text-2xl font-bold mt-1 text-yellow-500">2</p>
        </div>
        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
          <h3 className="text-sm font-semibold text-green-500/70 uppercase tracking-wide">This Month</h3>
          <p className="text-2xl font-bold mt-1 text-green-500">7</p>
        </div>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className={`rounded-lg p-6 border ${getStatusBg(assignment.status)}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{assignment.title}</h3>
                <p className="text-custom-gold/70">by {assignment.author}</p>
                <span className="inline-block px-2 py-1 bg-custom-gold/20 rounded-full text-xs font-medium mt-2">
                  {assignment.type}
                </span>
              </div>
              <span className={`font-medium capitalize ${getStatusColor(assignment.status)}`}>
                {assignment.status.replace('-', ' ')}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{assignment.progress}%</span>
              </div>
              <div className="w-full bg-custom-gold/20 rounded-full h-2">
                <div 
                  className="bg-custom-gold h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${assignment.progress}%` }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex justify-between items-center text-sm text-custom-gold/70 mb-4">
              <span>Chapters: {assignment.chapters}</span>
              <span>Due: {assignment.deadline}</span>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-sm font-medium transition">
                Continue Editing
              </button>
              <button className="px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded text-sm font-medium transition">
                Chat with Author
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-custom-gold/5 rounded-lg p-6 border border-custom-gold/20">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-sm font-medium transition">
            Request New Assignment
          </button>
          <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded text-sm font-medium transition">
            View All Messages
          </button>
          <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded text-sm font-medium transition">
            Submit Completed Work
          </button>
          <button className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded text-sm font-medium transition">
            Download Editing Guidelines
          </button>
        </div>
      </div>
    </div>
  );
}