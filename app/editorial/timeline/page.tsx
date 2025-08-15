"use client";
import { useState } from "react";

export default function TimelinePage() {
  const [selectedMonth, setSelectedMonth] = useState("2024-01");

  const deadlines = [
    {
      id: 1,
      title: "Digital Echoes",
      author: "Marcus Rivera",
      deadline: "2024-01-28",
      status: "urgent",
      daysLeft: 3,
      type: "Final Review"
    },
    {
      id: 2,
      title: "The Last Bookstore",
      author: "David Kim",
      deadline: "2024-01-20",
      status: "overdue",
      daysLeft: -5,
      type: "Chapter 20-22"
    },
    {
      id: 3,
      title: "The Midnight Garden",
      author: "Sarah Chen",
      deadline: "2024-02-15",
      status: "upcoming",
      daysLeft: 21,
      type: "Chapters 13-18"
    },
    {
      id: 4,
      title: "Letters to Tomorrow",
      author: "Elena Vasquez",
      deadline: "2024-03-10",
      status: "future",
      daysLeft: 45,
      type: "Initial Review"
    },
    {
      id: 5,
      title: "Whispers in the Wind",
      author: "Amanda Foster",
      deadline: "2024-03-15",
      status: "future",
      daysLeft: 50,
      type: "Developmental Edit"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "overdue": return "text-red-500 bg-red-500/10 border-red-500/20";
      case "urgent": return "text-orange-500 bg-orange-500/10 border-orange-500/20";
      case "upcoming": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
      case "future": return "text-green-500 bg-green-500/10 border-green-500/20";
      default: return "text-gray-500 bg-gray-500/10 border-gray-500/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "overdue": return "🚨";
      case "urgent": return "⚠️";
      case "upcoming": return "📅";
      case "future": return "✅";
      default: return "📝";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Project Timeline</h1>
          <p className="text-custom-gold/70">Track deadlines and manage your editing schedule</p>
        </div>
        <div className="flex gap-3">
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm"
          />
          <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
            <option value="all">All Projects</option>
            <option value="urgent">Urgent Only</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
          <h3 className="text-sm font-semibold text-red-500/70 uppercase tracking-wide">Overdue</h3>
          <p className="text-2xl font-bold mt-1 text-red-500">1</p>
        </div>
        <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
          <h3 className="text-sm font-semibold text-orange-500/70 uppercase tracking-wide">Urgent (< 7 days)</h3>
          <p className="text-2xl font-bold mt-1 text-orange-500">1</p>
        </div>
        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
          <h3 className="text-sm font-semibold text-yellow-500/70 uppercase tracking-wide">This Month</h3>
          <p className="text-2xl font-bold mt-1 text-yellow-500">2</p>
        </div>
        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
          <h3 className="text-sm font-semibold text-green-500/70 uppercase tracking-wide">Future</h3>
          <p className="text-2xl font-bold mt-1 text-green-500">3</p>
        </div>
      </div>

      {/* Timeline View */}
      <div className="bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Deadline Calendar</h3>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className={`rounded-lg p-4 border ${getStatusColor(deadline.status)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{getStatusIcon(deadline.status)}</span>
                  <div>
                    <h4 className="font-bold text-lg">{deadline.title}</h4>
                    <p className="text-custom-gold/70">by {deadline.author}</p>
                    <span className="inline-block px-2 py-1 bg-custom-gold/20 rounded-full text-xs font-medium mt-1">
                      {deadline.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg">{deadline.deadline}</p>
                  <p className={`text-sm ${
                    deadline.daysLeft < 0 ? 'text-red-500' : 
                    deadline.daysLeft <= 7 ? 'text-orange-500' : 
                    'text-custom-gold/70'
                  }`}>
                    {deadline.daysLeft < 0 
                      ? `${Math.abs(deadline.daysLeft)} days overdue`
                      : deadline.daysLeft === 0 
                      ? 'Due today'
                      : `${deadline.daysLeft} days left`
                    }
                  </p>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-xs font-medium transition">
                  View Project
                </button>
                <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-xs font-medium transition">
                  Contact Author
                </button>
                {deadline.status === 'overdue' && (
                  <button className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded text-xs font-medium transition">
                    Request Extension
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-custom-gold/5 rounded-lg p-6 border border-custom-gold/20">
        <h3 className="text-lg font-semibold mb-4">Timeline Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-custom-gold/20 hover:bg-custom-gold/30 rounded-lg text-left transition">
            <h4 className="font-semibold mb-2">📊 Export Schedule</h4>
            <p className="text-sm text-custom-gold/70">Download your timeline as PDF or calendar file</p>
          </button>
          <button className="p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-left transition">
            <h4 className="font-semibold mb-2">⏰ Set Reminders</h4>
            <p className="text-sm text-custom-gold/70">Configure deadline notifications and alerts</p>
          </button>
          <button className="p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg text-left transition">
            <h4 className="font-semibold mb-2">📝 Update Progress</h4>
            <p className="text-sm text-custom-gold/70">Mark milestones and update project status</p>
          </button>
        </div>
      </div>
    </div>
  );
}