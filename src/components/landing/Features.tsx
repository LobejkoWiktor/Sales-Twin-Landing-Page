import { Users, Shuffle, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Realistic Personas",
    description: "Practice against everything from friendly prospects to 'assertive negotiators'. Each persona adapts to your responses in real-time.",
    highlights: ["AI-Powered", "Adaptive"],
  },
  {
    icon: Shuffle,
    title: "Dynamic Scenarios",
    description: "Customize objections, budget constraints, and customer moods on the fly. Create unlimited combinations for comprehensive training.",
    highlights: ["Customizable", "Unlimited"],
  },
  {
    icon: TrendingUp,
    title: "Visionary Insights",
    description: "Detailed post-call analysis featuring a scoring system that highlights strengths and growth opportunities for continuous improvement.",
    highlights: ["Real-time", "Actionable"],
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for the modern sales team
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to transform raw talent into confident closers.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="glass-card-strong rounded-3xl p-8 h-full relative transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-glow-primary/30">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-highlight/10 text-highlight text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
