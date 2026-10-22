import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wght.css";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import MobileCTA from "@/components/MobileCTA";
import { businessSchema } from "@/lib/schema";
import { BIZ, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Roadworthy Certificates & Car Servicing Oakleigh South | Alfa Auto", template: "%s | Alfa Auto" },
  description: "Alfa Automotive & Tyre Centre provides roadworthy certificates, car servicing, tyres and mechanical repairs in Oakleigh South. 25+ years of experience. Call 03 9548 9380.",
  applicationName: BIZ.name,
  openGraph: { type: "website", siteName: BIZ.name, locale: "en_AU" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "geo.region": "AU-VIC", "geo.placename": BIZ.suburb },
  // verification: { google: "PASTE_SEARCH_CONSOLE_TOKEN" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0c1320" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <JsonLd data={businessSchema()} />
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
