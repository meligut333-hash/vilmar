import React from 'react';
import { playBlip } from '../utils/audio';

interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const TactileButton: React.FC<TactileButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playBlip(920, 0.04, 0.03);
    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold'
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 text-slate-950 font-bold shadow-[0_6px_20px_rgba(6,182,212,0.35),inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_28px_rgba(6,182,212,0.55),inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-cyan-300/40',
    secondary:
      'bg-slate-900/80 backdrop-blur-md text-cyan-200 font-medium shadow-[0_6px_20px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.25),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-cyan-500/30 hover:border-cyan-400/60 hover:text-white',
    accent:
      'bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-semibold shadow-[0_6px_20px_rgba(37,99,235,0.4),inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.6),inset_0_1px_2px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-blue-400/40',
    ghost:
      'bg-transparent text-slate-300 hover:text-cyan-300 hover:bg-white/5 border border-transparent hover:border-cyan-500/20 shadow-none'
  }[variant];

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl tracking-wide transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-1 active:scale-[0.98] select-none ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
