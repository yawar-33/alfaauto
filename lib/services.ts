import type { LucideIcon } from "lucide-react";
import { BatteryCharging, ClipboardCheck, Cpu, Disc3, Gauge, Wrench } from "lucide-react";
import type { StaticImageData } from "next/image";
import { photos } from "./photos";

export type Faq = { q: string; a: string };

/** A card in the home-page services grid. */
export interface ServiceCardData {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
  image?: StaticImageData;
  imageAlt?: string;
}

export const SERVICE_CARDS: ServiceCardData[] = [
  { title: "Roadworthy Certificates", text: "Licensed RWC inspections for selling, re-registering or clearing a defect. Same-day certificate where possible.", href: "/roadworthy-certificate", icon: ClipboardCheck, image: photos.cardRoadworthy, imageAlt: "Mechanic completing a roadworthy inspection checklist beside a car in Oakleigh South" },
  { title: "Logbook & Car Servicing", text: "Manufacturer-scheduled servicing with quality parts and oils. Your logbook stamped and your new-car warranty kept.", href: "/car-service", icon: Gauge, image: photos.cardLogbook, imageAlt: "Engine bay during a logbook car service" },
  { title: "Tyres & Wheel Alignment", text: "New tyres in all major brands, wheel balancing, alignment and puncture repairs, fitted while you wait.", href: "/tyres", icon: Disc3, image: photos.cardTyres, imageAlt: "New tyre and alloy wheel fitted after a wheel alignment" },
  { title: "Brake & Mechanical Repairs", text: "Brakes, steering, suspension, exhaust, engine and transmission work for all makes and models.", href: "/brake-repairs", icon: Wrench, image: photos.cardBrakes, imageAlt: "Brake disc and caliper during a brake repair" },
  { title: "Diagnostics & Electrical", text: "Computer diagnostics for warning lights, drivability problems and electrical faults on modern vehicles.", href: "/mechanical-repairs#diagnostics", icon: Cpu, image: photos.cardDiagnostics, imageAlt: "Diagnostic scan tool connected in an engine bay" },
  { title: "Batteries & Cooling", text: "Battery and alternator replacement, radiator and coolant service, and air conditioning repairs.", href: "/car-service#batteries-cooling", icon: BatteryCharging, image: photos.cardBattery, imageAlt: "Car battery being checked under the bonnet" },
];

export const RWC_CHECKS = [
  "Tyres & Wheels", "Brakes", "Steering & Suspension", "Lights & Indicators",
  "Windscreen & Wipers", "Seats & Seatbelts", "Body & Rust", "Engine & Driveline",
];

export const SERVICE_OPTIONS = [
  "Roadworthy Certificate", "Car Service", "Tyres", "Mechanical Repairs", "Brake Repairs",
  "Diagnostics", "Pre-Purchase Inspection", "Welding & Rust Repairs", "Other",
];

/** Paragraphs may contain inline links written as [label](/path). */
export interface ContentSection { id?: string; heading: string; paragraphs?: string[]; bullets?: string[] }

