import { useState, useEffect } from "react";

const navItems = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (item: string) => {
    setActive(item);
    const el = document.getElementById(item.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-xl font-bold text-foreground">
          AK<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  active === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {active === item && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
