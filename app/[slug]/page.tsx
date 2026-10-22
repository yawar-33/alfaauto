import { CircleCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingSection from "@/components/BookingSection";
import CTASection from "@/components/CTASection";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import RoadworthySection from "@/components/RoadworthySection";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { SERVICE_PAGES, getServicePage } from "@/lib/services";

// Every service page is pre-rendered at build time; unknown slugs 404.
export const dynamicParams = false;
export const generateStaticParams = () => SERVICE_PAGES.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };

// Turns inline [label](/path) links in section paragraphs into internal links.
const withLinks = (text: string) =>
  text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? <Link key={i} href={m[2]} className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-600">{m[1]}</Link> : part;
  });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getServicePage((await params).slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/${s.slug}` },
  };
}

export default async function ServicePageRoute({ params }: Props) {
  const s = getServicePage((await params).slug);
  if (!s) notFound();
  const others = SERVICE_PAGES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={[serviceSchema(s), breadcrumbSchema([{ name: s.name, path: `/${s.slug}` }]), faqSchema(s.faqs)]} />
      <PageHero eyebrow={s.eyebrow} title={s.h1} lead={s.lead} image={s.image} imageAlt={s.imageAlt} crumb={s.name} highlights={s.highlights} />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="grid gap-12">
            {s.sections.map((sec) => (
              <article key={sec.heading} id={sec.id} className="reveal scroll-mt-28">
                <h2 className="text-[clamp(1.6rem,2.6vw,2.2rem)]">{sec.heading}</h2>
                {sec.paragraphs?.map((p) => <p key={p} className="mt-4 max-w-[65ch] text-lg leading-relaxed text-steel-600">{withLinks(p)}</p>)}
                {sec.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {sec.bullets.map((b) => <li key={b} className="flex gap-3 font-semibold"><CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-gold-600" />{b}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card p-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em]">Other services</h2>
              <ul className="mt-4 divide-y divide-steel-200">
                {others.map((o) => <li key={o.slug}><Link href={`/${o.slug}`} className="flex min-h-12 items-center justify-between font-semibold hover:text-gold-600">{o.name}<span aria-hidden>→</span></Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {s.showChecklist && <RoadworthySection />}
      <FaqSection items={s.faqs} title={`${s.name} Questions`} />
      <BookingSection defaultService={s.bookAs} title={`Book ${s.name}`} />
      <CTASection />
    </>
  );
}
