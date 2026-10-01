import React from "react";
import { motion } from "framer-motion";
import "./VectorsAndAnimations.css";


export function BraillePatternSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute select-none ${className}`} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="50" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="80" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="20" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="80" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="80" cy="20" r="6" fill="currentColor" opacity="0.3" />
      <circle cx="80" cy="50" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="80" cy="80" r="6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function SignHandSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute select-none ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 60V35a5 5 0 0 1 10 0v20" />
      <path d="M40 55V25a5 5 0 0 1 10 0v30" />
      <path d="M50 55V28a5 5 0 0 1 10 0v27" />
      <path d="M60 55V38a5 5 0 0 1 10 0v22c0 15-12 25-27 25H38c-12 0-20-8-20-18v-8l12-14" />
    </svg>
  );
}

export function OrganicWaveTopSVG({ fillClass = "fill-[#FAF7F2]" }: { fillClass?: string }) {
  return (
    <div className="absolute -top-[2px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-14 lg:h-16 transform scale-y-[1.05] origin-top">
        <path d="M0,0 C150,90 350,-40 500,65 C650,150 900,10 1200,45 L1200,0 L0,0 Z" className={fillClass}></path>
      </svg>
    </div>
  );
}

export function OrganicWaveBottomSVG({ fillClass = "fill-[#FAF7F2]" }: { fillClass?: string }) {
  return (
    <div className="absolute -bottom-[2px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-14 lg:h-16 transform scale-y-[1.05] origin-bottom">
        <path d="M0,120 C300,30 600,110 900,40 C1050,10 1150,70 1200,120 L1200,120 L0,120 Z" className={fillClass}></path>
      </svg>
    </div>
  );
}

export function GiantDecorativeLetter({ letter, className = "" }: { letter: string; className?: string }) {
  return (
    <span className={`pointer-events-none absolute select-none font-display font-black leading-none opacity-[0.06] ${className}`}>
      {letter}
    </span>
  );
}

export function IslamicStarGeometry({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none flex items-center justify-center gap-4 opacity-[0.08] text-[#176B87] ${className}`}>
      <span>✦</span>
      <span className="h-[1px] w-12 bg-current" />
      <span>✦</span>
      <span className="h-[1px] w-12 bg-current" />
      <span>✦</span>
    </div>
  );
}

export function HugeQuoteWatermark({ className = "" }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute select-none font-display font-black leading-none text-[#4DB8E8] opacity-[0.08] ${className}`}>
      “
    </span>
  );
}

export function BlindCartoonVector({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none select-none ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#EAF8FD" opacity="0.8" />
      <path d="M40 100 A60 60 0 0 1 160 100" stroke="#4DB8E8" strokeWidth="3" strokeDasharray="6 6" opacity="0.6" />
      <path d="M25 100 A75 75 0 0 1 175 100" stroke="#176B87" strokeWidth="2" opacity="0.4" />
      <circle cx="100" cy="85" r="32" fill="#FFD978" opacity="0.9" />
      <path d="M62 85 C62 60 138 60 138 85" stroke="#176B87" strokeWidth="7" strokeLinecap="round" />
      <rect x="58" y="75" width="12" height="22" rx="6" fill="#176B87" />
      <rect x="130" y="75" width="12" height="22" rx="6" fill="#176B87" />
      <path d="M88 84 Q92 88 96 84" stroke="#123B4A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M104 84 Q108 88 112 84" stroke="#123B4A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M93 96 Q100 102 107 96" stroke="#123B4A" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="65" y="125" width="70" height="45" rx="8" fill="#FFFFFF" stroke="#4DB8E8" strokeWidth="3" />
      <circle cx="80" cy="138" r="3" fill="#176B87" />
      <circle cx="80" cy="150" r="3" fill="#4DB8E8" />
      <circle cx="95" cy="138" r="3" fill="#4DB8E8" />
      <circle cx="95" cy="150" r="3" fill="#176B87" />
      <circle cx="110" cy="138" r="3" fill="#176B87" />
      <circle cx="110" cy="150" r="3" fill="#4DB8E8" />
      <path d="M45 55 L47 60 L52 61 L48 65 L49 70 L45 67 L41 70 L42 65 Z" fill="#FFD978" />
      <path d="M155 50 L156 54 L160 55 L157 58 L158 62 Z" fill="#4DB8E8" />
    </svg>
  );
}

