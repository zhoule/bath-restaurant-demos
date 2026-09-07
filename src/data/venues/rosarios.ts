import type { Venue } from "./types";

/**
 * Content drawn from the public site https://www.rosarioscafe.co.uk/
 * and public review/photo galleries (fetched Sep 2026).
 * Hours and menu details can change — verify before visiting.
 * No invented reviews, prices, or ratings.
 */
export const rosarios: Venue = {
  id: "rosarios",
  slug: "rosarios",
  name: "Rosario’s Cafe",
  tagline: "A little bit of Italian style in the centre of Bath",
  heroEyebrow: "Bath · Italian cafe",
  shortDescription:
    "Traditional Italian cafe in a Grade II listed Georgian building on Northumberland Place — coffee, homemade cakes, and Sicilian pastries.",
  about: [
    "Rosario’s is a traditional Italian cafe run by Rosario Bavetta and his team. Rosario has poured his passion for coffee and his nonna’s cooking into this curiously fabulous café in the centre of Bath.",
    "The cafe occupies a Grade II listed Georgian building with a ground-floor counter, outdoor tables for people-watching, and cosy upstairs seating overlooking Bath’s independent shops. The décor is warm, stylish, and quirky, with table service in the shop.",
    "They serve locally roasted coffees (from D J Miles in Porlock, Somerset), quality leaf teas, soft drinks such as San Pellegrino, homemade cakes, and imported traditional Sicilian cakes and pastries (including cannoli), with gluten-free options available for most cakes and pastries. Menus include all-day breakfast, panini, salads, homemade soup, and sandwiches — ingredients are mostly locally sourced.",
  ],
  status: "live",
  location: {
    addressLines: ["18 Northumberland Place"],
    city: "Bath",
    postcode: "BA1 5AR",
    country: "United Kingdom",
    mapQuery: "18 Northumberland Place, Bath BA1 5AR",
  },
  contact: {
    phone: "01225 469590",
    email: "rosariosbath@gmail.com",
    website: "https://www.rosarioscafe.co.uk/",
  },
  hours: {
    summary:
      "Mon–Wed & Sat 8am–5pm · Thu–Fri 8am–7pm · Sun 9:30am–4pm",
    note:
      "Hours as published on rosarioscafe.co.uk (contact / menus pages). Aggregators sometimes list different times — please confirm with the cafe before visiting.",
    sourceUrl: "https://www.rosarioscafe.co.uk/contact-us.aspx",
  },
  menuHighlights: [
    {
      name: "Sicilian cannoli & afternoon tea",
      description:
        "Mini cannoli / aragostine from £2.50; Sicilian Afternoon Tea £9 with a regular hot drink — official 2026 sweets PDF.",
    },
    {
      name: "The Rosario coffee",
      description:
        "House signature: double espresso, condensed milk, chocolate & steamed milk (£4.95) — hot drinks PDF.",
    },
    {
      name: "All-day breakfast",
      description:
        "Full English / vegetarian £14.75; potato cake with avocado & poached egg from £12.75 — brunch PDF.",
    },
    {
      name: "Nonna’s meatballs & arancini",
      description:
        "Sicilian meatballs with fresh pasta £18.95; arancino from £8.50 — lunch PDF.",
    },
  ],
  photos: [
    {
      src: "/venues/rosarios/hero-storefront.jpg",
      alt: "Rosario’s Cafe storefront on Northumberland Place",
      credit: "TripAdvisor media CDN (public guest/listing photo)",
    },
    {
      src: "/venues/rosarios/cannoli-plate.jpg",
      alt: "Plate of Sicilian cannoli",
      credit: "TripAdvisor media CDN",
    },
    {
      src: "/venues/rosarios/counter-cannoli-case.jpg",
      alt: "Cannoli case and retail coffee",
      credit: "Sluurpy foto CDN",
    },
    {
      src: "/venues/rosarios/full-english.jpg",
      alt: "Full English breakfast",
      credit: "Sluurpy foto CDN",
    },
    {
      src: "/venues/rosarios/interior-seating.jpg",
      alt: "Interior seating",
      credit: "Official gallery — rosarioscafe.co.uk",
    },
    {
      src: "/venues/rosarios/latte-art-mugs.jpg",
      alt: "Latte art mugs",
      credit: "Sluurpy foto CDN",
    },
  ],
  reviews: [
    {
      quote:
        "Amazing cannoli — Hazelnut and Pistachio. Shells beautifully crisp with plenty of filling.",
      author: "Yasmin Jemmott",
      source: "Google",
      rating: 5,
      sourceUrl: "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "Genuine Italian cafe — cozy atmosphere. My favourite is crema al caffè. More seating upstairs.",
      author: "Siri",
      source: "Google",
      rating: 5,
      sourceUrl: "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "Nonna’s Sicilian meatballs, arancino, superb coffee and cakes. Stop here — it’s fantastic.",
      author: "David P",
      source: "Google",
      rating: 5,
      sourceUrl: "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
  ],
  cta: {
    label: "Call Rosario’s",
    href: "tel:01225469590",
  },
  secondaryCta: {
    label: "Official website",
    href: "https://www.rosarioscafe.co.uk/",
  },
  theme: {
    accent: "#8B3A2F",
    accentSoft: "#F7EDE6",
  },
  sources: [
    { label: "Official website", url: "https://www.rosarioscafe.co.uk/" },
    {
      label: "About page",
      url: "https://www.rosarioscafe.co.uk/about-us.aspx",
    },
    {
      label: "Contact / hours",
      url: "https://www.rosarioscafe.co.uk/contact-us.aspx",
    },
    {
      label: "Menus (PDF)",
      url: "https://www.rosarioscafe.co.uk/menus.aspx",
    },
    {
      label: "Gallery",
      url: "https://www.rosarioscafe.co.uk/gallery.aspx",
    },
    {
      label: "Sluurpy (Google review mirrors)",
      url: "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
  ],
};
