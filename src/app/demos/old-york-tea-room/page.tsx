import type { Metadata } from "next";
import { VenueDemoPage } from "@/components/VenueDemoPage";
import { oldYorkTeaRoom } from "@/data/venues/old-york-tea-room";

export const metadata: Metadata = {
  title: "The Old York Tea Room",
  description:
    "Unofficial demo redesign of The Old York Tea Room, Goodramgate, York — cakes, cream tea, and a medieval setting.",
};

export default function Page() {
  return <VenueDemoPage venue={oldYorkTeaRoom} />;
}
