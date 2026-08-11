"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_OPTIONS = [
  "Social Media Management",
  "Content Strategy",
  "Content Creation",
  "Community Management",
  "Personal Branding",
  "Paid Social",
  "Other / Full Growth Package",
];

const BUDGET_OPTIONS = ["Under $399 / mo", "$699 – $999 / mo", "$999 – $1499 / mo", "$1499+ / mo"];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    website: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(["Social Media Management"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$1k – $2.8k / mo");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot: hidden from real users via CSS below. Bots that auto-fill
  // every input tend to fill this too, letting the API silently drop them.
  const [honeypot, setHoneypot] = useState("");

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
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields (Name, Email, Project description).");
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
          data?.error || "Something went wrong sending your message. Please try again or email us directly."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Network error — please check your connection and try again, or email us directly.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full kx-card p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center py-12 px-4 gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                INQUIRY TRANSMITTED
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                WE HAVE RECEIVED YOUR PROJECT BRIEF.
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto mt-3 leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our studio strategy team will review your brand goals for <strong className="text-indigo-300">{formData.brand || "your brand"}</strong> and reach out to <strong className="text-white">{formData.email}</strong> within 24 business hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", brand: "", email: "", website: "", message: "" });
              }}
              className="px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-300 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
            >
              SUBMIT ANOTHER INQUIRY
            </button>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
                PROJECT INITIATION FORM
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                START THE CONVERSATION.
              </h3>
            </div>

            {/* Honeypot field — hidden from sighted users and screen readers,
                left open for bots that blindly fill every input. Named and
                styled to avoid browser autofill (Chrome will auto-populate
                fields named like "company"/"website" even when off-screen
                if they have a non-zero size). */}
            <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
              <label htmlFor="hp_field_x7q">Leave this field empty</label>
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

            {/* Field Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Your Name <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="brand" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Business / Brand Name
                </label>
                <input
                  id="brand"
                  type="text"
                  placeholder="e.g. Acme Growth Co."
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Work Email <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Current Website / Social Handle
                </label>
                <input
                  id="website"
                  type="text"
                  placeholder="https://company.com or @handle"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* Service Multi-Select */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Services Required <span className="text-slate-500">(Select all that apply)</span>
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
                          ? "bg-indigo-600 text-white border border-indigo-400 shadow-md shadow-indigo-600/30"
                          : "bg-white/5 text-slate-300 border border-white/10 hover:border-white/20"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget Selector */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Approximate Monthly Investment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BUDGET_OPTIONS.map((budget) => {
                  const isSelected = selectedBudget === budget;
                  return (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-mono transition-all text-center ${
                        isSelected
                          ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white border border-indigo-400 shadow-md shadow-indigo-600/30 font-bold"
                          : "bg-white/5 text-slate-300 border border-white/10 hover:border-white/20"
                      }`}
                    >
                      {budget}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Project Overview & Objectives <span className="text-indigo-400">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell us about your current digital presence, main challenges, and key growth targets for the next 6 months..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="kx-btn-primary w-full justify-center text-xs font-bold uppercase tracking-wider disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>PROCESSING INQUIRY...</span>
                </>
              ) : (
                <>
                  <span>START THE CONVERSATION</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[10px] font-mono text-slate-500 text-center">
              🔒 We respect your privacy. No spam or third-party sharing ever.
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
