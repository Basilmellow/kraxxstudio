import { Metadata } from "next";
import { Sparkles, Mail, Clock, ShieldCheck, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact a Social Media Marketing Agency | KRAXX Studio",
  description:
    "Start a project with KRAXX Studio. Tell us your business goals and get a tailored social media marketing and digital growth proposal.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Copy & Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>PROJECT INITIATION</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight leading-tight">
                HAVE SOMETHING <br />
                <span className="text-gradient-blue">WORTH BUILDING?</span>
              </h1>
              <p className="mt-4 text-base text-slate-300 leading-relaxed font-medium">
                Tell us what you're trying to achieve. We'll audit your current digital presence and figure out the next strategic step.
              </p>
            </div>

            {/* Direct Studio Inquiries */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">DIRECT STUDIO EMAIL</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-bold text-white hover:text-indigo-300 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">RESPONSE SLA</p>
                  <p className="text-xs font-bold text-slate-200">Within 24 Business Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">STUDIO LOCATION</p>
                  <p className="text-xs font-bold text-slate-200">{SITE_CONFIG.location}</p>
                </div>
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict privacy policy: Your information is handled directly by studio principals for proposal drafting only.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
