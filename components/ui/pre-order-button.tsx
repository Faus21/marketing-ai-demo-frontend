"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type PreOrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export default function PreOrderButton({
  className,
  children,
}: PreOrderButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
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
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setOpen(false);
    // Reset after close animation
    setTimeout(() => {
      setName("");
      setEmail("");
      setAgreed(false);
      setLoading(false);
      setError("");
    }, 200);
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="m-auto max-w-md rounded-2xl border border-border bg-surface-light p-0 text-foreground backdrop:bg-black/60 backdrop:backdrop-blur-sm open:animate-[fade-in_200ms_ease-out]"
      >
        <div className="relative p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-foreground"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 3L13 13M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <>
            {/* Header */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-accent-light"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Reserve Your Spot</h3>
                <p className="mt-2 text-sm text-muted">
                  Join the founding 100. One-time $10 pre-order — full access on April 15, 2026.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="preorder-name"
                    className="mb-1.5 block text-sm font-medium"
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
                    className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preorder-email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    id="preorder-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-border bg-surface checked:border-accent checked:bg-accent"
                  />
                  <span className="text-sm leading-snug text-muted">
                    I agree to the{" "}
                    <Link href="/terms" target="_blank" className="text-accent-light underline underline-offset-2 hover:text-accent">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="text-accent-light underline underline-offset-2 hover:text-accent">
                      Privacy Policy
                    </Link>
                    , and understand this is a pre-order with access granted on launch day.
                  </span>
                </label>

                {error && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-2 text-center text-sm text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!agreed || loading}
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.3)] transition-all hover:bg-accent-light hover:shadow-[0_0_32px_rgba(99,102,241,0.4)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:bg-accent"
                >
                  {loading ? "Redirecting to checkout…" : "Confirm Pre-Order — $10"}
                </button>

                <p className="text-center text-xs text-muted">
                  Secure payment via Stripe &middot; Full refund if we don&apos;t launch &middot; Cancel anytime
                </p>
              </form>
          </>
        </div>
      </dialog>
    </>
  );
}
