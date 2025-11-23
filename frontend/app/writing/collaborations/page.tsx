"use client";
import { useState } from "react";
import { FiSend, FiPaperclip, FiEdit3, FiMessageSquare, FiUsers, FiClock } from "react-icons/fi";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  type: 'message' | 'comment' | 'suggestion' | 'approval';
  attachments?: string[];
  relatedChapter?: string;
}

interface EditorFeedback {
  id: number;
  chapter: string;
  line: number;
  type: 'suggestion' | 'correction' | 'question' | 'praise';
  content: string;
  status: 'pending' | 'addressed' | 'dismissed';
  timestamp: string;
}

export default function CollaborationPage() {
  const [activeTab, setActiveTab] = useState<'chat' | 'feedback' | 'versions'>('chat');
  const [newMessage, setNewMessage] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "Editor Sarah",
      content: "Hi! I've finished reviewing chapters 1-3. Overall, the pacing is excellent and the mystery setup is compelling. I've left some specific feedback in the manuscript.",
      timestamp: "2024-01-20 10:30",
      type: "message"
    },
    {
      id: 2,
      sender: "You",
      content: "Thank you! I'm particularly excited about the lighthouse setting. Did the atmospheric descriptions work well for you?",
      timestamp: "2024-01-20 11:15",
      type: "message"
    },
    {
      id: 3,
      sender: "Editor Sarah",
      content: "Absolutely! The lighthouse feels like a character itself. I especially loved the description in Chapter 2 where Sarah first enters. One small suggestion - consider adding more sensory details about the salt air and creaking wood.",
      timestamp: "2024-01-20 11:45",
      type: "suggestion",
      relatedChapter: "Chapter 2"
    },
    {
      id: 4,
      sender: "You",
      content: "Great idea! I'll work on enhancing those sensory details. How did you feel about Thomas Blackwood's introduction?",
      timestamp: "2024-01-20 14:20",
      type: "message"
    },
    {
      id: 5,
      sender: "Editor Sarah",
      content: "Thomas is intriguing! His charm feels genuine but there's an underlying tension that works well. I've marked a few dialogue lines that could be tightened to make his manipulation more subtle.",
      timestamp: "2024-01-20 15:10",
      type: "comment",
      relatedChapter: "Chapter 3"
    }
  ]);

  const [feedback, setFeedback] = useState<EditorFeedback[]>([
    {
      id: 1,
      chapter: "Chapter 1",
      line: 23,
      type: "suggestion",
      content: "Consider starting with action rather than description to hook readers immediately",
      status: "pending",
      timestamp: "2024-01-20 09:15"
    },
    {
      id: 2,
      chapter: "Chapter 2",
      line: 67,
      type: "correction",
      content: "Lighthouse keepers typically lived on-site, not in the village. This affects the backstory.",
      status: "addressed",
      timestamp: "2024-01-20 09:30"
    },
    {
      id: 3,
      chapter: "Chapter 3",
      line: 12,
      type: "praise",
      content: "Excellent dialogue here! Thomas's character voice is distinct and believable.",
      status: "pending",
      timestamp: "2024-01-20 10:00"
    },
    {
      id: 4,
      chapter: "Chapter 2",
      line: 89,
      type: "question",
      content: "How does Sarah know about the hidden chamber? This seems to come out of nowhere.",
      status: "pending",
      timestamp: "2024-01-20 10:45"
    }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now(),
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleString(),
        type: "message"
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case 'suggestion': return '💡';
      case 'comment': return '💬';
      case 'approval': return '✅';
      default: return '📝';
    }
  };

  const getFeedbackTypeColor = (type: string) => {
    switch (type) {
      case 'suggestion': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'correction': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'question': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'praise': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'addressed': return 'text-green-500';
      case 'dismissed': return 'text-gray-500';
      default: return 'text-yellow-500';
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)]">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-custom-gold/10 rounded-lg p-1 border border-custom-gold/20">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'chat'
                ? 'bg-custom-gold/30 text-custom-gold'
                : 'text-custom-gold/60 hover:text-custom-gold hover:bg-custom-gold/20'
            }`}
          >
            <FiMessageSquare className="w-4 h-4" />
            EDITOR CHAT
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'feedback'
                ? 'bg-custom-gold/30 text-custom-gold'
                : 'text-custom-gold/60 hover:text-custom-gold hover:bg-custom-gold/20'
            }`}
          >
            <FiEdit3 className="w-4 h-4" />
            FEEDBACK
          </button>
          <button
            onClick={() => setActiveTab('versions')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'versions'
                ? 'bg-custom-gold/30 text-custom-gold'
                : 'text-custom-gold/60 hover:text-custom-gold hover:bg-custom-gold/20'
            }`}
          >
            <FiClock className="w-4 h-4" />
            VERSIONS
          </button>
        </div>
      </div>

      {/* Chat Tab */}
      {activeTab === 'chat' && (
        <div className="bg-custom-gold/5 rounded-lg border border-custom-gold/20 h-[calc(100vh-350px)] flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-custom-gold/20 bg-custom-gold/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div>
                  <h3 className="font-bold">Editor Sarah</h3>
                  <p className="text-sm text-custom-gold/70">Senior Fiction Editor</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-sm transition">
                  📞 Schedule Call
                </button>
                <button className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-sm transition">
                  📁 Shared Files
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    message.sender === 'You'
                      ? 'bg-blue-500/20 text-blue-100'
                      : 'bg-custom-gold/20 text-custom-gold'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">{message.sender}</span>
                    <span className="text-xs">{getMessageTypeIcon(message.type)}</span>
                    {message.relatedChapter && (
                      <span className="text-xs bg-blue-500/30 px-2 py-1 rounded">
                        {message.relatedChapter}
                      </span>
                    )}
                  </div>
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-2">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-custom-gold/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button className="p-2 bg-gray-500/20 hover:bg-gray-500/30 rounded transition">
                <FiPaperclip className="w-4 h-4" />
              </button>
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded font-medium transition"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Tab */}
      {activeTab === 'feedback' && (
        <div className="bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6 h-[calc(100vh-350px)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Editor Feedback</h3>
            <div className="flex gap-2">
              <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
                <option value="all">All Feedback</option>
                <option value="pending">Pending</option>
                <option value="addressed">Addressed</option>
              </select>
              <select className="bg-transparent border border-custom-gold/30 rounded px-3 py-2 text-sm">
                <option value="all">All Chapters</option>
                <option value="chapter1">Chapter 1</option>
                <option value="chapter2">Chapter 2</option>
                <option value="chapter3">Chapter 3</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-full">
            {feedback.map((item) => (
              <div key={item.id} className={`p-4 rounded-lg border ${getFeedbackTypeColor(item.type)}`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getFeedbackTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                    <span className="text-sm font-medium">{item.chapter} - Line {item.line}</span>
                    <span className={`text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <span className="text-xs text-custom-gold/60">{item.timestamp}</span>
                </div>
                <p className="text-sm mb-3">{item.content}</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-500/20 hover:bg-green-500/30 rounded text-xs font-medium transition">
                    Mark as Addressed
                  </button>
                  <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-xs font-medium transition">
                    Reply
                  </button>
                  <button className="px-3 py-1 bg-gray-500/20 hover:bg-gray-500/30 rounded text-xs font-medium transition">
                    Dismiss
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Versions Tab */}
      {activeTab === 'versions' && (
        <div className="bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6 h-[calc(100vh-350px)]">
          <h3 className="text-xl font-bold mb-6">Version History</h3>
          <div className="space-y-4 overflow-y-auto max-h-full">
            {[
              { version: "v1.3", date: "2024-01-20", changes: "Incorporated editor feedback on chapters 1-3", author: "You" },
              { version: "v1.2", date: "2024-01-18", changes: "Added character development for Thomas Blackwood", author: "You" },
              { version: "v1.1", date: "2024-01-15", changes: "Initial draft with editor comments", author: "Editor Sarah" },
              { version: "v1.0", date: "2024-01-10", changes: "First complete draft submitted for review", author: "You" },
            ].map((version, index) => (
              <div key={index} className="p-4 bg-custom-gold/10 rounded-lg border border-custom-gold/20">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">{version.version}</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-custom-gold/70">by {version.author}</span>
                    <span className="text-sm text-custom-gold/60">{version.date}</span>
                  </div>
                </div>
                <p className="text-sm text-custom-gold/80">{version.changes}</p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-xs font-medium transition">
                    View Changes
                  </button>
                  <button className="px-3 py-1 bg-green-500/20 hover:bg-green-500/30 rounded text-xs font-medium transition">
                    Restore Version
                  </button>
                  <button className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-xs font-medium transition">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}