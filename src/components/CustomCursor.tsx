import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] w-6 h-6 rounded-full border-2 border-primary mix-blend-screen will-change-transform"
      style={{
        boxShadow:
          "0 0 15px hsl(160 100% 50% / 0.6), 0 0 30px hsl(160 100% 50% / 0.3)",
      }}
    />
  );
};

export default CustomCursor;
