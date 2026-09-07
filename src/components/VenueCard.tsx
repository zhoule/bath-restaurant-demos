import Link from "next/link";
import type { Venue } from "@/data/venues";

/** Prefer known hero stills for rich hub cards. */
const HERO_BY_SLUG: Record<string, string> = {
  rosarios: "/venues/rosarios/hero-storefront.jpg",
  "old-york-tea-room": "/venues/old-york-tea-room/hero-storefront.jpg",
  "mattys-cafe": "/venues/mattys-cafe/hero-storefront.jpg",
  "pulteney-bridge-coffee":
    "/venues/pulteney-bridge-coffee/hero-storefront.jpg",
  "gatehouse-coffee": "/venues/gatehouse-coffee/hero-pie-latte-walls.jpg",
  "kiosk-cafe": "/venues/kiosk-cafe/hero-interior-counter.jpg",
};

const HOOK_BY_SLUG: Record<string, string> = {
  rosarios: "Sicilian cannoli & Italian coffee on a Bath alley",
  "old-york-tea-room": "Medieval Lady Row hideaway · cakes & cream tea",
  "mattys-cafe": "Dawn fry-ups & garden seating on Lower Bristol Road",
  "pulteney-bridge-coffee": "Tiny bridge cafe · weir views & cream teas",
  "gatehouse-coffee": "Walmgate Bar gatehouse · pies, latte, rooftop",
  "kiosk-cafe": "Fossgate specialty coffee · ceramics & brunch boards",
};

export function VenueCard({ venue }: { venue: Venue }) {
  const isLive = venue.status === "live";
  const thumb =
    HERO_BY_SLUG[venue.slug] ??
    venue.photos.find((p) => /hero/i.test(p.src))?.src ??
    venue.photos[0]?.src;
  const hook = HOOK_BY_SLUG[venue.slug] ?? venue.tagline;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(135deg, ${venue.theme.accentSoft}, ${venue.theme.accent}55)`,
            }}
          />
        )}
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow"
          style={{ backgroundColor: `${venue.theme.accent}E6` }}
        >
          {venue.location.city}
        </span>
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur ${
            isLive
              ? "bg-white/90 text-emerald-800"
              : "bg-white/80 text-stone-600"
          }`}
        >
          {isLive ? "Demo live" : "Coming soon"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-stone-900">
          {venue.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{hook}</p>
        <p className="mt-3 text-xs text-stone-500">
          {venue.location.postcode}
        </p>
        {isLive ? (
          <Link
            href={`/demos/${venue.slug}/`}
            className="mt-5 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            style={{ backgroundColor: venue.theme.accent }}
          >
            View demo →
          </Link>
        ) : (
          <span className="mt-5 inline-flex cursor-not-allowed items-center justify-center rounded-full bg-stone-200 px-4 py-2.5 text-sm font-medium text-stone-500">
            Not available yet
          </span>
        )}
      </div>
    </article>
  );
}
