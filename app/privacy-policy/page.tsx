import PrivacyPolicy from "@/components/PrivacyPolicyPage/PrivacyPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Based Solar | Privacy Policy",
  description:
    "Based Solar: Your Gateway to Clean, Cost-Efficient Energy Solutions.",
  keywords: [
    "based solar",
    "based solar panels",
    "based",
    "solar",
    "solar panels",
    "power plants",
    "based solar privacy policy",
  ],
};

const page = () => {
  return <PrivacyPolicy />;
};

export default page;
