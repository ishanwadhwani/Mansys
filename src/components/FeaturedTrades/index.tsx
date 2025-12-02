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
    },
    {
      title: "Welder",
      salary: "$85k AUD",
      image: welder,
      demand: "High",
    },
    {
      title: "Carpenter and Joiner",
      salary: "$82k AUD",
      image: carpenter,
      demand: "Critical",
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* Background Decor 1: Top Right Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      {/* Background Decor 2: Bottom Left Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-8">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-wider mb-3 block">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trades.map((trade, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[var(--color-brand)]/50 transition-all duration-500 cursor-default"
            >
              {/* Card Content Wrapper */}
              <div className="flex flex-col items-center text-center h-full relative z-10">
                {/* Image Container with Glow */}
                <div className="relative mb-8 group-hover:scale-105 transition-transform duration-500">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-[var(--color-brand)] blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>

                  <div className="relative w-64 h-64 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-xl group-hover:border-[var(--color-brand)] overflow-hidden shadow-2xl">
                    <Image
                      src={trade.image}
                      alt={trade.title}
                      fill
                      className="object-cover"
                      style={{ backgroundColor: "#1e293b" }}
                    />
                  </div>

                  {/* Status Dot */}
                  <div className="absolute -bottom-2 -right-3 w-8 h-8 bg-[#0B1120] rounded-full flex items-center justify-center z-20">
                    <span className="w-3 h-3 bg-[var(--color-brand)] rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-brand)] transition-colors duration-300">
                  {trade.title}
                </h3>

                {/* Salary Badge */}
                <div className="mt-auto pt-6 w-full space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">
                      Avg Salary
                    </p>
                    <p className="text-white font-extrabold text-2xl tracking-tight">
                      {trade.salary}
                    </p>
                  </div>

                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 px-4 py-1.5 rounded-full">
                      {trade.demand} Demand
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
