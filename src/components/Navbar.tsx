import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Download, Linkedin, ExternalLink } from 'lucide-react';
import { MANTIN_BIO } from '../data/mantinData';

interface NavbarProps {
  onOpenSpeakerKit: () => void;
  onSelectBookingService?: (service: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSpeakerKit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Keynotes', href: '#keynotes' },
    { label: 'The Book', href: '#book' },
    { label: 'Coaching', href: '#coaching' },
    { label: 'About Mantin', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E2D9] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <a
            id="nav-logo-link"
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1E232A] text-[#F5F1EB] flex items-center justify-center font-serif font-bold text-xl tracking-wider shadow-sm group-hover:bg-[#C28E47] transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-[#1E232A] group-hover:text-[#C28E47] transition-colors leading-tight">
                MANTIN LU
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#7A6B5B] font-semibold">
                Keynote Speaker & Coach
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A433A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="hover:text-[#C28E47] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C28E47] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-speaker-kit-btn"
              onClick={onOpenSpeakerKit}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#4A433A] hover:text-[#1E232A] bg-[#F1ECE4] hover:bg-[#E8E1D5] rounded-md transition-all border border-[#DFD7CB]"
            >
              <Download className="w-3.5 h-3.5 text-[#C28E47]" />
              <span>Speaker Kit</span>
            </button>

            <a
              id="nav-book-mantin-btn"
              href="#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1E232A] hover:bg-[#C28E47] rounded-md transition-colors shadow-sm hover:shadow"
            >
              <Calendar className="w-4 h-4 text-[#E6C687]" />
              <span>Check Availability</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#booking"
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#1E232A] rounded-md"
            >
              Book
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A433A] hover:text-[#1E232A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#1E232A] hover:text-[#C28E47] hover:bg-[#F3EFEA] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8E2D9] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSpeakerKit();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#1E232A] bg-[#F1ECE4] hover:bg-[#E8E1D5] rounded-md border border-[#DFD7CB]"
              >
                <Download className="w-4 h-4 text-[#C28E47]" />
                Download Speaker One-Sheet & Kit
              </button>

              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1E232A] hover:bg-[#C28E47] rounded-md shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#E6C687]" />
                Book Mantin for Your Event
              </a>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-[#7A6B5B]">
                <a
                  href={MANTIN_BIO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#C28E47]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={MANTIN_BIO.links.calCom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#C28E47]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Cal.com/mantin
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
