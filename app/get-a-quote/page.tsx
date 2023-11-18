import type { Metadata } from "next";
import GetAQuote from "@/components/ContactPage/GetAQuote";

export const metadata: Metadata = {
  title: "Based Solar | Get A Quote",
  description:
    "Based Solar: Your Gateway to Clean, Cost-Efficient Energy Solutions.",
  keywords: [
    "based solar",
    "based solar panels",
    "based",
    "solar",
    "solar panels",
    "power plants",
    "based solar get a quote",
  ],
};

export default function page() {
  return <GetAQuote />;
}
