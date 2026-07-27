"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Services() {
  // Quiz State
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  const [q3, setQ3] = useState<string>('');
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<{ title: string; desc: string; hours: string } | null>(null);

  const services = [
    {
      id: "personal",
      title: "Personal Care",
      tagline: "Dignity, comfort & safety in daily routines",
      desc: "Our personal care services are designed to support your loved one with their most private daily routines, ensuring they feel clean, comfortable, and confident in their own home.",
      bullets: [
        "Gentle assistance with bathing, showering, and hair washing",
        "Dignified support with dressing, undressing, and grooming",
        "Incontinence care and sensitive toileting assistance",
        "Safe morning wake-up and evening tuck-in routines",
        "Mobility support, including safe transfers using hoists or slides"
      ],
      badge: "Care Inspectorate Regulated"
    },
    {
      id: "medication",
      title: "Medication Support",
      tagline: "Safe prompting & administration",
      desc: "Managing multiple prescriptions can be stressful and error-prone. Our SSSC-registered carers are fully trained in medication management, ensuring the right dose is taken at the right time.",
      bullets: [
        "Prompting and reminding to take medications on schedule",
        "Assistance with opening blister packs, bottles, and tubes",
        "Full MAR-charted (Medication Administration Record) logging",
        "Liaising with local pharmacies and GPs for prescription reorders"
      ],
      badge: "SSSC Trained Staff"
    },
    {
      id: "companionship",
      title: "Companionship & Outings",
      tagline: "Rich conversations & active social lives",
      desc: "Eldercare is about more than clinical tasks. We focus heavily on emotional well-being, helping seniors stay socially active, mentally stimulated, and connected to West Lothian & Edinburgh.",
      bullets: [
        "Friendly conversation, sharing stories, and playing board games",
        "Accompanied walks to local parks, gardens, or high streets",
        "Support with grocery shopping and running errands together",
        "Assistance with preparing fresh, nutritious home-cooked meals"
      ],
      badge: "Relationship-First Care"
    },
    {
      id: "live-in",
      title: "24/7 Live-In Care",
      tagline: "Round-the-clock peace of mind at home",
      desc: "An excellent, highly-personalised alternative to a residential care home. A dedicated, matched carer lives in your home to provide continuous support and companionship, maintaining your exact routines.",
      bullets: [
        "Continuous 24-hour support tailored to your lifestyle",
        "Complete assistance with personal care, meals, and chores",
        "Perfect for advanced dementia or couples who wish to stay together",
        "Carefully matched carer who shares similar interests and values"
      ],
      badge: "Premium Alternative"
    },
    {
      id: "night",
      title: "Night Care (Waking & Sleeping)",
      tagline: "Full reassurance through the quietest hours",
      desc: "Nights can be the most anxious times for seniors and their families. We offer both waking and sleeping night support to ensure safety, comfort, and professional intervention whenever needed.",
      bullets: [
        "Sleeping Night: Carer sleeps in the home, ready to assist up to twice",
        "Waking Night: Carer stays awake all night, monitoring and assisting",
        "Support with late-night toilet visits, reducing fall risks",
        "Reassurance for individuals experiencing sundowning or dementia confusion"
      ],
      badge: "24/7 On-Call Backup"
    },
    {
      id: "respite",
      title: "Respite Care",
      tagline: "Short-term cover when family carers need a break",
      desc: "Caring for a family member is rewarding but physically and emotionally exhausting. Our respite services provide high-quality temporary cover, allowing family carers to rest and recharge with total peace of mind.",
      bullets: [
        "Short-term cover from a few days to several weeks",
        "Seamless transition of routines so your loved one feels secure",
        "Perfect for family holidays, work commitments, or sudden illness",
        "Available across West Lothian, Edinburgh, and East Lothian"
      ],
      badge: "Flexible Scheduling"
    }
  ];

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q1 || !q2) return;

    let result = {
      title: "Personal Care & Companionship (Standard)",
      desc: "Based on your answers, we recommend a structured daily package of 1 to 3 hours. This will provide professional support with morning or evening routines, safe medication prompting, and warm companionship for outings or conversation.",
      hours: "Recommended: 5 to 15 hours per week"
    };

    if (q1 === 'complex' || q2 === 'overnight' || q2 === '247') {
      result = {
        title: "Specialist Live-In or 24/7 Night Care",
        desc: "Due to the complex or round-the-clock nature of the support needed, we recommend our Specialist Live-In Care or Waking Night packages. This provides continuous professional safety monitoring, complex medication support, and absolute peace of mind.",
        hours: "Recommended: Live-In or Waking Night Support"
      };
    } else if (q1 === 'basic' && q2 === 'few-hours') {
      result = {
        title: "Companionship & Social Support",
        desc: "Your loved one is largely independent but would benefit greatly from social stimulation, meal preparation, and light assistance. We recommend 2 to 3 weekly visits of 2 hours each to focus on outings, conversation, and hobbies.",
        hours: "Recommended: 4 to 8 hours per week"
      };
    } else if (q1 === 'respite') {
      result = {
        title: "Flexible Respite Care Package",
        desc: "To support you as a family caregiver, we recommend setting up a flexible Respite Care plan. This can cover regular weekly afternoons or short-term blocks (like weekends) so you can take a reliable break.",
        hours: "Recommended: Flexible hours based on family needs"
      };
    }

    setQuizResult(result);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQ1('');
    setQ2('');
    setQ3('');
    setQuizSubmitted(false);
    setQuizResult(null);
  };

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Person-Centred Support
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Our Care Services
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          Whatever the need — a few hours a week or round-the-clock support — we shape every package around your routine, your home, and the things that matter most.
        </p>
      </section>

      {/* Services Stark Grid Section */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y divide-border-default border-b border-border-default">
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className="p-8 sm:p-10 flex flex-col justify-between hover:bg-surface-base/2 transition-colors duration-200 border-b md:border-r border-border-default last:border-r-0 lg:odd:border-r"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] font-bold">
                    {service.badge}
                  </span>
                  <span className="font-mono text-xs text-text-tertiary/40">
                    [0{index + 1}]
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="border-t border-border-muted pt-4 space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary/60 block mb-2">
                    Package Features
                  </span>
                  <ul className="space-y-2 text-xs text-text-tertiary leading-normal">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E56B45] mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn-primary text-[10px] uppercase tracking-wider py-3 flex-grow text-center"
                >
                  Arrange Care
                </Link>
                <Link
                  href="/pricing"
                  className="btn-secondary text-[10px] uppercase tracking-wider py-3 flex-grow text-center"
                >
                  Rates & Funding
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Interactive Service Matcher Quiz - 108™ Style */}
      <section className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-muted border-b border-border-default">
          
          {/* Left Column: Info */}
          <div 
            className="lg:col-span-4 p-8 sm:p-12 md:p-16 flex flex-col justify-between relative min-h-[350px] lg:min-h-auto bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "linear-gradient(rgba(17, 17, 17, 0.85), rgba(17, 17, 17, 0.85)), url('/images/hero-elderly.jpg')" }}
          >
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Interactive Tool
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Find the right care match
              </h2>
              <p className="text-xs sm:text-sm text-text-inverse leading-relaxed">
                Answer 3 simple questions to receive an instant, professional recommendation on what care structure would support your family best.
              </p>
            </div>
            <div className="pt-6 font-mono text-[10px] uppercase tracking-wider text-text-inverse/40">
              *Estimates are advisory based on Scotland Care standards.
            </div>
          </div>

          {/* Right Column: Quiz Form */}
          <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 bg-surface-base">
            {!quizSubmitted ? (
              <form onSubmit={handleQuizSubmit} className="space-y-8">
                
                {/* Question 1 */}
                <div className="space-y-3">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                    1. Current Support Level
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { value: 'basic', label: 'Companion & Chores', desc: 'Mainly needs company, meal prep, and light help.' },
                      { value: 'personal', label: 'Personal Care & Meds', desc: 'Needs help with bathing, dressing, and safety.' },
                      { value: 'complex', label: 'Dementia / Complex Support', desc: 'Advanced dementia or high physical safety needs.' },
                      { value: 'respite', label: 'Family Respite', desc: 'Temporary relief cover for primary family carer.' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setQ1(opt.value)}
                        className={`text-left p-4 border transition-all ${
                          q1 === opt.value
                            ? 'bg-surface-muted border-white text-text-primary'
                            : 'bg-transparent border-border-muted text-text-inverse hover:border-border-muted'
                        }`}
                      >
                        <span className="font-sans font-bold text-sm block mb-1">{opt.label}</span>
                        <span className="text-[11px] opacity-70 leading-normal block">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 2 */}
                <div className="space-y-3">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                    2. Frequency & Timing
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { value: 'few-hours', label: 'A few hours a week', desc: 'Flexible visiting times during the day.' },
                      { value: 'daily', label: 'Daily visiting care', desc: 'Set daily visits (morning, lunch, or evening).' },
                      { value: 'overnight', label: 'Overnight support', desc: 'Reassurance or active monitoring during night.' },
                      { value: '247', label: '24/7 Round-the-clock', desc: 'A live-in carer for continuous monitoring.' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setQ2(opt.value)}
                        className={`text-left p-4 border transition-all ${
                          q2 === opt.value
                            ? 'bg-surface-muted border-white text-text-primary'
                            : 'bg-transparent border-border-muted text-text-inverse hover:border-border-muted'
                        }`}
                      >
                        <span className="font-sans font-bold text-sm block mb-1">{opt.label}</span>
                        <span className="text-[11px] opacity-70 leading-normal block">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                    3. Service Location
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['West Lothian', 'Edinburgh', 'Other / East Lothian'].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setQ3(loc)}
                        className={`text-center p-3 border text-xs font-mono uppercase tracking-widest transition-all ${
                          q3 === loc
                            ? 'bg-surface-muted border-white text-text-primary'
                            : 'bg-transparent border-border-muted text-text-inverse hover:border-border-muted'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!q1 || !q2}
                    className="w-full btn-primary bg-surface-muted text-text-primary border border-border-default hover:!bg-[#B83A14] hover:!text-[#FFFFFF] hover:border-[#B83A14] active:!bg-surface-muted active:!text-text-primary active:border-border-default py-4 uppercase tracking-widest font-bold disabled:opacity-40 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span>Generate Care Recommendation</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center py-6 fade-in">
                <div className="w-12 h-12 rounded-full border border-[#E56B45] text-[#E56B45] flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                  Your Recommended Match
                </span>
                <h3 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white">
                  {quizResult?.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-inverse max-w-xl mx-auto leading-relaxed">
                  {quizResult?.desc}
                </p>
                <div className="inline-block border border-[#E56B45] px-4 py-2 font-mono text-xs font-bold text-[#E56B45] uppercase tracking-widest">
                  {quizResult?.hours}
                </div>

                <div className="pt-8 border-t border-border-muted flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                  <Link
                    href={`/contact?quizResultTitle=${encodeURIComponent(quizResult?.title || '')}&quizResultDesc=${encodeURIComponent(quizResult?.desc || '')}`}
                    className="btn-primary bg-surface-muted text-text-primary border border-border-default hover:!bg-[#B83A14] hover:!text-[#FFFFFF] hover:border-[#B83A14] active:!bg-surface-muted active:!text-text-primary active:border-border-default text-xs uppercase tracking-wider py-3.5 flex-grow text-center"
                  >
                    Schedule Assessment
                  </Link>
                  <button
                    onClick={resetQuiz}
                    className="btn-secondary border-white text-white hover:bg-surface-raised hover:text-black text-xs uppercase tracking-wider py-3.5 flex-grow text-center"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
