"use client";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BIZ, NAV } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-[0_6px_24px_-12px_rgb(12_19_32/0.35)]" : "border-b border-steel-200"}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-bold">Skip to content</a>
      <div className="container-x flex h-20 items-center gap-4 xl:gap-6">
        <div className="shrink-0"><Logo /></div>

        <nav aria-label="Main" className="hidden min-w-0 flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
                  className={`relative flex h-10 items-center whitespace-nowrap px-2.5 text-[15px] font-semibold transition hover:text-gold-600 xl:px-3 ${isActive(n.href) ? "text-ink-900 after:absolute after:inset-x-2.5 after:-bottom-5 after:h-[3px] after:bg-gold-500 xl:after:inset-x-3" : "text-steel-700"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0 lg:gap-5">
          <a href={`tel:${BIZ.tel}`} className="hidden shrink-0 items-center gap-2.5 min-[1440px]:flex" aria-label={`Call ${BIZ.phone}`}>
            <span className="icon-chip size-10"><Phone aria-hidden className="size-[18px]" /></span>
            <span className="leading-tight">
              <span className="block whitespace-nowrap text-xs font-semibold text-steel-500">Call the workshop</span>
              <span className="block whitespace-nowrap text-[1.05rem] font-extrabold tabular-nums">{BIZ.phone}</span>
            </span>
          </a>
          <Link href="/contact#book" className="btn btn-primary hidden h-12 min-h-12 shrink-0 whitespace-nowrap px-5 lg:inline-flex">Book a Service</Link>

          <a href={`tel:${BIZ.tel}`} aria-label={`Call ${BIZ.phone}`} className="btn btn-primary size-11 min-h-11 px-0 lg:hidden"><Phone aria-hidden className="size-5" /></a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"} className="inline-flex size-11 items-center justify-center rounded-[var(--radius-btn)] border border-steel-300 lg:hidden">
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-white lg:hidden">
          <ul className="container-x divide-y divide-steel-200 py-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={isActive(n.href) ? "page" : undefined}
                  className={`flex min-h-14 items-center text-xl font-bold ${isActive(n.href) ? "text-gold-600" : "text-ink-900"}`}>{n.label}</Link>
              </li>
            ))}
          </ul>
          <div className="container-x grid gap-3 pb-10 pt-4">
            <a href={`tel:${BIZ.tel}`} className="btn btn-dark w-full"><Phone aria-hidden className="size-5" />Call {BIZ.phone}</a>
            <Link href="/contact#book" className="btn btn-primary w-full">Book a Service</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
