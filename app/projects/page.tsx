import type { Metadata } from "next";
import Projects from "@/components/ProjectsPage/Projects";

export const metadata: Metadata = {
  title: "Based Solar | Projects",
  description:
    "Based Solar: Your Gateway to Clean, Cost-Efficient Energy Solutions.",
  keywords: [
    "based solar",
    "based solar panels",
    "based",
    "solar",
    "solar panels",
    "power plants",
    "based solar projects",
  ],
};

export default function page() {
  return <Projects />;
}
