import React from 'react';
import { personalInfo } from '../data/profile';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272A] bg-[#09090B] py-12 text-xs text-[#71717A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Identity and dynamic copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center font-mono font-bold text-xs text-[#22D3EE]">
              YK
            </div>
            <div>
              <p className="text-[#FAFAFA] font-medium">
                {personalInfo.name} — <span className="text-[#A1A1AA] font-normal">{personalInfo.role}</span>
              </p>
              <p className="text-[11px] text-[#71717A] mt-0.5">
                Designed and built by Dasari Yaswanth Kumar. &copy; {currentYear}. All rights reserved.
              </p>
            </div>
          </div>

          {/* Center / Right: Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#818CF8] hover:border-[#818CF8] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#18181B] border border-[#27272A] text-xs text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all cursor-pointer ml-2"
              title="Scroll to top of page"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono">Top</span>
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}
