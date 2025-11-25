// import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import CTASection from "@/components/CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
