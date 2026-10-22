import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceCardData } from "@/lib/services";

/** Photo-led card. Without a photo it renders an ink panel with the service icon, so the grid stays even. */
export default function ServiceCard({ title, text, href, icon: Icon, image, imageAlt }: ServiceCardData) {
  return (
    <article className="group card relative flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold-500 hover:shadow-[var(--shadow-lift)]">
      <div className="relative aspect-[16/7] overflow-hidden bg-ink-800">
        {image ? (
          <Image src={image} alt={imageAlt ?? ""} fill placeholder="blur" quality={75}
            sizes="(min-width:1240px) 390px, (min-width:768px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]" />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,var(--color-ink-700),var(--color-ink-900))]">
            <Icon aria-hidden strokeWidth={1.2} className="size-24 text-gold-400/80" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="flex items-center gap-3 text-[1.2rem]">
          <span className="icon-chip size-10"><Icon aria-hidden className="size-5" /></span>
          <Link href={href} className="after:absolute after:inset-0">{title}</Link>
        </h3>
        <p className="text-[0.98rem] leading-relaxed text-steel-600">{text}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-ink-900 transition group-hover:text-gold-600">
          Learn More <ArrowRight aria-hidden className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
