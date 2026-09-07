import type { Venue } from "./types";

/** Public sources only — researched Sep 2026. No invented reviews/prices. */
export const gatehouseCoffee: Venue = {
  id: "gatehouse-coffee",
  slug: "gatehouse-coffee",
  name: "Gatehouse Coffee",
  tagline: "Specialty coffee inside York’s last barbican gate",
  heroEyebrow: "York · Coffee · Walmgate Bar",
  shortDescription:
    "Cafe in the medieval Walmgate Bar gatehouse — flat whites, paninis, and a rooftop / barbican terrace. Facebook-heavy presence; Google ~4.7.",
  about: [
    "Gatehouse Coffee occupies Walmgate Bar — York’s most complete medieval city gate, and the only English town gate to retain its barbican, portcullis, and doors. Guests can enter from street level or step off the walls walk.",
    "Public listings highlight specialty coffee, homemade brownies and cinnamon rolls, paninis, and outdoor seating on the historic structure with panoramic views in good weather.",
    "Web presence is Facebook-forward (and some aggregators list gatehousecoffee.com). This demo is an unofficial redesign focused on call / visit CTAs.",
  ],
  status: "live",
  location: {
    addressLines: ["Walmgate Bar", "Walmgate"],
    city: "York",
    postcode: "YO10 2UB",
    country: "United Kingdom",
    mapQuery: "Gatehouse Coffee, Walmgate Bar, York",
  },
  contact: {
    phone: "01904 464050",
    facebook: "https://www.facebook.com/gatehousecoffee",
  },
  hours: {
    summary: "Tue–Sat 10am–4pm · Sun–Mon closed",
    note: "Hours from Sluurpy / Restaurantji aggregators — confirm on Facebook before climbing the walls.",
  },
  menuHighlights: [
    {
      name: "Flat white / latte / cappuccino",
      description:
        "Core espresso drinks repeatedly listed among popular dishes on public aggregators.",
    },
    {
      name: "Chicken & pesto panini",
      description: "Named on Sluurpy’s popular-dishes list for Gatehouse Coffee.",
    },
    {
      name: "Smoked ham & plum panini",
      description: "Named on Sluurpy’s popular-dishes list.",
    },
    {
      name: "Cheese & bacon panini",
      description: "Named on Sluurpy’s popular-dishes list; toasties also praised in reviews.",
    },
    {
      name: "Cinnamon roll & Biscoff brownie",
      description:
        "Sweet counter favourites called out across aggregators and Google snippets.",
    },
    {
      name: "Soup of the day",
      description:
        "Listed as a popular dish; exact soup changes — ask staff.",
      isPlaceholder: true,
    },
  ],
  photos: [
    {
      src: "/venues/gatehouse-coffee/01-walmgate-bar.jpg",
      alt: "Walmgate Bar gatehouse exterior",
      credit: "Wikimedia Commons — Walmgate Bar.JPG",
    },
    {
      src: "/venues/gatehouse-coffee/02-barbican-east.jpg",
      alt: "Walmgate Bar barbican seen from the east",
      credit: "Wikimedia Commons — Walmgate Bar barbican (2024)",
    },
    {
      src: "/venues/gatehouse-coffee/03-west-side.jpg",
      alt: "West side of Walmgate Bar on the city walls",
      credit: "Wikimedia Commons — Walmgate Bar west side (2024)",
    },
    {
      src: "/venues/gatehouse-coffee/04-inner-door.jpg",
      alt: "Inner doorway of Walmgate Bar",
      credit: "Wikimedia Commons — Walmgate Bar inner door (2024)",
    },
    {
      src: "/venues/gatehouse-coffee/05-porte.jpg",
      alt: "Historic view of the Walmgate gate structure",
      credit: "Wikimedia Commons — Porte Walmgate York",
    },
  ],
  reviews: [
    {
      quote:
        "Gatehouse Coffee is a perfect stop for a coffee when doing the city wall walk. Cozy and welcoming, few tables inside and a lovely panoramic terrace with tables outside for summer season. The staff are friendly, the coffee is genuinely…",
      author: "Egle D.",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.co.uk/york/restaurant/1655236/gatehouse-coffee",
      date: "Jan 2026",
      rating: 5,
    },
    {
      quote:
        "This is a great little coffee shop perfectly situated along the city wall, a welcome break as it was raining when we were walking around the city wall. The prices are very reasonable and the service is excellent.",
      author: "Rob Ashman",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.co.uk/york/restaurant/1655236/gatehouse-coffee",
      date: "Oct 2025",
      rating: 5,
    },
    {
      quote:
        "It's like you time-travelled back in time 1000 years ago but you're able to sip your coffee and tea on the castle walls. Must visit place when doing a castle walk around York. Tasty scones and great coffee.",
      author: "Ray Brandt",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.co.uk/york/restaurant/1655236/gatehouse-coffee",
      date: "Sep 2025",
      rating: 5,
    },
  ],
  contentGaps: [
    "Gallery uses Wikimedia photos of Walmgate Bar (the building the cafe occupies); cafe-interior food shots were not freely available under clear reuse this run.",
  ],
  cta: {
    label: "Call Gatehouse Coffee",
    href: "tel:01904464050",
  },
  secondaryCta: {
    label: "Facebook page",
    href: "https://www.facebook.com/gatehousecoffee",
  },
  theme: {
    accent: "#3F3A2E",
    accentSoft: "#F3EFE6",
  },
  sources: [
    {
      label: "Sluurpy listing",
      url: "https://www.sluurpy.co.uk/york/restaurant/1655236/gatehouse-coffee",
    },
    {
      label: "Britain Express — Walmgate Bar",
      url: "https://www.britainexpress.com/cities/york/walmgate-bar.htm",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/gatehousecoffee",
    },
  ],
};
