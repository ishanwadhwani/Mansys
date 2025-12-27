"use client";

import Image from "next/image";
import welder from "../../../public/welder.jpg";
import bricklayer from "../../../public/bricklayer.jpg";
import carpenter from "../../../public/carpenter.png";
import Link from "next/link";

export default function Featuredtrades() {
  const trades = [
    {
      title: "Bricklayer",
      salary: "$90k AUD",
      image: bricklayer,
      demand: "Very High",
      desc: "Constructing partitions, arches, and other structures.",
    },
    {
      title: "Welder",
      salary: "$85k AUD",
      image: welder,
      demand: "High",
      desc: "Fabricating and repairing metal parts and structures.",
    },
    {
      title: "Carpenter & Joiner",
      salary: "$82k AUD",
      image: carpenter,
      demand: "Critical",
      desc: "Constructing, installing, and repairing structures.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* --- Background Ambience --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--color-brand)]/20 rounded-full blur-[120px] opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--color-accent)]/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20 font-bold text-xs uppercase tracking-wider mb-4">
              Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              High Demand Roles
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Australian employers are actively sponsoring these skilled trades
              right now.
            </p>
          </div>

          <Link
            href="/candidate"
            className="inline-flex items-center justify-center whitespace-nowrap bg-[var(--color-brand)] hover:bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-[var(--color-brand)]/50 transform hover:-translate-y-1"
          >
            Check Eligibility
          </Link>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trades.map((trade, idx) => (
            <Link key={idx} href="/candidate">
              <div className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[var(--color-brand)]/30 transition-all duration-500">
                {/* Image Area - Full Width with Gradient Overlay */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-90 z-10" />
                  <Image
                    src={trade.image}
                    alt={trade.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    placeholder="blur"
                  />

                  {/* Floating Salary Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-xl">
                    <p className="text-[var(--color-navy)] text-xs font-bold uppercase tracking-wider">
                      Avg Salary
                    </p>
                    <p className="text-white font-extrabold text-lg">
                      {trade.salary}
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 pt-2 flex flex-col grow relative z-20">
                  {/* Demand Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wide border border-green-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {trade.demand} Demand
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-brand)] transition-colors">
                    {trade.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {trade.desc}
                  </p>

                  {/* Bottom Action */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    <span>View Requirements</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
