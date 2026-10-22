import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { AREAS, BIZ, HOURS_SUMMARY } from "@/lib/site";
import OpenStatus from "./OpenStatus";

const FEATURED_AREAS = ["Oakleigh South", "Oakleigh", "Clayton", "Huntingdale", "Moorabbin", "Bentleigh East", "Clarinda", "Chadstone"];

export default function LocationSection() {
  return (
    <section id="location" aria-labelledby="loc-heading" className="lazy-section section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.35fr_0.8fr] lg:gap-12">
        <div className="reveal">
          <p className="eyebrow">Our location</p>
          <h2 id="loc-heading" className="h-section mt-3">Your Local Mechanic in Oakleigh South</h2>
          <address className="mt-8 grid gap-5 not-italic">
            <p className="flex gap-3"><MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-600" /><span><b className="block">{BIZ.name}</b>{BIZ.street}, {BIZ.suburb} {BIZ.state} {BIZ.postcode}</span></p>
            <p className="flex gap-3"><Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-600" /><a href={`tel:${BIZ.tel}`} className="text-lg font-extrabold tabular-nums hover:text-gold-600">{BIZ.phone}</a></p>
            <div className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-600" />
              <div className="w-full">
                <b>Opening hours</b>
                <dl className="mt-2 grid gap-1.5 text-[0.98rem]">
                  {HOURS_SUMMARY.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4 border-b border-steel-100 pb-1.5"><dt className="text-steel-600">{h.label}</dt><dd className="font-semibold tabular-nums">{h.value}</dd></div>
                  ))}
                </dl>
                <div className="mt-3"><OpenStatus /></div>
              </div>
            </div>
          </address>
          <a href={BIZ.mapsUrl} target="_blank" rel="noopener" className="btn btn-outline-dark mt-8"><Navigation aria-hidden className="size-5" />Get directions in Google Maps</a>
        </div>

        <div className="reveal relative min-h-[340px] overflow-hidden rounded-[var(--radius-card)] border border-steel-200 bg-steel-100 lg:min-h-full">
          <iframe title={`Map showing ${BIZ.name}, ${BIZ.street}, ${BIZ.suburb}`} src={BIZ.mapsEmbed} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 size-full border-0" />
        </div>

        <div className="reveal">
          <h3 className="text-sm font-bold uppercase tracking-[0.14em]">Suburbs we service</h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-steel-600">Conveniently located in Oakleigh South, we look after drivers from across Melbourne&apos;s south-east, including:</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
            {FEATURED_AREAS.map((a) => (
              <li key={a} className="flex items-center gap-2.5 font-semibold"><span aria-hidden className="size-1.5 rotate-45 bg-gold-500" />{a}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-steel-500">Plus {AREAS.filter((a) => !FEATURED_AREAS.includes(a)).join(", ")} and surrounding suburbs.</p>
        </div>
      </div>
    </section>
  );
}
