// BubbleBackground.tsx
import React, { useEffect, useRef } from "react";

const BubbleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numBubbles = 15; // Number of bubbles you want
    const bubbles: HTMLDivElement[] = [];

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = Math.random() * 60 + 20; // Random size between 20px and 80px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubbles.push(bubble);
      containerRef.current?.appendChild(bubble);
    }

    return () => {
      // Cleanup on component unmount
      bubbles.forEach((bubble) => containerRef.current?.removeChild(bubble));
    };
  }, []);

  return <div className="bubble-background" ref={containerRef}></div>;
};

export default BubbleBackground;
