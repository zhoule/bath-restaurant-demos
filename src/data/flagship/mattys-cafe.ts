import type { FlagshipConfig } from "./types";
import { mattysCafe } from "@/data/venues/mattys-cafe";

const base = "/venues/mattys-cafe";

export const mattysCafeFlagship: FlagshipConfig = {
  venue: mattysCafe,
  hero: {
    src: `${base}/hero-storefront.jpg`,
    alt: "Matty’s Cafe storefront on Lower Bristol Road with branded delivery car",
    objectPosition: "center 45%",
  },
  proof: [
    { k: "~4.3★", v: "Google reputation" },
    { k: "7am", v: "Opens Mon–Sat" },
    { k: "~120", v: "Seats + garden (owner claim)" },
    { k: "Free", v: "Local breakfast delivery" },
  ],
  mosaicEyebrow: "From the kitchen",
  mosaicTitle: "Fry-ups, doorstops, and a bright no-frills room",
  mosaicLead:
    "Real photos of Matty’s — storefront, full English plates, counter, and garden seating — from public guest and directory galleries.",
  mosaic: [
    {
      src: `${base}/full-english.jpg`,
      alt: "Full English breakfast with black pudding and hash browns",
      label: "Full English",
      span: "wide",
    },
    {
      src: `${base}/full-english-coffee.jpg`,
      alt: "Full English with coffee mug",
      label: "Breakfast & coffee",
    },
    {
      src: `${base}/breakfast-at-counter.jpg`,
      alt: "Breakfast plate looking toward Matty’s counter",
      label: "At the counter",
    },
    {
      src: `${base}/interior-dining.jpg`,
      alt: "Bright interior dining room",
      label: "Dining room",
      span: "tall",
    },
    {
      src: `${base}/garden-seating.jpg`,
      alt: "Outdoor garden picnic tables",
      label: "Garden seating",
    },
    {
      src: `${base}/interior-2.jpg`,
      alt: "Cafe interior seating",
      label: "Inside",
    },
    {
      src: `${base}/menu-board.jpg`,
      alt: "Printed Matty’s breakfast menu board",
      label: "Menu board",
      span: "wide",
    },
    {
      src: `${base}/interior-3.jpg`,
      alt: "Another view of the cafe interior",
      label: "Room view",
    },
    {
      src: `${base}/hero-storefront.jpg`,
      alt: "Storefront with pink window boxes",
      label: "Lower Bristol Road",
    },
  ],
  menuTitle: "Homemade greasy-spoon classics",
  menuLead:
    "Dish names from the official site and public menu board. Delivery prices shown from the public Uber Eats listing — eat-in may differ; confirm in person.",
  menu: [
    {
      title: "Breakfasts",
      note: "Uber Eats delivery prices (public) — confirm eat-in on the board.",
      items: [
        {
          name: "Full English Breakfast",
          description:
            "Grilled sausage, bacon, choice of egg, beans, hash browns, toast — official menu.",
          price: "£11.10",
        },
        {
          name: "Big Boy Breakfast",
          description:
            "2 sausages, 3 bacon, 2 eggs, beans, hash browns, mushrooms or black pudding, toast — official menu.",
          price: "£13.50",
        },
        {
          name: "Veggi Breakfast",
          description:
            "Eggs, double beans, double tomatoes, hash browns, mushrooms, toast — official menu.",
          price: "£11.60",
        },
        {
          name: "Breakfast Bap",
          description:
            "Bacon, sausage, egg & mushrooms on a bap — official hot sandwich list.",
        },
      ],
    },
    {
      title: "Homemade specials & drinks",
      items: [
        {
          name: "Homemade specials",
          description:
            "Cottage pie, steak & kidney, chicken & mushrooms, minted lamb / veggi lasagne, chicken curry, sweet & sour chicken — official menu.",
        },
        {
          name: "Latte / cappuccino / tea",
          description:
            "Fresh coffee drinks and tea as listed on the official drinks board.",
        },
      ],
    },
  ],
  maker: {
    eyebrow: "The maker",
    title: "Matt — Bath-born, open nearly every dawn",
    image: {
      src: `${base}/breakfast-at-counter.jpg`,
      alt: "Looking toward the Matty’s counter from a breakfast table",
    },
    quote: "I just love food.",
    quoteAttr: "Matt, mattyscafe.com",
    paragraphs: [
      "Matt, born and raised in Bath, has run this independent cafe on Lower Bristol Road for years — traditional full English, made-to-order sandwiches, and homemade classics like steak & kidney pie, lasagne, and curry.",
      "The official site still publishes the full menu and contact details, but it is an aging HTTP site with reported SSL problems — not a modern mobile experience. Matt also delivers breakfasts locally above a food minimum.",
      "Owner notes: open 363 days a year, large room with garden seating, and a focus on value portions.",
    ],
    sideNote: {
      src: `${base}/garden-seating.jpg`,
      alt: "Garden picnic tables",
      caption: "Garden seating out back — rare for a Bath greasy spoon.",
    },
  },
  reviewTitle: "~4.3 · no-frills breakfasts locals rely on",
  reviewLinkHref:
    "https://www.google.com/maps/search/?api=1&query=Matty%27s%20Cafe%20Bath%20BA2%203BT",
  hours: [
    { day: "Monday", hours: "7:00 – 14:00" },
    { day: "Tuesday", hours: "7:00 – 14:00" },
    { day: "Wednesday", hours: "7:00 – 14:00" },
    { day: "Thursday", hours: "7:00 – 14:00" },
    { day: "Friday", hours: "7:00 – 14:00" },
    { day: "Saturday", hours: "7:00 – 14:00" },
    { day: "Sunday", hours: "8:00 – 13:00" },
  ],
  hoursNote:
    "Hours as published on mattyscafe.com (eat-in & delivery). Confirm before visiting.",
  visitPhoto: {
    src: `${base}/hero-storefront.jpg`,
    alt: "Matty’s storefront",
  },
  closingTitle: "Come hungry. Leave full.",
  beforeAfter: {
    title: "Neighbourhood street → their fry-up & room",
    before: {
      src: `${base}/before-street.jpg`,
      alt: "Lower Bristol Road streetscape",
      label: "Before · street only",
    },
    after: {
      src: `${base}/full-english.jpg`,
      alt: "Full English plate",
      label: "After · their breakfast",
    },
  },
  jsonLdExtra: { servesCuisine: "Cafe" },
};
