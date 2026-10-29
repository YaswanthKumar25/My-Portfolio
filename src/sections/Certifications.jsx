import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { certificationsData } from '../data/certifications';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-[#27272A]/80 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="CERTIFICATIONS"
          title="Learning and certifications."
          subtitle="Accredited training and verified program certifications in software engineering and technical concepts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#18181B] text-[#22D3EE] border border-[#27272A]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#18181B] text-[#818CF8] border border-[#27272A]">
                    {cert.badgeText}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-semibold text-[#FAFAFA] font-display">
                  {cert.title}
                </h3>
                <div className="mt-1 text-xs font-mono text-[#22D3EE] font-medium">
                  {cert.issuer}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills covered */}
              <div className="mt-6 pt-4 border-t border-[#27272A]/60 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717A]">
                  Core Concepts
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsCovered.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#18181B] text-[#FAFAFA] border border-[#27272A]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
