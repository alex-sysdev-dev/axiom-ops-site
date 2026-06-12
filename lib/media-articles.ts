export interface MediaArticle {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  category: string;
  categoryColor?: string;
  featured: boolean;
  product?: string;
  readTime?: string;
}

export const mediaArticles: MediaArticle[] = [
  {
    id: 'bluelineops-nasa-sbir',
    title: 'BlueLineOps Recognized in NASA SBIR Program',
    subtitle: 'Award Recognition',
    description:
      "BlueLineOps has been recognized through NASA's Small Business Innovation Research (SBIR) program, validating its approach to warehouse operations technology and logistics optimization against the highest standards of government innovation. The recognition highlights BlueLineOps's capability to address complex operational challenges at scale — the same challenges faced by aerospace logistics, defense warehousing, and large-scale fulfillment operations.",
    date: '2024-11-15',
    category: 'Recognition',
    categoryColor: '#f59e0b',
    featured: true,
    product: 'BlueLineOps',
    readTime: '3 min read',
  },
  {
    id: 'dla-vendor-risk-launch',
    title: 'AxiomOps Launches DLA Vendor Risk Platform for Defense Supply Chains',
    subtitle: 'Product Launch',
    description:
      'AxiomOps announces the launch of DLA Vendor Risk, a purpose-built risk intelligence platform designed to give the Department of Defense and its contractors real-time visibility into supplier health, risk exposure, and supply chain readiness. The platform addresses a critical gap in defense logistics: the inability to proactively identify supplier risk before it disrupts mission readiness. DLA Vendor Risk enables procurement officers and logistics leaders to monitor supplier financial stability, delivery performance, and compliance posture — continuously, not just at contract award.',
    date: '2024-09-30',
    category: 'Product Launch',
    categoryColor: '#3b82f6',
    featured: true,
    product: 'DLA Vendor Risk',
    readTime: '5 min read',
  },
  {
    id: 'axiomops-studio-vision',
    title: 'Building the AxiomOps Firm: Operations Technology for Every Sector',
    subtitle: 'Company Update',
    description:
      "AxiomOps was founded with a clear mission: develop technology that makes operations more intelligent, efficient, and resilient across commercial and government sectors. What started as warehouse operations software has grown into a portfolio of products spanning supply chain risk, government contracting intelligence, AI automation, and freelance business management.",
    date: '2024-06-01',
    category: 'Company News',
    categoryColor: '#10b981',
    featured: false,
    readTime: '4 min read',
  },
  {
    id: 'nasa-sbir-agentic-ai-proposal',
    title: 'AxiomOps Files NASA SBIR Proposal to Develop Agentic AI for Defense Supply Chains',
    subtitle: 'SBIR Proposal',
    description:
      "AxiomOps has submitted a Phase I proposal to NASA's Small Business Innovation Research (SBIR) program to develop agentic AI technology for defense supply chain operations. The proposal focuses on building autonomous AI agents capable of real-time supply chain decision-making, risk identification, and operational intelligence for Department of Defense logistics networks — extending BlueLineOps's core fulfillment intelligence into the defense sector. Status: Submitted · Under Review.",
    date: '2026-01-15',
    category: 'SBIR',
    categoryColor: '#f59e0b',
    featured: true,
    product: 'BlueLineOps',
    readTime: '3 min read',
  },
  {
    id: 'ops-summit-keynote-2026',
    title: 'BlueLineOps Headlines Ops Summit 2026 with Operational Intelligence Vision',
    subtitle: 'Event',
    description:
      'BlueLineOps took the main stage at Ops Summit 2026 to present the vision for operational intelligence in fulfillment. The keynote outlined how AI-powered decision support, real-time KPI monitoring, and agentic automation are converging to transform how logistics operators run their facilities — followed by a live product walkthrough recorded on the show floor.',
    date: '2026-03-01',
    category: 'Event',
    categoryColor: '#3b82f6',
    featured: false,
    product: 'BlueLineOps',
    readTime: '4 min read',
  },
  {
    id: 'bluelineops-press-coverage',
    title: 'BlueLineOps Earns Recognition Across Leading Supply Chain Publications',
    subtitle: 'Press Coverage',
    description:
      "BlueLineOps has received coverage across leading logistics and supply chain publications — Supply Chain Dive, Modern Materials Handling, MH&L, Logistics Weekly, FreightWaves, The Loadout, and Ops Quarterly. Industry observers highlight the platform's dark-first operations console, real-time CPT risk visibility, and its roots in operators who have actually run high-volume fulfillment centers at Amazon, Walmart, and national 3PLs.",
    date: '2025-10-01',
    category: 'Press',
    categoryColor: '#8b5cf6',
    featured: false,
    product: 'BlueLineOps',
    readTime: '2 min read',
  },
];

export const pressQuotes = [
  {
    text: 'The first console that makes a fulfillment center feel legible at a glance.',
    source: 'Supply Chain Dive',
  },
  {
    text: 'CPT risk used to be a 6 a.m. surprise. Now it is a number we watch all day.',
    source: 'VP Operations, National 3PL',
  },
  {
    text: 'Dark, fast, and unmistakably built by people who have run a dock.',
    source: 'Modern Materials Handling',
  },
];

export const pressOutlets = [
  'Supply Chain Dive',
  'MH&L',
  'Logistics Weekly',
  'The Loadout',
  'FreightWaves',
  'Ops Quarterly',
];
