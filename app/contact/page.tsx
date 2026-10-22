import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import JsonLd from "@/components/JsonLd";
import LocationSection from "@/components/LocationSection";
import PageHero from "@/components/PageHero";
import { photos } from "@/lib/photos";
import { breadcrumbSchema } from "@/lib/schema";
import { BIZ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Mechanic in Oakleigh South",
  description: `Book a roadworthy, car service, tyres or repairs at ${BIZ.shortName}, ${BIZ.street}, ${BIZ.suburb}. Call ${BIZ.phone}. Open Mon–Fri 9–5, Sat 9–1.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero eyebrow="Contact & bookings" title="Book a Service in Oakleigh South" crumb="Contact" image={photos.workshopTeam} imageAlt="Cars on hoists in the Alfa Auto service bays, Oakleigh South"
        lead="Send a booking request and we'll call you back to confirm a time, or call the workshop now." />
      <BookingSection title="Send a Booking Request" />
      <LocationSection />
    </>
  );
}
