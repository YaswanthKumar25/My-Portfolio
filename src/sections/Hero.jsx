import React, { useState } from 'react';
import { 
  FileText, 
  ArrowRight, 
  Download, 
  Code2, 
  Sparkles, 
  Terminal, 
  Check, 
  Copy,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import Button from '../components/Button';
import { personalInfo } from '../data/profile';

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState('profile.py');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-radial-glow pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status / Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#27272A] bg-[#111114]/90 text-xs font-mono font-medium text-[#A1A1AA] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
              <span className="text-[#22D3EE] font-semibold">{personalInfo.statusLabel}</span>
              <span className="text-[#71717A]">•</span>
              <span>{personalInfo.educationBadge}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAFA] font-display leading-[1.15]">
              Building useful web experiences{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#67E8F9] to-[#818CF8]">
                from frontend to backend.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
              I'm <span className="text-[#FAFAFA] font-medium">{personalInfo.name}</span>, a Python Full Stack Developer working with <span className="text-[#FAFAFA]">React</span>, <span className="text-[#FAFAFA]">Django REST Framework</span>, <span className="text-[#FAFAFA]">Python</span>, and <span className="text-[#FAFAFA]">MySQL</span> to build responsive web applications.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex items-center gap-2 text-xs text-[#71717A] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore My Projects
              </Button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  href={personalInfo.resumePath}
                  download="Dasari_Yaswanth_Kumar_Resume.pdf"
                  variant="secondary"
                  size="md"
                  icon={Download}
                  className="flex-1 sm:flex-initial"
                >
                  Download Resume
                </Button>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#3F3F46] transition-all cursor-pointer"
                  title="Preview Resume on screen"
                  aria-label="Preview resume in browser"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social & Contact Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#27272A]/70 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                Connect
              </span>
              
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#FAFAFA] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all"
                  aria-label="Visit Dasari Yaswanth Kumar's GitHub profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#FAFAFA] hover:text-[#818CF8] hover:border-[#818CF8] transition-all"
                  aria-label="Visit Dasari Yaswanth Kumar's LinkedIn profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#818CF8]" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#18181B] border border-[#27272A] text-xs font-medium text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4ADE80]" />
                      <span className="text-[#4ADE80]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{personalInfo.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Terminal & Code Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-[#27272A] bg-[#111114] shadow-2xl shadow-black/60 overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#18181B] border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                  <span className="ml-2 font-mono text-xs text-[#71717A]">yaswanth@portfolio:~</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('profile.py')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'profile.py'
                        ? 'bg-[#27272A] text-[#22D3EE] font-medium'
                        : 'text-[#71717A] hover:text-[#A1A1AA]'
                    }`}
                  >
                    developer.py
                  </button>
                  <button
                    onClick={() => setActiveTab('stack.json')}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      activeTab === 'stack.json'
                        ? 'bg-[#27272A] text-[#818CF8] font-medium'
                        : 'text-[#71717A] hover:text-[#A1A1AA]'
                    }`}
                  >
                    stack.json
                  </button>
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[#A1A1AA]">
                {activeTab === 'profile.py' ? (
                  <div className="space-y-1">
                    <div className="text-[#71717A]"># Python Full Stack Developer Profile</div>
                    <div>
                      <span className="text-[#818CF8]">class</span>{' '}
                      <span className="text-[#22D3EE] font-semibold">PythonDeveloper</span>:
                    </div>
                    <div className="pl-4">
                      <span className="text-[#818CF8]">def</span>{' '}
                      <span className="text-[#FAFAFA]">__init__</span>(self):
                    </div>
                    <div className="pl-8">
                      self.name = <span className="text-[#4ADE80]">"{personalInfo.name}"</span>
                    </div>
                    <div className="pl-8">
                      self.role = <span className="text-[#4ADE80]">"{personalInfo.role}"</span>
                    </div>
                    <div className="pl-8">
                      self.education = <span className="text-[#4ADE80]">"B.Tech (2023–2026)"</span>
                    </div>
                    <div className="pl-8">
                      self.location = <span className="text-[#4ADE80]">"Puttaparthi, India"</span>
                    </div>
                    <div className="pl-8">
                      self.core_stack = [
                    </div>
                    <div className="pl-12 text-[#22D3EE]">
                      "React", "Django REST", "Python", "MySQL"
                    </div>
                    <div className="pl-8">]</div>
                    <div className="pl-4 mt-2">
                      <span className="text-[#818CF8]">def</span>{' '}
                      <span className="text-[#FAFAFA]">get_featured_projects</span>(self):
                    </div>
                    <div className="pl-8 text-[#818CF8]">
                      return [
                    </div>
                    <div className="pl-12 text-[#4ADE80]">
                      &#123;"name": "CodeNest", "type": "Competitive Programming"&#125;,
                    </div>
                    <div className="pl-12 text-[#4ADE80]">
                      &#123;"name": "TaskFlow", "type": "Full-Stack Task Manager"&#125;
                    </div>
                    <div className="pl-8 text-[#818CF8]">]</div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div className="text-[#71717A]">{"// Technology configuration"}</div>
                    <div>&#123;</div>
                    <div className="pl-4">
                      <span className="text-[#818CF8]">"frontend"</span>: [
                      <span className="text-[#4ADE80]">"React"</span>,{' '}
                      <span className="text-[#4ADE80]">"Tailwind CSS"</span>,{' '}
                      <span className="text-[#4ADE80]">"JavaScript"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#818CF8]">"backend"</span>: [
                      <span className="text-[#4ADE80]">"Python"</span>,{' '}
                      <span className="text-[#4ADE80]">"Django REST Framework"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#818CF8]">"database"</span>: [
                      <span className="text-[#4ADE80]">"MySQL"</span>,{' '}
                      <span className="text-[#4ADE80]">"Relational Queries"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#818CF8]">"version_control"</span>: [
                      <span className="text-[#4ADE80]">"Git"</span>,{' '}
                      <span className="text-[#4ADE80]">"GitHub"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-[#818CF8]">"architecture"</span>: <span className="text-[#22D3EE]">"RESTful APIs & Component-Driven UI"</span>
                    </div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

              {/* Terminal Footer status */}
              <div className="px-4 py-2.5 bg-[#18181B] border-t border-[#27272A] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></span>
                  <span>ready • UTF-8</span>
                </div>
                <span className="text-[#22D3EE]">Python 3.x / React 19</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
