"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";

/* ─── Types ─── */

type Segment = {
  name: string;
  country: string;
  city: string;
  language: string;
  gender: string;
  age_min: number;
  age_max: number;
  income_tier: string;
  interests: string[];
  problem_it_solves: string;
  why_now: string;
  channel_platforms: string[];
  confidence: number;
  assumptions: string[];
};

type Quality = {
  overall_score: number;
  business_fit_score: number;
  goal_fit_score: number;
  channel_fit_score: number;
  validation_rounds: number;
};

type AnalysisData = {
  segments: Segment[];
  notes: string;
  quality: Quality;
};


/* ─── Icons ─── */

function IconTarget({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17a5 5 0 100-10 5 5 0 000 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  );
}

function IconChart({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l4-4 4 4 6-6" />
    </svg>
  );
}

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function IconFlag({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l9 4.5L21 3v12l-9 4.5L3 15" />
    </svg>
  );
}

function IconChannel({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconCake({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-3m0 0l-1.5-1.5M12 5.25l1.5-1.5M4.5 19.5h15a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 15v3a1.5 1.5 0 001.5 1.5zm0 0v-6a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v6" />
    </svg>
  );
}

function IconCurrency({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  );
}

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364V3m0 2.364a48.016 48.016 0 013.709.303M3 5.621V3h18v2.621m0 0a48.474 48.474 0 00-6-.371" />
    </svg>
  );
}

