import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Image as ImageIcon, Sliders, Award } from 'lucide-react';
import { MANTIN_BIO } from '../data/mantinData';

interface SpeakerKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerKitModal: React.FC<SpeakerKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedBio, setCopiedBio] = useState<string | null>(null);

  if (!isOpen) return null;

  const bioVariants = {
    short: `Mantin Lu is the 2026 Overall Speaker of the Year, a 2x TEDx speaker, and author of the Amazon #1 bestseller "Raise Your Dragon Slayer." Bringing 20+ years as a senior gaming executive, Mantin equips corporate leaders and families to replace fragile willpower with behavioral game architecture.`,
    medium: `Mantin Lu is an internationally acclaimed keynote speaker, 2026 Overall Speaker of the Year, and author of the Amazon #1 bestseller "Raise Your Dragon Slayer." After two decades directing high-velocity studios in the global gaming industry, Mantin turned his engineering lens toward human motivation when his daughter was diagnosed with autism. Today, his signature "SLAY the Dragon" framework teaches Fortune 500 executives, teams, and parents how to stop fixing the person and start redesigning the operational environment for peak focus and joy.`,
    full: MANTIN_BIO.fullBio,
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBio(label);
    setTimeout(() => setCopiedBio(null), 2500);
  };

  const downloadOneSheet = () => {
    // Generate a printable/downloadable text brief for event planners
    const oneSheetText = `MANTIN LU - SPEAKER ONE-SHEET
2026 Overall Speaker of the Year • 2x TEDx Speaker • Amazon #1 Bestselling Author

TOPICS & KEYNOTES:
1. SLAY to LEAD: How to Stop Fixing the Person and Start Changing the Game
2. The Dragon Matrix: Gamifying High-Performance Leadership & Team Resilience
3. Executive Function in the Age of Distraction: Conquering Cognitive Chaos

OFFICIAL BIO:
${bioVariants.medium}

A/V & STAGING REQUIREMENTS:
- Wireless Lavalier or Countryman E6 headset microphone
- 16:9 HDMI projection connected to presenter's laptop for video clips
- Confidence monitor at stage apron with countdown timer
- Small cocktail table with room temperature bottled water

BOOKING & MANAGEMENT CONTACT:
Email: ${MANTIN_BIO.links.email}
Website: ${MANTIN_BIO.links.website}
LinkedIn: ${MANTIN_BIO.links.linkedin}
Calendar: ${MANTIN_BIO.links.calCom}
`;

    const blob = new Blob([oneSheetText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Mantin-Lu-Speaker-OneSheet.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#D8CEBE] overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E5DEC7] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4EA] text-[#C28E47] border border-[#E0D3C1] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#161B22]">
                Event Planner & Speaker Kit
              </h3>
              <p className="text-xs text-[#7A6F62]">
                Official bios, high-resolution media assets, and technical AV specifications
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#7A6F62] hover:text-[#161B22] hover:bg-[#F0EBE1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Action Row: One-Sheet Quick Download */}
          <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#DDD5C7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#161B22]">Official Speaker One-Sheet</div>
              <div className="text-xs text-[#554D41]">
                Complete summary including keynote abstracts, testimonials, and AV rider
              </div>
            </div>
            <button
              id="speaker-kit-download-onesheet"
              onClick={downloadOneSheet}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E232A] hover:bg-[#C28E47] text-white font-bold text-xs transition-colors shrink-0 shadow-xs"
            >
              <Download className="w-4 h-4 text-[#E6C687]" />
              <span>Download Speaker Brief</span>
            </button>
          </div>

          {/* Bios in Multiple Lengths */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#161B22] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#C28E47]" />
                <span>Program & Stage Bios</span>
              </h4>
              <span className="text-[11px] text-[#7A6F62]">Click button to copy directly to clipboard</span>
            </div>

            {/* Short Bio (50 words) */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#8C5E22]">Short Introduction Bio (50 Words)</span>
                <button
                  onClick={() => copyToClipboard(bioVariants.short, 'short')}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E232A] hover:text-[#C28E47]"
                >
                  {copiedBio === 'short' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBio === 'short' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-[#4A433A] leading-relaxed">{bioVariants.short}</p>
            </div>

            {/* Medium Bio (150 words) */}
            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#8C5E22]">Conference Program Bio (150 Words)</span>
                <button
                  onClick={() => copyToClipboard(bioVariants.medium, 'medium')}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E232A] hover:text-[#C28E47]"
                >
                  {copiedBio === 'medium' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedBio === 'medium' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-[#4A433A] leading-relaxed">{bioVariants.medium}</p>
            </div>
          </div>

          {/* High-Resolution Media Headshots */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#161B22] mb-3 flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-[#C28E47]" />
              <span>Approved Press & Stage Photos</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Stage Speaking Profile', path: '/images/mantin/hero-speaking.png' },
                { title: 'Executive Studio Portrait', path: '/images/mantin/portrait-executive.jpg' },
                { title: 'Speaker of the Year Award', path: '/images/mantin/speaker-of-the-year.jpg' },
              ].map((img, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white border border-[#DDD5C7] text-center">
                  <div className="h-32 rounded-lg overflow-hidden bg-gray-100 mb-2 border border-gray-200">
                    <img
                      src={img.path}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-[11px] font-bold text-[#161B22] truncate mb-1">{img.title}</div>
                  <a
                    href={img.path}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#8C5E22] hover:text-[#161B22] font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download Image</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* AV Rider & Technical Setup */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#161B22] mb-3 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-[#C28E47]" />
              <span>Standard A/V & Staging Preferences</span>
            </h4>

            <div className="p-4 rounded-xl bg-white border border-[#DDD5C7] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4A433A]">
              <div>
                <strong className="text-[#161B22] block mb-1">Audio Requirements:</strong>
                <p>Wireless Lavalier or Countryman E6 headset microphone. Handheld mic provided as secondary backup for Q&A.</p>
              </div>
              <div>
                <strong className="text-[#161B22] block mb-1">Visual Projection:</strong>
                <p>16:9 widescreen format via HDMI. Video and embedded audio from presenter laptop.</p>
              </div>
              <div>
                <strong className="text-[#161B22] block mb-1">Confidence Monitor:</strong>
                <p>Stage apron display with present slides, notes, and countdown timer requested.</p>
              </div>
              <div>
                <strong className="text-[#161B22] block mb-1">Staging & Environment:</strong>
                <p>Prefer freedom to move across stage. No podium requested unless mandated by venue.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#E5DEC7] bg-white flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#1E232A] text-white text-xs font-bold hover:bg-[#C28E47] transition-colors"
          >
            Close Speaker Kit
          </button>
        </div>

      </div>
    </div>
  );
};
