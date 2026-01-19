import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Workflow from "@/components/landing/Workflow";
import Features from "@/components/landing/Features";
import InsightMockup from "@/components/landing/InsightMockup";
import CTA from "@/components/landing/CTA";
import Team from "@/components/landing/Team";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="how-it-works">
          <Workflow />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="insights">
          <InsightMockup />
        </div>
        <CTA />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
