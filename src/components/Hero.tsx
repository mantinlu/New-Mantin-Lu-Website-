import React from 'react';
import { Award, Mic, BookOpen, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { MANTIN_BIO } from '../data/mantinData';

interface HeroProps {
  onWatchReel: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchReel, onOpenBooking }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F0E6]/60 via-[#FAF8F5] to-[#FAF8F5]"
    >
      {/* Decorative ambient subtle backdrop pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#C28E47_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authority Headlines & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Prestigious Badges Row */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 pr-4 rounded-full bg-[#EFE9DF] border border-[#DDD5C7] mb-6 shadow-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C28E47] text-white text-xs font-bold tracking-wide uppercase shadow-xs">
                <Award className="w-3.5 h-3.5" />
                2026 Speaker of the Year
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A4E3E]">
                <Mic className="w-3.5 h-3.5 text-[#C28E47]" />
                2x TEDx Speaker
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A4E3E]">
                <BookOpen className="w-3.5 h-3.5 text-[#C28E47]" />
                #1 Amazon Bestseller
              </span>
            </div>

            {/* Core Thesis & Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#161B22] leading-[1.12] mb-5"
            >
              Stop Fixing the Person.{' '}
              <span className="italic font-normal text-[#B37B30] block sm:inline">
                Start Changing the Game.
              </span>
            </h1>

            {/* Sub-headline / Narrative Hook */}
            <p className="text-base sm:text-lg lg:text-xl text-[#4A433A] leading-relaxed mb-8 max-w-2xl font-normal">
              Drawing from <strong className="font-semibold text-[#161B22]">20+ years as a senior gaming executive</strong> and his journey raising an autistic child,{' '}
              <span className="font-semibold text-[#161B22]">Mantin Lu</span> equips Fortune 500 leaders, fast-growing teams, and families to conquer friction, crush burnout, and replace fragile willpower with high-impact behavioral game mechanics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-book"
                href="#booking"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#1E232A] hover:bg-[#C28E47] rounded-md transition-all shadow-md hover:shadow-lg group"
              >
                <span>Book Mantin for Your Event</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                id="hero-cta-watch-reel"
                onClick={onWatchReel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-[#1E232A] bg-white hover:bg-[#F3EFEA] border border-[#DDD5C7] rounded-md transition-all shadow-xs hover:border-[#C28E47]"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF5EE] text-[#C28E47] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Stage Reel</span>
              </button>
            </div>

            {/* Quick Proof Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-[#E5DEC7] w-full text-xs sm:text-sm text-[#5B5245]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C28E47] shrink-0" />
                <span>Tailored Executive Keynotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C28E47] shrink-0" />
                <span>The Dragon Matrix™ Diagnostic</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C28E47] shrink-0" />
                <span>Fortune 500 & Global Stages</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Res Real Photography with Authority Badging */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1E232A]">
                <img
                  src="/images/mantin/hero-speaking.png"
                  alt="Mantin Lu delivering a keynote speech on stage"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top max-h-[540px] transform hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Subtle Gradient Overlay at bottom for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 flex items-end justify-between">
                  <div>
                    <p className="text-white font-serif font-bold text-lg tracking-wide">Mantin Lu</p>
                    <p className="text-[#E6C687] text-xs font-medium">Keynote Speaker & Executive Strategist</p>
                  </div>
                  <span className="text-[11px] bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded font-medium">
                    Live On Stage
                  </span>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-[#E8E2D9] max-w-[240px] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#FAF4EA] border border-[#DFD0BC] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#C28E47]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#7A6B5B] font-bold">Accreditation</div>
                  <div className="text-xs font-bold text-[#1E232A] leading-snug">
                    2026 Overall Speaker of the Year
                  </div>
                </div>
              </div>

              {/* Floating Quote Capsule */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#1E232A] text-white rounded-lg p-3.5 shadow-xl max-w-[210px] hidden sm:block border border-gray-700">
                <p className="text-[11px] italic leading-tight text-[#FAF8F5]">
                  "You do not fix the player. You redesign the game."
                </p>
                <p className="text-[9px] text-[#C28E47] font-semibold mt-1 tracking-wider uppercase">
                  — The SLAY Framework
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
