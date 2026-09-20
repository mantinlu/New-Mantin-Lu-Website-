import React from 'react';
import { Award, Heart, Gamepad2, Compass, Linkedin, ExternalLink, Quote } from 'lucide-react';
import { MANTIN_BIO } from '../data/mantinData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F6F2EA] border-b border-[#E5DEC7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Montage with Real Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo: Executive Portrait */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1E232A]">
                <img
                  src="/images/mantin/portrait-executive.jpg"
                  alt="Mantin Lu portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top max-h-[460px]"
                />
              </div>

              {/* Inset Secondary Photo: With Daughter */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 w-44 sm:w-52 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-[#1E232A]">
                <img
                  src="/images/mantin/with-daughter.png"
                  alt="Mantin Lu with his daughter"
                  referrerPolicy="no-referrer"
                  className="w-full h-32 sm:h-40 object-cover object-center"
                />
                <div className="p-2 bg-[#1E232A] text-white text-center">
                  <p className="text-[10px] font-semibold text-[#E6C687]">The Heart Behind The Mission</p>
                  <p className="text-[9px] text-[#A8B2C1]">Father & Autism Advocate</p>
                </div>
              </div>

              {/* Award Ribbon Pill */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-[#DDD5C7] max-w-[200px] flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EA] text-[#C28E47] flex items-center justify-center shrink-0 border border-[#E8DCCB]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#7A6F62] uppercase font-bold">Recognition</div>
                  <div className="text-xs font-bold text-[#161B22] leading-tight">
                    2026 Overall Speaker of the Year
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Authentic Story & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE2D2] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
              <Compass className="w-3.5 h-3.5" />
              The Authentic Journey
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161B22] tracking-tight leading-tight mb-6">
              From AAA Gaming Executive to Father and Global Catalyst
            </h2>

            {/* Pull Quote */}
            <div className="p-4 rounded-xl bg-white border-l-4 border-[#C28E47] shadow-xs mb-6">
              <p className="font-serif italic text-base sm:text-lg text-[#161B22] leading-snug">
                "We don’t burn out because our will is weak; we burn out because our systems are designed to punish our cognition."
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#4A433A] leading-relaxed font-normal">
              <p>
                For over two decades, <strong className="font-semibold text-[#161B22]">Mantin Lu</strong> operated in the hyper-competitive engine room of the global video game industry. He studied how game architects craft immersive feedback loops that keep millions of players deeply motivated, laser-focused, and willing to conquer brutal challenges with genuine enthusiasm.
              </p>

              <p>
                Everything shifted when his daughter was diagnosed with autism. Suddenly, the traditional playbooks of parenting and organizational discipline—lectures, chore charts, and willpower demands—collapsed into daily tears, meltdowns, and chronic friction.
              </p>

              <p>
                That crisis provoked a profound epiphany: <em className="italic text-[#161B22]">If game design can motivate someone to solve complex problems for hours without complaining, why are we using broken industrial-era shame to manage human potential?</em> Mantin turned his home into a living laboratory, translating behavioral game architecture into the <strong className="text-[#161B22]">SLAY the Dragon</strong> framework.
              </p>

              <p>
                Today, Mantin travels worldwide as the <strong className="text-[#161B22]">2026 Overall Speaker of the Year</strong> and a two-time TEDx speaker, delivering keynotes that bridge deep engineering precision with heartwarming vulnerability. He also gives back as a certified Independent Facilitator for California’s Self-Determination Program, helping hundreds of families secure crucial state resources.
              </p>
            </div>

            {/* Social & Official Credentials Links */}
            <div className="mt-8 pt-6 border-t border-[#DDD5C7] flex flex-wrap items-center gap-4 text-xs font-semibold text-[#161B22]">
              <a
                href={MANTIN_BIO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#D5CCBE] hover:border-[#C28E47] hover:text-[#C28E47] transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn: @mantin</span>
                <ExternalLink className="w-3 h-3 text-[#7A6F62]" />
              </a>

              <a
                href={MANTIN_BIO.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-[#D5CCBE] hover:border-[#C28E47] hover:text-[#C28E47] transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#8C5E22]" />
                <span>Original Domain: mantinlu.com</span>
              </a>

              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1E232A] text-white hover:bg-[#C28E47] transition-colors ml-auto"
              >
                <span>Connect with Mantin</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
