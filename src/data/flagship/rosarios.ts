import type { FlagshipConfig } from "./types";
import { rosarios } from "@/data/venues/rosarios";

const base = "/venues/rosarios";

export const rosariosFlagship: FlagshipConfig = {
  venue: rosarios,
  hero: {
    src: `${base}/hero-storefront.jpg`,
    alt: "Rosario’s Cafe black storefront with outdoor tables and flower baskets on Northumberland Place",
    objectPosition: "center 45%",
  },
  proof: [
    { k: "~4.6★", v: "Google reputation" },
    { k: "GF", v: "Strong gluten-free range" },
    { k: "Sicilian", v: "Cannoli & pastries" },
    { k: "18", v: "Northumberland Place" },
  ],
  mosaicEyebrow: "From the counter",
  mosaicTitle: "Cannoli, cakes, and a Bath alley cafe",
  mosaicLead:
    "Real photos from Rosario’s public galleries and guest listings — storefront, pastry case, breakfast plates, and Italian coffee.",
  mosaic: [
    {
      src: `${base}/cannoli-plate.jpg`,
      alt: "Four Sicilian cannoli on a white plate with coffee behind",
      label: "Sicilian cannoli",
      span: "wide",
    },
    {
      src: `${base}/counter-cannoli-case.jpg`,
      alt: "Glass case of mini cannoli and aragostine above retail coffee bags",
      label: "Pastry case",
    },
    {
      src: `${base}/latte-art-mugs.jpg`,
      alt: "Latte art in red and green ceramic mugs",
      label: "Italian coffee",
    },
    {
      src: `${base}/cake-counter-display.jpg`,
      alt: "Cake and panini display case",
      label: "Cakes & panini",
      span: "tall",
    },
    {
      src: `${base}/full-english.jpg`,
      alt: "Full English breakfast with tea",
      label: "Full English",
    },
    {
      src: `${base}/pesto-poached-egg.jpg`,
      alt: "Pesto toast with poached egg and cherry tomatoes",
      label: "Brunch plate",
    },
    {
      src: `${base}/cappuccino-sfogliatella.jpg`,
      alt: "Cappuccino with cocoa and flaky Italian pastry",
      label: "Cappuccino & pastry",
      span: "wide",
    },
    {
      src: `${base}/interior-seating.jpg`,
      alt: "Warm interior seating with wooden tables",
      label: "Inside",
    },
    {
      src: `${base}/storefront-green-umbrella.jpg`,
      alt: "Rosario’s exterior with green patio umbrella",
      label: "Northumberland Place",
    },
  ],
  menuEyebrow: "On the board",
  menuTitle: "Brunch, Sicilian sweets, Italian coffee",
  menuLead:
    "Curated from the official 2026 menu PDFs on rosarioscafe.co.uk. Prices and dishes change — confirm in cafe.",
  menu: [
    {
      title: "All-day breakfast",
      note: "Served ~8am–4pm per lunch/breakfast PDF.",
      items: [
        {
          name: "Full English Breakfast",
          description:
            "Two local bacon, fried egg, local sausage, tomato, Heinz beans, mushrooms & toast.",
          price: "£14.75",
        },
        {
          name: "Vegetarian Breakfast",
          description:
            "Two veggie sausages, two eggs, mushrooms, beans, tomato & toast.",
          price: "£14.75",
        },
        {
          name: "Potato cake with avocado & poached egg",
          description:
            "Homemade potato cake — with smoked salmon, prosciutto crudo, or mushrooms.",
          price: "from £12.75",
        },
        {
          name: "Italian spicy sausage hash",
          description: "Potatoes, onions, peppers & two fried eggs.",
          price: "£13.75",
        },
        {
          name: "Ham & fried egg on panelle",
          description: "Sicilian chickpea fritters.",
          price: "£10.50",
        },
      ],
    },
    {
      title: "Lunch & sandwiches",
      note: "Lunch ~12–4pm; sandwiches ~8am–4pm.",
      items: [
        {
          name: "Nonna’s Sicilian meatballs with fresh pasta",
          description: "House meatballs — guest favourite on public boards.",
          price: "£18.95",
        },
        {
          name: "Fresh pasta and homemade pesto",
          description: "Add chicken +£3.50.",
          price: "£14.95",
        },
        {
          name: "Arancino",
          description:
            "Sicilian rice balls — ragù & mozzarella, alla Norma, or special of the week (GF options on board).",
          price: "£8.50 / £15.00",
        },
        {
          name: "Sicilian Caponata with dressed bread",
          description:
            "Aubergine, onions, capers, olives, celery, pinenuts & tomato — sweet-and-sour, room temperature.",
          price: "£11.50",
        },
        {
          name: "Sandwiches & panini",
          description:
            "Italian ham, pane e panelle, Parma ham, roasted veg & brie, fig & almond, Caprese — on brown, ciabatta or GF (+50p).",
          price: "£6.95",
        },
        {
          name: "Home-made soup of the day & bread",
          description: "Ask for today’s pot.",
          price: "£7.50",
        },
      ],
    },
    {
      title: "Sweet things",
      items: [
        {
          name: "Sicilian Afternoon Tea",
          description:
            "3 Sicilian pastries with any regular hot drink (chocolate/pistachio/matcha drinks +£1).",
          price: "£9.00",
        },
        {
          name: "Mini cannoli & aragostine",
          description:
            "Lemon, pistachio, chocolate, strawberry, vanilla, hazelnut, salted caramel & more — GF cannoli available.",
          price: "£2.50 each",
        },
        {
          name: "Traditional Sicilian Cannolo",
          description: "Filled with sweet ricotta cream from Palermo.",
          price: "£6.50",
        },
        {
          name: "Home-made baked cheesecakes",
          description: "Lemon (GF), banoffee (GF), or pistachio & ricotta.",
          price: "from £6.75",
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert.",
          price: "£7.50",
        },
        {
          name: "Cakes by the slice",
          description:
            "Chocolate & Amaro (GF DF), Sicilian lemon (GF), Sandra’s carrot, coffee & walnut (GF), pistachio & orange (GF DF), strawberry dream (GF vegan).",
          price: "from £5.25",
        },
      ],
    },
    {
      title: "Hot drinks",
      note: "Alt milks +30p · large +65p · syrup +60p. Beans from D J Miles, Porlock.",
      items: [
        {
          name: "The Rosario",
          description:
            "Double espresso, condensed milk, chocolate & steamed milk — house signature.",
          price: "£4.95",
        },
        {
          name: "Pistachio Rosario",
          description: "Double espresso, condensed milk, pistachio cream & steamed milk.",
          price: "£5.50",
        },
        {
          name: "Espresso / Americano / Cappuccino / Latte",
          description: "Core Italian coffee list from the hot drinks PDF.",
          price: "from £2.35",
        },
        {
          name: "Italian hot chocolate",
          description: "Traditional, white, orange, or with caramel / liqueur options.",
          price: "from £4.75",
        },
        {
          name: "Leaf teas",
          description:
            "Rosario’s own-blend breakfast, Earl Grey, Darjeeling, Assam and more.",
        },
      ],
    },
  ],
  maker: {
    eyebrow: "The makers",
    title: "Rosario Bavetta — nonna’s cooking, Bath coffee",
    image: {
      src: `${base}/about-rosario.jpg`,
      alt: "Rosario’s Cafe — about page portrait",
    },
    quote:
      "Rosario has poured his passion for both coffee and his nonna’s cooking into this curiously fabulous café.",
    quoteAttr: "rosarioscafe.co.uk / about",
    paragraphs: [
      "Rosario’s is a traditional Italian cafe in a Grade II listed Georgian building on Northumberland Place — ground-floor counter, outdoor tables for people-watching, and cosy upstairs seating overlooking Bath’s independent shops.",
      "They roast and serve coffee with D J Miles of Porlock, pour quality leaf teas, and run a serious Sicilian pastry case (cannoli, aragostine, cassatine) alongside homemade cakes — with gluten-free options for most.",
      "Menus cover all-day breakfast, panini, salads, soup, and sandwiches using mostly locally sourced ingredients. Retail bags of their speciality coffee sit under the pastry case for take-home.",
    ],
    sideNote: {
      src: `${base}/biscuit-jars-cannoli.jpg`,
      alt: "Biscuit jars and cannoli tray on the counter",
      caption: "Counter jars and freshly filled cannoli — guest photos match the official gallery.",
    },
  },
  reviews: [
    {
      quote:
        "I popped by for their amazing cannoli — Hazelnut and Pistachio. Shells were beautifully crisp with plenty of filling. You could tell they used proper pistachio and hazelnut creams.",
      author: "Yasmin Jemmott",
      source: "Google",
      rating: 5,
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "Must visit if you're in Bath! Genuine Italian cafe — cozy atmosphere, warm welcome. My favourite is crema al caffè. Always packed but more seating upstairs.",
      author: "Siri",
      source: "Google",
      rating: 5,
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "We chose Nonna’s Sicilian meatballs, a ragu and a sausage and gorgonzola arancino. Finished with superb coffee and cakes. Stop here — it’s fantastic.",
      author: "David P",
      source: "Google",
      rating: 5,
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "Cute little Italian coffee shop & brunch place in a narrow street. Coffee and three mini cannoli was a good deal. The owner was really attentive and friendly.",
      author: "HJ Park (Rebecca)",
      source: "Google",
      rating: 5,
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "Nice little Italian cafe offering a good selection of food and drink, gluten free sandwiches and cakes available.",
      author: "Claire Cronin",
      source: "Google",
      rating: 5,
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
    {
      quote:
        "Wonderful service, amazing food, lovely atmosphere. My favourite restaurant in Bath by far. I definitely recommend the signature Rosario coffee!",
      author: "Annabelle",
      source: "Google",
      rating: 5,
      sourceUrl:
        "https://www.sluurpy.co.uk/bath/restaurant/1688023/rosarios",
    },
  ],
  reviewTitle: "~4.6 · cannoli, brunch, and a packed Bath alley",
  reviewLinkHref:
    "https://www.google.com/maps/search/?api=1&query=Rosario%27s%20Cafe%2018%20Northumberland%20Place%20Bath",
  reviewLinkLabel: "Read on Google →",
  hours: [
    { day: "Monday", hours: "8:00 – 17:00" },
    { day: "Tuesday", hours: "8:00 – 17:00" },
    { day: "Wednesday", hours: "8:00 – 17:00" },
    { day: "Thursday", hours: "8:00 – 19:00" },
    { day: "Friday", hours: "8:00 – 19:00" },
    { day: "Saturday", hours: "8:00 – 17:00" },
    { day: "Sunday", hours: "9:30 – 16:00" },
  ],
  hoursNote:
    "Hours as published on rosarioscafe.co.uk (menus / contact). Kitchen closes earlier than the shop on some days. Aggregators sometimes disagree — please confirm by phone.",
  visitPhoto: {
    src: `${base}/exterior-terrace.jpg`,
    alt: "Outdoor terrace seating at Rosario’s",
  },
  visitTitle: "Visit · Northumberland Place",
  closingTitle: "Come for the cannoli. Stay for the coffee.",
  closingLead:
    "Unofficial preview using public menus and photos. Call or find us on the map — we don’t invent today’s availability.",
  beforeAfter: {
    title: "Bath alley → their pastry case & plates",
    before: {
      src: `${base}/before-street.jpg`,
      alt: "Northumberland Place streetscape, Bath",
      label: "Before · street only",
    },
    after: {
      src: `${base}/cannoli-plate.jpg`,
      alt: "Cannoli plate",
      label: "After · their cannoli",
    },
  },
  jsonLdExtra: { servesCuisine: ["Italian", "Cafe"] },
};
