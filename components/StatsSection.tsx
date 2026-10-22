import type { LucideIcon } from "lucide-react";
import { Award, CarFront, Truck, Wrench } from "lucide-react";
import { TRUST } from "@/lib/site";

interface Stat { icon: LucideIcon; value: string; label: string }

const STATS: Stat[] = [
  { icon: Award, value: TRUST.years, label: "Years Experience" },
  { icon: CarFront, value: TRUST.carsServiced, label: "Cars Serviced" },
  { icon: Truck, value: "24hr", label: "Emergency Towing" },
  { icon: Wrench, value: "All Makes", label: "& Models" },
];

export default function StatsSection() {
  return (
    <ul className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
      {STATS.map(({ icon: Icon, value, label }, i) => (
        <li key={label} className={`flex items-center gap-4 py-8 ${i % 2 ? "pl-5" : "pr-5"} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""}`}>
          <Icon aria-hidden strokeWidth={1.5} className="hidden size-10 shrink-0 text-gold-400 sm:block" />
          <div className="leading-none">
            <p className="text-[clamp(1.8rem,3.4vw,2.6rem)] font-black tracking-tight tabular-nums">{value}</p>
            <p className="mt-2 text-sm text-steel-300">{label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
