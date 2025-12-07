import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-paper)] pt-16 pb-8 border-t border-[var(--color-secondary)]/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">MANSYS</h2>
            <p className="text-[var(--color-secondary)] text-sm leading-relaxed opacity-80 max-w-xs">
              We bridge the gap between skilled global talent and Australian
              employers. Your trusted partner for migration and career growth.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[var(--color-paper)]/10 flex items-center justify-center hover:bg-[var(--color-brand)] transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Explore</h3>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Why Australia
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/candidate"
                  className="hover:text-white transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-[var(--color-secondary)]">
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-brand)] font-bold">
                  Email:
                </span>
                <a
                  href="mailto:info@mansys.com"
                  className="hover:text-white transition-colors"
                >
                  info@mansys.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-brand)] font-bold">
                  Phone:
                </span>
                <a
                  href="tel:+61234567890"
                  className="hover:text-white transition-colors"
                >
                  +61 2 3456 7890
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[var(--color-brand)] font-bold">
                  Office:
                </span>
                <span>
                  Level 14, 275 Alfred Street,
                  <br />
                  North Sydney NSW 2060, Australia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent mb-8"></div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-secondary)] opacity-60">
          <p>© {currentYear} MANSYS Recruitment. All rights reserved.</p>
          <div className="flex gap-6">
            <span>ABN: 12 345 678 901</span>
            <span>MARN: 1234567</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
