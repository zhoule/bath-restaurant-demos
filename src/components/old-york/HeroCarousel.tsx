"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    src: "/venues/old-york-tea-room/cream-tea.jpg",
    alt: "Cream tea with homemade scones, jam and clotted cream",
    caption: "Cream tea",
  },
  {
    src: "/venues/old-york-tea-room/hero-storefront.jpg",
    alt: "The Old York Tea Room storefront on Goodramgate, Lady Row",
    caption: "Lady Row · Goodramgate",
  },
  {
    src: "/venues/old-york-tea-room/afternoon-table.jpg",
    alt: "Afternoon table setting with cakes, silver teapots and floral cups",
    caption: "Upstairs table",
  },
  {
    src: "/venues/old-york-tea-room/window-cakes.jpg",
    alt: "Cake towers and traybakes glowing in the Goodramgate window",
    caption: "Window cakes",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            className={`h-full w-full object-cover ${
              i === 1 ? "object-[center_35%]" : "object-center"
            }`}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.caption}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
