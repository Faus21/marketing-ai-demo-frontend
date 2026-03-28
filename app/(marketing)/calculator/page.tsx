import type { Metadata } from "next";
import RoiCalculator from "@/components/forms/roi-calculator";

export const metadata: Metadata = {
  title: "Marketing ROI Calculator | MarketFit AI",
  description:
    "Calculate how much time and money you save with AI-powered competitor analysis vs manual research. See your potential ROI with MarketFit AI.",
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
      {/* Hero */}
      <section className="mb-16 text-center">
        <p className="mb-3 text-[13px] font-medium uppercase tracking-widest text-accent">
          ROI Calculator
        </p>
        <h1 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-tight">
          How much is <span className="gradient-text">manual research</span>{" "}
          costing you?
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
          Most founders spend 15-30 hours per month on competitor research.
          Calculate what that actually costs and see how MarketFit AI pays for
          itself.
        </p>
      </section>

      <RoiCalculator />
    </main>
  );
}
