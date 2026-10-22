import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Booking = {
  name?: string; phone?: string; email?: string; vehicle?: string; rego?: string;
  service?: string; date?: string; message?: string; company?: string;
};

// BookingForm appends "Please call 03 9548 9380 and we'll book you in." to this message.
const UNAVAILABLE = "Online booking is temporarily unavailable.";

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Booking;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const b = {
    name: clean(body.name, 80), phone: clean(body.phone, 20), email: clean(body.email, 120), vehicle: clean(body.vehicle, 80), rego: clean(body.rego, 10),
    service: clean(body.service, 60), date: clean(body.date, 10), message: clean(body.message, 1000),
  };
  if (!b.name || !/^[0-9 +()-]{8,20}$/.test(b.phone)) {
    return NextResponse.json({ error: "Please enter your name and a valid phone number." }, { status: 422 });
  }
  if (b.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) {
    return NextResponse.json({ error: "Please check your email address." }, { status: 422 });
  }

  const { RESEND_API_KEY, BOOKING_TO_EMAIL, BOOKING_FROM_EMAIL } = process.env;
  const missing = Object.entries({ RESEND_API_KEY, BOOKING_TO_EMAIL, BOOKING_FROM_EMAIL }).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) console.error(`[booking] missing env var ${missing.join(", ")}. Set it in Netlify > Site configuration > Environment variables.`);
  if (!RESEND_API_KEY || !BOOKING_TO_EMAIL) {
    console.error("[booking] email not configured; booking received:", b);
    // In development, accept so the flow can be tested. In production, fail loudly so no booking is silently lost.
    return process.env.NODE_ENV === "production"
      ? NextResponse.json({ error: UNAVAILABLE }, { status: 503 })
      : NextResponse.json({ ok: true, delivered: false });
  }

  const rows = Object.entries(b).map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${esc(v || "-")}</td></tr>`).join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: BOOKING_FROM_EMAIL || "Alfa Website <onboarding@resend.dev>",
      to: [BOOKING_TO_EMAIL],
      subject: `New booking: ${b.service} – ${b.name} (${b.phone})`,
      ...(b.email ? { reply_to: b.email } : {}),
      html: `<h2>New website booking</h2><table>${rows}</table>`,
    }),
  });
  if (!res.ok) {
    console.error("[booking] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "We couldn't send your request." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
