import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/profile';
import { Layout, Server, Database, GitBranch, ArrowRight } from 'lucide-react';

export default function About() {
  const domainIcons = {
    Frontend: Layout,
    Backend: Server,
    Database: Database,
    'Tools & Workflow': GitBranch,
  };

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#27272A]/80 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="ABOUT"
          title="A little about me."
          subtitle="My approach to software engineering and building responsive, reliable applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-base text-[#A1A1AA] leading-relaxed">
            {personalInfo.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[#A1A1AA]">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#FAFAFA]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A]">
                <span className="text-[#22D3EE] font-bold">B.Tech</span>
                <span className="text-[#71717A]">•</span>
                <span>2023 – 2026</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A]">
                <span className="text-[#22D3EE] font-bold">CGPA</span>
                <span className="text-[#71717A]">•</span>
                <span>7.63</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A]">
                <span className="text-[#818CF8] font-bold">Focus</span>
                <span className="text-[#71717A]">•</span>
                <span>Full Stack Web Development</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Primary Development Areas */}
          <div className="lg:col-span-5 bg-[#111114] border border-[#27272A] rounded-2xl p-6 sm:p-7 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#22D3EE] font-semibold">
                Core Competencies
              </span>
              <h3 className="text-lg font-semibold text-[#FAFAFA] mt-1 font-display">
                Primary Development Areas
              </h3>
            </div>

            <div className="space-y-4">
              {personalInfo.techDomains.map((item) => {
                const IconComponent = domainIcons[item.domain] || Layout;
                return (
                  <div
                    key={item.domain}
                    className="p-3.5 rounded-xl bg-[#18181B]/80 border border-[#27272A] hover:border-[#3F3F46] transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded bg-[#27272A] text-[#22D3EE]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#FAFAFA] font-mono">
                        {item.domain}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] pl-8">
                      {item.technologies}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-xs text-[#71717A]">
              <span>Looking for Full Stack Opportunities</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[#22D3EE] hover:underline font-medium"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
