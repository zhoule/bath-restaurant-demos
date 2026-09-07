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
    note: "Hours from public aggregators (Yorkshire.com / Sluurpy / restaurants-info). Confirm before visiting — the room is small and often at capacity.",
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
        "Finger sandwiches, homemade scones with jam & clotted cream, cake selection, and tea — £43.99 in a Feb 2025 local write-up; confirm in person.",
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
    },
  ],
  photos: [
    {
      src: "/venues/old-york-tea-room/hero-storefront.jpg",
      alt: "The Old York Tea Room storefront on Goodramgate",
      credit: "York Press — Maxine Gordon / first look (Lady Row exterior)",
    },
    {
      src: "/venues/old-york-tea-room/window-cakes.jpg",
      alt: "Cake towers in the Goodramgate window",
      credit: "Public guest gallery via restaurants-info.com",
    },
    {
      src: "/venues/old-york-tea-room/cream-tea.jpg",
      alt: "Cream tea with scones, jam and clotted cream",
      credit: "Public guest gallery via restaurants-info.com",
    },
    {
      src: "/venues/old-york-tea-room/cheesecake-caramel.jpg",
      alt: "Homemade caramel walnut cheesecake",
      credit: "York Press — homemade cheesecake at The Old York Tea Room",
    },
    {
      src: "/venues/old-york-tea-room/cake-counter-display.jpg",
      alt: "Counter cakes and traybakes",
      credit: "YorkMix / venue social republish",
    },
    {
      src: "/venues/old-york-tea-room/makers-tony-thomas.jpg",
      alt: "Tony and Thomas Vickers",
      credit: "Yorkshire Post — Pic credit: The Old York Tea Room",
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
      author: "Nursemel",
      source: "restaurants-info.com (public review mirror)",
      sourceUrl: "https://theoldyorktearoom.restaurants-info.com/",
      rating: 5,
    },
    {
      quote:
        "What an amazing lovely little hidden gem… The 35 minute wait outside to get in was well worth it. The owners Tony and Tomas were super friendly… The best black forest gateau, a brownie with a chocolate bourbon buried on top and snickers gateau.",
      author: "Simon Varney",
      source: "restaurants-info.com (public review mirror)",
      sourceUrl: "https://theoldyorktearoom.restaurants-info.com/",
      rating: 5,
    },
    {
      quote:
        "Absolutely stunning tea room with the most amazing friendly hosts! Worth the wait in the queue 100%. My partners sandwich was huge and tasty and my home made warmed scone with lashings of cream and jam.",
      author: "Kirsty Willson",
      source: "restaurants-info.com (public review mirror)",
      sourceUrl: "https://theoldyorktearoom.restaurants-info.com/",
      rating: 5,
    },
    {
      quote:
        "This is the 2nd time I've been here and once again, I'm blown away… The food was the highest quality possible and the decor was just as amazing as the food. Such a relaxing and calming atmosphere.",
      author: "Visitor (quoted on Yorkshire.com listing)",
      source: "Yorkshire.com listing",
      sourceUrl:
        "https://www.yorkshire.com/york/food-drink/tea-rooms/the-old-york-tea-room",
    },
  ],
  contentGaps: [
    "No full official digital menu PDF; dish names from press and aggregators.",
    "Owner Instagram/GBP interiors not bulk-exported this run — guest galleries + press used instead.",
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
    accent: "#6B3E2E",
    accentSoft: "#F5EDE4",
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
    {
      label: "Yorkshire Post expansion feature",
      url: "https://www.yorkshirepost.co.uk/lifestyle/food-and-drink/the-old-york-tea-room-popular-york-cafe-which-operates-at-capacity-to-expand-with-takeaway-next-to-york-minster-8925977",
    },
    {
      label: "YorkMix Choice Awards / features",
      url: "https://www.yorkmix.com/we-want-to-create-a-real-statement-in-the-city-york-cafe-reveals-big-plans/",
    },
    {
      label: "restaurants-info.com gallery & reviews",
      url: "https://theoldyorktearoom.restaurants-info.com/",
    },
  ],
};
