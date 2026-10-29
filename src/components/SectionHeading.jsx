import React from 'react';

export default function SectionHeading({ label, title, subtitle, align = 'left', className = '' }) {
  const isCenter = align === 'center';
  
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {label && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#27272A] bg-[#111114] text-[#22D3EE]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
          {label}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#FAFAFA] font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
