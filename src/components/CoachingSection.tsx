import React from 'react';
import { Compass, Check, ArrowRight, ShieldCheck, Clock, Users, Sparkles } from 'lucide-react';
import { COACHING_PROGRAMS } from '../data/mantinData';

interface CoachingSectionProps {
  onSelectCoachingProgram: (programTitle: string) => void;
}

export const CoachingSection: React.FC<CoachingSectionProps> = ({ onSelectCoachingProgram }) => {
  return (
    <section id="coaching" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            Executive & Family Advisory
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161B22] tracking-tight leading-tight mb-4">
            Transformative Coaching Grounded in Game Mechanics
          </h2>
          <p className="text-base sm:text-lg text-[#554D41] leading-relaxed">
            Whether you are a senior executive navigating high-stakes organizational friction or a devoted parent seeking to restore harmony for a neurodivergent child, Mantin provides tailored advisory systems that permanently replace exhausting willpower battles with sustainable structures.
          </p>
        </div>

        {/* 3 Coaching Programs Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COACHING_PROGRAMS.map((prog, index) => (
            <div
              key={prog.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                index === 0
                  ? 'bg-white border-2 border-[#C28E47] shadow-xl relative ring-4 ring-[#C28E47]/10'
                  : 'bg-white border border-[#DDD5C7] shadow-md hover:shadow-lg'
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      index === 0
                        ? 'bg-[#C28E47] text-white'
                        : 'bg-[#F2ECE2] text-[#7A613A]'
                    }`}
                  >
                    {prog.badge}
                  </span>
                  <span className="text-xs text-[#7A6F62] font-medium">
                    {prog.commitment}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161B22] mb-2 leading-snug">
                  {prog.title}
                </h3>
                <p className="text-xs font-semibold text-[#8C5E22] mb-4">
                  {prog.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#554D41] leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Target & Best For */}
                <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E2D9] mb-6 text-xs">
                  <span className="font-bold text-[#161B22] block mb-1">Target Audience:</span>
                  <span className="text-[#554D41]">{prog.target}</span>
                </div>

                {/* Deliverables */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#161B22] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C28E47]" />
                    <span>Included in Engagement:</span>
                  </div>
                  {prog.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#38322B]">
                      <Check className="w-4 h-4 text-[#8C5E22] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#EAE4D8]">
                <a
                  href="#booking"
                  onClick={() => onSelectCoachingProgram(prog.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                    index === 0
                      ? 'bg-[#1E232A] hover:bg-[#C28E47] text-white shadow-md'
                      : 'bg-[#F2ECE2] hover:bg-[#E7DFC8] text-[#1E232A] border border-[#DDD5C7]'
                  }`}
                >
                  <span>Apply for Advisory / Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Advisory Assurance Footer */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#EFEAE1] border border-[#D8CEBE] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#8C5E22] shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#161B22]">
                Certified Independent Facilitator & Executive Confidentiality
              </h4>
              <p className="text-xs sm:text-sm text-[#554D41]">
                All executive strategy, team telemetry, and family neurodiversity consults are conducted under strict non-disclosure protections.
              </p>
            </div>
          </div>

          <a
            href="#booking"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-xs sm:text-sm font-bold text-[#161B22] border border-[#DDD5C7] shadow-xs"
          >
            Schedule Diagnostic Call
          </a>
        </div>

      </div>
    </section>
  );
};
