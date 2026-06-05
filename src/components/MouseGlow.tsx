"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
const [position, setPosition] = useState({
x: 0,
y: 0,
});

useEffect(() => {
const updateMouse = (e: MouseEvent) => {
setPosition({
x: e.clientX,
y: e.clientY,
});
};

window.addEventListener(
  "mousemove",
  updateMouse
);

return () =>
  window.removeEventListener(
    "mousemove",
    updateMouse
  );


}, []);

return ( <div
   className="pointer-events-none fixed inset-0 z-0"
   aria-hidden="true"
 >
<div
className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
style={{
left: position.x - 250,
top: position.y - 250,
background:
"radial-gradient(circle, rgba(20,200,232,0.15) 0%, rgba(124,58,237,0.10) 50%, transparent 80%)",
transition:
"left 0.15s linear, top 0.15s linear",
}}
/> </div>
);
}