export function DeafCartoonVector({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none select-none ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#D7F1FA" opacity="0.8" />
      <circle cx="100" cy="80" r="32" fill="#FF9F9F" opacity="0.85" />
      <circle cx="88" cy="76" r="3.5" fill="#123B4A" />
      <circle cx="112" cy="76" r="3.5" fill="#123B4A" />
      <path d="M92 90 Q100 97 108 90" stroke="#123B4A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M55 130 C60 110 75 105 85 125" stroke="#176B87" strokeWidth="5" strokeLinecap="round" />
      <path d="M145 130 C140 110 125 105 115 125" stroke="#176B87" strokeWidth="5" strokeLinecap="round" />
      <rect x="50" y="140" width="100" height="32" rx="16" fill="#FFFFFF" stroke="#176B87" strokeWidth="2.5" />
      <text x="100" y="161" textAnchor="middle" fill="#176B87" fontSize="13" fontWeight="bold">
        🤟 Sign Language
      </text>
      <circle cx="148" cy="62" r="3" fill="#FFD978" />
    </svg>
  );
}

export function NonSpeakingCartoonVector({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none select-none ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="85" fill="#A9DFC4" opacity="0.5" />
      <circle cx="100" cy="80" r="32" fill="#A9DFC4" opacity="0.9" />
      <path d="M84 76 Q88 72 92 76" stroke="#123B4A" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="112" cy="76" r="3.5" fill="#123B4A" />
      <path d="M92 90 Q100 97 108 90" stroke="#123B4A" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="55" y="115" width="90" height="60" rx="10" fill="#FFFFFF" stroke="#176B87" strokeWidth="3" />
      <rect x="65" y="125" width="20" height="18" rx="4" fill="#FFD978" />
      <rect x="90" y="125" width="20" height="18" rx="4" fill="#FF9F9F" />
      <rect x="115" y="125" width="20" height="18" rx="4" fill="#8FD8F5" />
      <rect x="65" y="148" width="20" height="18" rx="4" fill="#8FD8F5" />
      <rect x="90" y="148" width="20" height="18" rx="4" fill="#FFD978" />
      <rect x="115" y="148" width="20" height="18" rx="4" fill="#A9DFC4" />
      <path d="M140 45 C140 38 132 35 125 42 C118 35 110 38 110 45 C110 55 125 65 125 65 C125 65 140 55 140 45 Z" fill="#FF9F9F" />
    </svg>
  );
}