function IconPerson({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function IconLightbulb({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

function IconBolt({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconWarning({ className }: { className?: string }) {
  return (
    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}

function IconNote({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

/* ─── Channel icon mapping ─── */

function ChannelIcon({ name }: { name: string }) {
  const cn = "shrink-0";
  switch (name.toLowerCase()) {
    case "instagram":
      return (
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={cn}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24" className={cn}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "google maps":
      return (
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={cn}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      );
    case "email":
      return (
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className={cn}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      );
    default:
      return <IconChannel className={cn} />;
  }
}

/* ─── Helpers ─── */

function ScoreRing({ value, max = 100, size = 72 }: { value: number; max?: number; size?: number }) {
  const pct = (value / max) * 100;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="oklch(0.24 0.008 270 / 0.5)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="oklch(0.65 0.15 270)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-lg font-bold text-foreground leading-none">
          {value % 1 === 0 ? value : value.toFixed(1)}
        </span>
        <span className="text-[10px] text-muted">/ {max}</span>
      </div>
    </div>
  );
}

function ConfidenceMeter({ value }: { value: number }) {
  const pct = Math.round(value * 100);
  const color =
    pct >= 70
      ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
      : pct >= 50
        ? "text-amber-400 border-amber-500/20 bg-amber-500/10"
        : "text-red-400 border-red-500/20 bg-red-500/10";
  const barColor =
    pct >= 70 ? "bg-emerald-400" : pct >= 50 ? "bg-amber-400" : "bg-red-400";

  return (
    <div className="flex items-center gap-3">
      <div className="h-1.5 flex-1 rounded-full bg-border/50 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tabular-nums ${color}`}
      >
        {pct}%
      </span>
    </div>
  );
}

function ChannelTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-surface px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-border/60 hover:text-foreground">
      <ChannelIcon name={name} />
      {name}
    </span>
  );
}

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-accent-light">{icon}</span>
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-subtle">
        {label}
      </p>
    </div>
  );
}

function IncomeBadge({ tier }: { tier: string }) {
  const map: Record<string, { label: string; dots: number }> = {
    low: { label: "Low", dots: 1 },
    mid: { label: "Mid", dots: 2 },
    high: { label: "High", dots: 3 },
  };
  const { label, dots } = map[tier] ?? { label: tier, dots: 0 };
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="capitalize">{label}</span>
      <span className="flex gap-0.5">
        {[1, 2, 3].map((d) => (
          <span
            key={d}
            className={`h-1.5 w-1.5 rounded-full ${d <= dots ? "bg-accent-light" : "bg-border/60"}`}
          />
        ))}
      </span>
    </span>
  );
}

/* ─── PDF Generation ─── */

function generatePDF(data: AnalysisData) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 20;

  const colors = {
    accent: [124, 58, 237] as [number, number, number],
    dark: [20, 20, 30] as [number, number, number],
    muted: [120, 120, 140] as [number, number, number],
    light: [200, 200, 210] as [number, number, number],
    bg: [245, 245, 250] as [number, number, number],
    white: [255, 255, 255] as [number, number, number],
  };

  function checkPage(needed: number) {
    if (y + needed > doc.internal.pageSize.getHeight() - 15) {
      doc.addPage();
      y = 20;
    }
  }

  function sectionTitle(text: string) {
    checkPage(14);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...colors.accent);
    doc.text(text.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(...colors.accent);
    doc.setLineWidth(0.5);
    doc.line(margin, y, margin + contentWidth, y);
    y += 7;
  }

  function label(text: string) {
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...colors.muted);
    doc.text(text.toUpperCase(), margin, y);
    y += 4;
  }

  function bodyText(text: string, indent = 0) {
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...colors.dark);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    checkPage(lines.length * 4.5);
    doc.text(lines, margin + indent, y);
    y += lines.length * 4.5;
  }

  // Title
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...colors.dark);
  doc.text("Audience Segment Analysis", margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...colors.muted);
  doc.text(
    `${data.segments.length} target segments identified  •  Generated ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    margin,
    y
  );
  y += 12;

  // Quality Scores
  sectionTitle("Quality Scores");
  const scores = [
    ["Overall Score", data.quality.overall_score],
    ["Business Fit", data.quality.business_fit_score],
    ["Goal Fit", data.quality.goal_fit_score],
    ["Channel Fit", data.quality.channel_fit_score],
    ["Validation Rounds", data.quality.validation_rounds],
  ] as const;

  const colW = contentWidth / scores.length;
  scores.forEach(([name, val], i) => {
    const x = margin + i * colW;
    doc.setFillColor(...colors.bg);
    doc.roundedRect(x, y, colW - 3, 18, 2, 2, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...colors.muted);
    doc.text(name, x + (colW - 3) / 2, y + 6, { align: "center" });
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...colors.accent);
    const display = name === "Validation Rounds" ? String(val) : `${val}/100`;
    doc.text(display, x + (colW - 3) / 2, y + 14, { align: "center" });
  });
  y += 26;

  // Segments
  data.segments.forEach((seg, idx) => {
    checkPage(60);
    sectionTitle(`Segment ${idx + 1}: ${seg.name}`);

    // Demographics row
    const demos = [
      `Gender: ${seg.gender}`,
      `Age: ${seg.age_min}–${seg.age_max}`,
      `Income: ${seg.income_tier}`,
      `Location: ${seg.city}, ${seg.country}`,
      `Language: ${seg.language}`,
    ];
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...colors.dark);
    doc.setFillColor(...colors.bg);
    checkPage(10);
    doc.roundedRect(margin, y - 3, contentWidth, 9, 2, 2, "F");
    doc.text(demos.join("   |   "), margin + 4, y + 2);
    y += 12;

    // Confidence
    label("Confidence");
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...colors.accent);
    doc.text(`${Math.round(seg.confidence * 100)}%`, margin, y);
    y += 7;

    // Problem It Solves
    label("Problem It Solves");
    bodyText(seg.problem_it_solves);
    y += 2;

    // Why Now
    label("Why Now");
    bodyText(seg.why_now);
    y += 2;

    // Interests
    label("Interests");
    seg.interests.forEach((interest) => {
      checkPage(6);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...colors.dark);
      doc.text(`•  ${interest}`, margin + 2, y);
      y += 5;
    });
    y += 2;

    // Channels
    label("Recommended Channels");
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...colors.dark);
    doc.text(seg.channel_platforms.join(",  "), margin, y);
    y += 7;

    // Key Assumptions
    label("Key Assumptions");
    seg.assumptions.forEach((a, i) => {
      checkPage(6);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...colors.dark);
      const lines = doc.splitTextToSize(`${i + 1}.  ${a}`, contentWidth - 4);
      doc.text(lines, margin + 2, y);
      y += lines.length * 4.5;
    });
    y += 6;
  });

  // Notes
  if (data.notes) {
    sectionTitle("Analyst Notes");
    bodyText(data.notes);
  }

  doc.save("audience-segment-analysis.pdf");
}

/* ─── Component ─── */

export default function DemoResults() {
  const router = useRouter();
  const [data, setData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("demo-results");
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        setData(null);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="relative flex min-h-[60vh] items-center justify-center py-28 md:py-36">
        <div className="flex flex-col items-center gap-4">
          <svg className="h-8 w-8 animate-spin text-accent" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-[13px] text-muted">Loading results...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="relative flex min-h-[60vh] items-center justify-center py-28 md:py-36">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[15px] font-semibold text-foreground">No results found</p>
          <p className="text-[13px] text-muted">Please submit your business profile first.</p>
          <button
            onClick={() => router.push("/demo")}
            className="mt-2 inline-flex h-10 items-center rounded-lg bg-accent px-6 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm"
          >
            Go to Demo Form
          </button>
        </div>
      </div>
    );
  }

  const { notes, quality } = data;
  const segments = [...data.segments].sort((a, b) => b.confidence - a.confidence);

  return (
    <div className="relative py-28 md:py-36">
      <div className="orb orb-accent left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/3" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* ─── Header ─── */}
        <div className="mb-14">
          <Link
            href="/demo"
            className="mb-6 inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-foreground"
          >
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to form
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
              <IconTarget className="text-accent-light" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-light">
                Analysis Results
              </p>
              <h1 className="mt-1.5 text-2xl font-bold tracking-tight md:text-3xl">
                Audience Segment Analysis
              </h1>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                <span className="font-semibold text-foreground">{segments.length} target segments</span> identified with tailored channel
                recommendations and confidence scoring.
              </p>
            </div>
          </div>
        </div>

        {/* ─── Quality Scores ─── */}
        <div className="mb-10 grid gap-4 sm:grid-cols-4">
          {[
            {
              label: "Overall Score",
              value: quality.overall_score,
              icon: <IconChart className="text-accent-light" />,
              highlight: true,
            },
            {
              label: "Business Fit",
              value: quality.business_fit_score,
              icon: <IconBriefcase className="text-accent-light" />,
              highlight: false,
            },
            {
              label: "Goal Fit",
              value: quality.goal_fit_score,
              icon: <IconFlag className="text-accent-light" />,
              highlight: false,
            },
            {
              label: "Channel Fit",
              value: quality.channel_fit_score,
              icon: <IconChannel className="text-accent-light" />,
              highlight: false,
            },
          ].map((score) => (
            <div
              key={score.label}
              className={`flex flex-col items-center rounded-xl border p-6 text-center transition-colors ${
                score.highlight
                  ? "border-accent/20 bg-accent/5"
                  : "border-border/30 bg-surface/60"
              }`}
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-surface-light/60">
                {score.icon}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-subtle mb-3">
                {score.label}
              </p>
              <ScoreRing value={score.value} />
            </div>
          ))}
        </div>

        {/* ─── Validation + Stats Row ─── */}
        <div className="mb-10 grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-xl border border-border/30 bg-surface/60 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
              <IconShield className="text-emerald-400" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-subtle">Validation</p>
              <p className="text-[15px] font-semibold text-foreground">
                {quality.validation_rounds} rounds
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/30 bg-surface/60 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
              <IconUsers className="text-accent-light" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-subtle">Segments Found</p>
              <p className="text-[15px] font-semibold text-foreground">
                {segments.length} audiences
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-border/30 bg-surface/60 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
              <IconChannel className="text-blue-400" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-subtle">Channels</p>
              <p className="text-[15px] font-semibold text-foreground">
                {[...new Set(segments.flatMap((s) => s.channel_platforms))].length} platforms
              </p>
            </div>
          </div>
        </div>

        {/* ─── Segments ─── */}
        <div className="space-y-8">
          {segments.map((segment, idx) => (
            <div
              key={segment.name}
              className="overflow-hidden rounded-2xl border border-border/40 bg-surface/30"
            >
              {/* Segment header */}
              <div className="flex items-center justify-between gap-4 border-b border-border/40 bg-surface px-6 py-5 sm:px-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 font-mono text-[14px] font-bold text-accent-light">
                    {idx + 1}
                  </span>
                  <div>
                    <h2 className="text-[17px] font-bold text-foreground">
                      {segment.name}
                    </h2>
                    <div className="mt-1 flex items-center gap-1.5 text-[12px] text-muted">
                      <IconMapPin className="shrink-0" />
                      {segment.city}, {segment.country}
                    </div>
                  </div>
                </div>
                <div className="w-36 shrink-0">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle text-right">
                    Confidence
                  </p>
                  <ConfidenceMeter value={segment.confidence} />
                </div>
              </div>

              <div className="px-6 py-6 sm:px-8">
                {/* Demographics grid */}
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {[
                    { icon: <IconPerson />, label: "Gender", value: segment.gender },
                    { icon: <IconCake />, label: "Age Range", value: `${segment.age_min} – ${segment.age_max}` },
                    { icon: <IconCurrency />, label: "Income", value: <IncomeBadge tier={segment.income_tier} /> },
                    { icon: <IconMapPin />, label: "Location", value: `${segment.city}, ${segment.country}` },
                    { icon: <IconGlobe />, label: "Language", value: segment.language },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-border/30 bg-surface/50 px-4 py-3">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="text-subtle">{item.icon}</span>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-subtle">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-[13px] font-semibold capitalize text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Problem & Why now */}
                <div className="mb-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-border/30 bg-surface/50 px-5 py-4">
                    <SectionLabel icon={<IconLightbulb />} label="Problem It Solves" />
                    <p className="text-[13px] leading-relaxed text-foreground/80">
                      {segment.problem_it_solves}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/30 bg-surface/50 px-5 py-4">
                    <SectionLabel icon={<IconBolt />} label="Why Now" />
                    <p className="text-[13px] leading-relaxed text-foreground/80">
                      {segment.why_now}
                    </p>
                  </div>
                </div>

                {/* Interests */}
                <div className="mb-6 rounded-xl border border-border/30 bg-surface/50 px-5 py-4">
                  <SectionLabel icon={<IconHeart />} label="Interests" />
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {segment.interests.map((interest) => (
                      <li
                        key={interest}
                        className="flex items-start gap-2.5 text-[13px] text-foreground/80"
                      >
                        <IconCheck className="mt-0.5 shrink-0 text-accent-light" />
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Channels */}
                <div className="mb-6 rounded-xl border border-border/30 bg-surface/50 px-5 py-4">
                  <SectionLabel icon={<IconChannel />} label="Recommended Channels" />
                  <div className="flex flex-wrap gap-2">
                    {segment.channel_platforms.map((ch) => (
                      <ChannelTag key={ch} name={ch} />
                    ))}
                  </div>
                </div>

                {/* Assumptions — "Key Assumptions" */}
                <div className="rounded-xl border border-border/30 bg-surface/50 px-5 py-4">
                  <SectionLabel icon={<IconShield />} label="Key Assumptions" />
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {segment.assumptions.map((a, i) => (
                      <div
                        key={a}
                        className="flex items-start gap-3 rounded-lg border border-border/30 bg-surface-light/30 px-4 py-3"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10 font-mono text-[10px] font-bold text-accent-light">
                          {i + 1}
                        </span>
                        <p className="text-[13px] leading-relaxed text-foreground/80">
                          {a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Notes ─── */}
        <div className="mt-10 rounded-2xl border border-border/30 bg-surface/60 px-6 py-5 sm:px-8">
          <SectionLabel icon={<IconNote className="text-accent-light" />} label="Analyst Notes" />
          <p className="text-[13px] leading-relaxed text-foreground/80">{notes}</p>
        </div>

        {/* ─── Actions ─── */}
        <div className="mt-10 flex items-center justify-end">
          <button
            onClick={() => generatePDF(data)}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-6 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light glow-sm"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