/** A full service page at /<slug>. */
export interface ServicePage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  image: StaticImageData;
  imageAlt: string;
  highlights: string[];
  sections: ContentSection[];
  faqs: Faq[];
  bookAs: string;
  showChecklist?: boolean;
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "roadworthy-certificate",
    name: "Roadworthy Certificates",
    metaTitle: "Roadworthy Certificates Oakleigh South | RWC Same Day",
    metaDescription: "Licensed roadworthy certificate (RWC) inspections and roadworthy repairs in Oakleigh South. Same-day certificate where possible. Call 03 9548 9380.",
    eyebrow: "Roadworthy certificates · Oakleigh South",
    h1: "Roadworthy Certificates in Oakleigh South",
    lead: "Selling your car, re-registering it or clearing a defect notice? Book a roadworthy inspection and, if it passes, leave with your certificate the same day.",
    image: photos.rwcInspection,
    imageAlt: "Mechanic inspecting a wheel and tyre during a roadworthy inspection",
    highlights: ["Same-day RWC where possible", "Repairs quoted before work starts", "Re-inspection within 7 days"],
    showChecklist: true,
    bookAs: "Roadworthy Certificate",
    sections: [
      { heading: "When you need an RWC in Victoria", bullets: ["Selling a registered vehicle", "Re-registering an unregistered vehicle", "Transferring registration from interstate", "Clearing certain defect notices"] },
      { heading: "How our roadworthy inspection works", bullets: ["Book online or call 03 9548 9380.", "We inspect every item required for a Victorian roadworthy.", "Pass: your certificate is issued on the spot.", "Fail: you get a written list and a quote. Repairs only start once you approve."] },
      { heading: "Roadworthy repairs in the same workshop", paragraphs: ["Most fails come down to tyres, brakes, suspension, lights, windscreen damage or rust. We repair all of these in-house, including welding and rust repairs, so your car is re-checked and certified without a second trip.", "Night drop-off is available if you can't get here during business hours."] },
    ],
    faqs: [
      { q: "How long is a roadworthy certificate valid?", a: "For selling a vehicle or transferring registration, an RWC is valid for 30 days from the date it is issued." },
      { q: "How long does a roadworthy inspection take?", a: "Most passenger car inspections take about an hour. If the car passes, you leave with the certificate the same day." },
      { q: "What happens if my car fails?", a: "You get a written list of what needs fixing and a quote. Have us do the repairs, or take it elsewhere, and bring it back within 7 days for a re-check of the failed items." },
      { q: "Is a roadworthy the same as a pre-purchase inspection?", a: "No. A roadworthy checks the minimum safety standard. A pre-purchase inspection is a broader check of condition, engine health and likely upcoming costs." },
    ],
  },
  {
    slug: "car-service",
    name: "Car Servicing",
    metaTitle: "Logbook & Car Servicing Oakleigh South",
    metaDescription: "Logbook, basic and major car servicing in Oakleigh South that keeps your new-car warranty valid. Transmission, cooling and battery service too. Call 03 9548 9380.",
    eyebrow: "Logbook & car servicing",
    h1: "Logbook & Car Servicing in Oakleigh South",
    lead: "Keep your warranty, your resale history and your car in top shape. We service all makes and models to the manufacturer's schedule and stamp your logbook.",
    image: photos.workshopTeam,
    imageAlt: "Cars on hoists in the Alfa Auto workshop, Oakleigh South",
    highlights: ["Warranty-safe logbook servicing", "All makes and models", "Quote before any extra work"],
    bookAs: "Car Service",
    sections: [
      { heading: "Services we offer", bullets: ["Basic service: oil, filter and safety check", "Logbook service to the manufacturer's schedule", "Major service: plugs, fluids, belts and full inspection", "Transmission and differential service", "Engine service and flush"] },
      { id: "batteries-cooling", heading: "Batteries, cooling & air conditioning", bullets: ["Battery testing and replacement", "Alternator replacement", "Radiator and coolant service", "Air conditioning checks and repairs"] },
      { heading: "Book around your week", paragraphs: ["We work Monday to Saturday so you can plan your service when it suits you. Drop the car off after hours if that's easier, and we'll call you when it's ready.", "If we find anything beyond the service, we call you with a quote first. No surprises on the invoice."] },
    ],
    faqs: [
      { q: "How often should I service my car?", a: "Follow your logbook. Most modern cars need a service every 10,000 to 15,000 km or every 12 months, whichever comes first." },
      { q: "Will servicing with you void my new-car warranty?", a: "No. Under Australian Consumer Law any qualified mechanic can service your car, as long as it follows the logbook schedule with suitable parts and oils. We stamp your logbook every time." },
      { q: "What is the difference between a basic and a logbook service?", a: "A basic service covers oil, filter and safety checks. A logbook service follows the manufacturer's schedule for your kilometres, which can include spark plugs, fluids and belts." },
    ],
  },
  {
    slug: "tyres",
    name: "Tyres & Wheels",
    metaTitle: "Tyres, Wheel Alignment & Puncture Repair Oakleigh South",
    metaDescription: "New tyres in all brands for all makes and models, wheel balancing, alignment and puncture repairs in Oakleigh South. Call 03 9548 9380 for a tyre quote.",
    eyebrow: "Tyres & wheels",
    h1: "Tyres & Wheel Alignment in Oakleigh South",
    lead: "New tyres in all major brands for every make and model, fitted, balanced and aligned in our Oakleigh South workshop. Flat tyre? We repair punctures too.",
    image: photos.cardTyres,
    imageAlt: "New tyre and alloy wheel at Alfa Automotive & Tyre Centre, Oakleigh South",
    highlights: ["All brands and sizes", "Fitted while you wait", "Balancing & puncture repairs"],
    bookAs: "Tyres",
    sections: [
      { heading: "Tyre services", bullets: ["New tyres, all brands and sizes", "Fitting and wheel balancing", "Wheel alignment", "Puncture repairs", "Tyre checks for roadworthy certificates"] },
      { heading: "Signs you need new tyres", bullets: ["Tread at or near the wear indicator bars", "Cracks, bulges or cuts in the sidewall", "Vibration through the steering wheel at speed", "Uneven wear on one edge, often an alignment or suspension sign"] },
      { heading: "How to read your tyre size", paragraphs: ["Your size is printed on the sidewall, for example 205/55 R16 91V: 205 mm wide, sidewall 55% of the width, radial for a 16-inch rim, load index 91 (615 kg) and speed rating V (240 km/h). Call us with it for a quote."] },
    ],
    faqs: [
      { q: "What is the legal minimum tread depth in Australia?", a: "1.5 mm across the tread, where the wear indicators sit. We recommend replacing tyres earlier, around 3 mm, because wet-road grip drops noticeably below that." },
      { q: "Can every puncture be repaired?", a: "Punctures in the main tread area usually can. Damage to the sidewall or shoulder, or a tyre that has been driven flat, needs replacing for safety." },
    ],
  },
  {
    slug: "mechanical-repairs",
    name: "Mechanical Repairs",
    metaTitle: "Car Repairs, Brakes & Diagnostics Oakleigh South",
    metaDescription: "Brake repairs, diagnostics, electrical, suspension, engine, welding and rust repairs plus pre-purchase inspections in Oakleigh South. All makes and models. Call 03 9548 9380.",
    eyebrow: "Mechanical repairs",
    h1: "Car Repairs & Brake Repairs in Oakleigh South",
    lead: "From a squealing brake to a warning light you can't figure out, our qualified mechanics diagnose it properly and fix it right.",
    image: photos.hero,
    imageAlt: "Mechanic repairing brakes on a car on a hoist in Oakleigh South",
    highlights: ["Honest diagnosis", "Quote before we start", "All makes and models"],
    bookAs: "Mechanical Repairs",
    sections: [
      { heading: "Repairs we handle", bullets: ["Brake repairs: pads, discs and lines", "Steering and suspension", "Engine repairs and tune-ups", "Transmission service", "Mufflers and exhaust systems", "Fuel system services", "Welding and rust repairs", "24-hour emergency towing"] },
      { id: "diagnostics", heading: "Diagnostics & electrical", paragraphs: ["Warning light on? Our computer diagnostics read the fault codes and we test the system properly, so you pay to fix the actual problem, not to guess at it. We repair wiring, starting and charging faults too."] },
      { id: "pre-purchase", heading: "Pre-purchase inspections", paragraphs: ["Buying a used car? We check it before you pay, so you know about faults and upcoming costs while you can still negotiate or walk away.", "See what's covered on our [pre-purchase inspection](/pre-purchase-inspection) page."] },
    ],
    faqs: [
      { q: "My check engine light is on. Can I keep driving?", a: "If it is steady, book in soon for a diagnostic. If it is flashing, or the car feels rough, stop driving and call us, since damage may be happening." },
      { q: "Do you repair rust?", a: "Yes. We do welding and rust repairs in-house, including structural rust that would fail a roadworthy." },
      { q: "Do you offer towing?", a: "Yes. 24-hour emergency towing is available. Call 03 9548 9380." },
    ],
  },
  {
    slug: "brake-repairs",
    name: "Brake Repairs",
    metaTitle: "Brake Repairs Oakleigh South | Pads, Discs & Brake Checks",
    metaDescription: "Brake checks, pad and disc replacement, calipers and brake fluid flushes in Oakleigh South. All makes and models. Call 03 9548 9380 for a quote.",
    eyebrow: "Brake repairs",
    h1: "Brake Repairs in Oakleigh South",
    lead: "Squealing, grinding or a soft pedal? We check your brakes, explain what we find and quote the repair before any work starts.",
    image: photos.cardBrakes,
    imageAlt: "Brake disc and caliper during a brake repair in Oakleigh South",
    highlights: ["Brake check & inspection", "Quote before we start", "All makes and models"],
    bookAs: "Brake Repairs",
    sections: [
      { heading: "Brake services we offer", bullets: ["Brake check and inspection", "Brake pad replacement", "Disc (rotor) machining and replacement", "Caliper repair and replacement", "Brake line and hose repairs", "Brake fluid flush", "Handbrake adjustment"] },
      { heading: "Signs your brakes need checking", paragraphs: ["Book a brake check if you notice any of these. Pads left too long can wear into the discs and turn a simple job into a bigger one."], bullets: ["Squealing or grinding when you brake", "Car pulls to one side under braking", "Soft or spongy brake pedal", "Vibration through the pedal or steering wheel", "Brake warning light on the dash"] },
      { heading: "Brakes and your roadworthy", paragraphs: ["Brakes are one of the items checked for a [roadworthy certificate](/roadworthy-certificate). If yours are worn or faulty, we repair them in our Oakleigh South workshop and re-check the car, so you don't need a second trip.", "Every brake job is quoted before we start. Call 03 9548 9380 for a quote on your car."] },
    ],
    faqs: [
      { q: "How often should I have my brakes checked?", a: "At every service, or sooner if you notice noise, vibration or a change in how the pedal feels. Pad wear depends on the car and how you drive, so there is no fixed kilometre figure." },
      { q: "Do I need new discs every time I replace the pads?", a: "Not always. If the discs are above the manufacturer's minimum thickness and not warped or badly scored, they can often be machined or reused. We measure them and tell you which applies before quoting." },
      { q: "Is it safe to drive with the brake warning light on?", a: "It depends on the cause. It can mean low brake fluid, worn pads or the handbrake still on. If the pedal feels soft or the car doesn't stop as it should, stop driving and call us on 03 9548 9380." },
    ],
  },
  {
    slug: "pre-purchase-inspection",
    name: "Pre-Purchase Inspections",
    metaTitle: "Pre-Purchase Car Inspection Oakleigh South",
    metaDescription: "Pre-purchase car inspections in Oakleigh South. Engine, brakes, suspension, rust and accident repairs checked before you buy. Call 03 9548 9380.",
    eyebrow: "Pre-purchase inspections",
    h1: "Pre-Purchase Car Inspections in Oakleigh South",
    lead: "Buying a used car? We inspect it before you pay, so you know about faults and upcoming costs while you can still negotiate or walk away.",
    image: photos.rwcInspection,
    imageAlt: "Mechanic inspecting a wheel and tyre during a pre-purchase car inspection",
    highlights: ["Checked before you pay", "Test drive included", "All makes and models"],
    bookAs: "Pre-Purchase Inspection",
    sections: [
      { heading: "What we check", bullets: ["Engine condition and leaks", "Transmission and driveline", "Brakes", "Suspension and steering", "Tyres and wheels", "Body and rust", "Signs of accident repair", "Electrical systems and warning lights", "Test drive"] },
      { heading: "Why get one before you buy", paragraphs: ["A used car can look and drive well on the day and still hide a costly problem. An inspection tells you about faults and upcoming costs while you can still negotiate on price or walk away.", "Arrange a time with the seller to bring the car to our Oakleigh South workshop. Call 03 9548 9380 for a quote."] },
      { heading: "Pre-purchase vs roadworthy", paragraphs: ["A [roadworthy certificate](/roadworthy-certificate) only confirms the car meets the minimum safety standard on the day it is inspected. It doesn't tell you about engine wear, transmission health or repairs that will soon be due.", "A pre-purchase inspection looks at the car's overall condition, so you know what you're buying. When you buy privately in Victoria, the seller normally supplies the roadworthy. The pre-purchase inspection is for you."] },
    ],
    faqs: [
      { q: "Can you inspect a car I'm buying from a private seller?", a: "Yes. Ask the seller to bring the car in, or bring it yourself with their permission. Call ahead so we can book a time that suits both of you." },
      { q: "What happens if you find problems?", a: "We explain what we found, how serious it is and what it would take to fix, so you can negotiate, ask the seller to fix it or walk away. You don't have to have the repairs done with us." },
      { q: "Does a pre-purchase inspection replace a roadworthy?", a: "No. A roadworthy is the safety certificate needed to transfer registration. A pre-purchase inspection is a broader condition check for your own peace of mind. Many buyers get both." },
    ],
  },
  {
    slug: "welding-rust-repairs",
    name: "Welding & Rust Repairs",
    metaTitle: "Welding & Rust Repairs Oakleigh South",
    metaDescription: "Welding and rust repairs in Oakleigh South: structural rust, chassis, sills, floor pans and exhaust welding, plus rust that fails an RWC. Call 03 9548 9380.",
    eyebrow: "Welding & rust repairs",
    h1: "Welding & Rust Repairs in Oakleigh South",
    lead: "Rust doesn't fix itself. We cut out corroded metal, weld in new steel and repair exhaust systems, all in-house.",
    image: photos.workshopTeam,
    imageAlt: "Cars on hoists in the Alfa Auto workshop for welding and rust repairs",
    highlights: ["Structural & chassis repairs", "Quote before we start", "Rust repairs for roadworthies"],
    bookAs: "Mechanical Repairs",
    sections: [
      { heading: "Rust and welding repairs we handle", paragraphs: ["We check how far the rust has spread before quoting, because surface rust and rust that has eaten through a structural panel are very different jobs."], bullets: ["Structural rust repairs", "Chassis repairs", "Sills and floor pans", "Exhaust welding and repairs", "Rust that fails a roadworthy"] },
      { heading: "Fix rust before it fails your RWC", paragraphs: ["Rust in structural areas such as sills, floor pans, chassis rails and suspension mounts is a common reason cars fail a [roadworthy inspection](/roadworthy-certificate). Repairing it early is usually simpler than waiting until the metal has rotted through.", "Already failed on rust? Bring the report in. We repair it in our Oakleigh South workshop and re-check the car for your roadworthy. Call 03 9548 9380 for a quote."] },
    ],
    faqs: [
      { q: "Can all rust be repaired?", a: "Most rust can be cut out and replaced with new metal. If corrosion has spread through a large part of the structure, the repair can cost more than the car is worth. We tell you that before you spend any money." },
      { q: "Will surface rust fail a roadworthy?", a: "Light surface rust on cosmetic panels usually won't. Rust in structural areas, or rust holes with sharp edges, can. If you're unsure, we can look at it before your inspection." },
      { q: "Do you repair exhausts?", a: "Yes. We weld and repair exhaust pipes, mufflers and mounts, and replace sections that are too far gone." },
    ],
  },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);

export const HOME_FAQS: Faq[] = [
  { q: "How much does a roadworthy certificate cost in Oakleigh South?", a: "It depends on the vehicle type. Call 03 9548 9380 for a fixed price on your car. If repairs are needed to pass, we quote them first and only start once you approve." },
  { q: "Can I get a roadworthy certificate the same day?", a: "Usually, yes. Most passenger car inspections take about an hour, and if the car passes you leave with the certificate the same day." },
  { q: "Can you do the repairs if my car fails?", a: "Yes. Brakes, tyres, suspension, lights, welding and rust repairs are all done in the same workshop, then the car is re-checked." },
  { q: "Will servicing with you void my new-car warranty?", a: "No. Any qualified mechanic can service your car to the logbook schedule. We use suitable parts and stamp your logbook." },
  { q: "Can I drop my car off after hours?", a: "Yes. Night drop-off is available. Call ahead so we know your car is coming and what you need." },
];
