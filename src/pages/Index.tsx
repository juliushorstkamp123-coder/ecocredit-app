import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Partners />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
