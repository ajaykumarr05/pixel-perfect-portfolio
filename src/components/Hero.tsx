import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, Code, Mail, Download } from "lucide-react";

const stats = [
  { value: "3", label: "PROJECTS BUILT" },
  { value: "350+", label: "DSA PROBLEMS" },
  { value: "5+", label: "CERTIFICATES" },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      {/* ✅ FIXED PADDING */}
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          {/* ✅ LIMIT WIDTH + SPACING */}
          <div className="max-w-xl space-y-4">
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-display">
              Ajay Kumar
            </h1>

            <p className="text-xl text-primary font-semibold">
              Backend Developer , Machine Learning Engineer
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate <strong className="text-foreground">Computer Science student</strong> at Lovely Professional University, specializing in Backend Development with a strong focus on the MERN stack.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I love building scalable, efficient applications — from real-time collaborative systems to complex workflows.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, I'm sharpening my <strong className="text-foreground">DSA skills</strong> and building impactful projects.
            </p>

            {/* 🔥 SOCIAL LINKS (DOT REMOVED) */}
            <div className="flex items-center gap-4 pt-2">
              
              <a
                href="https://github.com/ajaykumarr05"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ajaykumaryadav07/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://leetcode.com/u/ajaykumarryadav07/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 transition-all"
              >
                <Code size={20} />
              </a>
            </div>

            {/* 🔥 BUTTONS */}
            <div className="flex items-center gap-4 pt-4">
              
              <a
                href="/resume.pdf"
                download
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                Download CV
              </a>

              {/* ✅ FIXED EMAIL LINK */}
              <a
                href="mailto:ajaykumaronline.in@gmail.com"
                className="text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail size={18} />
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - PREMIUM AK */}
<div className="flex justify-center lg:justify-end items-center">
  <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">

    {/* 🔥 BACKGROUND BLUR GLOW */}
    <div className="absolute w-40 h-40 bg-primary/30 blur-3xl rounded-full animate-pulse" />

    {/* 🔄 OUTER ROTATING RING */}
    <div className="absolute w-full h-full rounded-full border border-primary/30 animate-spin-slow" />

    {/* 🔄 INNER ROTATING RING */}
    <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border border-primary/20 animate-spin-reverse" />

    {/* 💎 AK TEXT */}
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text z-10 drop-shadow-[0_0_25px_rgba(0,255,150,0.5)]">
      AK
    </h1>

  </div>
</div>

        {/* STATS */}
        <div className="flex justify-center gap-16 md:gap-24 mt-16 pt-8 border-t border-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
