import { products } from '@/lib/products';
import ProductCard from './ProductCard';

export default function Portfolio() {
  return (
    <section id="products" className="py-24 md:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-4">Our Portfolio</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
              Products Built for Real Operations
            </h2>
          </div>
          <p className="text-[#666] text-sm max-w-xs sm:text-right leading-relaxed">
            Each product targets a specific operational challenge, from warehouse management to defense supply chain risk.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
