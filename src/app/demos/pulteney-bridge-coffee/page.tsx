import type { Metadata } from "next";
import { VenueDemoPage } from "@/components/VenueDemoPage";
import { pulteneyBridgeCoffee } from "@/data/venues/pulteney-bridge-coffee";

export const metadata: Metadata = {
  title: "The Bridge Coffee Shop",
  description:
    "Unofficial demo redesign of The Bridge Coffee Shop on Pulteney Bridge, Bath — cream teas and river views.",
};

export default function Page() {
  return <VenueDemoPage venue={pulteneyBridgeCoffee} />;
}
