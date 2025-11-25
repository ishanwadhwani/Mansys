"use client";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";
import Image from "next/image";

import logo from "../../../public/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="container flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md flex items-center justify-center">
              <Image src={logo} alt="logo" />
            </div>
            <div className="">
              <div className="text-lg font-semibold text-brand-700">MANSYS</div>
              <div className="text-xs text-neutral-400 -mt-0.5">
                Employer-Sponsored Pathways
              </div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/candidate" className="hover:text-accent">
            For Candidates
          </Link>
          <Link href="/employer" className="hover:text-accent">
            For Employers
          </Link>
          <Link
            href="/Studio"
            className="text-xs px-4 py-2 rounded-md border border-accent text-accent"
          >
            Studio
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-white border"
          >
            {open ? (
              <MdClose className="w-5 h-5 text-brand-700" />
            ) : (
              <MdMenu className="w-5 h-5 text-brand-700" />
            )}
          </button>
        </div>
      </div>

      <div className={clsx("z-40 md:hidden bg-white border-t", !open && "hidden")}>
        <div className="flex flex-col p-4 gap-3">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <Link href="/candidate" className="block py-2">
            For Candidates
          </Link>
          <Link href="/employer" className="block py-2">
            For Employers
          </Link>
          <Link href="/Studio" className="block py-2">
            Studio
          </Link>
        </div>
      </div>
    </header>
  );
}
