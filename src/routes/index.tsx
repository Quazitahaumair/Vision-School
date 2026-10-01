import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  GraduationCap,
  Heart,
  Users,
  Sparkles,
  Award,
  ShieldCheck,
  Star,
  Quote,
  Compass,
  Cpu,
  Headphones,
  Briefcase,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-braille.jpg";
import classroomImg from "@/assets/classroom.jpg";
import careImg from "@/assets/care.jpg";
import { school } from "@/data/school";
import { TextParallaxContent } from "@/components/ui/text-parallax-content-scroll";
import { SectionShiftingWrapper } from "@/components/site/SectionShiftingWrapper";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import ScrollExpand from "@/components/ui/ScrollExpand";
import {
  FullLogo,
  LogoIconMark,
  LogoWordmark,
  LogoShapeWatermark,
  AnimatedLogoAssembly,
  LogoPatternBackground,
  Clay3DLogoMark,
} from "@/components/brand/VisionLogoSystem";
import {
  Clay3DBookStackMascot,
  Clay3DPuzzleInclusionMascot,
  Clay3DRocketGrowthMascot,
  Clay3DQuranLanternMascot,
} from "@/components/site/ClayMascots";

import {
  SketchedGraduationHatLogo,
  SketchedSchoolBuildingLogo,
  SketchedMapPinLogo,
  SketchedBackpackLogo,
  SketchedBlindLogo,
  SketchedDeafLogo,
  SketchedNonSpeakingLogo,
  SketchedCurvedDoodleArrow,
  SketchedOrganicBlobRing,
  SketchedDoodleTypography,
} from "@/components/site/VectorsAndAnimations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision School Pune | Every Vision. Every Possibility." },
      {
        name: "description",
        content:
          "Vision School is an inclusive, premium school experience in Pune with accessible learning, calm design and a strong sense of care.",
      },
      { property: "og:title", content: "Vision School Pune" },
      {
        property: "og:description",
        content:
          "A calm, editorial school website focused on accessibility, learning and student potential.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  {
    value: "15+",
    label: "Years of Service & Excellence",
    logo: <SketchedGraduationHatLogo className="size-20 sm:size-24 text-amber-500 transition-transform duration-300 group-hover:scale-110" />,
    color: "#D97706",
  },
  {
    value: `${school.states}`,
    label: "States Represented Across India",
    logo: <SketchedMapPinLogo className="size-20 sm:size-24 text-[#0EA5E9] transition-transform duration-300 group-hover:scale-110" />,
    color: "#0284C7",
  },
  {
    value: "100%",
    label: "Free Boarding & Education",
    logo: <SketchedSchoolBuildingLogo className="size-20 sm:size-24 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />,
    color: "#059669",
  },
  {
    value: school.students,
    label: "Empowered Students & Alumni",
    logo: <SketchedBackpackLogo className="size-20 sm:size-24 text-purple-500 transition-transform duration-300 group-hover:scale-110" />,
    color: "#7E22CE",
  },
];

const pillars = [
  {
    id: "01",
    pillarNo: "01",
    title: "Accessible Learning",
    subtitle: "PILLAR 01 • SENSORY & TECH INTEGRATION",
    heading: "Learning environments built around individual sensory & cognitive needs.",
    body: "Learning environments meticulously designed around individual sensory and cognitive needs, featuring advanced Braille, audio labs, and structured guidance.",
    highlights: [
      {
        title: "Tactile Tech",
        desc: "Advanced Braille & tactile displays",
        icon: <Cpu className="size-5" />,
      },
      {
        title: "Audio Books",
        desc: "Immersive digital sound libraries",
        icon: <Headphones className="size-5" />,
      },
      {
        title: "Sensory Rooms",
        desc: "Calm, structured focus spaces",
        icon: <Eye className="size-5" />,
      },
    ],
    icon: <BookOpen className="size-12 text-amber-500" />,
    badgeBg: "bg-amber-100 text-amber-950 border-amber-300",
    gradientRing: "from-amber-400 via-amber-500 to-amber-600",
    glowColor: "rgba(245, 158, 11, 0.25)",
    accentText: "text-amber-600",
    borderLeft: "border-amber-500",
    tagBadgeBg: "bg-amber-500 text-white shadow-amber-500/30",
    cardHover: "hover:border-amber-400/80 hover:shadow-amber-900/10",
    sparkleBg: "bg-amber-500/20 text-amber-700",
  },
  {
    id: "02",
    pillarNo: "02",
    title: "Inclusive Community",
    subtitle: "PILLAR 02 • EQUAL OPPORTUNITY & DIGNITY",
    heading: "A nurturing ecosystem where every student thrives together with dignity.",
    body: "A nurturing ecosystem where students from diverse backgrounds learn and thrive together with dignity, equal opportunity, and mutual respect.",
    highlights: [
      {
        title: "Peer Mentorship",
        desc: "Collaborative student buddies",
        icon: <HeartHandshake className="size-5" />,
      },
      {
        title: "Equal Access",
        desc: "100% barrier-free campus spaces",
        icon: <ShieldCheck className="size-5" />,
      },
      {
        title: "Holistic Care",
        desc: "Dedicated emotional & physical care",
        icon: <Heart className="size-5" />,
      },
    ],
    icon: <Users className="size-12 text-emerald-500" />,
    badgeBg: "bg-emerald-100 text-emerald-950 border-emerald-300",
    gradientRing: "from-emerald-400 via-emerald-500 to-emerald-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    accentText: "text-emerald-600",
    borderLeft: "border-emerald-500",
    tagBadgeBg: "bg-emerald-600 text-white shadow-emerald-500/30",
    cardHover: "hover:border-emerald-400/80 hover:shadow-emerald-900/10",
    sparkleBg: "bg-emerald-500/20 text-emerald-700",
  },
  {
    id: "03",
    pillarNo: "03",
    title: "Individual Potential",
    subtitle: "PILLAR 03 • AMBITION & INDEPENDENCE",
    heading: "Empowering each student's unique talents & career ambitions.",
    body: "Empowering each student's unique talents, independence, and career ambitions through patient mentorship and personalized academic pathways.",
    highlights: [
      {
        title: "Higher Studies",
        desc: "University entrance prep & guidance",
        icon: <GraduationCap className="size-5" />,
      },
      {
        title: "Life Skills",
        desc: "Independent living & confidence",
        icon: <Compass className="size-5" />,
      },
      {
        title: "Career Prep",
        desc: "Vocational training & mentorship",
        icon: <Briefcase className="size-5" />,
      },
    ],
    icon: <Sparkles className="size-12 text-blue-500" />,
    badgeBg: "bg-blue-100 text-blue-950 border-blue-300",
    gradientRing: "from-blue-400 via-sky-500 to-blue-600",
    glowColor: "rgba(59, 130, 246, 0.25)",
    accentText: "text-blue-600",
    borderLeft: "border-blue-500",
    tagBadgeBg: "bg-blue-600 text-white shadow-blue-500/30",
    cardHover: "hover:border-blue-400/80 hover:shadow-blue-900/10",
    sparkleBg: "bg-blue-500/20 text-blue-700",
  },
];

