const projects = [
  {
    letter: "T",
    title: "TaskFlow Engine",
    desc: "A distributed task scheduling system built for high-throughput environments.",
    tags: ["Java", "Redis", "PostgreSQL", "Docker"],
  },
  {
    letter: "D",
    title: "DevBoard",
    desc: "A real-time collaborative dashboard for development teams with live metrics.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
  },
  {
    letter: "C",
    title: "CodeVault",
    desc: "A secure code snippet manager with syntax highlighting and full-text search.",
    tags: ["TypeScript", "Next.js", "MySQL", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3">Things I've built</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div key={p.title} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg mb-4">
                {p.letter}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
