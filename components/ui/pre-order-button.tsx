"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type PreOrderButtonProps = {
  className?: string;
  children: React.ReactNode;
  defaultTier?: "paid" | "free";
};

export default function PreOrderButton({
  className,
  children,
  defaultTier,
}: PreOrderButtonProps) {
  const [open, setOpen] = useState(false);
  const [tier, setTier] = useState<"paid" | "free" | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    function handleClose() {
      setOpen(false);
    }

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      setOpen(false);
    }
  }

  function handleOpen() {
    setTier(defaultTier ?? null);
    setOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (tier === "paid") {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error ?? "Something went wrong. Please try again.");
          return;
        }

        window.location.href = data.url;
      } else {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error ?? "Something went wrong. Please try again.");
          return;
        }

        setSuccess(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
    setTimeout(() => {
      setName("");
      setEmail("");
      setAgreed(false);
      setLoading(false);
      setError("");
      setSuccess(false);
      setTier(defaultTier ?? null);
    }, 200);
  }

  return (
    <>
      <button onClick={handleOpen} className={className}>
        {children}
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="m-auto w-full max-w-md rounded-xl border border-border/40 bg-surface-light p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-[fade-in-scale_150ms_ease-out]"
      >
        <div className="relative p-7">
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:text-foreground"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 3L13 13M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {success ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-[15px] font-semibold">You&apos;re on the list!</h3>
              <p className="mt-2 text-[13px] text-muted">
                We&apos;ll notify you at launch with your exclusive 10% discount code.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 h-9 rounded-lg border border-border/50 px-5 text-[13px] font-medium text-foreground transition-colors hover:border-accent/50"
              >
                Close
              </button>
            </div>
          ) : !tier ? (
            /* ─── Tier selection ─── */
            <div>
              <h3 className="text-[15px] font-semibold">Choose your early access plan</h3>
              <p className="mt-1 text-[13px] text-muted">
                Two ways to get in before launch day (April 15, 2026).
              </p>

              <div className="mt-6 space-y-3">
                {/* Paid tier */}
                <button
                  onClick={() => setTier("paid")}
                  className="group w-full rounded-lg border border-accent/40 bg-accent/5 p-4 text-left transition-all hover:border-accent/70 hover:bg-accent/10"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-semibold text-foreground">Founding Member</span>
                        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent-light">
                          Best value
                        </span>
                      </div>
                      <p className="mt-1.5 text-[12px] leading-snug text-muted">
                        Pay $10 now and get <span className="text-foreground font-medium">3 months at 50% off</span> when we launch. Priority access + founding member perks.
                      </p>
                    </div>
                    <span className="shrink-0 text-xl font-semibold text-foreground">$10</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      50% off for 3 months
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Priority access
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Full refund anytime
                    </span>
                  </div>
                </button>

                {/* Free tier */}
                <button
                  onClick={() => setTier("free")}
                  className="group w-full rounded-lg border border-border/40 bg-surface p-4 text-left transition-all hover:border-border/70 hover:bg-surface-light"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[14px] font-semibold text-foreground">Waitlist</span>
                      <p className="mt-1.5 text-[12px] leading-snug text-muted">
                        Join for free with just your name and email. Get <span className="text-foreground font-medium">10% off</span> your subscription when we launch.
                      </p>
                    </div>
                    <span className="shrink-0 text-xl font-semibold text-foreground">Free</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      10% off at launch
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      No payment required
                    </span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            /* ─── Form ─── */
            <div>
              <button
                onClick={() => setTier(defaultTier ? null : null)}
                className="mb-4 flex items-center gap-1.5 text-[12px] text-muted transition-colors hover:text-foreground"
              >
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
              </button>

              <h3 className="text-[15px] font-semibold">
                {tier === "paid" ? "Reserve your spot" : "Join the waitlist"}
              </h3>
              <p className="mt-1 text-[13px] text-muted">
                {tier === "paid"
                  ? "One-time $10 pre-order. Get 3 months at 50% off when we launch April 15, 2026."
                  : "Free signup — we'll send you a 10% discount code on launch day (April 15, 2026)."}
              </p>

              {tier === "paid" && (
                <div className="mt-4 rounded-lg bg-accent/5 border border-accent/20 px-3 py-2.5">
                  <p className="text-[12px] font-medium text-accent-light">What you get:</p>
                  <ul className="mt-1.5 space-y-1 text-[11px] text-muted">
                    <li className="flex items-center gap-1.5">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="shrink-0 text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      3 months at 50% off after launch
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="shrink-0 text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Priority access on day one
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="shrink-0 text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Founding member badge &amp; support
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="shrink-0 text-accent-light"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      Full refund if you cancel before launch
                    </li>
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="preorder-name"
                    className="mb-1 block text-[12px] font-medium text-muted"
                  >
                    Full name
                  </label>
                  <input
                    id="preorder-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="h-9 w-full rounded-lg border border-border/50 bg-surface px-3 text-[13px] text-foreground placeholder:text-subtle outline-none transition-colors focus:border-accent/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preorder-email"
                    className="mb-1 block text-[12px] font-medium text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="preorder-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="h-9 w-full rounded-lg border border-border/50 bg-surface px-3 text-[13px] text-foreground placeholder:text-subtle outline-none transition-colors focus:border-accent/60"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-2.5">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 cursor-pointer appearance-none rounded border border-border/50 bg-surface checked:border-accent checked:bg-accent"
                  />
                  <span className="text-[12px] leading-snug text-muted">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      className="text-accent-light underline underline-offset-2 hover:text-accent"
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="text-accent-light underline underline-offset-2 hover:text-accent"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                {error && (
                  <p className="rounded-lg bg-red-500/10 px-3 py-2 text-center text-[12px] text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!agreed || loading}
                  className="flex h-9 w-full items-center justify-center rounded-lg bg-accent text-[13px] font-medium text-white transition-all duration-200 hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-accent"
                >
                  {loading
                    ? tier === "paid" ? "Redirecting..." : "Joining..."
                    : tier === "paid" ? "Confirm — $10" : "Join Waitlist — Free"}
                </button>

                <p className="text-center text-[11px] text-subtle">
                  {tier === "paid"
                    ? "Secure payment via Stripe \u00b7 Cancel anytime before launch"
                    : "No payment required \u00b7 Unsubscribe anytime"}
                </p>
              </form>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
