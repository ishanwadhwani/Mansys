"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GiAustralia } from "react-icons/gi";
import dynamic from "next/dynamic";

const LinksHub = dynamic(() => import("../LinkHub"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [isHubOpen, setIsHubOpen] = useState(false);

  return (
    <>
      {isHubOpen && (
        <LinksHub isOpen={isHubOpen} onClose={() => setIsHubOpen(false)} />
      )}
      <section className="bg-[var(--color-paper)] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen relative flex items-center">
        {/* --- HERO CONTENT START --- */}
        <div className="container mx-auto px-4 md:px-6 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Text Content */}
            <div className="space-y-8 relative text-center lg:text-left">
              <div className="absolute -top-15 -left-10 text-[var(--color-brand)] opacity-10 animate-spin-slow hidden xl:block">
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] leading-[1.1] tracking-tight">
                Skilled Trades. <br />
                <span className="text-[var(--color-brand)]">
                  Australian
                </span>{" "}
                Jobs.
              </h1> */}
              <h1 className="z-30 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-navy)] leading-[1.1] tracking-tight">
                <span className="block text-lg font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2 ml-2">
                  Mansys Mantra
                </span>
                Skilled Trades. <br />
                <span className="text-[var(--color-brand)]">
                  Australian
                </span>{" "}
                Jobs.
              </h1>

              <h2 className="text-lg text-[var(--text-default)] leading-relaxed opacity-80 max-w-md mx-auto lg:mx-0">
                Tradespeople - get matched with an Australian employer and get
                visa help to move to Australia.
              </h2>

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
                  aria-label="Open government resources hub"
                  className="flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--color-secondary)]/30 text-[var(--color-navy)] font-medium bg-white/50 backdrop-blur-sm hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
                >
                  <span className="text-sm cursor-pointer">
                    View Official Guides
                  </span>
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
                    Painters
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Tilers  
                  </span>
                  <span className="text-[var(--color-secondary)]">•</span>
                  <span className="font-bold text-lg text-[var(--color-navy)]">
                    Fitter
                  </span>
                  <span className="block md:hidden lg:block text-[var(--color-secondary)]">
                    •
                  </span>
                  <span className="block md:hidden lg:block font-bold text-lg text-[var(--color-navy)]">
                    Platerer/ Renderer
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Visuals */}
            <div className="relative block mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {/* Image 1: The Worker */}
                <div className="relative h-[280px] md:h-[350px] rounded-[2rem] overflow-hidden shadow-2xl mt-12 transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                  <div className="absolute inset-0 bg-[var(--color-brand)]/10 flex items-center justify-center z-10 pointer-events-none">
                    <span className="text-white font-bold text-xl drop-shadow-md">
                      Trades
                    </span>
                  </div>
                  <Image
                    src="/assets/worker2.jpg"
                    alt="Skilled Worker in Australia"
                    fill
                    preload={true}
                    sizes="(max-width: 768px) 50vw, 25vw"
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
                    src="/assets/beach_Australia.jpg"
                    alt="Australian Beach Lifestyle"
                    fill
                    preload={true}
                    sizes="(max-width: 768px) 100vw, 100vw"
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
