import React, { useState } from 'react';
import { X, Play, Volume2, Calendar, Award, Sparkles } from 'lucide-react';

interface StageReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
  onBookNow: () => void;
}

export const StageReelModal: React.FC<StageReelModalProps> = ({
  isOpen,
  onClose,
  videoTitle = 'SLAY to LEAD Keynote Highlight Reel',
  onBookNow,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#171B21] text-white rounded-2xl max-w-3xl w-full flex flex-col shadow-2xl border border-white/10 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <h3 className="font-serif font-bold text-base sm:text-lg text-white">
              {videoTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="./images/mantin/stage-talk-1.png"
            alt="Mantin Lu live on stage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 flex flex-col justify-between p-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold bg-[#C28E47] text-white px-2.5 py-1 rounded tracking-wider uppercase">
                Live Keynote Recording
              </span>
              <span className="text-xs text-gray-300">San Francisco Leadership Forum</span>
            </div>

            {/* Simulated Playing State / Interactive Preview */}
            <div className="text-center my-auto">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-[#C28E47] text-white flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Play stage reel"
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </button>
              ) : (
                <div className="bg-black/70 backdrop-blur-md p-6 rounded-2xl max-w-lg mx-auto border border-white/20 animate-in fade-in">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-[#E6C687]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Live Audience Moment</span>
                  </div>
                  <blockquote className="font-serif text-base sm:text-lg italic text-gray-100 leading-snug mb-3">
                    "When you tell a burnt-out employee to 'just try harder', you're giving them an impossible quest with zero health points. Stop fixing the player. Change the game rules."
                  </blockquote>
                  <div className="text-xs text-[#C28E47] font-semibold">
                    — Mantin Lu, Keynote Address
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls Bar */}
            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-white" />
                <span>Auditorium HD Audio & Visuals</span>
              </div>
              <span>Keynote Reel • 2026 Season</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Call to Action */}
        <div className="p-4 sm:p-5 bg-[#1F242C] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-300">
            Inspire your attendees with this high-energy keynote presentation.
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-gray-300 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C28E47] hover:bg-[#A87635] text-white font-bold text-xs transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Mantin for This Talk</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
