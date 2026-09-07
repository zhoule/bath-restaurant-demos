import Link from "next/link";
import { DemoBanner } from "@/components/DemoBanner";
import { SiteFooter } from "@/components/SiteFooter";
import type { Venue } from "@/data/venues/types";

export function VenueDemoPage({ venue }: { venue: Venue }) {
  const v = venue;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.location.mapQuery)}`;
  const telHref = v.contact.phone
    ? `tel:${v.contact.phone.replace(/\s/g, "")}`
    : undefined;
  const hero = v.photos[0];
  const gallery = v.photos.slice(0, 8);

  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />

      <header className="relative overflow-hidden border-b border-stone-200">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: v.theme.accentSoft }}
          aria-hidden
        />
        {hero && !hero.isPlaceholder && (
          <div className="absolute inset-0 opacity-35">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.src}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/40 to-stone-900/20" />
          </div>
        )}

        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <p
            className={`text-sm font-medium uppercase tracking-wider ${
              hero && !hero.isPlaceholder ? "text-amber-100" : "text-stone-600"
            }`}
          >
            {v.heroEyebrow}
          </p>
          <h1
            className={`mt-3 text-4xl font-semibold tracking-tight sm:text-5xl ${
              hero && !hero.isPlaceholder ? "text-white" : "text-stone-900"
            }`}
          >
            {v.name}
          </h1>
          <p
            className={`mt-4 max-w-xl text-lg leading-relaxed ${
              hero && !hero.isPlaceholder ? "text-stone-100" : "text-stone-700"
            }`}
          >
            {v.tagline}
          </p>
          <p
            className={`mt-3 max-w-2xl text-sm leading-relaxed ${
              hero && !hero.isPlaceholder ? "text-stone-200/90" : "text-stone-600"
            }`}
          >
            {v.location.addressLines.join(", ")}, {v.location.city}{" "}
            {v.location.postcode}
            {v.contact.phone ? ` · ${v.contact.phone}` : ""}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={v.cta.href}
              className="inline-flex rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              style={{ backgroundColor: v.theme.accent }}
            >
              {v.cta.label}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/40 bg-white/90 px-5 py-2.5 text-sm font-medium text-stone-900 hover:bg-white"
            >
              Get directions
            </a>
            {telHref && (
              <a
                href={telHref}
                className={`inline-flex rounded-full px-5 py-2.5 text-sm font-medium backdrop-blur ${
                  hero && !hero.isPlaceholder
                    ? "border border-white/40 bg-white/20 text-white hover:bg-white/30"
                    : "border border-stone-300 bg-white/80 text-stone-800 hover:bg-white"
                }`}
              >
                Call {v.contact.phone}
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        {v.contentGaps && v.contentGaps.length > 0 && (
          <aside className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
            <p className="font-medium">Content notes</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {v.contentGaps.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </aside>
        )}

        <section aria-labelledby="about-heading" className="max-w-3xl">
          <h2
            id="about-heading"
            className="text-2xl font-semibold tracking-tight text-stone-900"
          >
            About
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-stone-700">
            {v.about.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        </section>

        {gallery.length > 0 && (
          <section aria-labelledby="photos-heading" className="mt-14">
            <h2
              id="photos-heading"
              className="text-2xl font-semibold tracking-tight text-stone-900"
            >
              Photos
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-stone-500">
              Public-domain / openly licensed exteriors and listing photos only.
              Credits under each image.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {gallery.map((photo) => (
                <li
                  key={photo.src}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] bg-stone-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {photo.isPlaceholder && (
                      <span className="absolute left-3 top-3 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-950 ring-1 ring-amber-200">
                        Photographic placeholder
                      </span>
                    )}
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm text-stone-700">{photo.alt}</p>
                    <p className="mt-1 text-xs text-stone-500">{photo.credit}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="menu-heading" className="mt-14">
          <h2
            id="menu-heading"
            className="text-2xl font-semibold tracking-tight text-stone-900"
          >
            Menu highlights
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-stone-500">
            Dish names drawn from public sources. Prices are omitted unless
            published on an official page — never invented here. Items marked
            placeholder are category cues only.
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

        <section aria-labelledby="reviews-heading" className="mt-14">
          <h2
            id="reviews-heading"
            className="text-2xl font-semibold tracking-tight text-stone-900"
          >
            Visitor notes
          </h2>
          {v.reviews.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-5 py-6 text-sm text-stone-600">
              Reviews not imported yet — we only quote attributed public reviews
              and will not invent stars or testimonials.
            </p>
          ) : (
            <>
              <p className="mt-2 max-w-2xl text-sm text-stone-500">
                Short quotes from public review aggregators / listings. Always
                confirm current experience yourself.
              </p>
              <ul className="mt-6 grid gap-4">
                {v.reviews.map((r) => (
                  <li
                    key={`${r.author}-${r.quote.slice(0, 24)}`}
                    className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
                  >
                    <blockquote className="text-base leading-relaxed text-stone-800">
                      “{r.quote}”
                    </blockquote>
                    <footer className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-stone-500">
                      <span className="font-medium text-stone-800">
                        {r.author}
                      </span>
                      {typeof r.rating === "number" && (
                        <span aria-label={`${r.rating} out of 5`}>
                          · {r.rating}/5
                        </span>
                      )}
                      {r.date && <span>· {r.date}</span>}
                      <span>· via {r.source}</span>
                      {r.sourceUrl && (
                        <a
                          href={r.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-stone-300 underline-offset-2"
                        >
                          source
                        </a>
                      )}
                    </footer>
                  </li>
                ))}
              </ul>
            </>
          )}
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
              Visit · {v.location.city}
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
                      href={telHref}
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
                    <span className="text-stone-700">{v.contact.email}</span>
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
            This is an unofficial demo redesign. Call ahead or visit in person
            for today’s menu and seating — we do not invent availability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={v.cta.href}
              className="inline-flex rounded-full px-5 py-2.5 text-sm font-medium text-white"
              style={{ backgroundColor: v.theme.accent }}
            >
              {v.cta.label}
            </a>
            {v.secondaryCta && (
              <a
                href={v.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800"
              >
                {v.secondaryCta.label}
              </a>
            )}
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
