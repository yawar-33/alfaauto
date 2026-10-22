import { ArrowRight, CircleCheck, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BIZ, TRUST } from "@/lib/site";
import { photos } from "@/lib/photos";

const POINTS = [`${TRUST.years} Years Experience`, "All Makes & Models", "Same-Day RWC", "24hr Emergency Towing"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      <Image src={photos.hero} alt="Alfa Auto mechanic inspecting brakes on a car on a hoist, Oakleigh South" fill preload fetchPriority="high"
        sizes="100vw" placeholder="blur" quality={80} className="-z-20 object-cover object-[75%_35%]" />
      {/* One overlay for legibility: solid on the text side, opening up toward the photo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(7_11_19/0.96)_0%,rgb(7_11_19/0.88)_45%,rgb(7_11_19/0.45)_100%)]" />

      <div className="container-x grid min-h-[min(78vh,720px)] content-center gap-8 py-20 md:py-24">
        <p className="eyebrow eyebrow-dark"><MapPin aria-hidden className="size-4" />Oakleigh South • Melbourne</p>
        <h1 className="h-display max-w-[15ch] text-white">
          Roadworthy Certificates, Car Servicing &amp; Tyres in <span className="text-gold-400">Oakleigh South</span>
        </h1>
        <p className="max-w-[38rem] text-lg leading-relaxed text-steel-200 md:text-xl">
          Qualified mechanics, expert workmanship and honest advice. We service all makes and models with over 25 years of experience in the automotive industry.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact#book" className="btn btn-primary text-base">Book a Service<ArrowRight aria-hidden className="size-5" /></Link>
          <a href={`tel:${BIZ.tel}`} className="btn btn-outline-light text-base"><Phone aria-hidden className="size-5" />Call {BIZ.phone}</a>
        </div>
        <ul className="grid max-w-3xl grid-cols-2 gap-x-6 gap-y-3 pt-2 text-[0.95rem] font-semibold text-steel-100 sm:flex sm:flex-wrap">
          {POINTS.map((p) => (
            <li key={p} className="inline-flex items-center gap-2"><CircleCheck aria-hidden className="size-5 shrink-0 text-gold-400" />{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
