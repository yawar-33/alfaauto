import { CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";
import { BIZ } from "@/lib/site";

/** Sticky bottom bar on phones: the two actions that matter. */
export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink-950/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <a href={`tel:${BIZ.tel}`} className="btn btn-outline-light min-h-12"><Phone aria-hidden className="size-5" />Call Now</a>
      <Link href="/contact#book" className="btn btn-primary min-h-12"><CalendarCheck aria-hidden className="size-5" />Book Service</Link>
    </div>
  );
}
