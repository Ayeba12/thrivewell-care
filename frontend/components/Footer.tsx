"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Phone, Mail, Clock, ShieldAlert, ArrowRight, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-surface-base text-text-secondary border-t border-border-default">
      {/* 1. Large Banner CTA block - 108™ Style */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-muted">
        <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Scotland&apos;s Trusted Home Care
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight uppercase">
            For families preparing <br />
            for <span className="text-[#E56B45]">comfort</span>, not compromise.
          </h2>
        </div>
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border-muted p-8 sm:p-12 flex flex-col justify-center space-y-4">
          <Link
            href="/contact?assessment=true"
            className="flex items-center justify-between w-full p-5 bg-surface-muted text-text-primary border border-transparent hover:border-border-muted font-sans text-sm uppercase tracking-widest font-bold hover:bg-surface-base hover:text-text-secondary transition-colors"
          >
            <span>Book Free Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:01506000000"
            className="flex items-center justify-between w-full p-5 border border-border-muted text-text-secondary font-sans text-sm uppercase tracking-widest font-bold hover:bg-surface-muted/10 transition-colors"
          >
            <span>Call 01506 000 000</span>
            <Phone className="w-4 h-4 text-[#E56B45]" />
          </a>
        </div>
      </div>

      {/* 2. Footer Links Grid */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-border-muted">
        
        {/* Col 1: Brand details */}
        <div className="p-8 sm:p-10 space-y-6">
          <Link href="/" className="flex flex-col">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#E56B45] fill-[#E56B45]" />
              <span className="font-sans text-xl font-extrabold uppercase tracking-tight">Thrivewell</span>
            </div>
            <span className="font-mono text-[9px] tracking-wider uppercase text-text-inverse/60 mt-0.5">
              Care at Home · Scotland
            </span>
          </Link>
          <p className="text-xs text-text-inverse leading-relaxed">
            Personalised, compassionate support worker matching that respects the rhythm of your household. Regulated by the Care Inspectorate.
          </p>
          <div className="flex items-center gap-3 bg-white/5 p-4 border border-border-muted text-[11px] leading-snug">
            <ShieldAlert className="w-5 h-5 text-[#E56B45] shrink-0" />
            <span>Registered with the Care Inspectorate Scotland (SP000000)</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="p-8 sm:p-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
            Pages
          </span>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Why Us', path: '/why-choose-us' },
              { name: 'Pricing', path: '/pricing' },
              { name: 'Careers', path: '/careers' },
              { name: 'Resources', path: '/resources' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-text-inverse hover:text-[#E56B45] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact details */}
        <div className="p-8 sm:p-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
            Get In Touch
          </span>
          <ul className="space-y-4 text-xs">
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-[#E56B45] shrink-0" />
              <div>
                <a href="tel:01506000000" className="font-bold text-text-secondary hover:text-[#E56B45]">
                  01506 000 000
                </a>
                <p className="text-[10px] text-text-inverse/50 mt-0.5">On-call 24/7 for support emergencies</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-[#E56B45] shrink-0" />
              <div>
                <a href="mailto:hello@thrivewellcare.co.uk" className="text-text-secondary hover:text-[#E56B45]">
                  hello@thrivewellcare.co.uk
                </a>
                <p className="text-[10px] text-text-inverse/50 mt-0.5">Referrals & general questions</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 text-[#E56B45] shrink-0" />
              <div>
                <span className="font-bold">Mon–Sat · 9:00am – 5:30pm</span>
                <p className="text-[10px] text-text-inverse/50 mt-0.5">Office hours for general coordination</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div className="p-8 sm:p-10 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
            Newsletter
          </span>
          <p className="text-xs text-text-inverse leading-relaxed">
            Sign up to receive free eldercare advice, Scotland funding updates, and local community resources.
          </p>
          {subscribed ? (
            <div className="flex items-center gap-2 text-xs text-[#E56B45] bg-white/5 p-3 border border-[#E56B45]/30">
              <CheckCircle className="w-4 h-4" />
              <span>Subscribed successfully.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <div className="flex">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-white/5 border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary outline-none transition-colors border-r-0"
                />
                <button
                  type="submit"
                  className="bg-surface-muted text-text-primary border border-border-muted hover:border-border-muted hover:bg-surface-base hover:text-text-secondary px-5 py-3 flex items-center justify-center font-bold transition-colors text-xs cursor-pointer shrink-0"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </div>
              <p className="text-[10px] text-text-inverse/40 leading-snug">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          )}
        </div>

      </div>

      {/* 3. Bottom Legal / Copyright Bar */}
      <div className="border-t border-border-muted bg-surface-base">
        <div className="max-w-[1440px] mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-text-inverse/40">
          <div className="text-center md:text-left space-y-1">
            <p>© 2026 Thrivewell Care Limited. All rights reserved.</p>
            <p>Company No. SC000000 · Care Inspectorate Provider Number: SP000000</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#E56B45]">Privacy</Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-[#E56B45]">Cookies</Link>
            <span>·</span>
            <a href="#" className="hover:text-[#E56B45]">Accessibility</a>
            <span>·</span>
            <span className="text-text-secondary/20">Designed by Sam Ayebanate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
