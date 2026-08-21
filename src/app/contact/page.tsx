import { Metadata } from "next";
import { Mail, Clock, ShieldCheck, MapPin, Terminal } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Project Initiation & Contact | KRAXX Studio",
  description:
    "Start a digital project with KRAXX Studio. Tell us your business goals and get a tailored digital strategy & web proposal.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Project Initiation & Contact | KRAXX Studio",
    description:
      "Start a digital project with KRAXX Studio. Digital strategy, web engineering, branding, and growth.",
    url: "https://kraxxstudio.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Copy & Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="eyebrow flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>PROJECT INITIATION // KRAXX STUDIO</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white uppercase tracking-tight leading-tight">
                HAVE SOMETHING <br />
                <span className="text-gradient">WORTH BUILDING?</span>
              </h1>
              <p className="text-base text-slate-300 leading-relaxed font-light">
                Tell us about your business goals. We&apos;ll audit your current digital footprint and engineer the exact growth system you need.
              </p>
            </div>

            {/* Direct Studio Inquiries */}
            <div className="kx-card p-6 rounded-xl border border-white/10 bg-bg-card space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">DIRECT STUDIO EMAIL</span>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-bold text-white hover:text-purple-300 transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">RESPONSE SLA</span>
                  <span className="text-xs font-bold text-slate-200 block">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">STUDIO HEADQUARTERS</span>
                  <span className="text-xs font-bold text-slate-200 block">{SITE_CONFIG.location}</span>
                </div>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="p-4 rounded-xl bg-bg-card border border-white/10 flex items-center gap-3 font-mono text-xs">
              <ShieldCheck className="w-6 h-6 text-purple-400 shrink-0" />
              <p className="text-slate-300 font-light leading-relaxed">
                Confidentiality guaranteed: Your project brief is handled directly by senior strategists under KRAXX privacy protocols.
              </p>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}

