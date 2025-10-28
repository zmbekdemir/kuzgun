"use client";
import { useState } from "react";
import { FiPlus, FiEdit3, FiTrash2, FiUser, FiHeart, FiTarget, FiBookOpen } from "react-icons/fi";

interface Character {
  id: number;
  name: string;
  role: string;
  age: number;
  description: string;
  personality: string[];
  backstory: string;
  goals: string;
  relationships: string[];
  appearance: string;
  notes: string;
}

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Protagonist",
      age: 28,
      description: "A marine biologist who inherits her grandmother's lighthouse",
      personality: ["Curious", "Determined", "Analytical", "Empathetic"],
      backstory: "Grew up in the city, always felt drawn to the ocean. Lost her parents young and was raised by her grandmother.",
      goals: "Uncover the truth about her grandmother's secrets and the lighthouse's history",
      relationships: ["Grandmother (deceased)", "Dr. Marcus Webb (mentor)", "Elena Santos (best friend)"],
      appearance: "Auburn hair, green eyes, 5'6\", often wears practical clothing suitable for coastal weather",
      notes: "Has a fear of deep water despite being a marine biologist - this creates internal conflict"
    },
    {
      id: 2,
      name: "Thomas Blackwood",
      role: "Antagonist",
      age: 45,
      description: "Local historian with hidden motives",
      personality: ["Charming", "Manipulative", "Intelligent", "Secretive"],
      backstory: "Descendant of the original lighthouse keeper. Has been searching for something hidden in the lighthouse for years.",
      goals: "Retrieve the artifact hidden in the lighthouse before Sarah discovers it",
      relationships: ["Sarah Mitchell (adversary)", "Mayor Henderson (ally)", "The Blackwood family legacy"],
      appearance: "Tall, silver-haired, always impeccably dressed, piercing blue eyes",
      notes: "Knows more about Sarah's grandmother than he lets on"
    }
  ]);

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(characters[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [newCharacter, setNewCharacter] = useState<Partial<Character>>({
    name: "",
    role: "",
    age: 25,
    description: "",
    personality: [],
    backstory: "",
    goals: "",
    relationships: [],
    appearance: "",
    notes: ""
  });

  const handleAddCharacter = () => {
    if (newCharacter.name && newCharacter.role) {
      const character: Character = {
        id: Date.now(),
        name: newCharacter.name || "",
        role: newCharacter.role || "",
        age: newCharacter.age || 25,
        description: newCharacter.description || "",
        personality: newCharacter.personality || [],
        backstory: newCharacter.backstory || "",
        goals: newCharacter.goals || "",
        relationships: newCharacter.relationships || [],
        appearance: newCharacter.appearance || "",
        notes: newCharacter.notes || ""
      };
      setCharacters([...characters, character]);
      setNewCharacter({
        name: "",
        role: "",
        age: 25,
        description: "",
        personality: [],
        backstory: "",
        goals: "",
        relationships: [],
        appearance: "",
        notes: ""
      });
      setShowAddForm(false);
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "protagonist": return "text-green-500 bg-green-500/10 border-green-500/20";
      case "antagonist": return "text-red-500 bg-red-500/10 border-red-500/20";
      case "supporting": return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      case "minor": return "text-gray-500 bg-gray-500/10 border-gray-500/20";
      default: return "text-custom-gold bg-custom-gold/10 border-custom-gold/20";
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-200px)] flex gap-6">
      {/* Character List */}
      <div className="w-1/3 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Characters</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="p-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded transition"
            title="Add Character"
          >
            <FiPlus className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto">
          {characters.map((character) => (
            <div
              key={character.id}
              onClick={() => setSelectedCharacter(character)}
              className={`p-4 rounded-lg cursor-pointer transition-all border ${
                selectedCharacter?.id === character.id 
                  ? 'bg-custom-gold/20 border-custom-gold/40' 
                  : 'bg-custom-gold/10 border-custom-gold/20 hover:bg-custom-gold/15'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold">{character.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(character.role)}`}>
                  {character.role}
                </span>
              </div>
              <p className="text-sm text-custom-gold/70 mb-1">Age: {character.age}</p>
              <p className="text-xs text-custom-gold/60 line-clamp-2">{character.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Character Details */}
      <div className="flex-1 bg-custom-gold/5 rounded-lg border border-custom-gold/20 p-6">
        {selectedCharacter ? (
          <div className="h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <FiUser className="w-6 h-6" />
                <h2 className="text-2xl font-bold">{selectedCharacter.name}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getRoleColor(selectedCharacter.role)}`}>
                  {selectedCharacter.role}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded transition"
                  title="Edit Character"
                >
                  <FiEdit3 className="w-4 h-4" />
                </button>
                <button
                  className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded transition"
                  title="Delete Character"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FiUser className="w-4 h-4" />
                    Basic Information
                  </h4>
                  <div className="bg-custom-gold/10 rounded p-3 space-y-2">
                    <p><span className="font-medium">Age:</span> {selectedCharacter.age}</p>
                    <p><span className="font-medium">Description:</span> {selectedCharacter.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Personality Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCharacter.personality.map((trait, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 rounded text-xs">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FiTarget className="w-4 h-4" />
                    Goals & Motivation
                  </h4>
                  <div className="bg-custom-gold/10 rounded p-3">
                    <p className="text-sm">{selectedCharacter.goals}</p>
                  </div>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FiBookOpen className="w-4 h-4" />
                    Backstory
                  </h4>
                  <div className="bg-custom-gold/10 rounded p-3">
                    <p className="text-sm">{selectedCharacter.backstory}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Physical Appearance</h4>
                  <div className="bg-custom-gold/10 rounded p-3">
                    <p className="text-sm">{selectedCharacter.appearance}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FiHeart className="w-4 h-4" />
                    Relationships
                  </h4>
                  <div className="space-y-1">
                    {selectedCharacter.relationships.map((relationship, index) => (
                      <div key={index} className="bg-custom-gold/10 rounded p-2">
                        <p className="text-sm">{relationship}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Writer's Notes</h4>
              <div className="bg-yellow-500/10 rounded p-3 border border-yellow-500/20">
                <p className="text-sm">{selectedCharacter.notes}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-custom-gold/60">
            <div className="text-center">
              <FiUser className="w-12 h-12 mx-auto mb-4" />
              <p>Select a character to view details</p>
            </div>
          </div>
        )}
      </div>

      {/* Add Character Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-custom-brown rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Add New Character</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newCharacter.name || ""}
                  onChange={(e) => setNewCharacter({...newCharacter, name: e.target.value})}
                  className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={newCharacter.role || ""}
                  onChange={(e) => setNewCharacter({...newCharacter, role: e.target.value})}
                  className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                >
                  <option value="">Select role...</option>
                  <option value="Protagonist">Protagonist</option>
                  <option value="Antagonist">Antagonist</option>
                  <option value="Supporting">Supporting</option>
                  <option value="Minor">Minor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  value={newCharacter.age || 25}
                  onChange={(e) => setNewCharacter({...newCharacter, age: Number(e.target.value)})}
                  className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={newCharacter.description || ""}
                  onChange={(e) => setNewCharacter({...newCharacter, description: e.target.value})}
                  className="w-full px-3 py-2 bg-transparent border border-custom-gold/30 rounded focus:outline-none focus:border-custom-gold h-20 resize-none"
                  placeholder="Brief character description..."
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddCharacter}
                className="px-4 py-2 bg-custom-gold/20 hover:bg-custom-gold/30 rounded font-medium transition"
              >
                Add Character
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 rounded font-medium transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}