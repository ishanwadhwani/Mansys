"use client";

import {
  FaUserEdit,
  FaCheckDouble,
  FaHandshake,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function ProcessSection(){
  const steps = [
    {
      icon: <FaUserEdit />,
      title: "Register",
      desc: "Fill out our simple eligibility form to start your profile.",
    },
    {
      icon: <FaCheckDouble />,
      title: "Get Verified",
      desc: "Our team vets your skills, experience, and documents.",
    },
    {
      icon: <FaHandshake />,
      title: "Connect",
      desc: "We match your profile with a sponsoring Australian employer.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Fly",
      desc: "We guide you through visa processing and relocation.",
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-paper)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2 block">
            Your Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-[var(--color-secondary)]/30 -z-10"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
              aria-label="How it works"
            >
              <div className="w-24 h-24 bg-white rounded-full border-4 border-[var(--color-paper)] shadow-lg flex items-center justify-center text-3xl text-[var(--color-brand)] mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--color-navy)] text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-[var(--color-paper)] shadow-sm">
                  {idx + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold text-[var(--color-navy)] mb-3">
                {step.title}
              </h4>
              <p className="text-[var(--text-default)] text-sm leading-relaxed max-w-[250px] opacity-80">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
