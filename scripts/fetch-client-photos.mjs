// Downloads the full-resolution originals of the client's photos from the old WordPress site
// into assets/images (run before the old site is switched off): `npm run photos`
import { writeFile } from "node:fs/promises";

const BASE = "https://alfaauto.com.au/wp-content/uploads";
const PHOTOS = {
  "client-storefront.jpg": `${BASE}/2025/10/Alfa.jpg`,
  "client-lounge.jpg": `${BASE}/2025/10/IMG_0325-768x1024.jpeg`,
};

for (const [name, url] of Object.entries(PHOTOS)) {
  const res = await fetch(url);
  if (!res.ok) { console.error(`✗ ${name}: ${res.status} ${url}`); continue; }
  await writeFile(new URL(`../assets/images/${name}`, import.meta.url), Buffer.from(await res.arrayBuffer()));
  console.log(`✓ ${name}`);
}
