import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AxiomOps — Operations Technology Studio',
    template: '%s | AxiomOps',
  },
  description:
    'AxiomOps is a technology firm building software for warehouse management, government contracting, defense logistics, and commercial operations.',
  keywords: [
    'operations technology',
    'warehouse management',
    'government contracting',
    'defense logistics',
    'supply chain',
    'AI automation',
    'GovCon',
    'DLA',
    'vendor risk',
  ],
  openGraph: {
    title: 'AxiomOps — Operations Technology Firm',
    description:
      'Building software for warehouse management, government contracting, defense logistics, and commercial operations.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AxiomOps — Operations Technology Firm',
    description: 'Building operations technology for commercial and government sectors.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-black text-[#f5f5f7] antialiased">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
