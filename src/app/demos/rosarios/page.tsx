import type { Metadata } from "next";
import { VenueDemoPage } from "@/components/VenueDemoPage";
import { rosarios } from "@/data/venues/rosarios";

export const metadata: Metadata = {
  title: "Rosario’s Cafe",
  description:
    "Unofficial demo redesign of Rosario’s Cafe, Bath UK — Italian coffee, cakes, and hospitality in Northumberland Place.",
};

export default function RosariosPage() {
  return <VenueDemoPage venue={rosarios} />;
}
