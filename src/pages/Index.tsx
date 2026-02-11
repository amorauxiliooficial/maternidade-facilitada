import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import EligibilitySection from "@/components/landing/EligibilitySection";
import HowItWorks from "@/components/landing/HowItWorks";
import LeadForm from "@/components/landing/LeadForm";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <EligibilitySection />
      <HowItWorks />
      <LeadForm />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
