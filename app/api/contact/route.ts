import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  // TODO: send email or save to DB
  return NextResponse.json({ ok: true });
}
