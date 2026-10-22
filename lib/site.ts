// Single source of truth for business details (NAP). Keep identical to the Google Business Profile.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfaauto.com.au").replace(/\/$/, "");

function readGeo(): { lat: number; lng: number } | null {
  const lat = Number.parseFloat(process.env.NEXT_PUBLIC_GEO_LAT ?? "");
  const lng = Number.parseFloat(process.env.NEXT_PUBLIC_GEO_LNG ?? "");
  return Number.isFinite(lat) && Number.isFinite(lng) ? { lat, lng } : null;
}

export const BIZ = {
  name: "Alfa Automotive & Tyre Centre",
  shortName: "Alfa Auto",
  phone: "03 9548 9380",
  tel: "+61395489380",
  street: "24 Coora Rd",
  suburb: "Oakleigh South",
  state: "VIC",
  postcode: "3167",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Alfa+Automotive+%26+Tyre+Centre+24+Coora+Rd+Oakleigh+South+VIC+3167",
  mapsEmbed: "https://www.google.com/maps?q=24+Coora+Rd,+Oakleigh+South+VIC+3167&z=15&output=embed",
  // Set NEXT_PUBLIC_GEO_LAT / NEXT_PUBLIC_GEO_LNG (from Google Maps) to add coordinates to the local schema
  geo: readGeo(),
} as const;

/**
 * Services that are mentioned in page copy and schema only when offered.
 * CONFIRM WITH THE CLIENT BEFORE LAUNCH that they do wheel alignments and air conditioning work.
 */
export const OFFERS_ALIGNMENT = true;
export const OFFERS_AIRCON = true;

export const ADDRESS = `${BIZ.street}, ${BIZ.suburb} ${BIZ.state} ${BIZ.postcode}`;

/** Social profiles. Leave a value empty to hide its icon. */
export const SOCIAL = {
  facebook: "https://www.facebook.com/alfapb10/",
  instagram: "",
  // TODO: paste the Google Business Profile "share" link here
  google: "",
};

/**
 * Trust figures shown on the site. CONFIRM WITH THE CLIENT BEFORE LAUNCH.
 * The rating must match the live Google Business Profile; it is deliberately not put in schema.
 */
export const TRUST = {
  years: "25+",
  carsServiced: "5000+",
  googleRating: "4.9",
};

export const AREAS = [
  "Oakleigh South", "Oakleigh", "Oakleigh East", "Clayton", "Clayton South", "Clarinda", "Huntingdale",
  "Bentleigh East", "Moorabbin", "Heatherton", "Dingley Village", "Chadstone", "Mulgrave", "Notting Hill",
];

/** Opening hours. Day 0 = Sunday. [open, close] in 24h hours, Melbourne time. */
export const HOURS: Record<number, [number, number] | null> = {
  0: null, 1: [9, 17], 2: [9, 17], 3: [9, 17], 4: [9, 17], 5: [9, 17], 6: [9, 13],
};

export const HOURS_SUMMARY = [
  { label: "Monday – Friday", value: "9:00am – 5:00pm" },
  { label: "Saturday", value: "9:00am – 1:00pm" },
  { label: "Sunday", value: "Closed" },
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/roadworthy-certificate", label: "Roadworthy" },
  { href: "/car-service", label: "Car Servicing" },
  { href: "/tyres", label: "Tyres" },
  { href: "/mechanical-repairs", label: "Repairs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
