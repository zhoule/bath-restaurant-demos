import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import type { Venue } from "@/data/venues/types";
import { HeroCarousel } from "@/components/old-york/HeroCarousel";
import { TableRequestForm } from "@/components/old-york/TableRequestForm";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-oy-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-oy-body",
  display: "swap",
});

type MosaicItem = {
  src: string;
  alt: string;
  label: string;
  span?: "wide" | "tall" | "normal";
};

const MOSAIC: MosaicItem[] = [
  {
    src: "/venues/old-york-tea-room/window-cakes.jpg",
    alt: "Cake towers and traybakes glowing in the Goodramgate window",
    label: "Window cakes",
    span: "wide",
  },
  {
    src: "/venues/old-york-tea-room/cream-tea.jpg",
    alt: "Cream tea with homemade scones, jam and clotted cream",
    label: "Cream tea",
  },
  {
    src: "/venues/old-york-tea-room/cakes-tea-table.jpg",
    alt: "Homemade cakes with tea and coffee on a wooden table",
    label: "Homemade cakes",
  },
  {
    src: "/venues/old-york-tea-room/cheesecake-caramel.jpg",
    alt: "Homemade baked cheesecake with salted caramel and walnuts",
    label: "Caramel walnut cheesecake",
  },
  {
    src: "/venues/old-york-tea-room/cinnamon-bun.jpg",
    alt: "Glazed cinnamon bun on floral china",
    label: "Cinnamon bun",
  },
  {
    src: "/venues/old-york-tea-room/afternoon-table.jpg",
    alt: "Afternoon table setting with cakes, silver teapots and floral cups",
    label: "Upstairs table",
    span: "tall",
  },
  {
    src: "/venues/old-york-tea-room/cake-counter-display.jpg",
    alt: "Counter display of cheesecakes, blondies and traybakes",
    label: "Counter display",
    span: "wide",
  },
  {
    src: "/venues/old-york-tea-room/hot-chocolate.jpg",
    alt: "Hot chocolate topped with pink and white marshmallows",
    label: "Hot chocolate",
  },
  {
    src: "/venues/old-york-tea-room/bacon-roll-spread.jpg",
    alt: "Bacon roll with coffee, tea and cake",
    label: "Bacon roll",
  },
];

type MenuSection = {
  title: string;
  note?: string;
  items: { name: string; description: string; price?: string }[];
};

const MENU: MenuSection[] = [
  {
    title: "Afternoon tea",
    note: "Afternoon Experience price from a Feb 2025 local write-up — confirm in person.",
    items: [
      {
        name: "Cream tea",
        description:
          "Tea with homemade scone, jam and clotted cream — a staple call-out in visitor write-ups.",
      },
      {
        name: "Afternoon Experience for Two",
        description:
          "Finger sandwiches, homemade scones with jam & clotted cream, cake selection, and a choice of tea.",
        price: "£43.99",
      },
      {
        name: "Cuppa N Cake",
        description:
          "Popular pairing listed on public menu aggregators alongside Yorkshire tea.",
      },
    ],
  },
  {
    title: "Cakes & bakes",
    items: [
      {
        name: "Homemade cakes & blondies",
        description:
          "Daily counter bakes — brownies, blondies, cheesecakes (press mentions Lotus Biscoff cheesecake and Rolo blondie).",
      },
      {
        name: "Caramel walnut cheesecake",
        description:
          "Homemade baked cheesecake with salted caramel walnuts — photographed for York Press.",
      },
      {
        name: "Cinnamon bun",
        description: "Glazed bun listed on public aggregators; a regular counter favourite.",
      },
      {
        name: "Hot pancakes",
        description:
          "Noted as a newer addition after the 2025 interior refresh (local Substack coverage).",
      },
    ],
  },
  {
    title: "Savoury & drinks",
    items: [
      {
        name: "Bacon & sausage baps",
        description:
          "Chalkboard call-out on the Goodramgate frontage; savoury menu inside.",
      },
      {
        name: "Paninis & melts",
        description:
          "Visitor notes mention tuna melt and double cheese panini among sit-in favourites.",
      },
      {
        name: "Loose teas & coffee",
        description:
          "Selection of loose teas (True Tea of Harrogate noted at opening) plus coffee and Turkish coffee — ask at the counter.",
      },
      {
        name: "Hot chocolate",
        description: "Often finished with whipped cream and marshmallows.",
      },
    ],
  },
];

const HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "9:00 – 16:00" },
  { day: "Thursday", hours: "9:00 – 16:00" },
  { day: "Friday", hours: "9:00 – 16:00" },
  { day: "Saturday", hours: "9:00 – 16:00" },
  { day: "Sunday", hours: "9:30 – 15:00" },
];

