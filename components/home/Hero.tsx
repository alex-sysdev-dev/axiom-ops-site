import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '5+', label: 'Products Deployed' },
  { value: 'DoD', label: 'Government Ready' },
  { value: 'NASA', label: 'SBIR Recognized' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Moving reflection light — drifts slowly over the global grid */}
      <div
        className="hero-reflection grid-reflect absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Bottom vignette so grid fades out toward footer */}
      <div
        className="hero-vignette absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div
          className="pointer-events-none absolute right-4 top-1/2 hidden w-[34rem] -translate-y-1/2 opacity-[0.16] lg:block"
          aria-hidden="true"
        >
          <Image
            src="/axiomops-geometry-logo.svg"
            alt=""
            width={512}
            height={512}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Label */}
        <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#222] bg-[#0d0d0d] text-xs text-[#888] font-medium mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
          Operations Technology Firm
        </div>

        {/* Headline */}
        <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] text-white max-w-3xl mb-6">
          Operations{' '}
          <span className="hero-headline-gradient">Technology</span>
          <br />
          Built to Scale
        </h1>

        {/* Supporting copy */}
        <p className="relative text-lg sm:text-xl text-[#888] max-w-2xl leading-relaxed mb-10">
          AxiomOps is a technology firm building software for warehouse management, government contracting,
          defense logistics, and commercial operations — from the factory floor to the executive suite.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row gap-3">
          <Link
            href="/#products"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-100 transition-colors duration-150"
          >
            Explore Our Products
          </Link>
          <Link
            href="/media"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-[#2a2a2a] text-[#ccc] rounded-xl hover:border-[#444] hover:bg-[#0d0d0d] transition-colors duration-150"
          >
            Read Our Story
          </Link>
        </div>

        {/* Stats */}
        <div className="relative mt-20 flex flex-wrap gap-10 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="mt-1 text-sm text-[#777]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
