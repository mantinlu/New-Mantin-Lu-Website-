import React from 'react';
import { Linkedin, Globe, BookOpen, Calendar, Mail, ArrowUp } from 'lucide-react';
import { MANTIN_BIO } from '../data/mantinData';

interface FooterProps {
  onOpenSpeakerKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSpeakerKit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171B21] text-[#E2E8F0] pt-16 pb-12 border-t border-[#2D3540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A313C]">
          
          {/* Brand & Monogram Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#C28E47] text-white flex items-center justify-center font-serif font-bold text-xl">
                M
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white tracking-tight">
                  MANTIN LU
                </span>
                <p className="text-xs text-[#C28E47] font-semibold">
                  2026 Overall Speaker of the Year • Author • Coach
                </p>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm mb-6">
              Empowering enterprise leaders, fast-growing teams, and families to conquer executive dysfunction and replace fragile willpower with behavioral game architecture.
            </p>

            {/* Social & Contact Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={MANTIN_BIO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#242C37] hover:bg-[#0077B5] text-white flex items-center justify-center transition-colors shadow-xs"
                title="LinkedIn @mantin"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={MANTIN_BIO.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#242C37] hover:bg-[#C28E47] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Current Website mantinlu.com"
                aria-label="Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href={MANTIN_BIO.links.amazonBook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#242C37] hover:bg-[#FF9900] hover:text-black text-white flex items-center justify-center transition-colors shadow-xs"
                title="Buy Raise Your Dragon Slayer on Amazon"
                aria-label="Amazon Book Page"
              >
                <BookOpen className="w-4 h-4" />
              </a>

              <a
                href={MANTIN_BIO.links.calCom}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#242C37] hover:bg-[#C28E47] text-white flex items-center justify-center transition-colors shadow-xs"
                title="Book via Cal.com"
                aria-label="Cal.com Schedule"
              >
                <Calendar className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <a href="#keynotes" className="hover:text-[#C28E47] transition-colors">
                  Keynote Presentations
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#C28E47] transition-colors">
                  Raise Your Dragon Slayer
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-[#C28E47] transition-colors">
                  Executive Coaching & Advisory
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C28E47] transition-colors">
                  About Mantin Lu
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#C28E47] transition-colors">
                  Client Praise & Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB] mb-4">
              Event Planners
            </h4>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              <li>
                <button onClick={onOpenSpeakerKit} className="hover:text-[#C28E47] text-left transition-colors">
                  Download Speaker One-Sheet
                </button>
              </li>
              <li>
                <button onClick={onOpenSpeakerKit} className="hover:text-[#C28E47] text-left transition-colors">
                  Stage & AV Technical Rider
                </button>
              </li>
              <li>
                <button onClick={onOpenSpeakerKit} className="hover:text-[#C28E47] text-left transition-colors">
                  Approved High-Res Headshots
                </button>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#C28E47] transition-colors">
                  Direct Availability Calendar
                </a>
              </li>
              <li>
                <a href={MANTIN_BIO.links.calCom} target="_blank" rel="noopener noreferrer" className="hover:text-[#C28E47] transition-colors">
                  Cal.com Live Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#94A3B8]">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C28E47]" />
                <a href={`mailto:${MANTIN_BIO.links.email}`} className="hover:text-white transition-colors">
                  {MANTIN_BIO.links.email}
                </a>
              </p>
              <p className="text-[11px] leading-relaxed text-[#64748B]">
                Inquiries managed by Success Spectrum Strategies. Response guaranteed within 24 business hours.
              </p>
              <div className="pt-2">
                <a
                  href="#booking"
                  className="inline-block px-3 py-1.5 rounded bg-[#C28E47] hover:bg-[#A87635] text-white font-bold text-[11px] transition-colors"
                >
                  Book an Event Consultation
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Mantin Lu • Success Spectrum Strategies. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href={MANTIN_BIO.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              mantinlu.com
            </a>
            <span>•</span>
            <a href={MANTIN_BIO.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn @mantin
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
