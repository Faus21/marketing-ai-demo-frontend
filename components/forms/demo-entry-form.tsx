"use client";

import { useState } from "react";

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
        className="h-10 w-full rounded-lg border border-border/40 bg-surface px-3 text-[13px] text-foreground placeholder:text-muted/60 transition-colors duration-150 focus:border-accent/50 focus:outline-none"
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
        className="w-full rounded-lg border border-border/40 bg-surface px-3 py-2.5 text-[13px] leading-relaxed text-foreground placeholder:text-muted/60 transition-colors duration-150 focus:border-accent/50 focus:outline-none resize-y"
      />
    </label>
  );
}

export default function DemoEntryForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For demo purposes, log the JSON and show confirmation
    console.log(JSON.stringify(data, null, 2));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border/40 bg-surface/60 p-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-emerald-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          Business profile submitted
        </h3>
        <p className="mt-2 text-[13px] text-muted">
          Your information has been received. The AI analysis will begin
          shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 inline-flex h-9 items-center rounded-lg border border-border/40 px-4 text-[13px] text-muted transition-colors duration-150 hover:border-border hover:text-foreground"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
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

      {/* ─── Submit ─── */}
      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => setData(INITIAL_DATA)}
          className="inline-flex h-10 items-center rounded-lg border border-border/40 px-5 text-[13px] text-muted transition-colors duration-150 hover:border-border hover:text-foreground"
        >
          Reset
        </button>
        <button
          type="submit"
          className="inline-flex h-10 items-center rounded-lg bg-accent px-6 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm"
        >
          Start AI Analysis
        </button>
      </div>
    </form>
  );
}
