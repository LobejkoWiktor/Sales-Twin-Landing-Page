import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const teamImages = [
  "/images/team/Amadou.png",
  "/images/team/Jakub.png",
  "/images/team/Mateusz.png",
  "/images/team/Wiktor.png",
  "/images/team/Zuza.png",
];

const teamNames = [
  "Amadou Coulibaly",
  "Jakub Kiernozek",
  "Mateusz Błajda",
  "Wiktor Łobejko",
  "Zuza Celejwska",
];

const teamRoles = [
  "Backend & Architecture",
  "Product & Backend",
  "ML & AI Engineer",
  "Frontend",
  "Product",
];

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language].team;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
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

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.members.map((member, index) => (
            <div
              key={teamNames[index]}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="glass-card rounded-3xl p-6 h-full relative transition-all duration-300 hover:-translate-y-2">
                {/* Photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-highlight/20">
                  <img
                    src={teamImages[index]}
                    alt={teamNames[index]}
                    className={`w-full h-full object-cover ${teamNames[index] === 'Wiktor Łobejko' ? 'object-top' : ''}`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-foreground text-center mb-2">
                  {teamNames[index]}
                </h3>

                {/* Role */}
                <p className="text-primary font-medium text-center mb-4">
                  {teamRoles[index]}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
