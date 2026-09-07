import type { CSSProperties } from "react";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { DemoBanner } from "@/components/DemoBanner";
import type { FlagshipConfig } from "@/data/flagship/types";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-fv-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-fv-body",
  display: "swap",
});

export function FlagshipVenuePage({ config }: { config: FlagshipConfig }) {
  const v = config.venue;
  const accent = v.theme.accent;
  const accentSoft = v.theme.accentSoft;
  const paper = "#FAF7F2";
  const ink = "#1C1917";

  const mapsUrl =
    v.secondaryCta?.href?.includes("maps") ||
    v.secondaryCta?.href?.includes("google.com/maps")
      ? v.secondaryCta.href
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.location.mapQuery)}`;

  const phone = config.phoneDisplay ?? v.contact.phone ?? "";
  const telHref = phone
    ? `tel:${phone.replace(/\s/g, "")}`
    : v.cta.href;

  const reviews = config.reviews ?? v.reviews;
  const addressLines =
    config.addressLines ??
    [...v.location.addressLines, `${v.location.city} ${v.location.postcode}`, v.location.country];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: v.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: v.location.addressLines.join(", "),
      addressLocality: v.location.city,
      postalCode: v.location.postcode,
      addressCountry: "GB",
    },
    ...(phone ? { telephone: `+44${phone.replace(/^0/, "").replace(/\s/g, "")}` } : {}),
    url: `https://bath-restaurant-demos.pages.dev/demos/${v.slug}/`,
    image: `https://bath-restaurant-demos.pages.dev${config.hero.src}`,
    ...config.jsonLdExtra,
  };

  const displayFont = {
    fontFamily: "var(--font-fv-display), Georgia, serif",
  } as const;

  return (
    <div
      className={`${playfair.variable} ${inter.variable} flex min-h-screen flex-col text-[color:var(--fv-ink)]`}
      style={
        {
          fontFamily: "var(--font-fv-body), ui-sans-serif, system-ui, sans-serif",
          backgroundColor: paper,
          color: ink,
          ["--fv-accent" as string]: accent,
          ["--fv-accent-soft" as string]: accentSoft,
          ["--fv-ink" as string]: ink,
          ["--fv-paper" as string]: paper,
        } as CSSProperties
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Atmosphere hero */}
      <section className="relative flex min-h-[88svh] items-end">
        <DemoBanner variant="discreet" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={config.hero.src}
          alt={config.hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: config.hero.objectPosition ?? "center 35%" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-12 pt-28 sm:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-100/90">
            {v.heroEyebrow}
          </p>
          <h1
            className="mt-3 max-w-xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
            style={displayFont}
          >
            {v.name}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-100/95 sm:text-lg">
            {v.tagline}
          </p>
          <p className="mt-3 text-sm text-stone-200/85">
            {v.location.addressLines[0]}
            {v.location.city ? ` · ${v.location.city}` : ""}
            {phone ? ` · ${phone}` : ""}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={telHref}
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:brightness-110"
              style={{ backgroundColor: accent }}
            >
              {phone ? `Call ${phone}` : v.cta.label}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/45 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/25"
            >
              Directions
            </a>
          </div>
        </div>
      </section>

      {/* 2. Proof strip */}
      <section
        aria-label="Highlights"
        className="border-b"
        style={{ backgroundColor: accentSoft, borderColor: `${accent}22` }}
      >
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
          {config.proof.map((item) => (
            <li
              key={item.k}
              className="flex flex-col items-center px-3 py-6 text-center"
            >
              <span
                className="text-2xl sm:text-3xl"
                style={{ ...displayFont, color: accent }}
              >
                {item.k}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wider text-stone-600">
                {item.v}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 pt-14 sm:pb-16">
        {/* 3. Food mosaic */}
        <section aria-labelledby="kitchen-heading">
          <p
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            {config.mosaicEyebrow ?? "From the kitchen"}
          </p>
          <h2
            id="kitchen-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={displayFont}
          >
            {config.mosaicTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
            {config.mosaicLead}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {config.mosaic.map((item) => (
              <li
                key={item.src + item.label}
                className={`group relative overflow-hidden rounded-2xl bg-stone-200 shadow-sm ${
                  item.span === "wide"
                    ? "col-span-2 aspect-[16/9] sm:aspect-[2/1]"
                    : item.span === "tall"
                      ? "row-span-2 aspect-[3/4] sm:aspect-auto sm:min-h-[28rem]"
                      : "aspect-[4/5] sm:aspect-[4/5]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10">
                  <span className="text-sm font-medium text-white">
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Menu editorial */}
        <section
          aria-labelledby="menu-heading"
          className="mt-16 rounded-3xl px-5 py-10 sm:px-10"
          style={{ backgroundColor: accentSoft }}
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: accent }}
          >
            {config.menuEyebrow ?? "On the counter"}
          </p>
          <h2
            id="menu-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={displayFont}
          >
            {config.menuTitle}
          </h2>
          {config.menuLead && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
              {config.menuLead}
            </p>
          )}
          <div className="mt-10 space-y-10">
            {config.menu.map((section) => (
              <div key={section.title}>
                <h3
                  className="border-b pb-2 text-xl"
                  style={{
                    ...displayFont,
                    color: accent,
                    borderColor: `${accent}4D`,
                  }}
                >
                  {section.title}
                </h3>
                {section.note && (
                  <p className="mt-2 text-xs text-stone-500">{section.note}</p>
                )}
                <ul className="mt-4 divide-y divide-[#E8DFD4]">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-stone-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-stone-600">
                          {item.description}
                        </p>
                      </div>
                      {item.price && (
                        <span
                          className="shrink-0 font-medium tabular-nums"
                          style={{ color: accent }}
                        >
                          {item.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Maker story */}
        {config.maker && (
          <section
            aria-labelledby="maker-heading"
            className="mt-16 grid items-center gap-8 md:grid-cols-2"
          >
            <div className="overflow-hidden rounded-3xl shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={config.maker.image.src}
                alt={config.maker.image.alt}
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p
                className="text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                {config.maker.eyebrow ?? "The makers"}
              </p>
              <h2
                id="maker-heading"
                className="mt-2 text-3xl text-stone-900 sm:text-4xl"
                style={displayFont}
              >
                {config.maker.title}
              </h2>
              {config.maker.quote && (
                <>
                  <blockquote
                    className="mt-5 border-l-2 pl-4 text-lg leading-relaxed text-stone-800"
                    style={{ ...displayFont, borderColor: accent }}
                  >
                    “{config.maker.quote}”
                  </blockquote>
                  {config.maker.quoteAttr && (
                    <p className="mt-2 text-xs text-stone-500">
                      — {config.maker.quoteAttr}
                    </p>
                  )}
                </>
              )}
              <div className="mt-5 space-y-3 text-base leading-relaxed text-stone-700">
                {config.maker.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              {config.maker.sideNote && (
                <div className="mt-6 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={config.maker.sideNote.src}
                    alt={config.maker.sideNote.alt}
                    className="h-16 w-20 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <p className="text-sm text-stone-600">
                    {config.maker.sideNote.caption}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 6. Review wall */}
        {reviews.length > 0 && (
          <section aria-labelledby="reviews-heading" className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p
                  className="text-xs font-medium uppercase tracking-[0.2em]"
                  style={{ color: accent }}
                >
                  {config.reviewEyebrow ?? "What visitors say"}
                </p>
                <h2
                  id="reviews-heading"
                  className="mt-2 text-3xl text-stone-900 sm:text-4xl"
                  style={displayFont}
                >
                  {config.reviewTitle}
                </h2>
              </div>
              {(config.reviewLinkHref || mapsUrl) && (
                <a
                  href={config.reviewLinkHref ?? mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-4"
                  style={{ color: accent, textDecorationColor: `${accent}66` }}
                >
                  {config.reviewLinkLabel ?? "Read on Google →"}
                </a>
              )}
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {reviews.map((r) => (
                <li
                  key={`${r.author}-${r.quote.slice(0, 32)}`}
                  className="rounded-2xl border border-[#E8DFD4] bg-white p-5 shadow-sm"
                >
                  <blockquote className="text-[15px] leading-relaxed text-stone-800">
                    “{r.quote}”
                  </blockquote>
                  <footer className="mt-4 text-sm text-stone-500">
                    <span className="font-medium text-stone-800">
                      {r.author}
                    </span>
                    {typeof r.rating === "number" && (
                      <span> · {r.rating}/5</span>
                    )}
                    <span> · via {r.source}</span>
                    {r.sourceUrl && (
                      <>
                        {" "}
                        <a
                          href={r.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-stone-300 underline-offset-2"
                        >
                          source
                        </a>
                      </>
                    )}
                  </footer>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Optional before/after */}
        {config.beforeAfter && (
          <section
            aria-labelledby="before-after-heading"
            className="mt-16 overflow-hidden rounded-3xl border border-[#E8DFD4] bg-white"
          >
            <div className="border-b border-[#E8DFD4] px-5 py-4 sm:px-6">
              <p
                className="text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Outreach note
              </p>
              <h2
                id="before-after-heading"
                className="mt-1 text-xl text-stone-900"
                style={displayFont}
              >
                {config.beforeAfter.title}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2">
              <figure className="relative border-b border-[#E8DFD4] sm:border-b-0 sm:border-r">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={config.beforeAfter.before.src}
                  alt={config.beforeAfter.before.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {config.beforeAfter.before.label}
                </figcaption>
              </figure>
              <figure className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={config.beforeAfter.after.src}
                  alt={config.beforeAfter.after.alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <figcaption
                  className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
                  style={{ backgroundColor: `${accent}E6` }}
                >
                  {config.beforeAfter.after.label}
                </figcaption>
              </figure>
            </div>
          </section>
        )}

        {/* 7. Visit */}
        <section
          aria-labelledby="visit-heading"
          className="mt-16 grid gap-8 rounded-3xl border border-[#E8DFD4] bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
        >
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              Find us
            </p>
            <h2
              id="visit-heading"
              className="mt-2 text-3xl text-stone-900"
              style={displayFont}
            >
              {config.visitTitle ?? `Visit · ${v.location.city}`}
            </h2>
            <address className="mt-4 not-italic leading-relaxed text-stone-700">
              {addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            {phone && (
              <p className="mt-4">
                <a
                  href={telHref}
                  className="text-lg font-semibold underline underline-offset-4"
                  style={{ color: accent, textDecorationColor: `${accent}59` }}
                >
                  {phone}
                </a>
              </p>
            )}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border px-5 py-2.5 text-sm font-semibold"
              style={{
                borderColor: `${accent}4D`,
                backgroundColor: accentSoft,
                color: accent,
              }}
            >
              Open in Google Maps →
            </a>
            {config.visitPhoto && (
              <div className="mt-6 overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={config.visitPhoto.src}
                  alt={config.visitPhoto.alt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl text-stone-900" style={displayFont}>
              Hours
            </h3>
            <ul className="mt-4 divide-y divide-[#E8DFD4] text-sm">
              {config.hours.map((row) => (
                <li
                  key={row.day}
                  className="flex justify-between gap-4 py-2.5 text-stone-700"
                >
                  <span className="font-medium text-stone-900">{row.day}</span>
                  <span className="tabular-nums">{row.hours}</span>
                </li>
              ))}
            </ul>
            {config.hoursNote && (
              <p className="mt-4 text-sm leading-relaxed text-amber-950/80">
                {config.hoursNote}
              </p>
            )}
          </div>
        </section>

        {/* 8. Closing CTA */}
        <section
          aria-labelledby="closing-heading"
          className="mt-16 rounded-3xl px-6 py-12 text-center text-white sm:px-10"
          style={{ backgroundColor: accent }}
        >
          <h2
            id="closing-heading"
            className="text-3xl sm:text-4xl"
            style={displayFont}
          >
            {config.closingTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-amber-50/90">
            {config.closingLead ??
              "Unofficial preview using public information. Call or find us on the map — we don’t invent today’s availability."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={telHref}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold"
              style={{ color: accent }}
            >
              {phone ? `Call ${phone}` : v.cta.label}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Directions
            </a>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8DFD4] px-4 py-3 backdrop-blur md:hidden"
        style={{
          backgroundColor: `${paper}F2`,
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={telHref}
            className="flex flex-1 items-center justify-center rounded-full py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            {phone ? `Call ${phone}` : "Call"}
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-full border bg-white py-3 text-sm font-semibold"
            style={{ borderColor: `${accent}59`, color: accent }}
          >
            Directions
          </a>
        </div>
      </div>

      <footer
        className="border-t border-[#E8DFD4]"
        style={{ backgroundColor: accentSoft }}
      >
        <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-stone-600">
          <p className="font-medium text-stone-800">Disclaimer</p>
          <p className="mt-2 max-w-2xl leading-relaxed">
            Unofficial demo redesign of {v.name}. Not affiliated with or
            endorsed by the venue. Content from publicly available sources —
            confirm menu, hours, and seating yourself.
          </p>
          {v.sources.length > 0 && (
            <details className="mt-4">
              <summary className="cursor-pointer font-medium text-stone-800">
                Sources
              </summary>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {v.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-stone-300 underline-offset-2"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}
          <p className="mt-6">
            <Link
              href="/"
              className="text-stone-500 underline decoration-stone-300 underline-offset-2 hover:text-stone-800"
            >
              ← All demos
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
