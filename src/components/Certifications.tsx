

import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const certs = [
  {
    title: "Build Generative AI Apps & Solutions (No-Code)",
    org: "Coursera / Project",
    date: "Aug 31, 2025",
    link: "https://drive.google.com/file/d/1RPSOqxIXwx0CXOWhFCvNQC4NeXQ38UrH/view",
  },
  {
    title: "Cloud Computing",
    org: "NPTEL",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/12nr8yYJikZTGwhpcrxwVN-Si2P3pRtaj/view",
  },
  {
    title: "Computational Theory & Finite Automata",
    org: "Academic",
    date: "Aug 14, 2025",
    link: "https://drive.google.com/file/d/1dcEkaKRaBNTQG0KT25tLP8ypxECO0yfB/view",
  },
  {
    title: "ChatGPT-4 Prompt Engineering & LLM",
    org: "AI Course",
    date: "Aug 17, 2025",
    link: "https://drive.google.com/file/d/1dS5rMpmZCIjWLHQXbhaoAeNF4k5qiJxD/view",
  },
  {
    title: "Data Structures & Algorithms",
    org: "Course",
    date: "July 24, 2025",
    link: "https://drive.google.com/file/d/1rKR0ZsVgocJNMdkHydBm3fw7czywVokY/view",
  },
  {
    title: "Java Programming",
    org: "Course",
    date: "May 2025",
    link: "https://drive.google.com/file/d/12GFf6S42dn8mpxRG8rE-heyNDa8l9clj/view",
  },
];

const education = [
  {
    period: "2023 – PRESENT",
    title: "B.Tech in Computer Science",
    school: "Lovely Professional University",
    desc: "Studied core computer science concepts including Data Structures & Algorithms, Object-Oriented Programming, Database Systems, and Web Development.",
  },
  {
    period: "2021 – 2023",
    title: "Senior Secondary Education",
    school: "Krishna Veni Junior College",
    desc: "Specialized in Mathematics, Physics, and Chemistry.",
  },
  {
    period: "2017 – 2021",
    title: "Matriculation",
    school: "Brilliant High School",
    desc: "Completed secondary education with a focus on core academics.",
  },
];

const Certifications = () => {
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
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        
        {/* Certificates */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Certificates
              </h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <span className="glow-dot" /> Professional certifications & achievements
              </p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="btn-scroll">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll("right")} className="btn-scroll">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {certs.map((c) => (
              <a
                key={c.title}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-72 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors relative"
              >
                <ExternalLink
                  size={14}
                  className="absolute top-4 right-4 text-muted-foreground"
                />

                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-3">
                  <Award size={18} />
                </div>

                <h3 className="font-semibold text-foreground text-sm">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-xs">{c.org}</p>
                <p className="text-primary text-xs font-semibold mt-1">
                  {c.date}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Education
          </h2>
          <p className="text-muted-foreground mt-2">My academic journey</p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10" />

          {education.map((e) => (
            <div key={e.title} className="relative pl-20 pb-12">
              <div className="absolute left-4 top-1 w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <Award size={16} />
              </div>

              <p className="text-primary text-xs font-semibold tracking-wider">
                {e.period}
              </p>
              <h3 className="text-foreground font-bold mt-1">{e.title}</h3>
              <p className="text-muted-foreground text-sm">{e.school}</p>
              <p className="text-muted-foreground text-sm mt-2">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Resume */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Download my detailed CV
          </p>

          <a
            href="/resume.pdf" // 👉 replace with your resume link
            download
            className="mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-lg"
          >
            ↓ Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
