"use client";
import { useState } from "react";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      author: "Sarah Chen",
      project: "The Midnight Garden",
      lastMessage: "Thanks for the feedback on chapter 12. I've made the revisions.",
      timestamp: "2 hours ago",
      unread: 2,
      status: "online"
    },
    {
      id: 2,
      author: "Marcus Rivera",
      project: "Digital Echoes",
      lastMessage: "Could we schedule a call to discuss the character development?",
      timestamp: "1 day ago",
      unread: 0,
      status: "offline"
    },
    {
      id: 3,
      author: "Elena Vasquez",
      project: "Letters to Tomorrow",
      lastMessage: "I'm ready to start the next phase of editing.",
      timestamp: "3 days ago",
      unread: 1,
      status: "online"
    },
    {
      id: 4,
      author: "David Kim",
      project: "The Last Bookstore",
      lastMessage: "The deadline is approaching. How are we doing?",
      timestamp: "5 days ago",
      unread: 3,
      status: "away"
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "Hi! I've finished revising chapter 12 based on your feedback. The character development feels much stronger now.",
      timestamp: "10:30 AM",
      isAuthor: true
    },
    {
      id: 2,
      sender: "You",
      content: "Great work! I can see the improvement in the dialogue. The emotional depth is much more apparent now. Let's move on to chapter 13.",
      timestamp: "10:45 AM",
      isAuthor: false
    },
    {
      id: 3,
      sender: "Sarah Chen",
      content: "Perfect! I'm excited to tackle chapter 13. Should I focus on the same aspects you mentioned for chapter 12?",
      timestamp: "11:00 AM",
      isAuthor: true
    },
    {
      id: 4,
      sender: "You",
      content: "Yes, but also pay attention to the pacing in the action sequences. They could use some tightening.",
      timestamp: "11:15 AM",
      isAuthor: false
    },
    {
      id: 5,
      sender: "Sarah Chen",
      content: "Thanks for the feedback on chapter 12. I've made the revisions.",
      timestamp: "2:30 PM",
      isAuthor: true
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)]">
      <div className="flex h-full bg-custom-gold/5 rounded-lg border border-custom-gold/20 overflow-hidden">
        {/* Chat List Sidebar */}
        <div className="w-1/3 border-r border-custom-gold/20 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-custom-gold/20">
            <h2 className="text-xl font-bold mb-2">Author Conversations</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search conversations..."
                className="flex-1 px-3 py-1 bg-transparent border border-custom-gold/30 rounded text-sm focus:outline-none focus:border-custom-gold"
              />
            </div>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`p-4 border-b border-custom-gold/10 cursor-pointer transition-colors hover:bg-custom-gold/10 ${
                  selectedChat === conv.id ? 'bg-custom-gold/20' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(conv.status)}`} />
                    <h3 className="font-semibold">{conv.author}</h3>
                  </div>
                  {conv.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-custom-gold/70 mb-1">{conv.project}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-custom-gold/60 truncate flex-1 mr-2">{conv.lastMessage}</p>
                  <span className="text-xs text-custom-gold/50">{conv.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-custom-gold/20 bg-custom-gold/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor("online")}`} />
                <div>
                  <h3 className="font-bold">Sarah Chen</h3>
                  <p className="text-sm text-custom-gold/70">The Midnight Garden</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded text-sm transition">
                  📞 Call
                </button>
                <button className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-sm transition">
                  📁 Files
                </button>
                <button className="px-3 py-1 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-sm transition">
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isAuthor ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.isAuthor
                      ? 'bg-custom-gold/20 text-custom-gold'
                      : 'bg-blue-500/20 text-blue-100'
                  }`}
                >
                  <p className="text-sm font-medium mb-1">{message.sender}</p>
                  <p>{message.content}</p>
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
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded font-medium transition"
              >
                Send
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 rounded text-sm transition">
                📎 Attach File
              </button>
              <button className="px-3 py-1 bg-green-500/20 hover:bg-green-500/30 rounded text-sm transition">
                📝 Quick Template
              </button>
              <button className="px-3 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 rounded text-sm transition">
                ⏰ Schedule Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}