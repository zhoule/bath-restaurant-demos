import type { FlagshipConfig } from "./types";
import { kioskCafe } from "@/data/venues/kiosk-cafe";

const base = "/venues/kiosk-cafe";

export const kioskCafeFlagship: FlagshipConfig = {
  venue: kioskCafe,
  hero: {
    src: `${base}/hero-interior-counter.jpg`,
    alt: "Kiosk Cafe counter with espresso machine, chalkboard menu, and gallery seating",
    objectPosition: "center 40%",
  },
  proof: [
    { k: "~4.9★", v: "Google reputation" },
    { k: "Rotating", v: "Guest specialty roasters" },
    { k: "Tiny", v: "~10–12 covers" },
    { k: "Gallery", v: "Local art & ceramics" },
  ],
  mosaicEyebrow: "Coffee & craft",
  mosaicTitle: "Specialty coffee, seasonal brunch, gallery vibes",
  mosaicLead:
    "Real photos of Kiosk — counter, ceramics, seating, and plates — from Brian’s Coffee Spot’s public review gallery and guest listings. Not stock.",
  mosaic: [
    {
      src: `${base}/hero-interior-counter.jpg`,
      alt: "Barista counter and chalkboard coffee menu",
      label: "Counter & board",
      span: "wide",
    },
    {
      src: `${base}/gallery-seating.jpg`,
      alt: "Gallery seating with patchwork textile",
      label: "Gallery seating",
    },
    {
      src: `${base}/coffee-service.jpg`,
      alt: "Coffee service at Kiosk",
      label: "Coffee service",
    },
    {
      src: `${base}/counter-close.jpg`,
      alt: "Close view of the kitchen pass and counter",
      label: "Kitchen pass",
      span: "tall",
    },
    {
      src: `${base}/window-pastries.jpg`,
      alt: "Pastries and ceramics near the window",
      label: "Window pastries",
    },
    {
      src: `${base}/filter-coffee.jpg`,
      alt: "Filter coffee setup",
      label: "Filter / V60",
    },
    {
      src: `${base}/brunch-board.jpg`,
      alt: "Brunch board and cafe details collage",
      label: "Brunch board",
      span: "wide",
    },
    {
      src: `${base}/ceramics-shelf.jpg`,
      alt: "Local ceramics on shelves",
      label: "Ceramics",
    },
    {
      src: `${base}/exterior.jpg`,
      alt: "Kiosk Project Space exterior on Fossgate",
      label: "41 Fossgate",
    },
  ],
  menuTitle: "Rotating coffee · seasonal board",
  menuLead:
    "Dish and drink names from Brian’s Coffee Spot, TripAdvisor, and Sluurpy. The board changes — prices omitted unless clearly public.",
  menu: [
    {
      title: "Coffee",
      items: [
        {
          name: "Flat white / cortado / espresso",
          description:
            "Espresso drinks repeatedly listed among popular dishes on public aggregators.",
        },
        {
          name: "Batch brew / V60",
          description:
            "Filter options highlighted in specialty-coffee write-ups — roaster rotates (DAK, Fort, Scenery, Dark Woods and others named publicly).",
        },
        {
          name: "Retail beans",
          description: "Guest-roaster bags sold at the counter when stocked.",
        },
      ],
    },
    {
      title: "Brunch & lunch board",
      items: [
        {
          name: "Bacon sandwich",
          description:
            "Enormous bacon sandwich praised in TripAdvisor narratives; bacon & lettuce sandwich listed on aggregators.",
        },
        {
          name: "Halloumi & potato hash",
          description: "Named in a Jan 2025 Google review mirrored on Sluurpy.",
        },
        {
          name: "Soup of the day",
          description:
            "Artichoke soup and tomato soup appear in public reviews and dish lists.",
        },
        {
          name: "Seasonal brunch board",
          description:
            "Menu changes from a tiny kitchen — check the chalkboard; not frozen here.",
        },
      ],
    },
  ],
  maker: {
    eyebrow: "The makers",
    title: "Part gallery, part coffee shop, part kitchen",
    image: {
      src: `${base}/gallery-seating.jpg`,
      alt: "Kiosk gallery seating and textiles",
    },
    quote:
      "A hybrid: part gallery, part coffee shop and part kitchen, but 100% amazing.",
    quoteAttr: "Brian’s Coffee Spot, 2016",
    paragraphs: [
      "Kiosk (also known as Kiosk Project Space / Kiosk Cafe) is a petite cafe-gallery at 41 Fossgate, next to the Merchant Adventurers’ Hall. Coffee has historically featured Dark Woods and rotating single-origin espresso and filter.",
      "Food comes from a tiny kitchen with a seasonal all-day breakfast and lunch board — sandwiches on homemade bread, soups, hashes, and cakes. Local ceramics and art line the walls.",
      "The former kioskprojectspace.org site is reported dead on listings. Phones appear on aggregators. This demo is unofficial.",
    ],
    sideNote: {
      src: `${base}/exterior.jpg`,
      alt: "Exterior on Fossgate",
      caption: "Tucked beside the Merchant Adventurers’ Hall on Fossgate.",
    },
  },
  reviewTitle: "~4.9 · explore coffee on Fossgate",
  reviewLinkHref:
    "https://www.google.com/maps/search/?api=1&query=Kiosk%20Cafe%2041%20Fossgate%20York",
  hours: [
    { day: "Monday", hours: "8:30 – 16:00" },
    { day: "Tuesday", hours: "8:30 – 16:00" },
    { day: "Wednesday", hours: "8:30 – 16:00" },
    { day: "Thursday", hours: "8:30 – 16:00" },
    { day: "Friday", hours: "8:30 – 16:00" },
    { day: "Saturday", hours: "8:30 – 16:00" },
    { day: "Sunday", hours: "8:30 – 15:00" },
  ],
  hoursNote:
    "Hours from Sluurpy aggregator; older Brian’s Coffee Spot notes differed — confirm locally. Tiny room; often busy.",
  visitPhoto: {
    src: `${base}/exterior.jpg`,
    alt: "Kiosk exterior",
  },
  closingTitle: "Come for the V60. Stay for the ceramics.",
  beforeAfter: {
    title: "Fossgate streetscape → their counter & craft",
    before: {
      src: `${base}/before-street.jpg`,
      alt: "Along Fossgate",
      label: "Before · street only",
    },
    after: {
      src: `${base}/hero-interior-counter.jpg`,
      alt: "Kiosk counter",
      label: "After · their shop",
    },
  },
  jsonLdExtra: { servesCuisine: "Coffee shop" },
};
