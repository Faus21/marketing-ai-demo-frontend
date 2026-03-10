import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarketFit AI — Find Product-Market Fit Faster",
  description:
    "Stop wasting money on guesswork. AI-powered marketing intelligence that helps you find product-market fit and cut customer acquisition costs by up to 60%.",
};

const STATS = [
  { value: "$536", label: "Avg. B2B Customer Acquisition Cost" },
  { value: "72%", label: "Startups fail due to poor market fit" },
  { value: "26%", label: "Marketing budget wasted on wrong channels" },
  { value: "60%", label: "CAC reduction with proper market fit" },
];

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5m-3 1.5l-3-1.5m6 0l3 1.5m-3-1.5V6.75" />
      </svg>
    ),
    title: "AI Audience Analysis",
    description:
      "Instantly discover who your ideal customers are. Our AI analyzes market signals, competitor data, and behavioral patterns to build precise audience profiles.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Channel Optimization",
    description:
      "Stop throwing money at every channel. Our AI identifies the highest-ROI marketing channels for your specific market and allocates budget intelligently.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Market Fit Scoring",
    description:
      "Get a real-time product-market fit score powered by AI. Track how well your offering resonates with your target market and get actionable suggestions to improve.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "CAC Reduction Engine",
    description:
      "Our AI continuously optimizes your go-to-market strategy to reduce customer acquisition costs. Most businesses see a 40-60% reduction within the first 90 days.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Competitor Intelligence",
    description:
      "Understand exactly what your competitors are doing, where they're spending, and where they're leaving gaps. Find your unfair advantage with AI-driven analysis.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Go-to-Market Playbooks",
    description:
      "Get AI-generated, customized go-to-market strategies based on your industry, audience, and competitive landscape. Launch with confidence, not guesswork.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Tell us about your business",
    description:
      "Describe your product, target market, and goals. Our AI starts building your market intelligence profile in seconds.",
  },
  {
    step: "02",
    title: "Get AI-powered insights",
    description:
      "Receive detailed analysis of your market fit, ideal customer profiles, competitive gaps, and the most effective channels to reach your audience.",
  },
  {
    step: "03",
    title: "Launch & optimize",
    description:
      "Execute your AI-optimized strategy and watch your CAC drop. Our engine continuously learns and refines recommendations as data flows in.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For solo founders validating ideas",
    features: [
      "1 business profile",
      "Basic audience analysis",
      "Market fit score",
      "Weekly insights report",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    description: "For startups finding product-market fit",
    features: [
      "5 business profiles",
      "Advanced AI audience analysis",
      "Real-time market fit scoring",
      "Channel optimization engine",
      "Competitor intelligence",
      "Go-to-market playbooks",
      "Priority support",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$249",
    period: "/month",
    description: "For growing teams optimizing CAC",
    features: [
      "Unlimited profiles",
      "Everything in Growth",
      "CAC reduction engine",
      "Custom integrations",
      "Dedicated account manager",
      "Team collaboration",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[900px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 text-center md:pb-32 md:pt-40">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-light/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now in public beta
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Stop burning cash on{" "}
            <span className="gradient-text">marketing that misses</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            The average business spends <strong className="text-foreground">$536 to acquire a single B2B customer</strong>.
            MarketFit AI uses artificial intelligence to help you find product-market fit faster
            and cut acquisition costs by up to 60%.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-7 text-sm font-semibold text-white shadow-[0_0_32px_rgba(99,102,241,0.3)] transition-all hover:bg-accent-light hover:shadow-[0_0_48px_rgba(99,102,241,0.4)]"
            >
              Get Started Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border px-7 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            >
              See How It Works
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-8 text-center">
              <span className="text-2xl font-bold text-accent-light md:text-3xl">{stat.value}</span>
              <span className="text-xs text-muted md:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">The Problem</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Customer acquisition is broken
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Businesses are spending more than ever to acquire customers, yet most marketing budgets
              are wasted on the wrong audiences, wrong channels, and wrong messaging.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="text-4xl font-bold text-red-400">$395</span>
              <p className="mt-2 text-sm font-medium text-foreground">Average SaaS CAC</p>
              <p className="mt-2 text-sm text-muted">
                SaaS companies spend an average of $395 per customer, with some industries
                exceeding $1,000 per acquisition.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="text-4xl font-bold text-amber-400">5:1</span>
              <p className="mt-2 text-sm font-medium text-foreground">Required LTV:CAC ratio</p>
              <p className="mt-2 text-sm text-muted">
                Experts recommend a 5:1 LTV to CAC ratio for healthy growth, yet most startups
                operate below 3:1 — burning cash faster than they earn it.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <span className="text-4xl font-bold text-rose-400">72%</span>
              <p className="mt-2 text-sm font-medium text-foreground">Startups without market fit</p>
              <p className="mt-2 text-sm text-muted">
                The #1 reason startups fail isn&apos;t funding or team — it&apos;s building something
                nobody wants. Finding market fit first changes everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Features</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Everything you need to find market fit
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Our AI platform replaces months of expensive research and guesswork with data-driven
              insights you can act on today.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-surface p-8 transition-all hover:border-accent/30 hover:bg-surface-light"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">How It Works</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              From zero to market fit in 3 steps
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.step} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent md:block" />
                )}
                <span className="font-mono text-5xl font-bold text-accent/20">{step.step}</span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAVINGS CALCULATOR ─── */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Your Savings</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              How much are you overspending?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Most businesses overspend on customer acquisition by 40-60% due to poor market targeting.
              Here&apos;s what that looks like at scale.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-border">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border bg-red-950/20 p-8 md:border-b-0 md:border-r">
                <h3 className="text-sm font-medium uppercase tracking-wider text-red-400">Without MarketFit AI</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-muted">Avg. CAC</span>
                    <span className="font-semibold text-red-400">$536</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-muted">100 customers/month</span>
                    <span className="font-semibold text-red-400">$53,600</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-muted">Annual spend</span>
                    <span className="font-semibold text-red-400">$643,200</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">Wasted budget (~26%)</span>
                    <span className="font-bold text-red-400">$167,232</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950/20 p-8">
                <h3 className="text-sm font-medium uppercase tracking-wider text-emerald-400">With MarketFit AI</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-muted">Optimized CAC</span>
                    <span className="font-semibold text-emerald-400">$214</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-muted">100 customers/month</span>
                    <span className="font-semibold text-emerald-400">$21,400</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm text-muted">Annual spend</span>
                    <span className="font-semibold text-emerald-400">$256,800</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted">Annual savings</span>
                    <span className="font-bold text-emerald-400">$386,400</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Based on industry average B2B CAC of $536 and 60% reduction with AI-optimized targeting.
          </p>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-accent">Pricing</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Start free, scale when ready
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              No credit card required. Start finding your market fit today.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "gradient-border border-transparent bg-surface-light shadow-[0_0_48px_rgba(99,102,241,0.1)]"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>

                <a
                  href="#"
                  className={`mt-8 flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-accent text-white shadow-[0_0_24px_rgba(99,102,241,0.3)] hover:bg-accent-light hover:shadow-[0_0_32px_rgba(99,102,241,0.4)]"
                      : "border border-border text-foreground hover:border-accent/50 hover:bg-surface-light"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mt-0.5 shrink-0 text-accent-light"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[700px] rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Ready to stop wasting your marketing budget?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Join thousands of businesses using AI to find product-market fit faster and cut
            customer acquisition costs. Start for free — no credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-[0_0_32px_rgba(99,102,241,0.3)] transition-all hover:bg-accent-light hover:shadow-[0_0_48px_rgba(99,102,241,0.4)]"
            >
              Get Started Free
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free plan available &middot; No credit card required &middot; Setup in 2 minutes
          </p>
        </div>
      </section>
    </>
  );
}
