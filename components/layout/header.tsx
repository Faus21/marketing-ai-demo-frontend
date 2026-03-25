"use client";

import Link from "next/link";
import { useState } from "react";
import PreOrderButton from "@/components/ui/pre-order-button";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-foreground"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[10px] font-bold text-white">
            M
          </span>
          <span className="hidden sm:inline">MarketFit AI</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <PreOrderButton className="rounded-lg bg-accent/90 px-3.5 py-1.5 text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent">
            Get Early Access
          </PreOrderButton>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {mobileOpen ? (
              <path
                d="M3 3L13 13M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M1 4H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M1 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/30 bg-background px-6 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[13px] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <PreOrderButton className="mt-1 rounded-lg bg-accent/90 px-3.5 py-2 text-center text-[13px] font-medium text-white">
              Get Early Access
            </PreOrderButton>
          </nav>
        </div>
      )}
    </header>
  );
}
