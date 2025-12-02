"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "Do I need a job offer before I apply?",
        a: "No. You register with us first. Once we verify your skills and eligibility, we connect you with our network of sponsoring employers who are looking for people like you.",
      },
      {
        q: "Is there a fee to register?",
        a: "No. Registration for candidates is completely free. We are paid by the employers to find great talent.",
      },
    ],
  },
  {
    category: "Eligibility & Skills",
    questions: [
      {
        q: "How much experience do I need?",
        a: "Generally, Australian visa requirements demand a minimum of 2-3 years of post-qualification experience in your trade. However, this varies by occupation.",
      },
      {
        q: "What English level is required?",
        a: "You typically need 'Competent' English (IELTS 6.0 or equivalent). However, some trades may accept lower scores for specific visa subclasses. We can advise you on this.",
      },
      {
        q: "Do I need a formal degree?",
        a: "Not always. For many trades, a relevant trade certificate or diploma is sufficient. In some cases, significant work experience can substitute for formal qualifications (RPL).",
      },
    ],
  },
  {
    category: "Process & Visa",
    questions: [
      {
        q: "How long does the process take?",
        a: "Timelines vary, but generally it takes 3-6 months from finding an employer to visa grant. We guide you through every step to avoid delays.",
      },
      {
        q: "Can I bring my family?",
        a: "Yes, most employer-sponsored visas (like the 482 visa) allow you to include your spouse and dependent children.",
      },
    ],
  },
];

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[var(--color-secondary)]/30 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors group"
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-2 rounded-full transition-colors ${isOpen ? "bg-[var(--color-brand)]/10 text-[var(--color-brand)]" : "bg-gray-100 text-gray-400"}`}
          >
            <FaQuestionCircle className="text-lg" />
          </div>
          <span
            className={`font-bold text-lg transition-colors ${
              isOpen ? "text-[var(--color-brand)]" : "text-[var(--color-navy)]"
            } group-hover:text-[var(--color-brand)]`}
          >
            {question}
          </span>
        </div>

        <span
          className={`transform transition-transform duration-300 text-[var(--color-brand)] ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0 pl-[4.5rem] text-[var(--text-default)] leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-[var(--color-paper)] pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] font-bold text-xs uppercase tracking-wider mb-4">
          Support Center
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-[var(--text-default)] max-w-2xl mx-auto text-lg opacity-80">
          Everything you need to know about migrating to Australia as a skilled
          worker. Can&apos;t find the answer you&apos;re looking for?{" "}
          <Link
            href="/contact"
            className="text-[var(--color-brand)] underline font-medium"
          >
            Contact us
          </Link>
          .
        </p>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-4 md:px-6 max-w-3xl">
        {faqData.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-3 pb-2">
              <span className="text-[var(--color-brand)]">#</span>{" "}
              {section.category}
            </h2>

            {section.questions.map((item, qIdx) => (
              <FAQItem key={qIdx} question={item.q} answer={item.a} />
            ))}
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 text-center mt-20">
        <div className="bg-[var(--color-navy)] rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-brand)]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-8 opacity-80 max-w-lg mx-auto">
              Our team is ready to help you understand your eligibility and the
              process.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--color-navy)] px-8 py-3 rounded-full font-bold hover:bg-[var(--color-brand)] hover:text-white transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
