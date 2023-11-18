import type { Metadata } from "next";
import ForBusiness from "@/components/ForBusinessPage/ForBusiness";

export const metadata: Metadata = {
  title: "Based Solar | For Businesses",
  description:
    "Lower energy expenses for your business with solar power. Based Solar: Your Gateway to Clean, Cost-Efficient Energy Solutions.",
  keywords: [
    "based solar",
    "based solar panels",
    "based",
    "solar",
    "solar panels",
    "power plants",
    "based solar for business",
  ],
};

const page = () => {
  return <ForBusiness />;
};

export default page;