const IG_URL = "https://www.instagram.com/theoldyorktea/";
const MAP_EMBED =
  "https://maps.google.com/maps?q=72%20Goodramgate%2C%20York%20YO1%207LF&z=16&output=embed";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export function FlagshipTeaRoomPage({ venue }: { venue: Venue }) {
  const v = venue;
  const mapsUrl =
    v.secondaryCta?.href ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.location.mapQuery)}`;
  const telHref = v.contact.phone
    ? `tel:${v.contact.phone.replace(/\s/g, "")}`
    : v.cta.href;
  const phone = v.contact.phone ?? "01904 624247";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: v.name,
    servesCuisine: "Tea room",
    address: {
      "@type": "PostalAddress",
      streetAddress: "72 Goodramgate",
      addressLocality: "York",
      postalCode: "YO1 7LF",
      addressCountry: "GB",
    },
    telephone: "+441904624247",
    url: "https://bath-restaurant-demos.pages.dev/demos/old-york-tea-room/",
    image:
      "https://bath-restaurant-demos.pages.dev/venues/old-york-tea-room/cream-tea.jpg",
    sameAs: [IG_URL],
  };

  return (
    <div
      className={`${playfair.variable} ${inter.variable} flex min-h-screen flex-col bg-[#FAF7F2] text-[#1C1917]`}
      style={{
        fontFamily: "var(--font-oy-body), ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Desktop persistent CTA header */}
      <header className="sticky top-0 z-50 hidden border-b border-[#E8DFD4]/80 bg-[#FAF7F2]/95 backdrop-blur md:block">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-wide text-[#6B3E2E]"
            style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
          >
            The Old York Tea Room
          </a>
          <nav className="flex items-center gap-2" aria-label="Quick actions">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-stone-700 hover:bg-[#F5EDE4]"
              aria-label="Instagram @theoldyorktea"
            >
              <InstagramIcon className="h-4 w-4" />
              <span className="hidden lg:inline">@theoldyorktea</span>
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#6B3E2E]/30 bg-white px-4 py-2 text-sm font-semibold text-[#6B3E2E]"
            >
              Directions
            </a>
            <a
              href={telHref}
              className="inline-flex items-center rounded-full bg-[#6B3E2E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5a3426]"
            >
              Call {phone}
            </a>
          </nav>
        </div>
      </header>

      {/* 1. Food-forward hero carousel */}
      <section id="top" className="relative flex min-h-[88svh] items-end">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-28 sm:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-100/90">
            {v.heroEyebrow}
          </p>
          <h1
            className="mt-3 max-w-xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
          >
            {v.name}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-100/95 sm:text-lg">
            {v.tagline}
          </p>
          <p className="mt-3 text-sm text-stone-200/85">
            72 Goodramgate · Lady Row · {phone}
          </p>
          <p className="mt-3 max-w-md text-sm font-medium text-amber-50/95">
            Small room · walk-ins welcome · call ahead for larger parties
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={telHref}
              className="inline-flex items-center rounded-full bg-[#6B3E2E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-[#5a3426]"
            >
              Call {phone}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/45 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/25"
            >
              Directions
            </a>
            <a
              href="#request-table"
              className="inline-flex items-center rounded-full border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
            >
              Request a table
            </a>
          </div>
        </div>
      </section>

      {/* 2. Proof strip */}
      <section
        aria-label="Highlights"
        className="border-b border-[#E8DFD4] bg-[#F5EDE4]"
      >
        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { k: "~4.9★", v: "Google reputation" },
            { k: "Grade I", v: "Lady Row, 1316/17" },
            { k: "~14", v: "Covers upstairs" },
            { k: "Gold", v: "YorkMix Choice 2024" },
          ].map((item) => (
            <li
              key={item.k}
              className="flex flex-col items-center px-3 py-6 text-center"
            >
              <span
                className="text-2xl text-[#6B3E2E] sm:text-3xl"
                style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
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
        {/* Priced offer card */}
        <section
          aria-labelledby="offer-heading"
          className="overflow-hidden rounded-3xl border border-[#6B3E2E]/20 bg-white shadow-sm"
        >
          <div className="grid md:grid-cols-5">
            <div className="relative md:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/venues/old-york-tea-room/cakes-tea-table.jpg"
                alt="Homemade cakes with tea on a wooden table"
                className="h-48 w-full object-cover md:h-full"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
                Ritual offer
              </p>
              <h2
                id="offer-heading"
                className="mt-2 text-2xl text-stone-900 sm:text-3xl"
                style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
              >
                Afternoon Experience for Two
              </h2>
              <p
                className="mt-2 text-3xl text-[#6B3E2E]"
                style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
              >
                £43.99
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-stone-700">
                <li>Finger sandwiches</li>
                <li>Homemade scones with jam &amp; clotted cream</li>
                <li>Cake selection</li>
                <li>Choice of tea</li>
              </ul>
              <p className="mt-3 text-xs text-stone-500">
                Price from a Feb 2025 local write-up — confirm in person.
              </p>
              <a
                href={telHref}
                className="mt-6 inline-flex w-fit rounded-full bg-[#6B3E2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5a3426]"
              >
                Call to enquire · {phone}
              </a>
            </div>
          </div>
        </section>

        {/* Food mosaic */}
        <section aria-labelledby="kitchen-heading" className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
            From the kitchen
          </p>
          <h2
            id="kitchen-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
          >
            Cakes, cream teas, and a tiny upstairs room
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
            Real photos of this tea room — window display, upstairs tables, and
            plates — from public press and guest galleries. Not stock.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {MOSAIC.map((item) => (
              <li
                key={item.src}
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

        {/* Menu editorial */}
        <section
          aria-labelledby="menu-heading"
          className="mt-16 rounded-3xl bg-[#F5EDE4] px-5 py-10 sm:px-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
            On the counter
          </p>
          <h2
            id="menu-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
          >
            A curated tea-room menu
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
            Dish names from public press and aggregators. Prices shown only when
            published — never invented.
          </p>
          <div className="mt-10 space-y-10">
            {MENU.map((section) => (
              <div key={section.title}>
                <h3
                  className="border-b border-[#6B3E2E]/30 pb-2 text-xl text-[#6B3E2E]"
                  style={{
                    fontFamily: "var(--font-oy-display), Georgia, serif",
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
                        <span className="shrink-0 font-medium tabular-nums text-[#6B3E2E]">
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

        {/* Maker / Lady Row story */}
        <section
          aria-labelledby="maker-heading"
          className="mt-16 grid items-center gap-8 md:grid-cols-2"
        >
          <div className="overflow-hidden rounded-3xl shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/venues/old-york-tea-room/makers-tony-thomas.jpg"
              alt="Tony and Thomas Vickers in the kitchen"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
              The makers
            </p>
            <h2
              id="maker-heading"
              className="mt-2 text-3xl text-stone-900 sm:text-4xl"
              style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
            >
              Tony &amp; Thomas, upstairs on Lady Row
            </h2>
            <blockquote
              className="mt-5 border-l-2 border-[#6B3E2E] pl-4 text-lg leading-relaxed text-stone-800"
              style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
            >
              “We modelled the decor on our own lounge — we wanted it to be
              wooden and cosy.”
            </blockquote>
            <p className="mt-2 text-xs text-stone-500">
              — Tony Vickers, York Press first look
            </p>
            <div className="mt-5 space-y-3 text-base leading-relaxed text-stone-700">
              <p>
                The tea room sits at 72 Goodramgate inside Lady Row (Our Lady’s
                Row) — a Grade I overhanging timber range from 1316/1317. About
                14 covers upstairs; no lift — takeaway from the street is
                always an option.
              </p>
              <p>
                Thomas bakes the cakes and cheesecakes; local suppliers for tea
                and pastries. A second takeaway-focused Old York Cake Shop on
                High Petergate has been announced in local media.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/venues/old-york-tea-room/owners-yorkmix-award.jpg"
                alt="Tony and Thomas with YorkMix Choice Awards 2024 Gold"
                className="h-16 w-20 rounded-xl object-cover"
                loading="lazy"
              />
              <p className="text-sm text-stone-600">
                YorkMix Choice Awards 2024 — Gold Award winners.
              </p>
            </div>
          </div>
        </section>

        {/* Review wall */}
        <section aria-labelledby="reviews-heading" className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
                What visitors say
              </p>
              <h2
                id="reviews-heading"
                className="mt-2 text-3xl text-stone-900 sm:text-4xl"
                style={{
                  fontFamily: "var(--font-oy-display), Georgia, serif",
                }}
              >
                ~4.9 · loved for cakes &amp; charm
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=The%20Old%20York%20Tea%20Room%20Goodramgate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#6B3E2E] underline decoration-[#6B3E2E]/40 underline-offset-4"
            >
              Read on Google →
            </a>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {v.reviews.map((r) => (
              <li
                key={`${r.author}-${r.quote.slice(0, 32)}`}
                className="rounded-2xl border border-[#E8DFD4] bg-white p-5 shadow-sm"
              >
                <blockquote className="text-[15px] leading-relaxed text-stone-800">
                  “{r.quote}”
                </blockquote>
                <footer className="mt-4 text-sm text-stone-500">
                  <span className="font-medium text-stone-800">{r.author}</span>
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

        {/* Request a table — honest, client-side only */}
        <section
          id="request-table"
          aria-labelledby="request-heading"
          className="mt-16 rounded-3xl border border-[#E8DFD4] bg-white p-6 shadow-sm sm:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
            Tables
          </p>
          <h2
            id="request-heading"
            className="mt-2 text-3xl text-stone-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
          >
            Walk-ins welcome
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-600">
            Small room · walk-ins welcome · call ahead for larger parties. About
            14 covers upstairs — we don&apos;t invent online availability or a
            fake Book button.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={telHref}
              className="inline-flex rounded-full bg-[#6B3E2E] px-6 py-3 text-sm font-semibold text-white"
            >
              Call to reserve · {phone}
            </a>
          </div>
          <div className="mt-8 border-t border-[#E8DFD4] pt-8">
            <h3
              className="text-xl text-stone-900"
              style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
            >
              Optional: leave a request
            </h3>
            <div className="mt-4">
              <TableRequestForm phone={phone} telHref={telHref} />
            </div>
          </div>
        </section>

        {/* Visit — map embed + IG */}
        <section
          aria-labelledby="visit-heading"
          className="mt-16 grid gap-8 rounded-3xl border border-[#E8DFD4] bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B3E2E]">
              Find us
            </p>
            <h2
              id="visit-heading"
              className="mt-2 text-3xl text-stone-900"
              style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
            >
              Visit · York
            </h2>
            <address className="mt-4 not-italic leading-relaxed text-stone-700">
              72 Goodramgate
              <br />
              Our Lady’s Row / Lady Row
              <br />
              York YO1 7LF
              <br />
              United Kingdom
            </address>
            <p className="mt-4">
              <a
                href={telHref}
                className="text-lg font-semibold text-[#6B3E2E] underline decoration-[#6B3E2E]/35 underline-offset-4"
              >
                {phone}
              </a>
            </p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#6B3E2E]"
            >
              <InstagramIcon className="h-5 w-5" />
              @theoldyorktea on Instagram
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-[#6B3E2E]/30 bg-[#F5EDE4] px-5 py-2.5 text-sm font-semibold text-[#6B3E2E]"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#E8DFD4]">
              <iframe
                title="Map — 72 Goodramgate, Lady Row, York"
                src={MAP_EMBED}
                className="aspect-[16/10] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <h3
              className="text-xl text-stone-900"
              style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
            >
              Hours
            </h3>
            <ul className="mt-4 divide-y divide-[#E8DFD4] text-sm">
              {HOURS.map((row) => (
                <li
                  key={row.day}
                  className="flex justify-between gap-4 py-2.5 text-stone-700"
                >
                  <span className="font-medium text-stone-900">{row.day}</span>
                  <span className="tabular-nums">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-amber-950/80">
              Hours from public aggregators. The room is small and often at
              capacity — expect a queue, and call ahead if you can. Stairs to
              seating; no wheelchair access upstairs (takeaway from the street
              is offered).
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/venues/old-york-tea-room/storefront-window-glow.jpg"
                alt="Storefront window glowing with cakes and pendant lights"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          aria-labelledby="closing-heading"
          className="mt-16 rounded-3xl bg-[#6B3E2E] px-6 py-12 text-center text-white sm:px-10"
        >
          <h2
            id="closing-heading"
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: "var(--font-oy-display), Georgia, serif" }}
          >
            Come for cake. Stay for the beams.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-amber-50/90">
            Small room · walk-ins welcome · call ahead for larger parties. Find
            us on Goodramgate — we don’t invent today’s availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={telHref}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#6B3E2E]"
            >
              Call {phone}
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              Directions
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8DFD4] bg-[#FAF7F2]/95 px-4 py-3 backdrop-blur md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={telHref}
            className="flex flex-1 items-center justify-center rounded-full bg-[#6B3E2E] py-3 text-sm font-semibold text-white"
          >
            Call {phone}
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center rounded-full border border-[#6B3E2E]/35 bg-white py-3 text-sm font-semibold text-[#6B3E2E]"
          >
            Directions
          </a>
        </div>
      </div>

      <footer className="border-t border-[#E8DFD4] bg-[#F5EDE4]">
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
