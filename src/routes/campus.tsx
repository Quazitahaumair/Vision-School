import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Footprints,
  Utensils,
  Shirt,
  HeartPulse,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Heart,
  Sparkles,
  Users,
  Building2,
  Shield,
  Smile,
  Compass,
  BookOpen,
} from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import { school } from "@/data/school";
import {
  BlindCartoonVector,
  DeafCartoonVector,
  ExtraordinaryScrollFade,
  ScrollFadeText,
  GiantDecorativeLetter,
  OrganicWaveTopSVG,
  OrganicWaveBottomSVG,
  SketchedSchoolBuildingLogo,
  SketchedHandshakeHeartLogo,
  SketchedOrganicBlobRing,
  SketchedGraduationHatLogo,
  SketchedBackpackLogo,
  SketchedDoodleTypography,
} from "@/components/site/VectorsAndAnimations";
import { AnimatedLogoAssembly } from "@/components/brand/VisionLogoSystem";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus & Care | Vision School & Rehabilitation Centre, Pune" },
      {
        name: "description",
        content:
          "Barrier-free campus in Kondhwa Khurd with wheelchair access, free boarding, meals, clothing, medical checkups and safety gear for residential students.",
      },
      { property: "og:title", content: "Campus & Residential Care — Vision School Pune" },
      {
        property: "og:description",
        content: "Accessible architecture and a 24/7 welfare ecosystem for every resident student.",
      },
      { property: "og:url", content: "/campus" },
    ],
    links: [{ rel: "canonical", href: "/campus" }],
  }),
  component: CampusPage,
});

const welfarePillars = [
  {
    step: "01",
    tag: "PILLAR 01 • ACCESSIBLE ARCHITECTURE",
    titleMain: "Wheelchair Ramps &",
    titleHighlight: "Tactile Paving",
    subtitle: "Intuitive Safe Layouts for Independent Mobility",
    description:
      "Meticulously engineered physical guide paths, ramp entrances, wheelchair navigation, modified floor layouts, accessible washrooms, and safe handrails across every floor.",
    ringColor: "text-[#176B87]",
    tagStyle: "text-[#176B87] bg-[#176B87]/10 border-[#176B87]/30",
    highlight: "100% Barrier-Free Navigation",
    logo: <Footprints className="size-20 text-[#176B87]" />,
  },
  {
    step: "02",
    tag: "PILLAR 02 • DAILY NUTRITION",
    titleMain: "Freshly Cooked",
    titleHighlight: "Balanced Meals",
    subtitle: "3 Wholesome Meals Cooked Fresh Daily On Campus",
    description:
      "Wholesome, freshly cooked daily meals, milk, breakfast, lunch, and dinner prepared in-house by campus kitchen staff and served free of charge to all residential students.",
    ringColor: "text-amber-500",
    tagStyle: "text-amber-900 bg-amber-100 border-amber-300",
    highlight: "100% Free Daily Nutrition",
    logo: <Utensils className="size-20 text-amber-600" />,
  },
  {
    step: "03",
    tag: "PILLAR 03 • SUPPLIES & WARDROBE",
    titleMain: "Free Apparel, Uniforms &",
    titleHighlight: "Braille Kits",
    subtitle: "Zero Financial Burden on Resident Families",
    description:
      "Complete sets of school uniforms, casual clothing, winter apparel, footwear, textbooks, Braille slates, and personal hygiene packages provided annually.",
    ringColor: "text-purple-500",
    tagStyle: "text-purple-900 bg-purple-100 border-purple-300",
    highlight: "Complete Wardrobe & Learning Kits",
    logo: <Shirt className="size-20 text-purple-600" />,
  },
  {
    step: "04",
    tag: "PILLAR 04 • MEDICAL COVERAGE",
    titleMain: "On-Call Doctor Visits &",
    titleHighlight: "Medicines",
    subtitle: "Comprehensive 24/7 Physical Healthcare Oversight",
    description:
      "Routine physical wellness checkups, custom prescription medications for underlying chronic conditions, and on-call doctor visits year-round.",
    ringColor: "text-emerald-500",
    tagStyle: "text-emerald-900 bg-emerald-100 border-emerald-300",
    highlight: "24/7 Covered Healthcare",
    logo: <HeartPulse className="size-20 text-emerald-600" />,
  },
  {
    step: "05",
    tag: "PILLAR 05 • SAFETY ALLIANCES",
    titleMain: "High-Visibility",
    titleHighlight: "Monsoon Protection",
    subtitle: "Community Safety Partnerships for Student Commutes",
    description:
      "Partnerships with organizations like FRST Foundation supply high-visibility raincoats, reflective safety gear, and protective equipment for student commutes.",
    ringColor: "text-sky-500",
    tagStyle: "text-sky-900 bg-sky-100 border-sky-300",
    highlight: "Reflective Road & Rain Protection",
    logo: <ShieldCheck className="size-20 text-sky-600" />,
  },
  {
    step: "06",
    tag: "PILLAR 06 • RESIDENTIAL LIVING",
    titleMain: "Supervised",
    titleHighlight: "Separate Dormitories",
    subtitle: "Safe, Comfortable & Caring Living Quarters",
    description:
      "Separate, secure, and comfortable residential dormitories for boys and girls with 24/7 campus warden supervision and loving guidance.",
    ringColor: "text-rose-500",
    tagStyle: "text-rose-900 bg-rose-100 border-rose-300",
    highlight: "24/7 Warden Supervision",
    logo: <Building2 className="size-20 text-rose-600" />,
  },
];

