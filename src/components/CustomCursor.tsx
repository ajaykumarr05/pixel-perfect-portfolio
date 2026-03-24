// import { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [pos, setPos] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed z-[9999] w-6 h-6 rounded-full border-2 border-primary mix-blend-screen"
//       style={{
//         left: pos.x - 12,
//         top: pos.y - 12,
//         boxShadow: "0 0 15px hsl(160 100% 50% / 0.6), 0 0 30px hsl(160 100% 50% / 0.3)",
//         transition: "left 0.08s ease-out, top 0.08s ease-out",
//       }}
//     />
//   );
// };

// export default CustomCursor;
