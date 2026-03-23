import { CheckCircle2, AlertCircle, TrendingUp, Clock, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const InsightMockup = () => {
  const { language } = useLanguage();
  const t = translations[language].insights;

  const bulletPoints =
    language === "pl"
      ? [
          "Natychmiastowa ocena wydajności po każdej sesji",
          "Spersonalizowane rekomendacje poprawy",
          "Śledź postępy całego swojego zespołu",
        ]
      : [
          "Instant performance scoring after every session",
          "Personalized improvement recommendations",
          "Track progress across your entire team",
        ];

  const mockupStrengths =
    language === "pl"
      ? ["Klarowne przedstawienie wartości", "Budowanie relacji", "Trafne pytania odkrywające"]
      : ["Clear value proposition delivery", "Strong rapport building", "Effective discovery questions"];

  const mockupImprovements =
    language === "pl"
      ? ["Pewniej reaguj na obiekcje cenowe", "Wyraźniej prosi o kolejne kroki"]
      : ["Handle pricing objections with more confidence", "Ask for next steps more directly"];

  const mockupHeadline =
    language === "pl"
      ? <>Każda rozmowa staje się <span className="gradient-text">szansą na naukę</span></>
      : <>Every call becomes a <span className="gradient-text">learning opportunity</span></>;

  const mockupDesc =
    language === "pl"
      ? "Nasze AI analizuje każdą symulację w czasie rzeczywistym, dostarczając szczegółowych analiz — co działało, co nie i jak dokładnie to poprawić. Obserwuj, jak rośnie pewność siebie Twojego zespołu."
      : "Our AI analyzes every simulation in real-time, providing detailed breakdowns of what worked, what didn't, and exactly how to improve. Watch your team's confidence soar.";

  const strengthsLabel = language === "pl" ? "Mocne strony" : "Strengths";
  const improvementsLabel = language === "pl" ? "Obszary do poprawy" : "Areas for Improvement";
  const justNow = language === "pl" ? "Przed chwilą" : "Just now";
  const improvement = language === "pl" ? "+12 od ostatniej sesji" : "+12 from last session";
  const improvementDesc = language === "pl" ? "Świetna poprawa w radzeniu sobie z obiekcjami!" : "Great improvement on objection handling!";

  return (
    <section id="insights" className="py-24 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {mockupHeadline}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {mockupDesc}
            </p>

            <ul className="space-y-4">
              {bulletPoints.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div className="order-1 lg:order-2 relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20 rounded-3xl blur-3xl opacity-50" />

            {/* Main card */}
            <div className="relative glass-card-strong rounded-3xl p-6 md:p-8 shadow-glass-lg animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Post-Call Summary</h3>
                  <p className="text-sm text-muted-foreground">Enterprise SaaS Demo • 12 min</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{justNow}</span>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-center gap-6 mb-8 p-4 bg-secondary/50 rounded-2xl">
                <div className="relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted/30" />
                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray={`${88 * 2.51} ${100 * 2.51}`} className="text-highlight" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-highlight">88</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{improvement}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{improvementDesc}</p>
                </div>
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {strengthsLabel}
                </h4>
                <div className="space-y-2">
                  {mockupStrengths.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas for Improvement */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-highlight" />
                  {improvementsLabel}
                </h4>
                <div className="space-y-2">
                  {mockupImprovements.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-highlight/5 rounded-xl">
                      <div className="w-2 h-2 bg-highlight rounded-full" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 shadow-glass animate-float" style={{ animationDelay: '-2s' }}>
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightMockup;
