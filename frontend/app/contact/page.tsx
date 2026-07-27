"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  
  // Form State
  const [clientName, setClientName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [careType, setCareType] = useState('Hourly Visiting Care');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill form state if passed from other pages via searchParams
  useEffect(() => {
    const assessment = searchParams.get('assessment');
    const service = searchParams.get('service');
    const messageParam = searchParams.get('message');
    const quizResultTitle = searchParams.get('quizResultTitle');
    const quizResultDesc = searchParams.get('quizResultDesc');

    if (assessment === 'true') {
      setCareType('Free Care Assessment');
    } else if (service) {
      setCareType(service);
    } else if (quizResultTitle) {
      setCareType(quizResultTitle);
    }
    
    if (messageParam) {
      setMessage(messageParam);
    } else if (quizResultTitle && quizResultDesc) {
      setMessage(`We completed the online Care Matcher quiz and got the result: "${quizResultTitle}". We would like to schedule a free assessment to discuss this plan.`);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && email && phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 bg-surface-base text-text-secondary">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block">
              Care Assessment
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Book a Free Care Assessment
            </h3>
            <p className="text-xs text-text-inverse leading-relaxed">
              We will visit you at home to listen, design a custom care plan, and answer all questions. Completely free and obligation-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Contact Person */}
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                Your Name (Contact Person)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. James Smith"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors"
              />
            </div>

            {/* Client Name */}
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                Loved One's Name (Client)
              </label>
              <input
                type="text"
                placeholder="e.g. Margaret Smith (Optional)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
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
                placeholder="e.g. james@example.com"
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
                placeholder="e.g. 01506 123456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors"
              />
            </div>

            {/* Care Type Selection */}
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                Type of Care Needed
              </label>
              <select
                value={careType}
                onChange={(e) => setCareType(e.target.value)}
                className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary outline-none transition-colors cursor-pointer text-white"
              >
                <option>Hourly Visiting Care</option>
                <option>Personal Care & Medication</option>
                <option>Companionship & Outings</option>
                <option>24/7 Live-In Care</option>
                <option>Night Care (Waking/Sleeping)</option>
                <option>Respite Care</option>
                <option>Free Care Assessment</option>
              </select>
            </div>

            {/* Preferred Assessment Date */}
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
                Preferred Date for Visit
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary outline-none transition-colors cursor-pointer text-white"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-text-inverse block">
              Tell us briefly about your requirements
            </label>
            <textarea
              rows={4}
              placeholder="Provide any details that will help us understand your needs (e.g. medical conditions, preferred times, funding status)..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-surface-base border border-border-muted focus:border-[#E56B45] px-4 py-3 text-xs text-text-secondary placeholder-[#F3F3F0]/30 outline-none transition-colors resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full btn-primary bg-surface-muted text-text-primary border border-border-default hover:!bg-[#B83A14] hover:!text-[#FFFFFF] hover:border-[#B83A14] active:!bg-surface-muted active:!text-text-primary active:border-border-default py-4 uppercase tracking-widest font-bold"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>Book Free Assessment</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6 text-center py-10 fade-in">
          <div className="w-12 h-12 rounded-full border border-[#E56B45] text-[#E56B45] flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="font-sans text-3xl font-extrabold uppercase tracking-tight text-white">Assessment Requested!</h3>
          <p className="text-xs sm:text-sm text-text-inverse max-w-xl mx-auto leading-relaxed">
            Thank you, <strong>{contactName}</strong>. We have received your request for a free care assessment.
          </p>
          <div className="bg-surface-base p-5 border border-border-muted text-xs text-text-inverse max-w-md mx-auto text-left space-y-2">
            <p className="font-mono uppercase tracking-widest text-[#E56B45] font-bold">What happens next?</p>
            <ul className="space-y-2 list-decimal pl-4">
              <li>A senior care coordinator will call you on <strong>{phone}</strong> within 2 hours to confirm your details.</li>
              <li>We will schedule a convenient home visit (on or around <strong>{preferredDate || 'your preferred date'}</strong>).</li>
              <li>We will design a custom, transparent care plan together. No cost, no obligation.</li>
            </ul>
          </div>
          <div className="pt-4">
            <button
              onClick={() => {
                setContactName('');
                setClientName('');
                setEmail('');
                setPhone('');
                setCareType('Hourly Visiting Care');
                setPreferredDate('');
                setMessage('');
                setSubmitted(false);
              }}
              className="btn-secondary border-white text-white hover:bg-surface-raised hover:text-black text-xs uppercase tracking-wider py-3 px-6"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Get in Touch
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Contact Our Care Team
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          Have questions about fees, funding, or carer matching? We are here to help. Speak with a local care coordinator today.
        </p>
      </section>

      {/* Main Grid Contact & Form */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border-default border-b border-border-default">
        
        {/* Left Column: Contact details & local office */}
        <div className="lg:col-span-5 p-8 sm:p-12 md:p-16 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
              Local Offices
            </span>
            <h2 className="font-sans text-3xl font-extrabold uppercase tracking-tight">
              We are local, reliable, and on-call 24/7
            </h2>
            <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
              We are not a digital platform or an app. We are a fully registered, local care team. If you call us, you will speak to a real person in West Lothian who knows our carers and our clients personally.
            </p>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {/* Phone */}
            <div className="p-5 border border-border-default bg-surface-raised flex gap-4">
              <Phone className="w-5 h-5 text-[#E56B45] shrink-0" />
              <div>
                <h4 className="font-sans font-bold uppercase tracking-tight">Call Us Directly</h4>
                <p className="text-sm font-bold text-text-primary mt-1">01506 000 000</p>
                <p className="text-[10px] text-text-tertiary/60 mt-1 leading-normal">Office: Mon–Sat 9am–5:30pm · On-call 24/7 for support emergencies</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-5 border border-border-default bg-surface-raised flex gap-4">
              <Mail className="w-5 h-5 text-[#E56B45] shrink-0" />
              <div>
                <h4 className="font-sans font-bold uppercase tracking-tight">Email Enquiries</h4>
                <p className="text-sm font-bold text-text-primary mt-1">hello@thrivewellcare.co.uk</p>
                <p className="text-[10px] text-text-tertiary/60 mt-1 leading-normal">General questions, funding advice, or client referrals</p>
              </div>
            </div>

            {/* Location */}
            <div className="p-5 border border-border-default bg-surface-raised flex gap-4">
              <MapPin className="w-5 h-5 text-[#E56B45] shrink-0" />
              <div>
                <h4 className="font-sans font-bold uppercase tracking-tight">Office Address</h4>
                <p className="text-sm font-bold text-text-primary mt-1">West Lothian, Scotland</p>
                <p className="text-[10px] text-text-tertiary/60 mt-1 leading-normal">Serving Livingston, Bathgate, Linlithgow, Edinburgh, and East Lothian</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <Suspense fallback={
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 bg-surface-base text-text-secondary flex items-center justify-center">
            <span>Loading...</span>
          </div>
        }>
          <ContactFormContent />
        </Suspense>

      </section>

      {/* 3. WHAT HAPPENS NEXT SECTION - 108™ Stark Border Grid Layout */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-4 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-4 border-b lg:border-b-0 lg:border-r border-border-default">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            What happens next
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
            Three simple steps
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
              We'll call you within 24 hours
            </h3>
            <p className="font-mono text-xs sm:text-sm text-text-tertiary leading-relaxed">
              A friendly chat to understand your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-center">
            <span className="font-mono text-xl font-bold text-[#E56B45] block">
              02
            </span>
            <h3 className="font-sans text-lg font-bold uppercase tracking-tight">
              We arrange a free home assessment
            </h3>
            <p className="font-mono text-xs sm:text-sm text-text-tertiary leading-relaxed">
              A visit to design your personal care plan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 sm:p-12 space-y-4 flex flex-col justify-center">
            <span className="font-mono text-xl font-bold text-[#E56B45] block">
              03
            </span>
            <h3 className="font-sans text-lg font-bold uppercase tracking-tight">
              Your personalised care plan begins
            </h3>
            <p className="font-mono text-xs sm:text-sm text-text-tertiary leading-relaxed">
              Care starts with a carer matched to you.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}
