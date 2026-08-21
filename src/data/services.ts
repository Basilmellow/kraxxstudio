export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  platforms: string[];
  includes: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  heroBadge: string;
  iconName: string;
  capabilityCategory?: string;
}

export interface CapabilityPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  subservices: string[];
  problemSolved: string;
  targetClients: string;
  primaryDeliverables: string[];
  slug: string;
}

export const STUDIO_CAPABILITIES: CapabilityPillar[] = [
  {
    id: "digital-strategy",
    number: "01",
    title: "DIGITAL STRATEGY",
    slug: "content-strategy",
    tagline: "Audits, positioning, market research & digital growth roadmaps.",
    subservices: [
      "Digital presence audit",
      "Competitor analysis",
      "Market positioning",
      "Audience research",
      "Growth strategy",
      "Digital roadmap"
    ],
    problemSolved: "Eliminating random execution and aligning brand presence with direct commercial outcomes.",
    targetClients: "International businesses, SaaS, startups, expanding local brands.",
    primaryDeliverables: ["Studio Strategy Blueprint", "Positioning Deck", "Channel Roadmap"]
  },
  {
    id: "web-digital-experience",
    number: "02",
    title: "WEB & DIGITAL EXPERIENCE",
    slug: "web-digital-experience",
    tagline: "High-converting business websites, SaaS landing pages & UX systems.",
    subservices: [
      "Business websites",
      "Premium landing pages",
      "E-commerce websites",
      "SaaS websites",
      "Restaurant websites",
      "Portfolio websites",
      "Conversion optimization",
      "Website redesign",
      "UX/UI design"
    ],
    problemSolved: "Outdated, low-converting websites that fail to reflect brand value or capture leads.",
    targetClients: "Startups, E-commerce, SaaS, Restaurants, High-growth brands.",
    primaryDeliverables: ["Custom Next.js Website", "UX Design System", "Conversion Funnel"]
  },
  {
    id: "brand-visual-identity",
    number: "03",
    title: "BRAND & VISUAL IDENTITY",
    slug: "content-creation",
    tagline: "Distinct visual systems, editorial aesthetics & social brand guidelines.",
    subservices: [
      "Brand identity",
      "Visual systems",
      "Brand guidelines",
      "Logo systems",
      "Social identity",
      "Product branding",
      "Campaign design",
      "Creative direction"
    ],
    problemSolved: "Inconsistent visual messaging across channels that erodes brand perceived value.",
    targetClients: "Ambitious brands, Founders, E-commerce, Creators.",
    primaryDeliverables: ["Brand Identity Guide", "Visual Asset Library", "Social Templates"]
  },
  {
    id: "content-social",
    number: "04",
    title: "CONTENT & SOCIAL ENGINE",
    slug: "social-media-management",
    tagline: "End-to-end channel operations, carousels, short-form video & community.",
    subservices: [
      "Social media management",
      "Content strategy",
      "Content creation",
      "Short-form video",
      "Carousels",
      "Campaigns",
      "Community management",
      "Creator content systems"
    ],
    problemSolved: "Inconsistent posting, low feed retention, and lack of active audience engagement.",
    targetClients: "Brands, Restaurants, Creators, Products, Streamers.",
    primaryDeliverables: ["Monthly Content Engine", "Edited Short Video Batch", "Daily Engagement Protocol"]
  },
  {
    id: "personal-brand",
    number: "05",
    title: "PERSONAL BRAND",
    slug: "personal-branding",
    tagline: "Founder branding, executive positioning & thought leadership systems.",
    subservices: [
      "Founder branding",
      "Executive positioning",
      "Influencer branding",
      "Creator branding",
      "LinkedIn positioning",
      "Profile optimization",
      "Content systems"
    ],
    problemSolved: "Founders with deep expertise who lack the time or structure to build personal leverage.",
    targetClients: "Founders, Executives, High-growth Creators, Industry Leaders.",
    primaryDeliverables: ["Profile Overhaul", "Ghostwritten Content Cadence", "Monthly Network Analytics"]
  },
  {
    id: "growth-analytics",
    number: "06",
    title: "GROWTH & ANALYTICS",
    slug: "paid-social",
    tagline: "Technical SEO, performance analytics, paid amplification & CRO.",
    subservices: [
      "SEO & Technical SEO",
      "Local SEO & Content SEO",
      "Analytics & Conversion Analysis",
      "Performance Optimization",
      "Growth Reporting",
      "Targeted Paid Social"
    ],
    problemSolved: "Invisible search visibility and unoptimized paid ad campaigns.",
    targetClients: "International brands, E-commerce, Local businesses expanding globally.",
    primaryDeliverables: ["Technical SEO Audit", "Ad Campaign Architecture", "Performance Dashboard"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "content-strategy",
    number: "01",
    title: "DIGITAL & CONTENT STRATEGY",
    slug: "content-strategy",
    tagline: "Turn random posting into a structured, revenue-aligned digital growth engine.",
    summary: "Strategic blueprints that align audience interests with commercial positioning, eliminating guesswork.",
    description: "Random content generates random results. Our digital strategy framework defines clear content pillars, competitive differentiation, audience intent mapping, and scalable workflows to make every digital asset serve a distinct commercial purpose.",
    problem: "Brands struggle with 'what to post today', creating disjointed messaging that fails to build category authority or drive user action.",
    solution: "We build structured digital systems backed by audience research, performance data, and strategic pillars that turn attention into affinity and commercial intent.",
    platforms: ["Multi-Platform", "Editorial", "Short-Form Video", "B2B & B2C"],
    includes: [
      "Audience persona analysis & digital behavior mapping",
      "Core content pillars & editorial category matrix",
      "Competitor gap analysis & positioning framework",
      "Content funnel mapping (Top, Middle & Bottom of Funnel)",
      "Format distribution strategy (Carousels, Video, Text, Audio)",
      "A/B testing guidelines & hook frameworks"
    ],
    deliverables: [
      "Comprehensive Studio Content Strategy Blueprint",
      "3-Tier Content Pillar Matrix with 50+ Hook Templates",
      "Competitor Breakdown & Positioning Deck",
      "Content Asset Recycling & Distribution Playbook",
      "Monthly Pillar Performance Dashboard"
    ],
    process: [
      { step: "01", title: "Audience & Market Research", desc: "We research customer pain points, subculture terminology, and competitor content gaps." },
      { step: "02", title: "Pillar Architecture", desc: "We define 4-5 strategic pillars balancing education, proof, identity, and direct conversion." },
      { step: "03", title: "Distribution Matrix", desc: "We establish how one primary asset translates into short videos, carousels, and text posts." },
      { step: "04", title: "Iterative Refinement", desc: "Monthly reviews ensure pillars adjust as algorithm trends and business goals evolve." }
    ],
    faqs: [
      { question: "Is strategy included in monthly studio management?", answer: "Strategy is foundational to all our engagements. We also offer standalone Strategy Blueprints for teams executing in-house." },
      { question: "How do you define content pillars?", answer: "Pillars are core topics at the intersection of your product value, customer pain points, and platform engagement dynamics." }
    ],
    heroBadge: "Strategic Blueprint",
    iconName: "Target",
    capabilityCategory: "DIGITAL STRATEGY"
  },
  {
    id: "web-digital-experience",
    number: "02",
    title: "WEB & DIGITAL EXPERIENCE",
    slug: "web-digital-experience",
    tagline: "Build high-converting business websites and premium web applications.",
    summary: "Engineering-grade websites, SaaS landing pages, and restaurant portals designed to look expensive and convert visitors.",
    description: "Your website is your primary international storefront. We design and engineer modern, responsive web experiences with crisp visual hierarchy, fast performance, and conversion-focused UX architecture.",
    problem: "Most business websites look outdated, load slowly, and fail to convert visitors into qualified leads or customers.",
    solution: "We build custom, high-performance digital experiences powered by Next.js and modern UX systems—ensuring instant speed, high conversion paths, and flawless responsive layouts.",
    platforms: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Custom CMS"],
    includes: [
      "Custom UI/UX interface design & dynamic wireframing",
      "Mobile-first responsive engineering & performance tuning",
      "SEO-ready page architecture & meta structure",
      "Conversion tracking integration & analytics setup",
      "Custom interactive components & micro-animations",
      "Content management system (CMS) integration"
    ],
    deliverables: [
      "Custom Production-Ready Web Application",
      "Mobile & Desktop Responsive Breakpoint Audit",
      "Figma UI Component Design System",
      "Core Web Vitals Performance Optimization",
      "Integrated Contact & Lead Capture Workflow"
    ],
    process: [
      { step: "01", title: "UX Architecture", desc: "We map user journeys, page hierarchy, and conversion goals before writing code." },
      { step: "02", title: "Visual Engineering", desc: "We build responsive layouts with KRAXX design precision, smooth motion, and crisp typography." },
      { step: "03", title: "Performance & SEO", desc: "We tune Core Web Vitals, implement structured data, and optimize image assets." },
      { step: "04", title: "Launch & Analytics", desc: "We deploy on global CDN edge networks with real-time conversion monitoring." }
    ],
    faqs: [
      { question: "What technologies do you use for website development?", answer: "We build with Next.js, React, TypeScript, and modern CSS—the same tech stack used by leading international tech companies." },
      { question: "Can you redesign our existing website without breaking SEO?", answer: "Yes. We preserve all canonical URLs, redirect structures, meta data, and indexed pages." }
    ],
    heroBadge: "Digital Experience Engineering",
    iconName: "Globe",
    capabilityCategory: "WEB & DIGITAL EXPERIENCE"
  },
  {
    id: "content-creation",
    number: "03",
    title: "BRAND & VISUAL IDENTITY",
    slug: "content-creation",
    tagline: "Create high-impact visual content engineered for modern feed mechanics.",
    summary: "Sleek carousels, short-form video editing, visual graphics, and editorial copy engineered for attention retention.",
    description: "In modern feeds, design and pacing determine retention. We produce eye-catching visual content—from high-converting carousels and sleek motion graphics to polished short-form Reels and video edits tailored for thumb-stopping clarity.",
    problem: "Standard stock visuals and generic templates get ignored in crowded feeds, lowering algorithm distribution and brand perception.",
    solution: "We craft custom visual assets, motion typography, high-retention video edits, and editorial layouts designed specifically to capture seconds 0-3 and drive high save/share rates.",
    platforms: ["Instagram Reels", "TikTok", "YouTube Shorts", "LinkedIn Carousels", "X Visuals"],
    includes: [
      "Short-form video editing (pacing, captions, sound design)",
      "High-converting multi-slide carousels & infographics",
      "Brand-aligned social graphics & visual templates",
      "Story highlights & interactive story creative suites",
      "Copywriting optimized for engagement & conversion",
      "Motion graphics & animated text overlays"
    ],
    deliverables: [
      "Monthly Batch of Short-Form Edited Videos",
      "High-Resolution Carousel & Infographic Decks",
      "Custom Editable Figma / Illustrator Templates",
      "Engaging Caption Scripts & Hook Options",
      "Asset Export Bundles Ready for Multi-Format Publishing"
    ],
    process: [
      { step: "01", title: "Creative Briefing", desc: "We align on visual standards, color accents, motion styles, and brand voice guidelines." },
      { step: "02", title: "Production & Editing", desc: "Our team designs graphics, formats slides, edits video cuts, and applies retention dynamics." },
      { step: "03", title: "Review & Polish", desc: "Assets undergo quality assurance for typo checks, export resolution, and mobile framing." },
      { step: "04", title: "Delivery & Asset Vault", desc: "Approved files are delivered in structured cloud folders formatted for instant publishing." }
    ],
    faqs: [
      { question: "Do we need to send raw video footage?", answer: "If short-form video is required, you can send raw clips or smartphone video. We handle script structure, editing, sound design, and motion captions." },
      { question: "What design formats do you deliver?", answer: "We deliver MP4 (for Reels/Shorts), high-res PNG/JPG, PDF (for LinkedIn carousels), and source vector assets if requested." }
    ],
    heroBadge: "Visual Asset Studio",
    iconName: "Sparkles",
    capabilityCategory: "BRAND & VISUAL IDENTITY"
  },
  {
    id: "social-media-management",
    number: "04",
    title: "CONTENT & SOCIAL ENGINE",
    slug: "social-media-management",
    tagline: "Build and manage a consistent digital presence across relevant platforms.",
    summary: "Complete channel management that turns passive posting into an active, high-impact growth engine.",
    description: "Posting without a system creates noise, not audience. We manage your end-to-end social channels across Instagram, LinkedIn, Facebook, and X—ensuring consistent visual cadence, active audience engagement, and ongoing strategic optimization.",
    problem: "Most businesses post inconsistently, lack visual cohesion across channels, and miss critical audience engagement opportunities due to bandwidth constraints.",
    solution: "We deploy an end-to-end channel operating system that handles calendar planning, content asset formatting, scheduled publishing, proactive community interactions, and weekly performance tuning.",
    platforms: ["Instagram", "LinkedIn", "Facebook", "X / Twitter", "TikTok"],
    includes: [
      "Content calendar architecture & publishing schedule",
      "Multi-platform post formatting & custom captions",
      "Proactive comment moderation & audience interaction",
      "Custom brand hashtag architecture & trend monitoring",
      "Monthly analytics reporting & tactical retrospectives",
      "Visual grid curation and bio positioning optimization"
    ],
    deliverables: [
      "Monthly Content Calendar (Approved prior to posting)",
      "12 to 20 High-Quality Formatted Posts per Month",
      "Daily Audience Community Engagement Protocol",
      "Comprehensive Monthly Performance Report",
      "Quarterly Strategy Refresh Document"
    ],
    process: [
      { step: "01", title: "Channel Audit & Setup", desc: "We review existing metrics, audit bio links, visual themes, and establish brand publishing guardrails." },
      { step: "02", title: "Calendar Engine", desc: "We map monthly content themes into structured content calendars with copy and asset design." },
      { step: "03", title: "Execution & Monitoring", desc: "We publish on high-engagement windows and actively engage with target comments and accounts." },
      { step: "04", title: "Data Optimization", desc: "We analyze reach, save rates, and click-throughs to double down on high-performing formats." }
    ],
    faqs: [
      { question: "What platforms do you manage under this service?", answer: "We primarily manage Instagram, LinkedIn, X (Twitter), Facebook, and TikTok based on where your ideal audience actually spends time." },
      { question: "Do I retain approval over scheduled posts?", answer: "Yes. Every asset and caption is placed in a collaborative preview calendar 7 days before scheduled publication for your review." },
      { question: "How quickly do we see progress?", answer: "Consistency and visual alignment reflect immediately. Audience reach metrics typically show compounding growth between 30 to 90 days." }
    ],
    heroBadge: "Full Channel Operations",
    iconName: "Share2",
    capabilityCategory: "CONTENT & SOCIAL"
  },
  {
    id: "personal-branding",
    number: "05",
    title: "PERSONAL BRAND & FOUNDER POSITIONING",
    slug: "personal-branding",
    tagline: "Position founders, executives and leaders as category authorities.",
    summary: "Ghostwriting, profile optimization, and LinkedIn/X distribution for founders and industry leaders.",
    description: "People trust leaders more than corporate logos. We help founders, executives, and high-growth creators build authoritative personal brands on LinkedIn and X through strategic ghostwritten content, profile repositioning, and audience networking.",
    problem: "Founders and executives know their industry deeply but lack the time to draft consistent, engaging content that builds personal leverage.",
    solution: "We extract your authentic voice through lightweight 30-minute monthly interviews, converting your expertise into sharp LinkedIn posts, X threads, and thought leadership articles.",
    platforms: ["LinkedIn", "X / Twitter", "Substack / Newsletter", "Podcast Guesting Strategy"],
    includes: [
      "LinkedIn & X profile positioning overhaul & banner design",
      "Ghostwritten thought leadership posts & long-form articles",
      "Founder story extraction & executive narrative framework",
      "Audience network expansion strategy with industry peers",
      "Content repurposing from podcasts, interviews & internal memos",
      "Personal brand metric tracking & profile analytics"
    ],
    deliverables: [
      "Profile Optimization Audit & Visual Asset Suite",
      "12 to 16 Ghostwritten High-Impact LinkedIn Posts per Month",
      "Weekly X / Twitter Threads & Short Thought Fragments",
      "Monthly Executive Reach & Engagement Analytics"
    ],
    process: [
      { step: "01", title: "Narrative Extraction", desc: "A 30-minute monthly voice capture call to unpack your lessons, opinions, and industry perspective." },
      { step: "02", title: "Ghostwriting & Design", desc: "We transform insights into crisp, readable posts engineered for LinkedIn & X reach." },
      { step: "03", title: "Approval & Scheduling", desc: "You review and sign off on posts in under 10 minutes per week." },
      { step: "04", title: "Authority Growth", desc: "We track profile views, connection requests, inbound partnership inquiries, and audience growth." }
    ],
    faqs: [
      { question: "How much time is required from the founder?", answer: "Only about 30 to 45 minutes per month for the narrative capture interview. We handle all drafting, formatting, and scheduling." },
      { question: "Will the content sound genuinely like me?", answer: "Absolutely. We transcribe your actual phrasing, analogies, and perspectives so the tone is 100% authentic." }
    ],
    heroBadge: "Executive Authority",
    iconName: "UserCheck",
    capabilityCategory: "PERSONAL BRAND"
  },
  {
    id: "paid-social",
    number: "06",
    title: "GROWTH, SEO & PAID CAMPAIGNS",
    slug: "paid-social",
    tagline: "Amplify reach with technical SEO and disciplined performance advertising.",
    summary: "Targeted Meta & LinkedIn ad campaigns combined with technical SEO engineered to capture leads and accelerate growth.",
    description: "Growth shouldn't waste budget on random impressions. We combine technical SEO for organic search discovery with disciplined paid targeting across Meta (Instagram/Facebook) and LinkedIn to boost top-performing assets, capture warm leads, and scale brand distribution.",
    problem: "Brands dump ad spend into generic ad copy without creative testing or pixel segmentation, while ignoring organic search visibility.",
    solution: "We test multiple creative variations, leverage proven organic content winners, and optimize search engine visibility to build a compounding digital growth engine.",
    platforms: ["Google Search", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Custom Conversion Pixels"],
    includes: [
      "Technical SEO & local search optimization audit",
      "Ad account setup, pixel tracking & conversion event audit",
      "Audience targeting segmentation (Lookalikes, Retargeting, Custom)",
      "Ad creative design, copy variations & video hooks testing",
      "Budget allocation & bid optimization management",
      "Transparent return metrics reporting & ROAS analytics"
    ],
    deliverables: [
      "Technical SEO Audit & Meta Roadmap",
      "Ad Campaign Architecture & Strategy Document",
      "Creative Ad Asset Matrix (Images, Videos, Headlines)",
      "Weekly Spend, Click-Through & Conversion Monitoring",
      "Transparent Performance & Optimization Dashboard"
    ],
    process: [
      { step: "01", title: "Pixel & SEO Audit", desc: "We ensure search indexing and conversion tracking pixels are configured flawlessly." },
      { step: "02", title: "Creative & Keyword Batching", desc: "We produce ad variants and keyword target maps aligned with search intent." },
      { step: "03", title: "Controlled Testing", desc: "We launch low-budget pilot tests to identify winning audience-creative combinations." },
      { step: "04", title: "Scale & Optimize", desc: "We reallocate budget toward high-performing ad sets and scale SEO content authority." }
    ],
    faqs: [
      { question: "What ad budgets do you work with?", answer: "We recommend a minimum ad spend of $1,500/month (separate from studio management fees) to run statistically significant creative tests." },
      { question: "Do you guarantee specific ROAS or follower numbers?", answer: "We maintain strict credibility standards: we do not guarantee arbitrary numbers. We guarantee disciplined creative testing, data tracking, and continuous campaign optimization." }
    ],
    heroBadge: "Paid & Search Growth",
    iconName: "TrendingUp",
    capabilityCategory: "GROWTH & ANALYTICS"
  },
  {
    id: "community-management",
    number: "07",
    title: "COMMUNITY & AUDIENCE ECOSYSTEMS",
    slug: "community-management",
    tagline: "Turn casual passive followers into an active, loyal brand community.",
    summary: "Humanized comment moderation, direct message nurturing, and Discord/social group management that builds long-term retention.",
    description: "Followers are just numbers until you engage them. Our community management team monitors comments, responds to incoming DMs, moderates Discord servers, and proactively builds relationships with key creators and potential clients.",
    problem: "Unanswered comments and ignored DMs degrade trust, signal brand inactivity, and kill algorithm boost opportunities.",
    solution: "We implement structured response protocols, daily inbox triage, and active community moderation that turns interactions into brand advocacy and direct sales conversations.",
    platforms: ["Instagram DMs", "LinkedIn Comments", "Discord", "X / Twitter", "Community Hubs"],
    includes: [
      "Daily comment monitoring & brand-aligned responses",
      "Direct message (DM) triage & warm lead escalation",
      "Discord community server moderation & onboarding",
      "Proactive outbound engagement with target accounts",
      "Spam, troll, and toxic content filtering protocol",
      "Community feedback aggregation for product/service insights"
    ],
    deliverables: [
      "Daily Community Triage (7 Days / Week Coverage Options)",
      "Standard Operating Playbook for FAQ & Escalations",
      "Discord Roles, Channels & Event Moderation Blueprint",
      "Monthly Community Sentiment & Lead Escalation Log"
    ],
    process: [
      { step: "01", title: "Brand Voice Protocol", desc: "We define response tone, escalation rules, and brand boundary parameters." },
      { step: "02", title: "Daily Ingestion", desc: "Our moderators review incoming comments and DMs at scheduled peak activity intervals." },
      { step: "03", title: "Lead Routing", desc: "Sales or high-intent business inquiries in DMs are tagged and routed immediately." },
      { step: "04", title: "Sentiment Insights", desc: "We track recurring user questions to feed future content creation." }
    ],
    faqs: [
      { question: "How do you ensure responses sound authentic to our brand?", answer: "We draft a comprehensive Community Playbook with approved voice guidelines, key term lexicons, and escalation logic." },
      { question: "Can you manage Discord community channels?", answer: "Yes. We configure channel permissions, bot security, role assignments, and daily chat moderation." }
    ],
    heroBadge: "Community Engagement",
    iconName: "Users",
    capabilityCategory: "CONTENT & SOCIAL"
  }
];

