import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://mansysmantra.com"),
  title: {
    default:
      "Mansys Mantra - Professional Australian Recruitment & Skilled Trade Migration Services",
    template: "%s | Mansys Mantra",
  },
  description:
    "Specialized recruitment and skilled trade migration services in Australia. Connect with top employers and skilled workers for successful placements.",
  keywords: [
    "Mansys Mantra",
    "Mansys Mantra welder jobs",
    "Mansys Mantra carpenter jobs",
    "Mansys Mantra electrician jobs",
    "Mansys Mantra plasterer jobs",
    "Trades Australia",
    "Recruitment Services",
    "Skilled Trade Migration",
    "Australia Jobs",
    "Australia migration Jobs",
    "Australian Jobs",
    "Worker Placement",
    "Skilled Workers Australia",
    "welder jobs Australia",
    "electrician jobs Australia",
    "plumber jobs Australia",
    "carpenter jobs Australia",
    "construction jobs Australia",
    "trade migration services",
    "Australian employers",
    "job placement services",
    "skilled labor recruitment",
    "bricklayer jobs Australia",
    "mechanic jobs Australia",
    "hospitality jobs Australia",
    "healthcare jobs Australia",
    "IT jobs Australia",
    "engineering jobs Australia",
    "mining jobs Australia",
  ],
  authors: [{ name: "Mansys Mantra", url: "https://mansysmantra.com" }],
  creator: "Mansys Mantra",
  publisher: "Mansys Mantra",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://mansysmantra.com",
    title:
      "Mansys Mantra - Professional Australian Recruitment & Skilled Trade Migration Services",
    description:
      "Specialized recruitment and skilled trade migration services in Australia. Connect with top employers and skilled workers for successful placements.",
    siteName: "Mansys Mantra",
    images: [
      {
        url: "https://mansysmantra.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mansys Mantra - Skilled Migration",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#2b4592",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: "Mansys Mantra",
  url: "https://mansysmantra.com",
  logo: "https://mansysmantra.com/assets/mansysmantralogo.png",
  description:
    "Specialized recruitment and skilled trade migration services in Australia.",
  telephone: "+61-492 819 946",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
