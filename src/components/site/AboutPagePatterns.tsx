import React from "react";
import "./AboutPagePatterns.css";


/* 1. Pillars Architectural Grid Lines Watermark */
export function PillarsArchitecturalGridSVG({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}>
      <svg className="w-full h-full opacity-[0.05] text-[#176B87]" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="100" y1="0" x2="100" y2="600" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        <line x1="300" y1="0" x2="300" y2="600" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        <line x1="500" y1="0" x2="500" y2="600" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        <line x1="700" y1="0" x2="700" y2="600" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        <circle cx="100" cy="150" r="40" stroke="currentColor" strokeWidth="2" />
        <circle cx="300" cy="300" r="50" stroke="currentColor" strokeWidth="2" />
        <circle cx="500" cy="450" r="40" stroke="currentColor" strokeWidth="2" />
        <circle cx="700" cy="150" r="60" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

/* 2. India Map Constellation Dots Pattern */
export function IndiaMapDotsPatternSVG({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}>
      <svg className="w-full h-full opacity-[0.06] text-amber-700" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Network Nodes */}
        <circle cx="200" cy="150" r="8" fill="currentColor" />
        <circle cx="350" cy="120" r="10" fill="currentColor" />
        <circle cx="500" cy="200" r="12" fill="currentColor" />
        <circle cx="650" cy="150" r="8" fill="currentColor" />
        <circle cx="800" cy="250" r="10" fill="currentColor" />
        <circle cx="300" cy="350" r="9" fill="currentColor" />
        <circle cx="450" cy="420" r="11" fill="currentColor" />
        <circle cx="600" cy="380" r="8" fill="currentColor" />
        {/* Connection Lines */}
        <line x1="200" y1="150" x2="350" y2="120" stroke="currentColor" strokeWidth="2" />
        <line x1="350" y1="120" x2="500" y2="200" stroke="currentColor" strokeWidth="2" />
        <line x1="500" y1="200" x2="650" y2="150" stroke="currentColor" strokeWidth="2" />
        <line x1="650" y1="150" x2="800" y2="250" stroke="currentColor" strokeWidth="2" />
        <line x1="350" y1="120" x2="300" y2="350" stroke="currentColor" strokeWidth="2" />
        <line x1="500" y1="200" x2="450" y2="420" stroke="currentColor" strokeWidth="2" />
        <line x1="650" y1="150" x2="600" y2="380" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

/* 3. Official Public Trust Governance Shield Seal Pattern */
export function GovShieldWatermarkPatternSVG({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}>
      <svg className="w-full h-full opacity-[0.05] text-blue-900" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(400, 300) scale(1.5)">
          <path d="M0 -100 L80 -50 V50 L0 100 L-80 50 V-50 Z" stroke="currentColor" strokeWidth="4" />
          <circle cx="0" cy="0" r="45" stroke="currentColor" strokeWidth="3" />
          <path d="M-20 0 L-5 15 L25 -15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
