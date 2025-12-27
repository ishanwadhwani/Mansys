"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GiAustralia } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { SlPlane } from "react-icons/sl";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

import beach_Australia from "../../../public/beach_Australia.jpg";
import worker2 from "../../../public/worker2.jpg";



const linkCategories = [
  {
    title: "Worker Rights & Safety",
    icon: <AiOutlineSafety/>,
    links: [
      {
        name: "Fair Work - Worker Rights",
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
    icon: <GrStatusGood />,
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
    icon: <SlPlane />,
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
    icon: <HiOutlineBuildingLibrary />,
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
    className={`fixed inset-0 bg-[var(--color-navy)]/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    onClick={onClose}
  >
    <div
      className={`relative w-full max-w-5xl bg-[var(--color-navy)] shadow-2xl rounded-3xl transform transition-all duration-500 border border-[var(--color-brand)]/30 flex flex-col max-h-[90vh] ${
        isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6 md:p-8 border-b border-[var(--color-brand)]/10 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-[var(--color-brand)] hover:text-[var(--color-navy)] transition-all duration-300 text-2xl"
        >
          &times;
        </button>

        <div className="inline-block py-1 px-3 rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 text-[var(--color-brand)] font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
          Official Portals
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
          Government{" "}
          <span className="text-[var(--color-brand)]">Resources</span>
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10 custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {linkCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="flex flex-col bg-white/5 rounded-2xl border border-white/10 p-5 hover:border-[var(--color-brand)]/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-4">
                <div className="w-12 h-12 rounded-xl text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-brand)] flex items-start gap-2 transition-colors leading-snug"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-brand)] shrink-0"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white/5 border-t border-white/10 rounded-b-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--color-secondary)] font-bold">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Verified Australian Sources
          </div>
          <p className="text-[11px] text-[var(--color-secondary)]/60 italic text-center md:text-right max-w-md">
            *Links direct to official .gov.au portals for immigration, workers
            rights, and fair work compliance.
          </p>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 215, 0, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-brand);
        }
      `}</style>
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
                  href="/candidate"
                  className="group relative inline-flex items-center gap-3 bg-[var(--color-navy)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-[var(--color-accent)] hover:shadow-xl hover:-translate-y-1"
                  aria-label="View the candidate form to start your journey"
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
                  aria-label="Open the links hub with official government resources"
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
                  <div className="absolute inset-0 bg-[var(--color-brand)]/10 flex items-center justify-center z-10 pointer-events-none">
                    <span className="text-white font-bold text-xl drop-shadow-md">
                      Trades
                    </span>
                  </div>
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
                <span className="text-3xl mb-1 block">
                  <GiAustralia
                    size={50}
                    className="inline text-[var(--color-navy)]/90"
                  />
                </span>
                <p className="text-sm font-bold text-[var(--color-navy)]">
                  99% <br />
                  <span>Visa Success Rate</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
