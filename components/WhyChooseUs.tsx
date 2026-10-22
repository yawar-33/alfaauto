import { CircleCheck, Star } from "lucide-react";
import Image from "next/image";
import { photos } from "@/lib/photos";
import { SOCIAL, TRUST } from "@/lib/site";
import StatsSection from "./StatsSection";

const REASONS = [
  "Qualified, experienced mechanics",
  "Modern diagnostic equipment",
  "Competitive & transparent pricing",
  "Honest advice, no upselling",
  "Local Oakleigh South workshop",
];

export default function WhyChooseUs() {
  const rating = (
    <span className="inline-flex items-center gap-3 rounded-[var(--radius-card)] border border-white/15 bg-white/5 px-4 py-3">
      <svg aria-hidden viewBox="0 0 24 24" className="size-7"><path fill="#4285F4" d="M21.4 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.3a4.5 4.5 0 0 1-2 3v2.4h3.2c1.9-1.7 2.9-4.3 2.9-7.1z"/><path fill="#34A853" d="M12 21.7c2.6 0 4.9-.9 6.5-2.4l-3.2-2.4c-.9.6-2 1-3.3 1-2.5 0-4.7-1.7-5.4-4H3.3v2.5A9.7 9.7 0 0 0 12 21.7z"/><path fill="#FBBC05" d="M6.6 13.9a5.8 5.8 0 0 1 0-3.8V7.6H3.3a9.7 9.7 0 0 0 0 8.8z"/><path fill="#EA4335" d="M12 6.1c1.4 0 2.7.5 3.7 1.4l2.8-2.8A9.7 9.7 0 0 0 3.3 7.6l3.3 2.5c.7-2.3 2.9-4 5.4-4z"/></svg>
      <span className="leading-tight">
        <span className="flex items-center gap-1 text-xl font-extrabold">{TRUST.googleRating}<Star aria-hidden className="size-4 fill-gold-400 text-gold-400" /></span>
        <span className="block text-xs text-steel-300">Google Reviews</span>
      </span>
    </span>
  );

  return (
    <section aria-labelledby="why-heading" className="lazy-section on-dark bg-ink-900 text-white">
      <div className="container-x pt-20 md:pt-28">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1fr_1.15fr_0.9fr] lg:items-center lg:gap-10">
          <div className="reveal">
            <p className="eyebrow">Why drivers choose Alfa</p>
            <h2 id="why-heading" className="h-section mt-3">Trusted Local Experts in Oakleigh South</h2>
            <p className="mt-5 text-lg leading-relaxed text-steel-300">
              We&apos;re a local, family-run workshop with a reputation for quality, reliability and exceptional customer service. Our goal is simple: keep you on the road, safely and without the stress.
            </p>
            <div className="mt-7">
              {SOCIAL.google ? <a href={SOCIAL.google} target="_blank" rel="noopener" className="transition hover:opacity-90">{rating}</a> : rating}
            </div>
          </div>
          <div className="reveal relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] lg:aspect-[4/3]">
            <Image src={photos.workshopTeam} alt="Cars on hoists inside the Alfa Auto mechanical workshop in Oakleigh South" fill placeholder="blur" quality={75}
              sizes="(min-width:1024px) 440px, 100vw" className="object-cover" />
          </div>
          <ul className="reveal grid gap-4">
            {REASONS.map((r) => (
              <li key={r} className="flex items-start gap-3 text-[1.02rem] font-semibold"><CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-400" />{r}</li>
            ))}
          </ul>
        </div>
        <StatsSection />
      </div>
    </section>
  );
}
