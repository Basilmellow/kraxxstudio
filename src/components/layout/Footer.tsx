import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { KraxxLogo } from "@/components/ui/KraxxLogo";
import { SITE_CONFIG } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/10 text-slate-400 relative overflow-hidden pt-16 pb-12">
      {/* Background Accent Mesh */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-purple-900/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info & Ecosystem Badge */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" aria-label="Kraxx Studio Home" className="flex items-center gap-3">
              <KraxxLogo size="md" showWordmark={false} />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white tracking-wider">KRAXX STUDIO</span>
                <span className="text-[9.5px] font-mono text-amber-400 font-semibold tracking-widest">[A KRAXX COMPANY]</span>
              </div>
            </Link>
            
            <p className="text-xs text-text-secondary max-w-sm leading-relaxed">
              {SITE_CONFIG.subTagline}
            </p>

            {/* Ecosystem Sister Company Link */}
            <div className="p-3.5 rounded-lg border border-white/10 bg-bg-surface/80 max-w-sm font-mono text-xs flex items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="w-4 h-4 text-orange-400" />
                <span>KRAXXSEC // SECURITY ENGINEERING</span>
              </div>
              <a
                href="https://kraxxsec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 text-[11px] font-semibold shrink-0"
              >
                <span>VISIT</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/20 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Capabilities & Services Column */}
          <div className="md:col-span-2 flex flex-col gap-2.5">
            <h4 className="text-xs font-mono tracking-widest text-slate-200 uppercase font-semibold">
              CAPABILITIES
            </h4>
            <Link href="/services/web-digital-experience" className="text-xs hover:text-white transition-colors">
              Web & Digital UX
            </Link>
            <Link href="/services/content-strategy" className="text-xs hover:text-white transition-colors">
              Digital Strategy
            </Link>
            <Link href="/services/social-media-management" className="text-xs hover:text-white transition-colors">
              Social Operations
            </Link>
            <Link href="/services/content-creation" className="text-xs hover:text-white transition-colors">
              Visual Asset Creation
            </Link>
            <Link href="/services/personal-branding" className="text-xs hover:text-white transition-colors">
              Personal Brand
            </Link>
            <Link href="/services/paid-social" className="text-xs hover:text-white transition-colors">
              SEO & Paid Growth
            </Link>
          </div>

          {/* Studio Quick Links */}
          <div className="md:col-span-2 flex flex-col gap-2.5">
            <h4 className="text-xs font-mono tracking-widest text-slate-200 uppercase font-semibold">
              STUDIO
            </h4>
            <Link href="/work" className="text-xs hover:text-white transition-colors">
              Portfolio & Work
            </Link>
            <Link href="/about" className="text-xs hover:text-white transition-colors">
              Studio Philosophy
            </Link>
            <Link href="/pricing" className="text-xs hover:text-white transition-colors">
              Pricing Frameworks
            </Link>
            <Link href="/blog" className="text-xs hover:text-white transition-colors">
              Content Lab Insights
            </Link>
            <Link href="/faq" className="text-xs hover:text-white transition-colors">
              FAQ Knowledge Base
            </Link>
            <Link href="/contact" className="text-xs hover:text-white transition-colors">
              Project Intake
            </Link>
          </div>

          {/* Direct Contact / Intake */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-slate-200 uppercase font-semibold">
              PROJECT INTAKE
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Tell us what you&apos;re building, what isn&apos;t working, or where you want to go.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1 mt-1 font-semibold"
            >
              {SITE_CONFIG.email} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary font-mono">
          <p>© 2026 {SITE_CONFIG.fullName}. A KRAXX Company.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

