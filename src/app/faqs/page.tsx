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
        q: "Which professions can apply through MANSYS?",
        a: "MANSYS supports skilled workers in trades, automotive, hospitality, care services, agriculture, and manufacturing.",
      },
      {
        q: "Why does Australia need overseas tradies and skilled workers?",
        a: "Australia faces nationwide skill shortages due to an ageing workforce, infrastructure growth, and limited local supply.",
      },
      {
        q: "What visas do tradies commonly use?",
        a: "Popular visa pathways include the Temporary Skill Shortage (TSS 482), Skilled Employer Sponsored Regional (494), and Employer Nomination Scheme (186). Official info: https://immi.homeaffairs.gov.au/visas/working-in-australia",
      },
      {
        q: "How much do tradies earn in Australia?",
        a: "Wages vary: welders AU$70k-AU$105k, diesel mechanics AU$80k-AU$120k, carpenters AU$65k-AU$95k, chefs AU$55k-AU$90k, aged care AU$60k-AU$85k.",
      },
      {
        q: "What are working hours like?",
        a: "Most trades run from 6:30 AM to 3:00/4:00 PM. Hospitality and care roles operate in shifts.",
      },
      {
        q: "Are Australian workplaces safe?",
        a: "Australia enforces strict Work Health & Safety (WHS) laws. Details: https://www.safeworkaustralia.gov.au/",
      },
      {
        q: "Does MANSYS charge candidates?",
        a: "Yes, depending on occupation and documentation needs.",
      },
      {
        q: "How long does the process take?",
        a: "Shortlisting: 1-3 weeks. Interviews: 1-2 weeks. Visa timelines depend on Home Affairs processing.",
      },
      {
        q: "Can MANSYS help with interview preparation?",
        a: "Yes. We assist with resumes, documentation, and interview coaching.",
      },
      {
        q: "Will I be treated equally as an overseas worker?",
        a: "Yes. Australian law ensures equal treatment in pay, safety, and conditions.",
      },
      {
        q: "Where can I check the official skilled occupation list?",
        a: "You can view Australia's Skilled Occupation List here: https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
      },
      {
        q: "How do I check if my employer is approved to sponsor workers?",
        a: "You can verify employer sponsorship approval here: https://www.abf.gov.au/help-and-support/glossary/s/standard-business-sponsor",
      },
      {
        q: "Where can I learn about Australian workplace rights?",
        a: "The Fair Work Ombudsman provides full details: https://www.fairwork.gov.au/",
      },
      {
        q: "How much does it cost to live in Australia?",
        a: "Average monthly costs: shared room AU$600-AU$900, groceries AU$300-AU$500, phone AU$30-AU$50, transport AU$60-AU$200.",
      },
    ],
  },
  {
    category: "Eligibility & Skills",
    questions: [
      {
        q: "Are there age limits?",
        a: "Most roles prefer ages 23-45. Visa age limits vary.",
      },
      {
        q: "What qualifications or experience do I need?",
        a: "Most trades require 2-10 years of hands-on experience, recognized trade certificates, and safe tool-handling skills.",
      },
      {
        q: "Do I need a skills assessment?",
        a: "It depends on your trade and visa. Official assessment bodies listed here: https://immi.homeaffairs.gov.au/visas/working-in-australia/skills-assessment",
      },
      {
        q: "Do I need an English test (IELTS/PTE)?",
        a: "Most skilled visas require an English test unless exempt. Requirements: https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language",
      },
      {
        q: "Is overseas experience from the Gulf acceptable?",
        a: "Yes, Gulf experience is highly valued by Australian employers.",
      },
    ],
  },
  {
    category: "Process & Visa",
    questions: [
      {
        q: "Will employers provide accommodation?",
        a: "Regional employers sometimes provide subsidised housing. City employers may assist with settling in.",
      },
      {
        q: "Can I bring my family?",
        a: "Most sponsored visas allow spouses and dependent children to accompany you.",
      },
      {
        q: "What documents do I need?",
        a: "You need a CV, passport, trade certificates, experience letters, references, and English results (if required).",
      },
      {
        q: "Do I need health insurance in Australia?",
        a: "Yes, most visa holders must maintain private health insurance. Details: https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482/health-insurance.",
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
            Everything you need to know about migrating to Australia as a
            skilled worker. Can&apos;t find the answer you&apos;re looking for?{" "}
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
                Our team is ready to help you understand your eligibility and
                the process.
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
