import { SOCIAL } from "@/lib/site";

// Brand marks are drawn inline (Lucide no longer ships brand logos).
const ICONS = {
  facebook: { label: "Facebook", path: "M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v1.9H8V12h2.6v9.5H14V12h2.7l.4-3.5z" },
  instagram: { label: "Instagram", path: "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17 6a1.1 1.1 0 1 0 0 2.2A1.1 1.1 0 0 0 17 6zM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1C3.7 15 3.6 14.7 3.6 12s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1C8.9 3.6 9.3 3.6 12 3.6z" },
  google: { label: "Google Business Profile", path: "M21.4 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.3a4.5 4.5 0 0 1-2 3v2.4h3.2c1.9-1.7 2.9-4.3 2.9-7.1zM12 21.7c2.6 0 4.9-.9 6.5-2.4l-3.2-2.4c-.9.6-2 1-3.3 1-2.5 0-4.7-1.7-5.4-4H3.3v2.5A9.7 9.7 0 0 0 12 21.7zM6.6 13.9a5.8 5.8 0 0 1 0-3.8V7.6H3.3a9.7 9.7 0 0 0 0 8.8zM12 6.1c1.4 0 2.7.5 3.7 1.4l2.8-2.8A9.7 9.7 0 0 0 3.3 7.6l3.3 2.5c.7-2.3 2.9-4 5.4-4z" },
} as const;

export default function SocialIcons() {
  return (
    <ul className="flex gap-2">
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).filter((k) => SOCIAL[k]).map((k) => (
        <li key={k}>
          <a href={SOCIAL[k]} target="_blank" rel="noopener" aria-label={ICONS[k].label}
            className="inline-flex size-11 items-center justify-center rounded-[var(--radius-btn)] border border-white/15 text-steel-300 transition hover:border-gold-400 hover:text-gold-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d={ICONS[k].path} /></svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
