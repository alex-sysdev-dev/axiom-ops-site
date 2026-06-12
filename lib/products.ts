export type ProductStatus = 'live' | 'beta' | 'development';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  status: ProductStatus;
  statusLabel: string;
  productUrl?: string;
  category: string;
  accentColor: string;
}

export const products: Product[] = [
  {
    id: 'bluelineops',
    name: 'BlueLineOps',
    tagline: 'Warehouse Operations Platform',
    description:
      'Enterprise-grade warehouse management system built for high-velocity fulfillment operations. Optimize inventory flow, reduce pick errors, and gain real-time visibility across your entire facility.',
    capabilities: ['Inventory Management', 'Fulfillment Optimization', 'Real-time Tracking', 'Operations Analytics'],
    status: 'live',
    statusLabel: 'Live',
    productUrl: 'https://bluelineops.vercel.app/',
    category: 'Logistics & Supply Chain',
    accentColor: '#3b82f6',
  },
  {
    id: 'freelanceros',
    name: 'FreelancerOS',
    tagline: 'Business OS for Independents',
    description:
      'A complete business operating system built for freelancers and independent consultants. Manage clients, track projects, generate invoices, and monitor your business health in one unified platform.',
    capabilities: ['Client Management', 'Project Tracking', 'Invoice Generation', 'Revenue Analytics'],
    status: 'live',
    statusLabel: 'Live',
    productUrl: 'https://freelancer-os-gray.vercel.app/',
    category: 'Business Operations',
    accentColor: '#10b981',
  },
  {
    id: 'chatterbot',
    name: 'ChatterBot',
    tagline: 'AI Chatbot & Workflow Automation',
    description:
      'Intelligent chatbot and workflow automation platform that integrates AI-powered conversations with operational workflows to automate repetitive tasks and enhance team productivity.',
    capabilities: ['AI-Powered Conversations', 'Workflow Automation', 'Process Integration', 'Multi-channel Deployment'],
    status: 'live',
    statusLabel: 'Live',
    productUrl: 'https://chatter-bot-chi.vercel.app/',
    category: 'AI & Automation',
    accentColor: '#8b5cf6',
  },
  {
    id: 'keystone',
    name: 'Keystone',
    tagline: 'Government Contracting Intelligence',
    description:
      'Opportunity intelligence platform for government contractors. Discover relevant contract opportunities, track submissions, analyze competition, and improve your win rate with data-driven insights.',
    capabilities: ['Opportunity Discovery', 'Bid Tracking', 'Competitive Analysis', 'Compliance Monitoring'],
    status: 'live',
    statusLabel: 'Live',
    productUrl: 'https://keystone-tawny-three.vercel.app/',
    category: 'Government Technology',
    accentColor: '#f59e0b',
  },
  {
    id: 'dla-vendor-risk',
    name: 'DLA Vendor Risk',
    tagline: 'Defense Supplier Risk Intelligence',
    description:
      'Supply chain risk intelligence platform for defense logistics. Monitor supplier health, assess risk exposure across your network, and maintain operational readiness for the Department of Defense.',
    capabilities: ['Supplier Risk Monitoring', 'Supply Chain Visibility', 'Defense Readiness Tracking', 'Risk Scoring'],
    status: 'live',
    statusLabel: 'Live',
    productUrl: 'https://vendorwatch-three.vercel.app/',
    category: 'Defense Technology',
    accentColor: '#ef4444',
  },
];
