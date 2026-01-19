import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30 pt-32 pb-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-up text-balance" style={{ animationDelay: '0.2s' }}>
            Onboard sales reps{" "}
            <span className="gradient-text">3x faster</span>{" "}
            with AI-powered training
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-up text-balance" style={{ animationDelay: '0.3s' }}>
            Empower your sales team to practice in a risk-free environment. Simulate conversations, configure challenging customer personas, and analyze performance—all in one platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Demo
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg">
              <Play className="w-4 h-4 mr-1" />
              Watch Video
            </Button>
          </div>

          {/* Trust indicators */}

        </div>
      </div>


    </section>
  );
};

export default Hero;
