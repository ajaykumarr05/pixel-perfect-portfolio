import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, Code, Mail, Download } from "lucide-react";

const stats = [
  { value: "2+", label: "PROJECTS BUILT" },
  { value: "350+", label: "DSA PROBLEMS" },
  { value: "4+", label: "CERTIFICATES" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 font-display">
              Ajay Kumar
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">ML Engineer |</p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate <strong className="text-foreground">Computer Science student</strong> at Lovely Professional University, specializing in Full Stack Web Development with a strong focus on the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I love building scalable, efficient applications — from real-time collaborative coding platforms to civic issue management systems with complex role-based workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, I'm sharpening my <strong className="text-foreground">DSA skills</strong>, exploring new frameworks, or working on meaningful projects that make a difference.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="glow-dot" />
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Code size={20} /></a>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Download size={18} /> Download CV
              </button>
              <button className="text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={18} /> Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 glow-border" />
              <img
                src={profileImg}
                alt="Ajay Kumar"
                width={384}
                height={384}
                className="w-full h-full rounded-full object-cover border-2 border-primary/50"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-16 md:gap-24 mt-16 pt-8 border-t border-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
