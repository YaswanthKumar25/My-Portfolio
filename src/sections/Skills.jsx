import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/skills';
import { 
  Code2, 
  FileCode2, 
  Database, 
  Globe, 
  Layers, 
  Atom, 
  Palette, 
  Smartphone, 
  Server, 
  Network, 
  DatabaseZap, 
  Table2, 
  FileStack, 
  GitBranch, 
  Terminal,
  Check
} from 'lucide-react';
import { Github } from '../components/Icons';

export default function Skills() {
  const iconMap = {
    Code2,
    FileCode2,
    Database,
    Globe,
    Layers,
    Atom,
    Palette,
    Smartphone,
    Server,
    Network,
    DatabaseZap,
    Table2,
    FileStack,
    GitBranch,
    Github,
    Terminal,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#27272A]/80 relative scroll-mt-16 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          label="TECH STACK"
          title="Tools I work with."
          subtitle="A categorized overview of the technologies, frameworks, and tools I use to build full-stack web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#111114] border border-[#27272A] hover:border-[#3F3F46] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-[#FAFAFA] font-display">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/20">
                    {group.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-[#71717A] mb-5">
                  {group.description}
                </p>

                {/* Skills Badges / Items */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#FAFAFA] hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-colors"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="mt-6 pt-4 border-t border-[#27272A]/60 flex items-center gap-1.5 text-[11px] text-[#71717A] font-mono">
                <Check className="w-3 h-3 text-[#4ADE80]" />
                <span>Hands-on project experience</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Proficiency */}
        <div className="mt-8 p-4 rounded-xl bg-[#111114]/60 border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A]">
          <p>
            * Focus areas are demonstrated in real projects like <span className="text-[#FAFAFA]">CodeNest</span> and <span className="text-[#FAFAFA]">TaskFlow</span>. No arbitrary proficiency percentages.
          </p>
          <a
            href="#projects"
            className="text-[#22D3EE] hover:underline font-medium shrink-0 font-mono"
          >
            Inspect Project Architectures &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
