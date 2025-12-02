"use client";

import Link from "next/link";
import Image from "next/image";

import beach_Australia from "../../../public/beach_Australia.jpg";
import worker2 from "../../../public/worker2.jpg";

export default function Hero() {
  return (
    <section className="bg-[var(--color-paper)] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Decorative Star Element (Like Reference) */}
            <div className="absolute -top-16 -left-10 text-[var(--color-brand)] opacity-20 animate-spin-slow hidden md:block">
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--color-navy)] leading-[1.1] tracking-tight">
              Skilled Trades. <br />
              <span className="text-[var(--color-brand)]">Australian</span>{" "}
              Jobs.
            </h1>

            <p className="text-xl text-[var(--text-default)] max-w-lg leading-relaxed opacity-80">
              We connect qualified professionals with top-tier Australian
              employers. Fully compliant, stress-free visa pathways.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/candidate"
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

              <div className="flex items-center gap-2 px-6 py-4 rounded-full border border-[var(--color-secondary)]/30 text-[var(--color-navy)] font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Jobs available now
              </div>
            </div>

            <div className="pt-12">
              <p className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-4">
                Trades We Place
              </p>
              <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="font-bold text-xl text-[var(--color-navy)]">
                  Bricklayers
                </span>
                <span className="font-bold text-xl text-[var(--color-navy)]">
                  Welders
                </span>
                <span className="font-bold text-xl text-[var(--color-navy)]">
                  Carpenters
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - The "Split Image" Look */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0">
              {/* Image 1: The Worker */}
              <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl mt-12 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={worker2}
                  alt="Skilled Worker"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-navy)]/10"></div>
              </div>

              {/* Image 2: The Lifestyle */}
              <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl -mt-12 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-[var(--color-brand)]/10 flex items-center justify-center">
                  <span className="text-[var(--color-navy)] font-bold text-lg">
                    Lifestyle
                  </span>
                </div>
                <Image
                  src={beach_Australia}
                  alt="Australian Lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--color-accent)]/10 via-gray-100/50 to-[var(--color-primary)]/30 p-4 rounded-4xl shadow-xl hover:shadow-2xl border border-[var(--color-accent)]/50 text-center max-w-[180px] hidden lg:block animate-float duration-300"
            >
              <span className="text-3xl mb-1 block">🇦🇺</span>
              <p className="flex flex-col text-sm font-bold text-[var(--color-navy)]">
                99% Visa
                <span>Success Rate</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
