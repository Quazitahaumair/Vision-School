import { motion } from "framer-motion";
import React from "react";
import "./VisionLogoSystem.css";


/* 1. Full Logo - Navigation & Main Branding */
export function FullLogo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const heightClasses = {
    sm: "h-9",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Vision School Full Logo"
        className={`${heightClasses[size]} w-auto object-contain drop-shadow-sm`}
      />
    </div>
  );
}

/* 2. Icon-Only Mark - Floating Badges, Buttons, Mobile UI */
export function LogoIconMark({
  className = "",
  size = "md",
  animated = false,
}: {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}) {
  const sizeClasses = {
    xs: "size-6",
    sm: "size-8",
    md: "size-12",
    lg: "size-16",
    xl: "size-24",
  };

  const Content = (
    <div className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <img
        src="/logo.png"
        alt="Vision School Icon Symbol"
        className="h-full w-full object-contain filter drop-shadow-[0_4px_10px_rgba(36,115,155,0.25)]"
      />
    </div>
  );

  if (!animated) return Content;

  return (
    <motion.div
      animate={{ y: [0, -5, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.1, rotate: 3 }}
      className="inline-block"
    >
      {Content}
    </motion.div>
  );
}

/* 3. Wordmark Only - Large Section Titles & Brand Statements */
export function LogoWordmark({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark" | "gradient";
}) {
  const colorMap = {
    light: "text-[#183B56]",
    dark: "text-white",
    gradient: "bg-gradient-to-r from-[#24739B] via-[#6EC6E8] to-[#183B56] bg-clip-text text-transparent",
  };

  return (
    <span className={`font-display font-black tracking-tight ${colorMap[variant]} ${className}`}>
      VISION <span className="text-[#24739B]">SCHOOL</span>
    </span>
  );
}

/* 4. Oversized Logo Shape Background Watermark */
export function LogoShapeWatermark({
  className = "",
  opacity = 0.04,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      style={{ opacity }}
      className={`pointer-events-none absolute select-none mix-blend-multiply ${className}`}
    >
      <img
        src="/logo.png"
        alt=""
        aria-hidden="true"
        className="size-[500px] sm:size-[700px] lg:size-[900px] object-contain rotate-[-12deg] filter grayscale contrast-125"
      />
    </div>
  );
}

/* 5. Animated Logo Assembly (Staggered Icon -> VISION -> SCHOOL -> Assembled) */
export function AnimatedLogoAssembly({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.18,
          },
        },
      }}
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
    >
      {/* Step 1: Symbol Separates & Floats */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.6, y: -20 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-[#6EC6E8]/30 blur-xl animate-pulse" />
        <img
          src="/logo.png"
          alt="Vision School Icon"
          className="relative z-10 size-20 sm:size-24 object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Step 2: VISION Wordmark Fades In */}
      <motion.span
        variants={{
          hidden: { opacity: 0, letterSpacing: "0.3em", y: 10 },
          visible: { opacity: 1, letterSpacing: "0.08em", y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-2xl sm:text-3xl font-black text-[#183B56] uppercase"
      >
        VISION
      </motion.span>

      {/* Step 3: SCHOOL Wordmark Fades In */}
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-sm sm:text-base font-bold uppercase text-[#24739B] tracking-[0.25em]"
      >
        PUNE • SPECIAL EDUCATION SANCTUARY
      </motion.span>
    </motion.div>
  );
}

/* 6. Logo Pattern Background Watermark Grid */
export function LogoPatternBackground({
  opacity = 0.035,
  className = "",
}: {
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      style={{ opacity }}
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}
    >
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2324739B' fill-opacity='0.6' fill-rule='evenodd'%3E%3Cpath d='M40 0l10 30h30l-24 18 9 32-25-20-25 20 9-32-24-18h30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

/* 7. 3D Clay Logo Mark (Matching Podar Prep 3D Clay Aesthetic) */
export function Clay3DLogoMark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = {
    sm: "size-20",
    md: "size-32 sm:size-40",
    lg: "size-48 sm:size-60",
  };

  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotateX: [0, 5, 0],
        rotateY: [0, 8, 0],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, rotateZ: 4 }}
      className={`relative inline-flex items-center justify-center ${sizeMap[size]} ${className}`}
    >
      {/* 3D Soft Clay Ambient Radial Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-6 rounded-full bg-slate-900/15 blur-lg" />

      {/* 3D Clay Container Card with Beveled Clay Inset */}
      <div className="relative z-10 flex size-full items-center justify-center rounded-[32px] bg-gradient-to-b from-white via-[#F4FBFF] to-[#E2F4FC] p-4 shadow-[inset_0_4px_12px_rgba(255,255,255,0.9),0_20px_40px_rgba(36,115,155,0.22)] border-2 border-[#6EC6E8]/40">
        <img
          src="/logo.png"
          alt="3D Clay Vision School Logo Mark"
          className="h-full w-full object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)]"
        />
      </div>
    </motion.div>
  );
}
