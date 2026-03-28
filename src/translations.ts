export type Language = "pl" | "en";

export const translations = {
  pl: {
    // Header nav
    nav: {
      howItWorks: "Jak to działa",
      features: "Funkcje",
      insights: "Insights",
      meetTheTeam: "Poznaj zespół",
      contactUs: "Kontakt",
    },
    header: {
      joinWaitlist: "Dołącz do listy",
      theme: "Motyw",
    },
    // Waitlist popover
    waitlist: {
      title: "Dołącz do listy",
      description: "Bądź pierwszym, który dowie się o naszym starcie. Wpisz swój adres email poniżej.",
      emailPlaceholder: "ty@firma.com",
      joining: "Dołączam…",
      joinButton: "Dołącz",
      successTitle: "Jesteś na liście!",
      successMessage: "Odezwiemy się, gdy ruszymy.",
      emailRequired: "Email jest wymagany.",
      emailInvalid: "Podaj poprawny adres email.",
      dbError: "Coś poszło nie tak. Spróbuj ponownie.",
    },
    // Hero
    hero: {
      headlinePart1: "Wdrażaj handlowców",
      headlineHighlight: "3x szybciej",
      headlinePart2: "dzięki szkoleniom opartym o AI",
      subheadline:
        "Umożliw swojemu zespołowi sprzedaży ćwiczenie w bezpiecznym środowisku. Symuluj rozmowy, konfiguruj wymagające persony klientów i analizuj wyniki. Wszystko w jednej platformie.",
      testButton: "Przetestuj sam",
      watchVideo: "Obejrzyj film",
      comingSoonTitle: "Wkrótce dostępne",
      comingSoonDesc: "Film będzie dostępny niebawem!",
    },
    // Features
    features: {
      sectionTitle: "Stworzony dla nowoczesnego zespołu sprzedaży",
      sectionDesc: "Wszystko, czego potrzebujesz, by zamienić surowy talent w pewnych siebie sprzedawców.",
      cards: [
        {
          title: "Realistyczne persony",
          description:
            "Ćwicz z każdym typem klienta - od przyjaznych prospektów po asertywnych negocjatorów. Każda persona dostosowuje się do Twoich odpowiedzi w czasie rzeczywistym.",
          highlights: ["Oparte o AI", "Adaptacyjne"],
        },
        {
          title: "Dynamiczne scenariusze",
          description:
            "Dostosowuj obiekcje, ograniczenia budżetowe i nastroje klientów na bieżąco. Twórz nieograniczone kombinacje dla kompleksowego szkolenia.",
          highlights: ["Konfigurowalne", "Nieograniczone"],
        },
        {
          title: "Wizjonerskie insighty",
          description:
            "Szczegółowa analiza po rozmowie z systemem punktacji podkreślającym mocne strony i obszary do rozwoju.",
          highlights: ["W czasie rzeczywistym", "Działające"],
        },
      ],
    },
    // Workflow
    workflow: {
      sectionTitle: "Trzy kroki do doskonałości sprzedaży",
      sectionDesc:
        "Uproszczony workflow, który prowadzi Twój zespół od wdrożenia do zamykania transakcji szybciej niż kiedykolwiek.",
      steps: [
        {
          title: "Wybierz swoją ofertę",
          description:
            "Wybierz produkt lub usługę, którą chcesz opanować. Prześlij materiały sprzedażowe lub pozwól AI nauczyć się z Twoich istniejących zasobów.",
        },
        {
          title: "Zdefiniuj personę",
          description:
            "Ustaw cechy osobowości, poziomy trudności i konkretne cele rozmowy. Od przyjaznych prospektów po asertywnych negocjatorów - Ty decydujesz.",
        },
        {
          title: "Ćwicz i bądź najlepszy",
          description:
            "Prowadź symulacje głosowe lub tekstowe i otrzymuj natychmiastowe, praktyczne informacje zwrotne. Śledź postępy i obserwuj transformację swojego zespołu.",
        },
      ],
    },
    // Insights
    insights: {
      badge: "Analityka wydajności",
      title: "Insighty po każdej rozmowie",
      description:
        "Natychmiastowe, wielowymiarowe oceny każdej symulacji sprzedażowej. Śledź postępy, identyfikuj słabe punkty i obserwuj, jak Twój zespół się doskonali.",
    },
    // CTA / Contact
    cta: {
      headline1: "Gotowy na transformację swojej",
      headlineHighlight: "kultury sprzedaży",
      headline2: "?",
      description:
        "Dołącz do zespołów już korzystających z SalesTwin, by szybciej wdrażać, zamykać więcej transakcji i budować organizację sprzedaży światowej klasy.",
      firstNameLabel: "Imię",
      lastNameLabel: "Nazwisko",
      emailLabel: "Email",
      messageLabel: "Wiadomość",
      firstNamePlaceholder: "Jan",
      lastNamePlaceholder: "Kowalski",
      emailPlaceholder: "jan@firma.com",
      messagePlaceholder: "Jak możemy Ci pomóc?",
      sendButton: "Skontaktuj się",
      sending: "Wysyłam…",
      successTitle: "Wiadomość wysłana!",
      successMessage: "Odezwiemy się wkrótce.",
      sendAnother: "Wyślij kolejną wiadomość",
      firstNameRequired: "Imię jest wymagane.",
      emailRequired: "Email jest wymagany.",
      emailInvalid: "Podaj poprawny adres email.",
      messageRequired: "Wiadomość jest wymagana.",
      dbError: "Coś poszło nie tak. Spróbuj ponownie.",
    },
    // Team
    team: {
      sectionTitle: "Poznaj zespół",
      sectionDesc: "Pasjonaci stojący za SalesTwin, oddani transformacji szkoleń sprzedażowych.",
      members: [
        {
          description:
            "Inżynier backendu z ponad 7-letnim doświadczeniem w budowaniu systemów rozproszonych; absolwent PJATK (mgr).",
        },
        {
          description:
            "Inżynier AI i programista backendowy, absolwent Politechniki Warszawskiej (mgr).",
        },
        {
          description:
            "Badacz ML z komercyjnym doświadczeniem, specjalizujący się w LLM i syntezie mowy. Absolwent Uniwersytetu Warszawskiego.",
        },
        {
          description:
            "Programista mobilny z 5-letnim doświadczeniem w budowaniu rozwiązań dla sektora bankowego. Specjalista w solidnych, skoncentrowanych na użytkowniku platformach.",
        },
        {
          description: "Studentka SGH z doświadczeniem biznesowym w sprzedaży i e-commerce.",
        },
      ],
    },
    // Footer
    footer: {
      tagline: "Szkolenia sprzedażowe oparte o AI, które transformują sposób nauki i zamykania transakcji.",
      copyright: "© 2026 SalesTwin. Wszelkie prawa zastrzeżone.",
    },
  },

  en: {
    nav: {
      howItWorks: "How It Works",
      features: "Features",
      insights: "Insights",
      meetTheTeam: "Meet the team",
      contactUs: "Contact Us",
    },
    header: {
      joinWaitlist: "Join The Waitlist",
      theme: "Theme",
    },
    waitlist: {
      title: "Join the Waitlist",
      description: "Be the first to know when we launch. Enter your email below.",
      emailPlaceholder: "you@company.com",
      joining: "Joining…",
      joinButton: "Join Waitlist",
      successTitle: "You're on the list!",
      successMessage: "We'll reach out when we launch.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address.",
      dbError: "Something went wrong. Please try again.",
    },
    hero: {
      headlinePart1: "Onboard sales reps",
      headlineHighlight: "3x faster",
      headlinePart2: "with AI-powered training",
      subheadline:
        "Empower your sales team to practice in a risk-free environment. Simulate conversations, configure challenging customer personas, and analyze performance—all in one platform.",
      testButton: "Test it yourself",
      watchVideo: "Watch Video",
      comingSoonTitle: "Coming Soon",
      comingSoonDesc: "The video will be available soon!",
    },
    features: {
      sectionTitle: "Built for the modern sales team",
      sectionDesc: "Everything you need to transform raw talent into confident closers.",
      cards: [
        {
          title: "Realistic Personas",
          description:
            "Practice against everything from friendly prospects to 'assertive negotiators'. Each persona adapts to your responses in real-time.",
          highlights: ["AI-Powered", "Adaptive"],
        },
        {
          title: "Dynamic Scenarios",
          description:
            "Customize objections, budget constraints, and customer moods on the fly. Create unlimited combinations for comprehensive training.",
          highlights: ["Customizable", "Unlimited"],
        },
        {
          title: "Visionary Insights",
          description:
            "Detailed post-call analysis featuring a scoring system that highlights strengths and growth opportunities for continuous improvement.",
          highlights: ["Real-time", "Actionable"],
        },
      ],
    },
    workflow: {
      sectionTitle: "Three steps to sales excellence",
      sectionDesc:
        "A streamlined workflow that takes your team from onboarding to closing deals faster than ever.",
      steps: [
        {
          title: "Select Your Offer",
          description:
            "Choose the product or service you want to master selling. Upload your pitch decks, product specs, or let AI learn from your existing materials.",
        },
        {
          title: "Define the Persona",
          description:
            "Set personality traits, difficulty levels, and specific conversation goals. From friendly prospects to assertive negotiators—you decide.",
        },
        {
          title: "Practice & Excel",
          description:
            "Conduct voice or text simulations and receive instant, actionable feedback. Track progress over time and watch your team transform.",
        },
      ],
    },
    insights: {
      badge: "Performance Analytics",
      title: "Insights after every call",
      description:
        "Instant, multi-dimensional scoring of every sales simulation. Track progress, identify weak spots, and watch your team improve.",
    },
    cta: {
      headline1: "Ready to transform your",
      headlineHighlight: "sales culture",
      headline2: "?",
      description:
        "Join the teams already using SalesTwin to onboard faster, close more deals, and build a world-class sales organization.",
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      emailLabel: "Email",
      messageLabel: "Message",
      firstNamePlaceholder: "John",
      lastNamePlaceholder: "Doe",
      emailPlaceholder: "john@company.com",
      messagePlaceholder: "How can we help you?",
      sendButton: "Contact us",
      sending: "Sending…",
      successTitle: "Message sent!",
      successMessage: "We'll be in touch soon.",
      sendAnother: "Send another message",
      firstNameRequired: "First name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Message is required.",
      dbError: "Something went wrong. Please try again.",
    },
    team: {
      sectionTitle: "Meet the team",
      sectionDesc: "The passionate people behind SalesTwin, dedicated to transforming sales training.",
      members: [
        {
          description:
            "Backend Engineer with 7+ years of experience building distributed systems; M.Sc. graduate of PJATK",
        },
        {
          description:
            "AI Engineer & Backend Developer, M.Sc. graduate of Warsaw University of Technology.",
        },
        {
          description:
            "ML Researcher with years of commercial expertise specializing in LLMs and Text-to-Speech synthesis graduated University of Warsaw.",
        },
        {
          description:
            "Mobile developer with 5 years of experience in building solutions for the banking sector. Specialized in robust, user centric platforms.",
        },
        {
          description: "SGH student with business experience in sales and e-commerce.",
        },
      ],
    },
    footer: {
      tagline: "AI-powered sales training that transforms how teams learn and close.",
      copyright: "© 2026 SalesTwin. All rights reserved.",
    },
  },
};