export function FloatingAccessibilityBadges() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-8 flex items-center gap-2 rounded-2xl bg-white/80 border border-[#4DB8E8]/30 px-4 py-2 text-xs font-bold text-[#176B87] shadow-md backdrop-blur-sm hidden md:flex"
      >
        <span className="text-base">⠃⠌</span> Braille Literacy
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [3, -3, 3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 flex items-center gap-2 rounded-2xl bg-white/80 border border-[#4DB8E8]/30 px-4 py-2 text-xs font-bold text-[#176B87] shadow-md backdrop-blur-sm hidden md:flex"
      >
        <span className="text-base">🤟</span> Sign Language
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-12 flex items-center gap-2 rounded-2xl bg-white/80 border border-[#4DB8E8]/30 px-4 py-2 text-xs font-bold text-[#176B87] shadow-md backdrop-blur-sm hidden md:flex"
      >
        <span className="text-base">🎧</span> Audio Learning
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], rotate: [-2, 2, -2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 right-16 flex items-center gap-2 rounded-2xl bg-white/80 border border-[#4DB8E8]/30 px-4 py-2 text-xs font-bold text-[#176B87] shadow-md backdrop-blur-sm hidden md:flex"
      >
        <span className="text-base">💬</span> Expressive AAC
      </motion.div>
    </div>
  );
}

export function ExtraordinaryScrollFade({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 55, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFadeText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


/* 11. Hand-Sketched Line-Art Milestone Logos (Podar-Style Sketched Icons) */

export function SketchedGraduationHatLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Mortarboard Diamond Cap */}
      <polygon points="50,15 90,35 50,55 10,35" strokeDasharray="100" />
      <polygon points="50,18 86,35 50,52 14,35" opacity="0.5" strokeWidth="1.5" />
      {/* Cap Skull Underneath */}
      <path d="M25 43.5V65C25 74 36 82 50 82C64 82 75 74 75 65V43.5" strokeWidth="2.5" />
      <path d="M28 47V63C28 70 38 78 50 78C62 78 72 70 72 63V47" strokeWidth="1.2" opacity="0.4" />
      {/* Tassel String & Ball */}
      <path d="M85 38V68" strokeWidth="2.2" />
      <circle cx="85" cy="72" r="3.5" fill="currentColor" />
      <path d="M82 75L88 88M85 75V90M88 75L82 88" strokeWidth="2" />
    </svg>
  );
}

export function SketchedSchoolBuildingLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Flag Top Pole */}
      <path d="M50 10V28" strokeWidth="2.5" />
      <path d="M50 12L68 18L50 24" fill="currentColor" fillOpacity="0.2" strokeWidth="2" />
      {/* Central Roof Tower */}
      <path d="M38 28H62L58 40H42L38 28Z" />
      <circle cx="50" cy="34" r="3" strokeWidth="2" />
      {/* Main School Building Shell */}
      <rect x="18" y="40" width="64" height="48" rx="3" strokeWidth="2.5" />
      <rect x="22" y="44" width="56" height="40" rx="1" strokeWidth="1" opacity="0.4" />
      {/* Entrance Door */}
      <path d="M42 88V68C42 64 45 61 50 61C55 61 58 64 58 68V88" strokeWidth="2.5" />
      {/* Windows Grid */}
      <rect x="25" y="48" width="10" height="12" rx="1" strokeWidth="2" />
      <rect x="65" y="48" width="10" height="12" rx="1" strokeWidth="2" />
      <rect x="25" y="66" width="10" height="12" rx="1" strokeWidth="2" />
      <rect x="65" y="66" width="10" height="12" rx="1" strokeWidth="2" />
    </svg>
  );
}

export function SketchedMapPinLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer Map Pin Shape */}
      <path
        d="M50 15C33 15 20 28 20 45C20 68 45 88 50 92C55 88 80 68 80 45C80 28 67 15 50 15Z"
        strokeWidth="2.5"
      />
      {/* Inner Sketch Contour */}
      <path
        d="M50 20C36 20 25 31 25 45C25 64 46 81 50 85C54 81 75 64 75 45C75 31 64 20 50 20Z"
        strokeWidth="1.2"
        opacity="0.4"
      />
      {/* Center Pin Circle */}
      <circle cx="50" cy="43" r="10" strokeWidth="2.5" />
      <circle cx="50" cy="43" r="5" fill="currentColor" fillOpacity="0.3" />
      {/* Pulse Ripple Ground Base */}
      <ellipse cx="50" cy="92" rx="18" ry="4" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
    </svg>
  );
}

export function SketchedBackpackLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top Handle Loop */}
      <path d="M38 22C38 15 62 15 62 22" strokeWidth="2.5" />
      {/* Main Backpack Bag */}
      <rect x="22" y="22" width="56" height="66" rx="18" strokeWidth="2.5" />
      <rect x="25" y="25" width="50" height="60" rx="15" strokeWidth="1.2" opacity="0.4" />
      {/* Front Zipper Pocket */}
      <rect x="30" y="52" width="40" height="30" rx="6" strokeWidth="2.2" />
      <path d="M34 58H66" strokeWidth="2" />
      <circle cx="62" cy="58" r="2" fill="currentColor" />
      {/* Side Water Bottle Pockets / Straps */}
      <path d="M16 40V68C16 72 22 72 22 68V40" strokeWidth="2" />
      <path d="M84 40V68C84 72 78 72 78 68V40" strokeWidth="2" />
    </svg>
  );
}

