"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mounts children only when the slot scrolls near the viewport. Pair with next/dynamic so the
 * widget's JavaScript also downloads only then. For interactive widgets only, never SEO content.
 */
export default function LazyMount({ children, minHeight = 560, rootMargin = "400px" }: { children: ReactNode; minHeight?: number; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setShow(true); return; }
    const io = new IntersectionObserver((e) => { if (e.some((x) => x.isIntersecting)) { setShow(true); io.disconnect(); } }, { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);
  return show ? <>{children}</> : <div ref={ref} style={{ minHeight }} className="card animate-pulse bg-steel-50" aria-busy="true" aria-label="Loading booking form" />;
}
