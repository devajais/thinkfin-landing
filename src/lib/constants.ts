export const SITE_CONFIG = {
  name: "ThinkFin AI",
  tagline: "India's First Personal Financial Operating System",
  description: "AI-powered. Hyper-personalized. Built for every earning Indian.",
  email: "devashishjaiswal84@gmail.com",
  phone: "+91 9653088918",
  github: "git@github.com:devajais/thinkfin-landing.git",
} as const;

export const STATS = {
  internetUsers: "500M+",
  trustedAdvisors: "0",
  moneyLost: "Billions",
} as const;

export const PROBLEMS = [
  {
    id: 1,
    title: "The Advice Gap",
    description: "A 22-year-old engineer and a 45-year-old factory worker receive the exact same generic advice from every influencer and app.",
  },
  {
    id: 2,
    title: "The Trust Gap",
    description: "Advisors are commission-driven. Users sense it. Pervasive distrust at exactly the moment people need guidance most.",
  },
  {
    id: 3,
    title: "The Complexity Gap",
    description: "Budget announcements, RBI rate changes, SEBI rules — all reach users as confusing headlines, not as personalized rupee-impact calculations.",
  },
  {
    id: 4,
    title: "The Decision Gap",
    description: "Facing a ₹10L decision, there is nowhere to go for a fast, honest, mathematically sound answer grounded in your own numbers.",
  },
] as const;

export const PERSONA_DIMENSIONS = [
  { id: 1, name: "Income", description: "Salary, freelance, stability" },
  { id: 2, name: "Expenses", description: "Fixed vs variable, necessity split" },
  { id: 3, name: "Assets", description: "Appreciating vs depreciating" },
  { id: 4, name: "Liabilities", description: "EMIs, rates, tenures" },
  { id: 5, name: "Goals", description: "Short, medium & long-term" },
  { id: 6, name: "Career", description: "Industry, skills, growth path" },
  { id: 7, name: "Risk Profile", description: "Scenario-based tolerance" },
] as const;

export const FEATURES = [
  {
    id: 1,
    title: "Decision Engine",
    description: "Freeform question → structured verdict. Any financial decision, personalized.",
    icon: "target",
  },
  {
    id: 2,
    title: "Investment Advisor",
    description: "Specific mutual fund picks, stock screener, FD comparisons. Commission disclosed.",
    icon: "trending-up",
  },
  {
    id: 3,
    title: "Insurance Advisor",
    description: "Exact cover calculation. Underinsurance alerts in rupees, not vague warnings.",
    icon: "shield",
  },
  {
    id: 4,
    title: "Law & Tax Intelligence",
    description: "Every Budget, RBI & SEBI change → personalized rupee impact within hours.",
    icon: "scale",
  },
  {
    id: 5,
    title: "Proactive Alerts",
    description: "Lifestyle inflation detector, opportunity alerts, goal tracking. Runs always-on.",
    icon: "bell",
  },
] as const;

export const TRUST_PILLARS = [
  {
    id: 1,
    title: "Built for Bharat",
    description: "Hindi-first, ₹-native, RBI/SEBI-aware",
  },
  {
    id: 2,
    title: "Trust-First",
    description: "Every commission disclosed. Always.",
  },
  {
    id: 3,
    title: "Instant. Personal.",
    description: "Computed for you. Not for templates.",
  },
] as const;

export const PRIYA_STORY = {
  name: "Priya",
  age: 28,
  profession: "Software engineer",
  income: "₹75,000/month take-home",
  problems: [
    {
      title: "She watches finance reels daily",
      description: "Consumes 30 mins of financial content every day. Knows she should invest.",
    },
    {
      title: "Her advisor earns commissions",
      description: "The only 'advisor' she met pushed a ULIP that earned him ₹12,000.",
    },
    {
      title: "She's about to take a ₹5L loan",
      description: "For a bike. She's not sure. She asks Instagram. Gets 200 opinions.",
    },
    {
      title: "Nobody gives her a real answer",
      description: "Not for her income. Her EMIs. Her goals. Her specific situation.",
    },
  ],
  conclusion: "Priya is 200 million Indians. ThinkFin is built for her.",
} as const;