export function SketchedQuranLanternLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top Hanger Ring */}
      <circle cx="50" cy="12" r="5" strokeWidth="2.5" />
      {/* Lantern Cap Dome */}
      <path d="M32 28C32 20 68 20 68 28" strokeWidth="2.5" />
      {/* Main Lantern Glass Body */}
      <path d="M32 28L25 55C25 65 38 72 50 72C62 72 75 65 75 55L68 28Z" strokeWidth="2.5" />
      <path d="M35 30L29 55C29 62 40 68 50 68C60 68 71 62 71 55L65 30Z" strokeWidth="1" opacity="0.4" />
      {/* Interior Glowing Flame Star */}
      <circle cx="50" cy="46" r="6" fill="currentColor" fillOpacity="0.4" />
      {/* Lantern Base */}
      <path d="M35 72H65V80C65 83 60 85 50 85C40 85 35 83 35 80V72Z" strokeWidth="2" />
      {/* Bottom Tassel */}
      <path d="M50 85V95" strokeWidth="2" />
    </svg>
  );
}

export function SketchedHandshakeHeartLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top Floating Heart */}
      <path d="M50 38C45 28 32 28 28 35C24 42 35 52 50 62C65 52 76 42 72 35C68 28 55 28 50 38Z" strokeWidth="2.2" fill="currentColor" fillOpacity="0.15" />
      {/* Supporting Hands Base Contour */}
      <path d="M20 70C30 82 70 82 80 70" strokeWidth="2.5" />
      <path d="M15 62C20 62 30 75 50 75C70 75 80 62 85 62" strokeWidth="2" />
    </svg>
  );
}

export function SketchedBlindLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Round Glasses Frame Contour */}
      <circle cx="32" cy="40" r="16" strokeWidth="2.5" />
      <circle cx="68" cy="40" r="16" strokeWidth="2.5" />
      <circle cx="32" cy="40" r="13" strokeWidth="1.2" opacity="0.4" />
      <circle cx="68" cy="40" r="13" strokeWidth="1.2" opacity="0.4" />
      {/* Glasses Bridge */}
      <path d="M48 40C48 36 52 36 52 40" strokeWidth="2.5" />
      {/* Glasses Side Arms */}
      <path d="M16 40H10" strokeWidth="2.5" />
      <path d="M84 40H90" strokeWidth="2.5" />
      {/* Tactile Braille Dots Grid Below */}
      <circle cx="28" cy="70" r="3" fill="currentColor" />
      <circle cx="42" cy="70" r="3" fill="currentColor" />
      <circle cx="58" cy="70" r="3" fill="currentColor" />
      <circle cx="72" cy="70" r="3" fill="currentColor" />
      <circle cx="28" cy="82" r="3" fill="currentColor" fillOpacity="0.4" />
      <circle cx="42" cy="82" r="3" fill="currentColor" />
      <circle cx="58" cy="82" r="3" fill="currentColor" />
      <circle cx="72" cy="82" r="3" fill="currentColor" fillOpacity="0.4" />
      {/* White Cane Diagonal Line */}
      <path d="M68 62L85 92" strokeWidth="3" />
      <circle cx="85" cy="92" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function SketchedDeafLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ear Outer Contour */}
      <path d="M42 20C28 20 20 32 20 48C20 68 36 82 48 82C56 82 62 76 62 68C62 58 52 56 46 56" strokeWidth="2.5" />
      <path d="M38 28C30 28 26 36 26 48C26 62 36 74 46 74" strokeWidth="1.2" opacity="0.4" />
      {/* Ear Canal Inner Detail */}
      <path d="M42 42C38 42 36 46 36 50C36 54 40 56 44 54" strokeWidth="2" />
      {/* Soundwave / Sign Wave Rings */}
      <path d="M68 32C74 38 74 62 68 68" strokeWidth="2.5" />
      <path d="M78 24C88 32 88 68 78 76" strokeWidth="2.5" />
      <path d="M88 16C100 28 100 72 88 84" strokeWidth="1.8" opacity="0.5" />
      {/* Sparkle Star */}
      <path d="M32 14L34 18L38 20L34 22L32 26L30 22L26 20L30 18Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  );
}

