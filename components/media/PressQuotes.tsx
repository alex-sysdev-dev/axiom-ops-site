import { pressQuotes, pressOutlets } from '@/lib/media-articles';

export default function PressQuotes() {
  return (
    <section className="py-16 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-10">In the Press</p>

        {/* Quotes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {pressQuotes.map((q) => (
            <figure
              key={q.source}
              className="flex flex-col p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a] transition-colors duration-200"
            >
              {/* Quote mark */}
              <span className="text-4xl font-serif text-[#2a2a2a] leading-none mb-4 select-none" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="flex-1 text-[#ccc] text-sm leading-relaxed mb-5">
                {q.text}
              </blockquote>
              <figcaption className="text-xs text-[#555] font-medium uppercase tracking-widest">
                — {q.source}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Outlet marquee */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs text-[#444] font-medium uppercase tracking-widest shrink-0">
            As seen in
          </span>
          {pressOutlets.map((outlet) => (
            <span key={outlet} className="text-sm text-[#555] font-medium">
              {outlet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
