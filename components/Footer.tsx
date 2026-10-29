import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BIZ, HOURS_SUMMARY, NAV } from "@/lib/site";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const SERVICES = [
  { href: "/roadworthy-certificate", label: "Roadworthy Certificates" },
  { href: "/car-service", label: "Logbook Servicing" },
  { href: "/tyres", label: "Tyres & Wheel Balancing" },
  { href: "/mechanical-repairs", label: "Mechanical Repairs" },
  { href: "/mechanical-repairs#diagnostics", label: "Diagnostics" },
  { href: "/brake-repairs", label: "Brake Repairs" },
  { href: "/pre-purchase-inspection", label: "Pre-Purchase Inspections" },
  { href: "/welding-rust-repairs", label: "Welding & Rust Repairs" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 pb-24 text-[0.95rem] text-steel-300 md:pb-0">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs leading-relaxed">Roadworthy certificates, logbook servicing, tyres and mechanical repairs for all makes and models. Oakleigh South&apos;s local workshop for over 25 years.</p>
          <div className="mt-6"><SocialIcons /></div>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Navigation</h2>
          <ul className="mt-5 grid gap-2.5">{NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-gold-400">{n.label}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Services</h2>
          <ul className="mt-5 grid gap-2.5">{SERVICES.map((s) => <li key={s.label}><Link href={s.href} className="hover:text-gold-400">{s.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h2>
          <address className="mt-5 grid gap-4 not-italic">
            <p className="flex gap-3"><MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-400" />{BIZ.street}, {BIZ.suburb} {BIZ.state} {BIZ.postcode}</p>
            <p className="flex gap-3"><Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-400" /><a href={`tel:${BIZ.tel}`} className="font-bold text-white hover:text-gold-400">{BIZ.phone}</a></p>
            <div className="flex gap-3"><Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-400" />
              <dl className="grid gap-1">{HOURS_SUMMARY.map((h) => <div key={h.label} className="flex gap-2"><dt>{h.label}:</dt><dd className="text-white">{h.value}</dd></div>)}</dl>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BIZ.name}. All rights reserved.</p>
          <p className="flex gap-5"><Link href="/privacy-policy" className="hover:text-gold-400">Privacy Policy</Link><Link href="/terms" className="hover:text-gold-400">Terms &amp; Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
}
