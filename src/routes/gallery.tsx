import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Camera,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { school } from "@/data/school";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Vision School & Rehabilitation Centre, Pune" },
      {
        name: "description",
        content:
          "Explore 35 visual moments, campus life, academic learning, sports, and residential care at Vision School and Rehabilitation Centre, Pune.",
      },
      { property: "og:title", content: "Campus Photo Gallery — Vision School Pune" },
      {
        property: "og:description",
        content: "A visual glimpse into daily life, learning, and empowerment at our campus.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
}

// Generate array of 35 photos: Photo-1.jpeg to Photo-35.jpeg
const photos: PhotoItem[] = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  src: `/Photo-${i + 1}.jpeg`,
  alt: `Vision School & Rehabilitation Centre Campus Photo ${i + 1}`,
}));

function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20 overflow-hidden text-slate-900">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 pb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#176B87]/10 text-[#176B87] font-bold text-sm mb-4">
          <Camera className="w-4 h-4" />
          <span>Campus Photo Collection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Campus Life & <span className="text-[#176B87]">Gallery</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
          Explore visual moments of daily learning, student activities, campus facilities, and residential care at{" "}
          <span className="font-semibold text-slate-800">{school.name}</span>.
        </p>
      </section>

      {/* Pure 35 Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 aspect-[4/3]"
            >
              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-full font-extrabold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4 text-[#176B87]" />
                  <span>View Fullscreen</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto !== null && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Main Modal Box */}
          <div
            className="relative bg-slate-900 rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl border border-white/10 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-950/80 text-white">
              <span className="bg-[#176B87] text-white font-black text-xs px-3.5 py-1 rounded-full">
                {selectedIndex + 1} / {photos.length}
              </span>

              <button
                onClick={() => setSelectedIndex(null)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo View Container with Navigation Controls */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[50vh] max-h-[70vh]">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain max-h-[70vh]"
              />

              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-950 text-white p-3 rounded-full transition-colors border border-white/20 shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-950 text-white p-3 rounded-full transition-colors border border-white/20 shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-slate-950 text-slate-300 flex items-center justify-between gap-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="font-bold text-white">
                {school.name} &bull; Kondhwa, Pune
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors"
                >
                  &larr; Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-3.5 py-1.5 rounded-xl bg-[#176B87] hover:bg-[#12556c] text-white font-bold transition-colors"
                >
                  Next &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#176B87] to-[#0f4a5f] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Want to visit our campus in person?
            </h2>
            <p className="mt-2 text-white/80 text-base">
              Visitors, donors, and well-wishers are always welcome to observe our facilities, sensory labs, and daily student care.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="bg-white text-[#176B87] hover:bg-slate-100 font-extrabold px-6 py-3.5 rounded-xl text-center transition-colors shadow-md"
            >
              Schedule a Visit
            </Link>
            <Link
              to="/donate"
              className="bg-gold hover:bg-gold/90 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-center transition-colors shadow-md"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
