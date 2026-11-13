import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export function Logo({ className = '', size = 32, showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        style={{ width: size, height: size }}
        className="relative shrink-0 flex items-center justify-center rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-105"
      >
        <svg
          viewBox="0 0 40 40"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="dr-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Outer container */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="8"
            className="fill-zinc-950 stroke-zinc-800 dark:fill-zinc-900 dark:stroke-zinc-700"
            strokeWidth="1.5"
          />

          {/* Data Pillar (D stem) */}
          <rect
            x="9"
            y="9.5"
            width="4.5"
            height="21"
            rx="2"
            fill="url(#dr-grad-primary)"
          />

          {/* Radix Arc */}
          <path
            d="M13.5 11.5 C 21.5 11.5, 26.5 14, 26.5 18.5 C 26.5 22, 22.5 24.5, 16 25"
            stroke="url(#dr-grad-primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Forward Radix Ray */}
          <path
            d="M18.5 23.5 L 28.5 30.5"
            stroke="url(#dr-grad-primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Data Nodes */}
          <circle cx="18.5" cy="23.5" r="2.2" fill="#38BDF8" />
          <circle cx="28.5" cy="30.5" r="1.8" fill="#10B981" />
        </svg>
      </div>

      {showText && (
        <span className="font-display font-bold text-base tracking-tight text-foreground">
          DataRadix
        </span>
      )}
    </div>
  );
}
