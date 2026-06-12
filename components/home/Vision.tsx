import Link from 'next/link';

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-8">Our Vision</p>

          <blockquote className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-10">
            Every organization deserves operations technology that{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              actually works.
            </span>
          </blockquote>

          <div className="space-y-5 text-[#777] text-base leading-relaxed mb-12">
            <p>
              AxiomOps exists to close the gap between how operations run today and how they could run with the
              right technology. We build for commercial enterprises and government agencies alike because
              operational excellence should not be limited to organizations with the largest budgets.
            </p>
            <p>
              From defense supply chains to warehouse floors to independent consultants, our technology improves
              operational decision making across every sector we serve. Our products are built to scale from day
              one, designed for the people who use them daily, and architected for the security and reliability
              that mission-critical operations demand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:hello@axiomops.com"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-100 transition-colors duration-150"
            >
              Get In Touch
            </a>
            <Link
              href="/media"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-[#2a2a2a] text-[#ccc] rounded-xl hover:border-[#444] hover:bg-[#0d0d0d] transition-colors duration-150"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
