import type { Metadata } from "next";
import { VenueDemoPage } from "@/components/VenueDemoPage";
import { mattysCafe } from "@/data/venues/mattys-cafe";

export const metadata: Metadata = {
  title: "Matty’s Cafe",
  description:
    "Unofficial demo redesign of Matty’s Cafe, Bath — full English breakfasts and homemade specials on Lower Bristol Road.",
};

export default function Page() {
  return <VenueDemoPage venue={mattysCafe} />;
}
