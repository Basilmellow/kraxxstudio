"use client";

import { useState, useRef, useCallback } from "react";
import { MoveHorizontal, AlertTriangle, CheckCircle2 } from "lucide-react";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full text-center mb-8">
        <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
          VISUAL TRANSFORMATION LAB
        </span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2">
          FROM PRESENCE TO PERFORMANCE
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
          Drag the handle to compare standard fragmented posting vs. KRAXX studio visual engine.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl h-[420px] sm:h-[480px] rounded-3xl overflow-hidden kx-card border border-white/10 select-none cursor-ew-resize shadow-2xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* RIGHT / AFTER CONTENT (FULL WIDTH BELOW) */}
        <div className="absolute inset-0 bg-slate-950 p-6 sm:p-10 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AFTER — KRAXX ENGINE
              </span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">(Studio Visual & Content System)</span>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">+340% Engagement Rate</span>
          </div>

          <div className="grid grid-cols-3 gap-4 my-auto">
            <div className="kx-card p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-gradient-to-br from-indigo-600/40 to-slate-900 border border-indigo-400/30 flex items-center justify-center p-3">
                <p className="text-xs font-bold text-white text-center">Dark Editorial Carousel Cover</p>
              </div>
              <span className="text-[10px] font-mono text-indigo-300">Cohesive Branding</span>
            </div>

            <div className="kx-card p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-gradient-to-br from-blue-600/40 to-slate-900 border border-blue-400/30 flex items-center justify-center p-3">
                <p className="text-xs font-bold text-white text-center">High-Retention Reel Script</p>
              </div>
              <span className="text-[10px] font-mono text-cyan-300">Hook Optimization</span>
            </div>

            <div className="kx-card p-4 rounded-xl border border-indigo-500/30 bg-indigo-950/20 flex flex-col gap-2">
              <div className="w-full h-24 rounded-lg bg-gradient-to-br from-violet-600/40 to-slate-900 border border-violet-400/30 flex items-center justify-center p-3">
                <p className="text-xs font-bold text-white text-center">Strategic Funnel CTA</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">Clear Lead Route</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
            <span>Visual Consistency: <strong className="text-white">100% Locked</strong></span>
            <span>Content Cadence: <strong className="text-white">Structured Calendar</strong></span>
          </div>
        </div>

        {/* LEFT / BEFORE CONTENT (CLIPPED OVERLAY) */}
        <div
          className="absolute inset-y-0 left-0 bg-slate-900 p-6 sm:p-10 flex flex-col justify-between border-r border-white/20 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[800px] flex flex-col h-full justify-between">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/40 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> BEFORE — UNMANAGED
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">(Fragmented Posting Example)</span>
              </div>
              <span className="text-xs font-mono text-red-400 font-semibold">Low Retention</span>
            </div>

            <div className="grid grid-cols-3 gap-4 my-auto w-[650px] sm:w-[720px]">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-red-500/20 flex flex-col gap-2">
                <div className="w-full h-24 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center p-3">
                  <p className="text-xs text-slate-400 text-center line-through">Stock Graphic & Mismatched Font</p>
                </div>
                <span className="text-[10px] font-mono text-red-400">Weak Visual Identity</span>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-red-500/20 flex flex-col gap-2">
                <div className="w-full h-24 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center p-3">
                  <p className="text-xs text-slate-400 text-center line-through">Unformatted Long Caption</p>
                </div>
                <span className="text-[10px] font-mono text-red-400">No Hook Retention</span>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-xl border border-red-500/20 flex flex-col gap-2">
                <div className="w-full h-24 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center p-3">
                  <p className="text-xs text-slate-400 text-center line-through">No Call To Action</p>
                </div>
                <span className="text-[10px] font-mono text-red-400">Zero Lead Capture</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5 w-[650px] sm:w-[720px]">
              <span>Visual Consistency: <strong className="text-red-400">Random</strong></span>
              <span>Content Cadence: <strong className="text-red-400">Sporadic</strong></span>
            </div>
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div
          className="absolute inset-y-0 w-1 bg-indigo-500 shadow-[0_0_15px_#6366f1] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center shadow-xl text-white">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      <p className="text-[10px] font-mono text-slate-400 mt-3">
        * Demonstration mockup showing studio transformation framework.
      </p>
    </div>
  );
}
