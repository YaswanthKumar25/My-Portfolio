import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '../components/Icons';
import { personalInfo } from '../data/profile';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack & Backend', value: 'fullstack' },
    { label: 'Frontend & Design System', value: 'frontend' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return project.technologies.includes('Django REST Framework');
    if (filter === 'frontend') return project.technologies.includes('Vite') || !project.technologies.includes('Django REST Framework');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#27272A]/80 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            label="SELECTED WORK"
            title="Projects I've built."
            subtitle="A selection of projects that demonstrate my frontend, backend, database, and application development skills."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111114] border border-[#27272A] rounded-xl self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === opt.value
                    ? 'bg-[#18181B] text-[#22D3EE] border border-[#27272A] shadow-sm font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Callout / GitHub Profile Link */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#111114] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-semibold text-[#FAFAFA] font-display">
              Want to see more code repositories and commits?
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA]">
              Explore ongoing experiments, algorithms, and project codebases directly on my GitHub profile.
            </p>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#18181B] text-[#FAFAFA] border border-[#27272A] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-all shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Visit @{personalInfo.githubUrl.split('/').pop()}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
