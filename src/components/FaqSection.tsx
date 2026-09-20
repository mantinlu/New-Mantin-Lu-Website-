import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/mantinData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#F6F2EA] border-b border-[#E5DEC7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D2] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#161B22] tracking-tight">
            Event Organizer & Client Inquiries
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#DDD5C7] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#161B22]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF4EA] text-[#8C5E22] flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-[#4A433A] leading-relaxed border-t border-[#F0EBE1] pt-3 bg-[#FCFBF8]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-xs text-[#7A6F62]">
          Have a unique requirement or custom executive summit?{' '}
          <a href="#booking" className="font-bold text-[#8C5E22] hover:underline">
            Reach out directly through the client booking form
          </a>
        </div>

      </div>
    </section>
  );
};
