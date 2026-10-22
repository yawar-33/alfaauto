import { SERVICE_CARDS } from "@/lib/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="reveal grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow">Our services</p>
            <h2 className="h-section mt-3">Everything Your Car Needs, Under One Roof</h2>
          </div>
          <p className="lead md:pb-1">From routine servicing to complex repairs, we provide complete automotive care with quality parts, experienced technicians and transparent pricing.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((s) => <div key={s.title} className="reveal flex"><ServiceCard {...s} /></div>)}
        </div>
      </div>
    </section>
  );
}
