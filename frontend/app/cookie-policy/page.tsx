import React from 'react';
import { Shield, Eye, Lock, FileText, CheckCircle, Database } from 'lucide-react';

export default function CookiePolicy() {
  const cookieDetails = [
    {
      name: "thrivewell_cookie_consent",
      provider: "Thrivewell Care",
      purpose: "Saves your selection (Accept All or Essential Only) inside the consent banner to avoid re-prompting.",
      duration: "1 year",
      type: "Essential"
    },
    {
      name: "weekly-care-cost-data",
      provider: "Thrivewell Care",
      purpose: "Temporarily saves your slider settings and calculations in the Care Cost Calculator for easier comparison.",
      duration: "Session",
      type: "Functional"
    },
    {
      name: "care-matcher-answers",
      provider: "Thrivewell Care",
      purpose: "Maintains responses while navigating the Care Matcher quiz to render your final package recommendations.",
      duration: "Session",
      type: "Functional"
    },
    {
      name: "applicant-session",
      provider: "Thrivewell Care",
      purpose: "Secures application form uploading during recruitment submissions for Care Worker positions.",
      duration: "Session",
      type: "Essential (Security)"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Digital Compliance
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Cookie Policy
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-3xl leading-relaxed">
          How we use cookies and localized tracking storage to maintain a secure, high-performance web experience for client assessment requests and career applicants.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default divide-y lg:divide-y-0 lg:divide-x divide-border-default">
        
        {/* Left Column: Quick Q&A (4 cols) */}
        <div className="lg:col-span-4 p-8 sm:p-12 space-y-8 bg-surface-muted">
          <div className="border border-border-default p-6 bg-surface-raised space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] font-bold block border-b border-border-default pb-2">
              Key Questions
            </span>
            <div className="space-y-4">
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-tight">What are cookies?</h4>
                <p className="text-[11px] text-text-tertiary mt-1 leading-relaxed">Small text files stored in your web browser that allow websites to recognize preferences or keep you securely logged in.</p>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-tight">Do we track you?</h4>
                <p className="text-[11px] text-text-tertiary mt-1 leading-relaxed">No. We do not use third-party marketing trackers or ad retargeting pixels. All cookies serve active utility features.</p>
              </div>
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-tight">How to clear consent?</h4>
                <p className="text-[11px] text-text-tertiary mt-1 leading-relaxed">You can reset your choices by clearing your browser's local storage and cookies for our domain at any time.</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border-default space-y-4">
            <h4 className="font-sans text-sm font-bold uppercase tracking-tight">Technical details</h4>
            <p className="text-xs text-text-tertiary leading-relaxed font-sans">
              All cookies and local variables operate under secure SSL encryption. Essential cookies are mandatory for application uploads and security checks.
            </p>
          </div>
        </div>

        {/* Right Column: Policy text and Cookie Table (8 cols) */}
        <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 space-y-10 bg-surface-raised">
          
          <div className="space-y-4">
            <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary">
              1. How We Use Cookies
            </h3>
            <p className="text-sm sm:text-base text-text-tertiary leading-relaxed font-sans">
              Unlike many standard agency websites, we prioritize user privacy. We do not integrate complex advertising networks or behavioral profiling software. We use cookies and local browser storage objects to ensure that interactive tools (like the Care Matcher recommendation quiz and the Weekly Cost Calculator) store inputs as you adjust sliders, saving you from starting over.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary">
              2. Classifications of Cookies
            </h3>
            <ul className="space-y-3 text-sm text-text-tertiary font-sans">
              <li>
                <strong>Essential Cookies:</strong> Required to access specific site actions, such as uploading application attachments safely via the Careers recruitment portal, or checking server firewall tokens.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Retain choices you make while interacting with calculations. For example, they track whether you have selected standard or night packages, or are using local authority funding options.
              </li>
              <li>
                <strong>Performance & Security:</strong> Support anonymous loading speed diagnostics to ensure pages serve properly across West Lothian's local connections.
              </li>
            </ul>
          </div>

          <div className="space-y-6 pt-4">
            <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary flex items-center gap-2">
              <Database className="w-5 h-5 text-[#E56B45]" />
              <span>3. List of Active Cookies</span>
            </h3>
            
            {/* Brutalist design table */}
            <div className="overflow-x-auto border border-border-default">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-muted border-b border-border-default font-mono text-[10px] uppercase tracking-wider text-text-primary">
                    <th className="p-4 border-r border-border-default">Cookie Name</th>
                    <th className="p-4 border-r border-border-default">Provider</th>
                    <th className="p-4 border-r border-border-default">Purpose</th>
                    <th className="p-4 border-r border-border-default">Expiry</th>
                    <th className="p-4">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default font-sans text-xs text-text-primary">
                  {cookieDetails.map((cook, idx) => (
                    <tr key={idx} className="hover:bg-surface-muted/50 transition-colors">
                      <td className="p-4 border-r border-border-default font-mono font-bold text-[11px] text-[#E56B45]">
                        {cook.name}
                      </td>
                      <td className="p-4 border-r border-border-default font-medium">{cook.provider}</td>
                      <td className="p-4 border-r border-border-default text-text-tertiary leading-normal">{cook.purpose}</td>
                      <td className="p-4 border-r border-border-default font-mono text-[10px]">{cook.duration}</td>
                      <td className="p-4 font-mono text-[10px] uppercase font-bold text-[#3D5A45]">{cook.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary">
              4. Managing Your Preferences
            </h3>
            <p className="text-sm sm:text-base text-text-tertiary leading-relaxed font-sans">
              Most browsers allow you to block, accept, or clear cookies through browser settings. Disabling essential cookies may prevent recruitment form uploads or compromise calculator operations. For detailed instructions on managing cookies, visit{' '}
              <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-[#E56B45]">
                www.aboutcookies.org
              </a>.
            </p>
          </div>

          <div className="pt-6 border-t border-border-muted flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-tertiary/60">
            <CheckCircle className="w-4 h-4 text-[#E56B45]" />
            <span>Last reviewed & updated on May 29, 2026</span>
          </div>
        </div>

      </section>
    </div>
  );
}
