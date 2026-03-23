import { Users, Shuffle, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const icons = [Users, Shuffle, TrendingUp];

const Features = () => {
  const { language } = useLanguage();
  const t = translations[language].features;

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.sectionDesc}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div key={card.title} className="group relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="glass-card-strong rounded-3xl p-8 h-full relative transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 shadow-glow-primary/30">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>

                  {/* Highlight tags */}
                  <div className="flex flex-wrap gap-2">
                    {card.highlights.map((tag) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
