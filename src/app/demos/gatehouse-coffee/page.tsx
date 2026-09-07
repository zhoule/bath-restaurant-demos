import type { Metadata } from "next";
import { VenueDemoPage } from "@/components/VenueDemoPage";
import { gatehouseCoffee } from "@/data/venues/gatehouse-coffee";

export const metadata: Metadata = {
  title: "Gatehouse Coffee",
  description:
    "Unofficial demo redesign of Gatehouse Coffee at Walmgate Bar, York — specialty coffee on the city walls.",
};

export default function Page() {
  return <VenueDemoPage venue={gatehouseCoffee} />;
}
