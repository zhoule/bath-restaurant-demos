import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { VenueCard } from "@/components/VenueCard";
import { venues } from "@/data/venues";
import { oldYorkTeaRoom } from "@/data/venues/old-york-tea-room";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-hub-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-hub-body",
  display: "swap",
});

const VALUE_PROPS = [
  { title: "Mobile-first", body: "Thumb-reach CTAs, sticky call bars, readable type on a phone in the rain." },
  { title: "Real photos & menus", body: "Public venue stills and published boards — not stock filler or invented prices." },
  { title: "One-time build", body: "Static Next.js export you can host once — no monthly theme lock-in." },
  { title: "Cloudflare-ready", body: "Pages-friendly static output, fast edges, simple deploys." },
];

const PROCESS = [
  {
    step: "01",
    title: "Screen",
    body: "We pick venues with a clear story gap — aging site, no site, or maps-only discovery.",
  },
  {
    step: "02",
    title: "Demo",
    body: "Atmosphere hero, food mosaic, curated public menu, attributed reviews — flagship hospitality UI.",
  },
  {
    step: "03",
    title: "Deploy",
    body: "Static export to Cloudflare Pages (or any static host) so a preview link is shareable in minutes.",
  },
  {
    step: "04",
    title: "Contact",
    body: "Soft outreach only — private preview for owners who want a modern page for their cafe.",
  },
];

const COLLAGE = [
  {
    src: "/venues/old-york-tea-room/hero-storefront.jpg",
    alt: "Old York Tea Room storefront",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/venues/rosarios/cannoli-plate.jpg",
    alt: "Rosario’s cannoli",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/venues/mattys-cafe/full-english.jpg",
    alt: "Matty’s full English",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/venues/pulteney-bridge-coffee/hero-storefront.jpg",
    alt: "Pulteney Bridge coffee shopfront",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/venues/gatehouse-coffee/hero-pie-latte-walls.jpg",
    alt: "Gatehouse Coffee pie and latte",
    className: "col-span-1 row-span-1",
  },
];

export default function HomePage() {
  const display = {
    fontFamily: "var(--font-hub-display), Georgia, serif",
  } as const;

  return (
    <div
      className={`${playfair.variable} ${inter.variable} flex min-h-screen flex-col text-stone-900`}
      style={{
        fontFamily: "var(--font-hub-body), ui-sans-serif, system-ui, sans-serif",
        backgroundColor: "#FAF7F2",
      }}
    >
      {/* Atmosphere hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/venues/old-york-tea-room/hero-storefront.jpg"
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 40%" }}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/90">
              Studio experiment · Bath &amp; York
            </p>
            <h1
              className="mt-4 max-w-xl text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl"
              style={display}
            >
              Local hospitality websites for tourist towns
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-stone-200 sm:text-lg">
              Unofficial redesign demos for cafes and tea rooms — warm,
              mobile-first pages built from public photos, menus, and reviews.
              Not affiliated with the venues. Built to show what a modern
              hospitality site can feel like.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gallery"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-black/20 hover:bg-amber-50"
              >
                Browse demos
              </a>
              <a
                href="#process"
                className="inline-flex rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              >
                How we work
              </a>
            </div>
          </div>

          {/* Collage panel */}
          <div className="hidden grid-cols-2 grid-rows-3 gap-2 sm:grid">
            {COLLAGE.map((item) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-2xl shadow-lg shadow-black/30 ${item.className}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section
        aria-label="What you get"
        className="border-y border-stone-200/80 bg-white/70"
      >
        <ul className="mx-auto grid max-w-6xl gap-px sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((item) => (
            <li key={item.title} className="px-5 py-8 sm:px-6">
              <p
                className="text-lg text-stone-900"
                style={display}
              >
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:py-20">
        {/* Featured case */}
        <section aria-labelledby="featured-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
            Featured case
          </p>
          <h2
            id="featured-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={display}
          >
            The Old York Tea Room
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
            Flagship tea-room demo for a maps-only Goodramgate hideaway —
            medieval Lady Row, homemade cakes, cream teas, and a ~4.9 Google
            reputation with no dedicated website.
          </p>

          <Link
            href={`/demos/${oldYorkTeaRoom.slug}/`}
            className="group mt-8 grid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-md transition hover:shadow-xl lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[22rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/venues/old-york-tea-room/hero-storefront.jpg"
                alt="The Old York Tea Room storefront on Goodramgate"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B5E3C]">
                York · Goodramgate · Lady Row
              </p>
              <h3 className="mt-3 text-2xl text-stone-900 sm:text-3xl" style={display}>
                Cakes, loose tea, and a 14th-century hideaway
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Atmosphere hero, food mosaic, maker story, and attributed
                visitor quotes — the S&apos;Olivar-level pattern we use for
                hospitality outreach demos.
              </p>
              <span className="mt-8 inline-flex w-fit items-center rounded-full bg-[#8B5E3C] px-5 py-2.5 text-sm font-semibold text-white">
                Open flagship demo →
              </span>
            </div>
          </Link>
        </section>

        {/* Gallery */}
        <section id="gallery" aria-labelledby="gallery-heading" className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
                Portfolio
              </p>
              <h2
                id="gallery-heading"
                className="mt-2 text-3xl text-stone-900 sm:text-4xl"
                style={display}
              >
                All venue demos
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600">
                {venues.length} unofficial redesigns across Bath &amp; York —
                each labelled clearly as a demo.
              </p>
            </div>
          </div>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((venue) => (
              <li key={venue.id}>
                <VenueCard venue={venue} />
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section id="process" aria-labelledby="process-heading" className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
            Process
          </p>
          <h2
            id="process-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={display}
          >
            Screen → Demo → Deploy → Contact
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
            Four layers we use for hospitality preview work — honest research,
            flagship UI, fast hosting, soft follow-up.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
              >
                <span
                  className="text-2xl text-[#8B5E3C]"
                  style={display}
                >
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Soft CTA */}
        <section
          aria-labelledby="cta-heading"
          className="mt-20 rounded-3xl px-6 py-12 text-center sm:px-10"
          style={{ backgroundColor: "#2C1810" }}
        >
          <h2
            id="cta-heading"
            className="text-3xl text-white sm:text-4xl"
            style={display}
          >
            Want a preview for your cafe?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-stone-300">
            Get in touch to request a private demo. These pages are unofficial
            redesign experiments — we don&apos;t claim affiliation with any
            venue, and we don&apos;t mass-email owners from this hub.
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm text-stone-400">
            Prefer to browse first? Open any demo above and share the link if
            it feels useful.
          </p>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-stone-600">
          <p className="font-medium text-stone-800">Unofficial demos</p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            Portfolio / experiment use only. Not affiliated with or endorsed by
            the venues shown. Photos, menus, hours, and reviews come from
            publicly available sources and may be incomplete or out of date —
            confirm everything with the official businesses before visiting.
          </p>
          <p className="mt-4 text-xs text-stone-500">
            Bath &amp; York hospitality UI experiments · static Next.js ·
            Cloudflare Pages
          </p>
        </div>
      </footer>
    </div>
  );
}
