import type { Metadata } from 'next';
import { mediaArticles } from '@/lib/media-articles';
import MediaCard, { FeaturedMediaCard } from '@/components/media/MediaCard';
import PressQuotes from '@/components/media/PressQuotes';

export const metadata: Metadata = {
  title: 'Media & News | AxiomOps',
  description:
    'Latest milestones, announcements, and major developments from AxiomOps and our portfolio of products.',
};

export default function MediaPage() {
  const featuredArticles = mediaArticles.filter((a) => a.featured);
  const regularArticles = mediaArticles.filter((a) => !a.featured);

  return (
    <main className="pt-16 min-h-screen">
      {/* Page hero */}
      <section className="py-24 md:py-32 border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-5">Media & News</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-2xl mb-6">
            Stories from the Firm
          </h1>
          <p className="text-[#777] text-lg max-w-xl leading-relaxed">
            Milestones, product launches, awards, and announcements from AxiomOps and our portfolio.
          </p>
        </div>
      </section>

      <PressQuotes />

      {/* Featured articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 border-b border-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-8">Featured</p>
            <div className="flex flex-col gap-4">
              {featuredArticles.map((article) => (
                <FeaturedMediaCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All other articles */}
      {regularArticles.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[#555] font-medium uppercase tracking-widest mb-8">All Stories</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regularArticles.map((article) => (
                <MediaCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-[#666] text-sm mb-8">
            For press inquiries and partnership opportunities, reach out directly.
          </p>
          <a
            href="mailto:xpertmarxman@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-white text-black rounded-xl hover:bg-gray-100 transition-colors duration-150"
          >
            xpertmarxman@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
