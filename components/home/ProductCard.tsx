import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

const statusConfig = {
  live: { label: 'Live', dot: 'bg-green-500', chip: 'bg-green-500/10 text-green-400 border-green-500/20' },
  beta: { label: 'Beta', dot: 'bg-yellow-500', chip: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  development: { label: 'In Development', dot: 'bg-gray-500', chip: 'bg-gray-500/10 text-gray-400 border-gray-500/20' },
};

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

export default function ProductCard({ product }: ProductCardProps) {
  const status = statusConfig[product.status];

  return (
    <article className="relative flex flex-col p-6 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0d0d0d] transition-all duration-300 group">
      {/* Accent top line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full"
        style={{ background: `linear-gradient(90deg, ${product.accentColor}60, transparent)` }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-[10px] text-[#666] font-medium uppercase tracking-widest mb-1.5">
            {product.category}
          </p>
          <h3 className="text-white font-bold text-lg leading-tight">{product.name}</h3>
          <p className="text-[#777] text-sm mt-0.5">{product.tagline}</p>
        </div>
        <span
          className={`shrink-0 ml-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${status.chip}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#999] text-sm leading-relaxed mb-5">{product.description}</p>

      {/* Capabilities */}
      <div className="flex flex-wrap gap-2 mb-6">
        {product.capabilities.map((cap) => (
          <span
            key={cap}
            className="px-2.5 py-1 text-[11px] text-[#888] bg-[#111] border border-[#1e1e1e] rounded-lg"
          >
            {cap}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto">
        {product.productUrl && (
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#aaa] hover:text-white transition-colors duration-150 group-hover:gap-3"
          >
            Visit Product
            <ArrowIcon />
          </a>
        )}
      </div>
    </article>
  );
}
