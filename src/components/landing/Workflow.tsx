import { Package, UserCog, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Select Your Offer",
    description: "Choose the product or service you want to master selling. Upload your pitch decks, product specs, or let AI learn from your existing materials.",
  },
  {
    number: "02",
    icon: UserCog,
    title: "Define the Persona",
    description: "Set personality traits, difficulty levels, and specific conversation goals. From friendly prospects to assertive negotiators—you decide.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Practice & Excel",
    description: "Conduct voice or text simulations and receive instant, actionable feedback. Track progress over time and watch your team transform.",
  },
];

const Workflow = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three steps to sales excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined workflow that takes your team from onboarding to closing deals faster than ever.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-8" />
              )}

              <div className="glass-card rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-glass-lg hover:-translate-y-1">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
