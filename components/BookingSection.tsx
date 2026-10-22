import { CalendarCheck, MoonStar, Phone, ShieldCheck } from "lucide-react";
import { BIZ } from "@/lib/site";
import BookingFormLazy from "./BookingFormLazy";

export default function BookingSection({ defaultService, title = "Book Your Car In" }: { defaultService?: string; title?: string }) {
  return (
    <section id="book" aria-labelledby="book-heading" className="lazy-section section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow">Online booking</p>
          <h2 id="book-heading" className="h-section mt-3">{title}</h2>
          <p className="lead mt-5">Send a request and we&apos;ll call you back to lock in a time. Need it sooner? Call the workshop.</p>
          <a href={`tel:${BIZ.tel}`} className="mt-8 inline-flex items-center gap-4 rounded-[var(--radius-card)] bg-ink-900 px-6 py-5 text-white transition hover:bg-ink-700">
            <Phone aria-hidden className="size-6 text-gold-400" />
            <span><span className="block text-sm text-steel-300">Call us now</span><span className="text-2xl font-black tabular-nums">{BIZ.phone}</span></span>
          </a>
          <ul className="mt-10 grid gap-4 text-[0.98rem]">
            <li className="flex gap-3"><CalendarCheck aria-hidden className="size-5 shrink-0 text-gold-600" />Open Monday to Saturday</li>
            <li className="flex gap-3"><MoonStar aria-hidden className="size-5 shrink-0 text-gold-600" />Night drop-off available</li>
            <li className="flex gap-3"><ShieldCheck aria-hidden className="size-5 shrink-0 text-gold-600" />Every repair quoted before we start</li>
          </ul>
        </div>
        <BookingFormLazy defaultService={defaultService} />
      </div>
    </section>
  );
}
