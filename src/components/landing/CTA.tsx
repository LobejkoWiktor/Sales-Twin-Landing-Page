import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow-primary">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to transform your{" "}
            <span className="gradient-text">sales culture</span>?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join the teams already using SalesTwin to onboard faster, close more deals, and build a world-class sales organization.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="group">
            Get Started Now
            <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Trust note */}
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
