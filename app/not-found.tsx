import Link from "next/link";
import PhoneText from "@/components/PhoneText";
import { BIZ } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section bg-steel-50">
      <div className="container-x max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="h-section mt-3">Page Not Found</h1>
        <p className="lead mt-4"><PhoneText text={`That page has moved. Head back home or call ${BIZ.phone} and we'll help.`} /></p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/contact" className="btn btn-outline-dark">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
