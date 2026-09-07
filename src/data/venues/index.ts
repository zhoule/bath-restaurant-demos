import { gatehouseCoffee } from "./gatehouse-coffee";
import { kioskCafe } from "./kiosk-cafe";
import { mattysCafe } from "./mattys-cafe";
import { oldYorkTeaRoom } from "./old-york-tea-room";
import { pulteneyBridgeCoffee } from "./pulteney-bridge-coffee";
import { rosarios } from "./rosarios";
import type { Venue } from "./types";

export type { Venue, VenueStatus, MenuHighlight, VenuePhoto, VenueReview } from "./types";

/** Registry of all demo venues. Add new venues here. */
export const venues: Venue[] = [
  oldYorkTeaRoom,
  rosarios,
  pulteneyBridgeCoffee,
  mattysCafe,
  gatehouseCoffee,
  kioskCafe,
];

export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}

export function getLiveVenues(): Venue[] {
  return venues.filter((v) => v.status === "live");
}
