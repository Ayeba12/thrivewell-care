"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Clock, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WPArticle } from '@/lib/wordpress';

interface ResourcesClientProps {
  initialArticles: WPArticle[];
}

export default function ResourcesClient({ initialArticles }: ResourcesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const observerTargetRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const categories = ['All', 'Funding', 'Dementia Support', 'Wellbeing', 'Local Resources'];

  // Filter and Search Logic
  const filteredArticles = initialArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  // Reset pagination when category or search query changes
  useEffect(() => {
    setVisibleCount(6);
    setIsLoadingMore(false);
    isLoadingRef.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [selectedCategory, searchQuery]);

  // Scroll Observer Logic for Loading More Items
  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingRef.current) {
          isLoadingRef.current = true;
          setIsLoadingMore(true);
          
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // 400ms delay to make scroll reveal feel organic and premium
          timeoutRef.current = setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 6, filteredArticles.length));
            setIsLoadingMore(false);
            isLoadingRef.current = false;
          }, 400);
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTargetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [hasMore, filteredArticles.length]);

  return (
    <>
      {/* Filter and Search Bar */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-8 border-b border-border-default no-scroll-animate">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 border text-xs font-mono uppercase tracking-widest transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-surface-base text-white border-border-default'
                    : 'bg-transparent border-border-muted text-text-tertiary hover:border-border-default'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-raised border border-border-default pl-10 pr-4 py-3 text-xs outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-text-tertiary/40 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y divide-border-default border-b border-border-default no-scroll-animate">
        {displayedArticles.length > 0 ? (
          displayedArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="border-b md:border-r border-border-default last:border-r-0 lg:odd:border-r"
            >
              <Link
                href={`/resources/${article.id}`}
                className="p-8 flex flex-col justify-between hover:bg-surface-base/2 transition-colors duration-200 cursor-pointer h-full"
              >
                <article className="flex flex-col justify-between h-full w-full">
                  <div className="space-y-4">
                    <div className="aspect-[16/10] overflow-hidden border border-border-default bg-gray-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-[#E56B45] font-bold">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-text-tertiary/50">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight leading-tight text-text-primary">
                        {article.title}
                      </h3>
                      <p className="text-xs text-text-tertiary line-clamp-3 leading-relaxed">
                        {article.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest font-bold text-text-primary">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-24 w-full">
            <BookOpen className="w-12 h-12 text-text-primary/30 mx-auto mb-4" />
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight">No guides found</h3>
            <p className="text-xs text-text-tertiary/60 mt-1">Try adjusting your search keywords or category filters.</p>
          </div>
        )}
      </section>

      {/* Scroll Trigger Loader */}
      {hasMore && (
        <div 
          ref={observerTargetRef} 
          className="py-12 border-b border-border-default flex justify-center items-center bg-[#EAEAEA]/10 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            {isLoadingMore ? (
              <>
                <span className="w-2.5 h-2.5 bg-[#E56B45] animate-ping rounded-full" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-text-tertiary">
                  Loading more resources...
                </span>
              </>
            ) : (
              <span className="font-mono text-[9px] uppercase tracking-widest text-text-primary/55 animate-pulse font-bold">
                Scroll to load more guides
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
