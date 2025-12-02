"use client";
import { IconType } from "react-icons";
import CandidateForm from "@/components/CandidateForm";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import {
  PiSealCheckBold,
  PiShieldCheckBold,
  PiSparkleBold,
} from "react-icons/pi";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-paper)] text-[var(--text-default)] font-sans">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* --- LEFT SIDE: Form Section (Scrollable) --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 md:p-8 lg:p-14 xl:p-16 order-2 lg:order-1">
            <div className="max-w-xl mx-auto w-full py-16">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] mb-2">
                  Register Here
                </h1>
                <p className="text-[var(--color-accent)] font-medium text-lg">
                  Complete your profile to connect with Australian employers.
                </p>
              </div>
              {/* Candidate Registration Form */}
              <CandidateForm />
              {/* Mobile-only Bottom Content (Detailed Benefits) */}
              {/* <div className="lg:hidden mt-12">
              <MobileTrustPanel />
            </div> */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[var(--color-navy)] text-[var(--color-paper)] p-8 lg:p-12 xl:p-20 flex flex-col justify-center lg:sticky lg:top-8 xl:top-0 lg:h-screen order-1 lg:order-2 overflow-hidden relative shadow-2xl">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10 space-y-10 max-w-lg mx-auto lg:mx-0 h-full flex flex-col justify-center">
              {/* Header Section */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[var(--color-paper)]/10 px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-brand)] border border-[var(--color-brand)]/20 mb-6 uppercase tracking-wider">
                  Trusted Migration Partners
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Why Choose{" "}
                  <span className="text-[var(--color-brand)]">MANSYS?</span>
                </h2>
                <p className="text-[var(--color-secondary)] text-lg leading-relaxed">
                  A partnership you can trust. We build long-term relationships
                  by focusing on specialisation, quality vetting, and total
                  compliance.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-[var(--color-paper)]/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--color-paper)]">
                    10+
                  </div>
                  <div className="text-xs text-[var(--color-secondary)] mt-1 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div className="text-center border-l border-[var(--color-paper)]/10">
                  <div className="text-3xl font-bold text-[var(--color-paper)]">
                    500+
                  </div>
                  <div className="text-xs text-[var(--color-secondary)] mt-1 uppercase tracking-wide">
                    Clients Supported
                  </div>
                </div>
                <div className="text-center border-l border-[var(--color-paper)]/10">
                  <div className="text-3xl font-bold text-[var(--color-brand)]">
                    99%
                  </div>
                  <div className="text-xs text-[var(--color-secondary)] mt-1 uppercase tracking-wide">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Trust Pillars (Cards) */}
              <div className="flex gap-6">
                <TrustCard
                  Icon={PiSparkleBold}
                  title="Specialists"
                  // desc=""
                />
                <TrustCard
                  Icon={PiSealCheckBold}
                  title="Verified"
                  // desc="We support candidates with CVs and interview coaching, ensuring employers meet people who are ready to work."
                />
                <TrustCard
                  Icon={PiShieldCheckBold}
                  title="Compliant"
                  // desc="We partner with MARN-registered agents to handle all visa advice, ensuring a 100% compliant process."
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const TrustCard = ({
  Icon,
  title,
  //   desc,
}: {
  Icon: IconType;
  title: string;
  //   desc: string;
}) => (
  <div className="bg-[var(--color-paper)]/90 text-[var(--color-navy)] w-full p-2 rounded-tl-3xl rounded-br-3xl border border-[var(--color-paper)] gap-4 flex flex-col items-center justify-center shadow-2xl hover:transform hover:scale-[1.02] transition-all duration-300">
    <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-brand)]/10 rounded-full flex items-center justify-center text-2xl text-[var(--color-brand)]">
      <Icon />
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      {/* <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p> */}
    </div>
  </div>
);

const MobileTrustPanel = () => (
  <div className="bg-[var(--color-navy)] text-[var(--color-paper)] rounded-2xl p-8 shadow-xl">
    <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
    <p className="text-[var(--color-secondary)] mb-6 text-sm">
      Trusted by 500+ clients with a 99% success rate.
    </p>

    <div className="space-y-4">
      <div className="flex gap-3 items-start">
        <span className="text-xl">✨</span>
        <div>
          <h4 className="font-bold text-[var(--color-brand)] text-sm">
            Specialists
          </h4>
          <p className="text-xs text-[var(--color-secondary)]">
            Dedicated to trades & construction.
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <span className="text-xl">⚖️</span>
        <div>
          <h4 className="font-bold text-[var(--color-brand)] text-sm">
            Fully Compliant
          </h4>
          <p className="text-xs text-[var(--color-secondary)]">
            Partnered with MARN-registered agents.
          </p>
        </div>
      </div>
    </div>
  </div>
);
