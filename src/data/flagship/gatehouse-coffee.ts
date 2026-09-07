import type { FlagshipConfig } from "./types";
import { gatehouseCoffee } from "@/data/venues/gatehouse-coffee";

const base = "/venues/gatehouse-coffee";

export const gatehouseCoffeeFlagship: FlagshipConfig = {
  venue: gatehouseCoffee,
  hero: {
    src: `${base}/hero-pie-latte-walls.jpg`,
    alt: "Latte art and lattice pie on the Walmgate Bar battlements overlooking York",
    objectPosition: "center 30%",
  },
  proof: [
    { k: "~4.7★", v: "Google reputation" },
    { k: "Only", v: "English gate with barbican" },
    { k: "Rooftop", v: "Terrace on the walls" },
    { k: "Tue–Sat", v: "10am–4pm (aggregators)" },
  ],
  mosaicEyebrow: "On the walls",
  mosaicTitle: "Specialty coffee inside York’s last barbican gate",
  mosaicLead:
    "Real photos of Gatehouse Coffee — latte & pie on the battlements, cake counter, studded door, and rooftop terrace — from public guest and directory galleries.",
  mosaic: [
    {
      src: `${base}/hero-pie-latte-walls.jpg`,
      alt: "Pie and latte on the gatehouse ledge",
      label: "Pie & latte on the walls",
      span: "wide",
    },
    {
      src: `${base}/cake-counter.jpg`,
      alt: "Cake cloches and espresso machine",
      label: "Cake counter",
    },
    {
      src: `${base}/door-open.jpg`,
      alt: "Studded wooden Gatehouse Coffee door",
      label: "Mind your head",
    },
    {
      src: `${base}/terrace-overview.jpg`,
      alt: "Outdoor seating atop Walmgate Bar",
      label: "Barbican terrace",
      span: "tall",
    },
    {
      src: `${base}/rooftop-seating.jpg`,
      alt: "Rooftop patio seating",
      label: "Rooftop seats",
    },
    {
      src: `${base}/it-food-1.jpg`,
      alt: "Rooftop deck panorama",
      label: "Roof deck",
    },
    {
      src: `${base}/food-yelp.jpg`,
      alt: "Food and drink at Gatehouse",
      label: "Plate & cup",
      span: "wide",
    },
    {
      src: `${base}/interior-yelp-1.jpg`,
      alt: "Interior seating",
      label: "Inside the gate",
    },
    {
      src: `${base}/it-food-3.jpg`,
      alt: "Cafe food or drink detail",
      label: "From the counter",
    },
  ],
  menuTitle: "Coffee, paninis, and wall-walk cakes",
  menuLead:
    "Dish names from public aggregators (Sluurpy popular dishes). Prices not reliably published — omitted rather than invented.",
  menu: [
    {
      title: "Coffee & hot drinks",
      items: [
        {
          name: "Flat white / latte / cappuccino",
          description:
            "Core espresso drinks repeatedly listed among popular dishes on public aggregators.",
        },
        {
          name: "Hot chocolate / matcha / London Fog",
          description: "Named on Sluurpy’s popular-dishes list for Gatehouse Coffee.",
        },
        {
          name: "Filter & specialty",
          description: "Espresso and rotating hot drinks — ask what’s on.",
        },
      ],
    },
    {
      title: "Paninis & savoury",
      items: [
        {
          name: "Chicken & pesto panini",
          description: "Named on Sluurpy’s popular-dishes list.",
        },
        {
          name: "Smoked ham & plum panini",
          description: "Named on Sluurpy’s popular-dishes list.",
        },
        {
          name: "Cheese & bacon panini / toasties",
          description: "Named on aggregators; toasties also praised in reviews.",
        },
        {
          name: "Soup of the day",
          description: "Listed as a popular dish; exact soup changes — ask staff.",
        },
      ],
    },
    {
      title: "Cakes",
      items: [
        {
          name: "Cinnamon roll & Biscoff brownie",
          description:
            "Sweet counter favourites called out across aggregators and Google snippets.",
        },
        {
          name: "Coffee cake / lemon cake",
          description: "Named among popular dishes; lattice pie photographed on the walls.",
        },
      ],
    },
  ],
  maker: {
    eyebrow: "The place",
    title: "Walmgate Bar — coffee in a medieval gate",
    image: {
      src: `${base}/door-open.jpg`,
      alt: "Gatehouse Coffee studded door with OPEN sign",
    },
    paragraphs: [
      "Gatehouse Coffee occupies Walmgate Bar — York’s most complete medieval city gate, and the only English town gate to retain its barbican, portcullis, and doors. Guests enter from street level or step off the walls walk.",
      "Public listings highlight specialty coffee, homemade brownies and cinnamon rolls, paninis, and outdoor seating on the historic structure with panoramic views in good weather.",
      "Stairs are steep and narrow — no step-free access to the rooftop. Web presence is Facebook-forward. This demo is unofficial.",
    ],
    sideNote: {
      src: `${base}/terrace-overview.jpg`,
      alt: "Terrace on Walmgate Bar",
      caption: "Rooftop & barbican seating when the weather cooperates.",
    },
  },
  reviewTitle: "~4.7 · a wall-walk coffee stop",
  reviewLinkHref:
    "https://www.google.com/maps/search/?api=1&query=Gatehouse%20Coffee%20Walmgate%20Bar%20York",
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "10:00 – 16:00" },
    { day: "Wednesday", hours: "10:00 – 16:00" },
    { day: "Thursday", hours: "10:00 – 16:00" },
    { day: "Friday", hours: "10:00 – 16:00" },
    { day: "Saturday", hours: "10:00 – 16:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  hoursNote:
    "Hours from Sluurpy / Restaurantji aggregators — some listings show longer days. Confirm on Facebook before climbing the walls. Steep stairs; no wheelchair access to rooftop.",
  visitPhoto: {
    src: `${base}/terrace-overview.jpg`,
    alt: "Walmgate Bar terrace",
  },
  closingTitle: "Coffee on the walls. Cake in the gate.",
  beforeAfter: {
    title: "Landmark barbican → their cup on the ledge",
    before: {
      src: `${base}/before-street.jpg`,
      alt: "Walmgate Bar exterior",
      label: "Before · landmark only",
    },
    after: {
      src: `${base}/hero-pie-latte-walls.jpg`,
      alt: "Pie and latte on battlements",
      label: "After · their coffee & view",
    },
  },
  jsonLdExtra: { servesCuisine: "Coffee shop" },
};
