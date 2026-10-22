import { MoonStar, Truck } from "lucide-react";
import { BIZ } from "@/lib/site";

export default function AnnouncementBar() {
  return (
    <div className="bg-ink-950 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-steel-200">
      <div className="container-x flex min-h-9 items-center justify-center gap-x-6 gap-y-1 py-1.5 sm:justify-between">
        <p className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-2"><Truck aria-hidden className="size-4 text-gold-400" />24-hour emergency towing</span>
          <span aria-hidden className="hidden text-gold-500 sm:inline">•</span>
          <span className="inline-flex items-center gap-2"><MoonStar aria-hidden className="size-4 text-gold-400" />Night drop-off available</span>
        </p>
        <a href={`tel:${BIZ.tel}`} className="hidden normal-case tracking-normal text-steel-300 hover:text-gold-400 sm:inline">
          {BIZ.street}, {BIZ.suburb} · {BIZ.phone}
        </a>
      </div>
    </div>
  );
}
