import type { Venue } from "./types";

/** Public sources only — researched Sep 2026. No invented reviews/prices. */
export const kioskCafe: Venue = {
  id: "kiosk-cafe",
  slug: "kiosk-cafe",
  name: "Kiosk Cafe",
  tagline: "Specialty coffee, seasonal brunch, and gallery vibes on Fossgate",
  heroEyebrow: "York · Cafe · Fossgate",
  shortDescription:
    "Tiny Fossgate cafe / project space — rotating specialty coffee, homemade bread sandwiches, and local art. Listed site dead; Google ~4.9.",
  about: [
    "Kiosk (also known as Kiosk Project Space / Kiosk Cafe) is a petite cafe-gallery at 41 Fossgate, next to the Merchant Adventurers’ Hall. Brian’s Coffee Spot described it as part gallery, part coffee shop, part kitchen.",
    "Coffee has historically featured Dark Woods and rotating single-origin espresso and filter. Food comes from a tiny kitchen with a seasonal all-day breakfast and lunch board — sandwiches on homemade bread, soups, hashes, and cakes.",
    "The former kioskprojectspace.org site is reported dead on listings. Phones appear on aggregators. This demo is unofficial.",
  ],
  status: "live",
  location: {
    addressLines: ["41 Fossgate"],
    city: "York",
    postcode: "YO1 9TF",
    country: "United Kingdom",
    mapQuery: "41 Fossgate, York YO1 9TF",
  },
  contact: {
    phone: "07518 597866",
  },
  hours: {
    summary: "Typically 8:30am–4pm daily (Sun may close earlier)",
    note: "Hours from Sluurpy aggregator; older Brian’s Coffee Spot notes differed — confirm locally.",
  },
  menuHighlights: [
    {
      name: "Flat white / cortado",
      description:
        "Espresso drinks repeatedly listed among popular dishes on public aggregators.",
    },
    {
      name: "Batch brew / V60",
      description:
        "Filter options highlighted in specialty-coffee write-ups (roaster rotates).",
    },
    {
      name: "Bacon sandwich",
      description:
        "Enormous bacon sandwich praised in TripAdvisor narratives; bacon & lettuce sandwich listed on aggregators.",
    },
    {
      name: "Halloumi & potato hash",
      description:
        "Named in a Jan 2025 Google review mirrored on Sluurpy.",
    },
    {
      name: "Soup of the day / tomato soup",
      description:
        "Artichoke soup and tomato soup appear in public reviews and dish lists.",
    },
    {
      name: "Seasonal brunch board",
      description:
        "Menu changes weekly from a tiny kitchen — check the board; not frozen here.",
      isPlaceholder: true,
    },
  ],
  photos: [
    {
      src: "/venues/kiosk-cafe/10-bcs-exterior.jpg",
      alt: "Kiosk Project Space exterior on Fossgate",
      credit: "Brian’s Coffee Spot — public review gallery (2016)",
    },
    {
      src: "/venues/kiosk-cafe/07-bcs-interior.jpg",
      alt: "Inside Kiosk — seating and ceramics",
      credit: "Brian’s Coffee Spot — public review gallery (2016)",
    },
    {
      src: "/venues/kiosk-cafe/08-bcs-counter.jpg",
      alt: "Kiosk counter and kitchen pass",
      credit: "Brian’s Coffee Spot — public review gallery (2016)",
    },
    {
      src: "/venues/kiosk-cafe/09-bcs-coffee.jpg",
      alt: "Coffee service at Kiosk",
      credit: "Brian’s Coffee Spot — public review gallery (2016)",
    },
    {
      src: "/venues/kiosk-cafe/01-fossgate.jpg",
      alt: "Along Fossgate — the independent street Kiosk sits on",
      credit: "Wikimedia / Geograph — Along Fossgate",
    },
    {
      src: "/venues/kiosk-cafe/03-fossgate-street.jpg",
      alt: "Fossgate streetscape inside York’s walls",
      credit: "Wikimedia Commons — Fossgate.jpg",
    },
  ],
  reviews: [
    {
      quote:
        "The best place in York not just to enjoy coffee but to explore coffee. There’s an ever-changing choice of espresso, batch and v60 from roasters around the UK and beyond, perfectly prepared. Everyone’s super friendly…",
      author: "Tom Hiskey",
      source: "Google (via Sluurpy)",
      sourceUrl: "https://www.sluurpy.co.uk/york/restaurant/1671732/kiosk",
      date: "Dec 2025",
      rating: 5,
    },
    {
      quote:
        "Super cute coffee place with a nice ambiance and friendly staff. There is a home-style kitchen behind the counter. I ordered a cup of flat white and halloumi & potato hash, both of which were super delicious.",
      author: "Angel He",
      source: "Google (via Sluurpy)",
      sourceUrl: "https://www.sluurpy.co.uk/york/restaurant/1671732/kiosk",
      date: "Jan 2025",
      rating: 5,
    },
    {
      quote:
        "Outstanding experience from start to finish. The welcome was genuine, service was swift, and the coffee was superb—rich flavour, perfect temperature, and silky milk.",
      author: "Christopher Chell",
      source: "Google (via Sluurpy)",
      sourceUrl: "https://www.sluurpy.co.uk/york/restaurant/1671732/kiosk",
      date: "Oct 2025",
      rating: 5,
    },
  ],
  contentGaps: [
    "Listed project-space site is dead. Hero/mosaic from Brian’s Coffee Spot public gallery (2016) + TripAdvisor/Sluurpy guest shots.",
    "Phone from Sluurpy public listing (07518 597866); older write-ups list a different mobile — confirm locally.",
  ],
  cta: {
    label: "Call Kiosk",
    href: "tel:07518597866",
  },
  secondaryCta: {
    label: "Open in Maps",
    href: "https://www.google.com/maps/search/?api=1&query=41%20Fossgate%2C%20York%20YO1%209TF",
  },
  theme: {
    accent: "#0F766E",
    accentSoft: "#ECFDF8",
  },
  sources: [
    {
      label: "Sluurpy listing",
      url: "https://www.sluurpy.co.uk/york/restaurant/1671732/kiosk",
    },
    {
      label: "TripAdvisor",
      url: "https://www.tripadvisor.co.uk/Restaurant_Review-g186346-d10193924-Reviews-Kiosk-York_North_Yorkshire_England.html",
    },
    {
      label: "Brian’s Coffee Spot (2016)",
      url: "https://www.brian-coffee-spot.com/2016/12/12/kiosk-project-space/",
    },
  ],
};
