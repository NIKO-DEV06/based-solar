import type { Metadata } from "next";
import ForHomes from "@/components/ForHomesPage/ForHomes";

export const metadata: Metadata = {
  title: "Based Solar | For Houses",
  description:
    "A solar power plant on a private property is a profitable investment. Based Solar: Your Gateway to Clean, Cost-Efficient Energy Solutions.",
  keywords: [
    "based solar",
    "based solar panels",
    "based",
    "solar",
    "solar panels",
    "power plants",
    "based solar for homes",
  ],
};

const page = () => {
  return <ForHomes />;
};

export default page;
