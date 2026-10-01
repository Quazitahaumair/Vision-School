import React, { useEffect, useRef, useState } from "react";
import "./SectionShiftingWrapper.css";


export function SectionShiftingWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const currentDist = windowHeight - rect.top;
      const totalDist = windowHeight * 0.85;
      const rawProgress = Math.max(0, Math.min(1, currentDist / totalDist));
      setProgress(rawProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = (-1 + progress) * 35;
  const overlayOpacity = Math.max(0, (1 - progress) * 0.45);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div
        className="relative z-10 w-full transition-transform duration-100 will-change-transform"
        style={{
          transform: `translate3d(0, ${translateY}px, 0)`,
        }}
      >
        {children}
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-black transition-opacity duration-100"
        style={{
          opacity: overlayOpacity,
        }}
      />
    </div>
  );
}
