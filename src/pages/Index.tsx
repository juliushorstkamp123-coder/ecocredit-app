import Hero from "@/components/Hero";
import DiscountSearch from "@/components/DiscountSearch";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Partners from "@/components/Partners";
import QRCode from "@/components/QRCode";
import Impact from "@/components/Impact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <DiscountSearch />
      <HowItWorks />
      <Benefits />
      <Partners />
      <QRCode />
      <Impact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
