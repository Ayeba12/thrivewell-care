"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isRendered, setIsRendered] = useState(false);
  const [opacityClass, setOpacityClass] = useState('opacity-0 translate-y-4');

  useEffect(() => {
    // Check if consent has already been given/declined
    const consent = localStorage.getItem('thrivewell_cookie_consent');
    if (!consent) {
      setIsRendered(true);
      // Small delay to trigger CSS transition after mount
      const transitionTimer = setTimeout(() => {
        setOpacityClass('opacity-100 translate-y-0');
      }, 100);
      return () => clearTimeout(transitionTimer);
    }
  }, []);

  const handleAccept = () => {
    setOpacityClass('opacity-0 translate-y-4');
    setTimeout(() => {
      localStorage.setItem('thrivewell_cookie_consent', 'accepted');
      setIsRendered(false);
    }, 300);
  };

  const handleDecline = () => {
    setOpacityClass('opacity-0 translate-y-4');
    setTimeout(() => {
      localStorage.setItem('thrivewell_cookie_consent', 'declined');
      setIsRendered(false);
    }, 300);
  };

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-surface-muted border-2 border-border-default p-6 shadow-[6px_6px_0px_0px_var(--color-border-default)] transition-all duration-300 ease-out transform ${opacityClass}`}
    >
      <div className="space-y-4">
        {/* Header with Space Mono label */}
        <div className="flex items-center justify-between border-b border-border-default pb-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] font-bold">
            Cookie Policy
          </span>
          <span className="font-mono text-[9px] text-text-tertiary/60 uppercase">
            CI Compliance
          </span>
        </div>

        {/* Text content */}
        <div className="space-y-2">
          <h4 className="font-sans text-sm font-extrabold uppercase tracking-tight text-text-primary">
            We Value Your Privacy
          </h4>
          <p className="text-xs text-text-tertiary leading-relaxed font-sans">
            We use cookies to optimize site performance, analyze traffic, and support SSSC & Care Inspectorate compliant features. Read our{' '}
            <Link href="/privacy" className="underline font-bold hover:text-[#E56B45]">
              Privacy & Cookie Policy
            </Link>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleDecline}
            className="w-full py-3 bg-transparent text-text-primary border border-border-default font-sans text-[10px] uppercase tracking-wider font-bold hover:bg-surface-base hover:text-text-secondary transition-colors duration-200 cursor-pointer"
          >
            Essential Only
          </button>
          <button
            onClick={handleAccept}
            className="w-full py-3 bg-surface-base text-text-secondary border border-border-default font-sans text-[10px] uppercase tracking-wider font-bold hover:bg-surface-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
