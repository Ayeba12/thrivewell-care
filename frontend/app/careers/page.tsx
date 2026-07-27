"use client";

import React, { useState } from 'react';
import { Check, Send, Sparkles } from 'lucide-react';

export default function Careers() {
  // Application Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [hasLicense, setHasLicense] = useState<string>('');
  const [hasExperience, setHasExperience] = useState<string>('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      title: "Flexible hours",
      desc: "Shifts that fit around family life and study."
    },
    {
      title: "PVG & SSSC support",
      desc: "We cover and guide you through all checks and registration."
    },
    {
      title: "Paid training",
      desc: "Full induction and ongoing development from day one."
    },
    {
      title: "Supportive team",
      desc: "A nurse-led office team and 24/7 on-call backup."
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && phone) {
      setSubmitted(true);
    }
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('apply-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Join Thrivewell Care
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Careers in Care
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          We pay above the Real Living Wage, guarantee your hours, and treat you with the same respect you show our clients. Grow your career with us.
        </p>
      </section>

      {/* Why Work for Us */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-default border-b border-border-default">
        
        <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Why work with us
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            A team that has your back
          </h2>
          <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
            We know care work is demanding. That's why we invest in our team — with proper training, fair pay, real support and a culture where every carer feels valued.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-5 border border-border-default bg-surface-raised space-y-2">
                <h4 className="font-sans font-bold uppercase tracking-tight text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E56B45]" />
                  <span>{benefit.title}</span>
                </h4>
                <p className="text-[11px] text-text-tertiary leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto overflow-hidden relative">
          <img
            src="/images/care-support.jpg"
            alt="Thrivewell Care Support Team"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      {/* Current Roles Section - 108™ Stark Grid Layout */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-4 border-b lg:border-b-0 lg:border-r border-border-default">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Current Roles
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
            Open positions
          </h2>
        </div>

        {/* Right Column: Roles Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-default">
          
          {/* Role 1: Care Worker */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#E56B45] font-bold block">
                Full-time / Part-time · West Lothian
              </span>
              <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary">
                Care Worker
              </h3>
              <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
                Deliver kind, person-centred care in clients' own homes. No experience required — just compassion. Paid training and induction provided.
              </p>
            </div>
            <a
              href="#apply-form"
              onClick={handleApplyClick}
              className="inline-flex items-center text-xs font-mono uppercase tracking-wider font-bold text-text-primary hover:text-[#E56B45] transition-colors mt-6"
            >
              Apply now →
            </a>
          </div>

          {/* Role 2: Senior Care Worker */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#E56B45] font-bold block">
                Full-time · West Lothian & Edinburgh
              </span>
              <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary">
                Senior Care Worker
              </h3>
              <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
                Lead a small team, mentor new carers and support care planning alongside our nurse-led management. SVQ Level 3 or equivalent preferred.
              </p>
            </div>
            <a
              href="#apply-form"
              onClick={handleApplyClick}
              className="inline-flex items-center text-xs font-mono uppercase tracking-wider font-bold text-text-primary hover:text-[#E56B45] transition-colors mt-6"
            >
              Apply now →
            </a>
          </div>

        </div>

      </section>

      {/* Our Process Section - 108™ Stark Grid Layout */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-4 border-b lg:border-b-0 lg:border-r border-border-default">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Our Process
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
            From hello to first shift
          </h2>
        </div>

        {/* Right Column: 3 Steps */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-default">
          
          {/* Step 1 */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-center">
            <span className="font-mono text-xl font-bold text-[#E56B45] block">
              01
            </span>
            <h3 className="font-sans text-lg font-bold uppercase tracking-tight">
              Apply
            </h3>
            <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
              Send us your details using the short form below.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-center">
            <span className="font-mono text-xl font-bold text-[#E56B45] block">
              02
            </span>
            <h3 className="font-sans text-lg font-bold uppercase tracking-tight">
              Interview
            </h3>
            <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
              A friendly chat to learn about you and answer your questions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-center">
            <span className="font-mono text-xl font-bold text-[#E56B45] block">
              03
            </span>
            <h3 className="font-sans text-lg font-bold uppercase tracking-tight">
              Induction & Training
            </h3>
            <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
              Paid induction, training and shadowing before you start.
            </p>
          </div>

        </div>

      </section>

      {/* Interactive Application Form - 108™ Style */}
      <section id="apply-form" className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto scroll-mt-16 sm:scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-muted border-b border-border-default">
          
          {/* Left Column */}
          <div className="lg:col-span-4 p-8 sm:p-12 md:p-16 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
                Quick Application
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Start your journey with us today
              </h2>
              <p className="text-xs sm:text-sm text-text-inverse leading-relaxed">
                Fill out this 1-minute form. Our local recruitment manager will call you within 24 hours for an informal, friendly chat.
              </p>
            </div>
            <div className="pt-6 font-mono text-[10px] uppercase tracking-wider text-text-inverse/40">
              *All applications are strictly confidential.
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 bg-surface-base">
            {!submitted ? (
              <form onSubmit={handleApply} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Campbell"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07712 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Postcode */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Postcode / Location
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. EH54"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors"
                    />
                  </div>

                  {/* Role Interest */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Role you're interested in
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary outline-none transition-colors cursor-pointer text-white font-sans"
                    >
                      <option value="" disabled>Choose option</option>
                      <option>Care Worker</option>
                      <option>Senior Care Worker</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Driving License */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Do you have a valid UK driving license & car?
                    </label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setHasLicense(opt)}
                          className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest border transition-all ${
                            hasLicense === opt
                              ? 'bg-surface-muted border-white text-text-primary'
                              : 'bg-transparent border-border-muted text-white hover:border-border-muted'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Care Experience */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                      Do you have professional care experience?
                    </label>
                    <div className="flex gap-4">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setHasExperience(opt)}
                          className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest border transition-all ${
                            hasExperience === opt
                              ? 'bg-surface-muted border-white text-text-primary'
                              : 'bg-transparent border-border-muted text-white hover:border-border-muted'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Brief Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                    Tell us briefly why you'd like to join Thrivewell
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about yourself or your care background..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full btn-primary bg-surface-muted text-text-primary border border-border-default hover:!bg-[#B83A14] hover:!text-[#FFFFFF] hover:border-[#B83A14] active:!bg-surface-muted active:!text-text-primary active:border-border-default py-4 uppercase tracking-widest font-bold cursor-pointer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center py-6 fade-in">
                <div className="w-12 h-12 rounded-full border border-[#E56B45] text-[#E56B45] flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white">Application Received!</h3>
                <p className="text-xs sm:text-sm text-text-inverse max-w-xl mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>, for applying to join Thrivewell Care. We have sent a confirmation email to <strong>{email}</strong>.
                </p>
                <div className="bg-surface-base p-5 border border-border-muted text-xs text-text-inverse max-w-md mx-auto text-left space-y-2">
                  <p className="font-mono uppercase tracking-widest text-[#E56B45] font-bold">What happens next?</p>
                  <p className="leading-relaxed">
                    Our local West Lothian recruitment coordinator will review your application. We will call you on <strong>{phone}</strong> within 24 hours for a very friendly, informal chat.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setPhone('');
                      setPostcode('');
                      setHasLicense('');
                      setHasExperience('');
                      setMessage('');
                      setRole('');
                      setSubmitted(false);
                    }}
                    className="btn-secondary border-white text-white hover:bg-surface-raised hover:text-black text-xs uppercase tracking-wider py-3 px-6"
                  >
                    Submit Another Application
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
