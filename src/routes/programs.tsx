import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Hand,
  Mic,
  Wrench,
  ScrollText,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Award,
  CheckCircle2,
  Heart,
  Target,
  Users,
  Star,
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
  SketchedQuranLanternLogo,
  SketchedHandshakeHeartLogo,
  SketchedOrganicBlobRing,
  SketchedCurvedDoodleArrow,
  SketchedDoodleTypography,
  BraillePatternSVG,
} from "@/components/site/VectorsAndAnimations";
import { AnimatedLogoAssembly } from "@/components/brand/VisionLogoSystem";
import {
  Clay3DBookStackMascot,
  Clay3DPuzzleInclusionMascot,
  Clay3DRocketGrowthMascot,
} from "@/components/site/ClayMascots";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Academics | Braille, Sign Language & Vocations — Vision School" },
      {
        name: "description",
        content:
          "Integrated academic and Islamic curriculum, Braille literacy, sign language, vocal training and vocational tactile arts for blind, deaf and mute students in Pune.",
      },
      { property: "og:title", content: "Academic & Skill Programs — Vision School Pune" },
      {
        property: "og:description",
        content: "How we teach: dual curriculum, Braille, sign language and vocational skills.",
      },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const academicPrograms = [
  {
    verb: "LEARN",
    tag: "Grade 1 Onwards",
    titleMain: "Contemporary",
    titleHighlight: "Schooling",
    body: "Mainstream academic curriculum delivered with adapted Braille textbooks, tactile diagrams, screen readers, and tactile models so students keep pace with standard board milestones.",
    image: "/LEARN.png",
    badges: ["Braille Textbooks", "Tactile Diagrams", "State Board Syllabus"],
  },
  {
    verb: "EXCEL",
    tag: "Ethical & Character Building",
    titleMain: "Values & Character",
    titleHighlight: "Development",
    body: "Comprehensive moral education, character building, empathy, mindfulness, and leadership training running alongside standard academics to nurture responsible, compassionate citizens.",
    image: "/MEMORISE.png",
    badges: ["Moral Integrity", "Empathetic Leadership", "Character Building"],
  },
  {
    verb: "READ",
    tag: "Tactile Mastery",
    titleMain: "Braille",
    titleHighlight: "Literacy",
    body: "Systematic Braille reading, writing, embossing, and examination training from elementary grades through senior secondary studies for visually impaired students.",
    image: "/READ.png",
    badges: ["Louis Braille Code", "Embossed Libraries", "Braille Typewriters"],
  },
  {
    verb: "COMMUNICATE",
    tag: "Visual & Vocal",
    titleMain: "Sign Language &",
    titleHighlight: "Vocal Skills",
    body: "Indian Sign Language (ISL) for deaf students, coupled with intensive vocal drills, speech therapy, facial articulation, and visual aids for hearing-impaired children.",
    image: "/Heard_Empowered.png",
    badges: ["ISL Certified", "Vocal Articulation", "Subtitled Media"],
  },
  {
    verb: "CREATE",
    tag: "Hands-On Vocations",
    titleMain: "Vocational &",
    titleHighlight: "Tactile Arts",
    body: "Practical craftsmanship, computer software operating skills, braille typing, tailoring, and independent home economics designed to foster gainful self-reliance.",
    image: "/Arts_Culture.png",
    badges: ["Crafts & Tailoring", "Computer Literacy", "Tactile Electronics"],
  },
  {
    verb: "GROW",
    tag: "Lifetime Dignity",
    titleMain: "Rehabilitation &",
    titleHighlight: "Autonomy",
    body: "Orientation and mobility training with white canes, spatial awareness, daily living routines, and social integration for confident independent adulthood.",
    image: "/GROW.png",
    badges: ["White Cane Mobility", "Spatial Orientation", "Public Integration"],
  },
];

