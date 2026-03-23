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

const teamLinkedIn = [
  "https://www.linkedin.com/in/amadou-coulibaly/",
  "https://www.linkedin.com/in/jakub-kiernozek-85a056234/",
  "https://www.linkedin.com/in/blajda/",
  "https://www.linkedin.com/in/wiktor-%C5%82obejko-842752148/",
  "https://www.linkedin.com/in/zuzanna-celejewska-27a1aa197/",
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

                {/* LinkedIn */}
                <a
                  href={teamLinkedIn[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center transition-opacity duration-200 hover:opacity-75"
                  aria-label={`${teamNames[index]} on LinkedIn`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
