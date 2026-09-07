import type { Metadata } from "next";
import { FlagshipTeaRoomPage } from "@/components/FlagshipTeaRoomPage";
import { oldYorkTeaRoom } from "@/data/venues/old-york-tea-room";

export const metadata: Metadata = {
  title: "The Old York Tea Room",
  description:
    "Unofficial flagship demo of The Old York Tea Room, Goodramgate, York — cakes, cream tea, and a medieval hideaway.",
};

export default function Page() {
  return <FlagshipTeaRoomPage venue={oldYorkTeaRoom} />;
}
