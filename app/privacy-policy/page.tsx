import type { Metadata } from "next";
import { BIZ } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Alfa Automotive & Tyre Centre collects and uses the details you send through our booking form.", alternates: { canonical: "/privacy-policy" }, robots: { index: true, follow: true } };

// Starter policy. Have the client review it (or use their own) before launch.
export default function PrivacyPage() {
  return (
    <article className="section bg-white">
      <div className="container-x max-w-3xl [&_h2]:mt-10 [&_h2]:text-2xl [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-steel-700">
        <h1 className="h-section">Privacy Policy</h1>
        <p>{BIZ.name} respects your privacy. This policy explains what we collect through this website and how we use it.</p>
        <h2>What we collect</h2>
        <p>When you send a booking request we collect the details you enter: name, mobile, email, vehicle, registration, service and message.</p>
        <h2>How we use it</h2>
        <p>We use your details only to contact you about your booking and your vehicle. We do not sell or share your information with third parties for marketing.</p>
        <h2>Contact</h2>
        <p>To access or correct your information, call {BIZ.phone} or visit us at {BIZ.street}, {BIZ.suburb} {BIZ.state} {BIZ.postcode}.</p>
      </div>
    </article>
  );
}
