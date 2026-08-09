import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { KraxxLogo } from "@/components/ui/KraxxLogo";
import { SITE_CONFIG } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 relative overflow-hidden pt-16 pb-12">
      {/* Glow Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" aria-label="Kraxx Studio Home">
              <KraxxLogo size="md" />
            </Link>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {SITE_CONFIG.subTagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/20 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/20 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/20 transition-all"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/20 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-slate-200 uppercase font-semibold">
              SERVICES
            </h4>
            <Link href="/services/social-media-management" className="text-xs hover:text-white transition-colors">
              Social Management
            </Link>
            <Link href="/services/content-strategy" className="text-xs hover:text-white transition-colors">
              Content Strategy
            </Link>
            <Link href="/services/content-creation" className="text-xs hover:text-white transition-colors">
              Content Creation
            </Link>
            <Link href="/services/community-management" className="text-xs hover:text-white transition-colors">
              Community Management
            </Link>
            <Link href="/services/personal-branding" className="text-xs hover:text-white transition-colors">
              Personal Branding
            </Link>
            <Link href="/services/paid-social" className="text-xs hover:text-white transition-colors">
              Paid Social
            </Link>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-slate-200 uppercase font-semibold">
              STUDIO
            </h4>
            <Link href="/work" className="text-xs hover:text-white transition-colors">
              Work & Portfolio
            </Link>
            <Link href="/about" className="text-xs hover:text-white transition-colors">
              Studio Philosophy
            </Link>
            <Link href="/pricing" className="text-xs hover:text-white transition-colors">
              Pricing Plans
            </Link>
            <Link href="/blog" className="text-xs hover:text-white transition-colors">
              The Content Lab
            </Link>
            <Link href="/faq" className="text-xs hover:text-white transition-colors">
              FAQ Knowledge Base
            </Link>
            <Link href="/contact" className="text-xs hover:text-white transition-colors">
              Start a Project
            </Link>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono tracking-widest text-slate-200 uppercase font-semibold">
              INQUIRIES
            </h4>
            <p className="text-xs text-slate-300">
              Ready to elevate your digital presence? Send us your brand goals.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-xs font-mono text-indigo-400 hover:underline flex items-center gap-1 mt-1"
            >
              {SITE_CONFIG.email} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-200 transition-colors font-mono">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
