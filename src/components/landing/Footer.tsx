import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container px-4 md:px-6 py-16">
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
          {/* Logo & Description */}
          <div className="text-center">
            <a href="/" className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'League Spartan', sans-serif" }}>.ZUNUBU</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6">
              {t.tagline}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/zunubu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-75"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
