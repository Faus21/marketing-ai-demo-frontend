import type { Metadata } from "next";
import DemoEntryForm from "@/components/forms/demo-entry-form";

export const metadata: Metadata = {
  title: "Demo — MarketFit AI",
  description:
    "Enter your business details and let MarketFit AI generate a tailored growth strategy for you.",
};

export default function DemoPage() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="orb orb-accent left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
            Demo
          </p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Tell us about your business
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Fill in your business profile and describe your current situation.
            Our AI will analyze your inputs and generate a tailored marketing
            strategy.
          </p>
        </div>

        <DemoEntryForm />
      </div>
    </section>
  );
}
