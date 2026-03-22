import type { Metadata } from "next";
import DemoResults from "@/components/forms/demo-results";

export const metadata: Metadata = {
  title: "Analysis Results — MarketFit AI",
  description:
    "AI-generated audience segments and marketing strategy based on your business profile.",
};

export default function DemoResultsPage() {
  return <DemoResults />;
}
