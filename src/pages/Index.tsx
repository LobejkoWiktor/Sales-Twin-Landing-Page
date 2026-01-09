import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Workflow from "@/components/landing/Workflow";
import Features from "@/components/landing/Features";
import InsightMockup from "@/components/landing/InsightMockup";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Workflow />
        <Features />
        <InsightMockup />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
