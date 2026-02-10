import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import EligibilitySection from "@/components/landing/EligibilitySection";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <EligibilitySection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
