import type { Venue } from "./types";

/** Public sources only — researched Sep 2026. Official menu used for dish names. */
export const mattysCafe: Venue = {
  id: "mattys-cafe",
  slug: "mattys-cafe",
  name: "Matty’s Cafe",
  tagline: "Homemade Bath greasy-spoon classics since Matt’s kitchen",
  heroEyebrow: "Bath · Cafe · Lower Bristol Road",
  shortDescription:
    "Independent cafe at 15 St Peters Terrace — full English breakfasts, doorstop sandwiches, and homemade specials. Official site exists but is weak (HTTP / SSL issues).",
  about: [
    "Matty’s is a longstanding independent cafe on Lower Bristol Road. Matt, born and raised in Bath, describes homemade meals and traditional full English breakfasts alongside made-to-order sandwiches and classics like steak & kidney pie, lasagne, and curry.",
    "The official site (mattyscafe.com) still publishes a full cafe menu and contact details, but it is an aging HTTP site with reported SSL problems — not a modern mobile experience.",
    "Hours on the official site: Mon–Sat 7am–2pm / Sun 8am–1pm, with free local delivery above a stated food minimum. This demo is unofficial.",
  ],
  status: "live",
  location: {
    addressLines: ["15 St Peters Terrace", "Lower Bristol Road"],
    city: "Bath",
    postcode: "BA2 3BT",
    country: "United Kingdom",
    mapQuery: "15 St Peters Terrace, Lower Bristol Road, Bath BA2 3BT",
  },
  contact: {
    phone: "01225 444986",
    email: "matt@mattyscafe.com",
    website: "http://www.mattyscafe.com/",
  },
  hours: {
    summary: "Mon–Sat 7am–2pm · Sun 8am–1pm",
    note: "As published on mattyscafe.com (eat-in & delivery hours). Confirm before visiting.",
    sourceUrl: "http://www.mattyscafe.com/",
  },
  menuHighlights: [
    {
      name: "Full English Breakfast",
      description:
        "Grilled sausage, 2 grilled bacon, choice of egg, beans, hash browns, toast — from the official menu.",
    },
    {
      name: "Big Boy Breakfast",
      description:
        "2 sausages, 3 bacon, 2 eggs, beans, hash browns, mushrooms or black pudding, toast — official menu.",
    },
    {
      name: "Veggi Breakfast",
      description:
        "Eggs, double beans, double tomatoes, hash browns, mushrooms, toast — official menu.",
    },
    {
      name: "Breakfast Bap",
      description:
        "Bacon, sausage, egg & mushrooms on a bap — official doorstop / hot sandwich list.",
    },
    {
      name: "Homemade specials",
      description:
        "Cottage pie, steak & kidney, chicken & mushrooms, minted lamb / veggi lasagne, chicken curry, sweet & sour chicken — official menu.",
    },
    {
      name: "Latte / cappuccino / tea",
      description:
        "Fresh coffee drinks and tea as listed on the official drinks board (prices on site; not repeated here).",
    },
  ],
  photos: [
    {
      src: "/venues/mattys-cafe/01-lower-bristol.jpg",
      alt: "Lower Bristol Road (A36) near Matty’s neighbourhood",
      credit: "Wikimedia / Geograph — Lower Bristol Road A36, Bath",
    },
    {
      src: "/venues/mattys-cafe/02-terraces.jpg",
      alt: "Terraced houses along Lower Bristol Road, Bath",
      credit: "Wikimedia / Geograph — Terraced houses in Lower Bristol Road Bath",
    },
    {
      src: "/venues/mattys-cafe/03-terraces-2.jpg",
      alt: "Street terraces on Lower Bristol Road",
      credit: "Wikimedia / Geograph — Terraced houses on Lower Bristol Road, Bath",
    },
    {
      src: "/venues/mattys-cafe/04-lower-bristol-2.jpg",
      alt: "Another view of Lower Bristol Road approaching the cafe area",
      credit: "Wikimedia / Geograph — Lower Bristol Road A36, Bath",
    },
  ],
  reviews: [
    {
      quote:
        "Nice basic cafe. Great for a quick food fuel stop. Service is good. Nice trucker style breakfast. No frills but has everything you need. Very busy delivery service we noticed. Fantastic prices, good value for money.",
      author: "Wayne Blackmore",
      source: "Google (via Sluurpy)",
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1716245/matty-s-cafe",
      date: "Dec 2025",
      rating: 5,
    },
    {
      quote:
        "Great traditional cafe, bright clean and spacious selling basic no frills cafe fare at a fair price. Service was efficient and friendly and the breakfast was just as it should be. Great Cafe for a no fuss breakfast or snack.",
      author: "Stuart Johnson",
      source: "Google (via uk-restaurants.com)",
      sourceUrl: "https://mattys.uk-restaurants.com/",
      rating: 5,
    },
    {
      quote:
        "A friendly local greasy spoon cafe close to Sainsburys and a 15 min walk from the centre. Really one of the very few independent cafes of this type in Bath. Car parking spaces out front and they take credit and debit cards. I had a tasty fry up full English breakfast here for a good price.",
      author: "Graham D",
      source: "Google (via uk-restaurants.com / Wanderlog)",
      sourceUrl: "https://mattys.uk-restaurants.com/",
      rating: 5,
    },
    {
      quote:
        "Enjoyed a breakfast with my girlfriend en route to the city centre. Updated the menu.",
      author: "Steve Woodhull",
      source: "Google (via uk-restaurants.com)",
      sourceUrl: "https://mattys.uk-restaurants.com/",
    },
  ],
  contentGaps: [
    "Official site image assets returned 403 from this environment; food/interior from uk-restaurants / Sluurpy / Restaurantji public galleries.",
    "Uber Eats delivery prices used where shown — eat-in board prices may differ.",
  ],
  cta: {
    label: "Call Matty’s",
    href: "tel:01225444986",
  },
  secondaryCta: {
    label: "Open in Maps",
    href: "https://www.google.com/maps/search/?api=1&query=15%20St%20Peters%20Terrace%2C%20Lower%20Bristol%20Road%2C%20Bath%20BA2%203BT",
  },
  theme: {
    accent: "#B45309",
    accentSoft: "#FFF7ED",
  },
  sources: [
    { label: "Official site", url: "http://www.mattyscafe.com/" },
    { label: "Official menu", url: "http://www.mattyscafe.com/menu.html" },
    {
      label: "Sluurpy listing",
      url: "https://www.sluurpy.co.uk/bath/restaurant/1716245/matty-s-cafe",
    },
  ],
};
