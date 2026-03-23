import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => setLanguage(language === "pl" ? "en" : "pl");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="inline-flex items-center justify-center h-9 px-3 rounded-lg border border-border bg-background/60 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {language === "pl" ? "PL" : "EN"}
    </button>
  );
};

export default LanguageToggle;
