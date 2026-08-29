import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";

const IMAGES = [
  { src: "/images/gallery/1.webp", alt: "Space Explorers Society gallery photo 1" },
  { src: "/images/gallery/2.webp", alt: "Space Explorers Society gallery photo 2" },
  { src: "/images/gallery/3.webp", alt: "Space Explorers Society gallery photo 3" },
  { src: "/images/gallery/4.webp", alt: "Space Explorers Society gallery photo 4" },
  { src: "/images/gallery/5.webp", alt: "Space Explorers Society gallery photo 5" },
  { src: "/images/gallery/6.webp", alt: "Space Explorers Society gallery photo 6" },
  { src: "/images/gallery/7.webp", alt: "Space Explorers Society gallery photo 7" },
  { src: "/images/gallery/8.webp", alt: "Space Explorers Society gallery photo 8" },
  { src: "/images/gallery/9.webp", alt: "Space Explorers Society gallery photo 9" },
  { src: "/images/gallery/10.webp", alt: "Space Explorers Society gallery photo 10" },
  { src: "/images/gallery/11.webp", alt: "Space Explorers Society gallery photo 11" },
  { src: "/images/gallery/12.webp", alt: "Space Explorers Society gallery photo 12" },
  { src: "/images/gallery/13.webp", alt: "Space Explorers Society gallery photo 13" },
  { src: "/images/gallery/14.webp", alt: "Space Explorers Society gallery photo 14" },
  { src: "/images/gallery/15.webp", alt: "Space Explorers Society gallery photo 15" },
  { src: "/images/gallery/16.webp", alt: "Space Explorers Society gallery photo 16" },
  { src: "/images/gallery/17.webp", alt: "Space Explorers Society gallery photo 17" },
  { src: "/images/gallery/18.webp", alt: "Space Explorers Society gallery photo 18" },
  { src: "/images/gallery/19.webp", alt: "Space Explorers Society gallery photo 19" },
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="section-padding mx-auto max-w-7xl">
      <Reveal className="text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Moments
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
          Our <span className="cosmic-text">Gallery</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Glimpses from our workshops, star-gazing nights, and journeys
          through the cosmos.
        </p>
      </Reveal>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {IMAGES.map((img, i) => (
          <Reveal key={img.src} delay={i * 60} className="mb-5 break-inside-avoid">
            <button
              onClick={() => setActive(img.src)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <img
            src={active}
            alt="Enlarged gallery"
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-glow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}