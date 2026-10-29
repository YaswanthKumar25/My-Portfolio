import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  rel,
  download,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#22D3EE] text-[#09090B] font-semibold hover:bg-[#67e8f9] shadow-sm shadow-[#22D3EE]/20 hover:shadow-[#22D3EE]/30 active:scale-[0.98]',
    secondary:
      'bg-[#18181B] text-[#FAFAFA] border border-[#27272A] hover:bg-[#27272A] hover:border-[#3F3F46] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#FAFAFA] border border-[#27272A] hover:border-[#22D3EE] hover:text-[#22D3EE] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#18181B]',
    cyanOutline:
      'bg-transparent text-[#22D3EE] border border-[#22D3EE]/40 hover:bg-[#22D3EE]/10 hover:border-[#22D3EE]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        download={download}
        className={combinedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
