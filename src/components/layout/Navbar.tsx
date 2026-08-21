"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KraxxLogo } from "@/components/ui/KraxxLogo";
import { SITE_CONFIG } from "@/data/siteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "/services" },
    { name: "WORK", href: "/work" },
    { name: "PROCESS", href: "/#process" },
    { name: "ABOUT", href: "/about" },
    { name: "PRICING", href: "/pricing" },
    { name: "INSIGHTS", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-bg-dark/90 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 bg-bg-surface/70 border border-white/10 rounded-full px-4 sm:px-6 py-2 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
            
            {/* Studio Brand Logo + Division Marker */}
            <Link href="/" aria-label="Kraxx Studio Home" className="group flex items-center space-x-3 shrink-0">
              <KraxxLogo size="sm" showWordmark={false} />
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-base tracking-wider text-text-primary group-hover:text-purple-400 transition-colors">
                    KRAXX STUDIO
                  </span>
                  <span className="text-[9px] font-mono text-amber-400 font-semibold tracking-widest hidden xl:inline">
                    [A KRAXX COMPANY]
                  </span>
                </div>
                <span className="hidden xl:block text-[8.5px] font-mono text-text-secondary tracking-widest uppercase">
                  DIGITAL GROWTH & CREATIVE SYSTEMS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Items */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-mono text-[11px]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/#process" && pathname.startsWith(link.href + "/"));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                      isActive
                        ? "text-purple-300 bg-purple-500/20 border border-purple-500/40 font-semibold shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* System Status + Primary Action CTA */}
            <div className="hidden md:flex items-center space-x-3 shrink-0">
              <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-bg-dark border border-white/10 font-mono text-[10px] text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>GLOBAL DIGITAL STUDIO</span>
              </div>
              <Link
                href="/contact"
                className="btn-nw btn-nw-solid !py-2 !px-4 text-xs rounded-full shrink-0 flex items-center gap-1.5"
              >
                <span>[ START A PROJECT ]</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 bg-bg-surface text-slate-300 hover:text-white shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-dark/98 backdrop-blur-2xl lg:hidden pt-28 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <div className="eyebrow mb-2 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>KRAXX STUDIO // NAVIGATION</span>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-slate-100 hover:text-purple-400 transition-colors py-2.5 border-b border-white/5 flex items-center justify-between font-heading tracking-wide"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-purple-400/60" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-nw btn-nw-solid w-full justify-center text-sm font-bold tracking-wider py-3"
              >
                <span>[ START A PROJECT ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs text-slate-400 font-mono">
                <span>{SITE_CONFIG.email}</span>
                <span>BUILT FOR AMBITIOUS BRANDS GLOBALLY</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

