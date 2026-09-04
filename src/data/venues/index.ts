import { rosarios } from "./rosarios";
import type { Venue } from "./types";

export type { Venue, VenueStatus, MenuHighlight } from "./types";

/** Registry of all demo venues. Add new venues here. */
export const venues: Venue[] = [rosarios];

export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}

export function getLiveVenues(): Venue[] {
  return venues.filter((v) => v.status === "live");
}
