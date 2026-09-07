import type { Metadata } from "next";
import { FlagshipVenuePage } from "@/components/FlagshipVenuePage";
import { gatehouseCoffeeFlagship } from "@/data/flagship/gatehouse-coffee";

export const metadata: Metadata = {
  title: "Gatehouse Coffee",
  description:
    "Unofficial flagship demo of Gatehouse Coffee at Walmgate Bar, York — specialty coffee on the medieval walls.",
};

export default function Page() {
  return <FlagshipVenuePage config={gatehouseCoffeeFlagship} />;
}