function WelfareOrganicRiverShowcase() {
  return (
    <div className="relative max-w-5xl mx-auto py-8">
      {/* Hand-Drawn Wavy Snake Dashed Line SVG (Desktop Connector River) */}
      <svg
        className="absolute top-12 bottom-12 left-0 w-full h-[calc(100%-6rem)] pointer-events-none hidden md:block"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 800 1800"
      >
        <path
          d="M 250 100 C 650 350, 150 650, 550 950 C 950 1250, 150 1550, 250 1800"
          stroke="#176B87"
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.35"
        />
      </svg>

      <div className="space-y-20 sm:space-y-32">
        {welfarePillars.map((p, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <ExtraordinaryScrollFade key={p.step} delay={idx * 0.1}>
              <div
                className={`relative flex flex-col md:flex-row items-center gap-10 sm:gap-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* FLOATING LOGO EMBLEM */}
                <div className="relative shrink-0 flex items-center justify-center size-48 sm:size-56 group">
                  <SketchedOrganicBlobRing
                    className={`absolute size-56 sm:size-64 ${p.ringColor} opacity-50 group-hover:opacity-90 group-hover:rotate-45 transition-all duration-700 pointer-events-none`}
                  />

                  <span className="absolute font-display font-black text-8xl sm:text-9xl text-[#176B87]/10 select-none">
                    {p.step}
                  </span>

                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {p.logo}
                  </div>
                </div>

                {/* OPEN TYPOGRAPHY STORY */}
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

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#123B4A] bg-[#176B87]/10 px-4 py-2 rounded-full border border-[#176B87]/20 shadow-xs font-sans">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{p.highlight}</span>
                    </span>
                  </div>
                </div>
              </div>
            </ExtraordinaryScrollFade>
          );
        })}
      </div>
    </div>
  );
}

function CampusPage() {
  return (
    <>
      {/* 1. Light Blue Hero Section — Interactive Glassmorphic Stat Showcase */}
      <section
        id="campus-hero"
        className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#EBF4FE] via-[#D6EAFF] to-[#F4FBFF] pt-16 pb-32 md:pt-24 md:pb-40 text-slate-900"
      >
        {/* Dynamic Floating Ambient Sky & Amber Mesh Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 size-[550px] rounded-full bg-[#6EC6E8]/30 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute top-1/3 right-10 size-[500px] rounded-full bg-[#2E65AD]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 size-[400px] rounded-full bg-amber-300/20 blur-2xl" />

        <div className="container-page relative z-10 px-4 sm:px-6 text-center max-w-5xl mx-auto my-auto py-8">
          <ExtraordinaryScrollFade className="space-y-8">
            <h1 className="mt-0 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.12] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                A 24/7 Care Sanctuary,{" "}
                <span style={{ color: "#D97706" }}>Entirely Free of Cost</span>
              </SketchedDoodleTypography>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl font-medium max-w-3xl mx-auto font-sans">
              Children live here away from home, so the trust takes full physical, medical, and fiscal accountability for their daily wellbeing, safety, and growth.
            </p>

            {/* Quick Action Button Group */}
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#176B87] px-7 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-[#123B4A] hover:-translate-y-0.5 font-sans text-base sm:text-lg"
              >
                Explore Campus Welfare <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#176B87]/40 bg-white/70 backdrop-blur-md px-7 py-3.5 font-bold text-[#176B87] transition-all hover:bg-white hover:border-[#176B87] font-sans text-base sm:text-lg shadow-xs"
              >
                Schedule Campus Visit
              </Link>
            </div>
          </ExtraordinaryScrollFade>
        </div>

        {/* Bottom Wave transition to Section 2 (#F4FBFF) */}
        <OrganicWaveBottomSVG fillClass="fill-[#F4FBFF]" />
      </section>

      {/* 2. Extraordinary 24/7 Residential Welfare Showcase (Light Sky Blue Canvas) */}
      <section className="relative bg-[#F4FBFF] py-20 sm:py-28 overflow-hidden text-slate-900">
        <GiantDecorativeLetter letter="W" className="text-[280px] sm:text-[400px] -top-16 -left-10 text-[#176B87]/10" />

        <div className="container-page relative z-10 px-4 sm:px-6">
          <ScrollFadeText className="mx-auto max-w-5xl text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#24739B] font-sans">
                24/7 Welfare Infrastructure
              </span>
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Essential Facilities Provided Free for{" "}
                <span style={{ color: "#D97706" }}>Every Resident</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl font-medium max-w-3xl mx-auto font-sans">
              Designed from the ground up to ensure safety, nutrition, physical health, and comfort for children away from home.
            </p>
          </ScrollFadeText>

          {/* EXTRAORDINARY 6-PILLAR WELFARE ORGANIC RIVER SHOWCASE */}
          <WelfareOrganicRiverShowcase />
        </div>

        {/* Bottom Wave transition to Visiting Section (#F0F7FF) */}
        <OrganicWaveBottomSVG fillClass="fill-[#F0F7FF]" />
      </section>

      {/* 4. Visiting & Campus Tour Section (Light Sky Blue Canvas) */}
      <section className="relative bg-[#F0F7FF] py-20 sm:py-28 overflow-hidden text-slate-900">
        <div className="container-page relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFadeText className="mx-auto max-w-5xl text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#176B87] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#176B87] font-sans">
                Visiting the Campus
              </span>
              <span className="h-0.5 w-8 bg-[#176B87] rounded-full" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Visit Our Kondhwa Campus{" "}
                <span style={{ color: "#D97706" }}>in Pune</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl font-medium max-w-3xl mx-auto font-sans">
              Visitors, donors, and well-wishers are always welcome to tour our sanctuary, meet our administration team, or drop off charitable items during operational hours.
            </p>
          </ScrollFadeText>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-12">
            <ExtraordinaryScrollFade delay={0.1}>
              <div className="rounded-3xl bg-white p-8 border border-amber-900/10 shadow-lg hover:shadow-xl transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#176B87] text-white mb-6">
                    <Clock className="size-7" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#176B87] font-sans">
                    Visiting Hours
                  </span>
                  <p className="font-display text-xl font-bold text-[#123B4A] mt-2">
                    {school.hours}
                  </p>
                  <p className="text-sm text-slate-600 mt-2 font-sans">
                    Open for campus tours, administration enquiries, and item donation drops.
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>

            <ExtraordinaryScrollFade delay={0.2}>
              <div className="rounded-3xl bg-white p-8 border border-amber-900/10 shadow-lg hover:shadow-xl transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 mb-6">
                    <MapPin className="size-7" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-900 font-sans">
                    Campus Address
                  </span>
                  <p className="font-display text-xl font-bold text-[#123B4A] mt-2">
                    {school.address}
                  </p>
                  <p className="text-sm text-slate-600 mt-2 font-sans">
                    Situated behind Bramha Emerald County, accessible via NIBM Road.
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>

            <ExtraordinaryScrollFade delay={0.3}>
              <div className="rounded-3xl bg-white p-8 border border-amber-900/10 shadow-lg hover:shadow-xl transition-all h-full flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-600 text-white mb-6">
                    <Phone className="size-7" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-800 font-sans">
                    Direct Contact
                  </span>
                  <p className="font-display text-xl font-bold text-[#123B4A] mt-2">
                    {school.phones[0]}
                  </p>
                  <p className="text-sm text-slate-600 mt-2 font-sans">
                    {school.email}
                  </p>
                </div>
              </div>
            </ExtraordinaryScrollFade>
          </div>
        </div>

        {/* Bottom Wave transition to Section 5 (#EBF4FE) */}
        <OrganicWaveBottomSVG fillClass="fill-[#EBF4FE]" />
      </section>

      {/* 5. Campus Admissions & Support CTA Section (Light Sky Blue Canvas - ZERO DARK BLUE) */}
      <section className="relative bg-gradient-to-br from-[#EBF4FE] via-[#D6EAFF] to-[#E8F5FF] text-slate-900 py-24 sm:py-32 overflow-hidden">
        <OrganicWaveTopSVG fillClass="fill-[#F0F7FF]" />

        <BlindCartoonVector className="absolute top-6 left-6 size-64 opacity-15 pointer-events-none" />
        <DeafCartoonVector className="absolute bottom-6 right-6 size-64 opacity-15 pointer-events-none" />

        <div className="container-page relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedLogoAssembly className="mb-8" />

          <ExtraordinaryScrollFade>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Experience the Care{" "}
                <span style={{ color: "#D97706" }}>First-Hand</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-xl font-medium max-w-3xl mx-auto font-sans">
              Whether you wish to enroll a child, visit our Kondhwa sanctuary, or support our 24/7 residential care ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#176B87] px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-[#0F5268] hover:-translate-y-1 font-sans text-lg"
              >
                View Admissions <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#176B87] bg-white/60 px-8 py-4 font-bold text-[#176B87] transition-all hover:bg-white font-sans text-lg shadow-md"
              >
                Contact Campus
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-amber-700 hover:-translate-y-1 font-sans text-lg"
              >
                Support Welfare
              </Link>
            </div>
          </ExtraordinaryScrollFade>
        </div>

        <OrganicWaveBottomSVG fillClass="fill-[#EBF4FE]" />
      </section>
    </>
  );
}
