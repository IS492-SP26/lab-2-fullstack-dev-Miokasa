export function About() {
  const interests = [
    { icon: "coffee", label: "Coffee" },
    { icon: "camera", label: "Photography" },
    { icon: "plane", label: "Travel" },
    { icon: "code", label: "Coding" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I{"'"}m a passionate web developer and designer based in San Francisco.
              With over 5 years of experience, I{"'"}ve had the pleasure of working
              with startups and established businesses to bring their digital
              visions to life.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My approach combines clean, efficient code with thoughtful design to
              create websites that not only look great but also perform
              exceptionally. I believe that every project is an opportunity to
              solve problems and create meaningful experiences for users.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I{"'"}m not coding, you{"'"}ll find me exploring new coffee shops,
              capturing moments through my camera, or planning my next adventure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Things I Enjoy
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <InterestIcon type={item.icon} />
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InterestIcon({ type }: { type: string }) {
  const iconClass = "w-6 h-6 text-primary";

  switch (type) {
    case "coffee":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h1a4 4 0 110 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm5-4v4m4-4v4" />
        </svg>
      );
    case "camera":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "plane":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "code":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
