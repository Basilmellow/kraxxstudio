import Link from "next/link";
import { ArrowRight, Sparkles, Send } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-bg-dark border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center space-y-8">
        
        <div className="eyebrow flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>PROJECT INITIATION // KRAXX STUDIO</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-heading font-bold text-white uppercase tracking-tight max-w-3xl leading-tight">
          HAVE SOMETHING <br />
          <span className="text-gradient">WORTH BUILDING?</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
          Tell us about your business goals. We&apos;ll audit your current digital footprint and engineer the exact growth system you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-20">
          <Link
            href="/contact"
            className="btn-nw btn-nw-solid w-full sm:w-auto text-xs justify-center cursor-pointer"
          >
            <span>[ START A PROJECT ]</span>
            <Send className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/services"
            className="btn-nw btn-nw-ghost w-full sm:w-auto text-xs justify-center cursor-pointer hover:border-purple-400"
          >
            <span>[ EXPLORE CAPABILITIES ]</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-xs font-mono text-slate-500">
          Typically responds within 24 business hours. Direct response from senior strategists.
        </p>
      </div>
    </section>
  );
}

