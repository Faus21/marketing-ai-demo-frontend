"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDemoLimit } from "@/hooks/use-demo-limit";

function PendingModal({ open }: { open: boolean }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(id);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-2xl border border-border/40 bg-surface p-8 text-center shadow-2xl">
        {/* Spinner */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <svg
            className="h-8 w-8 animate-spin text-accent"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-foreground">
          Analyzing Your Business{dots}
        </h3>

        <p className="mt-3 text-[13px] leading-relaxed text-muted">
          We&apos;re running a deep analysis of your business profile — identifying
          target audiences, validating assumptions, and crafting actionable insights.
        </p>

        <p className="mt-4 text-[13px] font-medium text-foreground/80">
          This usually takes 2–3 minutes. Please don&apos;t close this page.
        </p>

        {/* Progress bar animation */}
        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-border/30">
          <div className="h-full w-1/3 animate-[shimmer_2s_ease-in-out_infinite] rounded-full bg-accent/70" />
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/30 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Validating data
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/30 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            AI analysis in progress
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/30 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
            Generating report
          </span>
        </div>
      </div>
    </div>
  );
}

const BUSINESS_MODELS = ["B2B", "B2C", "Hybrid"];
const BUSINESS_SIZES = ["small", "medium", "large"];
const POSITIONING_OPTIONS = ["mass", "mid", "premium"];
const SALES_MODELS = ["website", "marketplace", "demo", "subscription", "call", "manager", "offline"];
const SALES_CYCLES = ["impulse", "short", "medium", "long"];

type FormData = {
  business_profile: {
    name: string;
    niche: string;
    model: string;
    size: string;
    default_country: string;
    default_city: string;
    default_language: string;
    positioning: string;
    sales_model: string;
    sales_cycle: string;
  };
  raw_text_input: {
    plans: string;
    problems: string;
    risks: string;
    additional_context: string;
  };
};

const INITIAL_DATA: FormData = {
  business_profile: {
    name: "",
    niche: "",
    model: "B2C",
    size: "small",
    default_country: "",
    default_city: "",
    default_language: "",
    positioning: "mid",
    sales_model: "offline",
    sales_cycle: "impulse",
  },
  raw_text_input: {
    plans: "",
    problems: "",
    risks: "",
    additional_context: "",
  },
};

function InputField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-foreground">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-border/40 bg-surface px-3 text-[13px] text-foreground placeholder:text-muted transition-colors duration-150 focus:border-accent/50 focus:outline-none"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-foreground">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full appearance-none rounded-lg border border-border/40 bg-surface px-3 text-[13px] text-foreground transition-colors duration-150 focus:border-accent/50 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-foreground">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-lg border border-border/40 bg-surface px-3 py-2.5 text-[13px] leading-relaxed text-foreground placeholder:text-muted transition-colors duration-150 focus:border-accent/50 focus:outline-none resize-y"
      />
    </label>
  );
}

