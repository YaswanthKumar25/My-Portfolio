import React from 'react';
import { ExternalLink, Check, Code2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { TaskFlowPreview, CodeNestPreview, PortfolioDesignPreview } from './ProjectPreviews';

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    description,
    features,
    technologies,
    githubUrl,
    liveUrl,
    previewType,
  } = project;

  const renderPreview = () => {
    switch (previewType) {
      case 'taskflow':
        return <TaskFlowPreview />;
      case 'codenest':
        return <CodeNestPreview />;
      case 'portfolio':
        return <PortfolioDesignPreview />;
      default:
        return (
          <div className="w-full h-44 bg-[#111114] flex items-center justify-center border-b border-[#27272A] text-[#71717A]">
            <Code2 className="w-8 h-8 opacity-40" />
          </div>
        );
    }
  };

  return (
    <article className="group flex flex-col rounded-xl border border-[#27272A] bg-[#111114]/80 hover:bg-[#18181B]/80 hover:border-[#3F3F46] transition-all duration-300 overflow-hidden shadow-lg shadow-black/40">
      {/* Visual Component Preview */}
      <div className="relative overflow-hidden bg-[#09090B]">
        {renderPreview()}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] font-semibold">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#FAFAFA] tracking-tight group-hover:text-[#22D3EE] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {description}
        </p>

        {/* Features Checklist */}
        <div className="mt-5 pt-4 border-t border-[#27272A]/70">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#71717A] mb-3">
            Key Architecture & Features
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA]">
            {features.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Badges */}
        <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#27272A]/50">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-[#18181B] text-[#FAFAFA] border border-[#27272A]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions / Links */}
        <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-[#FAFAFA] bg-[#18181B] border border-[#27272A] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-all"
            aria-label={`View ${title} repository on GitHub`}
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#09090B] bg-[#22D3EE] hover:bg-[#67e8f9] transition-all"
              aria-label={`Open ${title} live preview`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-[#71717A] px-2 py-1">
              Source Verified
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
