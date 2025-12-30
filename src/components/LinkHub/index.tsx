"use client";

import { AiOutlineSafety } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import { SlPlane } from "react-icons/sl";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const linkCategories = [
  {
    title: "Worker Rights & Safety",
    icon: <AiOutlineSafety />,
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

export default function LinksHub({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[var(--color-navy)]/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[var(--color-navy)] shadow-2xl rounded-3xl transform transition-all duration-500 border border-[var(--color-brand)]/30 flex flex-col max-h-[90vh] animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8 border-b border-[var(--color-brand)]/50 text-center relative">
          <div className="absolute top-4 right-4 md:top-9 md:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 text-white">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="mb-1 md:mb-1.5 md:ml-0.5 hover:bg-[var(--color-brand)] hover:text-[var(--color-navy)] transition-all duration-300 text-2xl"
            >
              &times;
            </button>
          </div>

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
                        className="text-sm text-[var(--color-secondary)] hover:text-white flex items-start gap-2 transition-colors leading-snug"
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
}
