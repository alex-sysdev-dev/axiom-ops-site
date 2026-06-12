import { MediaArticle } from '@/lib/media-articles';

interface MediaCardProps {
  article: MediaArticle;
  featured?: boolean;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function CategoryBadge({ category, color }: { category: string; color?: string }) {
  const accent = color ?? '#3b82f6';
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
      style={{
        background: `${accent}12`,
        color: accent,
        border: `1px solid ${accent}28`,
      }}
    >
      {category}
    </span>
  );
}

export function FeaturedMediaCard({ article }: { article: MediaArticle }) {
  return (
    <article className="relative p-8 md:p-10 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a] transition-all duration-300">
      {/* Accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px"
        style={{
          background: `linear-gradient(90deg, ${article.categoryColor ?? '#3b82f6'}60, transparent)`,
        }}
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <CategoryBadge category={article.category} color={article.categoryColor} />
        {article.product && (
          <span className="text-xs text-[#555]">{article.product}</span>
        )}
      </div>

      <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-4 max-w-3xl">
        {article.title}
      </h2>

      <p className="text-[#777] text-base leading-relaxed mb-8 max-w-3xl">
        {article.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-[#555]">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {article.readTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </>
        )}
      </div>
    </article>
  );
}

export default function MediaCard({ article }: MediaCardProps) {
  if (article.featured) {
    return <FeaturedMediaCard article={article} />;
  }

  return (
    <article className="group p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#2a2a2a] hover:bg-[#0d0d0d] transition-all duration-200 flex flex-col">
      <div className="mb-3">
        <CategoryBadge category={article.category} color={article.categoryColor} />
      </div>

      <h3 className="text-white font-semibold text-base leading-snug mb-3 flex-1">
        {article.title}
      </h3>

      <p className="text-[#555] text-sm leading-relaxed mb-5 line-clamp-3">
        {article.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-[#555] mt-auto">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {article.readTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </>
        )}
      </div>
    </article>
  );
}
