import type { Venue } from "./types";

/** Public sources only — researched Sep 2026. No invented reviews/prices. */
export const oldYorkTeaRoom: Venue = {
  id: "old-york-tea-room",
  slug: "old-york-tea-room",
  name: "The Old York Tea Room",
  tagline: "Cakes, loose tea, and a 14th-century Goodramgate hideaway",
  heroEyebrow: "York · Tea room · Goodramgate",
  shortDescription:
    "Intimate tea room in Grade I Lady Row (Our Lady’s Row) on Goodramgate — homemade cakes, cream teas, and a ~4.9 Google reputation with no dedicated website.",
  about: [
    "The Old York Tea Room sits at 72 Goodramgate inside Lady Row (Our Lady’s Row) — a Grade I listed overhanging timber range dating from 1316/1317, among the earliest urban vernacular buildings surviving in England.",
    "Run by Tony and Thomas Vickers, the tiny upstairs tea room (around 14 covers) is celebrated for generously sized homemade cakes, loose teas, coffee, and cream teas. Press coverage notes long queues and a strong takeaway cake trade; a second takeaway-focused cake shop on High Petergate has been announced in local media.",
    "There is no dedicated official website — discovery is via maps listings, press, and social. This demo is an unofficial redesign for hospitality UX exploration only.",
  ],
  status: "live",
  location: {
    addressLines: ["72 Goodramgate", "Our Lady’s Row / Lady Row"],
    city: "York",
    postcode: "YO1 7LF",
    country: "United Kingdom",
    mapQuery: "72 Goodramgate, York YO1 7LF",
  },
  contact: {
    phone: "01904 624247",
  },
  hours: {
    summary: "Wed–Sat ~9am–4pm · Sun ~9:30am–3pm · Mon–Tue closed",
    note: "Hours from public aggregators (Yorkshire.com / Sluurpy). Confirm before visiting — the room is small and often at capacity.",
  },
  menuHighlights: [
    {
      name: "Homemade cakes & blondies",
      description:
        "Daily counter bakes including brownies, blondies, and cheesecakes (press mentions Lotus Biscoff cheesecake and Rolo blondie).",
    },
    {
      name: "Cream tea",
      description:
        "Tea with homemade scone, jam, and clotted cream — a staple call-out in visitor write-ups.",
    },
    {
      name: "Cuppa N Cake / cinnamon bun",
      description:
        "Popular pairings listed on public menu aggregators alongside Yorkshire tea and Turkish coffee.",
    },
    {
      name: "Afternoon Experience for Two",
      description:
        "Finger sandwiches, homemade scones with jam & clotted cream, cake selection, and tea — priced publicly in a Feb 2025 local write-up; confirm in person.",
    },
    {
      name: "Hot pancakes",
      description:
        "Noted as a newer addition after the 2025 interior refresh (local Substack coverage).",
    },
    {
      name: "Loose teas & coffee",
      description:
        "Selection of loose teas and coffees; exact list changes — ask at the counter.",
      isPlaceholder: true,
    },
  ],
  photos: [
    {
      src: "/venues/old-york-tea-room/01-72-goodramgate.jpg",
      alt: "No. 72 Goodramgate on Lady Row — the tea room’s historic frontage",
      credit: "Wikimedia Commons — Lady Row, 72 Goodramgate (2024)",
    },
    {
      src: "/venues/old-york-tea-room/02-lady-row-row.jpg",
      alt: "Lady Row overhanging timber range along Goodramgate",
      credit: "Wikimedia Commons — Lady Row, Goodramgate (2024)",
    },
    {
      src: "/venues/old-york-tea-room/03-lady-row.jpg",
      alt: "Lady Row street elevation in York’s city centre",
      credit: "Wikimedia Commons — Lady Row.jpg",
    },
    {
      src: "/venues/old-york-tea-room/04-goodramgate.jpg",
      alt: "Goodramgate streetscape near the medieval row",
      credit: "Wikimedia Commons — Goodramgate, York",
    },
  ],
  reviews: [
    {
      quote:
        "Absolutely love this place! One of the best tea rooms in York and can’t recommend it enough. Food and drinks are 5⭐ quality and the cakes are delicious… The aesthetics are beautifully decorated. Such a nice environment in one of the oldest overhanging buildings in England.",
      author: "Visitor (quoted on Yorkshire.com listing)",
      source: "Yorkshire.com listing",
      sourceUrl:
        "https://www.yorkshire.com/york/food-drink/tea-rooms/the-old-york-tea-room",
    },
    {
      quote:
        "Had coffee and cakes and OMG the cakes were amazing and huge! Beautifully presented too… The tearoom is tiny but absolutely stunning and full of character and charm.",
      author: "Visitor (quoted on Yorkshire.com listing)",
      source: "Yorkshire.com listing",
      sourceUrl:
        "https://www.yorkshire.com/york/food-drink/tea-rooms/the-old-york-tea-room",
    },
  ],
  contentGaps: [
    "Interior and cake-counter photos were not available under clear open licences this run — gallery uses Wikimedia exteriors of Lady Row / 72 Goodramgate.",
    "No full official digital menu; dish names come from press and aggregators.",
  ],
  cta: {
    label: "Call the tea room",
    href: "tel:01904624247",
  },
  secondaryCta: {
    label: "Open in Maps",
    href: "https://www.google.com/maps/search/?api=1&query=72%20Goodramgate%2C%20York%20YO1%207LF",
  },
  theme: {
    accent: "#7A1F2B",
    accentSoft: "#F6E8E4",
  },
  sources: [
    {
      label: "Yorkshire.com listing",
      url: "https://www.yorkshire.com/york/food-drink/tea-rooms/the-old-york-tea-room",
    },
    {
      label: "York Press first look",
      url: "https://www.yorkpress.co.uk/news/23292236.first-look---inside-old-york-tea-room-goodramgate/",
    },
    {
      label: "Local Substack refresh note",
      url: "https://houseofyorkholidayhomes.substack.com/p/old-york-tea-room-unveils-a-fresh",
    },
  ],
};
