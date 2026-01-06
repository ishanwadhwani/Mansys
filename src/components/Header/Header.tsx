"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--color-navy)] backdrop-blur-xl shadow-lg">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" aria-label="Mansys Mantra — home">
            <div className="w-[210px] lg:w-[250px] flex items-center mt-1.5">
              <Image
                src="/assets/mansys_mantra.png"
                alt="Mansys Mantra Logo"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 33vw, 350px"
                width={600}
                height={100}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-8 font-medium text-sm lg:text-base"
            aria-label="Primary navigation"
          >
            <Link
              href="/"
              className="text-[var(--color-paper)] hover:text-[var(--color-brand)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/why-australia"
              className="text-[var(--color-paper)] hover:text-[var(--color-brand)] transition-colors"
            >
              Why Australia
            </Link>
            <Link
              href="/blog"
              className="text-[var(--color-paper)] hover:text-[var(--color-brand)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/faqs"
              className="text-[var(--color-paper)] hover:text-[var(--color-brand)] transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-[var(--color-paper)] hover:text-[var(--color-brand)] transition-colors"
            >
              Contact
            </Link>

            {/* Primary CTA in Header */}
            <Link
              href="/candidate"
              className="bg-white/90 text-[var(--color-navy)] font-bold px-6 py-4 rounded-full hover:bg-[var(--color-paper)] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-controls="site-nav"
            aria-expanded="false"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-[var(--color-paper)] text-[var(--color-navy)] z-50 relative"
          >
            {open ? <MdClose size={24} aria-label="Close menu" /> : <MdMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-[var(--color-paper)] z-40 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden",
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav
          id="site-nav"
          className="flex flex-col items-center gap-8 text-xl font-medium"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[var(--color-navy)]"
          >
            Home
          </Link>
          <Link
            href="/why-australia"
            onClick={() => setOpen(false)}
            className="text-[var(--text-default)] hover:text-[var(--color-brand)] transition-colors"
          >
            Why Australia
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-[var(--text-default)] hover:text-[var(--color-brand)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/faqs"
            onClick={() => setOpen(false)}
            className="text-[var(--text-default)] hover:text-[var(--color-brand)] transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-[var(--text-default)] hover:text-[var(--color-brand)] transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/candidate"
            onClick={() => setOpen(false)}
            className="bg-[var(--color-brand)] text-white px-8 py-4 rounded-full shadow-xl"
          >
            Register Now
          </Link>
        </nav>
      </div>
    </>
  );
}
