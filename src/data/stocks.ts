export type StockCategory = "GPU" | "CPU" | "Memory" | "Storage";

export type StockProfile = {
  company: string;
  ticker: string;
  logoText: string;
  logoTheme: "nvidia" | "amd" | "intel" | "micron" | "sandisk" | "hynix" | "samsung";
  categories: StockCategory[];
  slug: string;
  aiExposure: "Very High" | "High" | "Medium" | "Emerging";
  riskScore: number;
  keyProducts: string;
  watchSignal: string;
};

export const stocks: StockProfile[] = [
  {
    company: "Nvidia",
    ticker: "NVDA",
    logoText: "NV",
    logoTheme: "nvidia",
    categories: ["GPU"],
    slug: "nvidia-ai-bubble",
    aiExposure: "Very High",
    riskScore: 78,
    keyProducts: "Data center GPUs, AI accelerators, networking",
    watchSignal: "Data center growth, gross margin durability, hyperscaler concentration"
  },
  {
    company: "AMD",
    ticker: "AMD",
    logoText: "AMD",
    logoTheme: "amd",
    categories: ["GPU", "CPU"],
    slug: "amd-ai-bubble",
    aiExposure: "High",
    riskScore: 66,
    keyProducts: "MI accelerators, EPYC server CPUs",
    watchSignal: "AI accelerator adoption, data center CPU share, margin expansion"
  },
  {
    company: "Intel",
    ticker: "INTC",
    logoText: "in",
    logoTheme: "intel",
    categories: ["CPU", "GPU"],
    slug: "intel-ai-bubble",
    aiExposure: "Medium",
    riskScore: 48,
    keyProducts: "Xeon CPUs, Gaudi accelerators, foundry ambitions",
    watchSignal: "Foundry execution, AI accelerator traction, server CPU competitiveness"
  },
  {
    company: "Micron Technology",
    ticker: "MU",
    logoText: "M",
    logoTheme: "micron",
    categories: ["Memory", "Storage"],
    slug: "micron-ai-bubble",
    aiExposure: "High",
    riskScore: 69,
    keyProducts: "HBM, DRAM, NAND, data center SSDs",
    watchSignal: "HBM pricing, DRAM cycle, AI server memory content"
  },
  {
    company: "SanDisk",
    ticker: "SNDK",
    logoText: "SD",
    logoTheme: "sandisk",
    categories: ["Storage"],
    slug: "sandisk-ai-bubble",
    aiExposure: "Medium",
    riskScore: 52,
    keyProducts: "NAND flash, SSD storage",
    watchSignal: "NAND pricing, data center SSD demand, storage attach rates"
  },
  {
    company: "SK Hynix",
    ticker: "000660.KS",
    logoText: "SK",
    logoTheme: "hynix",
    categories: ["Memory"],
    slug: "sk-hynix-ai-bubble",
    aiExposure: "Very High",
    riskScore: 71,
    keyProducts: "HBM, DRAM, advanced memory packaging",
    watchSignal: "HBM supply share, Nvidia qualification, memory cycle discipline"
  },
  {
    company: "Samsung Electronics",
    ticker: "005930.KS",
    logoText: "S",
    logoTheme: "samsung",
    categories: ["Memory", "Storage"],
    slug: "samsung-ai-bubble",
    aiExposure: "High",
    riskScore: 58,
    keyProducts: "HBM, DRAM, NAND, foundry, SSDs",
    watchSignal: "HBM competitiveness, foundry utilization, memory margin recovery"
  }
];

export const categories: Record<StockCategory, { title: string; description: string; slug: string }> = {
  GPU: {
    title: "AI GPU Stocks",
    description: "Track AI accelerator leaders and the valuation risks behind the GPU trade.",
    slug: "ai-gpu-stocks"
  },
  CPU: {
    title: "AI CPU Stocks",
    description: "Compare data center CPU suppliers as AI workloads reshape server demand.",
    slug: "ai-cpu-stocks"
  },
  Memory: {
    title: "AI Memory Stocks",
    description: "Follow HBM, DRAM, and memory suppliers tied to AI server buildouts.",
    slug: "ai-memory-stocks"
  },
  Storage: {
    title: "AI Storage Stocks",
    description: "Monitor NAND and SSD suppliers as AI data pipelines expand.",
    slug: "ai-storage-stocks"
  }
};
