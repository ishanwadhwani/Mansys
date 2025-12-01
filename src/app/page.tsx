// import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import CTASection from "@/components/CTASection/CTASection";
import ProcessSection from "@/components/ProcessSection/index";
import Featuredtrades from "@/components/FeaturedTrades/index";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProcessSection />
        <Featuredtrades />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </>
  );
}
