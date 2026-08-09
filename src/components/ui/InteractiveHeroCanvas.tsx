"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, MessageSquare, Zap, BarChart3 } from "lucide-react";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export function InteractiveHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes setup
    const particleCount = 45;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective grid lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />

      {/* Floating Graphic Card Elements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-24 left-[8%] hidden lg:flex items-center gap-3 kx-card px-4 py-3 rounded-2xl shadow-xl shadow-purple-950/40 border border-purple-500/20"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">ORGANIC REACH</p>
          <p className="text-sm font-bold text-white flex items-center gap-1">
            +340% <span className="text-[10px] text-fuchsia-400 font-medium">Growth Rate</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-36 right-[10%] hidden lg:flex items-center gap-3 kx-card px-4 py-3 rounded-2xl shadow-xl shadow-fuchsia-950/40 border border-fuchsia-500/20"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white">
          <InstagramIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">INSTAGRAM AUDIENCE</p>
          <p className="text-sm font-bold text-white">50,000+ Followers</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-28 left-[12%] hidden xl:flex items-center gap-3 kx-card px-4 py-3 rounded-2xl shadow-xl border border-white/10"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
          <BarChart3 className="w-4 h-4" />
        </div>
        <div className="text-xs font-mono">
          <span className="text-slate-300">Save-to-Impression: </span>
          <span className="text-indigo-400 font-bold">8.4%</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-36 right-[14%] hidden xl:flex items-center gap-3 kx-card px-4 py-3 rounded-2xl shadow-xl border border-white/10"
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
          <Zap className="w-4 h-4" />
        </div>
        <div className="text-xs font-mono">
          <span className="text-slate-300">Content System: </span>
          <span className="text-cyan-300 font-bold">Active Engine</span>
        </div>
      </motion.div>
    </div>
  );
}
