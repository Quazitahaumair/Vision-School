import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, school } from "@/data/school";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#EBF4FE] via-[#DBEAFE] to-[#EBF4FE] text-slate-900">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12 md:py-24">
        {/* Column 1: Brand & Logo */}
        <div className="flex flex-col justify-between md:col-span-5 -ml-4 sm:-ml-8 md:-ml-14 lg:-ml-20">
          <div>
            <div className="flex flex-col items-start gap-4">
              <Link to="/" className="inline-block transition-transform hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Vision School logo"
                  className="h-20 w-auto object-contain md:h-24 drop-shadow-sm"
                />
              </Link>
              <div>
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  {school.name}
                </h3>
                <p className="mt-1 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-blue-900">
                  Every Vision. Every Possibility.
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-slate-700 font-medium">
              Inclusive education, residential care and a calm premium experience for students who
              deserve dignity, structure and confidence.
            </p>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="md:col-span-3">
          <h4 className="mb-6 text-base md:text-lg font-extrabold uppercase tracking-[0.2em] text-blue-900">
            Explore
          </h4>
          <ul className="space-y-3.5 text-base md:text-lg text-slate-700">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-block transition-all hover:text-blue-900 hover:translate-x-1 font-semibold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="md:col-span-4">
          <h4 className="mb-6 text-base md:text-lg font-extrabold uppercase tracking-[0.2em] text-blue-900">
            Connect
          </h4>
          <ul className="space-y-4 text-base md:text-lg text-slate-700">
            <li className="flex items-start gap-3.5">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-blue-700" />
              <span className="leading-relaxed font-medium">{school.address}</span>
            </li>
            <li className="flex items-center gap-3.5">
              <Phone className="h-6 w-6 shrink-0 text-blue-700" />
              <a href={`tel:${school.phones[0].replace(/\s/g, "")}`} className="hover:text-blue-900 font-semibold transition-colors">
                {school.phones[0]}
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <Mail className="h-6 w-6 shrink-0 text-blue-700" />
              <a href={`mailto:${school.email}`} className="hover:text-blue-900 font-semibold transition-colors">
                {school.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-blue-300/60 bg-white/70">
        <div className="container-page flex flex-col items-center gap-4 py-6 text-sm md:text-base text-slate-700 md:flex-row md:justify-between font-medium">
          <div>
            (c) {new Date().getFullYear()} {school.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/about" className="hover:text-blue-900 font-semibold transition-colors">
              Accessibility
            </Link>
            <span className="text-slate-400">•</span>
            <span className="cursor-pointer hover:text-blue-900 font-semibold transition-colors">Privacy</span>
            <span className="text-slate-400">•</span>
            <span className="cursor-pointer hover:text-blue-900 font-semibold transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
