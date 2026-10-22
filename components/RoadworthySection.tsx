import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import { RWC_CHECKS } from "@/lib/services";

export default function RoadworthySection() {
  return (
    <section aria-labelledby="rwc-heading" className="lazy-section grid bg-steel-50 lg:grid-cols-2">
      <div className="relative min-h-[320px] lg:min-h-[640px]">
        <Image src={photos.rwcInspection} alt="Mechanic inspecting a wheel and tyre during a roadworthy inspection" fill placeholder="blur" quality={75}
          sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-[40%_center]" />
        <div className="absolute bottom-0 left-0 bg-gold-500 px-6 py-4 text-ink-900">
          <p className="text-3xl font-black leading-none">Same day</p>
          <p className="text-sm font-semibold">certificate when your car passes</p>
        </div>
      </div>
      <div className="reveal flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow">Roadworthy certificates</p>
          <h2 id="rwc-heading" className="h-section mt-3">Roadworthy Certificates You Can Rely On</h2>
          <p className="lead mt-5">
            Every inspection follows Victoria&apos;s roadworthiness requirements, checked thoroughly and explained plainly. If something fails, we show you, quote the fix and repair it here, with no hidden costs.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {RWC_CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-3 font-semibold"><CircleCheck aria-hidden className="size-5 shrink-0 text-gold-600" />{c}</li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact#book" className="btn btn-primary">Book Your RWC<ArrowRight aria-hidden className="size-5" /></Link>
            <Link href="/roadworthy-certificate" className="btn btn-outline-dark">How RWCs work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