const milestoneItems = [
  {
    step: "01",
    badge: "Academic Excellence",
    titleMain: "Mastery of Braille &",
    titleHighlight: "Digital Literacy",
    subtitle: "100% Fluency in Tactile Learning & Assistive Tech",
    description:
      "Students gain complete proficiency in tactile Braille reading, digital screen-readers, acoustic learning tools, and specialized assistive technology master modern academic subjects with total independence.",
    highlight: "100% Tactile & Digital Mastery",
    ringColor: "text-[#176B87]",
    logo: <BookOpen className="size-20 text-[#176B87]" />,
  },
  {
    step: "02",
    badge: "Expressive Communication",
    titleMain: "Public Oratory &",
    titleHighlight: "Speech Articulation",
    subtitle: "Confident Expression & Performance Before Assemblies",
    description:
      "Students with speech and hearing impairments master sign language fluency, expressive public speaking, stage performance, and debate before large audiences across Maharashtra — inspiring communities with articulate self-expression.",
    highlight: "Statewide Public Performances",
    ringColor: "text-amber-500",
    logo: <SketchedHandshakeHeartLogo className="size-24 text-amber-600" />,
  },
  {
    step: "03",
    badge: "Higher Education",
    titleMain: "University Degree",
    titleHighlight: "Enrolments",
    subtitle: "Transitions to Standard University Higher Studies & Diplomas",
    description:
      "Senior blind, deaf, and non-speaking graduates successfully transition into higher secondary education and gain admission into Bachelor of Arts (B.A.) and accredited vocational diploma programs across Pune universities.",
    highlight: "Direct University Admissions",
    ringColor: "text-emerald-500",
    logo: <SketchedGraduationHatLogo className="size-24 text-emerald-600" />,
  },
  {
    step: "04",
    badge: "Self-Reliant Future",
    titleMain: "Societal Integration &",
    titleHighlight: "Dignity",
    subtitle: "Independent Adult Living, Sustainable Income & Respect",
    description:
      "Alumni living independently with dignified communication skills, vocational income sources, craft expertise, and active community leadership — standing tall as autonomous, contributing citizens.",
    highlight: "100% Autonomous Adult Living",
    ringColor: "text-purple-500",
    logo: <SketchedSchoolBuildingLogo className="size-24 text-purple-600" />,
  },
];

