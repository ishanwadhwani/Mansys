import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import mansysmantralogo from "../../../public/assets/mansys_mantra.png";

const socialLinks = [
  {
    Icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61584742739022",
    label: "Facebook",
  },
  {
    Icon: FaXTwitter,
    href: "https://x.com/mansysmantra",
    label: "X (Twitter)",
  },
  {
    Icon: FaInstagram,
    href: "https://instagram.com/mansysmantra",
    label: "Instagram",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-paper)] pt-16 pb-8 border-t border-[var(--color-secondary)]/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & About */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-54 md:w-64">
              <Image
                src={mansysmantralogo}
                alt="Mansys Mantra Logo"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 33vw, 350px"
              />
            </div>
            <p className="text-[var(--color-secondary)] text-sm leading-relaxed max-w-xs text-center">
              We bridge the gap between skilled global talent and Australian
              employers. Your trusted partner for migration and career growth.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ Icon, href, label }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[var(--color-paper)]/10 flex items-center justify-center hover:bg-[var(--color-brand)] transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 text-white" />
                </Link>
              ))}
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
                  href="/why-australia"
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
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
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
                <span className="text-white font-bold">Email:</span>
                <Link
                  href="mailto:info@mansys.com"
                  className="hover:text-white transition-colors"
                  aria-label="Mail Mansys Mantra on mantra@mansysmantra.com"
                >
                  mantra@mansysmantra.com
                </Link>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-white font-bold">Phone:</span>
                <Link
                  href="tel: +61-492 819 946"
                  className="hover:text-white transition-colors"
                  aria-label="Call Mansys Mantra on +61 2 3456 7890"
                >
                  +61-492 819 946
                </Link>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-white font-bold">Office:</span>
                <Link
                  href="https://maps.app.goo.gl/vecP8VFpqDgshGMW6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Visit Mansys Mantra headquarters at Level 14, 275 Alfred Street, North Sydney NSW 2060, Australia"
                >
                  Level 14, 275 Alfred Street,
                  <br />
                  North Sydney NSW 2060, Australia
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent mb-8"></div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-secondary)] opacity-60">
          <p>
            © {currentYear} Mansys Mantra Recruitment. All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <span>ABN: 12 345 678 901</span>
            <span>MARN: 1234567</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
