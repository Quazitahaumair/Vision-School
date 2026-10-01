import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { school } from "@/data/school";
import {
  Users,
  GraduationCap,
  Target,
  ShieldCheck,
  Heart,
  ArrowRight,
  BookOpen,
  FileCheck,
  Building2,
  Calendar,
  Landmark,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  BlindCartoonVector,
  DeafCartoonVector,
  NonSpeakingCartoonVector,
  ExtraordinaryScrollFade,
  ScrollFadeText,
  GiantDecorativeLetter,
  OrganicWaveTopSVG,
  OrganicWaveBottomSVG,
  HugeQuoteWatermark,
  SketchedGraduationHatLogo,
  SketchedSchoolBuildingLogo,
  SketchedMapPinLogo,
  SketchedBackpackLogo,
  SketchedQuranLanternLogo,
  SketchedHandshakeHeartLogo,
  SketchedOrganicBlobRing,
  SketchedDoodleTypography,
} from "@/components/site/VectorsAndAnimations";
import {
  PillarsArchitecturalGridSVG,
  IndiaMapDotsPatternSVG,
  GovShieldWatermarkPatternSVG,
} from "@/components/site/AboutPagePatterns";
import {
  AnimatedLogoAssembly,
} from "@/components/brand/VisionLogoSystem";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Vision School & Rehabilitation Centre, Pune" },
      {
        name: "description",
        content:
          "Founded in 2013 by Mufti Raees Khan under the Anwar-E-Hidayat Trust, Vision School is Pune's first free residential institute for blind, deaf and mute children.",
      },
      { property: "og:title", content: "About Vision School, Pune" },
      {
        property: "og:description",
        content: "Our founding story, trust details, vision and student community.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function PillarsOrganicRiverShowcase() {
  const pillars = [
    {
      step: "01",
      tag: "PILLAR 01 • FULL SCHOLARSHIP",
      titleMain: "100% Free",
      titleHighlight: "Education",
      subtitle: "Tactile Learning Tools & Complete Financial Support",
      description:
        "Complete scholarship covering tuition, specialized Braille textbooks, tactile learning tools, screen-reader devices, and complete educational materials so no child is denied learning due to financial hardship.",
      ringColor: "text-[#1B7049]",
      tagStyle: "text-[#1B7049] bg-[#1B7049]/10 border-[#1B7049]/30",
      stepBg: "bg-[#1B7049] text-white",
      logo: <BookOpen className="size-20 text-[#1B7049]" />,
    },
    {
      step: "02",
      tag: "PILLAR 02 • 24/7 BOARDING & CARE",
      titleMain: "Residential",
      titleHighlight: "Boarding",
      subtitle: "Safe, Nutritious & Caring Campus Lodging",
      description:
        "Safe, comfortable year-round lodging, wholesome nutritious meals, 24/7 campus supervision, and specialized healthcare support for both boys and girls in a serene environment.",
      ringColor: "text-[#176B87]",
      tagStyle: "text-[#176B87] bg-[#176B87]/10 border-[#176B87]/30",
      stepBg: "bg-[#176B87] text-white",
      logo: <Heart className="size-20 text-[#176B87]" />,
    },
    {
      step: "03",
      tag: "PILLAR 03 • ETHICAL & CHARACTER DEVELOPMENT",
      titleMain: "Moral & Character",
      titleHighlight: "Excellence",
      subtitle: "Ethics, Compassion, Integrity & Leadership",
      description:
        "Cultivating strong moral integrity, empathetic leadership, personal resilience, and positive character building rooted in universal human values and community service.",
      ringColor: "text-amber-500",
      tagStyle: "text-amber-900 bg-amber-100 border-amber-300",
      stepBg: "bg-amber-600 text-white",
      logo: <SketchedHandshakeHeartLogo className="size-24 text-amber-600" />,
    },
    {
      step: "04",
      tag: "PILLAR 04 • LIFE AUTONOMY",
      titleMain: "Vocational &",
      titleHighlight: "Rehabilitation",
      subtitle: "Orientation, Mobility & Gainful Skillsets",
      description:
        "White-cane mobility orientation, spatial awareness training, independent daily living skills, braille typing, computer literacy, and practical vocational craftsmanship for self-reliance.",
      ringColor: "text-purple-500",
      tagStyle: "text-purple-900 bg-purple-100 border-purple-300",
      stepBg: "bg-purple-600 text-white",
      logo: <SketchedBackpackLogo className="size-24 text-purple-600" />,
    },
  ];

  return (
    <div className="relative max-w-5xl mx-auto py-8">
      {/* Hand-Drawn Wavy Snake Dashed Line SVG (Desktop Connector River) */}
      <svg
        className="absolute top-12 bottom-12 left-0 w-full h-[calc(100%-6rem)] pointer-events-none hidden md:block"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 800 1200"
      >
        <path
          d="M 250 100 C 650 300, 150 550, 550 750 C 950 950, 150 1100, 250 1200"
          stroke="#176B87"
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.35"
        />
      </svg>

      <div className="space-y-20 sm:space-y-32">
        {pillars.map((p, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ExtraordinaryScrollFade key={p.step} delay={idx * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row items-center gap-10 sm:gap-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* FLOATING LOGO EMBLEM (No Background Colors!) */}
                <div className="relative shrink-0 flex items-center justify-center size-48 sm:size-56 group">
                  {/* Outer Pulsing Blob Ring */}
                  <SketchedOrganicBlobRing
                    className={`absolute size-56 sm:size-64 ${p.ringColor} opacity-50 group-hover:opacity-90 group-hover:rotate-45 transition-all duration-700 pointer-events-none`}
                  />

                  {/* Floating Giant Step Number Watermark */}
                  <span className="absolute font-display font-black text-8xl sm:text-9xl text-[#176B87]/10 select-none">
                    {p.step}
                  </span>

                  {/* Pure Floating Logo (No background color) */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {p.logo}
                  </div>
                </div>

                {/* OPEN TYPOGRAPHY STORY (Zero Boxes!) */}
                <div
                  className={`flex-1 text-center ${
                    isEven ? "md:text-left" : "md:text-right"
                  } space-y-3`}
                >
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest border ${p.tagStyle} shadow-xs font-sans`}
                  >
                    <span>{p.tag}</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B4A] leading-tight">
                    <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                      {p.titleMain}{" "}
                      <span style={{ color: "#D97706" }}>{p.titleHighlight}</span>
                    </SketchedDoodleTypography>
                  </h3>

                  <p className="font-display font-bold text-base sm:text-lg text-[#176B87]">
                    {p.subtitle}
                  </p>

                  <p className="text-base sm:text-lg text-slate-700 font-medium font-sans leading-relaxed max-w-xl mx-auto md:mx-0">
                    {p.description}
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>
          );
        })}
      </div>
    </div>
  );
}

/* Dedicated Girls' Care & Guidance Section - 100% Boxless Organic Showcase */
function GirlsGuidanceSection() {
  const girlsFeatures = [
    {
      step: "01",
      tag: "CARE PILLAR 01 • SAFETY & PRIVACY",
      titleMain: "Protected Residential",
      titleHighlight: "Wing",
      subtitle: "24/7 Female Staff, Security & Homelike Peace",
      description:
        "Separate, gated residential quarters supervised 24/7 strictly by experienced female wardens, female support staff, and female caretakers to ensure total privacy, dignity, and barrier-free safety.",
      ringColor: "text-[#BE185D]",
      tagStyle: "text-[#BE185D] bg-[#BE185D]/10 border-[#BE185D]/30",
      logo: <SketchedSchoolBuildingLogo className="size-24 text-[#BE185D]" />,
      highlights: [
        "100% Female warden presence & care team",
        "Dedicated residential dining & study quarters",
        "Secure perimeter & privacy protocols",
      ],
    },
    {
      step: "02",
      tag: "CARE PILLAR 02 • EMPATHETIC GUIDANCE",
      titleMain: "Female Mentors &",
      titleHighlight: "Educators",
      subtitle: "Braille, ISL & One-on-One Counseling",
      description:
        "Specialized female Braille tutors, ISL sign-language teachers, and counselors who provide tailored academic instruction, psychological counseling, and emotional mentorship in a supportive sisterhood environment.",
      ringColor: "text-[#9D174D]",
      tagStyle: "text-[#9D174D] bg-[#9D174D]/10 border-[#9D174D]/30",
      logo: <SketchedHandshakeHeartLogo className="size-24 text-[#9D174D]" />,
      highlights: [
        "Certified female Braille & ISL instructors",
        "Sisterhood support circles",
        "Personalized emotional counseling",
      ],
    },
    {
      step: "03",
      tag: "CARE PILLAR 03 • TACTILE AUTONOMY",
      titleMain: "Tactile Hygiene &",
      titleHighlight: "Life Skills",
      subtitle: "Dignity Kits & Independent Care Orientation",
      description:
        "Specialized tactile orientation and practical workshops focusing on personal hygiene routines, spatial navigation inside dormitories, and independent daily living skills for young girls.",
      ringColor: "text-[#BE185D]",
      tagStyle: "text-[#BE185D] bg-[#BE185D]/10 border-[#BE185D]/30",
      logo: <SketchedBackpackLogo className="size-24 text-[#BE185D]" />,
      highlights: [
        "Free hygiene & dignity supplies",
        "Tactile spatial navigation inside dorms",
        "Self-care & health orientation",
      ],
    },
    {
      step: "04",
      tag: "CARE PILLAR 04 • SELF-RELIANT FUTURE",
      titleMain: "Empowerment &",
      titleHighlight: "Higher Studies",
      subtitle: "Board Exams, Crafts & University Sponsorship",
      description:
        "Inspiring female scholars to excel in state board exams, vocational tactile handicrafts, and providing 100% full financial sponsorship for college and university degrees.",
      ringColor: "text-[#831843]",
      tagStyle: "text-[#831843] bg-[#831843]/10 border-[#831843]/30",
      logo: <SketchedGraduationHatLogo className="size-24 text-[#831843]" />,
      highlights: [
        "100% Board exam coaching for girls",
        "Vocational tailoring & tactile crafts",
        "Full university degree sponsorship",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FFF0F5] via-[#FCE7F3] to-[#FFF5F8] py-20 sm:py-28 overflow-hidden text-slate-900">
      {/* Top Wave transition from Section 2 Origin Story (#FFF9EE) */}
      <OrganicWaveTopSVG fillClass="fill-[#FFF9EE]" />

      {/* Background Decorative Watermark Elements */}
      <GiantDecorativeLetter letter="G" className="text-[300px] sm:text-[450px] -top-20 -right-10 text-[#BE185D]/8 select-none pointer-events-none" />
      <div className="pointer-events-none absolute top-1/4 -left-20 size-[500px] rounded-full bg-[#FBCFE8]/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-100px] size-[450px] rounded-full bg-[#F472B6]/20 blur-3xl" />

      <div className="container-page relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <ScrollFadeText className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-0.5 w-8 bg-[#BE185D] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#BE185D] font-sans">
              Dedicated Female Welfare
            </span>
            <span className="h-0.5 w-8 bg-[#BE185D] rounded-full" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#831843]">
            <SketchedDoodleTypography style={{ color: "#831843" }}>
              Separate Facilities & Dedicated Care{" "}
              <span style={{ color: "#BE185D" }}>for Girls</span>
            </SketchedDoodleTypography>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-medium font-sans max-w-2xl mx-auto">
            Ensuring a safe, barrier-free, and highly supportive sanctuary where visually and hearing-impaired girls thrive with total privacy, female wardens, and specialized guidance.
          </p>
        </ScrollFadeText>

        {/* 100% BOXLESS ORGANIC RIVER SHOWCASE */}
        <div className="relative max-w-5xl mx-auto py-4">
          {/* Hand-Drawn Wavy Snake Dashed Line SVG (Desktop Connector River) */}
          <svg
            className="absolute top-12 bottom-12 left-0 w-full h-[calc(100%-6rem)] pointer-events-none hidden md:block"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 800 1200"
          >
            <path
              d="M 250 100 C 650 300, 150 550, 550 750 C 950 950, 150 1100, 250 1200"
              stroke="#BE185D"
              strokeWidth="3"
              strokeDasharray="8 8"
              opacity="0.35"
            />
          </svg>

          <div className="space-y-20 sm:space-y-28">
            {girlsFeatures.map((feat, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ExtraordinaryScrollFade key={feat.step} delay={idx * 0.15}>
                  <div
                    className={`relative flex flex-col md:flex-row items-center gap-10 sm:gap-16 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* FLOATING LOGO EMBLEM (Zero Background Boxes!) */}
                    <div className="relative shrink-0 flex items-center justify-center size-48 sm:size-56 group">
                      {/* Outer Pulsing Blob Ring */}
                      <SketchedOrganicBlobRing
                        className={`absolute size-56 sm:size-64 ${feat.ringColor} opacity-40 group-hover:opacity-80 group-hover:rotate-45 transition-all duration-700 pointer-events-none`}
                      />

                      {/* Floating Giant Step Number Watermark */}
                      <span className="absolute font-display font-black text-8xl sm:text-9xl text-[#BE185D]/10 select-none">
                        {feat.step}
                      </span>

                      {/* Pure Floating Hand-Drawn Logo */}
                      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {feat.logo}
                      </div>
                    </div>

                    {/* OPEN TYPOGRAPHY STORY (Zero Boxes!) */}
                    <div
                      className={`flex-1 text-center ${
                        isEven ? "md:text-left" : "md:text-right"
                      } space-y-3`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest border ${feat.tagStyle} shadow-xs font-sans`}
                      >
                        <span>{feat.tag}</span>
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#831843] leading-tight">
                        <SketchedDoodleTypography style={{ color: "#831843" }}>
                          {feat.titleMain}{" "}
                          <span style={{ color: "#BE185D" }}>{feat.titleHighlight}</span>
                        </SketchedDoodleTypography>
                      </h3>

                      <p className="font-display font-bold text-base sm:text-lg text-[#BE185D]">
                        {feat.subtitle}
                      </p>

                      <p className="text-base sm:text-lg text-slate-700 font-medium font-sans leading-relaxed max-w-xl mx-auto md:mx-0">
                        {feat.description}
                      </p>

                      {/* Open Highlights List (Zero boxes!) */}
                      <div className={`pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-extrabold text-slate-800 font-sans justify-center ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                        {feat.highlights.map((h, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5">
                            <CheckCircle2 className="size-4 text-[#BE185D]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ExtraordinaryScrollFade>
              );
            })}
          </div>
        </div>

        {/* Center Bottom Boxless Trust Statement */}
        <ExtraordinaryScrollFade delay={0.4} className="mt-20 max-w-3xl mx-auto text-center space-y-6">
          <div className="h-0.5 w-16 bg-[#BE185D]/30 mx-auto rounded-full" />
          <p className="font-display text-xl sm:text-2xl font-bold text-[#831843] italic leading-relaxed">
            "Empowering visually and hearing-impaired girls to live with dignity, self-reliance, and zero financial burden."
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-black uppercase tracking-wider text-[#BE185D] font-sans pt-2">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#BE185D]" /> 100% Free Safe Boarding
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="size-4 text-[#BE185D]" /> 24/7 Female Wardens
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="size-4 text-[#BE185D]" /> Higher Education Pathways
            </span>
          </div>
        </ExtraordinaryScrollFade>
      </div>

      {/* Bottom Wave transition to Section 3 Core Philosophy (#E8F5FF) */}
      <OrganicWaveBottomSVG fillClass="fill-[#E8F5FF]" />
    </section>
  );
}

function AboutPage() {
  return (
    <>
      {/* 1. Main Hero Banner Section (#0A192F Deep Space Navy) */}
      <section id="about-hero" className="relative w-full overflow-hidden bg-[#0A192F] pt-0">
        {/* Mobile View: Full Uncropped Mobile Banner Graphic (/About_Banner_Mobile.png) */}
        <div className="relative block w-full md:hidden bg-[#0A192F]">
          <img
            src="/About_Banner_Mobile.png"
            alt="Vision School About Hero Banner Mobile"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>

        {/* Desktop View: Full-Width Edge-to-Edge Banner Image (/About_Hero.png) */}
        <div className="relative hidden w-full md:block bg-[#0A192F]">
          <img
            src="/About_Hero.png"
            alt="Vision School About Hero Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>

        {/* Bottom Wave transition to Section 2 (#FFF9EE) */}
        <OrganicWaveBottomSVG fillClass="fill-[#FFF9EE]" />
      </section>

      {/* 2. Founding Origin Story (#FFF9EE Warm Sun-Glow Cream Canvas) */}
      <section className="relative bg-[#FFF9EE] py-20 sm:py-28 overflow-hidden text-slate-900">
        <GiantDecorativeLetter letter="O" className="text-[280px] sm:text-[400px] -top-16 -left-10 text-[#176B87]/10" />
        <HugeQuoteWatermark className="text-[260px] sm:text-[360px] top-10 right-10" />

        {/* Soft Amber Glow Radial */}
        <div className="pointer-events-none absolute -top-20 right-1/4 size-[400px] rounded-full bg-amber-200/25 blur-3xl" />

        <div className="container-page relative z-10 px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Story Content */}
            <ExtraordinaryScrollFade className="space-y-6 lg:col-span-7">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
                <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                  From a Street Corner to a{" "}
                  <span style={{ color: "#D97706" }}>Sanctuary of Dignity</span>
                </SketchedDoodleTypography>
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700 font-medium font-sans">
                <p>
                  The school was founded by <span className="font-extrabold text-[#123B4A]">{school.founder}</span>, a local mosque Imam, who turned to social welfare after encountering two visually impaired children begging on the streets of Pune. He spent seven months searching for a workable model, then began the institution with a single student.
                </p>
                <p>
                  Today, it is recognised as the first inclusive residential institution in Pune designed specifically to provide cost-free care, specialized boarding, and education to children with multiple sensory impairments — blind, deaf and mute.
                </p>
                <div className="border-l-4 border-l-[#176B87] pl-6 py-3 bg-[#176B87]/5 rounded-r-2xl">
                  <p className="font-display text-lg sm:text-xl font-bold text-[#123B4A] italic">
                    "Our mandate has never changed: complete empowerment and societal integration, shifting the perception of disabled children from dependent to self-reliant."
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>

            {/* Right Featured Image */}
            <ExtraordinaryScrollFade delay={0.2} className="lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                <img
                  src="/About_Hero.png"
                  alt="Teacher with students inside the Vision School campus"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B4A]/90 via-transparent to-transparent flex items-end p-6 text-white">
                  <div>
                    <p className="font-display text-xl font-bold">
                      Inclusive Campus Sanctuary
                    </p>
                    <p className="text-xs font-medium text-blue-100 font-sans mt-1">
                      Individualized Braille, sign language & tactile audio tools.
                    </p>
                  </div>
                </div>
              </div>
            </ExtraordinaryScrollFade>
          </div>
        </div>
      </section>

      {/* INDEPENDENT SECTION: Dedicated Girls' Care & Guidance Section (Placed directly below Origin Story) */}
      <GirlsGuidanceSection />

      {/* 3. Core Educational Philosophy (Deep Frost Ice Blue Canvas) */}
      <section className="relative bg-gradient-to-b from-[#E8F5FF] via-[#F4FBFF] to-[#DDF2FD] py-20 sm:py-28 lg:py-32 overflow-hidden text-slate-900">
        {/* Top Wave transition from Girls Guidance section (#FFF5F8) */}
        <OrganicWaveTopSVG fillClass="fill-[#FFF5F8]" />

        <PillarsArchitecturalGridSVG />
        <GiantDecorativeLetter letter="P" className="text-[280px] sm:text-[400px] -top-16 -right-10 text-[#176B87]/10" />

        {/* Ambient Cyan Blur Halos */}
        <div className="pointer-events-none absolute top-1/4 -left-20 size-[500px] rounded-full bg-[#6EC6E8]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 size-[450px] rounded-full bg-[#2E65AD]/15 blur-3xl" />

        <div className="container-page relative z-10 px-4 sm:px-6">
          <ScrollFadeText className="mx-auto max-w-3xl text-center mb-16">
            {/* Boxless Heading Accent Line */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#24739B] font-sans">
                Core Mission & Values
              </span>
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Built on 4 Pillars of Care &{" "}
                <span style={{ color: "#D97706" }}>Independence</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-medium font-sans">
              We focus on holistic growth—combining academic excellence, sensory assistance, and moral character.
            </p>
          </ScrollFadeText>

          {/* 100% BOXLESS ORGANIC RIVER SHOWCASE */}
          <PillarsOrganicRiverShowcase />
        </div>

        {/* Bottom Wave transition to Section 4 (#FAF7F2) */}
        <OrganicWaveBottomSVG fillClass="fill-[#FAF7F2]" />
      </section>

      {/* 4. Founder's Vision Quote Banner (#FAF7F2 Warm Light Ivory) */}
      <section className="relative bg-[#FAF7F2] py-20 sm:py-28 overflow-hidden text-slate-900">
        <HugeQuoteWatermark className="text-[260px] sm:text-[360px] top-10 left-10 opacity-10" />

        <div className="container-page relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ExtraordinaryScrollFade>
            <div className="inline-flex size-16 items-center justify-center rounded-full bg-[#176B87]/10 text-[#176B87] mb-6">
              <SketchedGraduationHatLogo className="size-10 text-[#176B87]" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-relaxed text-[#123B4A] italic">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                When a child learns to read Braille or communicate in sign language, an entire universe of{" "}
                <span style={{ color: "#D97706" }}>human dignity unlocks before them</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-6 font-display text-lg font-bold text-[#176B87]">
              — {school.founder}, Founder of Vision School Pune
            </p>
          </ExtraordinaryScrollFade>
        </div>

        {/* Bottom Wave transition to Section 5 (#EBF4FE) */}
        <OrganicWaveBottomSVG fillClass="fill-[#EBF4FE]" />
      </section>

      {/* 5. Trust & Governance Details (Soft Sky Slate Canvas) */}
      <section className="relative bg-gradient-to-b from-[#EBF4FE] via-[#D6EAFF] to-[#E2F0FE] py-20 sm:py-28 overflow-hidden text-slate-900">
        {/* Top Wave transition from Section 4 bottom color (#FAF7F2) */}
        <OrganicWaveTopSVG fillClass="fill-[#FAF7F2]" />

        <GovShieldWatermarkPatternSVG />
        <GiantDecorativeLetter letter="G" className="text-[280px] sm:text-[400px] -top-16 -left-10 text-[#176B87]/10" />

        <div className="container-page relative z-10 px-4 sm:px-6">
          <ScrollFadeText className="mx-auto max-w-3xl text-center mb-16">
            {/* Boxless Heading Accent Line */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#24739B] font-sans">
                Governance & Transparency
              </span>
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Trust & Registration{" "}
                <span style={{ color: "#D97706" }}>Credentials</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-medium font-sans">
              Operated under public trust regulations with complete transparency and compliance.
            </p>
          </ScrollFadeText>

          {/* 100% NON-BOX ORGANIC LAYOUT: Open Credential Stream */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Credential 1 */}
            <ExtraordinaryScrollFade delay={0.1}>
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#176B87] text-white shadow-lg">
                  <Building2 className="size-7" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#176B87] font-sans">
                    Public Trust Name
                  </span>
                  <p className="font-display text-xl font-black text-[#123B4A] mt-1">
                    {school.trust}
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>

            {/* Credential 2 */}
            <ExtraordinaryScrollFade delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
                  <FileCheck className="size-7" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-800 font-sans">
                    Government License Reg.
                  </span>
                  <p className="font-display text-xl font-black text-emerald-950 mt-1">
                    {school.trustReg}
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>

            {/* Credential 3 */}
            <ExtraordinaryScrollFade delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 shadow-lg">
                  <ShieldCheck className="size-7" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-900 font-sans">
                    Tax PAN Compliance
                  </span>
                  <p className="font-display text-xl font-black text-amber-950 mt-1">
                    {school.pan}
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>

            {/* Credential 4 */}
            <ExtraordinaryScrollFade delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-purple-700 text-white shadow-lg">
                  <Calendar className="size-7" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-purple-900 font-sans">
                    Established Year
                  </span>
                  <p className="font-display text-3xl font-black text-purple-950 mt-1">
                    {String(school.founded)}
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>
          </div>
        </div>

        {/* Bottom Wave transition to CTA Section (#E2F0FE) */}
        <OrganicWaveBottomSVG fillClass="fill-[#E2F0FE]" />
      </section>

      {/* 6. CTA Section (Light & Attractive Golden Sunshine Canvas with Top and Bottom Waves) */}
      <section className="relative bg-gradient-to-br from-[#FFF8E7] via-[#FFE8AB] to-[#FFD978] text-slate-900 py-24 sm:py-32 overflow-hidden">
        {/* Top wave filled with Section 5's bottom color (#E2F0FE) */}
        <OrganicWaveTopSVG fillClass="fill-[#E2F0FE]" />

        <BlindCartoonVector className="absolute top-6 left-6 size-64 opacity-15 pointer-events-none" />
        <DeafCartoonVector className="absolute bottom-6 right-6 size-64 opacity-15 pointer-events-none" />

        <div className="container-page relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
          {/* Animated Staggered Logo Entrance */}
          <AnimatedLogoAssembly className="mb-8" />

          <ExtraordinaryScrollFade>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Support a Child's Journey to{" "}
                <span style={{ color: "#D97706" }}>Self-Reliance</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base sm:text-xl leading-relaxed text-slate-700 font-medium font-sans">
              Your support provides Braille books, sign language training, assistive audio devices, and nutritious boarding for 200+ students.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#176B87] px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-[#123B4A] hover:-translate-y-1 font-sans text-lg"
              >
                Donate Now <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#176B87] bg-white/60 px-8 py-4 font-bold text-[#176B87] transition-all hover:bg-white font-sans text-lg shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </ExtraordinaryScrollFade>
        </div>

        {/* Bottom wave filled with Footer's top background color (#EBF4FE) */}
        <OrganicWaveBottomSVG fillClass="fill-[#EBF4FE]" />
      </section>
    </>
  );
}