const campusStories = [
  {
    verb: "Learn.",
    badge: "Calm Environments",
    title: "Classrooms engineered for clarity and quiet focus.",
    copy:
      "Every school morning begins with clear sensory cues, accessible teaching aids, and an uplifting atmosphere where every student concentrates naturally.",
    image: "/Calm_Environment.png",
  },
  {
    verb: "Create.",
    badge: "Arts & Culture",
    title: "Islamic Learning & Creative Expression",
    copy:
      "Students grow through meaningful Islamic learning, Qur’an education, moral values, and creative activities. At Vision School, we nurture faith, character, confidence, and knowledge in an inclusive environment where every learner is encouraged to discover their abilities and develop their unique potential.",
    image: "/MEMORISE.png",
  },
  {
    verb: "Play.",
    badge: "Adaptive Sports",
    title: "Adaptive athletics, movement and team spirit.",
    copy:
      "Physical health and camaraderie thrive with adapted athletics, sound-guided sports, and vibrant outdoor play areas built for full accessibility.",
    image: "/Adaptive_Sports.png",
  },
  {
    verb: "Discover.",
    badge: "Tech Labs",
    title: "Assistive technology and digital exploration.",
    copy:
      "State-of-the-art computer labs equipped with screen readers, tactile displays, and digital audio libraries empower students to explore the modern digital world.",
    image: "/Tech_Labs.png",
  },
];

const testimonials = [
  {
    quote:
      "Vision School gave my daughter the confidence and academic foundation to dream big. The accessible learning tools and dedicated teachers treat every child with extraordinary care.",
    author: "Sunita Sharma",
    role: "Parent of Class 8 Student",
    rating: 5,
  },
  {
    quote:
      "Seeing my son master Braille with joy and participate in school musical performances has transformed our lives. It is not just a school—it is a supportive family.",
    author: "Rajesh Kulkarni",
    role: "Parent of Class 5 Student",
    rating: 5,
  },
  {
    quote:
      "The atmosphere of dignity, equality, and high academic standards makes Vision School a shining beacon of inclusive education in India.",
    author: "Dr. Ananya Deshmukh",
    role: "Education Consultant",
    rating: 5,
  },
];



/* Organic Playful Editorial Design Helpers & Watermarks */

function BraillePatternSVG({ className = "" }: { className?: string }) {
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

function SignHandSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute select-none ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 60V35a5 5 0 0 1 10 0v20" />
      <path d="M40 55V25a5 5 0 0 1 10 0v30" />
      <path d="M50 55V28a5 5 0 0 1 10 0v27" />
      <path d="M60 55V38a5 5 0 0 1 10 0v22c0 15-12 25-27 25H38c-12 0-20-8-20-18v-8l12-14" />
    </svg>
  );
}

function OrganicWaveTopSVG({ fillClass = "fill-[#FFF9EE]" }: { fillClass?: string }) {
  return (
    <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mt-[1px]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 md:h-14 lg:h-16">
        <path d="M0,0 C300,85 600,15 900,60 C1050,85 1150,40 1200,0 L1200,0 L0,0 Z" className={fillClass}></path>
      </svg>
    </div>
  );
}

function OrganicWaveBottomSVG({ fillClass = "fill-[#FFF9EE]" }: { fillClass?: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -mb-[1px]">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 md:h-14 lg:h-16">
        <path d="M0,120 C300,35 600,105 900,60 C1050,35 1150,80 1200,120 L1200,120 L0,120 Z" className={fillClass}></path>
      </svg>
    </div>
  );
}

function GiantDecorativeLetter({ letter, className = "" }: { letter: string; className?: string }) {
  return (
    <motion.span
      animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute select-none font-display font-black leading-none opacity-[0.06] ${className}`}
    >
      {letter}
    </motion.span>
  );
}

function IslamicStarGeometry({ className = "" }: { className?: string }) {
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

function HugeQuoteWatermark({ className = "" }: { className?: string }) {
  return (
    <motion.span
      animate={{ y: [10, -10, 10], scale: [1, 1.05, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute select-none font-display font-black leading-none text-[#6EC6E8] opacity-[0.08] ${className}`}
    >
      “
    </motion.span>
  );
}

/* -------------------------------------------------------------------------- */
/* FAINT BACKGROUND GRAPHICS (4-8% OPACITY) & 3D CLAY MASCOT COLLECTION        */
/* Material: Soft matte clay, pastel sky blue (#6EC6E8) & warm yellow (#FFD86A)*/
/* -------------------------------------------------------------------------- */

