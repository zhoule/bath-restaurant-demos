import Link from "next/link";
import type { Venue } from "@/data/venues";

export function VenueCard({ venue }: { venue: Venue }) {
  const isLive = venue.status === "live";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-stone-300 hover:shadow-md">
      <div
        className="h-2 w-full"
        style={{ backgroundColor: venue.theme.accent }}
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-stone-900">
            {venue.name}
          </h2>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
              isLive
                ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
                : "bg-stone-100 text-stone-600 ring-1 ring-stone-200"
            }`}
          >
            {isLive ? "Demo live" : "Coming soon"}
          </span>
        </div>
        <p className="mt-1 text-sm text-stone-500">{venue.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
          {venue.shortDescription}
        </p>
        <p className="mt-3 text-xs text-stone-500">
          {venue.location.city} · {venue.location.postcode}
        </p>
        {isLive ? (
          <Link
            href={`/demos/${venue.slug}`}
            className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium text-white transition opacity-95 hover:opacity-100"
            style={{ backgroundColor: venue.theme.accent }}
          >
            View demo
          </Link>
        ) : (
          <span className="mt-6 inline-flex cursor-not-allowed items-center justify-center rounded-full bg-stone-200 px-4 py-2.5 text-sm font-medium text-stone-500">
            Not available yet
          </span>
        )}
      </div>
    </article>
  );
}
