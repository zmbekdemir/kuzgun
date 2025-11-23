"use client";
import { useState } from "react";
import { FiPlus, FiMap, FiHome, FiGlobe, FiBookOpen, FiEdit3 } from "react-icons/fi";

interface Location {
  id: number;
  name: string;
  type: string;
  description: string;
  significance: string;
  connectedTo: string[];
  notes: string;
  atmosphere: string;
}

interface WorldElement {
  id: number;
  category: string;
  name: string;
  description: string;
  rules: string[];
  examples: string[];
}

export default function WorldBuildingPage() {
  const [activeTab, setActiveTab] = useState<'locations' | 'cultures' | 'magic' | 'history'>('locations');
  
  const [locations, setLocations] = useState<Location[]>([
    {
      id: 1,
      name: "Beacon Point Lighthouse",
      type: "Landmark",
      description: "A 19th-century lighthouse perched on rocky cliffs overlooking the Atlantic Ocean",
      significance: "Central to the mystery - contains hidden chambers and ancient artifacts",
      connectedTo: ["Coastal Village", "Hidden Cave System"],
      notes: "Built in 1847, automated in 1962, abandoned until Sarah's inheritance",
      atmosphere: "Mysterious, windswept, isolated yet commanding"
    },
    {
      id: 2,
      name: "Saltmere Village",
      type: "Settlement",
      description: "A small fishing village with weathered houses and narrow cobblestone streets",
      significance: "Home to locals who know the lighthouse's secrets but are reluctant to share",
      connectedTo: ["Beacon Point Lighthouse", "Harbor", "Old Cemetery"],
      notes: "Population: ~300, economy based on fishing and tourism",
      atmosphere: "Quaint but secretive, fog-shrouded mornings, tight-knit community"
    }
  ]);

  const [worldElements, setWorldElements] = useState<WorldElement[]>([
    {
      id: 1,
      category: "Culture",
      name: "Maritime Traditions",
      description: "Local customs and beliefs centered around the sea",
      rules: ["Never sail during the new moon", "Always leave an offering for safe passage", "The lighthouse keeper's word is law"],
      examples: ["Annual Blessing of the Fleet ceremony", "Sea glass jewelry as protection charms"]
    },
    {
      id: 2,
      category: "History",
      name: "The Great Storm of 1962",
      description: "A devastating hurricane that changed the village forever",
      rules: ["Marked the end of the lighthouse keeper era", "Many records were lost", "Some say it wasn't natural"],
      examples: ["The lighthouse was automated after this event", "Several families left the village permanently"]
    }
  ]);

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(locations[0]);
  const [showAddLocation, setShowAddLocation] = useState(false);

  const tabs = [
    { key: 'locations' as const, label: 'LOCATIONS', icon: FiMap },
    { key: 'cultures' as const, label: 'CULTURES', icon: FiGlobe },
    { key: 'magic' as const, label: 'MAGIC SYSTEM', icon: FiBookOpen },
    { key: 'history' as const, label: 'HISTORY', icon: FiEdit3 },
  ];

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)]">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-custom-gold/10 rounded-lg p-1 border border-custom-gold/20">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-custom-gold/30 text-custom-gold'
                    : 'text-custom-gold/60 hover:text-custom-gold hover:bg-custom-gold/20'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Locations Tab */}
      {activeTab === 'locations' && (
        <div className="flex gap-6 h-[calc(100vh-350px)]">
          {/* Location List */}
          <div className="w-1/3 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Locations</h3>
              <button
                onClick={() => setShowAddLocation(true)}
                className="p-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded transition"
              >
                <FiPlus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 overflow-y-auto max-h-full">
              {locations.map((location) => (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`p-3 rounded cursor-pointer transition-all border ${
                    selectedLocation?.id === location.id
                      ? 'bg-custom-gold/20 border-custom-gold/40'
                      : 'bg-custom-gold/10 border-custom-gold/20 hover:bg-custom-gold/15'
                  }`}
                >
                  <h4 className="font-bold">{location.name}</h4>
                  <p className="text-sm text-custom-gold/70">{location.type}</p>
                  <p className="text-xs text-custom-gold/60 mt-1 line-clamp-2">{location.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Details */}
          <div className="flex-1 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6">
            {selectedLocation ? (
              <div className="h-full overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <FiMap className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{selectedLocation.name}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm font-medium">
                    {selectedLocation.type}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Description</h4>
                    <div className="bg-custom-gold/10 rounded p-4">
                      <p>{selectedLocation.description}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Story Significance</h4>
                    <div className="bg-green-500/10 rounded p-4 border border-green-500/20">
                      <p>{selectedLocation.significance}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Atmosphere & Mood</h4>
                    <div className="bg-purple-500/10 rounded p-4 border border-purple-500/20">
                      <p>{selectedLocation.atmosphere}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Connected Locations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.connectedTo.map((connection, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                          {connection}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Writer's Notes</h4>
                    <div className="bg-yellow-500/10 rounded p-4 border border-yellow-500/20">
                      <p className="text-sm">{selectedLocation.notes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-custom-gold/60">
                <div className="text-center">
                  <FiMap className="w-12 h-12 mx-auto mb-4" />
                  <p>Select a location to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Other Tabs Content */}
      {activeTab !== 'locations' && (
        <div className="bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6 h-[calc(100vh-350px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {worldElements
              .filter(element => element.category.toLowerCase() === activeTab.replace('magic', 'magic system'))
              .map((element) => (
                <div key={element.id} className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
                  <h4 className="font-bold text-lg mb-3">{element.name}</h4>
                  <p className="text-sm text-custom-gold/80 mb-4">{element.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Rules & Principles</h5>
                      <ul className="space-y-1">
                        {element.rules.map((rule, index) => (
                          <li key={index} className="text-sm text-custom-gold/70 flex items-start gap-2">
                            <span className="w-1 h-1 bg-custom-gold rounded-full mt-2 flex-shrink-0" />
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Examples</h5>
                      <div className="space-y-1">
                        {element.examples.map((example, index) => (
                          <div key={index} className="bg-blue-500/10 rounded p-2 border border-blue-500/20">
                            <p className="text-sm">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            
            {/* Add New Element Button */}
            <div className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20 border-dashed flex items-center justify-center cursor-pointer hover:bg-custom-gold/15 transition">
              <div className="text-center text-custom-gold/60">
                <FiPlus className="w-8 h-8 mx-auto mb-2" />
                <p>Add New {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Element</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}