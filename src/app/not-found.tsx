import Link from "next/link";
import { ArrowLeft, Sparkles, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden radial-glow">
      <div className="max-w-xl mx-auto px-4 text-center flex flex-col items-center relative z-10">
        <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
          404 — PAGE NOT FOUND
        </span>

        <h1 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight mt-2">
          OUT OF FEED <br />
          <span className="text-gradient-blue">DISTRIBUTION.</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
          The studio page or insight article you are looking for has been moved, renamed, or does not exist in our current index.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO STUDIO HOMEPAGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
