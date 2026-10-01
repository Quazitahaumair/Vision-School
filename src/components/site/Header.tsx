import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Keyboard, Menu, Minus, Plus, Contrast, Speaker, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/school";
import "./Header.css";

const STORAGE_KEYS = {
  textScale: "vision-school-text-scale",
  contrast: "vision-school-contrast",
  motion: "vision-school-motion",
  keyboardNav: "vision-school-keyboard-nav",
} as const;

const textScales = ["sm", "md", "lg"] as const;
type TextScale = (typeof textScales)[number];

function setRootDataAttribute(name: string, value?: string | null) {
  const root = document.documentElement;
  if (!value) {
    delete root.dataset[name as keyof DOMStringMap];
    return;
  }
  root.dataset[name as keyof DOMStringMap] = value;
}

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);
  const [textScale, setTextScale] = useState<TextScale>("md");
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [isHeroActive, setIsHeroActive] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedTextScale = window.localStorage.getItem(STORAGE_KEYS.textScale) as TextScale | null;
    const storedContrast = window.localStorage.getItem(STORAGE_KEYS.contrast) === "on";
    const storedMotion = window.localStorage.getItem(STORAGE_KEYS.motion) === "on";
    const storedKeyboardNav = window.localStorage.getItem(STORAGE_KEYS.keyboardNav) === "on";

    if (storedTextScale && textScales.includes(storedTextScale)) {
      setTextScale(storedTextScale);
    }
    setHighContrast(storedContrast);
    setReduceMotion(storedMotion);
    setKeyboardNav(storedKeyboardNav);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    setRootDataAttribute("textScale", textScale);
    window.localStorage.setItem(STORAGE_KEYS.textScale, textScale);

    setRootDataAttribute("contrast", highContrast ? "high" : null);
    window.localStorage.setItem(STORAGE_KEYS.contrast, highContrast ? "on" : "off");

    setRootDataAttribute("motion", reduceMotion ? "reduce" : null);
    window.localStorage.setItem(STORAGE_KEYS.motion, reduceMotion ? "on" : "off");

    setRootDataAttribute("keyboardNav", keyboardNav ? "on" : null);
    window.localStorage.setItem(STORAGE_KEYS.keyboardNav, keyboardNav ? "on" : "off");
  }, [hydrated, textScale, highContrast, reduceMotion, keyboardNav]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setAccessOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById("home-hero") ||
        document.querySelector("main > section") ||
        document.querySelector("section");

      if (hero) {
        const rect = hero.getBoundingClientRect();
        setIsHeroActive(rect.bottom > 75);
      } else {
        setIsHeroActive(window.scrollY <= 300);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location.pathname]);

  const speakPage = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const mainText = document.querySelector("main")?.textContent ?? document.body.textContent ?? "";
    const utterance = new SpeechSynthesisUtterance(
      mainText.replace(/\s+/g, " ").trim().slice(0, 2200),
    );
    utterance.rate = 0.95;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const accessibilityButton = (
    <button
      type="button"
      onClick={() => {
        setAccessOpen((value) => !value);
        setOpen(false);
      }}
      aria-expanded={accessOpen}
      aria-controls="accessibility-panel"
      className="inline-flex items-center gap-2 text-base font-extrabold transition-colors md:text-[1.05rem] text-slate-950 hover:text-[#176B87]"
    >
      Accessibility
    </button>
  );

  const renderNavLink = (label: string, to: string, closeMenus = false) => {
    if (to === "/campus") {
      return (
        <div key={to} className="relative group">
          <Link
            to={to}
            onClick={() => {
              if (closeMenus) setOpen(false);
            }}
            activeOptions={{ exact: false }}
            activeProps={{
              className:
                "relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:rounded-full after:bg-[#176B87] text-black font-extrabold",
            }}
            className="relative inline-flex items-center gap-1.5 px-1.5 py-2.5 text-base font-extrabold tracking-wide transition-colors md:text-[1.125rem] text-slate-950 hover:text-[#176B87]"
          >
            <span>{label}</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-slate-600" />
          </Link>

          {/* Hover Dropdown */}
          <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-56">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-200/80 space-y-1">
              <Link
                to="/campus"
                onClick={() => {
                  if (closeMenus) setOpen(false);
                }}
                className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100/90 transition-colors group/item"
              >
                <span className="font-extrabold text-sm text-slate-900 group-hover/item:text-[#176B87]">
                  Campus & Care
                </span>
                <span className="text-xs text-slate-500 font-medium">Facilities & boarding care</span>
              </Link>
              <Link
                to="/gallery"
                onClick={() => {
                  if (closeMenus) setOpen(false);
                }}
                className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100/90 transition-colors group/item"
              >
                <span className="font-extrabold text-sm text-[#176B87] flex items-center justify-between">
                  <span>Gallery</span>
                  <span className="text-[10px] bg-[#176B87]/15 text-[#176B87] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wide">
                    New
                  </span>
                </span>
                <span className="text-xs text-slate-500 font-medium">Photos & campus moments</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={to}
        to={to}
        onClick={() => {
          if (closeMenus) setOpen(false);
        }}
        activeOptions={{ exact: to === "/" }}
        activeProps={{
          className:
            "relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:rounded-full after:bg-[#176B87] text-black font-extrabold",
        }}
        className="relative px-1.5 py-2.5 text-base font-extrabold tracking-wide transition-colors md:text-[1.125rem] text-slate-950 hover:text-[#176B87]"
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeroActive
        ? "border-b border-transparent bg-transparent text-slate-950 shadow-none"
        : "border-b border-border bg-white text-slate-950 shadow-sm"
        }`}
    >
      <div className="relative">
        <div className="container-page flex items-center justify-between gap-4 py-3 md:py-3.5">
          <Link
            to="/"
            className="relative flex h-12 w-32 items-center justify-center whitespace-nowrap text-center md:h-14 md:w-36"
            onClick={() => setOpen(false)}
          >
            <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 -ml-12 flex-col items-center md:-top-4 md:-ml-20">
              <img
                src="/logo.png"
                alt="Vision School logo"
                className="h-20 w-auto object-contain md:h-26 lg:h-30"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((l) => renderNavLink(l.label, l.to))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">{accessibilityButton}</div>
            <button
              type="button"
              onClick={() => {
                setOpen((value) => !value);
                setAccessOpen(false);
              }}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-full p-2.5 lg:hidden text-slate-950 hover:text-black"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {accessOpen && (
          <div
            id="accessibility-panel"
            className="absolute left-4 right-4 top-full z-50 mt-2 rounded-2xl border border-border bg-white p-4 shadow-[0_20px_50px_rgba(16,42,67,0.12)] md:left-auto md:right-4 md:w-104"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                  Accessibility Options
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Small controls that make the site easier to use, read and navigate.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAccessOpen(false)}
                className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-secondary"
                aria-label="Close accessibility options"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-border bg-background p-3">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="grid size-8 place-items-center rounded-lg bg-secondary text-primary">
                    A
                  </span>
                  Text Size
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "A-", value: "sm" as const },
                    { label: "A", value: "md" as const },
                    { label: "A+", value: "lg" as const },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setTextScale(item.value)}
                      aria-pressed={textScale === item.value}
                      className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${textScale === item.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-white text-primary hover:bg-secondary"
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={speakPage}
                className="inline-flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <span className="grid size-9 place-items-center rounded-lg bg-secondary text-primary">
                  <Speaker className="size-4" />
                </span>
                <span>Read Page</span>
              </button>

              <button
                type="button"
                onClick={() => setHighContrast((value) => !value)}
                aria-pressed={highContrast}
                className={`inline-flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${highContrast
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-primary hover:bg-secondary"
                  }`}
              >
                <span className="grid size-9 place-items-center rounded-lg bg-white/15 text-current">
                  <Contrast className="size-4" />
                </span>
                <span>High Contrast</span>
              </button>

              <button
                type="button"
                onClick={() => setReduceMotion((value) => !value)}
                aria-pressed={reduceMotion}
                className={`inline-flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${reduceMotion
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-primary hover:bg-secondary"
                  }`}
              >
                <span className="grid size-9 place-items-center rounded-lg bg-white/15 text-current">
                  <Minus className="size-4" />
                </span>
                <span>Reduce Motion</span>
              </button>

              <button
                type="button"
                onClick={() => setKeyboardNav((value) => !value)}
                aria-pressed={keyboardNav}
                className={`inline-flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${keyboardNav
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-primary hover:bg-secondary"
                  }`}
              >
                <span className="grid size-9 place-items-center rounded-lg bg-white/15 text-current">
                  <Keyboard className="size-4" />
                </span>
                <span>Keyboard Navigation</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-2 py-4">
            {navLinks.map((link) => {
              if (link.to === "/campus") {
                return (
                  <div key={link.to} className="flex flex-col gap-1">
                    {renderNavLink(link.label, link.to, true)}
                    <div className="pl-4 flex flex-col gap-1 border-l-2 border-[#176B87]/30 ml-2">
                      <Link
                        to="/gallery"
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-base font-extrabold text-[#176B87] hover:underline flex items-center justify-between"
                      >
                        <span>Gallery</span>
                        <span className="text-[10px] bg-[#176B87]/15 text-[#176B87] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wide">
                          New
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              }
              return renderNavLink(link.label, link.to, true);
            })}

            <div className="mt-2 flex justify-start md:hidden">{accessibilityButton}</div>
          </nav>
        </div>
      )}
    </header>
  );
}
