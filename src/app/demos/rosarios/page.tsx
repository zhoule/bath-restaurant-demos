import type { Metadata } from "next";
import Link from "next/link";
import { DemoBanner } from "@/components/DemoBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { rosarios } from "@/data/venues/rosarios";

export const metadata: Metadata = {
  title: "Rosario’s Cafe",
  description:
    "Unofficial demo redesign of Rosario’s Cafe, Bath UK — Italian coffee, cakes, and hospitality in Northumberland Place.",
};

export default function RosariosPage() {
  const v = rosarios;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.location.mapQuery)}`;

  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />

      <header
        className="relative overflow-hidden border-b border-stone-200"
        style={{ backgroundColor: v.theme.accentSoft }}
      >
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-stone-600">
            Bath · Italian cafe
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {v.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-700">
            {v.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={v.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              style={{ backgroundColor: v.theme.accent }}
            >
              {v.cta.label}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-stone-300 bg-white/80 px-5 py-2.5 text-sm font-medium text-stone-800 hover:bg-white"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        <section aria-labelledby="about-heading" className="max-w-3xl">
          <h2
            id="about-heading"
            className="text-2xl font-semibold tracking-tight text-stone-900"
          >
            About
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700">
            {v.about.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="menu-heading" className="mt-14">
          <h2
            id="menu-heading"
            className="text-2xl font-semibold tracking-tight text-stone-900"
          >
            Menu highlights
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-stone-500">
            Categories drawn from the official public site. Items marked
            placeholder do not list specific dishes or prices — check in cafe
            or on the official website.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {v.menuHighlights.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-stone-900">{item.name}</h3>
                  {item.isPlaceholder && (
                    <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900 ring-1 ring-amber-200">
                      Placeholder
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="location-heading"
          className="mt-14 grid gap-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
        >
          <div>
            <h2
              id="location-heading"
              className="text-2xl font-semibold tracking-tight text-stone-900"
            >
              Location · Bath
            </h2>
            <address className="mt-4 not-italic text-stone-700">
              {v.location.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div>
                {v.location.city} {v.location.postcode}
              </div>
              <div>{v.location.country}</div>
            </address>
            <dl className="mt-6 space-y-2 text-sm text-stone-700">
              {v.contact.phone && (
                <div>
                  <dt className="inline font-medium text-stone-900">Tel: </dt>
                  <dd className="inline">
                    <a
                      href={`tel:${v.contact.phone.replace(/\s/g, "")}`}
                      className="underline decoration-stone-300 underline-offset-2"
                    >
                      {v.contact.phone}
                    </a>
                  </dd>
                </div>
              )}
              {v.contact.email && (
                <div>
                  <dt className="inline font-medium text-stone-900">Email: </dt>
                  <dd className="inline">
                    <a
                      href={`mailto:${v.contact.email}`}
                      className="underline decoration-stone-300 underline-offset-2"
                    >
                      {v.contact.email}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">Hours</h3>
            <p className="mt-3 text-stone-800">{v.hours.summary}</p>
            {v.hours.note && (
              <p className="mt-3 text-sm leading-relaxed text-amber-900/90">
                {v.hours.note}
              </p>
            )}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-medium underline decoration-stone-300 underline-offset-2"
              style={{ color: v.theme.accent }}
            >
              Directions on Google Maps →
            </a>
          </div>
        </section>

        <section
          aria-labelledby="cta-heading"
          className="mt-14 rounded-2xl px-6 py-10 text-center sm:px-10"
          style={{ backgroundColor: v.theme.accentSoft }}
        >
          <h2
            id="cta-heading"
            className="text-2xl font-semibold tracking-tight text-stone-900"
          >
            Plan a visit
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-stone-700">
            For current menus, takeaway, and online coffee beans, use the
            official Rosario’s site. This demo is for design exploration only.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={v.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full px-5 py-2.5 text-sm font-medium text-white"
              style={{ backgroundColor: v.theme.accent }}
            >
              Official website
            </a>
            <Link
              href="/"
              className="inline-flex rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800"
            >
              Back to demos
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter venueName={v.name} sources={v.sources} />
    </div>
  );
}
