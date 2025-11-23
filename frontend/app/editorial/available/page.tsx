"use client";

export default function AvailableProjectsPage() {
  const availableProjects = [
    {
      id: 1,
      title: "Whispers in the Wind",
      author: "Amanda Foster",
      type: "Romance Novel",
      wordCount: "85,000",
      deadline: "2024-03-15",
      payment: "$1,200",
      difficulty: "Intermediate",
      description: "A contemporary romance set in a small coastal town. Needs developmental editing and line editing.",
      requirements: ["Experience with romance genre", "Developmental editing", "Character development focus"]
    },
    {
      id: 2,
      title: "The Quantum Paradox",
      author: "Dr. James Mitchell",
      type: "Science Fiction",
      wordCount: "120,000",
      deadline: "2024-04-20",
      payment: "$1,800",
      difficulty: "Advanced",
      description: "Hard science fiction novel exploring quantum mechanics. Requires technical accuracy review.",
      requirements: ["Science background preferred", "Technical editing", "Fact-checking"]
    },
    {
      id: 3,
      title: "Growing Up Digital",
      author: "Lisa Park",
      type: "Non-fiction",
      wordCount: "60,000",
      deadline: "2024-02-28",
      payment: "$900",
      difficulty: "Beginner",
      description: "A guide for parents navigating technology with children. Needs structural editing.",
      requirements: ["Non-fiction experience", "Parenting topic familiarity", "Clear communication style"]
    },
    {
      id: 4,
      title: "Shadows of the Past",
      author: "Robert Chen",
      type: "Historical Fiction",
      wordCount: "95,000",
      deadline: "2024-05-10",
      payment: "$1,400",
      difficulty: "Intermediate",
      description: "Set in 1940s Shanghai. Requires historical accuracy and cultural sensitivity review.",
      requirements: ["Historical fiction experience", "Cultural sensitivity", "Research skills"]
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-500 bg-green-500/10 border-green-500/20";
      case "Intermediate": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
      case "Advanced": return "text-red-500 bg-red-500/10 border-red-500/20";
      default: return "text-gray-500 bg-gray-500/10 border-gray-500/20";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Available Projects</h1>
          <p className="text-custom-gold/70">Browse and apply for new editing assignments</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="all">All Types</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            <option value="academic">Academic</option>
          </select>
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="deadline">By Deadline</option>
            <option value="payment">By Payment</option>
            <option value="difficulty">By Difficulty</option>
          </select>
        </div>
      </div>

      {/* Filter Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
          <h3 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">Total Available</h3>
          <p className="text-2xl font-bold mt-1">24</p>
        </div>
        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
          <h3 className="text-sm font-semibold text-green-500/70 uppercase tracking-wide">Beginner Level</h3>
          <p className="text-2xl font-bold mt-1 text-green-500">8</p>
        </div>
        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
          <h3 className="text-sm font-semibold text-yellow-500/70 uppercase tracking-wide">High Paying</h3>
          <p className="text-2xl font-bold mt-1 text-yellow-500">6</p>
        </div>
        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
          <h3 className="text-sm font-semibold text-blue-500/70 uppercase tracking-wide">Urgent</h3>
          <p className="text-2xl font-bold mt-1 text-blue-500">3</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {availableProjects.map((project) => (
          <div key={project.id} className="bg-custom-gold/5 rounded-lg p-6 border border-custom-gold/20">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-custom-gold/70 mb-1">by {project.author}</p>
                <span className="inline-block px-2 py-1 bg-custom-gold/20 rounded-full text-xs font-medium">
                  {project.type}
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-500">{project.payment}</p>
                <p className="text-sm text-custom-gold/70">Due: {project.deadline}</p>
              </div>
            </div>

            <p className="text-custom-gold/80 mb-4">{project.description}</p>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-custom-gold/10 rounded p-3">
                <h4 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">Word Count</h4>
                <p className="text-lg font-bold">{project.wordCount}</p>
              </div>
              <div className="bg-custom-gold/10 rounded p-3">
                <h4 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">Deadline</h4>
                <p className="text-lg font-bold">{project.deadline}</p>
              </div>
              <div className="bg-custom-gold/10 rounded p-3">
                <h4 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">Payment</h4>
                <p className="text-lg font-bold text-green-500">{project.payment}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide mb-2">Requirements</h4>
              <div className="flex flex-wrap gap-2">
                {project.requirements.map((req, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-500/20 rounded text-xs">
                    {req}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded font-medium transition">
                Apply for Project
              </button>
              <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded text-sm font-medium transition">
                Contact Author
              </button>
              <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded text-sm font-medium transition">
                View Sample
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <p className="text-sm text-custom-gold/70">Showing 1-4 of 24 projects</p>
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