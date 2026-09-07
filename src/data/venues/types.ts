export type VenueStatus = "live" | "coming-soon";

export type MenuHighlight = {
  name: string;
  description: string;
  /** When true, content is illustrative — not an official menu item/price. */
  isPlaceholder?: boolean;
};

export type OpeningHours = {
  summary: string;
  note?: string;
  sourceUrl?: string;
};

export type VenueLocation = {
  addressLines: string[];
  city: string;
  postcode: string;
  country: string;
  mapQuery: string;
};

export type VenueContact = {
  phone?: string;
  email?: string;
  website?: string;
  facebook?: string;
};

export type VenuePhoto = {
  src: string;
  alt: string;
  credit: string;
  /** True when image is a labelled photographic placeholder, not a venue photo. */
  isPlaceholder?: boolean;
};

export type VenueReview = {
  quote: string;
  author: string;
  source: string;
  sourceUrl?: string;
  date?: string;
  /** Only include if stated by the public source — never invent. */
  rating?: number;
};

export type Venue = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  about: string[];
  status: VenueStatus;
  location: VenueLocation;
  contact: VenueContact;
  hours: OpeningHours;
  menuHighlights: MenuHighlight[];
  photos: VenuePhoto[];
  reviews: VenueReview[];
  /** Honest note when photos/menus/reviews are incomplete. */
  contentGaps?: string[];
  heroEyebrow: string;
  cta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  theme: {
    accent: string;
    accentSoft: string;
  };
  sources: { label: string; url: string }[];
};
