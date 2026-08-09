"use client";

interface KraxxLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function KraxxLogo({ className = "", showWordmark = true, size = "md" }: KraxxLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {/* SVG LOGO MARK: Multi-faceted geometric folded 'K' */}
      <div className={`relative shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_20px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            {/* Primary Arm Gradient: Electric Blue -> Indigo */}
            <linearGradient id="kraxx-grad-arm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            {/* Leg Gradient: Indigo -> Electric Magenta */}
            <linearGradient id="kraxx-grad-leg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>

            {/* Dark Stem Shadow Gradient */}
            <linearGradient id="kraxx-grad-stem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            
            {/* Highlight Fold Overlay */}
            <linearGradient id="kraxx-grad-fold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Left Vertical Pillar (Stem) */}
          <path
            d="M15 12 H 36 V 88 H 15 Z"
            fill="url(#kraxx-grad-stem)"
          />

          {/* Left Shadow Facet Edge */}
          <path
            d="M36 12 L 48 24 V 76 L 36 88 Z"
            fill="#0B0F19"
            opacity="0.6"
          />

          {/* Upper Right Wing/Arm (Blue to Purple) */}
          <path
            d="M38 50 L 78 12 H 95 L 56 50 Z"
            fill="url(#kraxx-grad-arm)"
          />

          {/* Lower Right Wing/Leg (Purple to Magenta) */}
          <path
            d="M38 50 L 56 50 L 95 88 H 78 Z"
            fill="url(#kraxx-grad-leg)"
          />

          {/* Fold Reflection Accent Overlay */}
          <path
            d="M38 50 L 78 12 L 84 18 L 48 50 Z"
            fill="url(#kraxx-grad-fold)"
          />
        </svg>
      </div>

      {/* WORDMARK + SUBTITLE (KRAXX — STUDIO —) */}
      {showWordmark && (
        <div className="flex flex-col">
          <span className="font-black text-xl sm:text-2xl tracking-[0.15em] text-white leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-fuchsia-400 transition-all">
            KRAXX
          </span>
          <div className="flex items-center gap-1 mt-1 text-[9px] font-mono tracking-[0.35em] text-slate-400 uppercase font-semibold">
            <span className="h-[1px] w-2 bg-indigo-500/50"></span>
            <span>STUDIO</span>
            <span className="h-[1px] w-2 bg-indigo-500/50"></span>
          </div>
        </div>
      )}
    </div>
  );
}
