const teamMembers = [
    {
        name: "Alex Thompson",
        role: "Lead Engineer",
        description: "Full-stack developer with 8+ years building scalable AI solutions. Passionate about creating intuitive user experiences.",
        image: "/images/team/member1.png",
    },
    {
        name: "Sarah Chen",
        role: "Product Manager",
        description: "Product strategist focused on bridging technology and business needs. Expert in sales enablement platforms.",
        image: "/images/team/member2.png",
    },
    {
        name: "Michael Rodriguez",
        role: "UX Designer",
        description: "Creative designer specializing in modern web interfaces. Believes great design drives user engagement.",
        image: "/images/team/member3.png",
    },
    {
        name: "Emma Williams",
        role: "Sales Specialist",
        description: "Sales professional turned product evangelist. Understands the challenges sales teams face every day.",
        image: "/images/team/member4.png",
    },
    {
        name: "David Park",
        role: "Data Scientist",
        description: "AI researcher focused on conversational AI and natural language processing. PhD in Machine Learning.",
        image: "/images/team/member5.png",
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
                                        className="w-full h-full object-cover"
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
