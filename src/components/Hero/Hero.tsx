"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import beach_Australia from "../../../public/beach_Australia.jpg";
import worker2 from "../../../public/worker2.jpg";

const linkCategories = [
  {
    title: "Worker Rights & Safety",
    icon: "🛡️",
    links: [
      {
        name: "Fair Work – Worker Rights",
        url: "https://www.fairwork.gov.au/",
      },
      {
        name: "Safe Work Australia",
        url: "https://www.safeworkaustralia.gov.au/",
      },
    ],
  },
  {
    title: "Skills & Eligibility",
    icon: "✅",
    links: [
      {
        name: "English Test Requirements",
        url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language",
      },
      {
        name: "Skills Assessment Authorities",
        url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment/assessing-authorities",
      },
      {
        name: "Skilled Occupation List",
        url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
      },
    ],
  },
  {
    title: "Visa Specific Guides",
    icon: "✈️",
    links: [
      {
        name: "482 Visa Guide (Skills in demand)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482",
      },
      {
        name: "494 Visa Guide (Regional)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494",
      },
      {
        name: "186 Visa Guide (Nomination Scheme)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186",
      },
    ],
  },
  {
    title: "General Migration (Home Affairs)",
    icon: "🏛️",
    links: [
      {
        name: "Skilled Migration (Main Page)",
        url: "https://immi.homeaffairs.gov.au/visas/working-in-australia",
      },
    ],
  },
];

const LinksHub = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => (
  <div
    className={`fixed inset-0 bg-[var(--color-navy)]/90 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    onClick={onClose}
  >
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl p-8 md:p-12 bg-[var(--color-navy)] shadow-2xl rounded-2xl transform transition-transform duration-500 border border-[var(--color-brand)]/50 ${isOpen ? "scale-100" : "scale-90"}`}
      onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking inside
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-[var(--color-brand)] transition-colors"
      >
        &times;
      </button>

      <h2 className="text-3xl font-extrabold text-[var(--color-brand)] mb-6 text-center">
        Official Government Resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[70vh]">
        {linkCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className="space-y-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-2">
              {category.icon} {category.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {category.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-secondary)] hover:text-[var(--color-brand)] transition-colors block leading-snug"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-white/50 mt-6">
        *Links open official Australian government immigration and worker rights
        websites.
      </p>
    </div>
  </div>
);

export default function Hero() {
  const [isHubOpen, setIsHubOpen] = useState(false);

  return (
    <>
      <LinksHub isOpen={isHubOpen} onClose={() => setIsHubOpen(false)} />
      <section className="bg-[var(--color-paper)] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen relative flex items-center">
        {/* --- HERO CONTENT START --- */}
        <div className="container mx-auto px-4 md:px-6 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Text Content */}
            <div className="space-y-8 relative text-center lg:text-left">
              <div className="absolute -top-20 -left-10 text-[var(--color-brand)] opacity-10 animate-spin-slow hidden xl:block">
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] leading-[1.1] tracking-tight">
                Skilled Trades. <br />
                <span className="text-[var(--color-brand)]">
                  Australian
                </span>{" "}
                Jobs.
              </h1>

              <p className="text-lg text-[var(--text-default)] leading-relaxed opacity-80 max-w-md mx-auto lg:mx-0">
                We connect qualified professionals with top-tier Australian
                employers. Fully compliant, stress-free visa pathways.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                {/* Primary CTA */}
                <Link
                  href="/register"
                  className="group relative inline-flex items-center gap-3 bg-[var(--color-navy)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-[var(--color-accent)] hover:shadow-xl hover:-translate-y-1"
                >
                  Start Your Journey
                  <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>

                {/* Secondary CTA: OPEN LINKS HUB */}
                <button
                  onClick={() => setIsHubOpen(true)}
                  className="flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--color-secondary)]/30 text-[var(--color-navy)] font-medium bg-white/50 backdrop-blur-sm hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
                >
                  <span className="text-sm">View Official Guides</span>
                </button>
              </div>

              <div className="pt-8 border-t border-[var(--color-secondary)]/20 mt-8">
                <p className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-4">
                  Top Trades
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Bricklayers
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Welders
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Carpenters
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Painter
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Welder
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Fitter
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Aged/Disability Support Worker
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Visuals */}
            <div className="relative block mt-10 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1: The Worker */}
                <div className="relative h-[280px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl mt-12 transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                  <Image
                    src={worker2}
                    alt="Skilled Worker"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[var(--color-navy)]/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Image 2: The Lifestyle */}
                <div className="relative h-[280px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl -mt-12 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                  <div className="absolute inset-0 bg-[var(--color-brand)]/10 flex items-center justify-center z-10 pointer-events-none">
                    <span className="text-white font-bold text-xl drop-shadow-md">
                      Lifestyle
                    </span>
                  </div>
                  <Image
                    src={beach_Australia}
                    alt="Australian Lifestyle"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-[var(--color-brand)]/20 text-center max-w-[180px] animate-float z-20">
                <span className="text-3xl mb-1 block">🇦🇺</span>
                <p className="text-sm font-bold text-[var(--color-navy)]">
                  99% Visa Success Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
