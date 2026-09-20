import React from 'react';
import { Trophy, Mic, BookOpen, Gamepad2, Users } from 'lucide-react';
import { MANTIN_BIO } from '../data/mantinData';

export const CredentialsBar: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Trophy: <Trophy className="w-5 h-5 text-[#C28E47]" />,
    Mic: <Mic className="w-5 h-5 text-[#C28E47]" />,
    BookOpen: <BookOpen className="w-5 h-5 text-[#C28E47]" />,
    Gamepad2: <Gamepad2 className="w-5 h-5 text-[#C28E47]" />,
    Users: <Users className="w-5 h-5 text-[#C28E47]" />,
  };

  return (
    <div id="credentials-bar" className="bg-[#1E232A] text-white py-8 border-y border-[#323942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-center justify-between">
          {MANTIN_BIO.achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2A313A] flex items-center justify-center shrink-0">
                {iconMap[item.icon]}
              </div>
              <div>
                <div className="font-serif font-bold text-lg sm:text-xl text-[#F5F1EB] tracking-tight leading-none mb-1">
                  {item.number}
                </div>
                <div className="text-xs text-[#A8B2C1] font-medium leading-tight">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
