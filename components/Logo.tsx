import Link from "next/link";

/** Wordmark. Swap for an SVG of the final logo when the client supplies one. */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-ink-900" : "text-white";
  const sub = tone === "dark" ? "text-steel-600" : "text-steel-300";
  return (
    <Link href="/" aria-label="Alfa Automotive & Tyre Centre home" className="group inline-flex flex-col leading-none">
      <span className={`text-[1.65rem] font-black italic tracking-tight whitespace-nowrap ${main}`}>
        ALFA <span className="text-gold-500">AUTO</span>
      </span>
      <span className={`mt-1 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] ${sub}`}>Automotive &amp; Tyre Centre</span>
    </Link>
  );
}
