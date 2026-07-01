'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/#products', label: 'Products' },
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/media', label: 'Media' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-[#1a1a1a] bg-black/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/axiomops-geometry-logo.svg"
                alt="AxiomOps geometry logo"
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
              <span className="text-white font-bold text-xl tracking-tight">
                Axiom<span className="text-[#555]">Ops</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#888] hover:text-white text-sm font-medium transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a
                href="mailto:xpertmarxman@gmail.com"
                className="px-4 py-2 text-sm font-semibold bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-150"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-[#888] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-[#1a1a1a] bg-black">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#888] hover:text-white py-2.5 text-sm font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:xpertmarxman@gmail.com"
              className="mt-3 px-4 py-2.5 text-sm font-semibold bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