function OversizedFaintLetterGraphic({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span
      animate={{ y: [-12, 12, -12], rotate: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute select-none font-display font-black leading-none uppercase tracking-widest text-[#24739B] opacity-[0.05] ${className}`}
    >
      {text}
    </motion.span>
  );
}

function IslamicFaintGeometryPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 select-none overflow-hidden opacity-[0.05] text-[#24739B] ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="islamic-geo-grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)" />
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="0" cy="100" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#islamic-geo-grid-pattern)" />
      </svg>
    </div>
  );
}

function Master3DClayHeroComposition({ className = "" }: { className?: string }) {
  return (
    <div className={`relative select-none ${className}`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6EC6E8]/30 via-[#FFD86A]/20 to-[#8FD3A7]/30 blur-3xl" />
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full h-full drop-shadow-[0_25px_40px_rgba(24,59,86,0.25)]"
      >
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* 3D School Backpack */}
          <rect x="90" y="110" width="140" height="150" rx="36" fill="#6EC6E8" stroke="#183B56" strokeWidth="6" />
          <rect x="110" y="155" width="100" height="85" rx="22" fill="#FFD86A" stroke="#183B56" strokeWidth="5" />
          <circle cx="160" cy="197" r="10" fill="#183B56" />
          <path d="M125 110 C125 85 195 85 195 110" fill="none" stroke="#183B56" strokeWidth="8" strokeLinecap="round" />

          {/* 3D Stack of Colorful Clay Books */}
          <g transform="translate(40, 190) rotate(-12)">
            <rect x="0" y="0" width="120" height="28" rx="8" fill="#8FD3A7" stroke="#183B56" strokeWidth="4" />
            <rect x="10" y="-22" width="110" height="24" rx="7" fill="#FFD86A" stroke="#183B56" strokeWidth="4" />
            <rect x="20" y="-42" width="100" height="22" rx="6" fill="#6EC6E8" stroke="#183B56" strokeWidth="4" />
            <path d="M80 -42 L80 -5 L72 -12 L64 -5 L64 -42" fill="#F29B8F" />
          </g>

          {/* 3D Globe Stand & Globe */}
          <g transform="translate(195, 140) rotate(8)">
            <circle cx="45" cy="45" r="42" fill="#6EC6E8" stroke="#183B56" strokeWidth="5" />
            <path d="M25 30 C35 20 65 30 55 55 C45 65 25 50 25 30 Z" fill="#8FD3A7" opacity="0.9" />
            <path d="M60 55 C70 50 80 60 70 75 C60 80 55 65 60 55 Z" fill="#8FD3A7" opacity="0.9" />
            <path d="M45 0 A46 46 0 0 1 45 90 L45 105 M25 105 L65 105" fill="none" stroke="#183B56" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* 3D Pencil Mascot */}
          <g transform="translate(70, 75) rotate(35)">
            <rect x="0" y="0" width="22" height="90" rx="6" fill="#FFD86A" stroke="#183B56" strokeWidth="4" />
            <polygon points="0,90 11,112 22,90" fill="#FFF8E8" stroke="#183B56" strokeWidth="4" />
            <polygon points="6,102 11,112 16,102" fill="#183B56" />
            <rect x="0" y="-14" width="22" height="14" rx="4" fill="#F29B8F" stroke="#183B56" strokeWidth="4" />
          </g>

          {/* Floating Inclusion Sign & Stars */}
          <motion.g
            animate={{ y: [-6, 6, -6], rotate: [-4, 4, -4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            transform="translate(25, 60)"
          >
            <circle cx="20" cy="20" r="22" fill="#FFF8E8" stroke="#183B56" strokeWidth="4" />
            <text x="20" y="27" textAnchor="middle" fontSize="20">🤟</text>
          </motion.g>

          <motion.g
            animate={{ y: [6, -6, 6], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            transform="translate(245, 75)"
          >
            <polygon points="15,0 19,10 30,12 22,20 24,31 15,25 6,31 8,20 0,12 11,10" fill="#FFD86A" stroke="#183B56" strokeWidth="3" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}



/* Friendly Cartoon Vectors & Illustrative Badges */

function BlindCartoonVector({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-12, 12, -12], rotate: [-3, 3, -3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    </motion.div>
  );
}

function DeafCartoonVector({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [12, -12, 12], rotate: [2, -2, 2] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    </motion.div>
  );
}

function NonSpeakingCartoonVector({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10], scale: [1, 1.04, 1] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
    </motion.div>
  );
}

/* NEW DEDICATED SECTION CARTOON MASCOTS & ANIMATIONS */

function HeroPencilOwlMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-15, 15, -15], rotate: [-4, 4, -4] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="#F6D74E" opacity="0.2" />
        {/* Cute Owl Body */}
        <ellipse cx="100" cy="115" rx="40" ry="45" fill="#2E65AD" />
        <ellipse cx="100" cy="122" rx="26" ry="30" fill="#FFFFFF" />
        {/* Owl Eyes */}
        <circle cx="85" cy="95" r="14" fill="#FFFFFF" stroke="#123B4A" strokeWidth="3" />
        <circle cx="115" cy="95" r="14" fill="#FFFFFF" stroke="#123B4A" strokeWidth="3" />
        <circle cx="87" cy="95" r="6" fill="#123B4A" />
        <circle cx="113" cy="95" r="6" fill="#123B4A" />
        {/* Beak & Graduation Cap */}
        <polygon points="100,103 94,112 106,112" fill="#F6D74E" />
        <polygon points="100,60 60,78 100,92 140,78" fill="#123B4A" />
        <rect x="90" y="55" width="20" height="8" fill="#F6D74E" />
        {/* Giant Pencil Mascot */}
        <rect x="140" y="80" width="18" height="60" rx="3" fill="#F6D74E" transform="rotate(25 140 80)" />
        <polygon points="140,140 148,155 133,148" fill="#FF9F9F" transform="rotate(25 140 80)" />
        {/* Floating Stars */}
        <path d="M40 50 L43 57 L50 58 L45 63 L46 70 L40 66 L34 70 L35 63 L30 58 L37 57 Z" fill="#F6D74E" />
        <path d="M165 40 L167 45 L172 46 L168 50 L169 55 L165 52 L161 55 L162 50 L158 46 L163 45 Z" fill="#2E65AD" />
      </svg>
    </motion.div>
  );
}

function PillarsRocketShieldMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [15, -15, 15], scale: [1, 1.05, 1] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="85" fill="#FFF5D6" opacity="0.6" />
        {/* Rocket Body */}
        <path d="M100 35 C120 70 125 120 120 145 L80 145 C75 120 80 70 100 35 Z" fill="#2E65AD" />
        <path d="M100 35 C110 60 112 100 110 145 L90 145 C88 100 90 60 100 35 Z" fill="#8FD8F5" />
        {/* Porthole */}
        <circle cx="100" cy="90" r="16" fill="#FFFFFF" stroke="#123B4A" strokeWidth="4" />
        <circle cx="100" cy="90" r="8" fill="#F6D74E" />
        {/* Fins */}
        <path d="M78 120 L55 150 L80 145 Z" fill="#FF2B75" />
        <path d="M122 120 L145 150 L120 145 Z" fill="#FF2B75" />
        {/* Flame Exhaust */}
        <polygon points="100,145 90,175 100,165 110,175" fill="#F6D74E" />
        <polygon points="100,145 94,162 100,158 106,162" fill="#FF2B75" />
      </svg>
    </motion.div>
  );
}

function AcademicGraduationOwlVector({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [-12, 12, -12], rotate: [-2, 2, -2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="85" fill="#F0F6FF" opacity="0.9" />
        {/* Open Book */}
        <path d="M35 125 C65 110 95 115 100 130 C105 115 135 110 165 125 L165 160 C135 145 105 150 100 162 C95 150 65 145 35 160 Z" fill="#FFFFFF" stroke="#2E65AD" strokeWidth="3" />
        {/* Braille Dots on Book */}
        <circle cx="55" cy="130" r="3" fill="#2E65AD" />
        <circle cx="70" cy="130" r="3" fill="#F6D74E" />
        <circle cx="55" cy="142" r="3" fill="#F6D74E" />
        <circle cx="130" cy="130" r="3" fill="#2E65AD" />
        <circle cx="145" cy="130" r="3" fill="#2E65AD" />
        <circle cx="145" cy="142" r="3" fill="#F6D74E" />
        {/* Wise Owl Head */}
        <circle cx="100" cy="75" r="36" fill="#2E65AD" />
        <circle cx="86" cy="72" r="13" fill="#FFFFFF" />
        <circle cx="114" cy="72" r="13" fill="#FFFFFF" />
        <circle cx="88" cy="72" r="5" fill="#123B4A" />
        <circle cx="112" cy="72" r="5" fill="#123B4A" />
        <polygon points="100,82 95,90 105,90" fill="#F6D74E" />
        {/* Graduation Cap */}
        <polygon points="100,35 62,50 100,62 138,50" fill="#123B4A" />
      </svg>
    </motion.div>
  );
}

function IslamicCrescentLanternVector({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [14, -14, 14], rotate: [3, -3, 3] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="85" fill="#EAF8FD" opacity="0.8" />
        {/* Crescent Moon */}
        <path d="M120 40 A60 60 0 1 0 160 140 A50 50 0 1 1 120 40 Z" fill="#F6D74E" />
        {/* Floating Ramadan Lantern Fanous */}
        <line x1="80" y1="20" x2="80" y2="60" stroke="#123B4A" strokeWidth="2" />
        <polygon points="80,60 65,75 95,75" fill="#2E65AD" />
        <rect x="70" y="75" width="20" height="30" fill="#F6D74E" stroke="#123B4A" strokeWidth="2" />
        <polygon points="80,115 65,105 95,105" fill="#2E65AD" />
        <circle cx="80" cy="90" r="5" fill="#FFFFFF" />
        {/* Islamic Geometric 8-point Star */}
        <rect x="135" y="65" width="20" height="20" fill="#2E65AD" transform="rotate(45 145 75)" opacity="0.9" />
        <rect x="135" y="65" width="20" height="20" fill="#F6D74E" transform="rotate(0 145 75)" opacity="0.9" />
      </svg>
    </motion.div>
  );
}



function TestimonialSpeechHeartVector({ className = "" }: { className?: string }) {
  return (
    <motion.div
      animate={{ y: [12, -12, 12], scale: [1, 1.05, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="85" fill="#8FD8F5" opacity="0.3" />
        {/* Speech Bubble */}
        <path d="M40 60 C40 40 60 30 100 30 C140 30 160 40 160 60 C160 80 140 90 105 90 L80 115 L85 90 C60 90 40 80 40 60 Z" fill="#FFFFFF" stroke="#2E65AD" strokeWidth="4" />
        {/* Beating Heart Icon Inside */}
        <path d="M100 72 C100 65 92 60 85 66 C78 60 70 65 70 72 C70 82 85 92 100 100 C115 92 130 82 130 72 C130 65 122 60 115 66 C108 60 100 65 100 72 Z" fill="#FF2B75" />
        {/* Star Badges */}
        <polygon points="150,115 153,122 160,123 155,128 156,135 150,132 144,135 145,128 140,123 147,122" fill="#F6D74E" />
        <polygon points="45,125 48,132 55,133 50,138 51,145 45,142 39,145 40,138 35,133 42,132" fill="#F6D74E" />
      </svg>
    </motion.div>
  );
}

function FloatingAccessibilityBadges() {
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

function AnimatedHeading({
  children,
  className = "",
  delay = 0,
  as: Component = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) {
  const MotionComponent = motion[Component];
  return (
    <MotionComponent
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

function AnimatedSubheading({
  children,
  className = "",
  delay = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedLogoInline({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "size-10 sm:size-12",
    md: "size-12 sm:size-16",
    lg: "size-16 sm:size-20",
  };

  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [0, 2, 0, -2, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.12, rotate: 4, filter: "drop-shadow(0 10px 20px rgba(110, 198, 232, 0.6))" }}
      className={`relative inline-block shrink-0 cursor-pointer align-middle ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/logo.png"
        alt="Vision School Logo"
        className="h-full w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
      />
    </motion.div>
  );
}

function ExtraordinaryScrollFade({
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScrollFadeText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function VisionScrollExpandCard({
  item,
}: {
  item: {
    title: string;
    badge: string;
    badgeColor: string;
    src: string;
    desc: string;
  };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center 45%"],
  });

  const cardWidth = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const cardRadius = useTransform(scrollYProgress, [0, 1], ["32px", "16px"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.0]);

  return (
    <div ref={containerRef} className="relative w-full py-4 flex flex-col items-center justify-center">
      <motion.div
        style={{
          width: cardWidth,
          borderRadius: cardRadius,
        }}
        className="relative overflow-hidden bg-white shadow-2xl border-2 border-[#6EC6E8]/40 transition-shadow duration-300 hover:shadow-3xl"
      >
        {/* 100% Fully Visible 3D Illustration Image */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
          <motion.img
            style={{ scale: imgScale }}
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover object-center"
          />
          {/* Subtle Bottom Scrim Gradient for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-6 sm:p-10" />

          {/* Clean Unboxed Card Overlay Text Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 max-w-3xl text-left space-y-2">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#6EC6E8] font-sans">
              {item.badge}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {item.title}
            </h3>
            <p className="text-base sm:text-xl text-[#EAF8FD] font-sans font-bold leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* 2. Our Vision Section (#FFF9EE Cream Canvas) */
function OurVisionSection() {
  const visionItems = [
    {
      title: "Seen & Valued",
      badge: "Inclusive Care",
      badgeColor: "bg-[#FFD86A]",
      src: "/Seen_Valued.png",
      desc: "Every child’s unique cognitive, sensory, and emotional needs are understood, nurtured, and celebrated.",
    },
    {
      title: "Heard & Empowered",
      badge: "Accessible Tech",
      badgeColor: "bg-[#6EC6E8]",
      src: "/Heard_Empowered.png",
      desc: "Through sign language, Braille, and assistive audio tech, every student expresses their ambitions without limits.",
    },
    {
      title: "Independent & Equipped",
      badge: "Life Skills",
      badgeColor: "bg-[#8FD3A7]",
      src: "/Independent_Equipped.png",
      desc: "Building self-confidence, practical life skills, and academic excellence for lifelong success.",
    },
  ];

  return (
    <section className="relative bg-[#FFF9EE] py-10 sm:py-14 md:py-16 overflow-hidden text-[#183B56]">
      {/* Logo Pattern Background Grid Watermark */}
      <LogoPatternBackground opacity={0.035} />

      {/* Oversized Deconstructed Logo Shape Watermark */}
      <LogoShapeWatermark opacity={0.03} className="-top-24 -left-32" />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <AnimatedHeading className="mt-0 font-display text-3xl font-extrabold leading-[1.15] text-[#183B56] sm:text-4xl md:text-5xl lg:text-6xl flex items-center justify-center gap-3">
            <LogoIconMark size="md" animated={true} />
            <span>
              <SketchedDoodleTypography style={{ color: "#183B56" }}>
                "Every learner has a voice. Every learner deserves an opportunity."
              </SketchedDoodleTypography>
            </span>
          </AnimatedHeading>
          <AnimatedSubheading className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl font-medium max-w-3xl mx-auto font-sans">
            <p>
              At Vision School Pune, we cultivate a nurturing educational sanctuary where barriers melt away and every student is empowered with dignity, accessible technology, and personalized care.
            </p>
          </AnimatedSubheading>
        </div>

        {/* Vision Scroll Expand Interactive Stages */}
        <div className="mt-8 space-y-10 max-w-6xl mx-auto">
          {visionItems.map((item) => (
            <VisionScrollExpandCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#EAF8FD]" />
    </section>
  );
}

/* 3. Milestones Section (Light Blue Canvas) */
function MilestonesSection() {
  const milestonesStats = [
    {
      value: "15+",
      label: "Years of Service & Excellence",
      logo: (
        <SketchedGraduationHatLogo className="size-20 sm:size-24 text-amber-500 transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#D97706",
    },
    {
      value: `${school.states}`,
      label: "States Represented Across India",
      logo: (
        <SketchedMapPinLogo className="size-20 sm:size-24 text-[#0EA5E9] transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#0284C7",
    },
    {
      value: "100%",
      label: "Free Boarding & Education",
      logo: (
        <SketchedSchoolBuildingLogo className="size-20 sm:size-24 text-emerald-500 transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#059669",
    },
    {
      value: school.students,
      label: "Empowered Students & Alumni",
      logo: (
        <SketchedBackpackLogo className="size-20 sm:size-24 text-purple-500 transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#7E22CE",
    },
  ];

  return (
    <section className="relative bg-[#EAF8FD] py-16 md:py-24 overflow-hidden text-slate-900">
      <div className="container-page relative z-10">
        <ScrollFadeText className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#176B87] mb-2 font-sans">
            Our Growing Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <SketchedDoodleTypography style={{ color: "#183B56" }}>
              Milestones that reflect our commitment
            </SketchedDoodleTypography>
          </h2>
        </ScrollFadeText>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {milestonesStats.map((stat, idx) => (
            <ExtraordinaryScrollFade key={stat.label} delay={idx * 0.1}>
              <div className="group relative flex flex-col items-center text-center p-4 hover:-translate-y-1 transition-all duration-300">
                {/* Top: Sketched Line-Art Vector Logo Icon */}
                <div className="mb-4 flex items-center justify-center">
                  {stat.logo}
                </div>

                {/* Middle: Giant Sketch Metric Value with Vibrant Color */}
                <div className="relative inline-block my-2">
                  <SketchedDoodleTypography
                    className="text-6xl sm:text-7xl lg:text-8xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </SketchedDoodleTypography>
                </div>

                {/* Label */}
                <p className="mt-2 font-display text-base sm:text-lg font-bold text-slate-800 leading-snug">
                  {stat.label}
                </p>
              </div>
            </ExtraordinaryScrollFade>
          ))}
        </div>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#FAF7F2]" />
    </section>
  );
}

/* 3. Inclusive Learning Section (#F4FBFF Ice Blue Canvas) */
function InclusiveLearningSection() {
  return (
    <section className="relative bg-[#F4FBFF] py-12 md:py-16 lg:py-20 overflow-hidden text-[#183B56]">
      {/* Oversized Deconstructed Logo Shape Watermark */}
      <LogoShapeWatermark opacity={0.035} className="-bottom-28 -right-36" />

      {/* 5% Opacity Oversized Single-Line Background Graphic */}
      <OversizedFaintLetterGraphic text="INCLUSION" className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[240px] top-6 left-1/2 -translate-x-1/2 whitespace-nowrap" />

      {/* Floating Accessibility Badges */}
      <FloatingAccessibilityBadges />

      {/* 3D Soft Clay Puzzle & Inclusion Mascot */}
      <Clay3DPuzzleInclusionMascot className="size-48 md:size-60 absolute top-12 right-12 z-20 pointer-events-none hidden lg:block" />

      <div className="container-page relative z-10">
        <ScrollFadeText className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#24739B]">
            Inclusive Learning Pathways
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15]">
            <SketchedDoodleTypography style={{ color: "#176B87" }}>
              Tailored Specialized Support for Every Child
            </SketchedDoodleTypography>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-xl font-medium font-sans">
            Designed to foster complete accessibility, visual communication, and independence.
          </p>
        </ScrollFadeText>

        {/* Organic Hand-Drawn Flowing Pathways */}
        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Connector Curved Scribble Arrows (Desktop) */}
          <div className="absolute top-16 left-[28%] z-0 hidden lg:block text-amber-400">
            <SketchedCurvedDoodleArrow className="w-28 h-12" />
          </div>
          <div className="absolute top-16 left-[62%] z-0 hidden lg:block text-sky-400">
            <SketchedCurvedDoodleArrow className="w-28 h-12" />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative z-10">
            {/* Pathway 1: BLIND */}
            <div className="group flex flex-col items-center text-center px-4 transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-6 flex items-center justify-center size-28">
                <SketchedOrganicBlobRing className="absolute size-36 text-amber-400" />
                <SketchedBlindLogo className="relative z-10 size-20 text-[#D97706] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-black relative inline-block">
                <SketchedDoodleTypography style={{ color: "#D97706" }}>
                  BLIND
                </SketchedDoodleTypography>
              </h3>
              <span className="mt-3 inline-block font-display font-extrabold text-xs uppercase tracking-widest text-amber-800">
                Tactile & Audio Pathways
              </span>
              <p className="mt-4 text-base leading-relaxed text-slate-700 font-display font-medium max-w-xs">
                Learning through{" "}
                <span className="font-extrabold text-slate-900">
                  Braille literacy
                </span>
                , tactile embossed graphics, screen readers, and rich{" "}
                <span className="font-extrabold text-slate-900">
                  digital audio labs
                </span>
                .
              </p>

            </div>

            {/* Pathway 2: DEAF (Slightly Staggered Center Column) */}
            <div className="group flex flex-col items-center text-center px-4 transition-all duration-300 hover:-translate-y-2 lg:translate-y-6">
              <div className="relative mb-6 flex items-center justify-center size-28">
                <SketchedOrganicBlobRing className="absolute size-36 text-sky-400" />
                <SketchedDeafLogo className="relative z-10 size-20 text-[#0284C7] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-black relative inline-block">
                <SketchedDoodleTypography style={{ color: "#0284C7" }}>
                  DEAF
                </SketchedDoodleTypography>
              </h3>
              <span className="mt-3 inline-block font-display font-extrabold text-xs uppercase tracking-widest text-sky-800">
                Visual Communication
              </span>
              <p className="mt-4 text-base leading-relaxed text-slate-700 font-display font-medium max-w-xs">
                Learning through{" "}
                <span className="font-extrabold text-slate-900">
                  Indian Sign Language (ISL)
                </span>
                , visual storytelling, and real-time{" "}
                <span className="font-extrabold text-slate-900">
                  speech-to-text subtitles
                </span>
                .
              </p>

            </div>

            {/* Pathway 3: NON-SPEAKING */}
            <div className="group flex flex-col items-center text-center px-4 transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-6 flex items-center justify-center size-28">
                <SketchedOrganicBlobRing className="absolute size-36 text-emerald-400" />
                <SketchedNonSpeakingLogo className="relative z-10 size-20 text-[#059669] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-4xl sm:text-5xl font-black relative inline-block">
                <SketchedDoodleTypography style={{ color: "#059669" }}>
                  NON-SPEAKING
                </SketchedDoodleTypography>
              </h3>
              <span className="mt-3 inline-block font-display font-extrabold text-xs uppercase tracking-widest text-emerald-800">
                Alternative Communication
              </span>
              <p className="mt-4 text-base leading-relaxed text-slate-700 font-display font-medium max-w-xs">
                Learning through{" "}
                <span className="font-extrabold text-slate-900">
                  AAC devices
                </span>
                , expressive arts, symbol boards, and{" "}
                <span className="font-extrabold text-slate-900">
                  assistive technology
                </span>
                .
              </p>

            </div>
          </div>
        </div>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#FAF7F2]" />
    </section>
  );
}

const visionFrameworkItems = [
  {
    letter: "V",
    title: "Value Every Student",
    description: "Every student is unique, capable, and deserving of equal opportunities.",
    color: "#D97706",
  },
  {
    letter: "I",
    title: "Inclusion for All",
    description: "Creating an environment where every child feels accepted, respected, and supported.",
    color: "#0284C7",
  },
  {
    letter: "S",
    title: "Support & Strength",
    description: "Providing the right education, care, guidance, and confidence to help students grow.",
    color: "#059669",
  },
  {
    letter: "I",
    title: "Inspire to Learn",
    description: "Encouraging students to discover their abilities, develop skills, and dream bigger.",
    color: "#7E22CE",
  },
  {
    letter: "O",
    title: "Opportunity to Grow",
    description: "Opening doors to education, independence, creativity, and a better future.",
    color: "#E11D48",
  },
  {
    letter: "N",
    title: "Nurturing Potential",
    description: "Helping every student recognize their potential and become confident individuals.",
    color: "#0D9488",
  },
];

function PillarsSection() {
  const leftItems = visionFrameworkItems.slice(0, 3);
  const rightItems = visionFrameworkItems.slice(3, 6);

  return (
    <section className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden text-slate-900">
      {/* Background Watermarks & Mascot Illustrations */}
      <PillarsRocketShieldMascot className="absolute top-8 left-8 size-96 opacity-15 pointer-events-none hidden sm:block" />
      <DeafCartoonVector className="absolute top-12 right-6 size-72 sm:size-[420px] opacity-10 pointer-events-none hidden sm:block" />
      <GiantDecorativeLetter letter="V" className="text-[300px] sm:text-[450px] lg:text-[550px] -top-24 -left-16 text-[#2E65AD]/5 pointer-events-none" />

      {/* Floating Animated Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 30, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-28 left-1/3 size-[500px] rounded-full bg-amber-300/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute -bottom-28 right-1/3 size-[500px] rounded-full bg-emerald-300/20 blur-3xl"
      />

      <div className="container-page relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <ScrollFadeText className="mx-auto max-w-3xl text-center mb-16 sm:mb-20 lg:mb-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#2E65AD]/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#2E65AD] mb-3 font-sans">
            <Sparkles className="size-3.5 text-[#2E65AD]" /> OUR FOUNDATIONAL V.I.S.I.O.N.
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.12]">
            <SketchedDoodleTypography style={{ color: "#123B4A" }}>
              The V.I.S.I.O.N. Framework
            </SketchedDoodleTypography>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 font-medium max-w-2xl mx-auto font-sans">
            Our commitment to every learner: Equal opportunity, dignified care, and an empowering path to bright futures.
          </p>
        </ScrollFadeText>

        {/* 3-Column Layout: Left (V, I, S), Center Image, Right (I, O, N) - Completely Boxless */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center max-w-7xl mx-auto">

          {/* Left Column: V, I, S (Open Editorial Flow) */}
          <div className="col-span-1 lg:col-span-4 space-y-10 sm:space-y-12">
            {leftItems.map((item, idx) => (
              <ExtraordinaryScrollFade key={item.title} delay={idx * 0.12}>
                <div className="group relative flex items-start gap-5 transition-transform duration-300 hover:translate-x-1">
                  {/* Sketched Lettermark Identifier */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <span className="font-display text-5xl sm:text-6xl font-black select-none leading-none" style={{ color: item.color }}>
                      {item.letter}
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color }} />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#123B4A] leading-tight group-hover:text-[#176B87] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ExtraordinaryScrollFade>
            ))}
          </div>

          {/* Center Column: Featured Image with Architectural Archway Mask & Floating Doodles */}
          <div className="col-span-1 lg:col-span-4 flex items-center justify-center my-6 lg:my-0">
            <ExtraordinaryScrollFade delay={0.25}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Background Rotating Sketched Organic Ring */}
                <SketchedOrganicBlobRing className="absolute -top-10 -left-10 size-44 text-amber-400/40 pointer-events-none animate-spin-slow hidden sm:block" />
                <SketchedOrganicBlobRing className="absolute -bottom-10 -right-10 size-44 text-sky-400/40 pointer-events-none animate-spin-slow hidden sm:block" />

                {/* Outer Glow Ring */}
                <div className="absolute -inset-4 rounded-t-full rounded-b-[3rem] bg-gradient-to-tr from-amber-400/30 via-sky-400/30 to-emerald-400/30 blur-2xl pointer-events-none" />

                {/* Archway Frame Container */}
                <div className="relative p-3 rounded-t-full rounded-b-[2.5rem] bg-white shadow-[0_25px_60px_rgba(18,59,74,0.16)] border-2 border-white/80 group">
                  <div className="relative overflow-hidden rounded-t-full rounded-b-[2rem]">
                    <img
                      src="/OUR FOUNDATION.png"
                      alt="Vision School Foundation Students"
                      className="w-full h-[420px] sm:h-[500px] lg:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent pointer-events-none" />


                  </div>
                </div>
              </div>
            </ExtraordinaryScrollFade>
          </div>

          {/* Right Column: I, O, N (Open Editorial Flow) */}
          <div className="col-span-1 lg:col-span-4 space-y-10 sm:space-y-12">
            {rightItems.map((item, idx) => (
              <ExtraordinaryScrollFade key={item.title} delay={(idx + 3) * 0.12}>
                <div className="group relative flex items-start gap-5 transition-transform duration-300 hover:translate-x-1">
                  {/* Sketched Lettermark Identifier */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    <span className="font-display text-5xl sm:text-6xl font-black select-none leading-none" style={{ color: item.color }}>
                      {item.letter}
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: item.color }} />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-[#123B4A] leading-tight group-hover:text-[#176B87] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ExtraordinaryScrollFade>
            ))}
          </div>

        </div>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#F0F6FF]" />
    </section>
  );
}

function AcademicExcellenceSection() {
  return (
    <section className="relative bg-[#F0F6FF] pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Background Cartoons & Floating Watermarks */}
      <AcademicGraduationOwlVector className="absolute top-10 right-10 size-80 opacity-25 pointer-events-none hidden md:block" />
      <BlindCartoonVector className="absolute top-10 left-6 size-80 opacity-15 pointer-events-none" />
      <DeafCartoonVector className="absolute bottom-10 right-6 size-80 opacity-15 pointer-events-none" />
      <GiantDecorativeLetter letter="S" className="text-[280px] md:text-[400px] -top-16 -right-12 text-blue-900/10" />

      {/* Audio Wave Watermark */}
      <svg className="pointer-events-none absolute left-10 top-1/3 size-64 text-blue-900/10 hidden lg:block select-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 100 Q 50 30, 80 100 T 140 100 T 200 100" />
        <path d="M20 120 Q 50 50, 80 120 T 140 120 T 200 120" />
      </svg>

      {/* Section Header */}
      <div className="container-page relative z-10 pb-6 sm:pb-8">
        <ScrollFadeText className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#2E65AD] mb-2 font-sans">
            Academic Excellence & Growth
          </span>
          <h2 className="mt-2 font-display text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
            <SketchedDoodleTypography style={{ color: "#2E65AD" }}>
              Structured learning engineered for maximum independence
            </SketchedDoodleTypography>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-xl font-medium font-sans">
            Our curriculums integrate national academic standards with specialized tactile, audio, and digital assistance.
          </p>
        </ScrollFadeText>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <TextParallaxContent
          imgUrl="/Secondary_Education.png"
          subheading="Grades 1–5 • Building Strong Foundations"
          heading="Primary Education"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-12 pt-6 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <span className="inline-block rounded-full bg-[#D7F1FA] px-3.5 py-1.5 text-xs font-bold text-[#2E65AD] border border-[#2E65AD]/30">
                Grades 1–5
              </span>
              <h3 className="mt-3 text-3xl font-extrabold text-slate-900 font-display">
                Building Strong Foundations
              </h3>
            </div>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-6 text-xl leading-relaxed text-slate-700 md:text-2xl font-display font-medium">
                Early literacy, numeracy, and tactile exploration are introduced with immense patience. Students build confidence through interactive Braille storytelling, sensory learning, and music.
              </p>
              <div className="mb-8 flex flex-wrap gap-2.5">
                {["Braille Literacy", "Audio Storytelling", "Tactile Mathematics"].map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#2E65AD]/20 bg-white/90 px-4 py-2 text-sm font-bold text-[#2E65AD] shadow-xs"
                  >
                    <CheckCircle2 className="size-4 text-[#F6D74E]" />
                    {feat}
                  </span>
                ))}
              </div>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-[#2E65AD] px-8 py-4 text-base font-black text-white transition-all hover:bg-slate-900 shadow-xl hover:-translate-y-1 font-sans"
              >
                Explore Program Details <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </TextParallaxContent>

        <TextParallaxContent
          imgUrl="/Primary_Education.png"
          subheading="Grades 6–10 • Preparing Students for Tomorrow"
          heading="Secondary Education"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-12 pt-6 md:grid-cols-12">
            <div className="col-span-1 md:col-span-4">
              <span className="inline-block rounded-full bg-[#D7F1FA] px-3.5 py-1.5 text-xs font-bold text-[#2E65AD] border border-[#2E65AD]/30">
                Grades 6–10
              </span>
              <h3 className="mt-3 text-3xl font-extrabold text-slate-900 font-display">
                Preparing Students for Tomorrow
              </h3>
            </div>
            <div className="col-span-1 md:col-span-8">
              <p className="mb-6 text-xl leading-relaxed text-slate-700 md:text-2xl font-display font-medium">
                Older students navigate rigorous academic curriculums integrated with assistive digital tools, preparing them for higher education entrance exams, competitive skills, and independent careers.
              </p>
              <div className="mb-8 flex flex-wrap gap-2.5">
                {["Digital Literacy", "STEM & Vocational", "Career Counseling"].map((feat) => (
                  <span
                    key={feat}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#2E65AD]/20 bg-white/90 px-4 py-2 text-sm font-bold text-[#2E65AD] shadow-xs"
                  >
                    <CheckCircle2 className="size-4 text-[#F6D74E]" />
                    {feat}
                  </span>
                ))}
              </div>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-[#2E65AD] px-8 py-4 text-base font-black text-white transition-all hover:bg-slate-900 shadow-xl hover:-translate-y-1 font-sans"
              >
                Explore Program Details <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </TextParallaxContent>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#FFF8E8]" />
    </section>
  );
}

function CampusStoryItem({ story, index }: { story: typeof campusStories[0]; index: number }) {
  return (
    <article
      className={`grid items-center gap-10 border-b border-[#2E65AD]/30 pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[0.9fr_1.1fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
        }`}
    >
      <ExtraordinaryScrollFade>
        <span className="inline-block text-xs font-black uppercase tracking-wider text-[#2E65AD] mb-1 font-sans">
          {story.badge}
        </span>
        <p className="mt-3 font-display text-6xl font-extrabold leading-none text-[#2E65AD] md:text-8xl">
          {story.verb}
        </p>
        <h3 className="mt-4 text-2xl font-bold text-[#123B4A] md:text-3xl lg:text-4xl font-display">
          {story.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg font-sans font-medium">
          {story.copy}
        </p>
      </ExtraordinaryScrollFade>

      <div className="w-full">
        <div
          className="relative overflow-hidden rounded-3xl border border-[#2E65AD]/30 bg-white shadow-xl h-[380px]"
        >
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 text-white" />
        </div>
      </div>
    </article>
  );
}

function CampusLifeSection() {
  return (
    <section className="relative bg-[#EAF8FD] text-slate-900 py-24 lg:py-32 overflow-hidden">
      <OrganicWaveTopSVG fillClass="fill-[#F0F6FF]" />
      {/* Background Cartoon Watermark */}
      <NonSpeakingCartoonVector className="absolute top-10 left-10 size-80 opacity-15 pointer-events-none" />
      <SignHandSVG className="absolute bottom-10 right-10 size-44 text-[#2E65AD]/15 pointer-events-none" />
      <GiantDecorativeLetter letter="O" className="text-[300px] md:text-[450px] -top-20 -left-12 text-[#2E65AD]/10" />

      {/* Ambient Floating Glowing Blobs */}
      <div className="pointer-events-none absolute top-1/4 right-10 size-[500px] rounded-full bg-[#2E65AD]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 size-[450px] rounded-full bg-[#8FD8F5]/25 blur-3xl" />

      <div className="container-page relative z-10">
        <ScrollFadeText className="max-w-3xl">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#2E65AD] mb-2 font-sans">
            Campus Experience
          </span>
          <AnimatedHeading className="mt-2 font-display text-4xl font-extrabold leading-[1.08] text-[#123B4A] md:text-5xl lg:text-6xl flex items-center gap-3">
            <LogoIconMark size="md" animated={true} />
            <span>
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                A Campus Full of Life
              </SketchedDoodleTypography>
            </span>
          </AnimatedHeading>
          <p className="mt-4 text-base text-slate-700 md:text-xl font-medium font-sans">
            Campus experience told through action & story.
          </p>
        </ScrollFadeText>

        <div className="mt-14 space-y-12">
          {campusStories.map((story, idx) => (
            <CampusStoryItem key={story.verb} story={story} index={idx} />
          ))}
        </div>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#EAF8FD]" />
    </section>
  );
}

const HERO_BANNERS = [
  {
    desktopSrc: "/Blind_Hero.png",
    mobileSrc: "/Blind_Hero_Mobile.png",
    alt: "Vision School Blind Students Specialized Learning Hero Banner",
    label: "Tactile Learning & Braille",
  },
  {
    desktopSrc: "/Dumb_Hero.png",
    mobileSrc: "/Dumb_Hero_Mobile.png",
    alt: "Vision School Hearing Impaired Hero Banner",
    label: "Sign Language Inclusion",
  },
  {
    desktopSrc: "/Mute_Hero.png",
    mobileSrc: "/Mute_Hero_Mobile.png",
    alt: "Vision School Speech Impaired Hero Banner",
    label: "Expressive Communication & Care",
  },
];

function HeroBannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all hero images on mount so there is zero delay or flicker on any device
  useEffect(() => {
    HERO_BANNERS.forEach((banner) => {
      const imgMobile = new Image();
      imgMobile.src = banner.mobileSrc;
      const imgDesktop = new Image();
      imgDesktop.src = banner.desktopSrc;
    });
  }, []);

  // 10-second rotation interval (resets on manual interaction)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_BANNERS.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0A192F]">
      {/* Mobile View (< md): Full-width Edge-to-Edge Uncropped Stacked Crossfade */}
      <div className="block md:hidden relative w-full h-auto">
        {HERO_BANNERS.map((banner, idx) => (
          <motion.div
            key={`mobile-banner-${banner.mobileSrc}`}
            initial={false}
            animate={{ opacity: currentIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`${currentIndex === idx ? "relative z-10" : "absolute inset-0 z-1"
              } w-full h-auto pointer-events-none`}
          >
            <img
              src={banner.mobileSrc}
              alt={banner.alt}
              width={1200}
              height={1600}
              className="w-full h-auto block"
            />
          </motion.div>
        ))}
      </div>

      {/* Desktop View (>= md): Fullscreen cover stacked absolute crossfade */}
      <div className="hidden md:block relative w-full md:h-[95vh] lg:h-screen">
        {HERO_BANNERS.map((banner, idx) => (
          <motion.div
            key={`desktop-banner-${banner.desktopSrc}`}
            initial={false}
            animate={{ opacity: currentIndex === idx ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: currentIndex === idx ? 10 : 1 }}
          >
            <img
              src={banner.desktopSrc}
              alt={banner.alt}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#102A43]/40 via-transparent to-black/30 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Manual Slide Navigation Buttons (Desktop Only: hidden on mobile < md) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 md:p-3.5 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 md:p-3.5 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots / Direct Selector */}
      <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
        {HERO_BANNERS.map((banner, idx) => (
          <button
            key={banner.desktopSrc}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? "w-7 sm:w-8 bg-[#F6D74E]" : "w-2.5 bg-white/50 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* 1. Hero Banner Section */}
      <section id="home-hero" className="relative w-full overflow-hidden bg-[#0A192F] pt-0">
        <HeroBannerCarousel />
        <OrganicWaveBottomSVG fillClass="fill-[#FFF9EE]" />
      </section>

      {/* 2. Our Vision Section (#FFF9EE Cream Canvas) */}
      <OurVisionSection />

      {/* 3. Milestones Section (#176B87 Rich Blue Canvas) */}
      <MilestonesSection />

      {/* 4. Core Educational Pillars & Approach (#FAF7F2 Warm Light Ivory) */}
      <PillarsSection />

      {/* 5. Academic Excellence Showcase (#F0F6FF Soft Sky Blue) */}
      <AcademicExcellenceSection />

      {/* 6. Campus Life Story Narrative (#EAF8FD Soft Sky Blue) */}
      <CampusLifeSection />

      {/* 9. Testimonials & Impact (#8FD8F5 Light Blue Identity) */}
      <section className="relative bg-[#EAF8FD] py-20 md:py-28 overflow-hidden text-slate-900">
        {/* Background Cartoons & Watermarks */}
        <TestimonialSpeechHeartVector className="absolute bottom-10 left-10 size-72 opacity-20 pointer-events-none hidden sm:block" />
        <NonSpeakingCartoonVector className="absolute top-10 right-10 size-80 opacity-15 pointer-events-none" />
        <BraillePatternSVG className="absolute bottom-10 left-10 size-40 text-[#2E65AD]/10 pointer-events-none" />
        <GiantDecorativeLetter letter="N" className="text-[280px] md:text-[400px] -top-16 -left-10 text-[#2E65AD]/10" />

        <div className="container-page relative z-10">
          <ScrollFadeText className="mx-auto max-w-2xl text-center">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-[#2E65AD] mb-2 font-sans">
              Parent & Student Voices
            </span>
            <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl lg:text-6xl">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Stories of Confidence & Transformation
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base text-slate-700 md:text-lg font-medium font-sans">
              Hear directly from our parents, students, and education partners about the Vision School experience.
            </p>
          </ScrollFadeText>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <ExtraordinaryScrollFade key={idx} delay={idx * 0.15}>
                <div
                  className="flex flex-col justify-between rounded-3xl border-2 border-[#2E65AD]/25 bg-white p-8 shadow-[0_10px_35px_rgba(46,101,173,0.08)] backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
                >
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-5 fill-[#F6D74E] text-amber-500" />
                      ))}
                    </div>
                    <Quote className="mt-4 size-8 text-[#2E65AD]/40" />
                    <p className="mt-2 text-base leading-relaxed text-slate-800 italic font-display font-medium">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="font-extrabold text-[#123B4A] font-display">{t.author}</p>
                    <p className="text-xs font-semibold text-[#2E65AD] font-sans">{t.role}</p>
                  </div>
                </div>
              </ExtraordinaryScrollFade>
            ))}
          </div>
        </div>

        <OrganicWaveBottomSVG fillClass="fill-[#2E65AD]" />
      </section>

      {/* 10. CTA Banner Section (#2E65AD Podar Prep Royal Blue) */}
      <section className="relative bg-[#2E65AD] text-white py-20 md:py-28 overflow-hidden">
        {/* Background Cartoons & Floating Watermarks */}
        <BlindCartoonVector className="absolute top-6 left-6 size-64 opacity-15 pointer-events-none" />
        <DeafCartoonVector className="absolute bottom-6 right-6 size-64 opacity-15 pointer-events-none" />

        <div className="container-page relative z-10 text-center max-w-3xl mx-auto">
          <ExtraordinaryScrollFade>
            <h2 className="font-display text-4xl font-extrabold leading-tight md:text-6xl">
              <SketchedDoodleTypography style={{ color: "#FFFFFF" }}>
                Let's Build a Future Where Everyone Belongs.
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue-100 md:text-2xl font-medium font-sans">
              Admissions open for the upcoming academic year with 100% scholarship options & accessible boarding facilities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-[#F6D74E] px-8 py-4 font-black text-slate-950 shadow-xl transition-all hover:bg-amber-300 hover:-translate-y-1 font-sans border-2 border-amber-300"
              >
                Apply Online Now <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 font-black text-white transition-all hover:bg-white/20 font-sans"
              >
                Contact Admissions
              </Link>
            </div>
          </ExtraordinaryScrollFade>
        </div>

        <OrganicWaveBottomSVG fillClass="fill-[#EBF4FE]" />
      </section>
    </>
  );
}