export default function DemoEntryForm({ embedded = false }: { embedded?: boolean }) {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { remaining, limitReached, recordUsage, ready } = useDemoLimit();

  function updateProfile<K extends keyof FormData["business_profile"]>(
    key: K,
    value: FormData["business_profile"][K]
  ) {
    setData((prev) => ({
      ...prev,
      business_profile: { ...prev.business_profile, [key]: value },
    }));
  }

  function updateText<K extends keyof FormData["raw_text_input"]>(
    key: K,
    value: FormData["raw_text_input"][K]
  ) {
    setData((prev) => ({
      ...prev,
      raw_text_input: { ...prev.raw_text_input, [key]: value },
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8000/api/v1/generate-audience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`);
      }

      const result = await res.json();
      recordUsage();
      sessionStorage.setItem("demo-results", JSON.stringify(result));
      router.push("/demo/results");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!ready) return null;

  if (limitReached) {
    return (
      <div className="rounded-xl border border-border/40 bg-surface/60 p-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          Free demo limit reached
        </h3>
        <p className="mt-3 mx-auto max-w-md text-[13px] leading-relaxed text-muted">
          You&apos;ve used both free analyses. Get early access to unlock unlimited
          AI-powered audience analysis and growth playbooks.
        </p>
        <a
          href="#pricing"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-accent px-6 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm"
        >
          Get Early Access — $10
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <PendingModal open={loading} />

      {/* ─── Remaining uses badge ─── */}
      <div className="flex items-center gap-2 rounded-lg border border-border/30 bg-surface/40 px-4 py-2.5 text-[12px] text-muted">
        <span className={`h-1.5 w-1.5 rounded-full ${remaining === 1 ? "bg-amber-400" : "bg-emerald-400"}`} />
        {remaining} free {remaining === 1 ? "analysis" : "analyses"} remaining
      </div>

      {/* ─── Business Profile ─── */}
      <section>
        <div className="mb-6">
          <h3 className="text-[15px] font-semibold text-foreground">
            Business Profile
          </h3>
          <p className="mt-1 text-[13px] text-muted">
            Tell us about your business so we can tailor the analysis.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 bg-surface/60 p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <InputField
              label="Business Name"
              value={data.business_profile.name}
              onChange={(v) => updateProfile("name", v)}
              placeholder="e.g. GlowBeauty Studio"
            />
            <InputField
              label="Niche"
              value={data.business_profile.niche}
              onChange={(v) => updateProfile("niche", v)}
              placeholder="e.g. Beauty salon (lashes, brows, facials)"
            />
            <SelectField
              label="Business Model"
              value={data.business_profile.model}
              onChange={(v) => updateProfile("model", v)}
              options={BUSINESS_MODELS}
            />
            <SelectField
              label="Business Size"
              value={data.business_profile.size}
              onChange={(v) => updateProfile("size", v)}
              options={BUSINESS_SIZES}
            />
            <InputField
              label="Country"
              value={data.business_profile.default_country}
              onChange={(v) => updateProfile("default_country", v)}
              placeholder="e.g. Poland"
            />
            <InputField
              label="City"
              value={data.business_profile.default_city}
              onChange={(v) => updateProfile("default_city", v)}
              placeholder="e.g. Warsaw"
            />
            <InputField
              label="Language"
              value={data.business_profile.default_language}
              onChange={(v) => updateProfile("default_language", v)}
              placeholder="e.g. Polish"
            />
            <SelectField
              label="Positioning"
              value={data.business_profile.positioning}
              onChange={(v) => updateProfile("positioning", v)}
              options={POSITIONING_OPTIONS}
            />
            <SelectField
              label="Sales Model"
              value={data.business_profile.sales_model}
              onChange={(v) => updateProfile("sales_model", v)}
              options={SALES_MODELS}
            />
            <SelectField
              label="Sales Cycle"
              value={data.business_profile.sales_cycle}
              onChange={(v) => updateProfile("sales_cycle", v)}
              options={SALES_CYCLES}
            />
          </div>
        </div>
      </section>

      {/* ─── Raw Text Input ─── */}
      <section>
        <div className="mb-6">
          <h3 className="text-[15px] font-semibold text-foreground">
            Your Situation
          </h3>
          <p className="mt-1 text-[13px] text-muted">
            Describe your goals, challenges, and context in your own words.
          </p>
        </div>

        <div className="rounded-xl border border-border/40 bg-surface/60 p-6 space-y-5">
          <TextareaField
            label="Plans & Goals"
            value={data.raw_text_input.plans}
            onChange={(v) => updateText("plans", v)}
            placeholder="e.g. In the next 6 weeks we want +25% new bookings without hiring staff..."
          />
          <TextareaField
            label="Problems & Pain Points"
            value={data.raw_text_input.problems}
            onChange={(v) => updateText("problems", v)}
            placeholder="e.g. Instagram ads got expensive and bring likes, not bookings..."
          />
          <TextareaField
            label="Risks & Constraints"
            value={data.raw_text_input.risks}
            onChange={(v) => updateText("risks", v)}
            placeholder="e.g. Budget is limited to ~1500 PLN/month. Only one person handles content..."
          />
          <TextareaField
            label="Additional Context"
            value={data.raw_text_input.additional_context}
            onChange={(v) => updateText("additional_context", v)}
            placeholder="e.g. Average spend 220–350 PLN. Clients: women 23–38 in Warsaw..."
          />
        </div>
      </section>

      {/* ─── Error ─── */}
      {error && (
        <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-[13px] text-red-400">
          {error}
        </div>
      )}

      {/* ─── Submit ─── */}
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => setData(INITIAL_DATA)}
          disabled={loading}
          className="inline-flex h-10 items-center rounded-lg border border-border/40 px-5 text-[13px] text-muted transition-colors duration-150 hover:border-border hover:text-foreground disabled:opacity-50"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-6 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm disabled:opacity-50"
        >
          {loading && (
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {loading ? "Analyzing..." : "Start AI Analysis"}
        </button>
      </div>
    </form>
  );
}
