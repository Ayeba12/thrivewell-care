import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';
import { getArticles } from '@/lib/wordpress';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  try {
    const articles = await getArticles();
    return articles.map((article) => ({
      id: String(article.id),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const articles = await getArticles();
    const article = articles.find((a) => String(a.id) === id);
    return {
      title: article ? `${article.title} | Thrivewell Care` : 'Resource Guide',
      description: article ? article.desc : 'Eldercare resource guide',
    };
  } catch (error) {
    return {
      title: 'Resource Guide | Thrivewell Care',
      description: 'Eldercare resource guide',
    };
  }
}

export default async function ResourcePost({ params }: PageProps) {
  const { id } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => String(a.id) === id);

  if (!article) {
    notFound();
  }

  // Get related articles (same category, or other recent ones)
  const relatedArticles = articles
    .filter((a) => String(a.id) !== id)
    .slice(0, 2);

  return (
    <div className="pt-20 sm:pt-24 bg-surface-muted text-text-primary min-h-screen">
      {/* Top Header Navigation */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 py-6 border-b border-border-default flex items-center justify-between">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-[#E56B45] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resources</span>
        </Link>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45]">
          Guide #{article.id}
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-default border-b border-border-default">
        
        {/* Left Content Area (Col Span 8) */}
        <article className="lg:col-span-8 p-6 sm:p-12 md:p-16 space-y-8">
          {/* Metadata Row */}
          <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-[#E56B45] font-bold">
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-text-tertiary/50">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Date & Subtext */}
          <div className="flex flex-wrap gap-4 items-center justify-between border-b border-border-muted pb-6">
            <p className="font-mono text-[10px] uppercase text-text-tertiary/40">
              Published: {article.date}
            </p>
            <div className="border border-border-default px-3 py-1 font-mono text-[9px] uppercase bg-surface-raised">
              Verified Care Guide
            </div>
          </div>

          {/* Feature Image */}
          <div className="aspect-[21/10] w-full overflow-hidden border border-border-default bg-gray-100 relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Main Text Content - Render HTML from WP editor */}
          <div 
            className="text-sm sm:text-base text-text-primary leading-relaxed space-y-6 pt-4 max-w-3xl wp-content-html"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Right Sidebar (Col Span 4) */}
        <aside className="lg:col-span-4 p-6 sm:p-12 space-y-12 bg-[#EAEAEA]/30">
          
          {/* Related Articles Section */}
          <div className="space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-widest font-bold text-[#E56B45]">
              Related Guides
            </h3>
            <div className="space-y-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/resources/${rel.id}`}
                  className="block p-5 border border-border-muted bg-surface-raised hover:border-border-default transition-all group"
                >
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#E56B45] font-bold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-sans text-sm font-bold uppercase tracking-tight line-clamp-2 leading-tight group-hover:text-[#E56B45] transition-colors">
                    {rel.title}
                  </h4>
                  <div className="flex justify-between items-center mt-4 font-mono text-[9px] uppercase tracking-widest text-text-tertiary/60">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call To Action Box */}
          <div className="p-6 border border-border-default bg-surface-base text-text-secondary space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#E56B45] block">
                Free Guidance & Support
              </span>
              <h3 className="font-sans text-lg font-bold uppercase tracking-tight text-white leading-tight">
                Need help navigating social care or funding?
              </h3>
              <p className="text-[11px] text-text-inverse leading-relaxed">
                Applying for Free Personal Care or Self-Directed Support can be overwhelming. Speak with our local care coordinators in West Lothian & Edinburgh for direct help.
              </p>
            </div>

            <Link
              href="/contact?assessment=true"
              className="w-full btn-primary bg-surface-muted text-text-primary border border-border-default hover:!bg-[#B83A14] hover:!text-[#FFFFFF] hover:border-[#B83A14] active:!bg-surface-muted active:!text-text-primary active:border-border-default py-3 text-xs uppercase tracking-widest font-bold block text-center transition-all"
            >
              Request Assessment
            </Link>
          </div>
        </aside>

      </div>
    </div>
  );
}
