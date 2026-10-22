"use client";
import { useEffect, useState } from "react";
import { HOURS } from "@/lib/site";

const DAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/** Current day + decimal hour in Melbourne, whatever the visitor's timezone. */
function melbourneNow(): { day: number; hour: number } | null {
  try {
    const parts = new Intl.DateTimeFormat("en-AU", { timeZone: "Australia/Melbourne", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
    const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
    return { day: DAYS[get("weekday")], hour: (parseInt(get("hour"), 10) % 24) + parseInt(get("minute"), 10) / 60 };
  } catch { return null; }
}

const fmt = (h: number) => `${((h + 11) % 12) + 1}${h >= 12 ? "pm" : "am"}`;

/** Live "Open now" pill. Renders nothing on the server, so cached HTML never shows a stale status. */
export default function OpenStatus() {
  const [s, setS] = useState<{ open: boolean; text: string } | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = melbourneNow(); if (!now) return;
      const slot = HOURS[now.day];
      const open = !!slot && now.hour >= slot[0] && now.hour < slot[1];
      setS({ open, text: open && slot ? `Open now · closes ${fmt(slot[1])}` : "Closed now · night drop-off available" });
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  if (!s) return null;
  return (
    <p aria-live="polite" className={`inline-flex items-center gap-2 rounded-[var(--radius-card)] px-3 py-1.5 text-sm font-semibold ${s.open ? "bg-emerald-50 text-emerald-800" : "bg-steel-100 text-steel-700"}`}>
      <span aria-hidden className={`size-2 rounded-full ${s.open ? "bg-emerald-500" : "bg-steel-400"}`} />{s.text}
    </p>
  );
}
