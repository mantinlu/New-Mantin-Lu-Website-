import React, { useState } from 'react';
import { MessageSquareQuote, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/mantinData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'corporate' | 'conference' | 'coaching'>('all');

  const filteredTestimonials = activeCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              Client & Event Praise
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161B22] tracking-tight leading-tight">
              Trusted by Fortune 500 Leaders, Event Chairs, and Thriving Families
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'corporate', label: 'Enterprise & Tech' },
              { id: 'conference', label: 'Keynote Summits' },
              { id: 'coaching', label: 'Families & 1:1' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1E232A] text-white shadow-xs'
                    : 'bg-white text-[#554D41] border border-[#DDD5C7] hover:bg-[#F2ECE2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DDD5C7] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#E29B12]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C5E22] bg-[#FAF3E8] px-2 py-0.5 rounded">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Engagement
                  </span>
                </div>

                {/* Highlight Pill */}
                <div className="text-xs font-bold text-[#161B22] bg-[#FAF8F5] p-2.5 rounded-lg border border-[#ECE5D9] mb-4">
                  "{item.highlight}"
                </div>

                {/* Main Quote */}
                <p className="text-xs sm:text-sm text-[#4A433A] leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#EAE4D8] flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#161B22]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#7A6F62] font-medium">
                    {item.title}, <span className="text-[#8C5E22]">{item.organization}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Banner Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#7A6F62] mb-3">
            Planning an upcoming convention, all-hands summit, or executive offsite?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8C5E22] hover:text-[#161B22] underline underline-offset-4 transition-colors"
          >
            <span>Check Mantin’s open speaking dates & request an event quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
