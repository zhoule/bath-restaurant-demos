import type { Metadata } from "next";
import { FlagshipVenuePage } from "@/components/FlagshipVenuePage";
import { mattysCafeFlagship } from "@/data/flagship/mattys-cafe";

export const metadata: Metadata = {
  title: "Matty’s Cafe",
  description:
    "Unofficial flagship demo of Matty’s Cafe, Lower Bristol Road, Bath — full English breakfasts and homemade specials.",
};

export default function Page() {
  return <FlagshipVenuePage config={mattysCafeFlagship} />;
}
