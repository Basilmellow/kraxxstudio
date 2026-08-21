"use client";

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle, Loader2, HelpCircle, ShieldCheck, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_OPTIONS = [
  "Digital Strategy & Audit",
  "Web & Digital UX Experience",
  "Brand & Visual Identity System",
  "Content Engine & Social Operations",
  "Personal Brand & Executive Positioning",
  "Growth, Technical SEO & Paid Social",
  "Full Digital Growth Retainer",
];

const BUSINESS_TYPES = [
  "Startup",
  "E-Commerce / D2C Brand",
  "Restaurant / Hospitality",
  "SaaS Company",
  "Creator / Streamer / Influencer",
  "Founder / Executive",
  "Established Enterprise",
  "Expanding Local Business",
];

const BUDGET_OPTIONS = ["$500 – $1,200 / mo", "$1,200 – $2,500 / mo", "$2,500 – $5,000 / mo", "Custom Project ($5,000+)"];
const TIMELINE_OPTIONS = ["Immediate (Within 2 weeks)", "1 Month", "2-3 Months", "Planning Stage"];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    website: "",
    businessType: "Startup",
    problem: "",
    goal: "",
    timeline: "Immediate (Within 2 weeks)",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(["Digital Strategy & Audit"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$1,200 – $2,500 / mo");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMessage("Please fill in your name and business email.");
      return;
    }

    setErrorMessage("");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget,
          hp_field_x7q: honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          data?.error || "Something went wrong sending your project brief. Please try again or email kraxxstudio@gmail.com directly."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error — please check your connection or email kraxxstudio@gmail.com directly.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full kx-card p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden bg-bg-card shadow-2xl">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center py-12 px-4 gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-xl">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                PROJECT INTAKE TRANSMITTED
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1 uppercase">
                WE HAVE RECEIVED YOUR BRIEF.
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-3 leading-relaxed font-light">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our strategy and engineering team will review your project requirements for <strong className="text-purple-300">{formData.brand || "your business"}</strong> and contact <strong className="text-white">{formData.email}</strong> within 24 business hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", brand: "", email: "", website: "", businessType: "Startup", problem: "", goal: "", timeline: "Immediate (Within 2 weeks)", message: "" });
              }}
              className="btn-nw btn-nw-ghost text-xs"
            >
              <span>[ SUBMIT ANOTHER INITIATION BRIEF ]</span>
            </button>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* Form Header & Reassurance */}
            <div className="space-y-3">
              <div className="eyebrow flex items-center justify-between">
                <span>PROJECT INITIATION SYSTEM</span>
                <span className="text-purple-300 text-[10px]">RESPONSE WITHIN 1 BUSINESS DAY</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white uppercase">
                TELL US WHAT YOU&apos;RE BUILDING.
              </h3>

              {/* Reassurance Banner */}
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Not sure what services you need? That&apos;s okay. Start with your business problem below.</span>
              </div>
            </div>

            {/* Honeypot field */}
            <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
              <input
                id="hp_field_x7q"
                name="hp_field_x7q"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
                {errorMessage}
              </div>
            )}

            {/* Core Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 font-mono text-xs">
                <label htmlFor="name" className="uppercase tracking-wider text-slate-300">
                  Your Name <span className="text-purple-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs">
                <label htmlFor="email" className="uppercase tracking-wider text-slate-300">
                  Business Email <span className="text-purple-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs">
                <label htmlFor="brand" className="uppercase tracking-wider text-slate-300">
                  Company / Brand Name
                </label>
                <input
                  id="brand"
                  type="text"
                  placeholder="e.g. Apex Global Co."
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs">
                <label htmlFor="website" className="uppercase tracking-wider text-slate-300">
                  Current Website / Social Profile
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://company.com or @handle"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Custom Styled Business Type Dropdown */}
            <div className="flex flex-col gap-2 font-mono text-xs relative" ref={dropdownRef}>
              <label className="uppercase tracking-wider text-slate-300">
                Business Profile / Vertical
              </label>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white text-sm flex items-center justify-between hover:border-purple-500/50 transition-colors text-left focus:outline-none focus:border-purple-500"
                aria-expanded={isDropdownOpen}
              >
                <span>{formData.businessType}</span>
                <ChevronDown className={`w-4 h-4 text-purple-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl bg-bg-card border border-purple-500/30 shadow-2xl p-1.5 space-y-1 backdrop-blur-2xl overflow-hidden"
                  >
                    {BUSINESS_TYPES.map((type) => {
                      const isSelected = formData.businessType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, businessType: type });
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-lg text-xs font-mono text-left flex items-center justify-between transition-colors ${
                            isSelected
                              ? "bg-purple-600/25 text-purple-200 font-bold border border-purple-500/40"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span>{type}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-purple-400" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Service Selection Pills */}
            <div className="flex flex-col gap-3 font-mono text-xs">
              <label className="uppercase tracking-wider text-slate-300">
                Services Required <span className="text-slate-500">(Select all relevant capabilities)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {SERVICES_OPTIONS.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                        isSelected
                          ? "bg-purple-600 text-white border border-purple-400 shadow-md shadow-purple-600/30"
                          : "bg-bg-dark text-slate-300 border border-white/10 hover:border-white/20"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Business Problem & Goal Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div className="flex flex-col gap-2">
                <label htmlFor="problem" className="uppercase tracking-wider text-slate-300">
                  Current Main Problem / Friction
                </label>
                <textarea
                  id="problem"
                  rows={3}
                  placeholder="e.g., Low website conversions, weak visual identity, unaligned social channels..."
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="goal" className="uppercase tracking-wider text-slate-300">
                  Target Business Goal (Next 6 Months)
                </label>
                <textarea
                  id="goal"
                  rows={3}
                  placeholder="e.g., Rebrand, scale qualified lead pipeline, establish founder authority..."
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Budget & Timeline Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div className="flex flex-col gap-2">
                <label className="uppercase tracking-wider text-slate-300">
                  Budget Range
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {BUDGET_OPTIONS.map((budget) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`px-3 py-2 rounded-lg text-xs font-mono transition-all text-left ${
                          isSelected
                            ? "bg-purple-600/30 text-white border border-purple-400 font-bold"
                            : "bg-bg-dark text-slate-400 border border-white/10 hover:border-white/20"
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase tracking-wider text-slate-300">
                  Target Timeline
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {TIMELINE_OPTIONS.map((time) => {
                    const isSelected = formData.timeline === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeline: time })}
                        className={`px-3 py-2 rounded-lg text-xs font-mono transition-all text-left ${
                          isSelected
                            ? "bg-purple-600/30 text-white border border-purple-400 font-bold"
                            : "bg-bg-dark text-slate-400 border border-white/10 hover:border-white/20"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-nw btn-nw-solid w-full justify-center text-xs py-3.5"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING INITIATION BRIEF...</span>
                </>
              ) : (
                <>
                  <span>[ TRANSMIT PROJECT BRIEF ]</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>Strict confidentiality. Your business brief is processed under KRAXX privacy protocols.</span>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}

