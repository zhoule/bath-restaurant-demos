import type { Metadata } from "next";
import { FlagshipVenuePage } from "@/components/FlagshipVenuePage";
import { kioskCafeFlagship } from "@/data/flagship/kiosk-cafe";

export const metadata: Metadata = {
  title: "Kiosk Cafe",
  description:
    "Unofficial flagship demo of Kiosk Cafe, Fossgate, York — rotating specialty coffee and seasonal brunch.",
};

export default function Page() {
  return <FlagshipVenuePage config={kioskCafeFlagship} />;
}
