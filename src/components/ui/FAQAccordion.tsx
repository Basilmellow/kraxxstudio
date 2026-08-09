"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export function FAQAccordion({ items }: { items: FAQItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="kx-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-indigo-300 transition-colors"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <div
                className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-indigo-600/20" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
