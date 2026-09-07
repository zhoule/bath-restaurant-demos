import type { Venue, VenueReview } from "@/data/venues/types";

export type MosaicItem = {
  src: string;
  alt: string;
  label: string;
  span?: "wide" | "tall" | "normal";
};

export type MenuSection = {
  title: string;
  note?: string;
  items: { name: string; description: string; price?: string }[];
};

export type FlagshipConfig = {
  venue: Venue;
  /** Override reviews if more curated than venue.reviews */
  reviews?: VenueReview[];
  hero: {
    src: string;
    alt: string;
    objectPosition?: string;
  };
  proof: { k: string; v: string }[];
  mosaicEyebrow?: string;
  mosaicTitle: string;
  mosaicLead: string;
  mosaic: MosaicItem[];
  menuEyebrow?: string;
  menuTitle: string;
  menuLead?: string;
  menu: MenuSection[];
  maker?: {
    eyebrow?: string;
    title: string;
    image: { src: string; alt: string };
    quote?: string;
    quoteAttr?: string;
    paragraphs: string[];
    sideNote?: { src: string; alt: string; caption: string };
  };
  reviewEyebrow?: string;
  reviewTitle: string;
  reviewLinkLabel?: string;
  reviewLinkHref?: string;
  hours: { day: string; hours: string }[];
  hoursNote?: string;
  visitPhoto?: { src: string; alt: string };
  visitTitle?: string;
  closingTitle: string;
  closingLead?: string;
  beforeAfter?: {
    before: { src: string; alt: string; label: string };
    after: { src: string; alt: string; label: string };
    title: string;
  };
  jsonLdExtra?: Record<string, unknown>;
  phoneDisplay?: string;
  addressLines?: string[];
};
