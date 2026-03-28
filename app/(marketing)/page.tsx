import type { Metadata } from "next";
import PreOrderButton from "@/components/ui/pre-order-button";
import DemoEntryForm from "@/components/forms/demo-entry-form";

export const metadata: Metadata = {
  title: "MarketFit AI — Reverse-Engineer Viral Growth",
  description:
    "Analyze competitor videos that actually went viral. Get AI-generated growth playbooks tailored to your niche. Stop guessing, start growing.",
};

const PLATFORMS = [
  "TikTok",
  "YouTube Shorts",
  "Instagram Reels",
  "X / Twitter",
];

const FEATURES = [
  {
    label: "Competitor Video Analysis",
    description:
      "Our AI scans viral competitor content across TikTok, YouTube Shorts, Reels, and X — identifying which hooks, formats, and CTAs actually drove engagement.",
  },
  {
    label: "Trend & Hook Detection",
    description:
      "Automatically detect trending formats, opening hooks, and conversion patterns that are working right now in your niche. Updated continuously.",
  },
  {
    label: "Growth Playbook Generation",
    description:
      "Get a ready-to-execute 3–12 month marketing playbook tailored to your business — with content calendars, channel priorities, and messaging frameworks.",
  },
  {
    label: "Performance Benchmarking",
    description:
      "See exactly how competitors perform across platforms. Understand what's working at scale so you can replicate the signal, not the noise.",
  },
  {
    label: "Niche Intelligence",
    description:
      "Deep analysis of your specific market vertical. Know which content angles resonate, which CTAs convert, and where attention is underpriced.",
  },
  {
    label: "Export & Execute",
    description:
      "Export your playbook as a structured brief for your team or agency. Integrates with the tools you already use — no workflow changes needed.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Connect your niche",
    description:
      "Tell us your product, market, and competitors. Our AI begins scanning thousands of videos across platforms within minutes.",
  },
  {
    num: "02",
    title: "AI analyzes what works",
    description:
      "We detect which hooks, formats, CTAs, and trends actually drove engagement and conversions — not just vanity metrics.",
  },
  {
    num: "03",
    title: "Get your playbook",
    description:
      "Receive a tailored 3–12 month growth strategy with specific content types, posting cadences, and channel allocation.",
  },
];

const FOUNDING_INCLUDED = [
  "3 months at 50% off",
  "Priority access on launch day",
  "Unlimited competitor video analysis",
  "AI-generated growth playbooks",
  "Trend & hook detection engine",
  "Cross-platform intelligence",
  "Performance benchmarking",
  "Export-ready briefs",
  "Founding member badge & support",
];

