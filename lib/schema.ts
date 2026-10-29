import { AREAS, BIZ, OFFERS_AIRCON, SITE_URL, SOCIAL } from "./site";
import type { Faq, ServicePage } from "./services";

const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "TireShop"],
    "@id": BUSINESS_ID,
    name: BIZ.name,
    alternateName: BIZ.shortName,
    url: SITE_URL,
    telephone: BIZ.tel,
    hasMap: BIZ.mapsUrl,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$",
    description:
      "Licensed roadworthy (RWC) testing, logbook servicing, new tyres and mechanical repairs for all makes and models in Oakleigh South, Melbourne. VACC member with 25 years' experience.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BIZ.street,
      addressLocality: BIZ.suburb,
      addressRegion: BIZ.state,
      postalCode: BIZ.postcode,
      addressCountry: "AU",
    },
    ...(BIZ.geo ? { geo: { "@type": "GeoCoordinates", latitude: BIZ.geo.lat, longitude: BIZ.geo.lng } } : {}),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
    areaServed: AREAS.map((a) => ({ "@type": "Place", name: `${a} VIC` })),
    memberOf: { "@type": "Organization", name: "Victorian Automotive Chamber of Commerce (VACC)" },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.google].filter(Boolean),
    knowsAbout: [
      "Roadworthy certificates", "Logbook servicing", "Tyres",
      "Wheel balancing",
      ...(OFFERS_AIRCON ? ["Air conditioning"] : []),
      "Brake repairs", "Vehicle diagnostics", "Pre-purchase inspections", "Welding and rust repairs",
    ],
  };
}

export function serviceSchema(s: ServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.metaDescription,
    url: `${SITE_URL}/${s.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS.slice(0, 8).map((a) => ({ "@type": "Place", name: `${a} VIC` })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? SITE_URL : `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
