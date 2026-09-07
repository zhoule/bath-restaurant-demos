import type { FlagshipConfig } from "./types";
import { pulteneyBridgeCoffee } from "@/data/venues/pulteney-bridge-coffee";

const base = "/venues/pulteney-bridge-coffee";

export const pulteneyBridgeFlagship: FlagshipConfig = {
  venue: pulteneyBridgeCoffee,
  hero: {
    src: `${base}/hero-storefront.jpg`,
    alt: "Pulteney Bridge Coffee storefront in the Bath stone arch on Pulteney Bridge",
    objectPosition: "center 40%",
  },
  proof: [
    { k: "~3.7★", v: "TripAdvisor listing" },
    { k: "Weir views", v: "Window seats when free" },
    { k: "~10–15", v: "Covers — tiny room" },
    { k: "Cream tea", v: "Scones · cakes · kettle" },
  ],
  mosaicEyebrow: "On the bridge",
  mosaicTitle: "Cream teas, breakfasts, and a river window",
  mosaicLead:
    "Real guest and listing photos of this shop — storefront, plates, and interior — not only the landmark bridge façade.",
  mosaic: [
    {
      src: `${base}/pancakes-shortbread.jpg`,
      alt: "Pancakes with syrup and millionaire’s shortbread",
      label: "Pancakes & shortbread",
      span: "wide",
    },
    {
      src: `${base}/scones-cream.jpg`,
      alt: "Full English breakfasts for two on the cafe table",
      label: "Full English for two",
    },
    {
      src: `${base}/cream-tea.jpg`,
      alt: "Cream tea with scones",
      label: "Cream tea",
    },
    {
      src: `${base}/interior-river-view.jpg`,
      alt: "Interior seating looking toward the river",
      label: "River window",
      span: "tall",
    },
    {
      src: `${base}/counter-menu.jpg`,
      alt: "Cafe counter and menu board",
      label: "Counter & board",
    },
    {
      src: `${base}/interior-tables.jpg`,
      alt: "Compact interior tables",
      label: "Tiny room",
    },
    {
      src: `${base}/window-seat.jpg`,
      alt: "Window seat overlooking the weir",
      label: "Weir seat",
      span: "wide",
    },
    {
      src: `${base}/breakfast-plate.jpg`,
      alt: "Breakfast plate at the cafe",
      label: "Breakfast plate",
    },
    {
      src: `${base}/exterior-arch.jpg`,
      alt: "Cafe in the Bath stone arch",
      label: "Arch shopfront",
    },
  ],
  menuTitle: "A tiny bridge cafe menu",
  menuLead:
    "Dish names from public reviews and the A-board. Prices not published clearly online — omitted rather than invented.",
  menu: [
    {
      title: "Breakfast",
      items: [
        {
          name: "Full English breakfast",
          description:
            "Bacon, sausage, fried egg, sautéed mushrooms, baked beans & toast — listed on the pavement A-board (veggie/vegan options noted).",
        },
        {
          name: "Pancakes",
          description:
            "Fluffy pancakes with butter and syrup — called out in detailed guest reviews.",
        },
        {
          name: "Bacon sandwich / breakfast muffins",
          description: "Quick savoury options mentioned across TripAdvisor and Google quotes.",
        },
      ],
    },
    {
      title: "Afternoon & cakes",
      items: [
        {
          name: "Cream tea / scones",
          description:
            "Scones with jam and clotted cream; kettle service for afternoon tea noted by guests.",
        },
        {
          name: "Lemon drizzle & carrot cake",
          description: "Cake counter favourites called out by Google reviewers on public aggregators.",
        },
        {
          name: "Millionaire’s shortbread",
          description: "Photographed alongside pancakes in guest gallery shots.",
        },
      ],
    },
    {
      title: "Drinks & light bites",
      items: [
        {
          name: "Coffee & pot of tea",
          description: "Cappuccino, filter coffee, and specialty teas (rose tea noted by one guest).",
        },
        {
          name: "Baguettes & jacket potatoes",
          description: "Listed on the shopfront product board with English breakfasts and cream teas.",
        },
      ],
    },
  ],
  maker: {
    eyebrow: "The place",
    title: "Seventeen Pulteney Bridge, looking at the weir",
    image: {
      src: `${base}/hero-storefront.jpg`,
      alt: "Pulteney Bridge Coffee arched shopfront",
    },
    paragraphs: [
      "The Bridge Coffee Shop (also listed as Pulteney Bridge Coffee) sits in a tiny Bath-stone arch on the shop-lined Pulteney Bridge — one of the few cafes with a chance of a weir view.",
      "The room seats roughly 10–15; not every table faces the river. Guests praise cream teas, cakes, and friendly counter service — and note the squeeze when it’s busy.",
      "There is no polished dedicated website. This page is an unofficial preview from public listings only.",
    ],
    sideNote: {
      src: `${base}/interior-river-view.jpg`,
      alt: "Interior with river view",
      caption: "Ask for a window seat — they move you when one frees up (guest review).",
    },
  },
  reviewTitle: "Cosy, cakes, and that weir view",
  reviewLinkHref:
    "https://www.google.com/maps/search/?api=1&query=The%20Bridge%20Coffee%20Shop%20Pulteney%20Bridge%20Bath",
  hours: [
    { day: "Monday", hours: "~8:30 – 17:30" },
    { day: "Tuesday", hours: "~8:30 – 17:30" },
    { day: "Wednesday", hours: "~8:30 – 17:30" },
    { day: "Thursday", hours: "~8:30 – 17:30" },
    { day: "Friday", hours: "Later close (aggregators vary)" },
    { day: "Saturday", hours: "Later close (aggregators vary)" },
    { day: "Sunday", hours: "From ~9:30" },
  ],
  hoursNote:
    "Hours differ slightly across TripAdvisor, Restaurantji, and Apple Maps — call ahead. Room is small; expect a wait for a window table.",
  visitPhoto: {
    src: `${base}/window-seat.jpg`,
    alt: "Window seat toward the weir",
  },
  closingTitle: "Come for cream tea. Stay for the weir.",
  beforeAfter: {
    title: "Landmark streetscape → their shop & plates",
    before: {
      src: `${base}/before-street.jpg`,
      alt: "Bridge Coffee Shop exterior on Pulteney Bridge",
      label: "Before · street listing energy",
    },
    after: {
      src: `${base}/pancakes-shortbread.jpg`,
      alt: "Pancakes and shortbread",
      label: "After · their plates",
    },
  },
  jsonLdExtra: { servesCuisine: "Cafe" },
};