const WAITLIST_INCLUDED = [
  "10% off your first subscription",
  "Launch-day access",
  "All platform features",
  "AI-generated growth playbooks",
  "Cross-platform intelligence",
  "Export-ready briefs",
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative">
        <div className="orb orb-accent left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3" />

        <div className="relative mx-auto max-w-3xl px-6 pb-32 pt-36 text-center md:pb-40 md:pt-48">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1 text-[12px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Early access — limited spots
          </div>

          <h1 className="text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
            Reverse-engineer{" "}
            <span className="gradient-text">viral growth</span>
            <br className="hidden sm:block" />
            from competitor content
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
            MarketFit AI analyzes videos that actually went viral across{" "}
            {PLATFORMS.join(", ")}. It detects what worked — hooks, formats,
            CTAs — and generates a tailored growth playbook for your business.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PreOrderButton className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm">
              Get Early Access — $10
            </PreOrderButton>
            <a
              href="#demo"
              className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border/40 px-5 text-[13px] font-medium text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent-light"
            >
              Try Free Demo
              <svg
                width="12"
                height="12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SIGNAL BAR ─── */}
      <section className="border-y border-border/30">
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4">
          {[
            { value: "10K+", label: "Videos analyzed daily" },
            { value: "4", label: "Platforms covered" },
            { value: "3–12mo", label: "Playbook depth" },
            { value: "< 5 min", label: "Time to first insight" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 px-4 py-8 text-center ${
                i < 3 ? "border-r border-border/30" : ""
              } ${i === 1 ? "max-md:border-r-0" : ""} ${
                i < 2 ? "max-md:border-b max-md:border-border/30" : ""
              }`}
            >
              <span className="font-mono text-lg font-semibold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-[12px] text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
            The problem
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Most marketing strategies are built on guesswork
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Founders and marketers spend weeks crafting strategies based on
            intuition. Meanwhile, the data about what actually works — which
            hooks grab attention, which formats convert, which trends are
            rising — is sitting in plain sight across competitor content.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border/30 bg-border/30 md:grid-cols-3">
            {[
              {
                value: "72%",
                title: "of startups fail from poor market fit",
                description:
                  "Not funding, not team — building something nobody wants, marketed in ways nobody responds to.",
              },
              {
                value: "26%",
                title: "of marketing budget is wasted",
                description:
                  "Wrong channels, wrong messaging, wrong timing. Without data, you're spending blind.",
              },
              {
                value: "5x",
                title: "faster with signal-based strategy",
                description:
                  "Teams using competitor intelligence reach market fit dramatically faster than those guessing.",
              },
            ].map((card) => (
              <div key={card.value} className="bg-surface p-7">
                <span className="font-mono text-2xl font-semibold text-accent-light">
                  {card.value}
                </span>
                <p className="mt-2 text-[13px] font-medium text-foreground">
                  {card.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="relative py-28 md:py-36">
        <div className="orb orb-accent right-0 top-1/4 h-[400px] w-[500px] translate-x-1/3" />

        <div className="relative mx-auto max-w-3xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
            Features
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Intelligence, not guesswork
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Everything you need to understand what&apos;s working in your market
            and build a strategy around real signals.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border/30 bg-border/30 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.label}
                className="bg-surface/80 p-7 transition-colors duration-200 hover:bg-surface-light"
              >
                <h3 className="text-[14px] font-medium text-foreground">
                  {feature.label}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
            How it works
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            From raw competitor data to your growth plan
          </h2>

          <div className="mt-14 space-y-0">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-6 py-8 ${
                  i < STEPS.length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                <span className="font-mono text-[13px] font-medium text-subtle">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DEMO ─── */}
      <section id="demo" className="relative py-28 md:py-36">
        <div className="orb orb-accent left-1/4 top-0 h-[400px] w-[500px] -translate-x-1/2" />

        <div className="relative mx-auto max-w-3xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
            Try it free
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            See it in action with your business
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Fill in your business details and get a free AI-powered audience
            analysis — no signup required. You get{" "}
            <span className="text-foreground font-medium">2 free analyses</span>{" "}
            to explore the platform.
          </p>

          <div className="mt-12">
            <DemoEntryForm embedded />
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="relative py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
            The difference
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Guessing vs. knowing
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border/30 bg-border/30 md:grid-cols-2">
            <div className="bg-surface p-7">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
                Without MarketFit AI
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Manually scrolling competitors' feeds",
                  "Guessing which hooks might work",
                  "Generic marketing templates",
                  "Weeks to build a content strategy",
                  "No data on what actually converts",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-7">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent-light">
                With MarketFit AI
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "AI scans thousands of videos automatically",
                  "Data-backed hook & format detection",
                  "Playbooks tailored to your niche",
                  "First insights in under 5 minutes",
                  "Continuous trend monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-foreground">
                    <svg
                      width="12"
                      height="12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="mt-0.5 shrink-0 text-accent-light"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="relative py-28 md:py-36">
        <div className="orb orb-accent left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
              Early access
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Two ways to get early access
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              We&apos;re launching{" "}
              <span className="text-foreground">April 15, 2026</span>. Reserve
              your spot now — pay $10 to lock in 50% off, or join the waitlist
              for free and get 10% off at launch.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-5 md:grid-cols-2">
            {/* ── Founding Member (Paid) ── */}
            <div className="overflow-hidden rounded-xl border border-accent/40">
              <div className="flex items-center justify-center gap-2 border-b border-accent/30 bg-accent/5 px-5 py-2.5 text-[12px]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-muted">
                  73 of 100 founding spots remaining
                </span>
              </div>

              <div className="bg-surface/60 p-7">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2">
                    <p className="text-[13px] font-medium text-muted">
                      Founding Member
                    </p>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent-light">
                      Best value
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight">$10</span>
                    <span className="text-[13px] text-muted">one-time</span>
                  </div>
                  <p className="mt-2 text-[13px] text-accent-light font-medium">
                    3 months at 50% off after launch
                  </p>
                </div>

                <PreOrderButton
                  defaultTier="paid"
                  className="mt-6 flex h-10 w-full items-center justify-center rounded-lg bg-accent text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm"
                >
                  Reserve My Spot — $10
                </PreOrderButton>

                <p className="mt-3 text-center text-[12px] text-muted">
                  Priority access on launch day &middot; Full refund anytime
                </p>

                <div className="mt-6 border-t border-border/30 pt-6">
                  <p className="mb-3 text-[12px] font-medium text-subtle uppercase tracking-[0.1em]">
                    Everything included
                  </p>
                  <ul className="grid gap-2">
                    {FOUNDING_INCLUDED.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] text-muted"
                      >
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="mt-0.5 shrink-0 text-accent-light"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Waitlist (Free) ── */}
            <div className="overflow-hidden rounded-xl border border-border/40">
              <div className="flex items-center justify-center gap-2 border-b border-border/30 bg-surface px-5 py-2.5 text-[12px]">
                <span className="text-muted">
                  No payment required
                </span>
              </div>

              <div className="bg-surface/60 p-7">
                <div className="text-center">
                  <p className="text-[13px] font-medium text-muted">
                    Waitlist
                  </p>
                  <div className="mt-3 flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl font-semibold tracking-tight">Free</span>
                  </div>
                  <p className="mt-2 text-[13px] text-foreground font-medium">
                    10% off when we launch
                  </p>
                </div>

                <PreOrderButton
                  defaultTier="free"
                  className="mt-6 flex h-10 w-full items-center justify-center rounded-lg border border-border/40 text-[13px] font-medium text-foreground transition-all duration-200 hover:border-accent/50 hover:text-accent-light"
                >
                  Join the Waitlist — Free
                </PreOrderButton>

                <p className="mt-3 text-center text-[12px] text-muted">
                  Just name &amp; email &middot; Unsubscribe anytime
                </p>

                <div className="mt-6 border-t border-border/30 pt-6">
                  <p className="mb-3 text-[12px] font-medium text-subtle uppercase tracking-[0.1em]">
                    What you get
                  </p>
                  <ul className="grid gap-2">
                    {WAITLIST_INCLUDED.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] text-muted"
                      >
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="mt-0.5 shrink-0 text-accent-light"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-[12px] text-subtle">
            Secure payment via Stripe &middot; Full refund if we don&apos;t
            launch &middot; Cancel anytime
          </p>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-28 md:py-36">
        <div className="border-t border-border/30" />
        <div className="mx-auto max-w-2xl px-6 pt-28 text-center md:pt-36">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Stop guessing what works
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Reserve a founding spot for $10 and get 3 months at 50% off — or
            join the waitlist for free and save 10% at launch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PreOrderButton
              defaultTier="paid"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm"
            >
              Get Early Access — $10
            </PreOrderButton>
            <PreOrderButton
              defaultTier="free"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border/40 px-5 text-[13px] font-medium text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent-light"
            >
              Join Waitlist — Free
            </PreOrderButton>
          </div>
          <p className="mt-4 text-[12px] text-subtle">
            Secure payment via Stripe &middot; Cancel anytime &middot; Launch April 15
          </p>
        </div>
      </section>
    </>
  );
}
