import type { Venue } from "./types";

/**
 * Content drawn from the public site https://www.rosarioscafe.co.uk/
 * (fetched Sep 2026). Hours and menu details can change — verify before visiting.
 * No invented reviews, prices, or ratings.
 */
export const rosarios: Venue = {
  id: "rosarios",
  slug: "rosarios",
  name: "Rosario’s Cafe",
  tagline: "A little bit of Italian style in the centre of Bath",
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
      "Hours as published on rosarioscafe.co.uk (contact page). Other pages list slightly different times — please confirm with the cafe before visiting.",
    sourceUrl: "https://www.rosarioscafe.co.uk/contact-us.aspx",
  },
  menuHighlights: [
    {
      name: "Italian coffee & leaf tea",
      description:
        "Locally roasted speciality coffee and a full range of quality leaf teas (D J Miles, Porlock).",
    },
    {
      name: "Homemade & Sicilian cakes",
      description:
        "Home-made cakes plus traditional Sicilian cakes and pastries (cannoli); gluten-free options for most.",
    },
    {
      name: "All-day breakfast",
      description:
        "A generous collection of all-day breakfast options — see the in-cafe menu for current dishes.",
      isPlaceholder: true,
    },
    {
      name: "Lighter meals",
      description:
        "Panini, salads, homemade soup, and sandwiches. Exact dishes and prices are not listed here — ask in store.",
      isPlaceholder: true,
    },
  ],
  cta: {
    label: "Visit the official website",
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
  ],
};
