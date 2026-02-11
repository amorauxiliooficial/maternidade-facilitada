import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import EligibilitySection from "@/components/landing/EligibilitySection";
import HowItWorks from "@/components/landing/HowItWorks";
import LeadForm from "@/components/landing/LeadForm";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import CtaFinal from "@/components/landing/CtaFinal";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => (
  <main className="min-h-screen">
    <Hero />
    <SocialProof />
    <EligibilitySection />
    <HowItWorks />
    <LeadForm />
    <Testimonials />
    <FAQ />
    <CtaFinal />
    <Footer />
    <WhatsAppFloat />
  </main>
);

export default Index;
