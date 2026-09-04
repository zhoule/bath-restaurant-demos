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
  cta: {
    label: string;
    href: string;
  };
  theme: {
    accent: string;
    accentSoft: string;
  };
  sources: { label: string; url: string }[];
};
