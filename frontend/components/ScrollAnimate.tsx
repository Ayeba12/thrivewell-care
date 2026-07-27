"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let ctx: gsap.Context;
    let refreshTimer: NodeJS.Timeout;
    let setupTimer: NodeJS.Timeout;

    const runAnimationSetup = () => {
      // Defer slightly to ensure React finishes committing the current render pass
      setupTimer = setTimeout(() => {
        const sections = Array.from(document.querySelectorAll('section'));

        ctx = gsap.context(() => {
          sections.forEach((section, idx) => {
            // Skip marquee / quote tickers
            if (section.querySelector('.animate-marquee')) return;
            // Skip marked sections to avoid animation conflicts
            if (section.classList.contains('no-scroll-animate')) return;
            // Skip the very first section on home page to avoid conflicting with load-in animations
            if (pathname === '/' && idx === 0) return;

            // Select text blocks, list items, and action buttons inside the section
            const animatable = section.querySelectorAll('h2, h3, p, li, .btn-primary, .btn-secondary, .town-tag');
            
            if (animatable.length === 0) return;

            // Set initial state (opacity 0, slide down 15px)
            gsap.set(animatable, { opacity: 0, y: 15 });

            // Bind ScrollTrigger to stagger-reveal elements as they enter the viewport
            ScrollTrigger.create({
              trigger: section,
              start: 'top 85%', // Trigger animation when top of section enters 85% of viewport height
              onEnter: () => {
                gsap.to(animatable, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.08,
                  ease: 'power2.out',
                  overwrite: 'auto'
                });
              },
              once: true // Let animations trigger only once and stay visible
            });
          });
        });

        // Short timeout to guarantee layout completes rendering before calculating trigger heights
        refreshTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 200);
      }, 50);
    };

    // On initial mount, wait for window load if document is not complete yet to ensure hydration is finished
    if (document.readyState === 'complete') {
      runAnimationSetup();
    } else {
      const handleLoad = () => {
        runAnimationSetup();
      };
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        if (setupTimer) clearTimeout(setupTimer);
        if (refreshTimer) clearTimeout(refreshTimer);
        if (ctx) ctx.revert();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }

    return () => {
      if (setupTimer) clearTimeout(setupTimer);
      if (refreshTimer) clearTimeout(refreshTimer);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
