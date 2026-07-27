"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  // Calculator State
  const [visitsPerDay, setVisitsPerDay] = useState<number>(1);
  const [visitLength, setVisitLength] = useState<number>(1);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(5);
  const [careType, setCareType] = useState<'hourly' | 'night' | 'livein'>('hourly');
  const [fpcEligible, setFpcEligible] = useState<boolean>(true);
  const [nightType, setNightType] = useState<'sleeping' | 'waking'>('sleeping');
  const [nightsPerWeek, setNightsPerWeek] = useState<number>(7);
  const [liveInWeeks, setLiveInWeeks] = useState<number>(4);

  // Constants (Realistic Scotland rates)
  const HOURLY_RATE = 28.50; // £28.50 per hour
  const LIVE_IN_RATE = 1395.00; // £1,395 per week
  const SCOTLAND_FPC_CONTRIBUTION = 248.70; // Scottish Free Personal Care contribution (approx weekly standard allowance)

  // Calculations
  let grossCost = 0;
  let fpcDeduction = 0;
  const hourlyWeeklyHours = visitsPerDay * visitLength * daysPerWeek;

  if (careType === 'hourly') {
    grossCost = hourlyWeeklyHours * HOURLY_RATE;
    fpcDeduction = fpcEligible ? Math.min(grossCost, SCOTLAND_FPC_CONTRIBUTION) : 0;
  } else if (careType === 'night') {
    grossCost = nightsPerWeek * (nightType === 'sleeping' ? 165 : 245);
    fpcDeduction = 0;
  } else if (careType === 'livein') {
    grossCost = LIVE_IN_RATE * liveInWeeks;
    fpcDeduction = fpcEligible ? SCOTLAND_FPC_CONTRIBUTION * liveInWeeks : 0;
  }

  const netCost = Math.max(0, grossCost - fpcDeduction);

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Transparent Rates & Funding
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Pricing & Funding Guides
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          No hidden fees, no complex contracts. We believe in clear, transparent pricing and help you navigate the Scottish funding systems.
        </p>
      </section>

      {/* Scottish Funding Information */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-default border-b border-border-default">
        
        <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Government Support in Scotland
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Personal care is free in Scotland
          </h2>
          <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
            Under the Scottish Government&apos;s <strong>Free Personal Care (FPC)</strong> policy, any adult over 65 who is assessed by their local council as needing personal care is eligible to receive financial support to cover these costs, regardless of their income or savings.
          </p>
          <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
            If your loved one lives in West Lothian or Edinburgh, the local social work department can conduct an assessment and pay a weekly contribution (currently up to <strong>£248.70 per week</strong>) directly to Thrivewell Care to cover your personal care visits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 border border-border-default bg-surface-raised space-y-2">
              <h4 className="font-sans font-bold uppercase tracking-tight text-sm">Free Personal Care</h4>
              <p className="text-[11px] text-text-tertiary leading-relaxed">Covers bathing, dressing, medication prompting, and meal preparation support.</p>
            </div>
            <div className="p-5 border border-border-default bg-surface-raised space-y-2">
              <h4 className="font-sans font-bold uppercase tracking-tight text-sm">Self-Directed Support</h4>
              <p className="text-[11px] text-text-tertiary leading-relaxed">Allows you to receive a direct payment from the council and choose Thrivewell as your provider.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 p-8 sm:p-12 bg-surface-base text-text-secondary flex flex-col justify-center space-y-6">
          <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-white">Our Standard Rates</h3>
          <p className="text-[11px] text-text-inverse">We pay our staff above the Real Living Wage to ensure the highest standards of care.</p>
          
          <ul className="space-y-4 border-b border-border-muted pb-6 font-mono text-xs">
            <li className="flex justify-between items-center">
              <span>Hourly Visiting Care (Min 1 hr)</span>
              <span className="font-bold text-[#E56B45]">£28.50 / hr</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Sleeping Night (10pm - 7am)</span>
              <span className="font-bold text-[#E56B45]">£165.00 / night</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Waking Night (10pm - 7am)</span>
              <span className="font-bold text-[#E56B45]">£245.00 / night</span>
            </li>
            <li className="flex justify-between items-center">
              <span>24/7 Live-In Care (Weekly)</span>
              <span className="font-bold text-[#E56B45]">From £1,395 / wk</span>
            </li>
          </ul>

          <div className="text-[10px] text-text-inverse/50 space-y-1">
            <p>• Holiday rates may apply on bank holidays.</p>
            <p>• Rates include all carer travel time, insurance, and 24/7 on-call coordinator support.</p>
          </div>
        </div>

      </section>

      {/* Interactive Care Cost Calculator - 108™ Style */}
      <section className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto border-b border-border-default">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-muted">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Interactive Calculator
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
                Estimate weekly care costs
              </h2>
            </div>

            {/* Care Type Selection */}
            <div className="space-y-3">
              <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                1. Select Type of Care
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'hourly', label: 'Hourly Visiting' },
                  { id: 'night', label: 'Night Care' },
                  { id: 'livein', label: 'Live-In Care' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => { setCareType(opt.id as 'hourly' | 'night' | 'livein'); }}
                    className={`py-3 text-xs font-mono uppercase tracking-widest border transition-all ${
                      careType === opt.id
                        ? 'bg-surface-muted border-white text-text-primary'
                        : 'bg-transparent border-border-muted text-white hover:border-border-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hourly Visiting Custom Sliders */}
            {careType === 'hourly' && (
              <div className="space-y-6">
                
                {/* Slider: Visits per Day */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse">
                      2. Visits per Day
                    </label>
                    <span className="font-mono text-base font-bold text-[#E56B45]">
                      {visitsPerDay} {visitsPerDay === 1 ? 'Visit' : 'Visits'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="1"
                    value={visitsPerDay}
                    onChange={(e) => setVisitsPerDay(Number(e.target.value))}
                    className="w-full accent-[#E56B45] cursor-pointer"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-text-inverse/40">
                    <span>1 visit/day</span>
                    <span>2 visits/day</span>
                    <span>3 visits/day</span>
                    <span>4 visits/day</span>
                  </div>
                </div>

                {/* Slider: Length of Each Visit */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse">
                      3. Length of each visit
                    </label>
                    <span className="font-mono text-base font-bold text-[#E56B45]">
                      {visitLength} {visitLength === 1 ? 'Hour' : 'Hours'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="0.5"
                    value={visitLength}
                    onChange={(e) => setVisitLength(Number(e.target.value))}
                    className="w-full accent-[#E56B45] cursor-pointer"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-text-inverse/40">
                    <span>1 hour (Min)</span>
                    <span>2 hours</span>
                    <span>3 hours</span>
                    <span>4 hours</span>
                  </div>
                </div>

                {/* Slider: Days per Week */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse">
                      4. Days per week
                    </label>
                    <span className="font-mono text-base font-bold text-[#E56B45]">
                      {daysPerWeek} {daysPerWeek === 1 ? 'Day' : 'Days'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={daysPerWeek}
                    onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                    className="w-full accent-[#E56B45] cursor-pointer"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-text-inverse/40">
                    <span>1 day/wk</span>
                    <span>4 days/wk</span>
                    <span>7 days/wk (Full week)</span>
                  </div>
                </div>

                {/* Total Calculated Hours Summary Box */}
                <div className="bg-surface-base p-4 border border-border-muted flex justify-between items-center text-xs font-mono">
                  <span className="opacity-70">Total Care Hours per Week</span>
                  <span className="font-bold text-[#E56B45] text-sm">{hourlyWeeklyHours} Hours</span>
                </div>

              </div>
            )}

            {/* Night Care Options (Only shown for Night Care) */}
            {careType === 'night' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                    2. Type of Night Care
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        id: 'sleeping',
                        title: 'Sleeping night',
                        desc: 'Carer sleeps over, available if needed (≈10 hrs).',
                        price: '£165'
                      },
                      {
                        id: 'waking',
                        title: 'Waking night',
                        desc: 'Carer awake all night, ideal for higher needs.',
                        price: '£245'
                      }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setNightType(opt.id as 'sleeping' | 'waking')}
                        className={`p-5 text-left border flex flex-col justify-between transition-all cursor-pointer ${
                          nightType === opt.id
                            ? 'bg-surface-muted border-white text-text-primary'
                            : 'bg-transparent border-border-muted text-text-secondary hover:border-border-muted'
                        }`}
                      >
                        <div className="space-y-1">
                          <span className={`font-sans font-bold uppercase tracking-tight text-sm ${nightType === opt.id ? 'text-text-primary' : 'text-white'}`}>
                            {opt.title}
                          </span>
                          <p className={`text-[11px] leading-relaxed ${nightType === opt.id ? 'text-text-tertiary' : 'text-text-inverse'}`}>
                            {opt.desc}
                          </p>
                        </div>
                        <span className="font-mono text-lg font-bold text-[#E56B45] mt-4 block">
                          {opt.price}/night
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse">
                      3. Nights per Week
                    </label>
                    <span className="font-mono text-lg font-bold text-[#E56B45]">
                      {nightsPerWeek} {nightsPerWeek === 1 ? 'Night' : 'Nights'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={nightsPerWeek}
                    onChange={(e) => setNightsPerWeek(Number(e.target.value))}
                    className="w-full accent-[#E56B45] cursor-pointer"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-text-inverse/40">
                    <span>1 night</span>
                    <span>4 nights</span>
                    <span>7 nights (Full week)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Live-in Care Options (Only shown for Live-In Care) */}
            {careType === 'livein' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                    From £1,395 per week
                  </span>
                  <p className="text-xs text-text-inverse leading-relaxed font-sans">
                    A dedicated carer lives in the home, providing companionship and support throughout the day with appropriate rest breaks. Ideal for couples, dementia care, or as a long-term alternative to a care home.
                  </p>
                </div>

                {/* Slider for Number of Weeks */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse">
                      2. Number of Weeks
                    </label>
                    <span className="font-mono text-lg font-bold text-[#E56B45]">
                      {liveInWeeks} {liveInWeeks === 1 ? 'Week' : 'Weeks'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={liveInWeeks}
                    onChange={(e) => setLiveInWeeks(Number(e.target.value))}
                    className="w-full accent-[#E56B45] cursor-pointer"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-text-inverse/40">
                    <span>1 week</span>
                    <span>6 weeks</span>
                    <span>12 weeks</span>
                  </div>
                </div>

                {/* Live-in Features List */}
                <div className="border-t border-border-muted pt-4 space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-inverse/50 block">
                    Live-in Package Features
                  </span>
                  <ul className="space-y-2 text-xs text-text-inverse leading-normal">
                    {[
                      "Personal care, meals & medication support",
                      "Companionship and household routines",
                      "One trusted carer — continuity & familiarity",
                      "Respite cover arranged when carer takes a break"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E56B45] mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Free Personal Care Eligibility Toggle */}
            {(careType === 'hourly' || careType === 'livein') && (
              <div className="bg-surface-base p-5 border border-border-muted flex items-start gap-4">
                <input
                  type="checkbox"
                  id="fpc"
                  checked={fpcEligible}
                  onChange={(e) => setFpcEligible(e.target.checked)}
                  className="w-4 h-4 accent-[#E56B45] mt-1 shrink-0"
                />
                <div className="space-y-1">
                  <label htmlFor="fpc" className="text-xs font-mono uppercase tracking-wider text-text-secondary cursor-pointer block">
                    Include Scottish Free Personal Care contribution?
                  </label>
                  <p className="text-[11px] text-text-inverse/60 leading-relaxed">
                    Check this if the client is over 65, resides in Scotland, and is likely eligible for council personal care funding (est. £248.70/wk).
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Calculations */}
          <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 bg-surface-base flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Estimated Breakdown
              </span>
              
              <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-border-muted">
                <span className="opacity-70">{careType === 'livein' ? 'Gross Total Cost' : 'Gross Weekly Cost'}</span>
                <span className="font-bold text-white">£{grossCost.toFixed(2)}</span>
              </div>

              {fpcDeduction > 0 && (
                <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-border-muted text-green-400">
                  <span>Gov Funding (FPC)</span>
                  <span>- £{fpcDeduction.toFixed(2)}</span>
                </div>
              )}

              <div className="pt-2">
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-50 block">
                  {careType === 'livein' ? 'Estimated Net Total Cost' : 'Estimated Net Weekly Cost'}
                </span>
                <span className="font-sans text-4xl sm:text-5xl font-extrabold text-white block mt-1">£{netCost.toFixed(2)}</span>
                <span className="font-mono text-[10px] opacity-50 block mt-2">
                  {careType === 'livein' 
                    ? `Average weekly: £${(netCost / liveInWeeks).toFixed(2)}` 
                    : `Estimated monthly: £${((netCost * 52) / 12).toFixed(2)}`}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href={`/contact?service=${encodeURIComponent(
                  careType === 'livein' 
                    ? '24/7 Live-In Care' 
                    : careType === 'night' 
                    ? `${nightType === 'sleeping' ? 'Sleeping Night' : 'Waking Night'} Care` 
                    : 'Hourly Visiting Care'
                )}&message=${encodeURIComponent(
                  careType === 'hourly'
                    ? `We calculated an estimate of £${netCost.toFixed(2)}/wk for ${hourlyWeeklyHours} hours of care (${visitsPerDay} x ${visitLength} hr visits, ${daysPerWeek} days/wk). We would like to request an official quote and assessment.`
                    : careType === 'night'
                    ? `We calculated an estimate of £${netCost.toFixed(2)}/wk for ${nightsPerWeek} nights of ${nightType === 'sleeping' ? 'Sleeping Night' : 'Waking Night'} care. We would like to request an official quote and assessment.`
                    : `We calculated an estimate of £${netCost.toFixed(2)} total for ${liveInWeeks} weeks of 24/7 Live-In care. We would like to request an official quote and assessment.`
                )}`}
                className="w-full btn-primary bg-surface-muted text-text-primary border border-border-default hover:!bg-[#B83A14] hover:!text-[#FFFFFF] hover:border-[#B83A14] active:!bg-surface-muted active:!text-text-primary active:border-border-default py-4 uppercase tracking-widest font-bold block text-center animate-none"
              >
                Request Official Quote
              </Link>
              <p className="font-mono text-[9px] text-center opacity-40 leading-relaxed">
                *This is an estimate. Exact costs are determined during our free home care assessment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto py-16 sm:py-20 px-6 sm:px-12 md:px-16 space-y-12">
        <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-center">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "How do I apply for Free Personal Care in Scotland?",
              a: "You must contact your local authority's social work department (West Lothian Council or City of Edinburgh Council) and request an 'Adult Care Assessment'. A social worker will visit, assess your loved one's needs, and confirm their eligibility. We can guide you through this paperwork!"
            },
            {
              q: "Can I use Self-Directed Support (SDS) with Thrivewell?",
              a: "Yes! Under SDS Option 1 or Option 2, the council pays your care budget directly to you or to a third party. You can then choose to spend that budget on Thrivewell Care. This gives you total control over who visits and when."
            },
            {
              q: "Is there a minimum contract length?",
              a: "No. We believe in complete flexibility. We have a simple agreement with a 14-day notice period, allowing you to increase, decrease, or pause care as your situation changes."
            },
            {
              q: "Are there any hidden costs for travel or assessment?",
              a: "Absolutely not. Our hourly rate is fully inclusive. We do not charge extra for carer travel time, mileage, or our initial home assessment. The price you see is the price you pay."
            }
          ].map((faq, idx) => (
            <div key={idx} className="p-6 border border-border-default bg-surface-raised space-y-3">
              <h4 className="font-sans text-lg font-bold uppercase tracking-tight">{faq.q}</h4>
              <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
