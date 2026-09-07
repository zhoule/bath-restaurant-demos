type DemoBannerProps = {
  /** Soft strip for flagship outreach pages — less visual weight. */
  variant?: "default" | "discreet";
};

export function DemoBanner({ variant = "default" }: DemoBannerProps) {
  if (variant === "discreet") {
    return (
      <div
        role="status"
        className="absolute left-0 right-0 top-0 z-50 px-4 py-2 text-center text-[11px] font-medium tracking-wide text-white/80"
      >
        <span className="inline-block rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">
          Unofficial preview · public info only
        </span>
      </div>
    );
  }

  return (
    <div
      role="status"
      className="sticky top-0 z-50 border-b border-amber-800/20 bg-amber-100 px-4 py-2 text-center text-sm font-medium text-amber-950"
    >
      Demo redesign — not the official site
    </div>
  );
}
