import type { Venue } from "./types";

/** Public sources only — researched Sep 2026. No invented reviews/prices. */
export const pulteneyBridgeCoffee: Venue = {
  id: "pulteney-bridge-coffee",
  slug: "pulteney-bridge-coffee",
  name: "The Bridge Coffee Shop",
  tagline: "Cream teas and river views on Pulteney Bridge",
  heroEyebrow: "Bath · Cafe · Pulteney Bridge",
  shortDescription:
    "Compact cafe at 17 Pulteney Bridge — breakfasts, cream teas, and cakes with weir views. No dedicated site; TripAdvisor ~3.7.",
  about: [
    "The Bridge Coffee Shop (also listed as Pulteney Bridge Coffee) occupies a tiny shopfront on Bath’s famous shop-lined Pulteney Bridge, looking out toward the weir and River Avon.",
    "Visitors come for window seats, cream teas, full English breakfasts, and cake with coffee. The room is small — reviews often note limited seating and that not every table has a river view.",
    "There is no polished dedicated website; discovery is via maps and TripAdvisor. This page is an unofficial demo redesign only.",
  ],
  status: "live",
  location: {
    addressLines: ["17 Pulteney Bridge"],
    city: "Bath",
    postcode: "BA2 4AY",
    country: "United Kingdom",
    mapQuery: "17 Pulteney Bridge, Bath BA2 4AY",
  },
  contact: {
    phone: "01225 483339",
  },
  hours: {
    summary:
      "Typically Mon–Thu ~8:30am–5:30pm · Fri/Sat later · Sun from ~9:30am (aggregator listings vary)",
    note: "Hours differ slightly across TripAdvisor, Restaurantji, and Apple Maps — call ahead.",
  },
  menuHighlights: [
    {
      name: "Full English breakfast",
      description:
        "Frequently mentioned in public reviews and aggregator favourites.",
    },
    {
      name: "Cream tea / scones",
      description:
        "Scones with jam and clotted cream; afternoon tea with kettle service noted in guest reviews.",
    },
    {
      name: "Lemon drizzle & carrot cake",
      description:
        "Cake counter favourites called out by Google reviewers on public aggregators.",
    },
    {
      name: "Pancakes",
      description:
        "Described as fluffy with butter and syrup in a detailed Google review mirrored on Sluurpy.",
    },
    {
      name: "Bacon sandwich / breakfast muffins",
      description:
        "Quick savoury options mentioned across TripAdvisor and Google quotes.",
    },
    {
      name: "Coffee & pot of tea",
      description:
        "Cappuccino, filter coffee, and specialty teas (rose tea noted by one guest).",
      isPlaceholder: true,
    },
  ],
  photos: [
    {
      src: "/venues/pulteney-bridge-coffee/01-bridge-coffee-shop.jpg",
      alt: "The Bridge Coffee Shop shopfront on Pulteney Bridge",
      credit: "Wikimedia / Geograph — The Bridge Coffee Shop, Pulteney Bridge (977139)",
    },
    {
      src: "/venues/pulteney-bridge-coffee/02-bridge-shops.jpg",
      alt: "Shops lining Pulteney Bridge",
      credit: "Wikimedia Commons — Pulteney Bridge shops",
    },
    {
      src: "/venues/pulteney-bridge-coffee/03-pulteney-bridge.jpg",
      alt: "Pulteney Bridge spanning the River Avon",
      credit: "Wikimedia Commons — Bath - Pulteney Bridge",
    },
    {
      src: "/venues/pulteney-bridge-coffee/04-bridge-weir.jpg",
      alt: "Pulteney Bridge and the weir",
      credit: "Wikimedia Commons — Pulteney Bridge and Weir, Bath",
    },
    {
      src: "/venues/pulteney-bridge-coffee/06-ta-interior.jpg",
      alt: "Interior seating looking toward the river",
      credit: "TripAdvisor public media CDN (listing photo)",
    },
    {
      src: "/venues/pulteney-bridge-coffee/07-ta-menu.jpg",
      alt: "Cafe counter and menu board",
      credit: "TripAdvisor public media CDN (listing photo)",
    },
  ],
  reviews: [
    {
      quote:
        "The Lemon Drizzle is delicious, the service quick! It’s a wonderful little nook on the bridge — we also got a table by the window and had a wonderful time absorbing the view.",
      author: "R Kaur",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.com/en/bath/restaurant/1702824/the-bridge-coffee-shop",
      date: "Oct 2023",
      rating: 5,
    },
    {
      quote:
        "Really delicious selection of cakes, cream teas available along with lots of other drinks. The cafe is small but it makes it cosy, the views from the cafe window are very beautiful and the staff were friendly.",
      author: "Rosa Brown",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.com/en/bath/restaurant/1702824/the-bridge-coffee-shop",
      date: "Oct 2023",
      rating: 5,
    },
    {
      quote:
        "Fabulous little cafe with a wonderful view. Friendly service, efficient and clean. Great coffee and a lovely bacon sandwich made with very nice bread. We went two days running as it was so good.",
      author: "Linda Willis",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.com/en/bath/restaurant/1702824/the-bridge-coffee-shop",
      date: "Sep 2023",
      rating: 5,
    },
    {
      quote:
        "Afternoon tea with a view! You’re provided with a tea kettle with the tea of your choice, along with two scones, jam, and cream… She had great hospitality and made this leg of our trip memorable.",
      author: "Tyler C.",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.com/en/bath/restaurant/1702824/the-bridge-coffee-shop",
      date: "Mar 2023",
      rating: 5,
    },
  ],
  cta: {
    label: "Call the cafe",
    href: "tel:01225483339",
  },
  secondaryCta: {
    label: "TripAdvisor listing",
    href: "https://www.tripadvisor.co.uk/Restaurant_Review-g186370-d2363239-Reviews-The_Bridge_Coffee_Shop-Bath_Somerset_England.html",
  },
  theme: {
    accent: "#1F4E79",
    accentSoft: "#E8F0F7",
  },
  sources: [
    {
      label: "TripAdvisor",
      url: "https://www.tripadvisor.co.uk/Restaurant_Review-g186370-d2363239-Reviews-The_Bridge_Coffee_Shop-Bath_Somerset_England.html",
    },
    {
      label: "Sluurpy / Google quotes",
      url: "https://www.sluurpy.com/en/bath/restaurant/1702824/the-bridge-coffee-shop",
    },
    {
      label: "Wikimedia Bridge Coffee Shop photo",
      url: "https://commons.wikimedia.org/wiki/File:The_Bridge_Coffee_Shop,_Pulteney_Bridge_-_geograph.org.uk_-_977139.jpg",
    },
  ],
};
