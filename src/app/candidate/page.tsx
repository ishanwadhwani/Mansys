"use client";
import { IconType } from "react-icons";

import CandidateForm from "@/components/CandidateForm";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import {
  PiUserCircleBold,
  PiShieldCheckBold,
  PiBriefcaseBold,
  PiRocketLaunchBold,
  PiCheckCircleFill,
} from "react-icons/pi";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-paper)] text-[var(--text-default)] font-sans">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* --- LEFT SIDE: Form Section (Scrollable) --- */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center p-4 md:p-8 lg:p-14 xl:p-16 order-2 lg:order-1">
            <div className="max-w-5xl mx-auto w-full py-16">
              <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-2 mt-8 lg:mt-0 uppercase">
                  Register Here - it&apos;s Free
                </h1>
                <p className="text-[var(--color-accent)] font-medium text-lg xl:text-2xl">
                  Complete your profile to connect with Australian employers.
                </p>
              </div>
              {/* Candidate Registration Form */}
              <CandidateForm />
            </div>
          </div>

          <div className="hidden w-full lg:w-5/12 xl:w-1/3 bg-[var(--color-navy)] text-[var(--color-paper)] lg:flex flex-col lg:h-screen lg:sticky lg:top-0 order-1 lg:order-2 overflow-hidden relative">
            <div className="flex flex-col h-full justify-center p-8 lg:p-8 xl:p-12 2xl:p-16 relative z-10">
              {/* 1. Header Section */}
              <div className="mb-8 xl:mb-10">
                <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/10 px-3 py-1 rounded-full text-[10px] xl:text-xs font-bold text-white/80 border border-white/30 mb-4 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-ping"></span>
                  Partner with MANSYS MANTRA
                </div>
                <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-extrabold leading-tight">
                  Your Career, <br />
                  <span className="text-[var(--color-brand)]">
                    Fast-Tracked.
                  </span>
                </h2>
              </div>

              {/* 2. The Bento Grid*/}
              <div className="grid grid-cols-2 gap-3 xl:gap-3 mb-6 xl:mb-8">
                {/* Card 1: Create Profile */}
                <BentoCard
                  Icon={PiUserCircleBold}
                  title="Create Profile"
                  desc="Showcase your skills to top employers."
                  delay="0"
                />

                {/* Card 2: Get Verified */}
                <BentoCard
                  Icon={PiShieldCheckBold}
                  title="Get Verified"
                  desc="Fast-track your application status."
                  delay="100"
                />

                {/* Card 3: Get Matched */}
                <BentoCard
                  Icon={PiBriefcaseBold}
                  title="Get Matched"
                  desc="Direct connections to huge projects."
                  delay="200"
                />

                {/* Card 4: Start Working*/}
                <div className="bg-white/90 text-[var(--color-navy)] p-4 xl:p-5 rounded-2xl shadow-lg flex flex-col justify-between transform hover:scale-[1.02] transition-all cursor-default">
                  <div className="flex justify-between items-start">
                    <PiRocketLaunchBold className="text-2xl xl:text-3xl" />
                    <PiCheckCircleFill className="text-xl opacity-50" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm xl:text-base mb-1">
                      Start Working
                    </h4>
                    <p className="text-[10px] xl:text-xs font-medium opacity-80 leading-tight">
                      Secure your role and build your future.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Footer Stats*/}
              <div className="border-t border-[var(--color-paper)]/10 pt-4 xl:pt-6">
                <div className="flex justify-between items-center text-center px-2">
                  <StatItem val="99%" label="Success Rate" />
                  <div className="w-px h-8 bg-[var(--color-paper)]/10"></div>
                  <StatItem val="500+" label="Happy Clients" />
                  <div className="w-px h-8 bg-[var(--color-paper)]/10"></div>
                  <StatItem val="10yr" label="Experience" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const BentoCard = ({
  Icon,
  title,
  desc,
  delay,
}: {
  Icon: IconType;
  title: string;
  desc: string;
  delay: string;
}) => (
  <div
    className="bg-[var(--color-paper)]/5 border border-[var(--color-paper)]/10 p-4 xl:p-5 rounded-2xl hover:bg-[var(--color-paper)]/10 transition-colors duration-300 flex flex-col justify-between group h-32 xl:h-40"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="bg-white/80 w-8 h-8 xl:w-10 xl:h-10 rounded-full flex items-center justify-center text-[var(--color-navy)] text-lg xl:text-xl shadow-sm group-hover:scale-110 transition-transform">
      <Icon />
    </div>
    <div>
      <h4 className="font-bold text-sm xl:text-base text-[var(--color-paper)] mb-1">
        {title}
      </h4>
      <p className="text-[10px] xl:text-xs text-[var(--color-secondary)] leading-tight">
        {desc}
      </p>
    </div>
  </div>
);

const StatItem = ({ val, label }: { val: string; label: string }) => (
  <div>
    <div className="text-xl xl:text-2xl font-bold text-[var(--color-paper)] mb-0.5">
      {val}
    </div>
    <div className="text-[10px] text-[var(--color-secondary)] uppercase tracking-wider font-semibold">
      {label}
    </div>
  </div>
);
