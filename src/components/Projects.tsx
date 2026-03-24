import { useRef } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    letter: "T",
    title: "TaskFlow Engine",
    desc: "A distributed task scheduling system built for high-throughput environments.",
    tags: ["Java", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/taskflow",
    live: "https://taskflow.vercel.app",
  },
  {
    letter: "D",
    title: "DevBoard",
    desc: "A real-time collaborative dashboard for development teams with live metrics.",
    tags: ["React", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/yourusername/devboard",
    live: "https://devboard.vercel.app",
  },
  {
    letter: "C",
    title: "CodeVault",
    desc: "A secure code snippet manager with syntax highlighting and full-text search.",
    tags: ["TypeScript", "Next.js", "MySQL", "Tailwind"],
    github: "https://github.com/yourusername/codevault",
    live: "https://codevault.vercel.app",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-2">Things I've built</p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="btn-scroll">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="btn-scroll">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex-shrink-0 w-80 bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg mb-4">
                {p.letter}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
