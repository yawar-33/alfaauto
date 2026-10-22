import { CircleCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BIZ } from "@/lib/site";

export const metadata: Metadata = { title: "Booking Request Received", description: "Your booking request has reached Alfa Automotive & Tyre Centre. We will call you during business hours to confirm a time.", robots: { index: false, follow: true } };

export default function ThankYouPage() {
  return (
    <section className="section bg-steel-50">
      <div className="container-x max-w-2xl text-center">
        <CircleCheck aria-hidden className="mx-auto size-14 text-gold-600" />
        <h1 className="h-section mt-6">Thanks, We&apos;ve Got Your Request</h1>
        <p className="lead mt-4">We&apos;ll call you during business hours to confirm a time. Need us sooner? Call {BIZ.phone}.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`tel:${BIZ.tel}`} className="btn btn-dark">Call {BIZ.phone}</a>
          <Link href="/" className="btn btn-outline-dark">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
