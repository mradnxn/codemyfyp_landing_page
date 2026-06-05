"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(
          600px circle at ${position.x}px ${position.y}px,
          rgba(20,200,232,0.12),
          transparent 40%
        )`,
      }}
    />
  );
}