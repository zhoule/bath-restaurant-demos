import type { Metadata } from "next";
import { FlagshipVenuePage } from "@/components/FlagshipVenuePage";
import { rosariosFlagship } from "@/data/flagship/rosarios";

export const metadata: Metadata = {
  title: "Rosario’s Cafe",
  description:
    "Unofficial flagship demo of Rosario’s Cafe, Northumberland Place, Bath — Sicilian cannoli, Italian coffee, and all-day brunch.",
};

export default function RosariosPage() {
  return <FlagshipVenuePage config={rosariosFlagship} />;
}
