export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  type: "work" | "education";
  active?: boolean;
  bullets?: string[];
  detail?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Meta",
    role: "software engineer",
    location: "Menlo Park, CA",
    dateRange: "jan 2026 — present",
    type: "work",
    active: true,
    bullets: [
      "Built server-side in-app engagement rendering & targeting engine for Instagram Stories 2×2 grid — ~5% CTR, +5% WAU@D30 lift",
      "Designed ML-powered affinity profile system integrating LLM cluster signals for real-time personalization",
      "Built multi-reward selection & ranking service to prioritize collectible rewards per impression based on user state",
      "Owned experimentation stack across 10+ launches: holdouts, progressive rollouts, D1/D14/D30 retention tracking",
    ],
  },
  {
    company: "Meta",
    role: "software engineer intern",
    location: "Menlo Park, CA",
    dateRange: "jun 2025 — aug 2025",
    type: "work",
    bullets: [
      "Designed cross-platform ranking & progression system for avatar achievements across Instagram, Horizon, and VR",
      "Led A/B testing segmenting 300K+ users into three groups — 6% increase in DAU for static ranking variant",
      "Developed backend services in Hack using internal Meta APIs for real-time quest tracking at scale",
    ],
  },
  {
    company: "Curriculum Associates",
    role: "software engineer co-op",
    location: "Boston, MA",
    dateRange: "jan 2025 — may 2025",
    type: "work",
    bullets: [
      "Built in-house metrics & analytics system empowering PMs with actionable user insights",
      "Optimized APIs for large dataset handling — 30% faster query performance via SQL tuning",
      "Led POC for AI-powered feature auto-generating lesson revision descriptions",
    ],
  },
  {
    company: "Northeastern University",
    role: "MS Computer Science",
    location: "Boston, MA",
    dateRange: "jan 2024 — dec 2025",
    type: "education",
    detail: "4.0 GPA",
  },
  {
    company: "University of Mumbai",
    role: "BTech Information Technology",
    location: "Mumbai, India",
    dateRange: "aug 2019 — may 2023",
    type: "education",
    detail: "8.74/10",
  },
];
