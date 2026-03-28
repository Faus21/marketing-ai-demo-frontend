import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 },
    );
  }

  // TODO: store in database / email service
  // For now, just acknowledge the signup
  return NextResponse.json({ success: true });
}
