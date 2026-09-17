import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import { useSEO } from "@/hooks/useSEO";
import { seoData } from "@/utils/seo/seoData";

const Index = () => {
  useSEO({
    ...seoData.home,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen overflow-x-hidden bg-ivory text-charcoal">
      <Header />

      <main>
        <Hero />

        <Services />

        <section id="portfolio">
          <Gallery />
        </section>

        <Projects />

        <WhyChoose />

        <About />

        <ServiceAreas />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
