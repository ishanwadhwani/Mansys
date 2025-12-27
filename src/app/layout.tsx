import type { Metadata } from "next";
import "./globals.css";

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
    "Recruitment Services",
    "Skilled Trade Migration",
    "Australia Jobs",
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
    // images: [

    // ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
