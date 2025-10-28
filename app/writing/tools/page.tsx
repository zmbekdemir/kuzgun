"use client";
import { useState } from "react";
import { FiTarget, FiTrendingUp, FiBookOpen, FiSearch, FiDownload, FiUpload, FiSettings } from "react-icons/fi";

export default function ToolsPage() {
  const [selectedTool, setSelectedTool] = useState<string>('goals');
  const [dailyGoal, setDailyGoal] = useState(1000);
  const [projectGoal, setProjectGoal] = useState(80000);
  const [currentWords, setCurrentWords] = useState(47832);

  const tools = [
    { id: 'goals', name: 'Writing Goals', icon: FiTarget, description: 'Set and track your writing targets' },
    { id: 'analytics', name: 'Writing Analytics', icon: FiTrendingUp, description: 'Analyze your writing patterns and productivity' },
    { id: 'research', name: 'Research Notes', icon: FiBookOpen, description: 'Organize research materials and references' },
    { id: 'search', name: 'Text Search', icon: FiSearch, description: 'Search and replace across your manuscript' },
    { id: 'export', name: 'Export Options', icon: FiDownload, description: 'Export your work in various formats' },
    { id: 'backup', name: 'Backup & Sync', icon: FiUpload, description: 'Backup and synchronize your work' },
    { id: 'settings', name: 'Writing Settings', icon: FiSettings, description: 'Customize your writing environment' },
  ];

  const progressPercentage = (currentWords / projectGoal) * 100;
  const dailyProgress = 342; // Today's words written
  const dailyPercentage = (dailyProgress / dailyGoal) * 100;

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)] flex gap-6">
      {/* Tools Sidebar */}
      <div className="w-1/3 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-4">
        <h2 className="text-xl font-bold mb-4">Writing Tools</h2>
        <div className="space-y-2">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`w-full p-3 rounded-lg text-left transition-all border ${
                  selectedTool === tool.id
                    ? 'bg-custom-gold/20 border-custom-gold/40'
                    : 'bg-custom-gold/10 border-custom-gold/20 hover:bg-custom-gold/15'
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{tool.name}</span>
                </div>
                <p className="text-xs text-custom-gold/60">{tool.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tool Content */}
      <div className="flex-1 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6">
        {/* Writing Goals Tool */}
        {selectedTool === 'goals' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiTarget className="w-6 h-6" />
              Writing Goals
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Daily Goal */}
              <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
                <h4 className="font-bold mb-4">Daily Writing Goal</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Target Words per Day</label>
                    <input
                      type="number"
                      value={dailyGoal}
                      onChange={(e) => setDailyGoal(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Today's Progress</span>
                      <span>{dailyProgress}/{dailyGoal} words</span>
                    </div>
                    <div className="w-full bg-custom-gold/20 rounded-full h-3">
                      <div 
                        className="bg-custom-gold h-3 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(dailyPercentage, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-custom-gold/60 mt-1">
                      {Math.round(dailyPercentage)}% complete
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Goal */}
              <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
                <h4 className="font-bold mb-4">Project Goal</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Target Word Count</label>
                    <input
                      type="number"
                      value={projectGoal}
                      onChange={(e) => setProjectGoal(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Current Progress</span>
                      <span>{currentWords.toLocaleString()}/{projectGoal.toLocaleString()} words</span>
                    </div>
                    <div className="w-full bg-custom-gold/20 rounded-full h-3">
                      <div 
                        className="bg-green-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-custom-gold/60 mt-1">
                      {Math.round(progressPercentage)}% complete • {projectGoal - currentWords} words remaining
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Streak */}
            <div className="mt-6 bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
              <h4 className="font-bold mb-4">Writing Streak</h4>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 14 }).map((_, index) => {
                  const hasWritten = Math.random() > 0.3; // Simulate writing days
                  return (
                    <div
                      key={index}
                      className={`w-8 h-8 rounded border-2 flex items-center justify-center text-xs font-bold ${
                        hasWritten 
                          ? 'bg-green-500/20 border-green-500/40 text-green-500' 
                          : 'bg-gray-500/20 border-gray-500/40 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-custom-gold/70 mt-3">Current streak: 7 days 🔥</p>
            </div>
          </div>
        )}

        {/* Analytics Tool */}
        {selectedTool === 'analytics' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiTrendingUp className="w-6 h-6" />
              Writing Analytics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-2">Words This Week</h4>
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-sm text-custom-gold/60">+23% from last week</p>
              </div>
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-2">Average Session</h4>
                <p className="text-2xl font-bold">1.2 hrs</p>
                <p className="text-sm text-custom-gold/60">847 words/session</p>
              </div>
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <h4 className="font-semibold text-purple-400 mb-2">Most Productive</h4>
                <p className="text-2xl font-bold">2-4 PM</p>
                <p className="text-sm text-custom-gold/60">Peak writing hours</p>
              </div>
            </div>

            {/* Writing Pattern Chart Placeholder */}
            <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
              <h4 className="font-bold mb-4">Writing Pattern (Last 30 Days)</h4>
              <div className="h-48 bg-custom-gold/5 rounded border border-custom-gold/20 flex items-center justify-center">
                <p className="text-custom-gold/60">📊 Chart visualization would appear here</p>
              </div>
            </div>
          </div>
        )}

        {/* Research Notes Tool */}
        {selectedTool === 'research' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiBookOpen className="w-6 h-6" />
              Research Notes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
                  <h4 className="font-bold mb-3">Lighthouse History</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Built in 1847 during maritime expansion</li>
                    <li>• Fresnel lens installed in 1855</li>
                    <li>• Automated in 1962 after the Great Storm</li>
                    <li>• Last keeper: Ezra Blackwood (1920-1962)</li>
                  </ul>
                </div>
                <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
                  <h4 className="font-bold mb-3">Marine Biology Research</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Bioluminescent plankton in local waters</li>
                    <li>• Unusual tidal patterns near the lighthouse</li>
                    <li>• Deep-sea trenches 2 miles offshore</li>
                    <li>• Rare species migrations through the area</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
                  <h4 className="font-bold mb-3">Local Folklore</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• "Watchers in the deep" - recurring legend</li>
                    <li>• Ships guided to safety by mysterious lights</li>
                    <li>• Disappearances during new moon nights</li>
                    <li>• Sea glass with unusual properties</li>
                  </ul>
                </div>
                <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
                  <h4 className="font-bold mb-3">Weather Patterns</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Frequent fog banks in early morning</li>
                    <li>• Storm season: September-November</li>
                    <li>• Unusual electromagnetic activity during storms</li>
                    <li>• Tidal extremes during equinoxes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded font-medium transition flex items-center gap-2">
                <FiBookOpen className="w-4 h-4" />
                Add Research Note
              </button>
            </div>
          </div>
        )}

        {/* Export Tool */}
        {selectedTool === 'export' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiDownload className="w-6 h-6" />
              Export Options
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
                <h4 className="font-bold mb-4">Manuscript Formats</h4>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded text-left transition">
                    <div className="font-medium">📄 PDF Document</div>
                    <div className="text-sm text-custom-gold/70">Professional manuscript format</div>
                  </button>
                  <button className="w-full p-3 bg-green-500/20 hover:bg-green-500/30 rounded text-left transition">
                    <div className="font-medium">📝 Word Document</div>
                    <div className="text-sm text-custom-gold/70">Standard .docx format</div>
                  </button>
                  <button className="w-full p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded text-left transition">
                    <div className="font-medium">📖 EPUB eBook</div>
                    <div className="text-sm text-custom-gold/70">Digital book format</div>
                  </button>
                </div>
              </div>

              <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
                <h4 className="font-bold mb-4">Project Data</h4>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-yellow-500/20 hover:bg-yellow-500/30 rounded text-left transition">
                    <div className="font-medium">👥 Character Profiles</div>
                    <div className="text-sm text-custom-gold/70">Export character sheets</div>
                  </button>
                  <button className="w-full p-3 bg-red-500/20 hover:bg-red-500/30 rounded text-left transition">
                    <div className="font-medium">🗺️ World Building Notes</div>
                    <div className="text-sm text-custom-gold/70">Export locations and lore</div>
                  </button>
                  <button className="w-full p-3 bg-indigo-500/20 hover:bg-indigo-500/30 rounded text-left transition">
                    <div className="font-medium">📅 Timeline Export</div>
                    <div className="text-sm text-custom-gold/70">Export story timeline</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
              <h4 className="font-bold mb-2">⚠️ Export Settings</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Include editor comments</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Include chapter breaks</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Include research notes</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Search Tool */}
        {selectedTool === 'search' && (
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FiSearch className="w-6 h-6" />
              Text Search & Replace
            </h3>

            <div className="space-y-6">
              <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
                <h4 className="font-bold mb-4">Search in Manuscript</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Search for:</label>
                    <input
                      type="text"
                      placeholder="Enter text to search..."
                      className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Replace with:</label>
                    <input
                      type="text"
                      placeholder="Enter replacement text..."
                      className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded font-medium transition">
                      Find All
                    </button>
                    <button className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 rounded font-medium transition">
                      Replace All
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
                <h4 className="font-bold mb-4">Search Results</h4>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  <div className="bg-blue-500/10 rounded p-3 border border-blue-500/20">
                    <p className="text-sm font-medium">Chapter 2, Line 45</p>
                    <p className="text-xs text-custom-gold/70">"...the lighthouse stood majestically..."</p>
                  </div>
                  <div className="bg-blue-500/10 rounded p-3 border border-blue-500/20">
                    <p className="text-sm font-medium">Chapter 5, Line 12</p>
                    <p className="text-xs text-custom-gold/70">"...lighthouse beacon pierced the fog..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Default Tool Selection */}
        {!['goals', 'search'].includes(selectedTool) && (
          <div className="flex items-center justify-center h-full text-custom-gold/60">
            <div className="text-center">
              <FiSettings className="w-12 h-12 mx-auto mb-4" />
              <p>This tool is coming soon!</p>
              <p className="text-sm mt-2">Select another tool from the sidebar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}