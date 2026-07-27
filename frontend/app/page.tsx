"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // State for dynamic latest articles synced from WordPress
  const [latestArticles, setLatestArticles] = useState<any[]>([
    {
      id: "sds",
      title: "Understanding Self-Directed Support (SDS) in Scotland: A Family Guide",
      category: "Funding & Finance",
      desc: "Navigating home care funding in West Lothian and Edinburgh can be complicated. We break down how you can use SDS to choose Thrivewell Care."
    },
    {
      id: "dementia",
      title: "How Structure & Routine Quietly Builds Trust in Dementia Care",
      category: "Dementia Support",
      desc: "For individuals living with Alzheimer's, small changes can cause big anxiety. Learn how matched carers and set routines maintain calm."
    }
  ]);


  // Recalculate ScrollTrigger and Lenis heights when active step changes
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const marqueeQuotes = [
    { text: "“Thrivewell gave our family total peace of mind.”", author: "Sarah M. (Livingston)" },
    { text: "“From the first call we felt listened to.”", author: "James R. (Edinburgh)" },
    { text: "“Warm, professional and always on time.”", author: "Eleanor W. (Bathgate)" },
    { text: "“The matched carer fits dad perfectly.”", author: "William B. (Linlithgow)" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger entrance of left hero elements
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      // Town coverage tags bounce entrance
      gsap.from(".town-tag", {
        opacity: 0,
        scale: 0.8,
        y: 10,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out(1.5)",
        delay: 0.4
      });

      // Video overlay zoom/fade
      gsap.from(".video-animate", {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.6
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Dynamically load the latest 2 resource articles from WordPress on mount
  useEffect(() => {
    async function loadLatestArticles() {
      try {
        const { getArticles } = await import('@/lib/wordpress');
        const data = await getArticles();
        if (data && data.length > 0) {
          // Take the latest 2 articles
          const formatted = data.slice(0, 2).map((art: any) => ({
            id: art.id,
            title: art.title,
            category: art.category,
            desc: art.desc
          }));
          setLatestArticles(formatted);
        }
      } catch (err) {
        console.error("Failed to load latest articles for home page:", err);
      }
    }
    loadLatestArticles();
  }, []);


  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      
      {/* 1. HERO SECTION - 108™ Supply Stark Grid Layout */}
      <section ref={heroRef} className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default">
        
        {/* Hero Left Column */}
        <div className="lg:col-span-8 p-6 sm:p-12 md:p-16 flex flex-col justify-center space-y-8 border-b lg:border-b-0 lg:border-r border-border-default">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] hero-animate">
            Compassionate Care · Independent Lives
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] max-w-3xl hero-animate">
            Care at home <br />
            is <span className="text-[#E56B45]">rarely</span> simple.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed hero-animate">
            Registered with the Care Inspectorate Scotland. We help families design, match, and coordinate personalized care that actually holds up in real life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 hero-animate">
            <Link
              href="/contact"
              className="btn-primary uppercase tracking-widest text-xs py-4 px-8"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary uppercase tracking-widest text-xs py-4 px-8"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Hero Right Column - Image or Live Status Block */}
        <div className="lg:col-span-4 flex flex-col justify-between divide-y divide-border-default">
          <div className="p-8 space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] block">
              Active Coverage
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight">
              Serving West Lothian & Edinburgh
            </h3>
            <p className="text-xs text-text-tertiary leading-relaxed">
              Our local teams are based directly in the communities they support, backed by SSSC standards and enhanced PVG checks.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Livingston', 'Bathgate', 'Linlithgow', 'Edinburgh'].map((town) => (
                <span key={town} className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 bg-surface-base/5 border border-border-default town-tag">
                  {town}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 aspect-[4/3] lg:aspect-square overflow-hidden relative group video-animate">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-right.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 left-4 bg-surface-base text-text-secondary font-mono text-[9px] uppercase tracking-widest px-3 py-1 z-10">
              Care Inspectorate Registered
            </div>
          </div>
        </div>

      </section>

      {/* 2. MARQUEE / QUOTE TICKER - 108™ Supply trademark element */}
      <section className="bg-surface-base text-text-secondary border-b border-border-default py-4 overflow-hidden relative flex">
        <div className="flex whitespace-nowrap animate-marquee gap-12 text-xs font-mono uppercase tracking-widest shrink-0">
          {marqueeQuotes.map((q, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span>{q.text}</span>
              <span className="text-[#E56B45]">{q.author}</span>
              <span className="text-text-secondary/20">/ /</span>
            </div>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee gap-12 text-xs font-mono uppercase tracking-widest shrink-0" aria-hidden="true">
          {marqueeQuotes.map((q, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span>{q.text}</span>
              <span className="text-[#E56B45]">{q.author}</span>
              <span className="text-text-secondary/20">/ /</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STARK BORDER GRID: "Where standard home care breaks down" */}
      <section className="max-w-[1440px] mx-auto border-b border-border-default">
        
        {/* Grid Title */}
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-default max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
            The Reality
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
            Where standard home care <br />
            <span className="text-[#E56B45]">breaks down</span>
          </h2>
        </div>

        {/* 3-Column Stark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-default">
          
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.01, backgroundColor: '#FAF9F6' }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-12 space-y-4 cursor-default"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              01 / Rushed visits
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight">
              Visits feel like a checklist
            </h3>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Standard agencies offer 15-minute visits where a different carer rushes in, ticks a box, and runs. This model causes immense anxiety and lacks real human connection.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.01, backgroundColor: '#FAF9F6' }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-12 space-y-4 cursor-default"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              02 / Care on paper
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight">
              Care plans exist only on slides
            </h3>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Standard care plans are written down during an initial assessment, but are rarely updated to reflect the daily routines, real wishes, or changing moods of your loved ones.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ scale: 1.01, backgroundColor: '#FAF9F6' }}
            transition={{ duration: 0.2 }}
            className="p-8 sm:p-12 space-y-4 cursor-default"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              03 / High rotation
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight">
              Carer rotation is exhausting
            </h3>
            <p className="text-sm text-text-tertiary leading-relaxed">
              Having a different person walk through the door every day is confusing and stressful, especially for individuals living with dementia. We match dedicated primary carers instead.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. WHO WE WORK BEST WITH - 108™ Supply Layout */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default">
        
        {/* Left column description */}
        <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-border-default flex flex-col justify-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Targeted Support
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Who we work best with
          </h2>
          <p className="text-sm text-text-tertiary leading-relaxed">
            We focus our energy on families who want a structured, premium home care setup that values consistency, safety, and deep trust over minimum-wage checklists.
          </p>
          <Link
            href="/why-choose-us"
            className="btn-secondary text-xs uppercase tracking-widest inline-flex self-start"
          >
            Check your postcode
          </Link>
        </div>

        {/* Right column: 5 rows list */}
        <div className="lg:col-span-7 divide-y divide-border-default flex flex-col justify-center">
          {[
            { tag: "Elderly individuals", desc: "Seniors seeking to maintain maximum independence, routines, and dignity in their own homes." },
            { tag: "Dementia & Alzheimer's", desc: "Individuals who need highly structured, consistent care workers who understand memory support." },
            { tag: "Family caregivers", desc: "Exhausted relatives seeking reliable, high-quality respite cover to take a necessary break." },
            { tag: "Post-surgery recovery", desc: "Patients returning home from local hospitals who need temporary, structured physical assistance." },
            { tag: "Complex daily needs", desc: "Individuals who require safe transfer, hoisting, and MAR-charted medication administration." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              <div className="sm:col-span-4 font-sans font-bold uppercase tracking-tight text-base sm:text-lg">
                {item.tag}
              </div>
              <div className="sm:col-span-8 text-xs sm:text-sm text-text-tertiary leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 5. PRINCIPLES SECTION - Stark Cards */}
      <section className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto border-b border-border-default">
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-muted max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
            Our Creed
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-white">
            Clear principles behind <br />
            every care plan we design
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-muted">
          <div className="p-8 sm:p-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              01 / Dignity first
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-white">
              Absolute Respect
            </h3>
            <p className="text-sm text-text-inverse leading-relaxed">
              Every task, from personal care and bathing to dressing, is performed with absolute respect, patience, and privacy. We preserve self-esteem at all times.
            </p>
          </div>

          <div className="p-8 sm:p-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              02 / People over checklists
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-white">
              Real Relationships
            </h3>
            <p className="text-sm text-text-inverse leading-relaxed">
              We measure success by smiles, laughter, and comfort, not just checking off clinical boxes. We adapt each day based on how our client actually feels.
            </p>
          </div>

          <div className="p-8 sm:p-12 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              03 / Clarity beats complexity
            </span>
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-white">
              Transparent Systems
            </h3>
            <p className="text-sm text-text-inverse leading-relaxed">
              Simple, transparent communication. No hidden fees, no confusing schedules, and always a direct line to our local Scotland care management team.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCES THAT RESPECT EVERYONE'S TIME & RESOURCES (Services Preview) */}
      <section className="max-w-[1440px] mx-auto border-b border-border-default">
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-default flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
              Our Services
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none">
              Services that respect <br />
              your routine & independence
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-primary text-xs uppercase tracking-widest"
          >
            View All Services
          </Link>
        </div>

        {/* 3 columns services with border divider */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-default">
          
          {/* Service 1 */}
          <div className="group flex flex-col justify-between h-full hover:bg-surface-base hover:text-text-secondary transition-all duration-300">
            <div className="p-8 sm:p-12 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Daily Support
              </span>
              <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight">
                Personal Care
              </h3>
              <p className="text-sm text-current opacity-80 leading-relaxed">
                Dignified, gentle assistance with bathing, morning wake-up, evening tuck-in, and safe MAR-charted medication prompting.
              </p>
            </div>
            <div className="p-8 sm:p-12 pt-0 flex justify-between items-center">
              <Link href="/services" className="font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1">
                <span>View Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group flex flex-col justify-between h-full hover:bg-surface-base hover:text-text-secondary transition-all duration-300">
            <div className="p-8 sm:p-12 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Social Stimulation
              </span>
              <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight">
                Companionship
              </h3>
              <p className="text-sm text-current opacity-80 leading-relaxed">
                Meaningful conversation, shared hobbies, accompanied walks to local parks, meal preparation, and light household chores.
              </p>
            </div>
            <div className="p-8 sm:p-12 pt-0 flex justify-between items-center">
              <Link href="/services" className="font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1">
                <span>View Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group flex flex-col justify-between h-full hover:bg-surface-base hover:text-text-secondary transition-all duration-300">
            <div className="p-8 sm:p-12 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Continuous Support
              </span>
              <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight">
                24/7 Live-In Care
              </h3>
              <p className="text-sm text-current opacity-80 leading-relaxed">
                A premium, highly-personalised alternative to a residential care home. A matched carer lives in to maintain your routines safely.
              </p>
            </div>
            <div className="p-8 sm:p-12 pt-0 flex justify-between items-center">
              <Link href="/services" className="font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1">
                <span>View Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. INTERACTIVE PROCESS SECTION - 108™ Supply Layout */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default">
        
        {/* Left Column: Title */}
        <div className="lg:col-span-4 p-8 sm:p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-border-default flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              The Roadmap
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight">
              A clear process <br />
              from first day <br />
              and first call
            </h2>
            <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
              We reject the complexity of traditional care coordination. Our process is simple, direct, and completely transparent.
            </p>
          </div>
          <div className="hidden lg:flex gap-2 pt-6">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setActiveStep(num)}
                className={`w-10 h-10 font-mono text-xs font-bold border ${
                  activeStep === num ? 'bg-surface-base text-text-secondary' : 'border-border-default hover:bg-surface-base/5'
                } transition-all`}
              >
                0{num}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Process Details */}
        <div className="lg:col-span-8 divide-y divide-border-default flex flex-col justify-between">
          
          {/* Step 1 */}
          <div 
            onClick={() => setActiveStep(1)}
            className={`p-8 sm:p-12 cursor-pointer transition-colors ${activeStep === 1 ? 'bg-surface-base/5' : 'hover:bg-surface-base/2'}`}
          >
            <div className="flex gap-6 items-start">
              <span className="font-mono text-2xl font-bold text-[#E56B45]">01</span>
              <div className="space-y-3">
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                  Consultation & Listening
                </h3>
                {activeStep === 1 && (
                  <div className="space-y-4 pt-2 fade-in">
                    <p className="text-sm text-text-tertiary leading-relaxed">
                      We begin with a friendly, pressure-free working session to understand your family, routines, challenges, and goals. No long audits or rigid sales decks. Just open conversation.
                    </p>
                    <div className="p-4 bg-surface-raised border border-border-default text-xs font-mono">
                      <p className="font-bold uppercase text-[#E56B45] mb-1">What you get:</p>
                      <p>A clear, transparent scope of care and matching options tailored to your exact budget.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            onClick={() => setActiveStep(2)}
            className={`p-8 sm:p-12 cursor-pointer transition-colors ${activeStep === 2 ? 'bg-surface-base/5' : 'hover:bg-surface-base/2'}`}
          >
            <div className="flex gap-6 items-start">
              <span className="font-mono text-2xl font-bold text-[#E56B45]">02</span>
              <div className="space-y-3">
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                  Personalised Care Matching
                </h3>
                {activeStep === 2 && (
                  <div className="space-y-4 pt-2 fade-in">
                    <p className="text-sm text-text-tertiary leading-relaxed">
                      We design a custom care plan and match you with a primary carer based on interests, routines, and personalities. No random rotation of unfamiliar faces.
                    </p>
                    <div className="p-4 bg-surface-raised border border-border-default text-xs font-mono">
                      <p className="font-bold uppercase text-[#E56B45] mb-1">What you get:</p>
                      <p>A fully digital care plan and a matched primary support worker who is trained and PVG-checked.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            onClick={() => setActiveStep(3)}
            className={`p-8 sm:p-12 cursor-pointer transition-colors ${activeStep === 3 ? 'bg-surface-base/5' : 'hover:bg-surface-base/2'}`}
          >
            <div className="flex gap-6 items-start">
              <span className="font-mono text-2xl font-bold text-[#E56B45]">03</span>
              <div className="space-y-3">
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                  Ongoing Support as You Grow
                </h3>
                {activeStep === 3 && (
                  <div className="space-y-4 pt-2 fade-in">
                    <p className="text-sm text-text-tertiary leading-relaxed">
                      Care begins smoothly. We schedule regular review calls, and our local office coordinators remain on-call 24/7 for emergency backup. If your needs change, the setup adapts.
                    </p>
                    <div className="p-4 bg-surface-raised border border-border-default text-xs font-mono">
                      <p className="font-bold uppercase text-[#E56B45] mb-1">What you get:</p>
                      <p>A reliable, consistent care support system that keeps your family informed and completely supported.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 8. WHAT HAPPENS AFTER THE CHAOS (Case Studies / Testimonials with metrics) */}
      <section className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto border-b border-border-default">
        
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-muted max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
            Outcomes & Relief
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-white">
            What happens after the <br />
            <span className="text-[#E56B45]">peace of mind</span> returns
          </h2>
        </div>

        {/* 2-Column High Contrast Cards with Large Bold Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-muted">
          
          {/* Card 1 */}
          <div className="p-8 sm:p-12 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-text-secondary/90 italic leading-relaxed">
                &ldquo;Thrivewell gave our family total peace of mind. Mum&apos;s carer is kind, reliable, and treats her with real dignity. Having the same carer every week has completely settled Mum.&rdquo;
              </p>
              <p className="font-mono text-xs text-[#E56B45] uppercase">
                — Sarah M. (Livingston, West Lothian)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-muted">
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block">
                  +64%
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-inverse/50 block mt-1">
                  Family Peace of Mind
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block">
                  2.5x
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-inverse/50 block mt-1">
                  More Carer Consistency
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 sm:p-12 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-text-secondary/90 italic leading-relaxed">
                &ldquo;From the first call we felt listened to. The assessment was thorough and dad&apos;s care plan fits him perfectly. They helped us coordinate Self-Directed Support (SDS) funding seamlessly.&rdquo;
              </p>
              <p className="font-mono text-xs text-[#E56B45] uppercase">
                — James R. (Edinburgh)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-muted">
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block">
                  -42%
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-inverse/50 block mt-1">
                  Admin & Coordination stress
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl sm:text-4xl font-extrabold text-white block">
                  98%
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-inverse/50 block mt-1">
                  Satisfaction rating
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 9. LATEST ARTICLES & NEWS */}
      <section className="max-w-[1440px] mx-auto py-16 sm:py-20 px-8 no-scroll-animate">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
              Eldercare Guides
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Latest articles & news
            </h2>
          </div>
          <Link
            href="/resources"
            className="btn-secondary text-xs uppercase tracking-widest"
          >
            All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestArticles.map((article) => (
            <Link 
              key={article.id}
              href={`/resources/${article.id}`} 
              className="group space-y-4 border border-border-default p-6 bg-surface-raised hover:bg-surface-base hover:text-text-secondary transition-colors duration-300 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] block">
                  {article.category}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase tracking-tight leading-tight line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-current opacity-80 leading-relaxed line-clamp-3">
                  {article.desc}
                </p>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider pt-4 flex items-center gap-1.5 font-bold">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 animate-bounce-slow" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