function MilestoneEditorialStoryItem({
  item,
  index,
}: {
  item: typeof milestoneItems[0];
  index: number;
}) {
  return (
    <article
      className={`grid items-center gap-10 border-b border-amber-900/15 pb-16 last:border-b-0 last:pb-0 lg:grid-cols-12`}
    >
      {/* Visual Side (Vector Icon + Giant Sketched Number) */}
      <div
        className={`lg:col-span-5 flex flex-col items-center justify-center text-center ${
          index % 2 === 1 ? "lg:order-2" : ""
        }`}
      >
        <div className="relative flex items-center justify-center size-48 sm:size-56">
          <SketchedOrganicBlobRing
            className={`absolute size-60 sm:size-64 ${item.ringColor} opacity-50 pointer-events-none`}
          />
          <span className="absolute font-display font-black text-8xl sm:text-9xl text-amber-900/10 select-none">
            {item.step}
          </span>
          <div className="relative z-10 transition-transform duration-300 hover:scale-110">
            {item.logo}
          </div>
        </div>
      </div>

      {/* Story Text Side (Zero Container Boxes!) */}
      <div
        className={`lg:col-span-7 ${
          index % 2 === 1 ? "lg:order-1" : ""
        }`}
      >
        <ExtraordinaryScrollFade>
          <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-[#176B87] mb-2 font-sans">
            {item.badge}
          </span>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B4A] leading-tight">
            <SketchedDoodleTypography style={{ color: "#123B4A" }}>
              {item.titleMain}{" "}
              <span style={{ color: "#D97706" }}>{item.titleHighlight}</span>
            </SketchedDoodleTypography>
          </h3>
          <p className="mt-2 font-display font-bold text-base sm:text-lg text-[#176B87]">
            {item.subtitle}
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-medium font-sans">
            {item.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-amber-900 bg-amber-200/50 px-4 py-2 rounded-full border border-amber-300/60 shadow-xs font-sans">
            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
            <span>{item.highlight}</span>
          </div>
        </ExtraordinaryScrollFade>
      </div>
    </article>
  );
}

function AcademicProgramStoryItem({
  program,
  index,
}: {
  program: typeof academicPrograms[0];
  index: number;
}) {
  return (
    <article
      className={`grid items-center gap-10 border-b border-[#24739B]/25 pb-14 last:border-b-0 last:pb-0 lg:grid-cols-[0.9fr_1.1fr] ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ExtraordinaryScrollFade>
        <span className="inline-block text-xs font-black uppercase tracking-widest text-[#24739B] mb-1 font-sans">
          {program.tag}
        </span>
        <p className="mt-2 font-display text-5xl font-extrabold leading-none text-[#24739B] md:text-7xl">
          {program.verb}
        </p>
        <h3 className="mt-3 text-2xl font-extrabold text-[#123B4A] md:text-3xl lg:text-4xl font-display">
          <SketchedDoodleTypography style={{ color: "#123B4A" }}>
            {program.titleMain}{" "}
            <span style={{ color: "#D97706" }}>{program.titleHighlight}</span>
          </SketchedDoodleTypography>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg font-sans font-medium">
          {program.body}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {program.badges.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#24739B]/10 px-4 py-1.5 text-xs font-black text-[#123B4A] font-sans border border-[#24739B]/20 shadow-xs"
            >
              <CheckCircle2 className="size-3.5 text-[#24739B]" /> {b}
            </span>
          ))}
        </div>
      </ExtraordinaryScrollFade>

      <div className="w-full">
        <div className="group relative overflow-hidden rounded-3xl border border-[#24739B]/30 bg-white shadow-xl h-[340px] sm:h-[400px]">
          <img
            src={program.image}
            alt={`${program.titleMain} ${program.titleHighlight}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </article>
  );
}

/* Academic Milestones Section (Dark Blue Canvas) */
function AcademicMilestonesSection() {
  const academicStats = [
    {
      value: "27",
      label: "10th Passed Out",
      logo: (
        <SketchedSchoolBuildingLogo className="size-20 sm:size-24 text-[#F6D74E] transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#F6D74E",
    },
    {
      value: "12",
      label: "12th Passed Out",
      logo: (
        <SketchedGraduationHatLogo className="size-20 sm:size-24 text-[#7DD3FC] transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#7DD3FC",
    },
    {
      value: "06",
      label: "Graduation Completed",
      logo: (
        <Award className="size-20 sm:size-24 text-[#6EE7B7] transition-transform duration-300 group-hover:scale-110" />
      ),
      color: "#6EE7B7",
    },
  ];

  return (
    <section className="relative bg-[#176B87] py-16 md:py-24 overflow-hidden text-white">
      <div className="container-page relative z-10">
        <ScrollFadeText className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#F6D74E] mb-2 font-sans">
            Our Growing Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            <SketchedDoodleTypography style={{ color: "#FFFFFF" }}>
              Milestones that reflect our commitment
            </SketchedDoodleTypography>
          </h2>
        </ScrollFadeText>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
          {academicStats.map((stat, idx) => (
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
                <p className="mt-2 font-display text-base sm:text-lg font-bold text-slate-100 leading-snug">
                  {stat.label}
                </p>
              </div>
            </ExtraordinaryScrollFade>
          ))}
        </div>
      </div>

      <OrganicWaveBottomSVG fillClass="fill-[#F4FBFF]" />
    </section>
  );
}

function ProgramsPage() {
  return (
    <>
      {/* 1. Academics Hero Banner Section (#0A192F Deep Space Navy) */}
      <section id="academics-hero" className="relative w-full overflow-hidden bg-[#0A192F] pt-0">
        {/* Mobile View: Full Uncropped Mobile Banner Graphic (/Academic_Hero_Mobile.png) */}
        <div className="relative block w-full md:hidden bg-[#0A192F] pb-8 sm:pb-10 md:pb-0">
          <img
            src="/Academic_Hero_Mobile.png"
            alt="Vision School Academic Hero Banner Mobile"
            width={1200}
            height={1600}
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>

        {/* Desktop View: Full-Width Edge-to-Edge Banner Image (/Academic_Hero.png) */}
        <div className="relative hidden w-full md:block bg-[#0A192F]">
          <img
            src="/Academic_Hero.png"
            alt="Vision School Academic Hero Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain block mx-auto"
          />
        </div>

        {/* Bottom Wave transition to Academic Milestones Section (#176B87 Dark Blue) */}
        <OrganicWaveBottomSVG fillClass="fill-[#176B87]" />
      </section>

      {/* Academic Milestones Section */}
      <AcademicMilestonesSection />

      {/* 2. Integrated Dual Curriculum Section (#F4FBFF Ice Blue Canvas with Alternating Story-Card Animation Layout) */}
      <section className="relative bg-[#F4FBFF] py-20 sm:py-28 overflow-hidden text-slate-900">
        <GiantDecorativeLetter letter="A" className="text-[280px] sm:text-[400px] -top-16 -left-10 text-[#176B87]/10" />
        <HugeQuoteWatermark className="text-[260px] sm:text-[360px] top-10 right-10" />

        {/* Ambient Floating Blue Blur Glow */}
        <div className="pointer-events-none absolute top-1/4 right-10 size-[500px] rounded-full bg-[#24739B]/15 blur-3xl" />

        <div className="container-page relative z-10 px-4 sm:px-6">
          <ScrollFadeText className="mx-auto max-w-3xl text-center mb-16">
            {/* Boxless Heading Accent Bar */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#24739B] font-sans">
                Integrated Dual Curriculum
              </span>
              <span className="h-0.5 w-8 bg-[#24739B] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                A Curriculum Built Around Ability,{" "}
                <span style={{ color: "#D97706" }}>Not Disability</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 font-medium font-sans">
              We uniquely blend standard worldly schooling with specialised communication instruction, vocational tactile arts, and moral grounding.
            </p>
          </ScrollFadeText>

          {/* Alternating Story-Card Animated Layout (Same as "A Campus Full of Life") */}
          <div className="mt-14 space-y-16 max-w-6xl mx-auto">
            {academicPrograms.map((prog, idx) => (
              <AcademicProgramStoryItem key={prog.verb} program={prog} index={idx} />
            ))}
          </div>
        </div>

        {/* Bottom Wave transition to Section 3 */}
        <OrganicWaveBottomSVG fillClass="fill-[#FAF7F2]" />
      </section>

      {/* 3. Student Achievements & Milestones Section (100% Boxless Open Editorial Story Layout) */}
      <section className="relative bg-[#FFF8EE] py-24 sm:py-32 overflow-hidden text-slate-900">
        <GiantDecorativeLetter letter="M" className="text-[280px] sm:text-[400px] -top-16 -right-10 text-amber-900/10" />

        {/* Ambient Soft Glow */}
        <div className="pointer-events-none absolute -top-20 left-1/4 size-[400px] rounded-full bg-amber-200/25 blur-3xl" />

        <div className="container-page relative z-10 px-4 sm:px-6">
          <ScrollFadeText className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-0.5 w-8 bg-amber-600 rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-amber-900 font-sans">
                Student Achievements
              </span>
              <span className="h-0.5 w-8 bg-amber-600 rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Milestones Our Students{" "}
                <span style={{ color: "#D97706" }}>Carry With Them</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base sm:text-xl leading-relaxed text-slate-700 font-medium font-sans">
              Real-world success stories built on perseverance, accessible learning tools, and dedicated mentorship.
            </p>
          </ScrollFadeText>

          {/* 100% BOXLESS OPEN EDITORIAL STORY LIST */}
          <div className="space-y-16 max-w-5xl mx-auto">
            {milestoneItems.map((item, idx) => (
              <MilestoneEditorialStoryItem key={item.step} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Admissions CTA Section (Light Golden Sunshine Canvas with Top and Bottom Waves) */}
      <section className="relative bg-gradient-to-br from-[#FFF8E7] via-[#FFE8AB] to-[#FFD978] text-slate-900 py-24 sm:py-32 overflow-hidden">
        {/* Top wave filled with Section 3 bottom cream color (#F7F0E6) */}
        <OrganicWaveTopSVG fillClass="fill-[#F7F0E6]" />

        <BlindCartoonVector className="absolute top-6 left-6 size-64 opacity-15 pointer-events-none" />
        <DeafCartoonVector className="absolute bottom-6 right-6 size-64 opacity-15 pointer-events-none" />

        <div className="container-page relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
          {/* Animated Staggered Logo Entrance */}
          <AnimatedLogoAssembly className="mb-8" />

          <ExtraordinaryScrollFade>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#123B4A]">
              <SketchedDoodleTypography style={{ color: "#123B4A" }}>
                Interested in Enrolling{" "}
                <span style={{ color: "#D97706" }}>a Child?</span>
              </SketchedDoodleTypography>
            </h2>
            <p className="mt-4 text-base sm:text-xl leading-relaxed text-slate-700 font-medium font-sans">
              Admission enquiries are handled directly by the administration at our Kondhwa campus in Pune.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#176B87] px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-[#123B4A] hover:-translate-y-1 font-sans text-lg"
              >
                View Admissions <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#176B87] bg-white/60 px-8 py-4 font-bold text-[#176B87] transition-all hover:bg-white font-sans text-lg shadow-md"
              >
                Contact Campus
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
