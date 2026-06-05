"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
const [scroll, setScroll] = useState(0);

useEffect(() => {
const updateScroll = () => {
const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

  const progress =
    (window.scrollY / totalHeight) * 100;

  setScroll(progress);
};

window.addEventListener(
  "scroll",
  updateScroll
);

return () =>
  window.removeEventListener(
    "scroll",
    updateScroll
  );


}, []);

return (
  <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-white/5 backdrop-blur-sm">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_1px_10px_rgba(20,200,232,0.6)] transition-all duration-100 ease-out"
      style={{
        width: `${scroll}%`,
      }}
    />
  </div>
);
}