export function SketchedNonSpeakingLogo({ className = "size-20" }: { className?: string }) {
  return (
    <svg
      className={`select-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Heart Speech Bubble Outline */}
      <path d="M50 82L44 74C25 58 16 48 16 34C16 22 25 14 36 14C43 14 48 18 50 22C52 18 57 14 64 14C75 14 84 22 84 34C84 48 75 58 56 74L50 82Z" strokeWidth="2.5" />
      <path d="M50 76L45 69C28 54 20 45 20 34C20 25 27 18 36 18C42 18 47 21 50 26C53 21 58 18 64 18C73 18 80 25 80 34C80 45 72 54 55 69L50 76Z" strokeWidth="1" opacity="0.3" />
      {/* Tail Pointer */}
      <path d="M36 78L26 92L44 84" strokeWidth="2.2" />
      {/* Inside AAC Grid Symbol Dots / Heart Beats */}
      <circle cx="36" cy="38" r="4" fill="currentColor" />
      <circle cx="50" cy="38" r="4" fill="currentColor" />
      <circle cx="64" cy="38" r="4" fill="currentColor" />
      <path d="M34 50H66" strokeWidth="2" />
    </svg>
  );
}

export function SketchedCurvedDoodleArrow({ className = "w-24 h-12" }: { className?: string }) {
  return (
    <svg
      className={`select-none pointer-events-none ${className}`}
      viewBox="0 0 100 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 20 Q 50 5, 85 20" strokeDasharray="4 3" strokeWidth="2.5" />
      <path d="M76 12L88 21L78 28" strokeWidth="2.5" />
    </svg>
  );
}

export function SketchedOrganicBlobRing({ className = "size-36" }: { className?: string }) {
  return (
    <svg
      className={`select-none pointer-events-none ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M60 10 C90 8, 112 30, 110 60 C108 90, 88 112, 60 110 C30 108, 8 88, 10 60 C12 30, 30 12, 60 10Z"
        strokeDasharray="6 4"
        opacity="0.6"
      />
      <path
        d="M60 14 C86 12, 106 32, 104 60 C102 86, 84 106, 60 104 C34 102, 14 84, 16 60 C18 34, 34 16, 60 14Z"
        opacity="0.3"
      />
    </svg>
  );
}

export function SketchedDoodleStickerTag({
  children,
  icon,
  borderColor = "border-amber-400",
  bgColor = "bg-amber-50/90",
  textColor = "text-amber-950",
  rotate = "-rotate-1",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  rotate?: string;
}) {
  return (
    <div
      className={`group/tag inline-flex items-center gap-2 rounded-2xl ${bgColor} ${borderColor} ${textColor} ${rotate} px-4 py-2 shadow-sm border-2 border-dashed transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-md`}
    >
      {icon && <span className="shrink-0 transition-transform group-hover/tag:scale-110">{icon}</span>}
      <SketchedDoodleTypography className="text-base font-bold tracking-wide" style={{ color: "currentColor" }}>
        {children}
      </SketchedDoodleTypography>
    </div>
  );
}

/* 12. Hand-Drawn Sketch Typography with Doodle / Scribble Cross-Hatch Texture (NEWS & BLOG style) */

export function SketchedDoodleTypography({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`inline-block font-sketch font-bold tracking-wider text-[#24739B] ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
