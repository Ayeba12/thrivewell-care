import React from 'react';
import { Shield, Eye, Lock, FileText, CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Data Controller",
      content: "Thrivewell Care is the trading name of Thrivewell Care Ltd, registered in Scotland. We are the 'Data Controller' for any personal or health data you provide to us. Our registered manager and co-founders oversee data protection governance, ensuring all care records and staff records comply with UK GDPR and Care Inspectorate Scotland regulations."
    },
    {
      title: "2. Information We Collect",
      content: "To design and deliver safe, personalized home care, we must collect relevant details. This includes contact information (name, address, email, phone) for clients and their family contacts, health and medical histories, care plans, medication records, dietary requirements, and financial information for care budget management. For job applicants, we also collect CVs, reference contact details, PVG checks, and SSSC registration status."
    },
    {
      title: "3. How We Use Your Data",
      content: "We process your personal and health data under the legal basis of 'public task' (for health and social care purposes) and contract fulfillment. Specifically, we use it to coordinate assessments and matched care support, maintain Care Inspectorate-compliant care logs, manage medication charting, process staff recruitment, and communicate about schedules or emergency backups."
    },
    {
      title: "4. Information Sharing & Disclosure",
      content: "We never sell or rent your personal information to third parties. We only share details when required to ensure clinical safety or legal compliance. This includes sharing care records with GPs, district nurses, or NHS Scotland emergency teams; reporting to Care Inspectorate Scotland officers during inspections; confirming credentials with the SSSC; or verifying PVG status with Disclosure Scotland."
    },
    {
      title: "5. Data Retention & Security",
      content: "Care records are stored securely in encrypted databases and locked cabinets (for physical documentation) in our West Lothian office. By law (Care Inspectorate guidelines), we must retain care logs, assessment records, and medication histories for specific periods (usually up to 6 years following the termination of care services). After this duration, records are securely shredded or digitally expunged."
    },
    {
      title: "6. Your Legal Rights",
      content: "Under UK GDPR, you have the right to request a copy of the care or personal records we hold about you (Subject Access Request), request corrections to inaccurate details, object to or restrict certain data processing, or ask us to delete non-regulatory data. To exercise any of these rights, please contact our Registered Manager at our West Lothian office or email hello@thrivewellcare.co.uk."
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Governance & Compliance
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          Privacy Policy
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-3xl leading-relaxed">
          How Thrivewell Care protects, stores, and coordinates your personal and care data in accordance with the Care Inspectorate, SSSC, and UK GDPR guidelines.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default divide-y lg:divide-y-0 lg:divide-x divide-border-default">
        
        {/* Left Column: Quick Reference (4 cols) */}
        <div className="lg:col-span-4 p-8 sm:p-12 space-y-8 bg-surface-muted">
          <div className="border border-border-default p-6 bg-surface-raised space-y-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] font-bold block border-b border-border-default pb-2">
              Quick Reference
            </span>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Shield className="w-5 h-5 text-[#E56B45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-tight">Care Inspectorate</h4>
                  <p className="text-[11px] text-text-tertiary mt-1 font-mono">Governed under SP000000 regulatory standards.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Lock className="w-5 h-5 text-[#E56B45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-tight">100% Encrypted</h4>
                  <p className="text-[11px] text-text-tertiary mt-1 font-mono">Secure, cloud-hosted records with limited nurse access.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Eye className="w-5 h-5 text-[#E56B45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-tight">SSSC Registry</h4>
                  <p className="text-[11px] text-text-tertiary mt-1 font-mono">Staff vetting and PVG certification matches requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border-default space-y-4">
            <h4 className="font-sans text-sm font-bold uppercase tracking-tight">Need to request records?</h4>
            <p className="text-xs text-text-tertiary leading-relaxed font-sans">
              To request a Subject Access Request (SAR) or query details of care plan storage, speak to Elisabeth, our Registered Manager.
            </p>
            <a 
              href="mailto:hello@thrivewellcare.co.uk" 
              className="inline-block font-mono text-xs uppercase tracking-wider text-[#E56B45] hover:text-text-primary font-bold underline"
            >
              hello@thrivewellcare.co.uk
            </a>
          </div>
        </div>

        {/* Right Column: Full Document Sections (8 cols) */}
        <div className="lg:col-span-8 p-8 sm:p-12 md:p-16 space-y-12 bg-surface-raised">
          <div className="space-y-4 pb-8 border-b border-border-muted">
            <span className="font-mono text-xs uppercase text-text-tertiary/60">Document Ref: TW-PP-2026-V2</span>
            <p className="text-sm text-text-tertiary leading-relaxed">
              This document outlines how Thrivewell Care handles personal, medical, and application records. It applies to all clients, family coordinators, staff members, and website visitors. We review this policy annually to meet shifting Care Inspectorate guidelines.
            </p>
          </div>

          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-sans text-xl font-extrabold uppercase tracking-tight text-text-primary">
                {sec.title}
              </h3>
              <p className="text-sm sm:text-base text-text-tertiary leading-relaxed font-sans">
                {sec.content}
              </p>
            </div>
          ))}

          <div className="pt-6 border-t border-border-muted flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-tertiary/60">
            <CheckCircle className="w-4 h-4 text-[#E56B45]" />
            <span>Last reviewed & updated on May 29, 2026</span>
          </div>
        </div>

      </section>
    </div>
  );
}
