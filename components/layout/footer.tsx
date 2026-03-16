import Link from "next/link";

type FooterLink = { label: string; href: string };

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-accent text-[9px] font-bold text-white">
                M
              </span>
              MarketFit AI
            </Link>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-muted">
              AI-powered competitor video analysis and growth playbook generation for founders and marketers.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-[11px] font-medium uppercase tracking-widest text-subtle">
                {category}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/30 pt-6">
          <p className="text-[12px] text-subtle">
            &copy; {new Date().getFullYear()} MarketFit AI
          </p>
        </div>
      </div>
    </footer>
  );
}
