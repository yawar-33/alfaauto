import type { LucideIcon } from "lucide-react";
import { CalendarCheck, CarFront, ShieldCheck, Truck } from "lucide-react";
import { TRUST } from "@/lib/site";

interface TrustItem { icon: LucideIcon; value: string; label: string }

const ITEMS: TrustItem[] = [
  { icon: CalendarCheck, value: TRUST.years, label: "Years Experience" },
  { icon: Truck, value: "24hr", label: "Emergency Towing" },
  { icon: ShieldCheck, value: "Same-Day", label: "Roadworthy (RWC)" },
  { icon: CarFront, value: "All Makes", label: "Cars, SUVs, 4WDs & Vans" },
];

export default function TrustBar() {
  return (
    <section aria-label="Why customers trust us" className="border-b border-steel-200 bg-steel-50">
      <ul className="container-x grid grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, value, label }, i) => (
          <li key={label} className={`flex items-center gap-4 py-6 sm:py-7 ${i % 2 ? "pl-4 sm:pl-6" : "pr-4"} ${i > 0 ? "lg:border-l lg:border-steel-200 lg:pl-8" : ""} ${i < 2 ? "border-b border-steel-200 lg:border-b-0" : ""}`}>
            <Icon aria-hidden strokeWidth={1.6} className="size-9 shrink-0 text-ink-800" />
            <div className="leading-tight">
              <p className="text-xl font-extrabold tracking-tight sm:text-2xl">{value}</p>
              <p className="text-sm text-steel-500">{label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
