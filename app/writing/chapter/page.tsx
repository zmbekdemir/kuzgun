"use client";
import { useState, useRef, useEffect } from "react";
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight, FiList, FiType, FiEye, FiEyeOff, FiEdit3 } from "react-icons/fi";

export default function ManuscriptPage() {
  const [content, setContent] = useState(`Chapter 1: The Beginning

The old lighthouse stood against the stormy sky, its beacon cutting through the darkness like a sword through silk. Sarah pulled her coat tighter as she approached the weathered door, the key heavy in her palm.

She had inherited this place from her grandmother, along with all its secrets. The locals whispered stories about the lighthouse keeper who had vanished fifty years ago, leaving behind only a journal filled with cryptic entries about "the watchers in the deep."

As Sarah turned the key, she couldn't shake the feeling that she was being observed. The door creaked open, revealing a spiral staircase that seemed to ascend into infinity. Dust motes danced in the pale light filtering through salt-stained windows.

Her footsteps echoed as she climbed, each step taking her further from the world she knew and closer to truths that had been buried for decades. At the top of the lighthouse, she found the keeper's room exactly as it had been left—books scattered across a wooden desk, a telescope pointed toward the horizon, and that journal, waiting.

Sarah opened it to the first page and began to read...`);

  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [showStats, setShowStats] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Calculate writing statistics
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = content.length;
  const charCountNoSpaces = content.replace(/\s/g, '').length;
  const paragraphCount = content.split('\n\n').filter(p => p.trim().length > 0).length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed

  // Add daily goal and today's word count (mock values for now)
  const dailyGoal = 1000;
  const todayWords = wordCount; // You can replace this with actual logic if needed

  const handleTextSelection = () => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      setSelectedText(content.substring(start, end));
    }
  };

  const formatText = (format: string) => {
    if (!textareaRef.current || !selectedText) return;
    
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    
    let formattedText = selectedText;
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `_${selectedText}_`;
        break;
    }
    
    const newContent = content.substring(0, start) + formattedText + content.substring(end);
    setContent(newContent);
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)] flex gap-6">
      {/* Main Writing Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-4 p-4 bg-custom-gold/5 rounded-lg border border-custom-gold/20">
          <div className="flex items-center gap-4">
            {/* Formatting Tools */}
            <div className="flex items-center gap-2 border-r border-custom-gold/20 pr-4">
              <button 
                onClick={() => formatText('bold')}
                className="p-2 hover:bg-custom-gold/20 rounded transition"
                title="Bold"
              >
                <FiBold className="w-4 h-4" />
              </button>
              <button 
                onClick={() => formatText('italic')}
                className="p-2 hover:bg-custom-gold/20 rounded transition"
                title="Italic"
              >
                <FiItalic className="w-4 h-4" />
              </button>
              <button 
                onClick={() => formatText('underline')}
                className="p-2 hover:bg-custom-gold/20 rounded transition"
                title="Underline"
              >
                <FiUnderline className="w-4 h-4" />
              </button>
            </div>

            {/* Alignment Tools */}
            <div className="flex items-center gap-2 border-r border-custom-gold/20 pr-4">
              <button className="p-2 hover:bg-custom-gold/20 rounded transition" title="Align Left">
                <FiAlignLeft className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-custom-gold/20 rounded transition" title="Align Center">
                <FiAlignCenter className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-custom-gold/20 rounded transition" title="Align Right">
                <FiAlignRight className="w-4 h-4" />
              </button>
            </div>

            {/* Text Settings */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <FiType className="w-4 h-4" />
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-16"
                />
                <span className="text-xs">{fontSize}px</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFocusMode(!focusMode)}
              className="flex items-center gap-2 px-3 py-1 hover:bg-custom-gold/20 rounded transition text-sm"
            >
              {focusMode ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              {focusMode ? "Exit Focus" : "Focus Mode"}
            </button>
            <button className="px-3 py-1 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-sm font-medium transition">
              Auto-Save: ON
            </button>
          </div>
        </div>

        {/* Writing Area */}
        <div className="flex-1 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6 relative">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onSelect={handleTextSelection}
            className="w-full h-full bg-transparent resize-none focus:outline-none font-serif leading-relaxed"
            style={{ 
              fontSize: `${fontSize}px`, 
              lineHeight: lineHeight,
              fontFamily: 'Georgia, serif'
            }}
            placeholder="Begin writing your story..."
          />
          
          {/* Focus Mode Overlay */}
          {focusMode && (
            <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center">
              <div className="bg-custom-brown/90 rounded-lg p-8 max-w-4xl w-full mx-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-96 bg-transparent resize-none focus:outline-none font-serif text-white"
                  style={{ 
                    fontSize: `${fontSize + 2}px`, 
                    lineHeight: lineHeight + 0.2,
                    fontFamily: 'Georgia, serif'
                  }}
                  placeholder="Focus on your writing..."
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Stats & Tools */}
      {!focusMode && showStats && (
        <div className="w-80 space-y-6">
          {/* Writing Statistics */}
          <div className="bg-custom-gold/5 rounded-lg p-4 border border-custom-gold/20">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <FiEdit3 className="w-4 h-4" />
              Writing Statistics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-custom-gold/70">Words</span>
                <span className="font-bold">{wordCount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-custom-gold/70">Characters</span>
                <span className="font-bold">{charCount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-custom-gold/70">Characters (no spaces)</span>
                <span className="font-bold">{charCountNoSpaces.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-custom-gold/70">Paragraphs</span>
                <span className="font-bold">{paragraphCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-custom-gold/70">Reading time</span>
                <span className="font-bold">{readingTime} min</span>
              </div>
            </div>
          </div>

          {/* Daily Goal Progress */}
          <div className="bg-custom-gold/5 rounded-lg p-4 border border-custom-gold/20">
            <h3 className="font-bold mb-4">Daily Writing Goal</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Today's Progress</span>
                <span className="font-bold">{todayWords}/{dailyGoal}</span>
              </div>
              <div className="w-full bg-custom-gold/20 rounded-full h-3">
                <div 
                  className="bg-custom-gold h-3 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((todayWords / dailyGoal) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-custom-gold/60">
                <span>{Math.round((todayWords / dailyGoal) * 100)}% complete</span>
                <span>{dailyGoal - todayWords} words to go</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-custom-gold/5 rounded-lg p-4 border border-custom-gold/20">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded text-sm font-medium transition text-left">
                📝 Add Chapter Break
              </button>
              <button className="w-full px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded text-sm font-medium transition text-left">
                💭 Insert Comment
              </button>
              <button className="w-full px-3 py-2 bg-green-500/20 hover:bg-green-500/30 rounded text-sm font-medium transition text-left">
                🔖 Add Bookmark
              </button>
              <button className="w-full px-3 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 rounded text-sm font-medium transition text-left">
                📊 Generate Summary
              </button>
            </div>
          </div>

          {/* Recent Comments from Editor */}
          <div className="bg-custom-gold/5 rounded-lg p-4 border border-custom-gold/20">
            <h3 className="font-bold mb-4">Editor Feedback</h3>
            <div className="space-y-3">
              <div className="bg-blue-500/10 rounded p-3 border-l-2 border-blue-500">
                <p className="text-sm text-blue-400 font-medium">Chapter 3 - Line 45</p>
                <p className="text-xs text-custom-gold/70 mt-1">"Consider strengthening the dialogue here. The character's motivation could be clearer."</p>
              </div>
              <div className="bg-green-500/10 rounded p-3 border-l-2 border-green-500">
                <p className="text-sm text-green-400 font-medium">Chapter 2 - General</p>
                <p className="text-xs text-custom-gold/70 mt-1">"Excellent pacing in this chapter. The tension builds naturally."</p>
              </div>
            </div>
            <button className="w-full mt-3 px-3 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded text-sm font-medium transition">
              View All Comments
            </button>
          </div>
        </div>
      )}
    </div>
  );
}