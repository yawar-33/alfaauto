import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/services";

/** Native <details> accordion: works without JS and every answer is in the HTML for Google. */
export default function FaqSection({ items, title = "Common Questions", eyebrow = "FAQ" }: { items: Faq[]; title?: string; eyebrow?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="lazy-section section bg-steel-50">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="faq-heading" className="h-section mt-3">{title}</h2>
        </div>
        <div className="divide-y divide-steel-200 border-y border-steel-200">
          {items.map((f, i) => (
            <details key={f.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-bold transition hover:text-gold-600">
                {f.q}<ChevronDown aria-hidden className="size-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="max-w-[65ch] pb-6 leading-relaxed text-steel-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
