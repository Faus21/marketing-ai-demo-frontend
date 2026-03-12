import { NextResponse } from "next/server";
import Stripe from "stripe";

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

  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    metadata: { name },
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "MarketFit AI — Founding Member Pre-Order",
            description:
              "One-time $10 pre-order. Full platform access on launch day (April 15, 2026).",
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
