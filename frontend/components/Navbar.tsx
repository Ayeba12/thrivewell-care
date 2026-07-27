"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Heart } from 'lucide-react';

const servicesList = [
  {
    id: "personal",
    title: "Personal Care",
    tagline: "Dignity & Comfort",
    desc: "Dignified, professional support with bathing, dressing, and daily personal routines.",
    image: "/images/carer-portrait.jpg"
  },
  {
    id: "medication",
    title: "Medication Support",
    tagline: "SSSC Trained Carers",
    desc: "Safe prompting, administration, and full MAR charting by SSSC-trained staff.",
    image: "/images/post-surgery.jpg"
  },
  {
    id: "companionship",
    title: "Companionship",
    tagline: "Social & Well-being",
    desc: "Rich conversation, accompanied walks, and support with outings or fresh home-cooked meals.",
    image: "/images/companionship.jpg"
  },
  {
    id: "live-in",
    title: "24/7 Live-In Care",
    tagline: "Premium Care Home Alternative",
    desc: "Continuous 24-hour care tailored to your lifestyle—an excellent alternative to a care home.",
    image: "/images/senior-couple.jpg"
  },
  {
    id: "night",
    title: "Night Care",
    tagline: "Sleeping & Waking Nights",
    desc: "Sleeping or waking night cover to ensure safety, comfort, and peace of mind through the night.",
    image: "/images/cozy-home.jpg"
  },
  {
    id: "respite",
    title: "Respite Care",
    tagline: "Short-Term Support",
    desc: "Short-term temporary cover, allowing family carers to rest and recharge with total confidence.",
    image: "/images/respite-care.jpg"
  }
];

const resourcesList = [
  {
    id: 1,
    title: "Understanding Self-Directed Support (SDS) in Scotland",
    tagline: "Funding Guide",
    desc: "How to use Self-Directed Support (SDS) to choose Thrivewell Care and control your care budget.",
    image: "/images/care-support.jpg"
  },
  {
    id: 2,
    title: "Structure & Routine in Dementia Care",
    tagline: "Dementia Support",
    desc: "How matched carers and daily routines maintain calm and foster deep trust.",
    image: "/images/hero-elderly.jpg"
  },
  {
    id: 3,
    title: "Free Personal Care in Scotland",
    tagline: "Funding Guide",
    desc: "What tasks are covered and how to get assessed by your local authority.",
    image: "/images/carer-portrait.jpg"
  },
  {
    id: 4,
    title: "Maintaining Senior Independence",
    tagline: "Wellbeing & Safety",
    desc: "A checklist of simple, high-impact changes you can make to prevent falls.",
    image: "/images/cozy-home.jpg"
  }
];

