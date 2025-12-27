"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import AusMap from "../../../public/AusMap.jpg";

export const SydneyClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const sydTime = new Date().toLocaleTimeString("en-AU", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(sydTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 mb-8 mt-8">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-sm font-medium text-[var(--color-navy)]">
        Current time in Sydney: <span className="font-bold">{time}</span>
      </span>
    </div>
  );
};

export const ContactInfoCards = () => {
  const cards = [
    {
      icon: <FaEnvelope />,
      label: "Email Us",
      value: "mantra@mansysmantra.com",
      link: "mailto:mantra@mansysmantra.com",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaWhatsapp />,
      label: "Call Us",
      value: "+61-492 819 946",
      link: "https://wa.me/61234567890",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Visit HQ",
      value: "Level 14, 275 Alfred Street, North Sydney NSW 2060, Australia",
      link: "https://maps.app.goo.gl/vecP8VFpqDgshGMW6",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="grid gap-4 mt-8">
      {cards.map((card, idx) => (
        <Link
          key={idx}
          href={card.link}
          target={card.label === "WhatsApp" ? "_blank" : undefined}
          rel={card.label === "WhatsApp" ? "noopener noreferrer" : undefined}
          className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[var(--color-secondary)]/20 shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all duration-300 group"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${card.color} group-hover:scale-110 transition-transform`}
          >
            {card.icon}
          </div>
          <div>
            <p className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider">
              {card.label}
            </p>
            <p className="text-lg font-semibold text-[var(--color-navy)]">
              {card.value}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSent(true);
    reset();
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[var(--color-secondary)]/20 relative overflow-hidden">
      {/* Success Overlay */}
      <div
        className={`absolute inset-0 bg-[var(--color-navy)] flex flex-col items-center justify-center text-white transition-transform duration-500 z-20 ${
          isSent ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-16 h-16 bg-white text-[var(--color-navy)] rounded-full flex items-center justify-center text-3xl mb-4 animate-bounce">
          ✓
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="opacity-80 mt-2">We&apos;ll get back to you shortly.</p>
        <button
          onClick={() => setIsSent(false)}
          className="mt-6 text-sm underline hover:text-[var(--color-brand)]"
        >
          Send another message
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 relative z-10"
      >
        <div>
          <label className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
            What&apos;s your name?
          </label>
          <input
            {...register("name", { required: true })}
            className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[var(--color-brand)] outline-none transition-all placeholder:text-gray-400"
            placeholder="John Doe"
          />
          {errors.name && (
            <span className="text-xs text-red-500 mt-1 block">
              Name is required
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
            Your email address
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[var(--color-brand)] outline-none transition-all placeholder:text-gray-400"
            placeholder="john@example.com"
          />
          {errors.email && (
            <span className="text-xs text-red-500 mt-1 block">
              Valid email is required
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--color-navy)] mb-2">
            How can we help?
          </label>
          <textarea
            {...register("message", { required: true })}
            rows={4}
            className="w-full p-4 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[var(--color-brand)] outline-none transition-all placeholder:text-gray-400 resize-none"
            placeholder="Tell us about your trade or questions..."
          ></textarea>
          {errors.message && (
            <span className="text-xs text-red-500 mt-1 block">
              Message is required
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--color-brand)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-accent)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message <FaPaperPlane className="text-sm" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default function contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[var(--color-navy)] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={AusMap}
              alt="Australian Lifestyle"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-brand)]/20 border border-[var(--color-brand)] text-[var(--color-brand)] font-bold text-sm uppercase tracking-wider mb-6">
              We&apos;re here to help
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Contact Us <br />
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-secondary)]">
              Get in touch with the right people at Mansys.
            </span> */}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-secondary)] max-w-2xl mx-auto leading-relaxed">
              Get in touch with the right people at Mansys.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-6 py-20 gap-12">
          <ContactInfoCards />
          <SydneyClock />
        </section>

        <section className="py-20 bg-[var(--color-paper)] text-center border-t border-[var(--color-secondary)]/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-6">
              If in no doubt, check your eligibility today!
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
