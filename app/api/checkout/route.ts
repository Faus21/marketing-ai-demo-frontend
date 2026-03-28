import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";
import { apiRoutes } from "@/lib/routes";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }

  // Register user in the database
  const regRes = await fetch(apiRoutes.users, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  if (!regRes.ok) {
    const body = await regRes.json().catch(() => ({}));
    return NextResponse.json(
      { error: body.error ?? "Registration failed" },
      { status: regRes.status },
    );
  }

  const user: { id: number; name: string; email: string } = await regRes.json();

  const cookieStore = await cookies();
  cookieStore.set("user_id", String(user.id), {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    metadata: { name, user_id: String(user.id) },
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "MarketFit AI — Founding Member Pre-Order",
            description:
              "One-time $10 pre-order. 3 months at 50% off + full platform access on launch day (April 15, 2026).",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL ?? new URL(request.url).origin}?checkout=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL ?? new URL(request.url).origin}?checkout=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
