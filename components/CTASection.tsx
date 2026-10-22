import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import { BIZ } from "@/lib/site";

export default function CTASection({ title = "Need Your Car Checked?", text = "Book a service or call us today. We're here to keep you safely on the road." }: { title?: string; text?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="lazy-section relative isolate overflow-hidden bg-ink-950 text-white">
      <Image src={photos.cardTyres} alt="" aria-hidden fill sizes="100vw" quality={60} placeholder="blur" className="-z-20 object-cover opacity-35" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink-950/60" />
      <div className="container-x flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="reveal">
          <p className="eyebrow eyebrow-dark">Get back on the road</p>
          <h2 id="cta-heading" className="h-section mt-3">{title}</h2>
          <p className="mt-3 max-w-xl text-lg text-steel-200">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/contact#book" className="btn btn-primary text-base">Book a Service<ArrowRight aria-hidden className="size-5" /></Link>
          <a href={`tel:${BIZ.tel}`} className="btn btn-outline-light text-base"><Phone aria-hidden className="size-5" />{BIZ.phone}</a>
        </div>
      </div>
    </section>
  );
}
