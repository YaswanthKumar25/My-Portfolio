import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';
import Button from './Button';
import { personalInfo } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      {/* Backdrop click area */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111114] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#18181B] border-b border-[#27272A]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/20 text-[#22D3EE]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-semibold text-[#FAFAFA]">
                Dasari Yaswanth Kumar — Resume
              </h3>
              <p className="text-xs text-[#A1A1AA]">Python Full Stack Developer • B.Tech (2023–2026)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Dasari_Yaswanth_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#22D3EE] text-[#09090B] hover:bg-[#67e8f9] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-all"
              title="Open raw PDF in new tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-all ml-1 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body with fallback */}
        <div className="flex-1 w-full overflow-hidden bg-[#09090B] relative min-h-[420px] sm:min-h-[550px]">
          <iframe
            src={`${personalInfo.resumePath}#toolbar=1&navpanes=0`}
            title="Dasari Yaswanth Kumar Resume Preview"
            className="w-full h-full border-none"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 bg-[#18181B] border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80]"></span>
            <span>Resume verified • PDF stored locally in <code className="text-[#22D3EE]">public/resume.pdf</code></span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#22D3EE] transition-colors"
            >
              {personalInfo.email}
            </a>
            <span>•</span>
            <span>{personalInfo.phoneFormatted}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
