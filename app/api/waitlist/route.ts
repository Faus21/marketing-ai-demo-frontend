import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { apiRoutes } from "@/lib/routes";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }

  const res = await fetch(apiRoutes.users, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    return NextResponse.json(
      { error: body.error ?? "Registration failed" },
      { status: res.status },
    );
  }

  const data: { id: number; name: string; email: string } = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("user_id", String(data.id), {
    path: "/",
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  return NextResponse.json({ success: true, user: data });
}
