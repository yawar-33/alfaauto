import type { Metadata } from "next";
import { BIZ } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Website and online booking terms for Alfa Automotive & Tyre Centre, Oakleigh South. Bookings are confirmed by phone and all repairs are quoted first.", alternates: { canonical: "/terms" }, openGraph: { url: "/terms" } };

// Starter terms. Have the client review them before launch.
export default function TermsPage() {
  return (
    <article className="section bg-white">
      <div className="container-x max-w-3xl [&_h2]:mt-10 [&_h2]:text-2xl [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-steel-700">
        <h1 className="h-section">Terms &amp; Conditions</h1>
        <p>Information on this website is general in nature. Prices and availability are confirmed by {BIZ.name} when we contact you about your booking.</p>
        <h2>Bookings</h2>
        <p>A booking request is not confirmed until we call or message you with a time. All repair work is quoted and approved by you before it starts.</p>
        <h2>Contact</h2>
        <p>Questions? Call {BIZ.phone}.</p>
      </div>
    </article>
  );
}
