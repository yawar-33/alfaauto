import { ArrowRight, CircleCheck, Phone } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { BIZ } from "@/lib/site";

interface PageHeroProps { eyebrow: string; title: string; lead: string; image: StaticImageData; imageAlt: string; crumb: string; highlights?: string[] }

/** Hero for inner pages: breadcrumb, H1, lead, CTAs and a photo. */
export default function PageHero({ eyebrow, title, lead, image, imageAlt, crumb, highlights }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      <Image src={image} alt={imageAlt} fill preload fetchPriority="high" sizes="100vw" placeholder="blur" quality={75} className="-z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(7_11_19/0.95)_0%,rgb(7_11_19/0.85)_50%,rgb(7_11_19/0.5)_100%)]" />
      <div className="container-x py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-steel-300">
          <ol className="flex flex-wrap gap-2"><li><Link href="/" className="hover:text-gold-400">Home</Link></li><li aria-hidden>/</li><li aria-current="page" className="text-white">{crumb}</li></ol>
        </nav>
        <p className="eyebrow eyebrow-dark mt-10">{eyebrow}</p>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2.2rem,4.6vw,3.8rem)] text-white">{title}</h1>
        <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-steel-200 md:text-xl">{lead}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#book" className="btn btn-primary text-base">Book a Service<ArrowRight aria-hidden className="size-5" /></Link>
          <a href={`tel:${BIZ.tel}`} className="btn btn-outline-light text-base"><Phone aria-hidden className="size-5" />Call {BIZ.phone}</a>
        </div>
        {highlights && (
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-semibold text-steel-100">
            {highlights.map((h) => <li key={h} className="inline-flex items-center gap-2"><CircleCheck aria-hidden className="size-5 text-gold-400" />{h}</li>)}
          </ul>
        )}
      </div>
    </section>
  );
}
