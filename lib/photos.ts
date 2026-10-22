/**
 * Every photo on the site comes from here. To change one, replace the file in /assets/images
 * (keep the name). Static imports give automatic width/height, blur placeholders, AVIF/WebP and
 * lazy loading through next/image.
 *
 * NOTE: the current files were cut from the design mockup at very low resolution (about 200–480px)
 * and upscaled. Replace them with the full-size originals (ideally 1600px+ wide) before launch.
 */
import hero from "@/assets/images/hero.jpg";
import cardRoadworthy from "@/assets/images/card-roadworthy.jpg";
import cardLogbook from "@/assets/images/card-logbook.jpg";
import cardTyres from "@/assets/images/card-tyres.jpg";
import cardBrakes from "@/assets/images/card-brakes.jpg";
import cardDiagnostics from "@/assets/images/card-diagnostics.jpg";
import cardBattery from "@/assets/images/card-battery.jpg";
import rwcInspection from "@/assets/images/rwc-inspection.jpg";
import workshopTeam from "@/assets/images/workshop-team.jpg";
// The client's own photos of the real workshop (from the old website)
import storefront from "@/assets/images/client-storefront.jpg";
import lounge from "@/assets/images/client-lounge.jpg";

export const photos = {
  hero, cardRoadworthy, cardLogbook, cardTyres, cardBrakes, cardDiagnostics, cardBattery,
  rwcInspection, workshopTeam, storefront, lounge,
};
