import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Absolute Dignity",
      desc: "Every person has a unique life story. We support our clients with the same care, respect, and privacy we would expect for our own parents.",
      num: "01"
    },
    {
      title: "Carer Continuity",
      desc: "We reject the industry standard of rotating random carers. We match families with a primary carer to establish deep trust and comfort.",
      num: "02"
    },
    {
      title: "Local Community Focus",
      desc: "Based in West Lothian, our team is local. We know the doctors, the pharmacies, and the community groups that make our clients feel at home.",
      num: "03"
    },
    {
      title: "SSSC & Care Inspectorate Standards",
      desc: "We are fully registered with the Care Inspectorate Scotland. Every support worker is SSSC-registered or working towards it, and PVG-vetted.",
      num: "04"
    }
  ];

  const team = [
    {
      name: "Olabokun Imoukhuede",
      role: "Co-founder & Director",
      bio: "Co-founder and director, leading Thrivewell's vision for compassionate, regulated care across central Scotland.",
      image: "/images/carer-portrait.jpg"
    },
    {
      name: "Israel Aanu",
      role: "Co-founder & Director",
      bio: "Co-founder and director, focused on operations, governance and ensuring every family receives a responsive service.",
      image: "/images/consultation.jpg"
    },
    {
      name: "Elizabeth Oluwadamilola Micheal",
      role: "Registered Manager · NMC Registered Nurse",
      bio: "Our nurse-led Registered Manager oversees clinical safety, care planning and the day-to-day quality of every package.",
      image: "/images/care-support.jpg"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 bg-surface-muted text-text-primary">
      {/* Hero Banner */}
      <section className="max-w-[1440px] mx-auto p-6 sm:p-12 md:p-16 border-b border-border-default space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
          Our Story & Philosophy
        </span>
        <h1 className="font-sans text-5xl sm:text-6xl font-extrabold uppercase tracking-tight leading-none">
          About Thrivewell Care
        </h1>
        <p className="font-sans text-lg sm:text-xl text-text-tertiary max-w-2xl leading-relaxed">
          Founded with a simple mission: to help seniors across West Lothian and Edinburgh live independent, dignified lives in the comfort of their own homes.
        </p>
      </section>

      {/* Our Mission & Image */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-border-default divide-y lg:divide-y-0 lg:divide-x divide-border-default">
        <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45]">
            Why We Started
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Bringing heart and continuity back to home care
          </h2>
          <p className="text-sm sm:text-base text-text-tertiary leading-relaxed">
            For too long, home care has been treated like a logistics problem. Large agencies schedule 15-minute visits, rotating random carers through the doors of vulnerable seniors who barely have time to say hello before the carer has to leave.
          </p>
          <p className="text-sm sm:text-base text-text-tertiary leading-relaxed">
            <strong>Thrivewell Care was born out of a desire to do things differently.</strong> We believe that great care requires time, patience, and consistency. That's why our minimum visit length is 1 hour, and we match each client with a dedicated carer who shares their interests.
          </p>
          <div className="pt-4 border-t border-border-muted flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-tertiary/60">
            <CheckCircle className="w-4 h-4 text-[#E56B45]" />
            <span>Registered with Care Inspectorate Scotland (SP000000)</span>
          </div>
        </div>

        <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto overflow-hidden">
          <img
            src="/images/companionship.jpg"
            alt="Caregiver and elderly lady laughing"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our Values - 4 Column Grid with borders */}
      <section className="bg-surface-base text-text-secondary max-w-[1440px] mx-auto border-b border-border-default">
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-muted max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
            Core Principles
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            The values that guide every single visit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 md:divide-x divide-border-muted">
          {values.map((val, idx) => {
            return (
              <div key={idx} className="p-8 sm:p-10 space-y-4">
                <span className="font-mono text-lg font-bold text-[#E56B45] block">
                  {val.num}
                </span>
                <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-white">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-inverse leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Meet the Leadership */}
      <section className="max-w-[1440px] mx-auto border-b border-border-default">
        <div className="p-8 sm:p-12 md:p-16 border-b border-border-default max-w-4xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E56B45] block mb-2">
            Our Leadership
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none">
            The team behind our care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-default">
          {team.map((member, idx) => (
            <div key={idx} className="p-8 sm:p-12 flex flex-row sm:flex-col gap-6 items-start">
              <div className="w-20 h-20 sm:w-36 sm:h-36 shrink-0 overflow-hidden border border-border-default bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E56B45] font-bold block">
                  {member.role}
                </span>
                <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight" style={{ wordSpacing: '4px' }}>
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SSSC & Care Inspectorate Regulatory Box */}
      <section className="max-w-[1440px] mx-auto p-8 sm:p-12 md:p-16 text-center space-y-6">
        <Shield className="w-10 h-10 text-[#E56B45] mx-auto" />
        <h3 className="font-sans text-2xl font-extrabold uppercase tracking-tight">
          Regulation & Safety Compliance
        </h3>
        <p className="text-xs sm:text-sm text-text-tertiary leading-relaxed max-w-3xl mx-auto">
          Thrivewell Care is fully registered and regulated by the <strong>Care Inspectorate Scotland</strong>. We adhere strictly to the Health and Social Care Standards, and our staff are registered with the <strong>Scottish Social Services Council (SSSC)</strong>. All support workers undergo enhanced PVG disclosure vetting before starting.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-2 font-mono text-[10px] uppercase tracking-widest text-text-tertiary/60">
          <span>Provider No: SP000000</span>
          <span className="hidden sm:inline">·</span>
          <span>PVG Vetted</span>
          <span className="hidden sm:inline">·</span>
          <span>SSSC Compliant</span>
        </div>
      </section>
    </div>
  );
}
