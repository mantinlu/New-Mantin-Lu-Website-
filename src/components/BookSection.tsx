import React, { useState } from 'react';
import { BookOpen, Star, ShoppingCart, BookCheck, Check, ArrowUpRight, BookOpenText, X, Sparkles } from 'lucide-react';
import { BOOK_DETAILS } from '../data/mantinData';

interface BookSectionProps {
  onOpenBulkOrder: () => void;
}

export const BookSection: React.FC<BookSectionProps> = ({ onOpenBulkOrder }) => {
  const [showExcerptModal, setShowExcerptModal] = useState(false);

  return (
    <section id="book" className="py-20 lg:py-28 bg-[#F6F2EA] border-b border-[#E5DEC7] relative overflow-hidden">
      {/* Decorative ambient subtle background styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE2D2] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Amazon #1 Bestselling Book
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161B22] tracking-tight leading-tight mb-4">
            Raise Your Dragon Slayer
          </h2>
          <p className="text-base sm:text-lg text-[#554D41]">
            Equip your child—and your team—to conquer the dragons of executive dysfunction and reclaim clarity, confidence, and peace.
          </p>
        </div>

        {/* Main Grid: Book Card + Framework + Purchasing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Real Photo with Book & Amazon Trust Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1E232A]">
                <img
                  src={BOOK_DETAILS.photoWithBook}
                  alt="Mantin Lu holding his book Raise Your Dragon Slayer"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center max-h-[480px]"
                />
                
                {/* Floating Amazon Badge */}
                <div className="absolute top-4 left-4 bg-[#FF9900] text-black px-3 py-1.5 rounded-md font-bold text-xs shadow-lg flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  <span>#1 Bestseller on Amazon</span>
                </div>
              </div>

              {/* Verified Reviews Pill */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-sm flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#E29B12]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-sm font-bold text-[#1E232A] ml-1.5">4.9 / 5.0</span>
                  </div>
                  <div className="text-xs text-[#7A6F62] mt-0.5">
                    140+ Verified Reader Reviews on Amazon
                  </div>
                </div>

                <a
                  href={BOOK_DETAILS.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#8C5E22] hover:text-[#1E232A] flex items-center gap-1"
                >
                  Read Reviews <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right: Synopsis, The SLAY Framework & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#DDD5C7] shadow-lg">
              
              <div className="border-b border-[#EBE5DA] pb-6 mb-6">
                <span className="text-xs font-bold text-[#8C5E22] uppercase tracking-wider">
                  The Blueprint for Executive Function
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#161B22] mt-1 mb-3">
                  Why Brute-Force Willpower Fails—And What Actually Works
                </h3>
                <p className="text-sm sm:text-base text-[#4A433A] leading-relaxed">
                  {BOOK_DETAILS.overview}
                </p>
              </div>

              {/* The S.L.A.Y. Framework Grid */}
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#161B22] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C28E47]" />
                  <span>The Core S.L.A.Y. Method:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BOOK_DETAILS.frameworkSummary.map((item) => (
                    <div
                      key={item.letter}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1E232A] text-[#E6C687] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                        {item.letter}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#161B22]">{item.word}</div>
                        <div className="text-[11px] text-[#554D41] leading-snug mt-0.5">
                          {item.explanation}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2 mb-8 text-xs sm:text-sm text-[#423C34]">
                {BOOK_DETAILS.takeaways.map((takeaway, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8C5E22] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>

              {/* Purchase and Excerpt CTAs */}
              <div className="pt-6 border-t border-[#EBE5DA] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Amazon Buy Button */}
                <a
                  id="book-buy-amazon-btn"
                  href={BOOK_DETAILS.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#FF9900] hover:bg-[#F28B00] text-black font-bold text-sm transition-all shadow-md hover:shadow"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Buy on Amazon (Paperback & Kindle)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {/* Free Chapter Preview */}
                <button
                  id="book-preview-excerpt-btn"
                  onClick={() => setShowExcerptModal(true)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-lg bg-[#FAF8F5] hover:bg-[#EFE9DF] border border-[#D5CCBE] text-[#1E232A] font-semibold text-sm transition-all"
                >
                  <BookOpenText className="w-4 h-4 text-[#8C5E22]" />
                  <span>Read Chapter Excerpt</span>
                </button>
              </div>

              {/* Bulk orders note */}
              <div className="mt-4 text-center">
                <button
                  onClick={onOpenBulkOrder}
                  className="text-xs text-[#7A6F62] hover:text-[#8C5E22] underline underline-offset-2 transition-colors"
                >
                  Hosting a summit or school workshop? Inquire about discounted bulk author copies & signed bookplates →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Chapter Excerpt Modal */}
      {showExcerptModal && (
        <div
          id="book-excerpt-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#D8CEBE] overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#E5DEC7] flex items-center justify-between bg-white">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C5E22]">
                  Exclusive Preview
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161B22]">
                  {BOOK_DETAILS.sampleExcerpt.title}
                </h3>
              </div>
              <button
                onClick={() => setShowExcerptModal(false)}
                className="p-2 rounded-lg text-[#7A6F62] hover:text-[#1E232A] hover:bg-[#F0EBE1]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm sm:text-base text-[#38322B] leading-relaxed font-normal">
              {BOOK_DETAILS.sampleExcerpt.content.map((paragraph, index) => (
                <p key={index} className={index === 0 ? 'italic font-serif text-lg text-[#161B22]' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-[#E5DEC7] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#7A6F62]">
                Continue reading in <span className="font-bold text-[#161B22]">Raise Your Dragon Slayer</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowExcerptModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#554D41] hover:text-[#161B22]"
                >
                  Close
                </button>
                <a
                  href={BOOK_DETAILS.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#FF9900] hover:bg-[#F28B00] text-black font-bold text-xs"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Order on Amazon</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
