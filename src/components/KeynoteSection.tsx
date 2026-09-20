import React, { useState } from 'react';
import { Sparkles, Clock, Monitor, Target, CheckCircle2, ArrowRight, Play, FileText } from 'lucide-react';
import { KEYNOTE_TALKS } from '../data/mantinData';
import { Keynote } from '../types';

interface KeynoteSectionProps {
  onSelectKeynoteForBooking: (keynoteTitle: string) => void;
  onOpenSpeakerKit: () => void;
  onWatchVideo: (videoTitle: string) => void;
}

export const KeynoteSection: React.FC<KeynoteSectionProps> = ({
  onSelectKeynoteForBooking,
  onOpenSpeakerKit,
  onWatchVideo,
}) => {
  const [selectedKeynoteId, setSelectedKeynoteId] = useState<string>(KEYNOTE_TALKS[0].id);

  const activeKeynote = KEYNOTE_TALKS.find((k) => k.id === selectedKeynoteId) || KEYNOTE_TALKS[0];

  return (
    <section id="keynotes" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Keynote Presentations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161B22] tracking-tight leading-tight mb-4">
            Unforgettable Stage Keynotes Crafted for High-Stakes Impact
          </h2>
          <p className="text-base sm:text-lg text-[#554D41] leading-relaxed">
            Mantin blends two decades of AAA gaming behavioral architecture with deep human emotion. Every talk delivers zero fluff, visceral storytelling, and immediately implementable tactical frameworks.
          </p>
        </div>

        {/* Keynote Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {KEYNOTE_TALKS.map((keynote) => {
            const isActive = keynote.id === selectedKeynoteId;
            return (
              <button
                key={keynote.id}
                id={`keynote-tab-${keynote.id}`}
                onClick={() => setSelectedKeynoteId(keynote.id)}
                className={`text-left p-4 sm:p-5 rounded-xl transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1E232A] text-white border-[#1E232A] shadow-md ring-1 ring-[#C28E47]/50'
                    : 'bg-white text-[#2B3037] border-[#E5DEC7] hover:border-[#C28E47] hover:bg-[#FDFBF7]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-[#C28E47] text-white'
                          : 'bg-[#F0EBE1] text-[#78613F]'
                      }`}
                    >
                      {keynote.featuredBadge}
                    </span>
                    <span className={`text-xs ${isActive ? 'text-[#9AA2B1]' : 'text-[#8A8174]'}`}>
                      {keynote.duration.split('(')[0].trim()}
                    </span>
                  </div>
                  <h3 className={`font-serif font-bold text-base sm:text-lg leading-snug line-clamp-2 ${
                    isActive ? 'text-[#FAF8F5]' : 'text-[#161B22]'
                  }`}>
                    {keynote.title.split(':')[0]}
                  </h3>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold">
                  <span className={isActive ? 'text-[#E6C687]' : 'text-[#8C5E22]'}>
                    {isActive ? 'Currently Viewing' : 'Explore Program'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#E6C687]' : 'text-[#8C5E22]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Keynote Detailed Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#E5DEC7] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Stage Visual & Details Panel */}
            <div className="lg:col-span-5 bg-[#171B21] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Stage Photo */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 mb-6 group">
                <img
                  src={activeKeynote.image}
                  alt={activeKeynote.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={() => onWatchVideo(activeKeynote.title)}
                  className="absolute inset-0 bg-black/40 hover:bg-black/30 flex items-center justify-center transition-colors group"
                  aria-label="Play talk sample clip"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C28E47] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </button>
                <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-sm text-[11px] text-white/90 px-2.5 py-1 rounded">
                  Click to Preview Video Clip
                </div>
              </div>

              {/* Meta information tags */}
              <div className="space-y-3 text-xs text-[#CBD5E1] mb-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C28E47] shrink-0" />
                  <span><strong>Duration:</strong> {activeKeynote.duration}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Monitor className="w-4 h-4 text-[#C28E47] shrink-0" />
                  <span><strong>Delivery:</strong> {activeKeynote.format}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-[#C28E47] shrink-0 mt-0.5" />
                  <div>
                    <strong>Ideal Audiences:</strong>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {activeKeynote.targetAudience.map((aud, i) => (
                        <span key={i} className="bg-white/10 text-white/90 text-[10px] px-2 py-0.5 rounded">
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Speaker Kit trigger */}
              <button
                onClick={onOpenSpeakerKit}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#E6C687]" />
                <span>Download Speaker One-Sheet & AV Rider</span>
              </button>
            </div>

            {/* Content & Outcomes Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#8C5E22] bg-[#F7F2E9] px-3 py-1 rounded-md mb-3">
                  Keynote Blueprint
                </div>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#161B22] leading-tight mb-2">
                  {activeKeynote.title}
                </h3>
                
                <p className="text-sm sm:text-base font-semibold text-[#8C5E22] mb-4">
                  {activeKeynote.subtitle}
                </p>

                <p className="text-sm text-[#4A433A] leading-relaxed mb-6">
                  {activeKeynote.description}
                </p>

                {/* Core Takeaways / Outcomes */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#161B22] mb-3 flex items-center gap-1.5">
                    <span>What Your Audience Walks Away With:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeKeynote.outcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#ECE6DC]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C28E47] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#38322B] leading-relaxed">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions for this Keynote */}
              <div className="pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#7A6F62]">Ready to bring this talk to your event?</div>
                  <div className="text-sm font-bold text-[#161B22]">Custom tailored to your event theme</div>
                </div>

                <a
                  href="#booking"
                  onClick={() => onSelectKeynoteForBooking(activeKeynote.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#1E232A] hover:bg-[#C28E47] rounded-md transition-colors shadow-sm"
                >
                  <span>Request Keynote Availability</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C687]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
