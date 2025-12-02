import Hero from "@/components/Hero/Hero";
import ProcessSection from "@/components/ProcessSection/index";
import Featuredtrades from "@/components/FeaturedTrades/index";
import Testimonials from "@/components/Testimonials";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
      <Footer />
    </>
  );
}
