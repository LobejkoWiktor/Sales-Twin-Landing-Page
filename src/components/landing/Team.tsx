const teamMembers = [
    {
        name: "Amadou Coulibaly",
        role: "Backend & Architecture",
        description: "Backend Engineer with 7+ years of experience building distributed systems; M.Sc. graduate of PJATK",
        image: "/images/team/Amadou.png",
    },
    {
        name: "Jakub Kiernozek",
        role: "Product & Backend",
        description: "AI Engineer & Backend Developer, M.Sc. graduate of Warsaw University of Technology.",
        image: "/images/team/Jakub.png",
    },
    {
        name: "Mateusz Błajda",
        role: "ML & AI Engineer",
        description: "ML Researcher with years of commercial expertise specializing in LLMs and Text-to-Speech synthesis graduated University of Warsaw.",
        image: "/images/team/Mateusz.png",
    },
    {
        name: "Wiktor Łobejko",
        role: "Frontend",
        description: "Mobile developer with 5 years of experience in building solutions for the banking sector. Specialized in robust, user centric platforms.",
        image: "/images/team/Wiktor.png",
    },
    {
        name: "Zuza Celejwska",
        role: "Product",
        description: "SGH student with business experience in sales and e-commerce.",
        image: "/images/team/Zuza.png",
    },
];

const Team = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
            <div className="container px-4 md:px-6">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Meet the team
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        The passionate people behind SalesTwin, dedicated to transforming sales training.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.name}
                            className="group relative"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                            <div className="glass-card rounded-3xl p-6 h-full relative transition-all duration-300 hover:-translate-y-2">
                                {/* Photo */}
                                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-highlight/20">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover ${member.name === 'Wiktor Łobejko' ? 'object-top' : ''}`}
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-foreground text-center mb-2">
                                    {member.name}
                                </h3>

                                {/* Role */}
                                <p className="text-primary font-medium text-center mb-4">
                                    {member.role}
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