const careersList = [
  {
    id: "care-worker",
    title: "Care Worker",
    tagline: "Entry Level · West Lothian",
    desc: "Deliver kind, person-centred care in clients' own homes. No experience required—paid training and shadowing provided.",
    image: "/images/carer-portrait.jpg",
    path: "/careers#apply-form"
  },
  {
    id: "senior-care-worker",
    title: "Senior Care Worker",
    tagline: "SVQ Level 3 · Central Scotland",
    desc: "Lead a small team, mentor new carers, and support care planning alongside our nurse-led management.",
    image: "/images/care-support.jpg",
    path: "/careers#apply-form"
  },
  {
    id: "our-process",
    title: "Our Recruitment Process",
    tagline: "From Hello to First Shift",
    desc: "A transparent three-step journey: simple online application, friendly interview, and full paid induction.",
    image: "/images/consultation.jpg",
    path: "/careers"
  },
  {
    id: "why-work-with-us",
    title: "Why Work With Us",
    tagline: "Benefits & Support",
    desc: "Shifts that fit your life, fully covered SSSC/PVG fees, paid training, and a supportive nurse-led team.",
    image: "/images/cozy-home.jpg",
    path: "/careers"
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<any>(null);
  const [resourcesMegaOpen, setResourcesMegaOpen] = useState(false);
  const [hoveredResource, setHoveredResource] = useState<any>(null);
  const [careersMegaOpen, setCareersMegaOpen] = useState(false);
  const [hoveredCareer, setHoveredCareer] = useState<any>(null);
  const [resources, setResources] = useState<any[]>(resourcesList);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setMegaOpen(false);
    setResourcesMegaOpen(false);
    setCareersMegaOpen(false);
    setHoveredService(null);
    setHoveredResource(null);
    setHoveredCareer(null);
  }, [pathname]);

  // Dynamically load the latest 4 resource articles from WordPress on mount
  useEffect(() => {
    async function loadLatestResources() {
      try {
        const { getArticles } = await import('@/lib/wordpress');
        const data = await getArticles();
        if (data && data.length > 0) {
          const formatted = data.slice(0, 4).map((art: any) => ({
            id: art.id,
            title: art.title,
            tagline: art.category,
            desc: art.desc,
            image: art.image
          }));
          setResources(formatted);
        }
      } catch (err) {
        console.error("Failed to load articles for mega menu:", err);
      }
    }
    loadLatestResources();
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Why Us', path: '/why-choose-us' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-muted border-b border-border-default">
      <div className="max-w-[1440px] mx-auto flex items-stretch h-16 sm:h-20 relative">
        
        {/* Brand / Logo - Left Block */}
        <Link 
          href="/" 
          className="flex flex-col justify-center px-6 sm:px-8 border-r border-border-default hover:bg-surface-base hover:text-text-secondary transition-colors duration-200 shrink-0"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 fill-current" />
            <span className="font-sans text-xl font-extrabold uppercase tracking-tight">
              Thrivewell
            </span>
          </div>
          <span className="font-mono text-[9px] tracking-wider uppercase text-current opacity-70 mt-0.5">
            Care · Scotland
          </span>
        </Link>

        {/* Navigation Links - Center Block (Hidden on Mobile/Tablet) */}
        <div className="hidden xl:flex items-stretch flex-grow">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            if (link.name === 'Services') {
              return (
                <div
                  key={link.name}
                  className="flex items-stretch"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => {
                    setMegaOpen(false);
                    setHoveredService(null);
                  }}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center justify-center px-5 font-mono text-xs uppercase tracking-wider border-r border-border-default transition-all duration-200 hover:bg-surface-base hover:text-text-secondary ${
                      megaOpen || isActive ? 'bg-surface-base text-text-secondary' : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {megaOpen && (
                    <div 
                      className="absolute top-full left-0 right-0 w-full bg-surface-muted border-b border-l border-r border-border-default grid grid-cols-12 z-50 shadow-2xl divide-x divide-border-default text-text-primary"
                      onMouseEnter={() => setMegaOpen(true)}
                    >
                      {/* Left Column: Services Grid (8 cols) */}
                      <div className="col-span-8 grid grid-cols-2 divide-y divide-x divide-border-default border-t border-border-default">
                        {servicesList.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            className="p-6 flex items-center justify-between min-h-[110px] hover:bg-surface-base hover:text-text-secondary transition-all duration-300 group"
                            onMouseEnter={() => setHoveredService(service)}
                          >
                            <div className="flex flex-col space-y-2 pr-4">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-[#E56B45]">
                                {service.tagline}
                              </span>
                              <span className="font-sans text-sm font-extrabold uppercase tracking-tight text-current">
                                {service.title}
                              </span>
                            </div>
                            <div className="w-0 opacity-0 group-hover:w-24 group-hover:opacity-100 h-16 overflow-hidden shrink-0 border border-transparent group-hover:border-border-muted transition-all duration-300 ease-in-out relative">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-all duration-300"
                              />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Column: Preview (4 cols) */}
                      <div className="col-span-4 p-8 flex flex-col justify-between bg-surface-raised border-t border-border-default text-text-primary">
                        <div className="space-y-4">
                          <div className="aspect-[16/10] overflow-hidden border border-border-default relative">
                            <img
                              src={hoveredService ? hoveredService.image : "/images/hero-elderly.jpg"}
                              alt={hoveredService ? hoveredService.title : "Thrivewell Care"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-sans font-bold uppercase tracking-tight text-sm text-text-primary">
                              {hoveredService ? hoveredService.title : "Thrivewell Care"}
                            </h4>
                            <p className="text-xs text-text-tertiary leading-relaxed font-sans">
                              {hoveredService ? hoveredService.desc : "Registered with the Care Inspectorate Scotland. We help families design, match, and coordinate personalized care."}
                            </p>
                          </div>
                        </div>
                        
                        <Link 
                          href="/services" 
                          className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#E56B45] hover:text-text-primary pt-4 font-bold"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.name === 'Resources') {
              return (
                <div
                  key={link.name}
                  className="flex items-stretch"
                  onMouseEnter={() => setResourcesMegaOpen(true)}
                  onMouseLeave={() => {
                    setResourcesMegaOpen(false);
                    setHoveredResource(null);
                  }}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center justify-center px-5 font-mono text-xs uppercase tracking-wider border-r border-border-default transition-all duration-200 hover:bg-surface-base hover:text-text-secondary ${
                      resourcesMegaOpen || isActive ? 'bg-surface-base text-text-secondary' : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>

                  {/* Resources Mega Menu Dropdown */}
                  {resourcesMegaOpen && (
                    <div 
                      className="absolute top-full left-0 right-0 w-full bg-surface-muted border-b border-l border-r border-border-default grid grid-cols-12 z-50 shadow-2xl divide-x divide-border-default text-text-primary"
                      onMouseEnter={() => setResourcesMegaOpen(true)}
                    >
                      {/* Left Column: Resources Grid (8 cols) */}
                      <div className="col-span-8 grid grid-cols-2 divide-y divide-x divide-border-default border-t border-border-default">
                        {resources.map((res) => (
                          <Link
                            key={res.id}
                            href={`/resources/${res.id}`}
                            className="p-6 flex items-center justify-between min-h-[110px] hover:bg-surface-base hover:text-text-secondary transition-all duration-300 group"
                            onMouseEnter={() => setHoveredResource(res)}
                          >
                            <div className="flex flex-col space-y-2 pr-4">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-[#E56B45]">
                                  {res.tagline}
                              </span>
                              <span className="font-sans text-sm font-extrabold uppercase tracking-tight text-current line-clamp-2">
                                  {res.title}
                              </span>
                            </div>
                            <div className="w-0 opacity-0 group-hover:w-24 group-hover:opacity-100 h-16 overflow-hidden shrink-0 border border-transparent group-hover:border-border-muted transition-all duration-300 ease-in-out relative">
                              <img
                                src={res.image}
                                alt={res.title}
                                className="w-full h-full object-cover transition-all duration-300"
                              />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Column: Preview (4 cols) */}
                      <div className="col-span-4 p-8 flex flex-col justify-between bg-surface-raised border-t border-border-default text-text-primary">
                        <div className="space-y-4">
                          <div className="aspect-[16/10] overflow-hidden border border-border-default relative">
                            <img
                              src={hoveredResource ? hoveredResource.image : "/images/care-support.jpg"}
                              alt={hoveredResource ? hoveredResource.title : "Thrivewell Care Resources"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-sans font-bold uppercase tracking-tight text-sm text-text-primary">
                              {hoveredResource ? hoveredResource.title : "Thrivewell Care Resources"}
                            </h4>
                            <p className="text-xs text-text-tertiary leading-relaxed font-sans line-clamp-3">
                              {hoveredResource ? hoveredResource.desc : "Free, professional advice on navigating funding, dementia care, wellbeing, and local support in West Lothian and Edinburgh."}
                            </p>
                          </div>
                        </div>
                        
                        <Link 
                          href="/resources" 
                          className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#E56B45] hover:text-text-primary pt-4 font-bold"
                        >
                          View all resources →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (link.name === 'Careers') {
              return (
                <div
                  key={link.name}
                  className="flex items-stretch"
                  onMouseEnter={() => setCareersMegaOpen(true)}
                  onMouseLeave={() => {
                    setCareersMegaOpen(false);
                    setHoveredCareer(null);
                  }}
                >
                  <Link
                    href={link.path}
                    className={`flex items-center justify-center px-5 font-mono text-xs uppercase tracking-wider border-r border-border-default transition-all duration-200 hover:bg-surface-base hover:text-text-secondary ${
                      careersMegaOpen || isActive ? 'bg-surface-base text-text-secondary' : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>

                  {/* Careers Mega Menu Dropdown */}
                  {careersMegaOpen && (
                    <div 
                      className="absolute top-full left-0 right-0 w-full bg-surface-muted border-b border-l border-r border-border-default grid grid-cols-12 z-50 shadow-2xl divide-x divide-border-default text-text-primary"
                      onMouseEnter={() => setCareersMegaOpen(true)}
                    >
                      {/* Left Column: Careers Grid (8 cols) */}
                      <div className="col-span-8 grid grid-cols-2 divide-y divide-x divide-border-default border-t border-border-default">
                        {careersList.map((car) => (
                          <Link
                            key={car.id}
                            href={car.path}
                            className="p-6 flex items-center justify-between min-h-[110px] hover:bg-surface-base hover:text-text-secondary transition-all duration-300 group"
                            onMouseEnter={() => setHoveredCareer(car)}
                          >
                            <div className="flex flex-col space-y-2 pr-4">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-[#E56B45]">
                                {car.tagline}
                              </span>
                              <span className="font-sans text-sm font-extrabold uppercase tracking-tight text-current line-clamp-2">
                                {car.title}
                              </span>
                            </div>
                            <div className="w-0 opacity-0 group-hover:w-24 group-hover:opacity-100 h-16 overflow-hidden shrink-0 border border-transparent group-hover:border-border-muted transition-all duration-300 ease-in-out relative">
                              <img
                                src={car.image}
                                alt={car.title}
                                className="w-full h-full object-cover transition-all duration-300"
                              />
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Column: Preview (4 cols) */}
                      <div className="col-span-4 p-8 flex flex-col justify-between bg-surface-raised border-t border-border-default text-text-primary">
                        <div className="space-y-4">
                          <div className="aspect-[16/10] overflow-hidden border border-border-default relative">
                            <img
                              src={hoveredCareer ? hoveredCareer.image : "/images/carer-portrait.jpg"}
                              alt={hoveredCareer ? hoveredCareer.title : "Careers at Thrivewell"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-sans font-bold uppercase tracking-tight text-sm text-text-primary">
                              {hoveredCareer ? hoveredCareer.title : "Careers at Thrivewell"}
                            </h4>
                            <p className="text-xs text-text-tertiary leading-relaxed font-sans line-clamp-3">
                              {hoveredCareer ? hoveredCareer.desc : "Join West Lothian's premium home care team. We offer guaranteed hours contracts, paid training, and local 24/7 coordinator support."}
                            </p>
                          </div>
                        </div>
                        
                        <Link 
                          href="/careers" 
                          className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#E56B45] hover:text-text-primary pt-4 font-bold"
                        >
                          View all careers →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex items-center justify-center px-5 font-mono text-xs uppercase tracking-wider border-r border-border-default transition-all duration-200 hover:bg-surface-base hover:text-text-secondary ${
                  isActive ? 'bg-surface-base text-text-secondary' : 'text-text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Call & Assessment CTAs - Right Block (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:flex items-stretch ml-auto shrink-0">
          <a
            href="tel:01506000000"
            className="flex items-center gap-2 px-6 border-l xl:border-l-0 border-r border-border-default font-mono text-xs uppercase tracking-wider hover:bg-surface-base hover:text-text-secondary transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>01506 000 000</span>
          </a>
          <Link
            href="/contact?assessment=true"
            className="flex items-center justify-center px-8 bg-accent text-text-secondary border border-transparent hover:bg-surface-base hover:text-text-secondary transition-colors duration-200"
          >
            Free Assessment
          </Link>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex lg:hidden items-stretch ml-auto border-l border-border-default">
          <a
            href="tel:01506000000"
            className="flex items-center justify-center w-14 sm:w-16 border-r border-border-default text-text-primary hover:bg-surface-base hover:text-text-secondary transition-colors"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-14 sm:w-16 text-text-primary hover:bg-surface-base hover:text-text-secondary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-surface-muted border-t border-border-default absolute top-full left-0 right-0 shadow-2xl fade-in">
          <div className="flex flex-col divide-y divide-border-default">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-6 py-4 font-mono text-sm uppercase tracking-wider transition-colors hover:bg-surface-base hover:text-text-secondary ${
                    isActive ? 'bg-surface-base text-text-secondary font-bold' : 'text-text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="grid grid-cols-2">
              <a
                href="tel:01506000000"
                className="flex items-center justify-center gap-2 py-5 font-mono text-xs uppercase tracking-wider text-text-primary hover:bg-surface-base hover:text-text-secondary transition-colors border-r border-border-default"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <Link
                href="/contact?assessment=true"
                className="flex items-center justify-center py-5 bg-accent text-text-secondary border border-transparent hover:bg-surface-base hover:text-text-secondary transition-colors"
              >
                Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
