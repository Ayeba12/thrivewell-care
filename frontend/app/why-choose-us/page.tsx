"use client";

import React, { useState } from 'react';
import { Check, X, MapPin, Search, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  const [postcode, setPostcode] = useState('');
  const [postcodeResult, setPostcodeResult] = useState<'success' | 'fail' | null>(null);

  const servedPostcodes = [
    'EH54', 'EH53', 'EH52', 'EH49', 'EH48', 'EH47', // West Lothian (Livingston, Bathgate, Linlithgow, Whitburn, Armadale)
    'EH1', 'EH2', 'EH3', 'EH4', 'EH5', 'EH6', 'EH7', 'EH8', 'EH9', 'EH10', 'EH11', 'EH12', 'EH13', 'EH14', 'EH15', 'EH16', 'EH17', // Edinburgh
    'EH21', 'EH32', 'EH33', 'EH34', 'EH35', 'EH36', 'EH39', 'EH40', 'EH41' // East Lothian
  ];

  const handlePostcodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPostcode = postcode.trim().toUpperCase().replace(/\s+/g, '');
    
    const isServed = servedPostcodes.some(code => 
      cleanPostcode.startsWith(code) || code.startsWith(cleanPostcode)
    );

    if (isServed && cleanPostcode.length >= 2) {
      setPostcodeResult('success');
    } else {
      setPostcodeResult('fail');
    }
  };

  const comparison = [
    {
      feature: "Minimum Visit Duration",
      thrivewell: "1 Full Hour — We never rush, allowing plenty of time for care, conversation, and a cup of tea.",
      standard: "15 to 30 Minutes — Often rushed, clinical 'task-and-run' visits that cause anxiety."
    },
    {
      feature: "Carer Consistency",
      thrivewell: "Dedicated Primary Carer matched to your personality and routines. You'll see the same face.",
      standard: "High rotation. A different carer can walk through the door on every single visit."
    },
    {
      feature: "Staff Training & Pay",
      thrivewell: "Paid above Real Living Wage. Fully SSSC-registered, PVG-checked, and trained in-house.",
      standard: "Minimum wage, high staff turnover, and basic online-only training modules."
    },
    {
      feature: "Custom Care Plans",
      thrivewell: "Dynamic, digital care plans updated in real-time. Families have full app access to notes.",
      standard: "Paper folders left in the house that are rarely updated or reviewed."
    },
    {
      feature: "Emergency Support",
      thrivewell: "24/7 Local On-Call Coordinator. If a carer is ill, we guarantee a familiar backup carer.",
      standard: "Automated call centers or no backup, leaving families to scramble for cover."
    }
  ];

  const towns = [
    { name: "Livingston", desc: "Our core West Lothian team is based here, serving all neighborhoods." },
    { name: "Bathgate", desc: "Providing full personal and companionship care across the town." },
    { name: "Linlithgow", desc: "Local carers serving historic Linlithgow and surrounding villages." },
    { name: "Whitburn & Armadale", desc: "Reliable daily support and night care for local households." },
    { name: "Edinburgh City", desc: "Dedicated teams serving West, South, and Central Edinburgh areas." },
    { name: "East Lothian", desc: "Growing support teams in Musselburgh, Haddington, and coastal towns." }
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          The Thrivewell Difference
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Why Families Choose Us
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          Choosing care for someone you love is a big decision. Here is why families across West Lothian and Edinburgh trust us with that responsibility.
        </p>
      </section>

      {/* Comparison Table - Stark Border Grid */}
      <section className="max-w-[1440px] mx-auto border-b border-border-default">
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-default max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
            Side-By-Side Comparison
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
            How Thrivewell compares to standard care
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-base text-text-secondary font-mono text-xs uppercase tracking-widest">
                <th className="p-6 border-r border-border-muted w-1/4">Care Quality Feature</th>
                <th className="p-6 border-r border-border-muted text-[#E56B45]">Thrivewell Care</th>
                <th className="p-6">Typical Care Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-base/2 transition-colors">
                  <td className="p-6 text-sm font-bold uppercase tracking-tight border-r border-border-default w-1/4">
                    {row.feature}
                  </td>
                  <td className="p-6 text-xs sm:text-sm text-text-primary border-r border-border-default w-2/5">
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-[#E56B45] shrink-0 mt-0.5" />
                      <span>{row.thrivewell}</span>
                    </div>
                  </td>
                  <td className="p-6 text-xs sm:text-sm text-text-tertiary w-2/5">
                    <div className="flex gap-2.5">
                      <X className="w-4 h-4 text-text-tertiary/40 shrink-0 mt-0.5" />
                      <span>{row.standard}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Postcode Checker & Service Map */}
      <section className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto border-b border-border-default">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-muted">
          
          {/* Postcode Checker Form */}
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
              Local to You
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Check if we serve your area
            </h2>
            <p className="text-xs sm:text-sm text-text-inverse leading-relaxed">
              Our care teams are based locally across West Lothian, Edinburgh, and East Lothian. Enter your postcode (e.g. EH54, EH12, EH49) to see if we have active carers nearby.
            </p>

            <form onSubmit={handlePostcodeCheck} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Enter Postcode (e.g. EH54)"
                  value={postcode}
                  onChange={(e) => {
                    setPostcode(e.target.value);
                    setPostcodeResult(null);
                  }}
                  className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-5 py-4 text-xs font-mono uppercase text-text-secondary placeholder-[#F3F3F0]/40 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-surface-muted border border-transparent hover:border-border-default hover:bg-surface-base hover:text-text-secondary text-text-primary text-xs font-mono uppercase tracking-widest px-5 py-2.5 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Check</span>
                </button>
              </div>

              {postcodeResult === 'success' && (
                <div className="p-4 bg-[#E56B45]/10 border border-[#E56B45]/30 text-xs text-white flex items-start gap-2.5 fade-in">
                  <ShieldCheck className="w-5 h-5 text-[#E56B45] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase tracking-wider">Yes, we serve your area!</p>
                    <p className="opacity-80 mt-0.5">We have active care workers available in your area. Contact us to schedule a free assessment.</p>
                  </div>
                </div>
              )}

              {postcodeResult === 'fail' && (
                <div className="p-4 bg-red-950/20 border border-red-600/30 text-xs text-text-secondary/90 flex items-start gap-2.5 fade-in">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold uppercase tracking-wider">Area not fully launched yet</p>
                    <p className="opacity-80 mt-0.5">We might not have a full team in your postcode yet, but we are growing fast. Please contact our office directly on 01506 000 000 to double-check.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Served Towns Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 divide-y divide-border-muted sm:divide-y-0 sm:divide-x divide-x-0">
            {towns.map((town, idx) => (
              <div key={idx} className="p-8 space-y-3 flex flex-col justify-center border-b border-border-muted last:border-b-0">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E56B45]" />
                  <h4 className="font-sans text-lg font-bold uppercase tracking-tight text-white">{town.name}</h4>
                </div>
                <p className="text-xs text-text-inverse leading-relaxed">{town.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Trust Factors Grid */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-default">
        
        <div className="p-8 sm:p-12 space-y-4">
          <div className="w-10 h-10 border border-border-default text-text-primary flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-sans text-xl font-bold uppercase tracking-tight">PVG-Checked & Vetted</h3>
          <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
            Every staff member undergoes the most rigorous vetting in Scotland. We check references, verify professional histories, and conduct enhanced Disclosure Scotland checks.
          </p>
        </div>

        <div className="p-8 sm:p-12 space-y-4">
          <div className="w-10 h-10 border border-border-default text-text-primary flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-sans text-xl font-bold uppercase tracking-tight">Dedicated Primary Carers</h3>
          <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
            We match carers with clients based on interests, routines, and personalities. This consistency is essential for individuals living with dementia, creating calm and trust.
          </p>
        </div>

        <div className="p-8 sm:p-12 space-y-4">
          <div className="w-10 h-10 border border-border-default text-text-primary flex items-center justify-center">
            <PhoneCall className="w-5 h-5" />
          </div>
          <h3 className="font-sans text-xl font-bold uppercase tracking-tight">24/7 Local Office Support</h3>
          <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
            We are not an app or a distant call center. Our local office coordinators are on-call 24 hours a day, 7 days a week, to handle schedule changes or emergency backup.
          </p>
        </div>

      </section>
    </div>
  );
}
