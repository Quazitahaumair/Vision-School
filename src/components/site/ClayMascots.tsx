import { motion } from "framer-motion";
import React from "react";
import "./ClayMascots.css";


export function Clay3DBookStackMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`relative select-none drop-shadow-[0_15px_30px_rgba(24,59,86,0.2)] ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="25" y="105" width="110" height="26" rx="8" fill="#8FD3A7" stroke="#183B56" strokeWidth="4" />
        <rect x="32" y="82" width="100" height="24" rx="7" fill="#FFD86A" stroke="#183B56" strokeWidth="4" />
        <rect x="40" y="60" width="90" height="22" rx="6" fill="#6EC6E8" stroke="#183B56" strokeWidth="4" />
        <path d="M100 60 L100 95 L93 88 L86 95 L86 60" fill="#F29B8F" />
        <g transform="translate(95, 30) rotate(22)">
          <rect x="0" y="0" width="18" height="65" rx="5" fill="#FFD86A" stroke="#183B56" strokeWidth="3" />
          <polygon points="0,65 9,80 18,65" fill="#FFF8E8" stroke="#183B56" strokeWidth="3" />
          <polygon points="5,73 9,80 13,73" fill="#183B56" />
        </g>
      </svg>
    </motion.div>
  );
}

export function Clay3DPuzzleInclusionMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8], scale: [1, 1.04, 1] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      className={`relative select-none drop-shadow-[0_15px_30px_rgba(24,59,86,0.2)] ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M30 40 H70 V60 C70 70 85 70 85 60 V40 H125 V80 H105 C95 80 95 95 105 95 H125 V135 H85 V115 C85 105 70 105 70 115 V135 H30 V95 H50 C60 95 60 80 50 80 H30 Z" fill="#6EC6E8" stroke="#183B56" strokeWidth="5" />
        <circle cx="80" cy="50" r="14" fill="#FFD86A" stroke="#183B56" strokeWidth="4" />
        <circle cx="110" cy="88" r="14" fill="#8FD3A7" stroke="#183B56" strokeWidth="4" />
        <circle cx="80" cy="88" r="26" fill="#FFF8E8" stroke="#183B56" strokeWidth="4" />
        <text x="80" y="96" textAnchor="middle" fontSize="26">🤟</text>
      </svg>
    </motion.div>
  );
}

export function Clay3DRocketGrowthMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [10, -10, 10], rotate: [-2, 2, -2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`relative select-none drop-shadow-[0_15px_30px_rgba(24,59,86,0.2)] ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M80 20 C100 50 105 95 100 120 H60 C55 95 60 50 80 20 Z" fill="#6EC6E8" stroke="#183B56" strokeWidth="5" />
        <circle cx="80" cy="65" r="15" fill="#FFF8E8" stroke="#183B56" strokeWidth="4" />
        <circle cx="80" cy="65" r="7" fill="#FFD86A" />
        <path d="M60 100 L40 125 H60 Z" fill="#F29B8F" stroke="#183B56" strokeWidth="4" />
        <path d="M100 100 L120 125 H100 Z" fill="#F29B8F" stroke="#183B56" strokeWidth="4" />
        <polygon points="80,120 70,145 80,138 90,145" fill="#FFD86A" stroke="#183B56" strokeWidth="3" />
        <path d="M125 105 C115 90 135 80 145 95 C145 110 130 115 125 105 Z" fill="#8FD3A7" stroke="#183B56" strokeWidth="3" />
        <path d="M125 105 L125 125" stroke="#183B56" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export function Clay3DQuranLanternMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={`relative select-none drop-shadow-[0_15px_30px_rgba(24,59,86,0.2)] ${className}`}
    >
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M100 30 A50 50 0 1 0 130 115 A42 42 0 1 1 100 30 Z" fill="#FFD86A" stroke="#183B56" strokeWidth="5" />
        <line x1="60" y1="20" x2="60" y2="50" stroke="#183B56" strokeWidth="4" />
        <polygon points="60,50 45,65 75,65" fill="#6EC6E8" stroke="#183B56" strokeWidth="4" />
        <rect x="50" y="65" width="20" height="30" fill="#FFF8E8" stroke="#183B56" strokeWidth="4" />
        <polygon points="60,105 45,95 75,95" fill="#6EC6E8" stroke="#183B56" strokeWidth="4" />
        <circle cx="60" cy="80" r="5" fill="#FFD86A" />
        <rect x="110" y="45" width="18" height="18" rx="2" fill="#8FD3A7" stroke="#183B56" strokeWidth="3" transform="rotate(45 119 54)" />
        <rect x="110" y="45" width="18" height="18" rx="2" fill="#6EC6E8" stroke="#183B56" strokeWidth="3" transform="rotate(0 119 54)" />
      </svg>
    </motion.div>
  );
}
