"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Ravi from "../../../public/Ravi.png";
import Sarah from "../../../public/Sarah.png";
import Miguel from "../../../public/Miguel.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Welder in Sydney",
      from: "Formerly India",
      quote:
        "The process was transparent. I went from application to landing in Sydney in just 4 months.",
      image: Ravi,
    },
    {
      name: "Sarah Jenkins",
      role: "Nurse in Melbourne",
      from: "Formerly UK",
      quote:
        "MANSYS handled everything. The employer sponsorship was secured before I even booked my flight.",
      image: Sarah,
    },
    {
      name: "Miguel Torres",
      role: "Tiler in Brisbane",
      from: "Formerly Philippines",
      quote:
        "Professional and honest. They told me exactly what documents I needed. Now I am earning 3x what I did back home.",
      image: Miguel,
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-paper)] border-y border-[var(--color-secondary)]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-navy)]">
            Success Stories
          </h2>
          <p className="text-[var(--text-default)] mt-4 max-w-xl mx-auto opacity-80">
            Real stories from skilled professionals who have successfully
            migrated with our help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--color-secondary)]/20 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-4xl text-[var(--color-brand)]/10 absolute top-6 right-6" />

              <div className="flex md:flex-col lg:flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-brand)] relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:text-center">
                  <h4 className="font-bold text-[var(--color-navy)] text-lg">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[var(--muted)]">
                    {t.from} ➔{" "}
                    <span className="text-[var(--color-brand)] font-semibold">
                      {t.role}
                    </span>
                  </p>
                </div>
              </div>

              <p className="text-[var(--text-default)] italic leading-relaxed flex-grow">
                {t.quote}
              </p>

              <div className="flex gap-1 mt-6 text-yellow-400 text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
