"use client";
import Link from "next/link";
import Image from "next/image";
import hero_c from "../../../public/hero_c.svg";

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-20 mt-4 md:mt-8">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-700">
            Connecting Australian Employers with Global Talent
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl">
            We facilitate fully compliant, employer-sponsored visa pathways for
            the skilled trades you need.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 lg:p-6 rounded-lg bg-white border shadow-soft-md transition-transform duration-300 hover:scale-[1.03]">
              <h3 className="font-semibold text-brand-700 mb-2">
                Are You an Employer?
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Struggling to find reliable, skilled trades workers? We connect
                you with a pipeline of vetted overseas candidates.
              </p>
              <Link href="/employer" className="inline-block btn-brand">
                Find Your Workforce
              </Link>
            </div>

            <div className="p-4 lg:p-6 rounded-lg bg-white border shadow-soft-md transition-transform duration-300 hover:scale-[1.03]">
              <h3 className="font-semibold text-brand-700 mb-2">
                Are You a Skilled Worker?
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                Looking for an Australian employer to sponsor your work visa?
                Register your skills to start your journey.
              </p>
              <Link href="/candidate" className="inline-block btn-outline">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Image src={hero_c} alt="hero banner" />
            <a
              href="/explore"
              className="hidden lg:block absolute z-10 -bottom-[10%] left-[90%] items-center gap-2 text-white bg-[var(--color-accent)] rounded-full p-6 text-sm text-center font-semibold shadow-lg hover:bg-brand motion-safe:animate-bounce transition-all duration-300 hover:scale-105 group"
              //   onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--hover-bg)'}
              //   onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
            >
              Explore life in Australia
            </a>
            <a
              href="/explore"
              className="lg:hidden mt-6 w-sm flex items-center justify-center gap-2 text-white bg-[var(--color-accent)] px-2 py-3 rounded-full text-sm text-center font-semibold shadow-lg hover:bg-brand transition-all duration-300 hover:scale-105 group"
            >
              Explore life in Australia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
