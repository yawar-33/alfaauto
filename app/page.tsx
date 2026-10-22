import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import LocationSection from "@/components/LocationSection";
import RoadworthySection from "@/components/RoadworthySection";
import ServicesGrid from "@/components/ServicesGrid";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { faqSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "Roadworthy Certificates & Car Servicing Oakleigh South | Alfa Auto" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <RoadworthySection />
      <WhyChooseUs />
      <LocationSection />
      <BookingSection />
      <FaqSection items={HOME_FAQS} title="Roadworthy & Servicing Questions" />
      <CTASection />
    </>
  );
}
