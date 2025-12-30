"use client";

import Image from "next/image";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaMoneyBillWave,
  FaHardHat,
} from "react-icons/fa";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/PageHeader";

const ComparisonSection = () => {
  const comparisons = [
    {
      category: "Work-Life Balance",
      icon: <FaClock className="text-2xl" />,
      other: {
        title: "Typical Workday",
        desc: "Long shifts, late nights, often 6 days a week. Little time for family.",
        img: "/assets/traffic.jpg",
      },
      aus: {
        title: "The Aussie Way",
        desc: "Start early (7 AM), finish by 3 PM. Enjoy afternoons at the beach or with family.",
        img: "/assets/beach.jpg",
      },
    },
    {
      category: "Workplace Safety",
      icon: <FaHardHat className="text-2xl" />,
      other: {
        title: "Common Standard",
        desc: "Inconsistent safety gear, chaotic sites, higher risk of injury.",
        img: "/assets/messy_construction.jpg",
      },
      aus: {
        title: "Safety First",
        desc: "Strict safety protocols, modern equipment, and paid sick leave entitlements.",
        img: "/assets/gear_construction.jpg",
      },
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-paper)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[var(--color-navy)]">
            The Mansys Mantra Difference
          </h2>
          <p className="text-[var(--text-default)] mt-4">
            Compare your current working conditions with what awaits you.
          </p>
        </div>

        <div className="space-y-16">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[var(--color-secondary)]/20"
            >
              <div className="bg-[var(--color-navy)] text-white p-4 flex items-center justify-center gap-3">
                {item.icon}
                <span className="font-bold uppercase tracking-widest">
                  {item.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100 relative group">
                  <div className="absolute top-4 left-4 bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase z-10">
                    Others
                  </div>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={item.other.img}
                      alt="Other"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {item.other.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.other.desc}
                  </p>
                  <FaTimesCircle className="absolute top-6 right-6 text-2xl text-gray-300" />
                </div>

                <div className="p-8 md:p-12 bg-blue-50/30 relative">
                  <div className="absolute top-4 left-4 bg-[var(--color-brand)] text-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg z-10">
                    Australia
                  </div>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-md transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src={item.aus.img}
                      alt="Australia"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">
                    {item.aus.title}
                  </h3>
                  <p className="text-[var(--text-default)] text-sm leading-relaxed">
                    {item.aus.desc}
                  </p>
                  <FaCheckCircle className="absolute top-6 right-6 text-2xl text-green-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SalaryGraphSection = () => {
  return (
    <section className="py-24 bg-[var(--color-navy)] text-white overflow-hidden relative">
      <div className="absolute -left-20 top-20 w-96 h-96 bg-[var(--color-brand)]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6 text-[var(--color-brand)]">
              <FaMoneyBillWave className="text-3xl" />
              <span className="font-bold tracking-wider uppercase">
                Compensation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Earn What You <br />
              Are <span className="text-[var(--color-brand)]">Worth</span>.
            </h2>
            <p className="text-[var(--color-secondary)] text-lg mb-8 leading-relaxed">
              In Australia, trades are highly respected professionals. You
              receive transparent wages, overtime rates, and superannuation
              (pension) contributions.
            </p>
            <ul className="space-y-4">
              {[
                "Annual Leave & Sick Pay",
                "Overtime Rates (1.5x - 2x)",
                "Pension Contributions (11%)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Graph Visual */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 className="text-lg font-bold mb-8 text-center">
              Average Annual Income (USD)
            </h3>

            <div className="space-y-8">
              {/* Bar 1 */}
              <div>
                <div className="flex justify-between text-sm mb-2 opacity-70">
                  <span>Home Country (Avg)</span>
                  <span>$15,000 - $25,000</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-8">
                  <div className="h-full bg-gray-500 rounded-full w-[20%] flex items-center justify-end pr-3 text-xs font-bold text-white/50"></div>
                </div>
              </div>

              {/* Bar 2 */}
              <div>
                <div className="flex justify-between text-sm mb-2 opacity-70">
                  <span>Gulf Region (Avg)</span>
                  <span>$25,000 - $35,000</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-8">
                  <div className="h-full bg-yellow-600/80 rounded-full w-[35%] flex items-center justify-end pr-3 text-xs font-bold text-white/80"></div>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="relative">
                <div className="flex justify-between text-sm mb-2 text-white font-bold">
                  <span>Australia (Skilled Trade)</span>
                  <span>$65,000+</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-12 border border-[var(--color-brand)]/50 shadow-[0_0_20px_rgba(100,169,236,0.3)]">
                  <div className="h-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] rounded-full w-[90%] flex items-center justify-end pr-4 text-sm font-bold text-white shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    3x Higher
                  </div>
                </div>
                <div className="absolute right-20 -top-1 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm transform">
                  High Demand
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-white/30 mt-8 italic">
              *Figures are estimates based on average skilled trade incomes
              converted to USD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LifestyleGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <span className="text-[var(--color-brand)] font-bold uppercase tracking-widest text-sm">
          Community
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)] mt-3 mb-12">
          Home Away From Home
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Multicultural",
              desc: "Meet people from India, Pakistan, Nepal, and the Middle East in every major city.",
              icon: "🌏",
            },
            {
              title: "Halal & Veg",
              desc: "Indian groceries and Halal food are widely available in supermarkets and restaurants.",
              icon: "🥘",
            },
            {
              title: "Festivals",
              desc: "Celebrate Diwali, Eid, and Holi with vibrant local communities.",
              icon: "🎉",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[var(--color-paper)] border border-[var(--color-secondary)]/20 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-[var(--color-navy)] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-default)] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function WhyAustraliaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PageHeader
          title="Destination Australia"
          description="Fair wages, safe workplaces, and a lifestyle that rewards your hardwork. Discover why skilled tradespeople are choosing Australia."
          badge="It's A Better Life"
          imageSrc="/assets/operahouse.jpg"
          imageAlt="Australia's Opera House"
        />
        <ComparisonSection />
        <SalaryGraphSection />
        <LifestyleGrid />

        <section className="py-20 bg-[var(--color-paper)] text-center border-t border-[var(--color-secondary)]/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-6">
              Ready to upgrade your life?
            </h2>
            <Link
              href="/candidate"
              className="inline-block bg-[var(--color-brand)] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[var(--color-accent)] transition-colors"
            >
              Check Eligibility Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
