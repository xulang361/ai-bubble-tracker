export type BubbleEvent = {
  year: string;
  cycle: "Dot-Com" | "AI";
  label: string;
  category: "Infrastructure" | "Market" | "Revenue" | "Search" | "Capex" | "Reset";
  stage: 1 | 2 | 3 | 4 | 5;
  summary: string;
};

export const stages = [
  "Infrastructure buildout",
  "Killer-app narrative",
  "Capital market euphoria",
  "Revenue reality check",
  "Shakeout or consolidation"
];

export const timelineEvents: BubbleEvent[] = [
  {
    year: "1994",
    cycle: "Dot-Com",
    label: "Commercial internet expands",
    category: "Infrastructure",
    stage: 1,
    summary: "Browsers, ISPs, and web infrastructure move the internet into mainstream business attention."
  },
  {
    year: "1995",
    cycle: "Dot-Com",
    label: "Netscape IPO",
    category: "Market",
    stage: 2,
    summary: "The IPO becomes a public-market symbol for the internet investment cycle."
  },
  {
    year: "1998",
    cycle: "Dot-Com",
    label: "Internet stocks surge",
    category: "Market",
    stage: 3,
    summary: "Speculation broadens as investors price rapid internet adoption into public equities."
  },
  {
    year: "1999",
    cycle: "Dot-Com",
    label: "IPO mania",
    category: "Market",
    stage: 4,
    summary: "The cycle reaches broad euphoria as weak business models still attract capital."
  },
  {
    year: "2000",
    cycle: "Dot-Com",
    label: "Nasdaq peaks",
    category: "Reset",
    stage: 5,
    summary: "The bubble breaks as valuation, profitability, and capital access collide."
  },
  {
    year: "2002",
    cycle: "Dot-Com",
    label: "Post-crash bottom",
    category: "Reset",
    stage: 5,
    summary: "The market resets, but internet infrastructure and durable winners continue compounding."
  },
  {
    year: "2022",
    cycle: "AI",
    label: "ChatGPT launch",
    category: "Infrastructure",
    stage: 1,
    summary: "Generative AI becomes a mainstream adoption shock and resets investor expectations."
  },
  {
    year: "2023",
    cycle: "AI",
    label: "GPU demand breakout",
    category: "Revenue",
    stage: 2,
    summary: "Nvidia and the AI accelerator supply chain show real revenue acceleration."
  },
  {
    year: "2024",
    cycle: "AI",
    label: "Hyperscaler capex boom",
    category: "Capex",
    stage: 3,
    summary: "Cloud providers expand data center, GPU, networking, power, and memory investment."
  },
  {
    year: "2025",
    cycle: "AI",
    label: "AI bubble searches spike",
    category: "Search",
    stage: 3,
    summary: "Public concern rises as search interest, media debate, and valuation anxiety intensify."
  },
  {
    year: "2026",
    cycle: "AI",
    label: "AI infrastructure rally broadens",
    category: "Market",
    stage: 4,
    summary: "The trade spreads from GPUs into CPUs, HBM, NAND, SSDs, foundry, and data center suppliers."
  }
];
