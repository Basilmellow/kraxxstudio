export interface CaseStudyItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  verified: boolean;
  metrics: { label: string; value: string }[];
  challenge: string;
  strategy: string[];
  resultsSummary: string;
  timeline: { step: string; label: string; detail: string }[];
  overview: string;
  keyTakeaways: string[];
  placeholder?: boolean;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "instagram-zero-to-50k",
    slug: "instagram-zero-to-50k",
    number: "CASE STUDY 01",
    title: "Building an Instagram Audience From Zero to 50,000+",
    subtitle: "How a structured content engine and visual consistency grew a fresh account into a 50k+ niche authority.",
    category: "Social Media Management & Strategy",
    verified: true,
    metrics: [
      { label: "Starting Follower Count", value: "0" },
      { label: "Final Verified Audience", value: "50,000+" },
      { label: "Content Distribution", value: "Multi-Format" },
      { label: "Primary Channel", value: "Instagram" }
    ],
    challenge: "Building an audience completely from scratch in a saturated niche without relying on existing brand equity, paid follower acquisition, or celebrity endorsements.",
    strategy: [
      "Designed a cohesive dark-editorial visual identity system that stood out immediately in feed grids.",
      "Developed 4 high-value content pillars focusing on high-save educational carousels and high-share short-form video hooks.",
      "Implemented a disciplined posting cadence of 5 posts/week paired with daily targeted community engagement.",
      "Utilized data analytics to identify high-retention video structures and doubled down on top-performing themes.",
      "Executed targeted organic hashtag positioning and collaborative engagement loops with complementary accounts."
    ],
    resultsSummary: "Grew the account organically from 0 to over 50,000 highly engaged followers while establishing a repeatable content production workflow.",
    timeline: [
      { step: "01", label: "0 → 1K", detail: "Foundation Phase: Established visual grid aesthetic, bio positioning, and initial 15 high-value pillar posts." },
      { step: "02", label: "1K → 10K", detail: "Traction Phase: Viral carousel structures & short-form video reels began hitting feed discovery & explore pages." },
      { step: "03", label: "10K → 25K", detail: "Acceleration Phase: High audience save rates (8%+) signaled strong content relevance; algorithm distribution scaled rapidly." },
      { step: "04", label: "25K → 50K+", detail: "Authority Phase: Established niche authority, compound follower growth, and steady inbound brand collaboration inquiries." }
    ],
    overview: "This project demonstrates the core philosophy of KRAXX: digital presence is built on strategic intentionality, not guesswork. By systematically pairing thumb-stopping visual aesthetics with high-value educational content, we built a brand asset from ground zero to 50,000+ followers.",
    keyTakeaways: [
      "Visual grid consistency creates immediate perceived authority for new visitors.",
      "High save rates (8%+) are the #1 signal for sustained Instagram algorithm distribution.",
      "A disciplined publishing calendar beats sporadic bursts of posting every single time."
    ]
  },
  {
    id: "case-study-02",
    slug: "b2b-executive-personal-branding",
    number: "CASE STUDY 02",
    title: "Executive Personal Branding & Audience Engine",
    subtitle: "Positioning leadership on LinkedIn to generate organic partner inquiry and category trust.",
    category: "Personal Branding & LinkedIn Strategy",
    verified: false,
    placeholder: true,
    metrics: [
      { label: "Network Growth", value: "1,000+ Focus" },
      { label: "Channel", value: "LinkedIn & X" },
      { label: "Content Pillar", value: "Thought Leadership" },
      { label: "Status", value: "Active Client Framework" }
    ],
    challenge: "Converting complex executive expertise into accessible, highly shareable LinkedIn content without taking up more than 30 minutes of founder time per month.",
    strategy: [
      "Monthly 30-minute narrative interview for story & opinion extraction.",
      "Profile positioning overhaul (headline, banner, featured section).",
      "Ghostwritten thought leadership posts delivered in weekly batches."
    ],
    resultsSummary: "Framework deployed across executive profiles establishing clear category authority and consistent inbound executive connections.",
    timeline: [
      { step: "01", label: "Audit", detail: "Executive voice capture & profile positioning alignment." },
      { step: "02", label: "Launch", detail: "Weekly ghostwritten post cadence & networking protocol." }
    ],
    overview: "Structured framework developed by KRAXX Studio to turn executive industry knowledge into scalable personal leverage.",
    keyTakeaways: [
      "Founders don't need to post more; they need to post with clear commercial intent.",
      "Authentic founder commentary builds 4x higher trust than corporate brand handles."
    ]
  },
  {
    id: "case-study-03",
    slug: "community-first-discord-launch",
    number: "CASE STUDY 03",
    title: "Community Moderation & Discord Ecosystem Architecture",
    subtitle: "Transforming casual social scrollers into an active, self-sustaining community hub.",
    category: "Community Management",
    verified: false,
    placeholder: true,
    metrics: [
      { label: "Community", value: "Discord & Social" },
      { label: "Engagement Rate", value: "High Retention" },
      { label: "Moderation", value: "24/7 Protocol" },
      { label: "Status", value: "Studio Architecture" }
    ],
    challenge: "Designing a structured community environment that prevents quiet drop-off and maintains positive, brand-aligned interactions.",
    strategy: [
      "Role-based onboarding pathways for new community members.",
      "Automated bot moderation rules paired with human daily check-ins.",
      "Weekly community prompts and recurring discussion rituals."
    ],
    resultsSummary: "A scalable community management system engineered for high member retention and organic advocacy.",
    timeline: [
      { step: "01", label: "Architecture", detail: "Channel mapping, bot setup, and security permissions." },
      { step: "02", label: "Activation", detail: "Member onboarding sequences & event moderation." }
    ],
    overview: "Community architecture framework designed to convert top-of-funnel social traffic into long-term brand equity.",
    keyTakeaways: [
      "Clear onboarding permissions prevent community chaos.",
      "Active daily moderation creates a welcoming environment for quiet members."
    ]
  }
];
