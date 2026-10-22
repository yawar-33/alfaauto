import { CircleCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import LocationSection from "@/components/LocationSection";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Our Oakleigh South Automotive Workshop",
  description: "Meet Alfa Automotive & Tyre Centre: qualified mechanics with 25+ years of experience servicing and repairing all makes and models in Oakleigh South.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const VALUES = [
  { t: "Quote before we start", d: "You approve the price before any repair begins. No surprises on the invoice." },
  { t: "Straight answers", d: "What must be fixed now, what can wait, and what doesn't need doing at all." },
  { t: "Done when we say", d: "A realistic finish time, and a call the moment your car is ready." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHero eyebrow="About Alfa Auto" title="Your Local Automotive Workshop in Oakleigh South" crumb="About" image={photos.storefront} imageAlt="Alfa Automotive & Tyre Centre, 24 Coora Rd Oakleigh South"
        lead="A team of qualified mechanics with over 25 years of experience across Australia and New Zealand, looking after drivers across Melbourne's south-east." />
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Who we are</p>
            <h2 className="h-section mt-3">Mechanical Repairs Done Properly</h2>
            <p className="lead mt-5">We specialise in roadworthy certificates and roadworthy repairs, logbook and major servicing, transmission work, chassis repairs, welding and rust repairs, and new tyres.</p>
            <ul className="mt-8 grid gap-5">
              {VALUES.map((v) => <li key={v.t} className="flex gap-4"><CircleCheck aria-hidden className="mt-1 size-6 shrink-0 text-gold-600" /><span><b className="block text-lg">{v.t}</b><span className="text-steel-600">{v.d}</span></span></li>)}
            </ul>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
            <Image src={photos.lounge} alt="Customer waiting lounge at Alfa Automotive & Tyre Centre" fill placeholder="blur" sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <LocationSection />
      <CTASection />
    </>
  );
}
