import React, { Suspense } from 'react';
import { redirect } from 'next/navigation';
import ResourcesClient from './ResourcesClient';
import { getArticles } from '@/lib/wordpress';

interface PageProps {
  searchParams: Promise<{ articleId?: string }>;
}

async function ResourcesContent() {
  const articles = await getArticles();

  return <ResourcesClient initialArticles={articles} />;
}

export default async function Resources({ searchParams }: PageProps) {
  const params = await searchParams;
  
  // Handle old redirect parameters on the server side
  if (params.articleId) {
    redirect(`/resources/${params.articleId}`);
  }

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary min-h-screen">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Knowledge & Guidance
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Eldercare Resources & Guides
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          Free, professional advice on navigating funding, dementia care, wellbeing, and local support in West Lothian and Edinburgh.
        </p>
      </section>

      <Suspense fallback={
        <div className="py-24 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">Loading Resources...</span>
        </div>
      }>
        <ResourcesContent />
      </Suspense>
    </div>
  );
}
