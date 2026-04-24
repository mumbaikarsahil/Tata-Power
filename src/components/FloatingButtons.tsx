import React, { useState, useEffect } from "react";
import { Sun, X, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  const huggingFaceUrl = "https://devkstra-helio-cast-solar.hf.space";
  // The "News Ticker" prompts
  const suggestions = [
    "Get your solar forecast ☀️",
    "Compare with your normal bill ⚡",
    "Ask Helio Cast a question 🤖"
  ];

  // Cycle through suggestions every 4 seconds
  useEffect(() => {
    if (isOpen) return; // Pause ticker when open
    
    const interval = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % suggestions.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <>
      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5" />
              <span className="font-semibold tracking-wide text-sm">Helio Cast</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Hugging Face App Embed */}
          <div className="flex-1 w-full bg-gray-50">
            <iframe
              src={huggingFaceUrl}
              className="w-full h-full border-none"
              title="Helio Cast App"
            />
          </div>

          {/* Custom Footer */}
          <div className="bg-white p-2 text-center text-[10px] text-gray-400 border-t border-gray-100 uppercase tracking-widest">
            Powered by <span className="font-semibold text-gray-600">Biillo systems</span> 1.2v
          </div>
        </div>
      )}

      {/* Floating Button & Ticker Area */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {/* Ticker Bubble (Only shows when chat is closed) */}
        {!isOpen && (
          <div className="bg-white border border-gray-100 shadow-lg rounded-2xl px-4 py-2.5 mr-2 cursor-pointer transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-2"
               onClick={() => setIsOpen(true)}>
            <p className="text-sm font-medium text-gray-700 w-[200px] text-center"
               key={suggestionIndex} // Forces a subtle re-render jump for the animation
            >
              {suggestions[suggestionIndex]}
            </p>
            {/* Little triangle pointing to the button */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
          </div>
        )}

        {/* Standard Logo Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-black text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${isOpen ? 'rotate-90 scale-90' : 'hover:scale-110'}`}
          aria-label="Open Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;