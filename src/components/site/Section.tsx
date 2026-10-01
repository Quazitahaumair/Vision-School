import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import "./Section.css";


export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-gradient-to-br from-[#102A43] via-[#123553] to-[#167D8D] text-white">
      <div className="container-page pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/84 md:text-lg">{intro}</p>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("container-page py-16 md:py-20", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="mt-3 max-w-3xl text-3xl leading-[1.1] md:text-4xl">{title}</h2>}
      {lead && <p className="mt-4 max-w-2xl text-muted-foreground">{lead}</p>}
      {children}
    </section>
  );
}

export function InfoCard({
  title,
  children,
  icon,
}: {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <article className="card-soft p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(16,42,67,0.1)]">
      {icon && (
        <span className="mb-4 inline-grid size-11 place-items-center rounded-lg bg-secondary text-primary">
          {icon}
        </span>
      )}
      <h3 className="font-display text-xl leading-tight text-primary">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </article>
  );
}
