export interface FAQItem {
  id: string;
  category: "General" | "Services" | "Onboarding" | "Pricing" | "Results";
  question: string;
  answer: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Services",
    question: "What does social media management include?",
    answer: "Our social media management service covers end-to-end channel operations: strategy alignment, content calendar setup, multi-platform publishing, caption writing, visual asset formatting, community engagement, comment/DM triage, and monthly performance optimization."
  },
  {
    id: "faq-2",
    category: "Services",
    question: "Do you create the content as well?",
    answer: "Yes! Content creation is one of our primary studio capabilities. We write, design, and edit short-form videos (Reels/Shorts), multi-slide carousels, social graphics, and editorial copy tailored specifically to your brand visual identity."
  },
  {
    id: "faq-3",
    category: "General",
    question: "Which platforms do you manage?",
    answer: "We specialize in Instagram, LinkedIn, X (Twitter), Facebook, TikTok, and Discord community servers. We help select the ideal platform combination based on where your commercial audience actually spends time."
  },
  {
    id: "faq-4",
    category: "Services",
    question: "Can you manage an existing social media account?",
    answer: "Absolutely. We perform a complete channel audit of your existing profiles, optimize bio positioning, refresh visual assets, and seamlessly transition daily operations onto our calendar engine."
  },
  {
    id: "faq-5",
    category: "General",
    question: "Do you work with startups and growing brands?",
    answer: "Yes. We work with ambitious startups, high-growth venture-backed companies, B2B firms, and established digital brands seeking a high-caliber digital presence without building a costly in-house team from scratch."
  },
  {
    id: "faq-6",
    category: "Services",
    question: "Do you offer community management and DM support?",
    answer: "Yes. We treat community interaction as a core growth vector. Our team monitors comments, triages high-intent DMs, moderates Discord servers, and proactively engages with relevant industry accounts."
  },
  {
    id: "faq-7",
    category: "Services",
    question: "Do you manage paid advertising campaigns?",
    answer: "Yes. Our Paid Social service manages ad campaign setup, creative split testing, audience targeting, and budget optimization across Meta (Instagram/Facebook) and LinkedIn Ads to amplify high-performing organic content."
  },
  {
    id: "faq-8",
    category: "Onboarding",
    question: "How does the onboarding process work?",
    answer: "Onboarding takes approximately 5 to 7 days: (1) Discovery Call & Alignment, (2) Brand Asset & Access Ingestion, (3) Strategy & Pillar Blueprint Approval, (4) First Month Calendar Assembly, (5) Official Publishing Launch."
  },
  {
    id: "faq-9",
    category: "Pricing",
    question: "How is pricing calculated?",
    answer: "Pricing is calculated based on scope, platform coverage, content volume, and management intensity. We offer transparent tiered monthly retainer plans (Starter, Growth, Premium) as well as custom project proposals."
  },
  {
    id: "faq-10",
    category: "Onboarding",
    question: "How quickly can we get started?",
    answer: "Once project proposal terms are confirmed, our studio team can initiate channel audits within 48 hours and begin publishing your custom calendar within 7 business days."
  }
];
