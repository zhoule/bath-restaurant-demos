import type { Metadata } from "next";
import { VenueDemoPage } from "@/components/VenueDemoPage";
import { kioskCafe } from "@/data/venues/kiosk-cafe";

export const metadata: Metadata = {
  title: "Kiosk Cafe",
  description:
    "Unofficial demo redesign of Kiosk Cafe on Fossgate, York — specialty coffee and seasonal brunch.",
};

export default function Page() {
  return <VenueDemoPage venue={kioskCafe} />;
}
