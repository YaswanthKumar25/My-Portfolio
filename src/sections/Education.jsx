import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, Award, Building, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#27272A]/80 relative scroll-mt-16 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="EDUCATION"
          title="Academic background."
          subtitle="Formal engineering education, technical foundations, and academic performance."
        />

        {/* Structured Timeline Cards */}
        <div className="relative border-l-2 border-[#27272A] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10 sm:space-y-12">
          {educationData.map((item, index) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111114] border-2 border-[#22D3EE] flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]"></div>
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-all">
                
                {/* Header row: Degree & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#18181B] text-[#22D3EE] border border-[#27272A]">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#FAFAFA] font-display">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#18181B] text-[#FAFAFA] border border-[#27272A]">
                      <Calendar className="w-3.5 h-3.5 text-[#22D3EE]" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Institution & Board */}
                <div className="space-y-1 mb-4 text-sm text-[#A1A1AA]">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#71717A] shrink-0 mt-0.5" />
                    <span className="text-[#FAFAFA] font-medium">{item.institution}</span>
                  </div>
                  {item.board && (
                    <div className="flex items-center gap-2 pl-6 text-xs text-[#71717A] font-mono">
                      <span>Board: {item.board}</span>
                    </div>
                  )}
                </div>

                {/* Score / Grade Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs font-mono mb-4">
                  <Award className="w-3.5 h-3.5 text-[#4ADE80]" />
                  <span className="text-[#71717A]">{item.metricLabel}:</span>
                  <span className="text-[#4ADE80] font-bold text-sm">{item.metricValue}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights tags */}
                {item.highlights && (
                  <div className="mt-4 pt-3 border-t border-[#27272A]/60 flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#18181B] text-[#71717A]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
