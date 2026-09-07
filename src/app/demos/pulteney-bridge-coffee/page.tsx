import type { Metadata } from "next";
import { FlagshipVenuePage } from "@/components/FlagshipVenuePage";
import { pulteneyBridgeFlagship } from "@/data/flagship/pulteney-bridge-coffee";

export const metadata: Metadata = {
  title: "The Bridge Coffee Shop · Pulteney Bridge",
  description:
    "Unofficial flagship demo of The Bridge Coffee Shop on Pulteney Bridge, Bath — cream teas, breakfasts, and weir views.",
};

export default function Page() {
  return <FlagshipVenuePage config={pulteneyBridgeFlagship} />;
}
