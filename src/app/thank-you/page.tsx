"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PiCheckCircleFill } from "react-icons/pi";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const isQualified = searchParams.get("qualified") === "true";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--color-paper)] flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-2xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[var(--color-secondary)]/20 animate-fadeIn">
          <div className="mb-6 flex justify-center">
            {isQualified ? (
                <div className="bg-green-100 p-4 rounded-full">
              <PiCheckCircleFill className="text-8xl text-green-500" />
                </div>
            ) : (
              <div className="bg-orange-100 p-4 rounded-full">
                <PiCheckCircleFill className="text-8xl text-orange-500" />
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--color-navy)] mb-6">
            {isQualified ? "Congratulations!" : "Application Received"}
          </h1>

          <div className="flex flex-col justify-center text-lg space-y-6 mb-10 leading-relaxed">
            {isQualified ? (
              <>
                <p className="font-semibold text-xl text-green-700 w-[300px] mx-auto">
                  You may qualify for sponsorship in Australia. <br/> Most jobs start from AUD 80,000 per year (minimum).
                </p>
                <p>
                  Our team has received your details. We will review your
                  profile specifically for the <strong>Subclass 482</strong> and{" "}
                  <strong>Subclass 186</strong> visa pathways.
                </p>
                <p>
                  Expect an email or WhatsApp message from us within{" "}
                  <strong>48 hours</strong>.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold">Thank you for your interest in working in Australia.</p>
                <p>
                  Based on your current answers, you may not meet the strict
                  requirements for immediate sponsorship (usually due to
                  experience or English levels).
                </p>
                <p>
                  We have saved your profile and will contact you if a suitable
                  position opens up that matches your skill level.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-[var(--color-navy)] text-white font-bold hover:bg-[var(--color-brand)] hover:text-[var(--color-navy)] transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 rounded-full border border-[var(--color-navy)] text-[var(--color-navy)] font-bold hover:bg-[var(--color-navy)] hover:text-white transition-all"
            >
              Read our blogs
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
