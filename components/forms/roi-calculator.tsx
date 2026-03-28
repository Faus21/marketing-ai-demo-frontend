"use client";

import { useState, useMemo } from "react";
import PreOrderButton from "@/components/ui/pre-order-button";

/* ------------------------------------------------------------------ */
/*  Constants                                                         */
/* ------------------------------------------------------------------ */

const PLATFORMS = ["TikTok", "YouTube Shorts", "Instagram Reels", "X / Twitter"];

const MARKETFIT_MONTHLY_PRICE = 49; // estimated post-launch price
const FOUNDING_MEMBER_MONTHLY = MARKETFIT_MONTHLY_PRICE * 0.5; // 50% off for 3 months
const AVG_AGENCY_HOURLY = 150;
const WEEKS_PER_MONTH = 4.33;

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function fmtCurrency(n: number) {
  return "$" + fmt(n);
}

function pct(n: number) {
  if (!isFinite(n)) return "---";
  return fmt(n) + "%";
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function RoiCalculator() {
  /* --- inputs --- */
  const [competitors, setCompetitors] = useState(5);
  const [platforms, setPlatforms] = useState<string[]>(["TikTok", "YouTube Shorts"]);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [usesAgency, setUsesAgency] = useState(false);
  const [agencyMonthly, setAgencyMonthly] = useState(2000);
  const [teamSize, setTeamSize] = useState(1);

  /* --- calculations --- */
  const results = useMemo(() => {
    const monthlyHoursManual = hoursPerWeek * WEEKS_PER_MONTH * teamSize;
    const manualLaborCost = monthlyHoursManual * hourlyRate;
    const agencyCost = usesAgency ? agencyMonthly : 0;
    const totalCurrentCost = manualLaborCost + agencyCost;

    // MarketFit AI reduces research time by ~80% on average
    const timeReductionPct = 0.80;
    const hoursWithMarketFit = monthlyHoursManual * (1 - timeReductionPct);
    const laborWithMarketFit = hoursWithMarketFit * hourlyRate;

    // With AI tool, most teams eliminate or significantly reduce agency spend
    const agencyReduction = usesAgency ? agencyMonthly * 0.6 : 0;
    const agencyWithMarketFit = agencyCost - agencyReduction;

    const totalWithMarketFit = laborWithMarketFit + agencyWithMarketFit + MARKETFIT_MONTHLY_PRICE;
    const totalWithMarketFitFounding = laborWithMarketFit + agencyWithMarketFit + FOUNDING_MEMBER_MONTHLY;

    const monthlySavings = totalCurrentCost - totalWithMarketFit;
    const monthlySavingsFounding = totalCurrentCost - totalWithMarketFitFounding;
    const annualSavings = monthlySavings * 12;

    const hoursSavedMonthly = monthlyHoursManual - hoursWithMarketFit;
    const hoursSavedAnnually = hoursSavedMonthly * 12;

    const roi = MARKETFIT_MONTHLY_PRICE > 0
      ? ((monthlySavings) / MARKETFIT_MONTHLY_PRICE) * 100
      : 0;

    // Opportunity cost — what could you build with reclaimed hours?
    const opportunityCostMonthly = hoursSavedMonthly * hourlyRate;

    // Payback period in days
    const paybackDays = monthlySavings > 0 ? (MARKETFIT_MONTHLY_PRICE / (monthlySavings / 30)) : Infinity;

    return {
      monthlyHoursManual: Math.round(monthlyHoursManual),
      hoursWithMarketFit: Math.round(hoursWithMarketFit),
      hoursSavedMonthly: Math.round(hoursSavedMonthly),
      hoursSavedAnnually: Math.round(hoursSavedAnnually),
      manualLaborCost,
      agencyCost,
      totalCurrentCost,
      totalWithMarketFit,
      totalWithMarketFitFounding,
      monthlySavings,
      monthlySavingsFounding,
      annualSavings,
      roi,
      opportunityCostMonthly,
      paybackDays: Math.round(paybackDays),
      platformCount: platforms.length,
      competitorCount: competitors,
    };
  }, [competitors, platforms, hoursPerWeek, hourlyRate, usesAgency, agencyMonthly, teamSize]);

  /* --- toggle platform --- */
  function togglePlatform(platform: string) {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
      {/* ---- LEFT: Input Panel ---- */}
      <div className="rounded-xl border border-border/30 bg-surface/60 p-7">
        <h2 className="mb-6 text-[15px] font-semibold">Your current setup</h2>

        {/* Competitors */}
        <InputGroup label="Competitors you track" value={competitors}>
          <input
            type="range"
            min={1}
            max={25}
            value={competitors}
            onChange={(e) => setCompetitors(+e.target.value)}
            className="input-range w-full"
          />
          <span className="text-right text-[13px] tabular-nums text-foreground">
            {competitors}
          </span>
        </InputGroup>

        {/* Platforms */}
        <div className="mb-6">
          <label className="mb-2 block text-[13px] text-muted">
            Platforms you monitor
          </label>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => togglePlatform(p)}
                className={`rounded-lg border px-3 py-1.5 text-[12px] font-medium transition-all duration-200 ${
                  platforms.includes(p)
                    ? "border-accent/50 bg-accent/15 text-accent-light"
                    : "border-border/40 text-muted hover:border-border/60"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Hours per week */}
        <InputGroup
          label="Hours / week on competitor research"
          value={hoursPerWeek}
        >
          <input
            type="range"
            min={1}
            max={40}
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(+e.target.value)}
            className="input-range w-full"
          />
          <span className="text-right text-[13px] tabular-nums text-foreground">
            {hoursPerWeek}h
          </span>
        </InputGroup>

        {/* Hourly rate */}
        <InputGroup label="Your effective hourly rate" value={hourlyRate}>
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-muted">$</span>
            <input
              type="number"
              min={10}
              max={500}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(+e.target.value)}
              className="w-24 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 text-[13px] tabular-nums text-foreground outline-none transition-colors focus:border-accent/60"
            />
            <span className="text-[13px] text-muted">/ hour</span>
          </div>
        </InputGroup>

        {/* Team size */}
        <InputGroup label="People doing research" value={teamSize}>
          <input
            type="range"
            min={1}
            max={10}
            value={teamSize}
            onChange={(e) => setTeamSize(+e.target.value)}
            className="input-range w-full"
          />
          <span className="text-right text-[13px] tabular-nums text-foreground">
            {teamSize}
          </span>
        </InputGroup>

        {/* Agency toggle */}
        <div className="mb-6">
          <label className="flex items-center gap-3 text-[13px] text-muted">
            <button
              type="button"
              onClick={() => setUsesAgency(!usesAgency)}
              className={`flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
                usesAgency ? "bg-accent" : "bg-border/60"
              }`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200 ${
                  usesAgency ? "translate-x-[18px]" : "translate-x-[3px]"
                }`}
              />
            </button>
            I also pay an agency / freelancer
          </label>
          {usesAgency && (
            <div className="mt-3 flex items-center gap-3">
              <span className="text-[13px] text-muted">$</span>
              <input
                type="number"
                min={100}
                max={50000}
                value={agencyMonthly}
                onChange={(e) => setAgencyMonthly(+e.target.value)}
                className="w-28 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 text-[13px] tabular-nums text-foreground outline-none transition-colors focus:border-accent/60"
              />
              <span className="text-[13px] text-muted">/ month</span>
            </div>
          )}
        </div>
      </div>

      {/* ---- RIGHT: Results Panel ---- */}
      <div className="flex flex-col gap-6">
        {/* Headline savings */}
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-7">
          <p className="mb-1 text-[13px] font-medium uppercase tracking-widest text-accent">
            Your potential savings
          </p>
          <p className="text-[clamp(2rem,5vw,3rem)] font-bold leading-none tracking-tight">
            {fmtCurrency(results.annualSavings)}
            <span className="ml-2 text-[15px] font-normal text-muted">
              / year
            </span>
          </p>
          <p className="mt-2 text-[13px] text-muted">
            {fmtCurrency(results.monthlySavings)} saved per month &middot;{" "}
            {pct(results.roi)} ROI on MarketFit AI
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            label="Hours saved / month"
            value={`${fmt(results.hoursSavedMonthly)}h`}
            sub={`${fmt(results.hoursSavedAnnually)}h per year`}
          />
          <StatCard
            label="Payback period"
            value={
              results.paybackDays <= 0
                ? "Instant"
                : results.paybackDays > 365
                  ? "> 1 year"
                  : `${results.paybackDays} days`
            }
            sub="Time to recover subscription cost"
          />
          <StatCard
            label="Current monthly cost"
            value={fmtCurrency(results.totalCurrentCost)}
            sub={`${fmt(results.monthlyHoursManual)}h labor${results.agencyCost > 0 ? " + agency" : ""}`}
          />
          <StatCard
            label="With MarketFit AI"
            value={fmtCurrency(results.totalWithMarketFit)}
            sub={`${fmt(results.hoursWithMarketFit)}h labor + ${fmtCurrency(MARKETFIT_MONTHLY_PRICE)}/mo subscription`}
            highlight
          />
        </div>

        {/* Opportunity cost */}
        <div className="rounded-xl border border-border/30 bg-surface/60 p-7">
          <h3 className="mb-4 text-[14px] font-semibold">
            What you could do with {fmt(results.hoursSavedMonthly)} extra hours
          </h3>
          <ul className="flex flex-col gap-2.5 text-[13px] text-muted">
            <OpportunityItem
              text={`Worth ${fmtCurrency(results.opportunityCostMonthly)}/mo if redirected to revenue-generating work`}
            />
            <OpportunityItem
              text={`Create ${fmt(Math.round(results.hoursSavedMonthly / 2))} additional content pieces per month`}
            />
            <OpportunityItem
              text={`Run ${fmt(Math.round(results.hoursSavedMonthly / 4))} more experiments or A/B tests`}
            />
            <OpportunityItem
              text={`Focus on strategy instead of manual data collection`}
            />
          </ul>
        </div>

        {/* Comparison breakdown */}
        <div className="rounded-xl border border-border/30 bg-surface/60 p-7">
          <h3 className="mb-4 text-[14px] font-semibold">Cost breakdown</h3>
          <div className="flex flex-col gap-3">
            <ComparisonRow
              label="Manual research labor"
              before={fmtCurrency(results.manualLaborCost)}
              after={fmtCurrency(results.manualLaborCost * 0.2)}
            />
            {results.agencyCost > 0 && (
              <ComparisonRow
                label="Agency / freelancer"
                before={fmtCurrency(results.agencyCost)}
                after={fmtCurrency(results.agencyCost * 0.4)}
              />
            )}
            <ComparisonRow
              label="MarketFit AI subscription"
              before={fmtCurrency(0)}
              after={fmtCurrency(MARKETFIT_MONTHLY_PRICE)}
            />
            <div className="my-1 border-t border-border/30" />
            <ComparisonRow
              label="Total monthly"
              before={fmtCurrency(results.totalCurrentCost)}
              after={fmtCurrency(results.totalWithMarketFit)}
              bold
            />
          </div>
        </div>

        {/* Founding member highlight */}
        <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent p-7">
          <p className="mb-1 text-[13px] font-medium text-accent">
            Founding Member deal
          </p>
          <p className="text-[15px] font-semibold">
            Lock in 50% off for 3 months &mdash; save even more
          </p>
          <p className="mt-1 text-[13px] text-muted">
            At {fmtCurrency(FOUNDING_MEMBER_MONTHLY)}/mo, your monthly savings
            jump to{" "}
            <span className="font-medium text-foreground">
              {fmtCurrency(results.monthlySavingsFounding)}
            </span>
            . Only $10 to reserve your spot.
          </p>
          <div className="mt-5">
            <PreOrderButton className="rounded-lg bg-accent/90 px-5 py-2 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent glow-sm">
              Get Early Access for $10
            </PreOrderButton>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                    */
/* ------------------------------------------------------------------ */

function InputGroup({
  label,
  children,
}: {
  label: string;
  value: number;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-[13px] text-muted">{label}</label>
      <div className="flex items-center gap-3">{children}</div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-accent/30 bg-accent/5"
          : "border-border/30 bg-surface/60"
      }`}
    >
      <p className="text-[12px] text-muted">{label}</p>
      <p className="mt-1 text-[20px] font-semibold tabular-nums">{value}</p>
      <p className="mt-0.5 text-[11px] text-subtle">{sub}</p>
    </div>
  );
}

function OpportunityItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[10px] text-accent">
        +
      </span>
      {text}
    </li>
  );
}

function ComparisonRow({
  label,
  before,
  after,
  bold,
}: {
  label: string;
  before: string;
  after: string;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between text-[13px] ${bold ? "font-semibold text-foreground" : "text-muted"}`}
    >
      <span>{label}</span>
      <div className="flex items-center gap-4">
        <span className={`tabular-nums ${!bold ? "text-subtle line-through" : ""}`}>
          {before}
        </span>
        <span className="text-[10px] text-subtle">&rarr;</span>
        <span className={`tabular-nums ${bold ? "text-accent" : "text-foreground"}`}>
          {after}
        </span>
      </div>
    </div>
  );
}
