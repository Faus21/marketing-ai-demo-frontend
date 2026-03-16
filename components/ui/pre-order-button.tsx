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
        className="m-auto w-full max-w-sm rounded-xl border border-border/40 bg-surface-light p-0 text-foreground backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-[fade-in-scale_150ms_ease-out]"
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

          <div>
            <h3 className="text-[15px] font-semibold">Reserve your spot</h3>
            <p className="mt-1 text-[13px] text-muted">
              One-time $10 pre-order. Full access April 15, 2026.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
              {loading ? "Redirecting..." : "Confirm — $10"}
            </button>

            <p className="text-center text-[11px] text-subtle">
              Secure payment via Stripe &middot; Cancel anytime
            </p>
          </form>
        </div>
      </dialog>
    </>
  );
}
